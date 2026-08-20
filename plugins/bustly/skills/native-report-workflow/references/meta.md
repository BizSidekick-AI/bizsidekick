# Meta reporting: official API and manual saved reports

Never automate the Meta Ads Manager UI in the default workflow. Separate Meta data exports from
Ads Manager saved-report objects.

## Mode A: official Marketing API data export

Use this mode when the user wants Meta advertising data or a file for analysis and does not require
an Ads Manager saved report or exact UI-produced file.

1. Use the authorized Bustly connector backed by Meta's official Marketing API.
2. Resolve one exact accessible ad account before reading data.
3. Normalize and retain:
   - reporting level: account, campaign, ad set, or ad;
   - inclusive date range in the ad-account timezone;
   - account currency;
   - fields/metrics;
   - breakdowns;
   - filters;
   - attribution setting/window when exposed;
   - time increment and comparison when supported.
4. Call `bustly_native_report_export` with platform `meta-ads`, template
   `meta_campaign_performance`, one resolved connection, and one resolved `ad_account_id`. Do not
   invent unsupported fields or templates, call Meta directly, or use browser credentials.
5. Poll `bustly_native_report_export_status` with the same task. For asynchronous reads, wait for
   successful terminal completion and complete all pagination.
6. Preserve provider warnings, partial coverage, attribution semantics, timezone, and currency in
   the result.
7. Identify the output as a `Meta Marketing API export`, not an Ads Manager saved report.

## Mode B: user-executed Ads Manager saved report

Use this mode when the user wants a report that remains visible in Ads Manager or a file produced
by Ads Manager's own Export action.

Prepare this configuration card:

```text
Business/ad account: <exact user-confirmed target>
Saved report name: <unique name>
Reporting level: account | campaign | ad set | ad
Date range: <inclusive start and end>
Timezone: <account timezone>
Currency: <account currency>
Columns/metrics: <ordered list>
Breakdowns: <ordered list>
Filters: <ordered list>
Attribution: <setting/window>
Comparison: <none or definition>
Time granularity: <definition>
Visualization: <table/chart>
Export format: <provider-supported format>
```

Mark inferred values clearly. Then give the user an ordered manual checklist:

1. Sign in and open the intended Ads Manager account.
2. Open Ads Reporting or the current visible saved/custom report surface.
3. Create a report or locate the exact existing report.
4. Enter and review every value from the configuration card.
5. Save the report under the confirmed unique name when creation is requested.
6. Use Meta's visible Export action when a file is requested.
7. Attach the completed file or provide its local path to the assistant.

The assistant must not open or control the Meta UI, click Save/Export, inspect browser state,
bypass a checkpoint, or claim UI completion. This prohibition has no exception path in this
Skill. After the user supplies the file, verify it and perform the requested analysis.

## Meta reporting integrity

- Never treat a provider-reported conversion as an independently verified purchase.
- If attribution, timezone, currency, or reporting level is unknown, keep it unresolved instead of
  assuming a default.
- If the official API lacks a requested saved-report capability, route to the manual configuration
  mode rather than browser automation.
- A prepared configuration is `ready_for_user`, not a created or saved report.
