# Shopify Admin native reports

Use this procedure for Shopify Admin only. Treat current visible UI state as authoritative because
labels and navigation can vary by locale, Shopify plan, and rollout.

## Identify the store and report

1. Reuse an existing Shopify Admin tab when suitable; otherwise open `https://admin.shopify.com/`.
2. Verify the visible store name. If the account exposes multiple stores, select only the store
   identified by the user.
3. Navigate through the visible Analytics/分析 area to Reports/报告. Search both provider-created
   reports and merchant-created reports.
4. Use visible report name, category, and creator when available. Never infer that two similarly
   named reports are identical.

## Export a report

1. Open the matched report without modifying its saved definition.
2. Resolve dates in the store timezone and state the inclusive range.
3. Apply requested filters, columns, dimensions, and granularity to the current view.
4. Refresh the report and wait for a terminal visible state.
5. Use Shopify's visible Export/导出 action and select the user-requested supported format.
6. Wait for the download or Shopify's asynchronous export result. A click or notification does not
   prove that a local file exists.
7. Preserve the provider file unchanged and verify it through `result-contract.md` before analysis.

## Create a saved exploration

1. Search the report list for the proposed name. Do not overwrite an existing report; ask whether
   to open it or use a different name.
2. Use the visible new exploration/new report action.
3. Configure the unique report name, metrics, dimensions, time grain, filters, date behavior, and
   chart or table presentation.
4. If Shopify exposes a query editor, compose and validate the query there. Do not execute it
   through a separate API and call that a saved report.
5. Run the preview and verify columns, filters, grouping, totals, and visible errors.
6. Present the final definition and visible store, then wait for explicit confirmation before the
   final Save/保存 action.
7. Save once, return to Reports, locate the report, reopen it, and verify the persisted definition.

## Shopify-specific blockers

- If the store plan does not expose the requested report or exploration capability, report the
  plan restriction. Do not modify the plan.
- If permissions prevent Analytics or report creation, report the missing visible permission. Do
  not change staff roles.
- If the report is visible but its full saved definition is not exposed, export the visible report
  only; do not claim that hidden configuration was reconstructed.
- If no local download is produced because Shopify uses another delivery mechanism, report the
  exact visible state and wait for user direction rather than claiming download completion.
