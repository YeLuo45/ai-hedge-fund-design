# AI Hedge Fund Design

AI Hedge Fund 架构设计文档站，基于 [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) 开源项目。

## 系统概述

AI Hedge Fund 是一个基于 LangGraph 的多智能体投资决策系统，模拟 14 位传奇投资人的分析风格，结合 4 大量化信号生成投资决策。

## 核心架构

- **14 位投资 Agent**: Warren Buffett、Charlie Munger、Peter Lynch 等
- **4 大信号 Agent**: Valuation、Sentiment、Fundamentals、Technicals
- **风险管理**: Risk Manager 控制仓位和杠杆
- **组合管理**: Portfolio Manager 生成最终交易指令

## 文档导航

- [首页](https://yeluo45.github.io/ai-hedge-fund-design/) - 系统概览
- [架构分析](https://yeluo45.github.io/ai-hedge-fund-design/architecture) - 完整架构
- [投资 Agent](https://yeluo45.github.io/ai-hedge-fund-design/agents) - 14 位投资人
- [信号 Agent](https://yeluo45.github.io/ai-hedge-fund-design/signals) - 量化信号
- [风险管理](https://yeluo45.github.io/ai-hedge-fund-design/risk-management) - 风险控制
- [组合管理](https://yeluo45.github.io/ai-hedge-fund-design/portfolio-management) - 决策生成

## 技术栈

| 组件 | 技术 |
|------|------|
| LLM 框架 | LangGraph |
| LLM 支持 | OpenAI / Ollama |
| 数据源 | Financial Datasets API |
| CLI | Questionary |
| Web | React + FastAPI |
| 部署 | Docker |

## License

MIT License - Educational Purposes Only
