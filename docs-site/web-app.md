# Web 应用

> AI Hedge Fund 提供 Web 界面，方便可视化操作。

## 技术栈

| 组件 | 技术 | 说明 |
|------|------|------|
| 前端 | React | 用户界面 |
| 后端 | FastAPI | API 服务 |
| 状态管理 | React Query | 数据获取 |
| 图表 | Recharts | 可视化 |
| 部署 | Docker | 环境隔离 |

## Web 应用结构

```
app/
├── src/
│   ├── components/       # React 组件
│   │   ├── Dashboard/    # 仪表盘
│   │   ├── Analysis/    # 分析面板
│   │   └── Portfolio/   # 组合视图
│   ├── hooks/           # 自定义 Hooks
│   ├── services/        # API 调用
│   └── App.tsx          # 主组件
├── server/
│   └── main.py          # FastAPI 服务
└── package.json
```

## 运行 Web 应用

```bash
# 进入 app 目录
cd app

# 安装依赖
poetry install
npm install

# 启动开发服务器
npm run dev

# 或者使用 Docker
docker-compose up
```

## 功能特性

### 1. 仪表盘

```
┌──────────────────────────────────────────────────┐
│  AI Hedge Fund Dashboard                          │
├──────────────────────────────────────────────────┤
│  Portfolio Value    Daily Return    Risk Score   │
│  $125,430.00        +2.35%          0.45       │
├──────────────────────────────────────────────────┤
│  [Line Chart - Portfolio Performance]            │
│                                                  │
│  130k ┤    ╱╲                                    │
│       │   ╱  ╲      ╱╲                           │
│  125k │  ╱    ╲    ╱  ╲    ╱╲                   │
│       │ ╱      ╲  ╱    ╲  ╱  ╲                  │
│  120k ├────────────────────────────              │
│       Jan    Feb    Mar    Apr    May            │
├──────────────────────────────────────────────────┤
│  Positions                                      │
│  AAPL    LONG   100 shares   +5.2%              │
│  MSFT    LONG    50 shares   +3.8%              │
│  NVDA    LONG    30 shares   +12.1%             │
└──────────────────────────────────────────────────┘
```

### 2. 分析面板

- 查看各 Analyst 的信号和建议
- 对比不同股票的分析结果
- 显示置信度和关键指标

### 3. 组合视图

- 实时仓位展示
- 盈亏统计
- 风险指标监控

## API 端点

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/analyze` | POST | 分析股票 |
| `/api/portfolio` | GET | 获取组合状态 |
| `/api/orders` | POST | 下单交易 |
| `/api/history` | GET | 历史记录 |

## 截图

![Web Application](https://github.com/user-attachments/assets/b95ab696-c9f4-416c-9ad1-51feb1f5374b.png)
