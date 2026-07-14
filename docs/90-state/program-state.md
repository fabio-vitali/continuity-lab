---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Program State

## Current phase

**PX-001 — Product Experience is complete. Gate G4 passed unconditionally on 2026-07-14.**

The accepted Product Experience provides:

- cumulative adoption from one Claude Code Skill/Procedure to the complete validated loop;
- a credible ten-minute Level 1 first-value path;
- explicit guarantee labeling that prevents false completeness;
- explainable Context Pack formation, validation, authorization, delivery, staleness, revocation, refresh, reformation, and supersession;
- durable Claude Code start, checkpoint, Handoff, fresh-session resume, validation, completion, cancellation, and learning-review workflows;
- explicit human Decision and authority boundaries;
- fail-safe recovery and retry behavior;
- a non-authoritative CLI model;
- an explicit decision to defer a local non-authoritative Console;
- no blocking contradiction with TA-002.

The sole authorized next iteration is:

**MA-001 — Migration Architecture** (Gate G5), authorized by `DR-0022` after the G4 PASS.

MA-001 must first receive a new active session contract authored from this Program State and the completed PX-001 handoff. No migration implementation, broader implementation, or later vertical slice is authorized.

## Gate history and current validity

| Gate | Current result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed; valid | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | passed under PI-001-corrected interpretation; valid | 2026-07-13 | PF-001 evidence, revised Product Foundation, DR-0012 |
| G2 — Current-system evidence | passed; valid | 2026-07-13 | validated Current Runtime Map and exact RI-001 Nestfolio binding |
| G3 — Target architecture coherence | passed; valid | 2026-07-13 | TA-002 architecture, DR-0013 to DR-0018, TA-002 handoff |
| G4 — Product experience viability | **passed; valid** | 2026-07-14 | Product Experience, DR-0019 to DR-0021, PX-001 scenario and conformance evidence |
| G5 — Migration viability | pending — MA-001 is the sole authorized next iteration | — | MA-001 contract and evidence not yet produced |
| G6 — Implementation validation | **passed; valid** | 2026-07-13 | combined VS-001 repository mechanics and VS-001A genuine Claude Code executor provenance |

## PX-001 result

**Unconditional decision: PASS.**

Primary evidence:

- `docs/40-product-experience/product-experience.md`;
- complete actor, entry-point, information-architecture, workflow, adoption, explainability, Decision, CLI, Console, recovery, dogfooding, scenario, and TA-002 conformance models;
- a ten-minute first-install cognitive walkthrough;
- all required scenarios conceptually passed;
- no blocking architectural contradiction;
- remaining questions classified as non-structural implementation questions.

Accepted Product Experience decisions:

- `DR-0019` — cumulative adoption with explicit guarantee levels;
- `DR-0020` — explicit human Context Pack authorization by default, with opt-in accepted deterministic policy;
- `DR-0021` — defer a local non-authoritative Console;
- `DR-0022` — authorize MA-001 after G4 PASS and keep implementation blocked.

The active PX-001 contract and exact executed prompt are preserved under `sessions/PX-001-product-experience/`. The superseded unused handoff placeholder has been replaced by the completed validated handoff. The old TA-001-derived contract remains historical only through Git history.

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

Failed evidence at the time, because no Claude Code binary was available:

- no genuine Claude Code process began from the adapter-produced view;
- no genuine first Claude Code Session ending was observable;
- no separately invoked genuine fresh Claude Code Session resume was observable.

Canonical report: `docs/70-implementation/vs-001-resumable-agent-work-session.md`.

Nestfolio implementation result: `34f7c86d0bea256f2fbe8c0c63ca2b04f924f62f`.

## VS-001A result

**Unconditional decision: PASS.**

- executor: Claude Code `2.1.207`, binary `/Users/fabiovitali/.local/bin/claude`, model `claude-fable-5`;
- Session 1 id `ea22919f-d2db-4667-ab73-84e2b1563e28`; Session 2 id `99ea8ab4-eb2e-4433-b293-1da9e628eb18`; both `startup_source: startup`;
- Session 1 consumed the digest-matched start view, executed keyed effect `vs001a-material-effect`, verified Checkpoint `run-vs001a-cp-1`, published the Handoff, then ended;
- Session 2 was a separately invoked fresh process, resumed from repository-local state, passed repository/Context Pack/Pack lock/Skill freshness, deduplicated the effect key, validated six criteria, and completed at `run-vs001a-final-2`;
- all six Evidence envelopes are accepted with deterministic authority.

Canonical report: `docs/70-implementation/vs-001a-claude-code-session-confirmation.md`.

## Accepted target architecture

TA-002 remains the active accepted architecture. VS-001, VS-001A, and PX-001 found no structural contradiction.

### Framework Core

Portable lifecycle and authority semantics for Work, Working Sets, Scope, Sessions, Runs, Checkpoints, Context, Assurance, Decisions, Observations, Lessons, revisions, leases, and effect keys.

### Application and repository infrastructure

Application services coordinate commands through declared ports. Repository infrastructure owns tracked artifacts, operational Run state, Git/repository observation, atomic writes, compare-and-swap revisions, leases, recovery, audit, and rebuildable read models.

### Claude Code Adapter

The adapter owns executor commands, Skills, hooks, bootstrap/resume views, and structured result capture. Claude-specific state is never canonical.

### Packs and Nestfolio binding

Reusable Procedure semantics and executor assets are digest-locked through Packs. Nestfolio-specific backlog, path, Guard, Decision, validator, deployment, routing, and repository rules remain in its Pack/binding unless later evidence and a Decision justify promotion.

## Active decisions

### Product and architecture

- `DR-0012` — repository-native agentic-development framework;
- `DR-0013` — bounded agent-work Core;
- `DR-0014` — repository-local canonical state and operational Run store;
- `DR-0015` — concrete integration ports and Claude Code Adapter;
- `DR-0016` — Pack manifests, Procedures, executor assets, and project bindings;
- `DR-0017` — governed Assurance and Learning promotion;
- `DR-0018` — bounded validation before broader migration.

### Product Experience and program sequence

- `DR-0019` — cumulative adoption with explicit guarantee levels;
- `DR-0020` — explicit human Context Pack authorization by default;
- `DR-0021` — deferred local non-authoritative Console;
- `DR-0022` — MA-001 authorization after G4 PASS.

## Sole authorized next iteration

### MA-001 — Migration Architecture

Primary question:

> Can the accepted TA-002 architecture and PX-001 Product Experience be introduced incrementally and reversibly from the validated current runtime, with independent-value slices, explicit compatibility and rollback, preserved authority boundaries, and no big-bang rewrite?

Required contract-authoring inputs:

1. `docs/00-governance/product-development-operating-model.md`;
2. `docs/00-governance/artifact-governance.md`;
3. `docs/00-governance/design-levels.md`;
4. `docs/10-product/product-foundation.md`;
5. `docs/20-current-system/current-runtime-map.md`;
6. `docs/30-target-architecture/target-architecture.md`;
7. `docs/40-product-experience/product-experience.md`;
8. VS-001 and VS-001A validation reports;
9. `docs/90-state/program-state.md` and `artifact-index.md`;
10. Decision Records `DR-0012` through `DR-0022`;
11. TA-002, VS-001, VS-001A, and PX-001 handoffs.

The Current Runtime Map is the primary current-system authority. Any later Nestfolio source inspection must be narrowly justified and explicitly authorized by the MA-001 contract; it is not implicitly required by this state update.

Required MA-001 outcome:

- a migration architecture only, not implementation;
- explicit incremental slices with independent user value and adoption-level mapping;
- compatibility, rollback, authority, and transition boundaries;
- unconditional G5 PASS or FAIL;
- exactly one evidence-justified next iteration.

## Iteration queue

1. PF-001 — Product Falsification — **complete; interpretation revised by PI-001**
2. RI-001 — Current Runtime Inventory — **complete; G2 valid**
3. TA-001 — Target Architecture — **historical; superseded as active baseline**
4. PI-001 — Product Intent Realignment — **complete**
5. TA-002 — Target Architecture Revision — **complete; G3 passed**
6. VS-001 — Resumable Agent Work Session — **complete; historical FAIL preserved**
7. VS-001A — Interactive Claude Code Session Confirmation — **complete; PASS; G6 passed on combined evidence**
8. PX-001 — Product Experience — **complete; PASS; G4 passed**
9. MA-001 — Migration Architecture — **sole authorized next iteration; active contract not yet authored**
10. broader implementation/later vertical slices — **blocked pending G5 and explicit authorization**

## Active blockers

- Only MA-001 contract authoring and, after that contract is reviewed, MA-001 execution are authorized.
- No migration implementation or broader implementation is authorized.
- Do not redo or rewrite `run-vs001` or `run-vs001a`.
- Do not modify Product Foundation, Target Architecture, Product Experience, or validation reports merely to simplify migration.
- No project-specific behavior may enter Framework Core without repeated evidence and a Decision.
- No completed Work claim may bypass required Evidence or an explicit waiver.
- No Lesson or Observation may automatically change a Skill, Guard, validator, rule, Pack, or binding.
- No hidden executor, CLI, Console, chat, transcript, or provider state may substitute for canonical state.
- No universal integration, hosted service, commercial control plane, or agentless product work is authorized.
- A local Console remains deferred and is not an implementation objective.

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
