# BizSidekick

[所有支援語言](README.md) · [English](../../README.md)

BizSidekick 是供 Codex、Claude 與 WorkBuddy 使用的公開外掛市集。外掛會連線至託管於
`https://mcp.bustly.ai/mcp` 的 Bustly MCP 服務；本儲存庫不包含服務供應商憑證、
商家資料、MCP 服務原始碼或部署機密。

## Codex 桌面版

將以下內容貼到 Codex 桌面版工作中：

```text
使用 Codex 原生外掛市集加入 `BizSidekick-AI/bizsidekick`，並只在需要時安裝 BizSidekick；不要在瀏覽器中開啟或讀取儲存庫。優先沿用現有登入。如果授權不需要帳號設定即可完成，請驗證連線，並自動建立及開啟一個新的 BizSidekick Task，查詢我的商店和最近商品；如果需要登入、註冊或完成 BizSidekick onboarding，請保留目前的安裝 Task，提示我在瀏覽器完成後回覆「可以繼續」，再驗證授權並建立 Task。
```

CLI 備用方式：

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

將以下內容貼到 Claude Code session：

```text
使用 Claude Code 原生外掛市集加入 `BizSidekick-AI/bizsidekick`，並只在需要時安裝 `bizsidekick@bizsidekick`；不要在瀏覽器中開啟或讀取儲存庫。保留現有登入，新安裝後只執行一次 `/reload-plugins`。如果授權不需要帳號設定即可完成，請在目前 session 自動開始只讀 BizSidekick 任務，查詢我的商店和最近商品；如果需要登入、註冊或完成 BizSidekick onboarding，請保留目前 session，提示我在瀏覽器完成後回覆「可以繼續」，再驗證授權並開始任務。
```

CLI 備用方式：

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy 桌面版

將以下內容貼到 WorkBuddy 桌面版對話：

```text
使用 WorkBuddy 原生外掛市集加入 `BizSidekick-AI/bizsidekick`，並只在需要時安裝 `bizsidekick@bizsidekick`；不要在瀏覽器中開啟或讀取儲存庫。保留現有登入，新安裝後只執行一次 `/reload-plugins`。如果授權不需要帳號設定即可完成，請在目前對話自動開始只讀 BizSidekick 任務，查詢我的商店和最近商品；如果需要登入、註冊或完成 BizSidekick onboarding，請保留目前對話，提示我在瀏覽器完成後回覆「可以繼續」，再驗證授權並開始任務。
```

CLI 備用方式：

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

新安裝後只在 WorkBuddy 中執行一次 `/reload-plugins`。Marketplace 外掛負責 BizSidekick MCP 設定和 OAuth
跳轉；不要覆蓋其他 MCP 設定。

## 安全模型

- Google/Bustly 登入會透過瀏覽器 OAuth 完成，工作區則在商業工作中選取。
- 使用者範圍的 OAuth 授權受目前 Bustly 成員資格限制；每個工作只綁定一個工作區。
- 未指定商店的讀取會涵蓋該工作區中所有有效且可存取的連線，不需要確認。
- 所有變更都會先顯示預覽，只有在明確核准後才會套用。
- 高風險操作需要輸入指定的確認文字。
- 服務供應商憑證絕不會傳送至 MCP 用戶端或儲存在本儲存庫中。
- 外掛 Skills 與 MCP 工具說明是公開的整合內容，不是安全邊界；其中不含桌面系統提示、商家資料或憑證。
