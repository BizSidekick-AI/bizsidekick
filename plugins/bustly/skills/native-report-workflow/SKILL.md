---
name: native-report-workflow
description: Route Shopify and Meta report requests to the safest provider-native path. Use when the user asks to export, create, find, or analyze a Shopify or Meta report. Automate exact Shopify Admin saved-report creation and UI export through the signed-in browser; use the authorized official Meta Marketing API for Meta data exports; for Meta Ads Manager saved reports, generate a complete configuration for the user to create, save, and export manually, then verify and analyze the downloaded file. Do not automate the Meta Ads Manager UI.
---

# Native Report Workflow

Keep provider-UI reports, official API exports, and derived analysis artifacts distinct. Never
claim that one is another.

## Load the applicable procedure

- Read [references/shopify.md](references/shopify.md) completely for a Shopify request.
- Read [references/meta.md](references/meta.md) completely for a Meta request.
- Read [references/routing-policy.json](references/routing-policy.json) before choosing an
  executor. Treat every listed hard failure as non-overridable.
- Read [references/result-contract.md](references/result-contract.md) before reporting completion.

## Route before acting

Choose exactly one primary mode:

| User outcome | Mode |
|---|---|
| Export or create an exact Shopify Admin report | `shopify-ui` |
| Export Meta advertising data for analysis | `meta-marketing-api` |
| Create, save, or export an Ads Manager saved report | `meta-manual-ui` |

Do not invoke browser automation as a recovery path for a Bustly MCP startup, transport,
authorization, or service failure. Do not silently substitute ShopifyQL/Insights rows for an exact
provider-UI file. Offer a different mode only as a clearly labeled alternative and wait for the
user to accept it.

## Normalize the request

Build this internal request before execution:

```text
provider: shopify | meta
mode: shopify-ui | meta-marketing-api | meta-manual-ui
operation: export-existing | create-saved | export-data | analyze-download
target: visible store or resolved ad account
report_name_or_intent: exact name when supplied, otherwise business intent
date_range: inclusive start and end in the provider account timezone
metrics: requested measures
dimensions_or_breakdowns: requested grouping
filters: requested constraints
granularity: requested time grain
attribution: Meta setting/window when relevant
visualization: requested chart/table, if relevant
format: requested supported format
destination: user-authorized local directory
post_action: none | analyze
```

Resolve relative dates explicitly. Treat “上个月” as the previous calendar month. If the user
only says “一个月” and the intended calendar or rolling range cannot be inferred safely, ask one
concise question. Always state the resolved inclusive dates before execution.

Ask only for inputs that the provider/account discovery cannot resolve. Never make the user
supply hidden IDs that an authorized connector can discover.

## Run Shopify through the browser

Use browser control only for Shopify in this Skill.

1. Load and follow the available Browser or Chrome control Skill.
2. Reuse a suitable signed-in session. Never inspect cookies, local storage, profiles, passwords,
   tokens, or session files.
3. If authentication is required, ask the user to sign in in the selected browser and tell you
   when it is ready. Do not bypass sign-in through direct HTTP, hidden APIs, or credential
   extraction.
4. Verify the visible Shopify store. If multiple stores plausibly match, show their visible names
   and ask the user to choose.
5. Follow the Shopify reference for export or creation. Navigate with visible text, roles, and
   labels rather than fixed coordinates.
6. Treat the final Save/Create action as a persistent provider write. Show the store and complete
   final definition, then wait for fresh explicit confirmation before clicking it.
7. Validate the saved report or downloaded file against the result contract. Analyze only after
   verification passes.

## Export Meta data through the official API

1. Load the Bustly commerce-operator Skill and follow its task, Workspace, authorization, and
   account-selection contract.
2. Resolve the exact Meta ad account through the authorized connector. Never infer it from a
   campaign name or ask for an ID that discovery can supply.
3. Start the supported V1 export with `bustly_native_report_export`, using platform `meta-ads`,
   template `meta_campaign_performance`, one resolved connection, and one resolved
   `ad_account_id`. Do not invent a template or silently map an unsupported report to this one.
4. Poll `bustly_native_report_export_status` with the same task until it returns a successful or
   failed terminal state. Do not use the Ads Manager UI, direct HTTP, browser session credentials,
   or an undocumented endpoint.
5. Preserve the requested reporting level, inclusive dates, account timezone and currency,
   metrics, breakdowns, filters, attribution, and time increment when the current operation
   supports them. Report unsupported fields instead of silently dropping them.
6. Wait for an asynchronous job to reach a successful terminal state and require complete
   pagination before creating an artifact. A submitted job is not a completed export.
7. Label the result `Meta Marketing API export`; never call it an Ads Manager saved report or an
   exact Ads Manager UI export.
8. Validate the artifact against the result contract before analysis.

## Prepare a Meta saved report for manual execution

Do not open, navigate, read, or control Meta Ads Manager with browser automation.

1. Convert the request into a complete Ads Manager configuration containing the exact ad account,
   report name, reporting level, inclusive date range, timezone, currency, columns/metrics,
   breakdowns, filters, attribution, comparison, time granularity, visualization, and export
   format.
2. Mark every inferred value. Ask one concise question only when an unresolved choice would change
   the report materially.
3. Give the user a short ordered checklist for manually opening Ads Manager, creating or locating
   the saved report, entering the configuration, reviewing it, saving it, and exporting it.
4. State that the user—not the assistant—must perform all Meta UI actions. Never offer to open,
   inspect, click, fill, replay, schedule, save, export, or otherwise automate Meta Ads Manager.
   This Skill has no exception path for assistant-controlled Meta UI automation.
5. Ask the user to attach the exported file or provide its local path after the manual export.
6. Validate the supplied file against the result contract, then perform the requested analysis.
   Do not claim the report was saved merely because the configuration was prepared.

## Fail closed

Stop without claiming success when any required account, report, permission, date, attribution,
file, or terminal job state cannot be verified. Never:

- automate Meta Ads Manager in the default workflow;
- inspect or extract browser credentials;
- bypass login, CAPTCHA, checkpoint, or provider controls;
- overwrite or delete an existing saved report;
- alter provider roles, plan, billing, or account configuration;
- convert an unavailable or incomplete source into a reported zero;
- switch execution modes without a new user decision.

No user instruction can authorize assistant-controlled Meta Ads Manager automation within this
Skill. Keep the request in `meta-manual-ui`, or stop and explain the boundary.

Report the last verified step, whether a persistent provider write occurred, whether a complete
file exists, and the smallest user action needed to continue.
