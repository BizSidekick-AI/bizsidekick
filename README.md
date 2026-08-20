# BizSidekick

[English 🇺🇸](README.md) · [简体中文 🇨🇳](docs/i18n/README.zh-CN.md) · [Français 🇫🇷](docs/i18n/README.fr.md) · [Español 🇪🇸](docs/i18n/README.es.md) · [日本語 🇯🇵](docs/i18n/README.ja.md) · [한국어 🇰🇷](docs/i18n/README.ko.md) · [ไทย 🇹🇭](docs/i18n/README.th.md) · [More 🌐](docs/i18n/README.md)

[BizSidekick official website](https://www.bizsidekick.app/)

Public plugin marketplace for using BizSidekick from Codex, Claude, and WorkBuddy. It connects to a
hosted MCP service; this repository contains no provider credentials, merchant data, service source
code, or deployment secrets.

Current capabilities include multi-store commerce reads, privacy-minimized Shopify customer and
order analysis, Shopify Admin report creation and provider-file export, governed Shopify product
and discount changes, governed Klaviyo draft campaigns and single-recipient test sends, official
Meta Marketing API report export, manual Meta Ads Manager saved-report configuration, advertising
reads, and a high-risk confirmation flow for pausing one exact Meta campaign. BizSidekick never
automates the Meta Ads Manager UI for report creation or export.

## Public package boundary

Everything in this repository is intentionally public. Plugin Skills are distributable behavior
contracts, not secrets or an authorization boundary. Authorization, mutation validation, native
confirmation, idempotency, and audit enforcement remain server-side in BizSidekick.

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

### Public task trace

BizSidekick 0.0.4 records a faithful Agent-supplied copy of the user's question and the complete
reply prepared for delivery through the normal Public MCP task calls. It also records completion
status and explicit evidence coverage. This default path requires no per-task setup, confirmation,
or separate upload. It is labeled `agent_reported`: it is not claimed to be the host-original prompt
or proof that the prepared reply was rendered or read.

Ordinary business text, names, metrics, email addresses, identifiers, URLs, and paths are preserved.
Only high-risk fragments such as credentials and secrets, payment-card data, government identifiers,
and explicit health records are replaced; over-limit text may be truncated.

The Codex edition also keeps the optional lifecycle hook introduced in 0.0.3 as an enhancement.
Codex asks the user to review and trust the exact hook definition before it runs; `/hooks` shows its
source and status. Declining or disabling it does not affect the default Agent-reported trace or any
BizSidekick business tool.

For a turn that actually starts a BizSidekick task, the hook sends the user prompt observed before
the turn and the latest assistant text observed when the turn stops. A pending prompt stays in the
plugin's local data directory until `bustly_begin_task` returns a task identifier. If the turn never
starts a BizSidekick task, the prompt is deleted and nothing is uploaded. The hook never reads the
transcript file, hidden reasoning, unrelated turns, or provider payloads, and it never copies the MCP
OAuth token. Delivery is signed, bounded, and fail-open. The packaged privacy contract is in
`plugins/bustly/PUBLIC_TRACE_PRIVACY.md`.

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

- Google/BizSidekick login happens in browser OAuth. Workspace selection happens inside the business task.
- A user-scoped OAuth grant is limited by current BizSidekick membership; a task binds exactly one Workspace.
- An unscoped store read covers every active, accessible connection in that Workspace and does not require confirmation.
- Mutations are preview-first and require explicit approval before apply.
- High-risk operations require typed confirmation.
- Provider credentials never enter the MCP client or this repository.
- Plugin Skills and MCP tool descriptions are public integration artifacts, not a
  security boundary; they contain product behavior only and no Desktop system prompt,
  merchant data, or credentials.
