# 组合管理

> Portfolio Manager 是系统的最终决策者，综合所有输入生成交易指令。

## 组合管理职责

```python
# Portfolio Manager 的核心职责
• 收集所有 Analyst 和 Risk Manager 的输出
• 综合评估生成最终交易决策
• 生成结构化的交易指令
• 考虑组合整体优化而非单一标的
```

## 决策流程

```
所有 Agent 信号 ──▶ 综合评分 ──▶ 风险调整 ──▶ 最终决策
                         │               │
                         ▼               ▼
                   ┌─────────┐      ┌──────────┐
                   │ 权重    │      │ 仓位    │
                   │ 计算    │      │ 限制    │
                   └─────────┘      └──────────┘
                         │               │
                         └───────┬───────┘
                                 ▼
                         ┌─────────────┐
                         │ 交易指令    │
                         │ (JSON)     │
                         └─────────────┘
```

## 交易指令格式

```json
{
  "portfolio": {
    "cash": 50000.0,
    "margin_used": 15000.0,
    "positions": {
      "AAPL": {
        "long": 100,
        "short": 0,
        "long_cost_basis": 17500.0,
        "short_cost_basis": 0
      }
    }
  },
  "orders": [
    {
      "action": "buy",
      "ticker": "AAPL",
      "quantity": 50,
      "reason": "undervalued + positive sentiment"
    },
    {
      "action": "sell",
      "ticker": "MSFT",
      "quantity": 25,
      "reason": "overvalued + negative technicals"
    }
  ],
  "decisions": [
    {
      "ticker": "AAPL",
      "signal": "buy",
      "confidence": 0.85,
      "analysts": ["buffett", "lynch", "graham"],
      "risk_level": "medium"
    }
  ],
  "summary": {
    "total_signals": 18,
    "bullish": 14,
    "bearish": 2,
    "neutral": 2,
    "risk_score": 0.45
  }
}
```

## 决策算法

### 1. 信号聚合

```python
def aggregate_signals(analyst_signals):
    """
    综合所有 Agent 的信号
    """
    scores = {}
    for ticker, signals in analyst_signals.items():
        # 加权平均，考虑置信度
        weighted_score = sum(
            signal['confidence'] * signal['value']
            for signal in signals
        ) / sum(signal['confidence'] for signal in signals)

        # 多数投票
        vote = majority_vote([s['action'] for s in signals])

        scores[ticker] = {
            'score': weighted_score,
            'vote': vote,
            'confidence': mean([s['confidence'] for s in signals])
        }

    return scores
```

### 2. 仓位分配

```python
def allocate_positions(scores, portfolio_value):
    """
    基于信号分数分配仓位
    """
    allocations = {}

    # 按分数排序
    sorted_tickers = sorted(scores.items(), key=lambda x: x[1]['score'], reverse=True)

    # Kelly Criterion 简化版
    for ticker, score in sorted_tickers:
        if score['vote'] == 'buy' and score['confidence'] > 0.6:
            # 更高置信度 = 更大仓位
            position_size = min(
                score['confidence'] * MAX_POSITION,
                MAX_POSITION
            )
            allocations[ticker] = position_size

    return allocations
```

### 3. 最终优化

```python
def optimize_portfolio(allocations, risk_metrics):
    """
    最终组合优化
    """
    # 检查风险约束
    for ticker, size in allocations.items():
        # 风险调整
        risk_adj_size = size * (1 - risk_metrics.get(ticker, 0))

        # 应用限制
        allocations[ticker] = min(
            risk_adj_size,
            MAX_POSITION,
            MAX_RISK_ADJUSTED_SIZE
        )

    return allocations
```

## 输出示例

```
========================================
      PORTFOLIO MANAGEMENT DECISION
========================================

  Portfolio Value:     $100,000.00
  Cash:                $20,000.00
  Margin Used:          $15,000.00

----------------------------------------
  CURRENT POSITIONS
----------------------------------------
  AAPL    LONG  100 shares  @ $175.00
  MSFT    LONG   50 shares  @ $380.00
  NVDA    LONG   30 shares  @ $450.00

----------------------------------------
  NEW ORDERS
----------------------------------------
  BUY  AAPL   50 shares  @ market
  SELL MSFT   25 shares  @ market
  HOLD NVDA

----------------------------------------
  SIGNAL SUMMARY
----------------------------------------
  Analysts:   14 bullish, 2 bearish
  Signals:    BUY (3/4 positive)
  Risk:       MEDIUM (score: 0.45)
  Confidence: HIGH (85%)

========================================
```
