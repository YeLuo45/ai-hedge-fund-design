# AI Hedge Fund Design Specification

## 1. 项目概述

| 属性 | 值 |
|------|-----|
| 项目名称 | ai-hedge-fund-design |
| 上游项目 | virattt/ai-hedge-fund |
| 项目类型 | 设计文档站 (VitePress) |
| 部署平台 | GitHub Pages |
| 部署 URL | https://yeluo45.github.io/ai-hedge-fund-design/ |

## 2. 设计目标

- 完整记录 AI Hedge Fund 系统的架构设计
- 文档化 14 位投资 Agent 的角色和输出格式
- 说明 4 大信号 Agent 的分析方法
- 解释 Risk Manager 和 Portfolio Manager 的协作流程

## 3. 文档结构

```
docs-site/
├── index.md              # 首页 (VitePress home layout)
├── architecture.md       # 架构概览
├── agents.md            # 投资 Agent 详解
├── signals.md           # 信号 Agent 详解
├── risk-management.md   # 风险管理
├── portfolio-management.md # 组合管理
├── cli.md              # CLI 使用指南
├── web-app.md          # Web 应用说明
├── getting-started.md  # 快速开始
└── .vitepress/
    ├── config.mjs      # VitePress 配置 (base: /ai-hedge-fund-design/)
    ├── theme/
    │   ├── index.js    # 主题入口
    │   └── style.css   # 暗色主题 (金/绿色调)
    └── public/
        └── logo.svg    # Logo
```

## 4. 视觉设计

### 4.1 主题配色

| 用途 | 颜色 |
|------|------|
| 背景 | #0a0f14 (深色) |
| 强调色 | #f0b429 (金色) |
| 成功色 | #4ade80 (绿色) |
| 文字主色 | #e8edf3 |
| 文字次色 | #a8b5c4 |

### 4.2 字体

- 系统默认字体
- 代码块: 等宽字体

## 5. 技术选型

| 组件 | 选型 | 版本 |
|------|------|------|
| 文档引擎 | VitePress | ^1.3.4 |
| 节点 | Node.js | 20 |
| 部署 | GitHub Actions | workflow mode |

## 6. 内容模块

### 6.1 架构概览

- StateGraph 工作流图
- AgentState 定义
- 数据流说明
- 技术栈表格

### 6.2 投资 Agent

- 14 位投资人表格
- Warren Buffett、Peter Lynch 等详细说明
- Agent 配置和信号输出格式

### 6.3 信号 Agent

- Valuation Agent (DCF 等估值方法)
- Sentiment Agent (情绪分析)
- Fundamentals Agent (基本面)
- Technicals Agent (技术指标)

### 6.4 风险管理

- 仓位限制表
- 风险阈值配置
- 保证金管理
- 风险缓解策略

### 6.5 组合管理

- 决策流程图
- 交易指令 JSON 格式
- 决策算法说明
- Kelly Criterion 仓位分配

## 7. 部署配置

### 7.1 GitHub Actions

- workflow mode
- pnpm install + build
- artifact: .vitepress/dist

### 7.2 触发条件

- push to master/main
- manual workflow_dispatch

## 8. 验收标准

- [x] 首页 https://yeluo45.github.io/ai-hedge-fund-design/ HTTP 200
- [x] 8 个文档页面全部可访问
- [x] 导航栏链接全部正确
- [x] 暗色主题正常显示
- [x] Logo 和静态资源正常加载
