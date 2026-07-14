---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Program State

## Current phase

**VS-001A — Interactive Claude Code Session Confirmation: complete with PASS on 2026-07-13. Gate G6 passed.**

Two genuine Claude Code Sessions executed the unchanged VS-001 implementation on Run `run-vs001a` and closed the executor-provenance evidence gap (VS-001 acceptance criteria 4, 7, 8) with criterion-linked deterministic Evidence. No architecture was broadened and no additional capability was migrated.

The sole authorized next iteration is:

**PX-001 — Product Experience** (Gate G4).

It requires a new session contract; the previously prepared PX-001 session files are superseded and must not be run.

## Gate history and current validity

| Gate | Current result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed; valid | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | passed under PI-001-corrected interpretation; valid | 2026-07-13 | PF-001 evidence, revised Product Foundation, DR-0012 |
| G2 — Current-system evidence | passed; valid | 2026-07-13 | validated Current Runtime Map and exact RI-001 Nestfolio binding |
| G3 — Target architecture coherence | passed; valid | 2026-07-13 | TA-002 architecture, DR-0013 to DR-0018, TA-002 handoff |
| G4 — Product experience viability | pending — PX-001 authorized as sole next iteration | — | to be produced by PX-001 under a new contract |
| G5 — Migration viability | blocked | — | not authorized |
| G6 — Implementation validation | **passed; valid** | 2026-07-13 | combined VS-001 (repository mechanics) and VS-001A (genuine Claude Code executor provenance) evidence |

## VS-001 result (historical, preserved)

**Unconditional decision: FAIL.** This verdict is historical and is not rewritten by VS-001A.

Passed evidence:

- Work selection, Working Set, Scope, Context Pack, Formation Trace, Pack lock, Guards, Decisions, and repository fingerprint;
- material keyed effect and deduplication;
- verified intermediate/final Checkpoints and Handoff;
- stale repository and Skill-lock failure behavior;
- lease conflict and revision-safe state updates;
- Validation Plan, passing Evidence, and completion block on missing/failed validation;
- candidate/rejected Lesson behavior with no automatic promotion;
- derived-index rebuild with canonical state preservation;
- six deterministic tests, all passing.

Failed evidence (at the time — no Claude Code binary in the environment):

- no genuine Claude Code process began from the adapter-produced view;
- no genuine first Claude Code Session ending was observable;
- no separately invoked genuine fresh Claude Code Session resume was observable.

Canonical report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`.

Nestfolio implementation result: `34f7c86d0bea256f2fbe8c0c63ca2b04f924f62f`.

## VS-001A result

**Unconditional decision: PASS.**

- executor: Claude Code `2.1.207`, binary `/Users/fabiovitali/.local/bin/claude`, model `claude-fable-5`;
- Session 1 Claude Code session id `ea22919f-d2db-4667-ab73-84e2b1563e28`; Session 2 `99ea8ab4-eb2e-4433-b293-1da9e628eb18`; both `startup_source: startup`, neither a transcript resume;
- Session 1 consumed the digest-matched adapter start view, executed keyed effect `vs001a-material-effect`, verified Checkpoint `run-vs001a-cp-1`, published the Handoff, then ended (SessionEnd recorded after both);
- Session 2, a separately invoked fresh process, was resumed by the SessionStart hook from repository-local state, passed repository/Context Pack/Pack lock/Skill-asset freshness validation, replayed the effect key to `deduplicated`, validated all six criteria, and completed the Run at final Checkpoint `run-vs001a-final-2`;
- all six Evidence envelopes are `accepted` with deterministic authority; the four executor-provenance validators re-ran clean at close-out.

Canonical report: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`.

## Accepted target architecture

TA-002 remains the active accepted architecture. VS-001 and VS-001A found no structural contradiction; the DR-0015 adapter boundary (Claude-specific state is never canonical) held under a real executor.

### Framework Core

Portable lifecycle and authority semantics for Work, Working Sets, Scope, Sessions, Runs, Checkpoints, Context, Assurance, Decisions, Observations, Lessons, revisions, leases, and effect keys.

### Application and repository infrastructure

Application services coordinate commands through declared ports. Repository infrastructure owns tracked artifacts, operational Run state, Git/repository observation, atomic writes, compare-and-swap revisions, leases, recovery, audit, and rebuildable read models.

### Claude Code Adapter

The adapter owns executor commands, Skills, hooks, bootstrap/resume views, and structured result capture. Claude-specific state is never canonical. VS-001A proved this boundary with the actual executor.

### Packs and Nestfolio binding

Reusable Procedure semantics and executor assets are digest-locked through Packs. Nestfolio-specific backlog, path, Guard, Decision, validator, and repository rules remain in its Pack/binding unless later evidence and a Decision justify promotion.

## Active architecture decisions

- `DR-0012` — repository-native agentic-development framework;
- `DR-0013` — bounded agent-work Core;
- `DR-0014` — repository-local canonical state and operational Run store;
- `DR-0015` — concrete integration ports and Claude Code Adapter;
- `DR-0016` — Pack manifests, Procedures, executor assets, and project bindings;
- `DR-0017` — governed Assurance and Learning promotion;
- `DR-0018` — bounded validation before broader migration.

No new Decision Record was created by VS-001 or VS-001A.

## Sole authorized next iteration

### PX-001 — Product Experience

Primary question:

> Can the validated repository-native Continuity loop be given a viable product experience — onboarding, primary workflows, progressive disclosure, adoption levels, error/recovery UX, human decision UX, and context explainability — without violating the accepted TA-002 boundaries?

Required inputs:

- a **new** PX-001 session contract (context pack and prompt) authored from this Program State; the prepared PX-001 files under `sessions/PX-001-product-experience/` are superseded and must not be run;
- the VS-001 and VS-001A validation reports and the accepted TA-002 architecture.

Required outcome: Gate G4 evidence, an unconditional PASS or FAIL, and exactly one authorized next iteration.

PX-001 is a design iteration. It must not broaden the architecture, migrate another capability, or begin migration-architecture work.

## Iteration queue

1. PF-001 — Product Falsification — **complete; interpretation revised by PI-001**
2. RI-001 — Current Runtime Inventory — **complete; G2 valid**
3. TA-001 — Target Architecture — **historical; superseded as active baseline**
4. PI-001 — Product Intent Realignment — **complete**
5. TA-002 — Target Architecture Revision — **complete; G3 passed**
6. VS-001 — Resumable Agent Work Session — **complete; historical FAIL preserved (missing real-executor evidence at the time)**
7. VS-001A — Interactive Claude Code Session Confirmation — **complete; PASS; G6 passed on combined evidence**
8. PX-001 — Product Experience — **sole authorized next iteration (new contract required)**
9. MA-001 — Migration Architecture — **blocked**
10. broader implementation/later vertical slices — **blocked**

## Active blockers

- No work beyond PX-001 is authorized.
- Do not redo or rewrite `run-vs001` or `run-vs001a`.
- Do not run the superseded prepared PX-001 session files; PX-001 requires a new contract.
- No project-specific behavior may enter Framework Core without evidence and a Decision.
- No completed Work claim may bypass required Evidence or an explicit waiver.
- No Lesson or Observation may automatically change a Skill, Guard, validator, or Pack.
- No hidden executor state may substitute for Run, Checkpoint, Context Pack, Decision, Handoff, or Evidence.
- No generic integration or extension point may be introduced without a concrete authorized need.

## Evidence bindings

### RI-001 historical binding

- Nestfolio revision: `3aa8f4773955541415f615abd80a0a9702bcb416`;
- archive SHA-256: `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.

This remains the identity of the validated Current Runtime Map.

### VS-001 implementation binding

- baseline upstream revision: `3aa8f4773955541415f615abd80a0a9702bcb416`;
- validated local result revision: `34f7c86d0bea256f2fbe8c0c63ca2b04f924f62f`;
- result tree: `fda29bc3ebc2155c7178040cbafee042cc8c5bb9`;
- executor limitation: Claude Code binary unavailable.

The VS-001 binding does not overwrite RI-001 provenance.

### VS-001A executor-provenance binding

- required baseline: `34f7c86d0bea256f2fbe8c0c63ca2b04f924f62f`;
- run baseline: `7db8688c1586b685ec295dcfa28c17f0ad798ebc` (`main`; contains the required baseline exactly);
- result revision: `2b47cddc3e38e26cdde47da38e2d8dc3e862c436` (`main`, pushed to `origin/main`);
- repository fingerprints: start `a57d8786c62c86d9d391dea014de21ef37f56b489d9348f247bfcf40328d516b`, final Checkpoint `84014b0a7bf33f0c2f4145ba66e431d705823b3d6463ff3c345e676572e49336`;
- executor: Claude Code `2.1.207 (Claude Code)`; sessions `ea22919f-d2db-4667-ab73-84e2b1563e28` and `99ea8ab4-eb2e-4433-b293-1da9e628eb18`;
- provenance records: `.continuity/executor-sessions/` and `continuity/evidence/vs001a/` in Nestfolio.

The VS-001A binding supplements — and does not overwrite — the VS-001 and RI-001 bindings.
