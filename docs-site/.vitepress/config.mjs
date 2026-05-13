import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AI Hedge Fund Design",
  description: "AI Hedge Fund 架构设计文档站 - 多智能体投资系统",
  lang: "zh-CN",
  base: "/ai-hedge-fund-design/",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "首页", link: "/" },
      { text: "架构概览", link: "/architecture" },
      { text: "投资 Agent", link: "/agents" },
      { text: "信号 Agent", link: "/signals" },
      { text: "风险管理", link: "/risk-management" },
      { text: "组合管理", link: "/portfolio-management" },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          { text: "首页", link: "/" },
          { text: "架构概览", link: "/architecture" },
          { text: "投资 Agent", link: "/agents" },
          { text: "信号 Agent", link: "/signals" },
          { text: "风险管理", link: "/risk-management" },
          { text: "组合管理", link: "/portfolio-management" },
          { text: "CLI 使用", link: "/cli" },
          { text: "Web 应用", link: "/web-app" },
          { text: "快速开始", link: "/getting-started" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/YeLuo45/ai-hedge-fund-design" },
    ],

    footer: {
      message: "基于 virattt/ai-hedge-fund 开源项目构建",
      copyright: "Copyright © 2025-present AI Hedge Fund Contributors",
    },
  },
});
