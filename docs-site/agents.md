# 投资 Agent

> 14 位传奇投资人 Agent，每个 Agent 都扮演其投资风格和理念。

## Agent 一览

| Agent | 投资风格 | 核心理念 |
|-------|---------|---------|
| Warren Buffett | 价值投资 | 优质公司、合理价格 |
| Charlie Munger | 价值投资 | 卧倒不动、长期持有 |
| Peter Lynch | 成长投资 | 十倍股原则 |
| Benjamin Graham | 价值投资 | 安全边际 |
| Philip Fisher | 成长投资 | scuttlebutt 研究 |
| Bill Ackman | 激进投资 | 主动干预、推动变革 |
| Cathie Wood | 破坏式创新 | ARK 投资理念 |
| Michael Burry | 逆向投资 | 深挖价值 |
| Nassim Taleb | 风险分析 | 黑天鹅、反脆弱 |
| Stanley Druckenmiller | 宏观对冲 | 非对称机会 |
| Mohnish Pabrai | 价值投资 | Dhandho 投资法 |
| Rakesh Jhunjhunwala | 成长价值 | 印度股神 |
| Aswath Damodaran | 估值专家 | 绝对估值 |
| Ben Graham | 深度价值 | 捡烟蒂 |

## 详细说明

### Warren Buffett Agent

**Oracle of Omaha** — 寻找伟大公司，以合理价格买入并长期持有。

```
核心理念：
• 只买你能理解业务的公司
• 价格是你支付的，价值是你得到的
• 别人贪婪时恐惧，别人恐惧时贪婪
```

### Peter Lynch Agent

**Tenbagger Hunter** — 在日常生活中发现十倍股。

```
核心理念：
• 投资你日常接触的公司
• 了解公司的产品和服务
• 不要忽视小公司
```

### Nassim Taleb Agent

**Black Swan Analyst** — 关注尾部风险，追求反脆弱。

```
核心理念：
• 关注极端事件的影响
• 避免长期暴露于黑天鹅风险
• 寻找非对称回报机会
```

### Michael Burry Agent

**Contrarian Value Hunter** — 深挖被市场忽视的价值。

```
核心理念：
• 深入研究财务报表
• 寻找被低估的隐蔽资产
• 耐心等待价值回归
```

## Agent 配置

```python
# 获取所有 Agent 节点
from src.utils.analysts import get_analyst_nodes

analyst_nodes = get_analyst_nodes()
# 返回: {"buffett": ("warren_buffett", warren_buffett_agent), ...}

# 选择性运行部分 Agent
workflow = create_workflow(selected_analysts=["buffett", "lynch", "graham"])
```

## 信号输出

每个 Agent 输出格式：

```json
{
  "signal": "bullish|bearish|neutral",
  "confidence": 0.0-1.0,
  "reasoning": "分析逻辑",
  "position": {
    "action": "buy|sell|hold",
    "size": "small|medium|large"
  },
  "key_metrics": {
    "margin_of_safety": 0.3,
    "intrinsic_value": 150.0,
    "current_price": 120.0
  }
}
```
