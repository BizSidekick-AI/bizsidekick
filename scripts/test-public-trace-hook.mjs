#!/usr/bin/env node

import assert from "node:assert/strict";
import { createPublicKey, verify } from "node:crypto";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  canonicalPublicTraceReceipt,
  handleHook,
} from "../plugins/bustly/scripts/public-trace-hook.mjs";

const BEGIN_TOOL = "mcp__bizsidekick__bustly_begin_task";
const HOOK_SCRIPT = fileURLToPath(new URL(
  "../plugins/bustly/scripts/public-trace-hook.mjs",
  import.meta.url,
));

function promptEvent(sessionId, turnId, prompt) {
  return {
    hook_event_name: "UserPromptSubmit",
    session_id: sessionId,
    turn_id: turnId,
    prompt,
  };
}

function preToolEvent(sessionId, turnId, toolUseId, toolInput = {}) {
  return {
    hook_event_name: "PreToolUse",
    session_id: sessionId,
    turn_id: turnId,
    tool_name: BEGIN_TOOL,
    tool_use_id: toolUseId,
    tool_input: toolInput,
  };
}

function postToolEvent(sessionId, turnId, toolUseId, taskId) {
  return {
    hook_event_name: "PostToolUse",
    session_id: sessionId,
    turn_id: turnId,
    tool_name: BEGIN_TOOL,
    tool_use_id: toolUseId,
    tool_input: {},
    tool_response: {
      content: [{ type: "text", text: "BizSidekick task started." }],
      structuredContent: { task_id: taskId },
    },
  };
}

function stopEvent(sessionId, turnId, message, active = false) {
  return {
    hook_event_name: "Stop",
    session_id: sessionId,
    turn_id: turnId,
    stop_hook_active: active,
    last_assistant_message: message,
  };
}

async function readState(directory) {
  return JSON.parse(await readFile(join(directory, "public-trace-state.json"), "utf8"));
}

async function testSignedLifecycle() {
  const directory = await mkdtemp(join(tmpdir(), "bizsidekick-trace-lifecycle-"));
  try {
    const timestamp = Date.parse("2026-08-11T10:00:00.000Z");
    const receipts = [];
    const options = {
      stateDir: directory,
      now: () => timestamp,
      sendReceipt: async (receipt) => {
        receipts.push(receipt);
        return true;
      },
    };
    const sessionId = "session_fixture_001";
    const turnId = "turn_fixture_001";
    const prompt = "Compare every connected store and explain any coverage gaps.";
    assert.deepEqual(await handleHook(promptEvent(sessionId, turnId, prompt), options), {});

    const prepared = await handleHook(preToolEvent(
      sessionId,
      turnId,
      "tool_use_fixture_001",
      { user_goal: "Compare every connected store", trace_context: { forged: true } },
    ), options);
    const updatedInput = prepared.hookSpecificOutput.updatedInput;
    assert.equal(prepared.hookSpecificOutput.permissionDecision, "allow");
    assert.equal(updatedInput.user_goal, "Compare every connected store");
    assert.equal(updatedInput.trace_context.prompt, prompt);
    assert.equal(updatedInput.trace_context.source, "codex_plugin_hook");
    assert.equal(updatedInput.trace_context.public_key.crv, "Ed25519");
    assert.equal(updatedInput.trace_context.forged, undefined);

    await handleHook(postToolEvent(
      sessionId,
      turnId,
      "tool_use_fixture_001",
      "task_trace_fixture_001",
    ), options);
    const assistant = "All accessible stores were queried; one inactive connection was reported separately.";
    assert.deepEqual(await handleHook(stopEvent(sessionId, turnId, assistant), options), {});
    assert.equal(receipts.length, 1);

    const receipt = receipts[0];
    const { signature, ...unsigned } = receipt;
    assert.equal(receipt.task_id, "task_trace_fixture_001");
    assert.equal(receipt.content, assistant);
    assert.equal(receipt.sequence, 1);
    assert.equal(receipt.stop_hook_active, false);
    const key = createPublicKey({
      key: updatedInput.trace_context.public_key,
      format: "jwk",
    });
    assert.equal(verify(
      null,
      Buffer.from(canonicalPublicTraceReceipt(unsigned), "utf8"),
      key,
      Buffer.from(signature, "base64url"),
    ), true);

    const state = await readState(directory);
    assert.deepEqual(state.pending, {});
    assert.equal(Object.keys(state.bindings).length, 1);
    assert.deepEqual(state.outbox, {});
    await handleHook(stopEvent(sessionId, turnId, assistant), options);
    assert.equal(receipts.length, 1);

    const continued = "I rechecked the coverage note and the same inactive connection remains.";
    await handleHook(stopEvent(sessionId, turnId, continued, true), options);
    assert.equal(receipts.length, 2);
    assert.equal(receipts[1].sequence, 2);
    assert.equal(receipts[1].stop_hook_active, true);
    assert.equal(receipts[1].content, continued);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

async function testUnboundPromptIsNeverUploaded() {
  const directory = await mkdtemp(join(tmpdir(), "bizsidekick-trace-unbound-"));
  try {
    const sent = [];
    const options = {
      stateDir: directory,
      now: () => Date.parse("2026-08-11T11:00:00.000Z"),
      sendReceipt: async (receipt) => {
        sent.push(receipt);
        return true;
      },
    };
    const prompt = "This unrelated prompt must remain local.";
    await handleHook(promptEvent("session_fixture_002", "turn_fixture_002", prompt), options);
    await handleHook(stopEvent(
      "session_fixture_002",
      "turn_fixture_002",
      "No BizSidekick tool was called.",
    ), options);
    assert.equal(sent.length, 0);
    const stateText = await readFile(join(directory, "public-trace-state.json"), "utf8");
    assert.equal(stateText.includes(prompt), false);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

async function testBoundedRetry() {
  const directory = await mkdtemp(join(tmpdir(), "bizsidekick-trace-retry-"));
  try {
    let timestamp = Date.parse("2026-08-11T12:00:00.000Z");
    const attempts = [];
    let accept = false;
    const options = {
      stateDir: directory,
      now: () => timestamp,
      sendReceipt: async (receipt) => {
        attempts.push(receipt);
        return accept;
      },
    };
    const sessionId = "session_fixture_003";
    const turnId = "turn_fixture_003";
    await handleHook(promptEvent(sessionId, turnId, "Show current business health."), options);
    await handleHook(preToolEvent(sessionId, turnId, "tool_use_fixture_003", {
      user_goal: "Show current business health",
    }), options);
    await handleHook(postToolEvent(
      sessionId,
      turnId,
      "tool_use_fixture_003",
      "task_trace_fixture_003",
    ), options);
    await handleHook(stopEvent(sessionId, turnId, "Business health is ready."), options);
    assert.equal(attempts.length, 1);
    assert.equal(Object.keys((await readState(directory)).outbox).length, 1);

    accept = true;
    timestamp += 11_000;
    await handleHook(promptEvent(
      "session_fixture_004",
      "turn_fixture_004",
      "Start another task.",
    ), options);
    assert.equal(attempts.length, 2);
    assert.deepEqual(attempts[1], attempts[0]);
    assert.deepEqual((await readState(directory)).outbox, {});
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

async function testPackagedCommandContract() {
  const directory = await mkdtemp(join(tmpdir(), "bizsidekick-trace-command-"));
  try {
    const result = spawnSync(process.execPath, [HOOK_SCRIPT], {
      input: JSON.stringify(promptEvent(
        "session_fixture_cli",
        "turn_fixture_cli",
        "Validate the packaged command contract.",
      )),
      encoding: "utf8",
      env: {
        ...process.env,
        PLUGIN_DATA: directory,
      },
    });
    assert.equal(result.status, 0);
    assert.equal(result.stdout, "{}");
    assert.equal(result.stderr, "");
    assert.equal((await readState(directory)).schema_version, 1);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

async function testBoundedLocalState() {
  const directory = await mkdtemp(join(tmpdir(), "bizsidekick-trace-cap-"));
  try {
    let timestamp = Date.parse("2026-08-11T13:00:00.000Z");
    const options = {
      stateDir: directory,
      now: () => timestamp++,
      sendReceipt: async () => true,
    };
    for (let index = 0; index < 55; index += 1) {
      await handleHook(promptEvent(
        `session_cap_${String(index).padStart(3, "0")}`,
        `turn_cap_${String(index).padStart(3, "0")}`,
        `Pending prompt ${index}`,
      ), options);
    }
    assert.equal(Object.keys((await readState(directory)).pending).length, 50);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

await testSignedLifecycle();
await testUnboundPromptIsNeverUploaded();
await testBoundedRetry();
await testPackagedCommandContract();
await testBoundedLocalState();
console.log("Validated Codex Public trace hook lifecycle, isolation, signature, and bounded retry.");
