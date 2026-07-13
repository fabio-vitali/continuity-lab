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

**VS-001 — Resumable Agent Work Session: complete with FAIL on 2026-07-13.**

The bounded repository-native implementation is valid and retained. The slice failed only because the environment did not provide a real Claude Code executable, leaving acceptance criteria 4, 7, and 8 without genuine executor evidence.

The sole authorized next iteration is:

**VS-001A — Interactive Claude Code Session Confirmation**.

It is a corrective validation slice, not a new architecture or migration phase.

## Gate history and current validity

| Gate | Current result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed; valid | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | passed under PI-001-corrected interpretation; valid | 2026-07-13 | PF-001 evidence, revised Product Foundation, DR-0012 |
| G2 — Current-system evidence | passed; valid | 2026-07-13 | validated Current Runtime Map and exact RI-001 Nestfolio binding |
| G3 — Target architecture coherence | passed; valid | 2026-07-13 | TA-002 architecture, DR-0013 to DR-0018, TA-002 handoff |
| G4 — Product experience viability | blocked | — | not authorized |
| G5 — Migration viability | blocked | — | not authorized |
| G6 — Implementation validation | blocked | — | VS-001 repository mechanics passed, but real Claude Code Session evidence remains incomplete |

## VS-001 result

**Unconditional decision: FAIL.**

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

Failed evidence:

- no genuine Claude Code process began from the adapter-produced view;
- no genuine first Claude Code Session ending was observable;
- no separately invoked genuine fresh Claude Code Session resume was observable.

Canonical report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`.

Nestfolio implementation result: `67e21251ee4e64ff8051c4b239a8466dac296dd2`.

## Accepted target architecture

TA-002 remains the active accepted architecture. VS-001 found no structural contradiction.

### Framework Core

Portable lifecycle and authority semantics for Work, Working Sets, Scope, Sessions, Runs, Checkpoints, Context, Assurance, Decisions, Observations, Lessons, revisions, leases, and effect keys.

### Application and repository infrastructure

Application services coordinate commands through declared ports. Repository infrastructure owns tracked artifacts, operational Run state, Git/repository observation, atomic writes, compare-and-swap revisions, leases, recovery, audit, and rebuildable read models.

### Claude Code Adapter

The adapter owns executor commands, Skills, hooks, bootstrap/resume views, and structured result capture. Claude-specific state is never canonical. VS-001A must prove this boundary with the actual executor.

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

No new Decision Record was created by VS-001.

## Sole authorized next iteration

### VS-001A — Interactive Claude Code Session Confirmation

Primary question:

> Can the existing VS-001 implementation prove actual adapter bootstrap, first-Session end, and fresh-Session resume through two genuine Claude Code Sessions without architecture expansion?

Required baseline:

- Nestfolio commit `67e21251ee4e64ff8051c4b239a8466dac296dd2` or an upstream descendant containing it exactly.

Required outcome:

- exact Claude Code version/provenance;
- genuine Session 1 starts from the adapter-produced view;
- verified Checkpoint and Handoff before Session 1 ends;
- separately invoked genuine Session 2 resumes without old transcript;
- keyed effect remains deduplicated;
- criterion-linked Evidence;
- unconditional PASS or FAIL;
- exactly one next iteration authorized.

VS-001A must reuse the existing implementation and may fix only defects that directly prevent this proof.

## Iteration queue

1. PF-001 — Product Falsification — **complete; interpretation revised by PI-001**
2. RI-001 — Current Runtime Inventory — **complete; G2 valid**
3. TA-001 — Target Architecture — **historical; superseded as active baseline**
4. PI-001 — Product Intent Realignment — **complete**
5. TA-002 — Target Architecture Revision — **complete; G3 passed**
6. VS-001 — Resumable Agent Work Session — **complete; FAIL due missing real-executor evidence**
7. VS-001A — Interactive Claude Code Session Confirmation — **sole authorized next iteration**
8. PX-001 — Product Experience — **blocked**
9. MA-001 — Migration Architecture — **blocked**
10. broader implementation/later vertical slices — **blocked**

## Active blockers

- No work beyond VS-001A is authorized.
- Do not redo or rewrite `run-vs001`; create distinct VS-001A artifacts.
- Do not simulate Claude Code when the real executable is unavailable.
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
- validated local result revision: `67e21251ee4e64ff8051c4b239a8466dac296dd2`;
- result tree: `fda29bc3ebc2155c7178040cbafee042cc8c5bb9`;
- executor limitation: Claude Code binary unavailable.

The VS-001 binding does not overwrite RI-001 provenance.
