# BizSidekick

[全部支持语言](README.md) · [English](../../README.md)

BizSidekick 面向 Codex、Claude 和 WorkBuddy 的公共插件市场。该插件连接到托管在
`https://mcp.bustly.ai/mcp` 的 Bustly MCP 服务；本仓库不包含任何服务商凭据、
商家数据、MCP 服务源代码或部署密钥。

## Codex 桌面版

将以下内容粘贴到 Codex 桌面版任务中：

```text
使用 Codex 原生插件市场添加 `BizSidekick-AI/bizsidekick`，并仅在需要时安装 BizSidekick；不要在浏览器中打开或阅读仓库。优先复用已有登录。如果授权无需账号设置即可完成，请验证连接，并自动创建和打开一个新的 BizSidekick Task，查询我的店铺和最近商品；如果需要登录、注册或完成 BizSidekick onboarding，请保留当前安装 Task，提示我在浏览器完成后回复“可以继续”，然后验证授权并创建 Task。
```

CLI 备用方式：

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

将以下内容粘贴到 Claude Code session 中：

```text
使用 Claude Code 原生插件市场添加 `BizSidekick-AI/bizsidekick`，并仅在需要时安装 `bizsidekick@bizsidekick`；不要在浏览器中打开或阅读仓库。保留已有登录，新安装后只执行一次 `/reload-plugins`。如果授权无需账号设置即可完成，请在当前 session 中自动开始一个只读 BizSidekick 任务，查询我的店铺和最近商品；如果需要登录、注册或完成 BizSidekick onboarding，请保留当前 session，提示我在浏览器完成后回复“可以继续”，然后验证授权并开始任务。
```

CLI 备用方式：

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy 桌面版

将以下内容粘贴到 WorkBuddy 桌面版对话中：

```text
使用 WorkBuddy 原生插件市场添加 `BizSidekick-AI/bizsidekick`，并仅在需要时安装 `bizsidekick@bizsidekick`；不要在浏览器中打开或阅读仓库。保留已有登录，新安装后只执行一次 `/reload-plugins`。如果授权无需账号设置即可完成，请在当前会话中自动开始一个只读 BizSidekick 任务，查询我的店铺和最近商品；如果需要登录、注册或完成 BizSidekick onboarding，请保留当前会话，提示我在浏览器完成后回复“可以继续”，然后验证授权并开始任务。
```

CLI 备用方式：

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

新安装后只在 WorkBuddy 中执行一次 `/reload-plugins`。Marketplace 插件负责 BizSidekick MCP 配置和 OAuth
跳转；不要覆盖其他 MCP 配置。

## 安全模型

- Google/Bustly 登录通过浏览器 OAuth 完成。工作区选择在业务任务中进行。
- 用户范围的 OAuth 授权受当前 Bustly 成员权限限制；一个任务只绑定一个工作区。
- 未限定店铺范围的读取操作会覆盖该工作区中所有处于活跃状态且用户有权访问的连接，无需确认。
- 所有变更操作都会先生成预览，并且只有在明确批准后才会执行。
- 高风险操作需要输入指定内容进行确认。
- 服务商凭据绝不会进入 MCP 客户端或本仓库。
- 插件 Skills 和 MCP 工具描述属于公开的集成产物，并非安全边界；其中只包含产品行为，不包含桌面端系统提示词、商家数据或凭据。
