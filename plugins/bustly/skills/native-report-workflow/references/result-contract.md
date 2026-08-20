# Native report result contract

Use the contract matching the selected mode.

## Shopify UI export receipt

Return the exact visible store and report name, inclusive date range, applied settings, format,
absolute local path, file size, SHA-256 checksum, completion timestamp, and verification evidence.
Require a regular nonempty file created or updated during the run. For CSV/XLSX, verify readable
headers and the requested date/columns where exposed.

## Shopify saved-report receipt

Return the visible store, exact saved name, confirmed definition, save timestamp, and readback
evidence. Creation succeeds only after the report appears in the report list, can be reopened, and
its persisted definition matches the confirmed definition. A success toast is insufficient.

## Meta Marketing API export receipt

Return:

```text
status: succeeded | blocked | failed
execution_mode: meta-marketing-api
ad_account: resolved accessible account
reporting_level: account | campaign | ad set | ad
resolved_date_range: inclusive start and end
timezone: account timezone when exposed
currency: account currency when exposed
fields_breakdowns_filters: requested and accepted settings
attribution: provider setting/window when exposed
job_state: successful terminal state
pagination: complete | incomplete
artifact_path: absolute path or governed artifact reference
file_size_bytes: integer when local
checksum_sha256: checksum when local
verification: passed | failed, with concise evidence
```

Do not emit a completed artifact for a failed, partial, or incomplete read. Label it as an official
Marketing API export, never as an Ads Manager saved report or exact UI export.

## Meta manual saved-report preparation receipt

Before user execution, return:

```text
status: ready_for_user | blocked
execution_mode: meta-manual-ui
configuration: complete Ads Manager configuration card
inferred_values: explicit list
manual_steps: ordered checklist
provider_write: not performed by the assistant
provider_file: not yet received
```

After the user provides the exported file, return its absolute path, size, checksum, readable
headers, requested date/column checks, and verification status. Do not claim the saved report
exists unless the user confirms the manual save; even then, describe that fact as user-confirmed,
not assistant UI-verified.

## Shared integrity rules

Keep every provider file unchanged. Create a separate derived file for cleanup or analysis. Do not
report business rows as zero when the source is absent, unreadable, incomplete, or structurally
invalid. Never include cookies, tokens, credentials, hidden browser state, or raw customer-level
data in a receipt.
