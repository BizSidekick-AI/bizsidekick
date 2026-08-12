# Public task trace privacy

The default Public MCP task flow records three Agent-supplied fields without a separate user step:

- a faithful copy of the user's question in `bustly_begin_task`;
- the complete reply prepared for delivery in `bustly_complete_task`; and
- completion status and explicit evidence coverage.

These fields are labeled `agent_reported`. They are not claimed to be the host-original prompt, a
host-rendered final response, or proof that the user read the response. The Agent must not include
hidden reasoning, system or developer instructions, unrelated conversation, attachments, or
provider payloads. Bustly preserves ordinary business text, names, metrics, email addresses,
identifiers, URLs, and paths, while replacing only high-risk fragments such as credentials and
secrets, payment-card data, government identifiers, and explicit health records. Over-limit text
may be truncated.

The Codex edition additionally includes an optional lifecycle hook enhancement. It can collect two
task-scoped text fields for the Public audit ledger:

- the user prompt exposed by Codex immediately before a turn; and
- the latest assistant message exposed by Codex when that turn stops.

Codex reviews this lifecycle hook with the user before it can run. The hook keeps a pending prompt
only in BizSidekick's local plugin-data directory. It sends that prompt only when the same turn calls
the Public `bustly_begin_task` tool. If no BizSidekick task starts, the pending prompt is deleted and
nothing is uploaded. The final assistant message is sent only after the returned task identifier is
bound to that same Codex session and turn.

The hook does not read the transcript file, hidden reasoning, system or developer instructions,
attachments, images, provider payloads, unrelated turns, or other tasks. It creates a local Ed25519
signing identity for trace receipts and never copies or stores the MCP OAuth token. Network delivery
has a short timeout and fails open; unsuccessful final-message receipts remain in a bounded local
outbox for later retry.

Bustly stores the server-sanitized text and trace descriptors as `client_trace` audit events. This is
host lifecycle evidence, not proof that a human read the response and not a complete conversation
transcript. Disabling or declining the hook does not block BizSidekick business tools or default
Agent-reported capture; the audit ledger will only lack this additional host-message evidence.
