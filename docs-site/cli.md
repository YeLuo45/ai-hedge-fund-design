# CLI 使用

> 通过命令行终端运行 AI Hedge Fund 系统。

## 快速开始

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/virattt/ai-hedge-fund.git
cd ai-hedge-fund

# 安装 Poetry (如果未安装)
curl -sSL https://install.python-poetry.org | python3 -

# 安装依赖
poetry install
```

### 运行系统

```bash
# 基本用法 - 分析多个股票
poetry run python src/main.py --ticker AAPL,MSFT,NVDA

# 使用本地 Ollama 模型
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --ollama

# 指定日期范围
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --start-date 2024-01-01 --end-date 2024-03-01

# 显示详细推理过程
poetry run python src/main.py --ticker AAPL,MSFT,NVDA --show-reasoning
```

## 命令行参数

| 参数 | 说明 | 示例 |
|------|------|------|
| `--ticker` | 股票代码（逗号分隔） | `--ticker AAPL,MSFT,NVDA` |
| `--ollama` | 使用本地 Ollama 模型 | `--ollama` |
| `--start-date` | 分析开始日期 | `--start-date 2024-01-01` |
| `--end-date` | 分析结束日期 | `--end-date 2024-03-01` |
| `--show-reasoning` | 显示 Agent 推理过程 | `--show-reasoning` |
| `--model-name` | 指定 LLM 模型 | `--model-name gpt-4` |
| `--model-provider` | LLM 提供商 | `--model-provider OpenAI` |

## 回测

```bash
# 运行回测
poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA

# 带日期范围的回测
poetry run python src/backtester.py --ticker AAPL,MSFT,NVDA --start-date 2023-01-01 --end-date 2024-01-01
```

## 环境配置

创建 `.env` 文件配置 API 密钥：

```bash
# 复制示例配置
cp .env.example .env
```

编辑 `.env`：

```bash
# OpenAI API (GPT-4o, GPT-4o-mini 等)
OPENAI_API_KEY=sk-...

# 金融数据 API
FINANCIAL_DATASETS_API_KEY=your-key

# 其他可选 LLM 提供商
GROQ_API_KEY=your-key
ANTHROPIC_API_KEY=your-key
DEEPSEEK_API_KEY=your-key
```

## 输出示例

```
========================================
      AI HEDGE FUND ANALYSIS
========================================

  Tickers:      AAPL, MSFT, NVDA
  Date Range:   2024-01-01 to 2024-03-01
  Model:        gpt-4o (OpenAI)

----------------------------------------
  ANALYST SIGNALS
----------------------------------------
  [Warren Buffett]    BUY  - Moat: Wide, Price: Fair
  [Charlie Munger]    BUY  - Quality: Excellent
  [Peter Lynch]       BUY  - Growth: Strong
  ...

----------------------------------------
  PORTFOLIO DECISIONS
----------------------------------------
  AAPL    BUY   50 shares  @ market
  MSFT    HOLD
  NVDA    BUY  100 shares  @ market

========================================
```
