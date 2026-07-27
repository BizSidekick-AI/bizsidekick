# BizSidekick

[Languages / 语言](docs/i18n/README.md) · [简体中文](docs/i18n/README.zh-CN.md) · [繁體中文](docs/i18n/README.zh-TW.md) · [日本語](docs/i18n/README.ja.md) · [한국어](docs/i18n/README.ko.md)

[BizSidekick official website](https://www.bizsidekick.app/)

Public plugin marketplace for using BizSidekick from Codex, Claude, and WorkBuddy. It connects to a
hosted MCP service; this repository contains no provider credentials, merchant data, service source
code, or deployment secrets.

Current capabilities include multi-store commerce reads, privacy-minimized Shopify customer and
order analysis, governed Shopify product and discount changes, governed Klaviyo draft campaigns
and single-recipient test sends, advertising reads, and a high-risk confirmation flow for pausing
one exact Meta campaign.

## Public package boundary

Everything in this repository is intentionally public. Plugin Skills are distributable behavior
contracts, not secrets or an authorization boundary. Authorization, mutation validation, native
confirmation, idempotency, and audit enforcement remain server-side in Bustly.

Published plugin files are limited to marketplace and plugin manifests, the production MCP endpoint,
and the public Skills required by Codex, Claude, and WorkBuddy. Pull requests run a static package validator that
rejects unexpected plugin files, mismatched versions, non-production endpoints, and common
credential or customer-identifier patterns.

## Codex desktop

Paste this into a Codex desktop task:

```text
Use Codex's custom plugin marketplace to add `BizSidekick-AI/bizsidekick` and install BizSidekick if needed. Do not open or read the repository in a browser. Reuse my existing sign-in. If authorization completes without account setup, verify the connection and automatically create and open one new BizSidekick task that shows my stores and recent products. If login, registration, or BizSidekick onboarding is required, keep this installation task open, ask me to finish in the browser and reply `Continue`, then verify authorization and create the task.
```

CLI fallback:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Paste this into a Claude Code session:

```text
Use Claude Code's custom plugin marketplace to add `BizSidekick-AI/bizsidekick` and install `bizsidekick@bizsidekick` if needed. Do not open or read the repository in a browser. Preserve my existing sign-in and run `/reload-plugins` once after a new install. If authorization completes without account setup, continue in this session and automatically start a read-only BizSidekick task that shows my stores and recent products. If login, registration, or BizSidekick onboarding is required, keep this session open, ask me to finish in the browser and reply `Continue`, then verify authorization and start the task.
```

CLI fallback:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy desktop

Paste this into a WorkBuddy desktop conversation:

```text
Use WorkBuddy's custom plugin marketplace to add `BizSidekick-AI/bizsidekick` and install `bizsidekick@bizsidekick` if needed. Do not open or read the repository in a browser. Preserve my existing sign-in and run `/reload-plugins` once after a new install. If authorization completes without account setup, continue in this conversation and automatically start a read-only BizSidekick task that shows my stores and recent products. If login, registration, or BizSidekick onboarding is required, keep this conversation open, ask me to finish in the browser and reply `Continue`, then verify authorization and start the task.
```

CLI fallback:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

Run `/reload-plugins` in WorkBuddy once after a new installation. The marketplace plugin owns the
BizSidekick MCP entry and OAuth handoff; do not replace unrelated MCP entries.

## Security model

- Google/Bustly login happens in browser OAuth. Workspace selection happens inside the business task.
- A user-scoped OAuth grant is limited by current Bustly membership; a task binds exactly one Workspace.
- An unscoped store read covers every active, accessible connection in that Workspace and does not require confirmation.
- Mutations are preview-first and require explicit approval before apply.
- High-risk operations require typed confirmation.
- Provider credentials never enter the MCP client or this repository.
- Plugin Skills and MCP tool descriptions are public integration artifacts, not a
  security boundary; they contain product behavior only and no Desktop system prompt,
  merchant data, or credentials.
