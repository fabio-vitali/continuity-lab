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

**G3 — Target architecture coherence**

Status: **passed on 2026-07-13**.

TA-001 is complete. The validated target architecture is recorded in `docs/30-target-architecture/target-architecture.md`.

The target is a local-first continuity protocol and toolchain centered on two product-owned aggregates:

- Context Pack;
- Handoff.

It preserves external authority for work, code, policy, CI, incidents, execution, Goals, Guards, and organization catalogs. It adds typed references, explicit Context Formation, continuity-specific validation, local repository artifacts, an operation journal, and a secondary internal event ledger without recreating the rejected broad control plane.

## Next iteration

**PX-001 — Product Experience**

This is the sole authorized next design iteration.

PX-001 must define how the validated architecture is adopted, understood, operated, debugged, authorized, and trusted without changing product or architecture ownership. It must cover onboarding, ten-minute first value, primary Context Pack and Handoff workflows, progressive disclosure, human decision UX, diagnostics, explainability, recovery, executor switching, human-only use, and the bounded role of CLI and any local Console.

Migration design, implementation, and target-architecture revision are not authorized unless PX-001 produces an explicit cross-level revision proposal supported by evidence.

## Gate history

| Gate | Result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | passed with material revision | 2026-07-13 | `product-falsification-report.md`, revised Product Foundation, DR-0004 to DR-0006 |
| G2 — Current-system evidence | passed | 2026-07-13 | `current-runtime-map.md`, exact Nestfolio revision binding |
| G3 — Target architecture coherence | passed | 2026-07-13 | `target-architecture.md`, DR-0007 to DR-0011 |
| G4 — Product experience viability | pending | — | PX-001 not started |
| G5 — Migration viability | blocked | — | requires G4 |
| G6 — Implementation validation | blocked | — | requires approved vertical slice |

## Current ratified decisions

- Use a separate canonical repository named `continuity-lab`.
- Keep Nestfolio canonical for the current implementation.
- Keep design/process/product artifacts out of Nestfolio until implementation work requires synchronized documentation.
- Use artifact-first, context-isolated iterations.
- Do not treat chat or Canvas as canonical.
- Run product falsification before target architecture.
- Run a neutral current-runtime inventory before target architecture.

## Validated product decisions

- `DR-0004` — do not establish Engineering Continuity as a market category.
- `DR-0005` — separate Goal and Guard; reject Commitment as a shared entity or schema.
- `DR-0006` — narrow the initial product boundary and reject preserve-feature-completeness as a product constraint.

These decisions are canonical for subsequent work at validated maturity. They must not be represented as ratified.

## Validated architecture decisions

- `DR-0007` — use a narrow, dependency-free Continuity Kernel.
- `DR-0008` — make repository artifacts authoritative and keep journal/ledger state secondary.
- `DR-0009` — use typed, read-oriented provider contracts and exclude external writes initially.
- `DR-0010` — separate reusable Pack Definitions from concrete Context Packs.
- `DR-0011` — implement Context Formation as an explicit, reproducible, resumable pipeline.

These decisions are canonical for PX-001 and later investigation at validated maturity. They must not be represented as ratified.

## Current product hypothesis

A repository-native continuity layer may reduce rediscovery and unsafe continuation by producing explicit, evidence-bound Context Packs and Handoffs that remain portable across humans, sessions, and executors, while leaving work, CI, policy enforcement, incidents, and runtime execution in their existing systems of record.

Current plain-language description:

> Repository-native, evidence-bound context and handoffs for resumable engineering work across humans and coding agents.

## Current architecture state

### Product-owned durable state

- Context Pack versions;
- Handoff versions;
- continuity Validation Reports and diagnostics;
- Formation Traces;
- Workspace configuration and installed Pack lock state.

### Product-owned operational state

- local operation journal for idempotency, pause/resume, recovery, and writer leases;
- secondary internal event ledger for audit and projections;
- derived local indexes and reference caches.

Operational state is not the sole authority for authorized Context Packs, published Handoffs, or pending human decisions.

### External referenced authority

- Goals and work items;
- Guards and policy outcomes;
- Decisions stored in ADR, review, issue, PR, or other authoritative systems;
- CI, test, build, deployment, and PR Evidence;
- source code, branches, commits, and pull requests;
- incidents and postmortems;
- agent runtime checkpoints and vendor memory;
- service catalogs and organization ownership systems.

### Target bounded contexts

- Context Formation;
- Handoff;
- Reference and Provenance;
- Continuity Assurance;
- Workspace and Packs.

The Continuity Kernel is a shared dependency-free domain nucleus, not a universal platform or external authority.

## Initial adopter and wedge hypothesis

Initial adopter:

- senior developer, technical lead, or small platform-minded team;
- one or a few repositories;
- long-running, interrupted, or transferred work;
- one or more coding executors;
- existing Git, CI, issues, and repository documentation;
- ability to adopt repository-local conventions without enterprise procurement.

Initial wedge:

- reference existing work rather than import backlog;
- form or validate one explicit Context Pack;
- make authority, scope, exclusions, uncertainty, and pending Decisions visible;
- create or validate one executor-neutral Handoff;
- reference authoritative Evidence and Decisions;
- prove that another human or executor can continue without prior conversation.

The first-use target remains ten minutes for either a useful artifact or a useful diagnostic.

## Current-system evidence binding

The validated Current Runtime Map remains bound to:

- Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416`;
- uploaded archive `nestfolio-3aa8f4773955541415f615abd80a0a9702bcb416.zip`;
- archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.

TA-001 used the validated map and did not require additional Nestfolio source inspection.

## Iteration queue

1. PF-001 — Product Falsification — **complete; G1 passed with material revision**
2. RI-001 — Current Runtime Inventory — **complete; G2 passed**
3. TA-001 — Target Architecture — **complete; G3 passed**
4. PX-001 — Product Experience — **sole authorized next iteration**
5. MA-001 — Migration Architecture — **blocked pending G4**
6. VS-001 — First Vertical Slice — **blocked pending G4 and G5**

## Active constraints and blockers

- Product experience may not restore the broad control-plane boundary, Commitment entity, product-owned Goal/Guard lifecycle, generic orchestration, learning loop, or universal Console.
- CLI and Console are adapters over application services and read models; they are not sources of truth.
- A validated Context Pack is not a claim of universal completeness.
- A published Handoff does not own issue, branch, PR, deploy, or executor status.
- Non-deterministic judgment cannot alone authorize lifecycle transitions or resolve human Decisions.
- External provider writes are blocked by architecture and require a new Decision Record.
- Hosted collaboration, analytics, Pack distribution, signing, and organization governance are deferred.
- Migration design is blocked until G4 passes.
- Implementation is blocked until a vertical slice is approved.

## Required input for PX-001

Use:

- the complete current `continuity-lab` repository;
- `docs/00-governance/product-development-operating-model.md`;
- `docs/00-governance/artifact-governance.md`;
- `docs/00-governance/design-levels.md`;
- `docs/10-product/product-foundation.md`;
- `docs/30-target-architecture/target-architecture.md`;
- `docs/50-validation/product-falsification-report.md`, especially the retained scenarios and kill criteria;
- `docs/90-state/program-state.md`;
- Decision Records `DR-0004` through `DR-0011`;
- `sessions/TA-001-target-architecture/session-handoff.md`;
- no Nestfolio repository unless a narrow current-experience fact is explicitly required;
- no raw PF-001, RI-001, or TA-001 chat transcript.

## G3 completion record

G3 passed because:

- all target bounded contexts have responsibilities and owned state;
- aggregate and transition authority are explicit;
- Kernel and provider boundaries are explicit;
- allowed dependencies are explicit;
- local state authority, operation journal, and event-ledger roles are explicit;
- Context Formation and Handoff are designed end to end;
- planner, worker, orchestrator, assurance, trust, learning, journal, and Console have deliberate placement;
- every current runtime feature family has a target disposition;
- all PF-001 scenarios were stress-tested;
- rejected product concepts were not silently restored;
- unresolved trade-offs are visible and do not create ownership ambiguity.

## Kill criteria carried forward

The product must still be killed or revised if:

- disciplined repository templates and existing tools provide equivalent takeover quality with lower maintenance;
- Context Packs and Handoffs do not materially reduce rediscovery or unsafe assumptions;
- useful first value cannot be obtained in ten minutes;
- the product creates a second authoritative state;
- omission diagnostics are unreliable or create false confidence;
- maintenance cost exceeds saved cost;
- vendor-native agent capabilities absorb the remaining gap;
- no adopter both experiences the pain and can maintain the product.
