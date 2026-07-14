---
artifact_id: VS-001A-VALIDATION-REPORT
status: validated
owner: implementation
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# VS-001A — Interactive Claude Code Session Confirmation

## Decision

**PASS.**

Two genuine Claude Code Sessions executed the unchanged VS-001 adapter path against Run `run-vs001a`. Every VS-001A acceptance criterion has criterion-linked, deterministic, repository-local Evidence with real executor provenance. The three VS-001 criteria that failed for lack of a Claude Code binary (4, 7, 8) are now proven, and the deduplication and freshness criteria (9, 10) are re-proven with the real executor.

No architecture was broadened, no additional capability was migrated, and `run-vs001` was not rerun or rewritten.

## Repository identity

- required baseline: `34f7c86d0bea256f2fbe8c0c63ca2b04f924f62f`;
- run baseline: `7db8688c1586b685ec295dcfa28c17f0ad798ebc` on `main` — a direct descendant containing the required baseline exactly (verified with `git merge-base --is-ancestor`);
- result revision: `2b47cddc3e38e26cdde47da38e2d8dc3e862c436` on `main` (pushed to `origin/main`) — the closure commit containing all Run, Session, Checkpoint, Handoff, Evidence, executor-provenance, and closure-manifest artifacts;
- repository fingerprint at Run start: `a57d8786c62c86d9d391dea014de21ef37f56b489d9348f247bfcf40328d516b`;
- repository fingerprint at final Checkpoint: `84014b0a7bf33f0c2f4145ba66e431d705823b3d6463ff3c345e676572e49336`;
- changed-file manifest: `continuity/evidence/vs001a/changed-files.txt` (Nestfolio).

## Executor provenance

Recorded by the project-local `SessionStart`/`SessionEnd` hooks into `.continuity/executor-sessions/` (Nestfolio):

- product: Claude Code, version `2.1.207 (Claude Code)`, binary `/Users/fabiovitali/.local/bin/claude`;
- model: `claude-fable-5`;
- Session 1 Claude Code session id: `ea22919f-d2db-4667-ab73-84e2b1563e28`;
- Session 2 Claude Code session id: `99ea8ab4-eb2e-4433-b293-1da9e628eb18`;
- both sessions report `startup_source: startup` — two distinct real Claude Code processes; neither is a Claude transcript resume;
- both sessions report `transcript_contents_inspected: false`; the canonical Session records report `transcript_dependency: false`.

## Dogfood Run

- Work Item: `continuity-vs001a-claude-code-session-confirmation`;
- Working Set: `ws-continuity-vs001a`;
- Run: `run-vs001a`, status `completed`;
- Session 1: `session-vs001a-1`, status `interrupted` (deliberate `simulated-unexpected-termination` close reason);
- Session 2: `session-vs001a-2`, status `closed`, `close_reason: run-completed`, `prior_session_ref: session-vs001a-1`, `resumed_from_checkpoint_ref: run-vs001a-cp-1`;
- effect key: `vs001a-material-effect` → `continuity/dogfood/vs001a-effect.txt`;
- intermediate verified Checkpoint: `run-vs001a-cp-1`;
- final verified Checkpoint: `run-vs001a-final-2`;
- published Handoff: `run-vs001a-session-vs001a-1`;
- Context Pack digest: `8871381dd69d455a9b7edce89665faa44be519113067582a8eb7f59690b59c85`;
- Pack lock digest: `050be66fe746bce73cb09f56cb0a677fbd08b3be50a0858d7a2b2661ba4fe793`;
- Session 1 execution-view digest: `5ed8fd4407372f8a834222d32dda3844b44c17e10dc6464606eb242a3b8a4c20` — recomputed and matched by the hook, injected into context;
- Session 2 execution-view digest: `1cbf4a814ad817ce08efbc6a8db3973f02a0b2938374eb43c178b43e2e4cfae0` — recomputed and matched by the hook, injected into context.

## Ordered timeline (UTC, from executor records and the audit trail)

| Time | Event |
|---|---|
| 16:56:00.373 | Session 1 `SessionStart`, source `startup`, start view digest-matched and injected |
| 16:56:04.594 | Run started; adapter start view delivered |
| 16:57:13.768 | keyed effect `vs001a-material-effect` completed (first and only write) |
| 16:57:34.484 | Checkpoint `run-vs001a-cp-1` verified, exact next action recorded |
| 16:57:52.253 | Session 1 interrupted; Handoff `run-vs001a-session-vs001a-1` published |
| 16:58:26.930 | Session 1 `SessionEnd` (`prompt_input_exit`) — **after** Checkpoint and Handoff |
| 16:58:51.102 | Session 2 `SessionStart`, distinct session id, source `startup`, resume view digest-matched and injected |
| 16:58:55.533 | Run resumed from `run-vs001a-cp-1`; freshness validation passed; lease acquired |
| 16:59:36.374 | effect key replayed → `deduplicated` (audit `op-b210cbbc-8aa1-4367-93f7-bdaefca5c95d`) |
| 16:59:50.109 | all six criteria validated, Evidence accepted |
| 17:00:14.535 | final Checkpoint `run-vs001a-final-2` verified; Run completed |
| 17:03:40.266 | Session 2 `SessionEnd` (`prompt_input_exit`) |

## Resume freshness validation

`.continuity/runs/run-vs001a/head.json` records `last_resume_validation.passed: true` with matching digests:

- repository fingerprint `84014b0a…`, Context Pack `8871381d…`, Pack lock `050be66f…`, Checkpoint `1381c0b2…`.

The resume path compares repository fingerprint, Context Pack, Pack lock, and executor Skill-asset digests and fails with `STALE_RUN` on mismatch; Session 2 passed all checks and acquired the writer lease.

## Effect deduplication

- Session 1 execution wrote `continuity/dogfood/vs001a-effect.txt` (sha256 `f8ee4384…`);
- Session 2 replay of the same key/path/content returned `deduplicated` without rewriting;
- the effects ledger contains exactly one completed record for `vs001a-material-effect`.

## Acceptance evidence

| Criterion | Result | Observable evidence |
|---|---|---|
| `actual-adapter-bootstrap` — genuine Session 1 begins from the adapter-produced view | **PASS** | `SessionStart` record: real session id, `startup_source: startup`, view digest recomputed/matched, `context_injected: true` |
| `actual-first-session-end` — genuine Session 1 ends after verified Checkpoint and Handoff | **PASS** | `SessionEnd` record at 16:58:26.930 with real session id and reason, after `run-vs001a-cp-1` (16:57:34) and published Handoff (16:57:52) |
| `actual-fresh-session-resume` — distinct genuine Session 2 resumes from repository-local state, never a transcript | **PASS** | distinct session id, `startup_source: startup`, `transcript_contents_inspected: false`, resume from `run-vs001a-cp-1` with passing freshness validation |
| `effect-deduplication-confirmation` — resumed Session does not repeat the keyed effect | **PASS** | audit result `deduplicated`; exactly one completed effect record |
| supporting: `vs001a-deterministic-tests` | PASS | hooks/validator/Core/store/Pack unit tests, exit 0 |
| supporting: `vs001a-keyed-effect-materialized` | PASS | effect file exists with exact expected content |

All six run criteria hold `status: passed`; all six Evidence envelopes hold `status: accepted` with `authority: deterministic`. The four executor-provenance validators were re-executed at close-out and all exited 0.

## Relationship to VS-001

The VS-001 verdict remains **FAIL** and is preserved unchanged as the historical record (`docs/70-implementation/vs-001-resumable-agent-work-session.md`). VS-001A does not amend it; it supplies the genuine-executor evidence VS-001 could not produce. Together they cover the full VS-001 acceptance surface: VS-001 proves the repository-native mechanics (criteria 1–3, 5–6, 9–17); VS-001A proves the real-executor criteria (4, 7, 8) and re-proves 9–10 under a real executor.

## Gate G6

**PASS**, on the combined VS-001 + VS-001A evidence:

- a vertical slice demonstrates the core flywheel — VS-001 implementation plus `run-vs001` and `run-vs001a`;
- evidence and resumability survive context loss — a fresh Claude Code process with no prior transcript resumed, validated, and completed the Run from repository-local state alone;
- the system is dogfooded on its own development process — both Runs executed real program work through the adapter, hooks, Skills, and Packs.

## Structural observations

1. The VS-001 implementation required zero changes to pass with the real executor; the FAIL was purely an evidence gap, as diagnosed.
2. Hook-recorded executor provenance (`.continuity/executor-sessions/`) closed the gap without making any Claude-specific state canonical — the boundary in DR-0015 held.
3. The deliberate-interrupt path doubles as the unexpected-termination rehearsal; the `SessionEnd` hook independently confirmed the real session outlived its Checkpoint and Handoff.

## Sole authorized next iteration

**PX-001 — Product Experience** (Gate G4) is the only authorized next iteration.

It requires a new session contract authored from the current program state; the previously prepared PX-001 session files are superseded and must not be run. MA-001, broader implementation, later vertical slices, and unrelated Nestfolio work remain blocked.
