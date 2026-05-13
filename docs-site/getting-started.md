# 快速开始

> 5 分钟快速上手 AI Hedge Fund。

## 环境要求

| 要求 | 说明 |
|------|------|
| Python | 3.10+ |
| Poetry | 1.4+ |
| API Key | OpenAI 或其他 LLM 提供商 |

## 安装步骤

### 1. 克隆项目

```bash
git clone https://github.com/virattt/ai-hedge-fund.git
cd ai-hedge-fund
```

### 2. 安装依赖

```bash
# 安装 Poetry (如果未安装)
curl -sSL https://install.python-poetry.org | python3 -

# 安装项目依赖
poetry install
```

### 3. 配置 API 密钥

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑 .env 文件，添加你的 API 密钥
vim .env
```

```bash
# 至少需要配置一个 LLM API 密钥
OPENAI_API_KEY=sk-your-openai-key
# 或
ANTHROPIC_API_KEY=sk-ant-your-key
# 或
DEEPSEEK_API_KEY=your-deepseek-key
```

### 4. 运行分析

```bash
# 分析单个股票
poetry run python src/main.py --ticker AAPL

# 分析多个股票
poetry run python src/main.py --ticker AAPL,MSFT,NVDA

# 使用本地 Ollama 模型
poetry run python src/main.py --ticker AAPL --ollama
```

## 常见问题

### Q: 提示 "No LLM API key found"

确保 `.env` 文件中至少有一个有效的 API 密钥：

```bash
# 检查 .env 配置
cat .env | grep API_KEY
```

### Q: 依赖安装失败

```bash
# 使用 pip 安装依赖
poetry env use python 3.10
poetry install --no-interaction
```

### Q: Ollama 连接失败

确保 Ollama 服务正在运行：

```bash
# 启动 Ollama
ollama serve

# 列出可用模型
ollama list
```

## 下一步

- [架构概览](/architecture) - 深入了解系统设计
- [投资 Agent](/agents) - 查看 14 位投资人 Agent
- [CLI 使用](/cli) - 掌握命令行用法
- [Web 应用](/web-app) - 使用可视化界面
