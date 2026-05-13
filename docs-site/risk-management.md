# 风险管理

> Risk Manager 是系统的守门人，负责控制整体风险敞口。

## 风险管理职责

```python
# Risk Manager 的核心职责
• 汇总所有 Analyst 的风险敞口建议
• 设置单个标的的最大仓位限制
• 计算整体组合的杠杆率
• 防止超过预设的风险阈值
```

## 风险指标

### 1. 仓位限制

| 风险类型 | 最大限制 | 说明 |
|---------|---------|------|
| 单标的做多 | 25% | 单只股票不超过组合 25% |
| 单标的做空 | 15% | 做空仓位有更高限制 |
| 总做空仓位 | 40% | 防止过度做空 |
| 杠杆率 | 2x | 总资产不超过 2 倍 |

### 2. 风险阈值

```python
# 风险阈值配置
MAX_POSITION_SIZE = 0.25      # 单标的最大仓位 25%
MAX_SHORT_SIZE = 0.15        # 单标的做空最大 15%
MAX_TOTAL_SHORT = 0.40       # 总做空最大 40%
MAX_LEVERAGE = 2.0           # 最大杠杆 2x
VAR_CONFIDENCE = 0.95        # 95% VaR 置信度
MAX_DRAWDOWN = 0.20          # 最大回撤 20%
```

### 3. 保证金管理

```python
# 保证金要求
MARGIN_REQUIREMENT = 0.50    # 50% 初始保证金
MAINTENANCE_MARGIN = 0.25    # 25% 维持保证金
SHORT_MARGIN_PREMIUM = 0.10  # 做空额外保证金
```

## 风险管理流程

```
输入: 各 Analyst 的仓位建议
         │
         ▼
┌─────────────────────────────────────────┐
│           Risk Check Pipeline            │
│                                         │
│  1. 汇总所有仓位建议                     │
│  2. 检查单标的限制                       │
│  3. 检查总仓位限制                       │
│  4. 计算杠杆率                           │
│  5. 检查保证金充足性                     │
│  6. 调整/拒绝超限仓位                    │
└─────────────────────────────────────────┘
         │
         ▼
输出: 风险调整后的仓位建议
```

## 风险信号

```json
{
  "risk_status": "green|yellow|red",
  "total_exposure": 0.85,
  "long_exposure": 0.65,
  "short_exposure": 0.20,
  "leverage": 1.45,
  "margin_used": 0.35,
  "warnings": [],
  "adjusted_positions": {
    "AAPL": {
      "original": 0.30,
      "adjusted": 0.25,
      "reason": "exceeds_max_position"
    }
  }
}
```

## 风险缓解策略

| 策略 | 说明 |
|------|------|
| 分散化 | 单标的仓位上限防止集中风险 |
| 对冲 | 做空仓位可对冲多头风险 |
| 止损 | 设置自动止损线 |
| 保证金缓冲 | 保持充足保证金避免强平 |

## 与其他 Agent 的交互

```
Analysts ──────▶ Risk Manager ──────▶ Portfolio Manager
                      │
                      ▼
               ┌─────────────┐
               │  Position   │
               │  Limits     │
               │  Checks     │
               └─────────────┘
```
