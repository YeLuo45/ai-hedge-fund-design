# 信号 Agent

> 4 大量化信号分析 Agent，提供客观的数量化分析视角。

## 信号 Agent 一览

| Agent | 功能 | 输入数据 |
|-------|------|---------|
| Valuation Agent | 计算内在价值 | 财务数据、现金流 |
| Sentiment Agent | 市场情绪分析 | 新闻、社交媒体 |
| Fundamentals Agent | 基本面分析 | 财务报表、比率 |
| Technicals Agent | 技术指标分析 | 价格、成交量 |

## Valuation Agent

计算股票的内在价值，与当前价格比较生成信号。

```python
# 估值方法
- DCF (Discounted Cash Flow) 折现现金流
- Dividend Discount Model 分红折现
- Relative Valuation 相对估值
- Graham Formula 格雷厄姆公式
```

**输出信号：**
```json
{
  "signal": "undervalued|fair|overvalued",
  "intrinsic_value": 150.0,
  "current_price": 120.0,
  "upside": 0.25,
  "method": "DCF"
}
```

## Sentiment Agent

分析新闻、社交媒体和研究报告中的情绪倾向。

```python
# 情绪指标
- 新闻情绪得分 (-1 到 +1)
- 社交媒体提及量变化
- 分析师评级趋势
- 机构持仓变化
```

**输出信号：**
```json
{
  "signal": "positive|neutral|negative",
  "sentiment_score": 0.65,
  "news_count": 45,
  "social_mentions": 1200,
  "key_themes": ["AI", "growth", "earnings"]
}
```

## Fundamentals Agent

分析财务报表和关键比率，评估公司基本面质量。

```python
# 分析维度
- 盈利能力 (ROE, ROA, 毛利率)
- 成长性 (营收增长, 利润增长)
- 财务健康 (负债率, 流动比率)
- 现金流 (经营现金流, 自由现金流)
```

**输出信号：**
```json
{
  "signal": "strong|neutral|weak",
  "pe_ratio": 22.5,
  "peg_ratio": 1.2,
  "debt_to_equity": 0.45,
  "roe": 0.18,
  "revenue_growth": 0.15
}
```

## Technicals Agent

分析价格图表和技术指标，识别趋势和买卖信号。

```python
# 技术指标
- 移动平均线 (MA5, MA20, MA50, MA200)
- RSI (相对强弱指数)
- MACD (异同移动平均线)
- 布林带 (Bollinger Bands)
- 支撑/阻力位
```

**输出信号：**
```json
{
  "signal": "bullish|neutral|bearish",
  "rsi": 58.5,
  "macd": "bullish_crossover",
  "ma_trend": "uptrend",
  "support": 118.0,
  "resistance": 155.0
}
```

## 信号汇总

所有信号 Agent 的输出汇总到 Portfolio Manager：

```
┌──────────────────────────────────────────────────┐
│                 Signal Summary                    │
├──────────────────────────────────────────────────┤
│ Valuation:      ✅ BUY (upside 25%)             │
│ Sentiment:      ✅ POSITIVE (score: 0.65)       │
│ Fundamentals:   ✅ STRONG (ROE: 18%)             │
│ Technicals:     ⚠️ NEUTRAL (RSI: 58.5)         │
├──────────────────────────────────────────────────┤
│ Overall:        BUY (3/4 positive signals)       │
└──────────────────────────────────────────────────┘
```
