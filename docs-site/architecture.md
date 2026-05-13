# 架构概览

> AI Hedge Fund 是一个基于 LangGraph 的多智能体投资决策系统。

## 系统架构

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LangGraph StateGraph                          │
│                                                                      │
│  ┌──────────┐    ┌─────────────┐    ┌──────────────┐   ┌─────────┐ │
│  │   Start  │───▶│  Analysts   │───▶│Risk Manager  │──▶│Portfolio│ │
│  │   Node   │    │  (14+4)    │    │              │   │ Manager │ │
│  └──────────┘    └─────────────┘    └──────────────┘   └────┬────┘ │
│                            │                       │          │       │
│                            │                       │          ▼       │
│                     ┌──────┴───────┐        ┌───────┴─────┐   END   │
│                     │  Analyst      │        │  Portfolio  │          │
│                     │  Signals     │        │  Decisions  │          │
│                     └──────────────┘        └─────────────┘          │
└─────────────────────────────────────────────────────────────────────┘
```

## 核心组件

### 1. AgentState (状态管理)

```python
class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]  # 消息历史
    data: Annotated[dict[str, any], merge_dicts]               # 分析数据
    metadata: Annotated[dict[str, any], merge_dicts]          # 元信息
```

### 2. 工作流程

| 阶段 | 组件 | 说明 |
|------|------|------|
| 1 | Start Node | 初始化工作流 |
| 2 | Analyst Nodes | 14位投资人 + 4信号 Agent 并行分析 |
| 3 | Risk Manager | 汇总风险敞口，设置仓位限制 |
| 4 | Portfolio Manager | 生成最终交易指令 |
| 5 | END | 输出交易决策 |

### 3. 数据流

```
输入: ticker list (AAPL, MSFT, NVDA)
         │
         ▼
┌─────────────────────────────────────────┐
│           Analyst Agents                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ Warren  │  │ Charlie │  │ Peter   │  │
│  │ Buffett │  │ Munger  │  │ Lynch   │  │
│  └────┬────┘  └────┬────┘  └────┬────┘  │
│       │            │            │        │
│  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐  │
│  │Valuation│  │Sentiment│  │Fundamen-│  │
│  │ Agent   │  │ Agent   │  │tals     │  │
│  └─────────┘  └─────────┘  └─────────┘  │
└─────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│           Risk Manager                   │
│  • 计算总风险敞口                        │
│  • 设置仓位上限                         │
│  • 防止过度杠杆化                       │
└─────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│         Portfolio Manager                │
│  • 综合所有 Agent 意见                  │
│  • 生成最终交易指令                     │
│  • 输出 JSON 决策                       │
└─────────────────────────────────────────┘
```

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| LLM 框架 | LangGraph | 状态图工作流 |
| LLM 支持 | OpenAI / Ollama | 支持本地和云端模型 |
| 数据源 | Financial Datasets API | 金融数据 |
| CLI | Questionary | 交互式命令行 |
| 可视化 | Matplotlib | 图表生成 |
| 部署 | Docker | 环境隔离 |

## 目录结构

```
ai-hedge-fund/
├── src/
│   ├── main.py              # CLI 入口
│   ├── backtester.py        # 回测引擎
│   ├── agents/              # 14 位投资人 Agent
│   │   ├── warren_buffett.py
│   │   ├── charlie_munger.py
│   │   └── ...
│   ├── signals/             # 4 大信号 Agent
│   │   ├── valuation.py
│   │   ├── sentiment.py
│   │   ├── fundamentals.py
│   │   └── technicals.py
│   ├── graph/
│   │   └── state.py        # AgentState 定义
│   ├── llm/
│   │   └── models.py       # LLM 配置
│   └── tools/              # 工具函数
├── app/                    # Web 应用
├── docker/                 # Docker 配置
└── tests/                  # 测试
```
