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

**TA-002 — Target Architecture Revision: complete on 2026-07-13.**

The revised Target Architecture is accepted and validated.

Continuity is architected as a repository-native, Claude Code-first framework for continuous agentic development. The complete operational loop is:

```text
select work
→ form context
→ execute through skills and agents
→ checkpoint or resume
→ validate
→ attach evidence
→ update work state
→ record learning
→ continue
```

Context Packs and Handoffs remain first-class capabilities inside the loop. Work Items, Working Sets, Sessions, Runs, Checkpoints, Guards, Evidence, Decisions, and Lessons now have explicit product homes and authority boundaries.

## Gate history and current validity

| Gate | Current result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed; valid | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | passed under PI-001-corrected interpretation; valid | 2026-07-13 | PF-001 evidence, revised Product Foundation, DR-0012 |
| G2 — Current-system evidence | passed; valid | 2026-07-13 | validated `current-runtime-map.md`, exact Nestfolio revision binding |
| G3 — Target architecture coherence | **passed; valid** | 2026-07-13 | revised `target-architecture.md`, DR-0013 to DR-0018, TA-002 handoff |
| G4 — Product experience viability | blocked | — | not authorized; targeted experience may be learned inside VS-001 |
| G5 — Migration viability | blocked | — | broader migration is not authorized |
| G6 — Implementation validation | blocked | — | VS-001 is the authorized bounded validation slice; it does not itself pre-pass G6 |

## G3 result

**G3 PASS.**

The architecture is coherent with the corrected Product Foundation, sufficiently concrete for VS-001, compatible with the Current Runtime Map, explicit about canonical state and recovery, and free from unnecessary commercial-control-plane or universal-integration assumptions.

No unresolved structural ambiguity requires another architecture iteration before the first validation slice.

## Accepted target architecture

### Framework Core

Portable domain semantics and lifecycle rules for:

- Work Items, Working Sets, Epics, selection, dependencies, and completion;
- Scope, exclusions, constraints, and completion criteria;
- Sessions, Runs, Checkpoints, pause, resume, retry, cancellation, failure, and stale state;
- Context Packs, Formation Traces, and Handoffs;
- Skills and Procedure references;
- Guards, validation, Evidence, waivers, and completion gates;
- Decisions, Observations, Lessons, and governed promotion proposals.

### Claude Code Adapter

First executor integration using native commands, skills, hooks, subagents, permissions, session bootstrap, context delivery, result capture, interruption handling, and resume behavior.

Claude Code-native formats do not become Framework Core semantics.

### Skills and Packs

Reusable and project-specific Packs may contain canonical Procedure specifications and adapter-specific executable assets. Composition is explicit, versioned, digest-locked, capability-declared, and unable to redefine Core lifecycle or authority.

### Nestfolio boundary

Nestfolio is the reference implementation and first dogfooding environment. Its backlog format, lanes, repository rules, deployment procedures, project Guards, and local skills may remain in a Nestfolio Pack or binding.

### State authority

- versioned repository artifacts are authoritative for collaborative durable state;
- a declared repository-local operational store is authoritative for active Run and Checkpoint state;
- hidden Claude Code memory or chat is never authoritative;
- external systems remain authoritative for their own objects;
- derived indexes, caches, projections, and optional event streams are rebuildable.

## TA-001 disposition

TA-001 remains historical architecture evidence.

- its Context Formation and Handoff concepts are retained;
- its dependency direction, typed references, local-first authority, explicit Pack locking, and reproducible context formation are preserved where compatible;
- its Context Pack/Handoff-only boundary, public-Run exclusion, externalized backlog/orchestration, no learning, human-only requirement, and equal-priority executor-neutrality assumptions are rejected or revised;
- its complete disposition is recorded in the TA-002 salvage matrix.

Decision Record status:

- `DR-0007` superseded by `DR-0013`;
- `DR-0008` superseded by `DR-0014`;
- `DR-0009` superseded by `DR-0015`;
- `DR-0010` superseded by `DR-0016`;
- `DR-0011` retained and integrated into the complete operational loop.

## Active architecture decisions

- `DR-0013` — bounded agent-work Core with first-class Runs;
- `DR-0014` — repository-local canonical artifacts and declared operational state;
- `DR-0015` — concrete typed integration ports and first-class Claude Code adapter;
- `DR-0016` — Pack manifests, canonical procedures, and executor assets;
- `DR-0017` — explicit Assurance and Learning promotion governance;
- `DR-0018` — validate through VS-001 before broader migration.

Product decisions that remain active:

- `DR-0004` — no established Engineering Continuity market-category claim;
- `DR-0005` — Goal and Guard remain separate; no shared Commitment entity;
- `DR-0012` — repository-native agentic-development framework.

## Sole authorized next iteration

**VS-001 — Resumable Agent Work Session**

Primary objective:

> Prove in Nestfolio that one or more selected Work Items can form a bounded Working Set, execute through Claude Code, persist a verified Checkpoint, end the session, resume in a new session without manual reconstruction or duplicate effects, validate completion with Evidence, update work state, and record a non-promoted candidate Lesson.

VS-001 is an architecture-validation slice, not broad migration.

Use:

- `sessions/VS-001-resumable-agent-work-session/context-pack.yaml`;
- `sessions/VS-001-resumable-agent-work-session/prompt.md`;
- `sessions/TA-002-target-architecture-revision/session-handoff.md`;
- the latest complete `continuity-lab` repository;
- the Nestfolio repository only as implementation and dogfooding target at the revision selected by VS-001.

## VS-001 constraints

VS-001 may implement only the minimum path defined in the Target Architecture.

It must not:

- start broad migration of the current Nestfolio runtime;
- implement every current feature family;
- implement universal backlog synchronization or external writes;
- implement multi-executor parity;
- implement hosted collaboration, RBAC, analytics, or a universal Console;
- implement automatic Guard minting or Lesson promotion;
- authorize later work without evaluating slice evidence.

The VS-001 handoff must authorize exactly one next iteration based on evidence.

## Iteration queue

1. PF-001 — Product Falsification — **complete; evidence retained; interpretation revised by PI-001**
2. RI-001 — Current Runtime Inventory — **complete; G2 valid**
3. TA-001 — Target Architecture — **complete historically; superseded as active baseline by TA-002**
4. PI-001 — Product Intent Realignment — **complete**
5. TA-002 — Target Architecture Revision — **complete; G3 passed**
6. VS-001 — Resumable Agent Work Session — **sole authorized next iteration**
7. PX-001 — Product Experience — **blocked**
8. MA-001 — Migration Architecture — **blocked**
9. broader implementation — **blocked**

## Active blockers

- No work beyond VS-001 is authorized.
- No migration plan may assume direct reuse of current Nestfolio modules.
- No project-specific behavior may enter Framework Core without evidence and a Decision.
- No completed Work claim may bypass required Evidence or an explicit waiver.
- No Lesson or Observation may become a canonical Skill, validator, Guard, or Pack rule automatically.
- No hidden executor state may substitute for Run, Checkpoint, Context Pack, Decision, or Handoff state.
- No generic integration or extension point may be introduced without a concrete slice need.

## G2 evidence binding

RI-001 evidence remains bound to:

- Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416`;
- uploaded archive `nestfolio-3aa8f4773955541415f615abd80a0a9702bcb416.zip`;
- archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.

A later VS-001 implementation revision must be recorded separately and does not alter the identity of the validated Current Runtime Map.
