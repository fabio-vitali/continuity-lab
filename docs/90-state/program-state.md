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

**PI-001 — Product Intent Realignment: complete on 2026-07-13.**

The Product Foundation has been materially revised through `DR-0012`.

Continuity is now defined as a repository-native framework for effective and continuous coding-agent work, with Claude Code as the first executor and Nestfolio as the first dogfooding environment.

The active operational loop is:

```text
select work
→ form context
→ execute through skills and agents
→ validate
→ record state and learning
→ continue
```

Context Packs and Handoffs remain important but are no longer the complete product definition.

## Next iteration

**TA-002 — Target Architecture Revision**

This is the sole authorized next iteration.

TA-002 must revise the target architecture against the corrected Product Foundation. It must not assume either automatic restoration of the current Nestfolio runtime or continued exclusion of repository-local backlog, orchestration, resumable Run state, Guards, Lessons, and learning.

TA-002 must classify every current feature family as one of:

- framework core;
- Claude Code adapter;
- reusable Pack capability;
- Nestfolio-specific Pack or binding;
- external integration;
- deferred;
- rejected.

Migration planning, product-experience continuation, vertical-slice design, and implementation are blocked until TA-002 is complete and G3 is reassessed.

## Gate history and current validity

| Gate | Current result | Date | Owning evidence |
|---|---|---|---|
| G0 — Bootstrap | passed; valid | 2026-07-12 | governance artifacts, repository state, DR-0001 to DR-0003 |
| G1 — Product survivability | interpretation revised; falsification evidence retained | 2026-07-13 | PF-001 report plus PI-001 correction and DR-0012 |
| G2 — Current-system evidence | passed; valid | 2026-07-13 | `current-runtime-map.md`, exact Nestfolio revision binding |
| G3 — Target architecture coherence | reopened | 2026-07-13 | TA-001 provisional; Product Foundation changed |
| G4 — Product experience viability | blocked | — | requires revised G3 baseline |
| G5 — Migration viability | blocked | — | requires revised G3 and later G4 authorization |
| G6 — Implementation validation | blocked | — | requires approved architecture, migration, and vertical slice |

## G1 interpretation revision

PF-001 remains complete and valid as falsification evidence against:

- an established Engineering Continuity market category;
- a universal commercial control plane;
- mandatory ownership of enterprise systems of record;
- preserve-all-features as a product requirement;
- universal integration as an adoption requirement.

The prior G1 interpretation is revised because it incorrectly treated the surviving Context Pack/Handoff wedge as the complete product definition and introduced constraints inconsistent with the actual stakeholder intent.

G1 is not rerun in PI-001. Its evidence is reclassified and its product conclusion is corrected through `DR-0012` and the revised Product Foundation.

## G2 validity

RI-001 and G2 remain fully valid.

The Current Runtime Map is factual evidence about the Nestfolio runtime and already separates observations from target-design decisions. Its feature inventory is required input to TA-002.

The evidence remains bound to:

- Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416`;
- uploaded archive `nestfolio-3aa8f4773955541415f615abd80a0a9702bcb416.zip`;
- archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.

## G3 and TA-001 status

G3 is reopened because the L1/L2 Product Foundation changed materially.

TA-001 is provisional historical architecture:

- it was internally coherent for the narrow Context Pack/Handoff interpretation;
- it was derived from a superseded product boundary;
- it is not authorized as an implementation or migration baseline;
- it must be revised through TA-002.

Architecture Decision Records DR-0007 through DR-0011 remain historical validated TA-001 decisions and useful proposals. Their applicability to the active target is provisional pending TA-002. They may be retained, revised, superseded, or reclassified only through explicit TA-002 decisions.

## Current product direction

### Primary user

A developer, technical lead, architect, or small team using coding agents for sustained work in a medium-to-complex repository.

### Primary executor

Claude Code.

Claude Code-first permits direct use of native skills, hooks, commands, subagents, permissions, and session behavior. Canonical product state should remain repository-readable where practical, but executor portability is not prioritized over current value.

### Product premise

Coding-agent use is required. Human operators remain responsible for direction, review, and decisions, but Continuity is not required to prove a separate agentless product.

### Product-owned repository-local state

Continuity may own the local state needed to operate coding-agent work, including:

- Work Items and local backlog;
- Working Sets and Epics;
- Sessions and resumable Runs;
- scope, exclusions, constraints, and completion criteria;
- Context Packs and Handoffs;
- skills and executable procedures;
- Decisions and pending human input;
- Evidence and validation state;
- Guards, Lessons, and reviewed learning;
- recovery journals and projections.

### External authority boundary

Continuity must not replace enterprise systems of record by default. External issues, Git, PRs, CI, deployments, security systems, incident systems, catalogs, and organization policy remain authoritative for their own objects.

A local Continuity item may reference or derive from an external object while remaining authoritative for local agent execution.

### Framework structure to be designed by TA-002

- stable framework core;
- Claude Code adapter first;
- reusable Packs;
- Nestfolio-specific Pack or binding;
- selective external integrations.

## Active product decisions

- `DR-0004` — no established Engineering Continuity market-category claim.
- `DR-0005` — Goal and Guard remain separate; no shared Commitment entity.
- `DR-0012` — Continuity is a repository-native agentic-development framework.

`DR-0006` is superseded by DR-0012 as the active product-boundary authority.

## TA-001 architecture decision applicability

The following records are not implementation authority until TA-002 completes:

- `DR-0007` — narrow Continuity Kernel;
- `DR-0008` — repository artifact authority and secondary journal/ledger;
- `DR-0009` — typed read-oriented providers;
- `DR-0010` — Pack Definitions separate from Context Packs;
- `DR-0011` — explicit Context Formation pipeline.

TA-002 must evaluate them against the corrected product direction rather than automatically retaining or rejecting them.

## Iteration queue

1. PF-001 — Product Falsification — **complete; evidence retained; interpretation revised by PI-001**
2. RI-001 — Current Runtime Inventory — **complete; G2 valid**
3. TA-001 — Target Architecture — **complete historically; provisional; not an implementation baseline**
4. PI-001 — Product Intent Realignment — **complete**
5. TA-002 — Target Architecture Revision — **sole authorized next iteration**
6. PX-001 — Product Experience — **blocked; previous prepared iteration superseded**
7. MA-001 — Migration Architecture — **blocked**
8. VS-001 — First Vertical Slice — **blocked**
9. Implementation — **blocked**

## Active constraints and blockers

- Do not start implementation or migration planning before TA-002 completes and G3 is reassessed.
- Do not continue PX-001 against TA-001.
- Do not design a commercial universal control plane.
- Do not require usefulness without coding agents.
- Do not require universal backlog or engineering-platform integrations.
- Do not prioritize theoretical executor portability over Claude Code-first practical value.
- Do not automatically promote every Nestfolio feature into framework core.
- Do not automatically discard existing Nestfolio capabilities because TA-001 externalized them.
- Keep Goal and Guard separate.
- Keep external systems authoritative for their own objects.
- Preserve repository-readable durable state and explicit human authority for judgment-based decisions.
- Treat Context Packs and Handoffs as capabilities within the full operational loop.

## Required inputs for TA-002

Read in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/TA-002-target-architecture-revision/context-pack.yaml`
5. `sessions/PI-001-product-intent-realignment/session-handoff.md`
6. `docs/10-product/product-foundation.md`
7. `decisions/DR-0012-repository-native-agentic-development-framework.md`
8. `docs/50-validation/product-falsification-report.md`
9. `docs/20-current-system/current-runtime-map.md`
10. `docs/30-target-architecture/target-architecture.md`
11. `decisions/DR-0004-do-not-establish-engineering-continuity-category.md`
12. `decisions/DR-0005-separate-goal-and-guard.md`
13. `decisions/DR-0006-narrow-product-boundary.md`
14. `decisions/DR-0007-narrow-continuity-kernel.md`
15. `decisions/DR-0008-local-first-artifact-authority.md`
16. `decisions/DR-0009-typed-read-oriented-providers.md`
17. `decisions/DR-0010-separate-pack-definitions-from-context-packs.md`
18. `decisions/DR-0011-explicit-context-formation-pipeline.md`
19. `docs/90-state/program-state.md`
20. `docs/90-state/artifact-index.md`

Use the Current Runtime Map as canonical implementation evidence. Inspect the Nestfolio source only if a specific classification cannot be resolved from the map.

## TA-002 completion requirement

TA-002 must produce a coherent architecture for the complete operational loop, classify every current feature family, define authority and dependency boundaries, and explicitly decide the disposition of TA-001 architecture decisions.

No migration or implementation authorization may be granted unless G3 passes again.
