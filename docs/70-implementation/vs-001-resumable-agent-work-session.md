---
artifact_id: VS-001-VALIDATION-REPORT
status: validated
owner: implementation
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# VS-001 — Resumable Agent Work Session

## Decision

**FAIL.**

The repository-native implementation, deterministic tests, adapter command path, canonical state, interruption/recovery behavior, keyed-effect deduplication, validation/Evidence gate, revision safety, and governed learning behavior were implemented and demonstrated in Nestfolio.

The slice does not pass because the execution environment had no Claude Code binary. Separate operating-system processes exercised the Claude Code adapter and produced two executor-oriented Session records, but this is not sufficient evidence that an actual Claude Code Session began from the generated view, ended, and was resumed by a fresh Claude Code Session. Acceptance criteria 4, 7, and 8 therefore remain unproven.

This is an operational evidence gap, not a discovered architecture contradiction. No Decision Record is required.

## Repository identity

### Canonical design input

- declared upstream revision: `5d76f134ccf50b42143a1d3ffa8a0142f2391992`;
- uploaded archive SHA-256: `2981c09010cb6744f71b4f45c4fdbbff5ffe33030d7d8bc64ed770a2d7bb57cd`;
- synthetic local baseline used only for diff validation: `3f1d2d2d907e903fc95a4730d5c54116a657bac6`.

### Nestfolio implementation

- upstream VS-001 baseline: `3aa8f4773955541415f615abd80a0a9702bcb416`;
- uploaded baseline archive SHA-256: `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`;
- synthetic local baseline used only for diff validation: `dc2eb20e2ee65c2d6f47064d9d7114c6f557c398`;
- validated implementation result revision: `67e21251ee4e64ff8051c4b239a8466dac296dd2`;
- result tree: `fda29bc3ebc2155c7178040cbafee042cc8c5bb9`.

The synthetic baseline commits do not replace the upstream repository identities. The result revision is a local validation commit over the exact uploaded Nestfolio snapshot.

## Implemented bounded slice

Nestfolio now contains:

- a portable bounded Core/application path for Work Item, Working Set, Scope, Run, Session, Checkpoint, Handoff, effect key, Validation Result, Evidence, Observation, and Lesson semantics;
- repository-local durable artifacts under `continuity/artifacts/`;
- operational Run state, lease, audit, and rebuildable index under `.continuity/`;
- explicit Pack manifests and locked Procedure/executor assets;
- a Nestfolio backlog, Guard, Decision, Scope, and Evidence binding;
- Claude Code-oriented `select`, `start`, `checkpoint`, `resume`, `validate`, `complete`, `lesson`, `inspect`, and index-rebuild commands;
- two Claude skill assets that consume the adapter contract without redefining Core semantics;
- deterministic tests and a material dogfood Run.

No broad current-runtime migration, external write integration, parallel fan-out, full Epic orchestration, hosted service, multi-executor parity, or automatic promotion was introduced.

## Dogfood Run

The repository evidence identifies:

- Work Item: `continuity-vs001-resumable-agent-work-session`;
- Working Set: `ws-continuity-vs001`;
- Run: `run-vs001`;
- first Session record: `session-vs001-1`, status `interrupted`;
- fresh Session record: `session-vs001-2`, status `closed`;
- material effect key: `vs001-material-effect`;
- intermediate verified Checkpoint: `run-vs001-cp-1`;
- final verified Checkpoint: `run-vs001-final-2`;
- published Handoff: `run-vs001-session-vs001-1`;
- Context Pack digest: `400c0450c627a813165afd440b4dde9bb08ae401431aeed3010604926efc31fc`;
- adapter-produced Session 1 execution-view digest: `9237b63f02a25529bbad64380554fbeb747ea0c8aa0cf6a7bdeea8c1e174ed58`;
- adapter-produced Session 2 execution-view digest: `8d97ef351d3b8a4858794dad3a245040391512b5713f578bb5680fa6aedfdd6d`.

The first effect execution returned `deduplicated: false`; the fresh-process replay of the same effect key returned `deduplicated: true` without rewriting the effect.

## Test environment and results

- operating environment: sandboxed Linux;
- Node.js: `v22.16.0`;
- Claude Code binary: unavailable; `command -v claude` returned no path;
- uploaded Nestfolio dependencies: `node_modules` absent;
- deterministic test result: **6 passed, 0 failed**;
- JavaScript syntax validation: passed for every `runtime/continuity/**/*.mjs` file;
- canonical/operational JSON parse validation: passed;
- dogfood-state validator: passed;
- learning-governance validator: passed;
- execution-view digests: both matched their recorded provenance after index rebuild.

The normal Nestfolio backlog-lint command could not run because the uploaded archive lacked its dependencies. All 461 backlog frontmatters were parsed with PyYAML and the existing index-rendering logic was exercised through a dependency-free temporary harness; this is recorded as limited consistency evidence, not as a normal backlog-lint success.

## Acceptance evidence

| # | Criterion | Result | Observable evidence |
|---:|---|---|---|
| 1 | Selected Work and Working Set identifiable without chat | PASS | durable Work Item and Working Set artifacts plus Nestfolio backlog source |
| 2 | Scope, exclusions, criteria, and required Evidence explicit before execution | PASS | binding, Scope artifact, selected Work revision, Validation Plan |
| 3 | Exact Context Pack, Pack lock, Skills, Guards, Decisions, and repository revision recorded | PASS | Context Pack, Formation Trace, Pack lock, repository fingerprint, executor-asset provenance |
| 4 | Claude Code begins from adapter-produced execution view | **FAIL** | execution views and digests exist, but no actual Claude Code process provenance is available |
| 5 | Material effect and effect key recorded | PASS | `vs001-material-effect`, effect file, operational effects state, command 03 |
| 6 | Verified Checkpoint captures exact next action and completed effects | PASS | `run-vs001-cp-1` and command 04 |
| 7 | First Claude Code Session ends | **FAIL** | canonical Session 1 interruption is proven; an actual Claude Code Session ending is not |
| 8 | Fresh Claude Code Session resumes without transcript/manual reconstruction | **FAIL** | fresh OS process, no transcript dependency, resume view, and exact action are proven; actual Claude Code freshness is not |
| 9 | Resume does not repeat keyed effect | PASS | command 10 reports `deduplicated: true`; only one effect record exists |
| 10 | Drift/stale checks run before resume | PASS | `STALE_RUN` and `SKILL_ASSET_MISMATCH` failure evidence; successful resume freshness record |
| 11 | Every completion criterion has passing Evidence or waiver | PASS | four accepted Evidence envelopes map to all four bounded Work criteria; no waiver used |
| 12 | Failed/unavailable required validation blocks completion | PASS | explicit missing-Evidence block plus deterministic failed-validator test |
| 13 | Work/Working Set updates are revision-safe and reference Run/Evidence | PASS | compare-and-swap store and source-digest tests; completed Work/Working Set revisions reference Run/Evidence |
| 14 | Candidate Lesson recorded without automatic Skill/Guard change | PASS | candidate and unsafe rejected Lesson artifacts; both `not_promoted`; zero target changes |
| 15 | Derived-index rebuild loses no canonical state | PASS | index deleted/rebuilt; completed Run, Work, Sessions, Checkpoints, and Evidence remained readable |
| 16 | Conflicting second Session rejected/read-only | PASS | `LEASE_CONFLICT` in command 05 |
| 17 | New competent agent can identify state/rationale without chat | PASS | Run, Checkpoints, Handoff, execution views, Evidence, command captures, and this report |

Because the pass rule is conjunctive, the three failed criteria make the iteration **FAIL**.

## Required failure cases

| Case | Result |
|---|---|
| simulated unexpected Session termination | demonstrated; Session interrupted and Handoff published |
| stale repository/Context Pack | demonstrated; `STALE_RUN` |
| missing Evidence | demonstrated; `COMPLETION_GATE_BLOCKED` |
| failed validation | demonstrated by deterministic corrupted-effect test; completion blocked |
| conflicting writer/Session | demonstrated; `LEASE_CONFLICT` |
| mismatched Skill asset | demonstrated; `SKILL_ASSET_MISMATCH` |
| unsafe candidate Lesson | demonstrated; rejected and unpromoted |

## Structural observations

1. The accepted TA-002 boundaries were sufficient; no architectural rewrite was required.
2. Repository-local canonical artifacts plus a small operational Run store are sufficient for the bounded path.
3. Pack locking must include executor-asset digests; resume correctly failed when a Skill changed.
4. Derived index deletion must target the index only. Deleting the entire derived directory also removed adapter execution views; the implementation was corrected and regression-tested.
5. A completed internal dogfood Run is not evidence that the external executor actually participated. Executor provenance must be treated as a separate acceptance concern.

## Sole authorized next iteration

**VS-001A — Interactive Claude Code Session Confirmation** is the only authorized next iteration.

It may only close the missing executor-provenance evidence by running the existing adapter path in two genuine Claude Code Sessions. It must not broaden the Core, migrate another feature family, or begin PX/migration work.

PX-001, MA-001, broader implementation, later vertical slices, and unrelated Nestfolio work remain blocked.
