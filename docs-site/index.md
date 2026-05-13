---
layout: home

hero:
  name: "AI Hedge Fund"
  text: "多智能体投资决策系统"
  tagline: "基于 virattt/ai-hedge-fund 开源项目构建"
  image:
    src: /logo.svg
    alt: AI Hedge Fund Logo
  actions:
    - theme: brand
      text: 架构分析
      link: /architecture
    - theme: brand
      text: 快速开始
      link: /getting-started

features:
  - icon: 🏛️
    title: 架构概览
    details: LangGraph StateGraph 工作流，14位传奇投资人 Agent + 4大信号 Agent 协同决策
    link: /architecture
    linkText: 查看详情
  - icon: 👥
    title: 投资 Agent
    details: Warren Buffett、Charlie Munger、Peter Lynch 等14位传奇投资人角色扮演 Agent
    link: /agents
    linkText: 查看详情
  - icon: 📊
    title: 信号 Agent
    details: Valuation / Sentiment / Fundamentals / Technicals 四大量化信号分析
    link: /signals
    linkText: 查看详情
  - icon: 🛡️
    title: 风险管理
    details: Risk Manager 计算风险敞口，设置仓位上限，防止过度杠杆化
    link: /risk-management
    linkText: 查看详情
  - icon: 📈
    title: 组合管理
    details: Portfolio Manager 综合各方意见生成最终交易指令
    link: /portfolio-management
    linkText: 查看详情
  - icon: 💻
    title: CLI 与 Web
    details: 支持命令行终端交互和 Web 可视化界面两种运行模式
    link: /cli
    linkText: 查看详情
---
