---
artifact_id: PI-001-PRODUCT-INTENT-REALIGNMENT-HANDOFF
status: validated
owner: session
last_updated: 2026-07-13
supersedes:
  - TA-001-TARGET-ARCHITECTURE-HANDOFF
superseded_by: null
---

# Session Handoff

## Iteration

**PI-001 — Product Intent Realignment**

## Primary question

> What product are we actually building, for whom, and according to which success criteria, when Continuity is a repository-native framework for effective and continuous coding-agent work rather than a commercial universal control plane?

## Result

**Complete.**

The Product Foundation has been materially realigned. A new validated Decision Record, `DR-0012`, supersedes DR-0006 as the active product-boundary authority.

## Product now being built

Continuity is a repository-native framework for organizing, executing, validating, resuming, and improving long-running software-development work performed with coding agents.

Primary user:

- an experienced developer, technical lead, architect, or small team;
- working in a medium-to-complex repository;
- using coding agents as a normal development tool;
- needing durable work, scope, decision, evidence, procedure, recovery, and learning state.

Primary executor:

- Claude Code.

Using a coding agent is a product premise. Human-readable repository artifacts remain required for authority, review, recovery, and bounded portability; they do not create a no-agent product requirement.

## Corrected operational loop

```text
select work
→ form context
→ execute through skills and agents
→ validate
→ record state and learning
→ continue
```

The practical evolution path is:

```text
Claude Code
→ skills
→ backlog and work orchestration
→ resumable execution
→ guards and learning
```

## Decisions accepted

### Repository-local agent-work ownership

Continuity may own repository-local state required to operate coding-agent work, including:

- Work Items and local backlog lifecycle;
- Working Sets and Epics;
- Sessions and resumable Runs;
- scope, exclusions, constraints, and completion criteria;
- Context Packs and Handoffs;
- skills and executable procedures;
- Decisions, pending human input, Evidence, Guards, Lessons, and learning;
- journals and recovery state.

This does not make Continuity the enterprise source of truth for portfolio planning, Git, PRs, CI/CD, incidents, security, catalogs, or organization policy.

### Claude Code-first

Initial workflows and adapters may use Claude Code-native capabilities directly. Stable canonical concepts should remain repository-understandable where practical, but theoretical executor portability must not block current value.

### Framework composition

TA-002 must design the relationship among:

- framework core;
- Claude Code adapter;
- reusable Packs;
- Nestfolio-specific Pack or binding;
- selective external integrations.

### Context Packs and Handoffs

They remain important capabilities inside the complete framework. They are not the complete product definition.

### PF-001 evidence

PF-001 remains valid evidence against:

- an established Engineering Continuity market category;
- a commercial universal control plane;
- mandatory replacement of enterprise systems of record;
- preserve-all-features and universal-integration constraints.

Its narrow Context Pack/Handoff-only interpretation is superseded.

### Goal and Guard

Goal and Guard remain separate concepts.

## Decision supersession

`DR-0006` is superseded as the active product-boundary decision by:

- `DR-0012 — Reframe Continuity as a Repository-Native Agentic-Development Framework`.

DR-0006 remains in the repository as historical evidence. DR-0012 explicitly preserves its valid anti-control-plane conclusions and supersedes its over-restrictive exclusions.

## Current-system evidence

RI-001 and G2 remain valid without modification.

The Current Runtime Map remains the canonical evidence for the Nestfolio runtime at revision:

`3aa8f4773955541415f615abd80a0a9702bcb416`.

TA-002 must use that map to classify every current feature family rather than automatically restoring or discarding it.

## Architecture status

TA-001 is provisional.

It was derived from the superseded Context Pack/Handoff-only product interpretation. It remains historical architecture evidence but is not an implementation or migration baseline.

G3 is reopened.

DR-0007 through DR-0011 remain historical validated TA-001 decisions with provisional applicability. TA-002 must explicitly retain, revise, supersede, or reclassify them.

## Sustained dogfooding validation

The revised Product Foundation defines concrete Nestfolio criteria, including:

- six consecutive weeks of active dogfooding;
- twenty non-trivial Work Items;
- five multi-item or multi-session efforts;
- fifteen resumptions;
- 90% correct-next-action resume rate;
- no material loss of work, scope, Decisions, or completion criteria;
- reliable interrupted-Run recovery;
- 90% evidence-bound completion;
- repeated skill reuse;
- an evidence-backed learning loop;
- less than 15% operational overhead;
- explicit separation of Nestfolio-specific behavior from framework core.

## Files changed

- `README.md`
- `CONTINUITY-NEXT-STEPS.md`
- `decisions/DR-0006-narrow-product-boundary.md`
- `decisions/DR-0012-repository-native-agentic-development-framework.md`
- `docs/10-product/product-foundation.md`
- `docs/30-target-architecture/README.md`
- `docs/30-target-architecture/target-architecture.md`
- `docs/40-product-experience/README.md`
- `docs/50-validation/product-falsification-report.md`
- `docs/90-state/artifact-index.md`
- `docs/90-state/program-state.md`
- `sessions/PI-001-product-intent-realignment/context-pack.yaml`
- `sessions/PI-001-product-intent-realignment/prompt.md`
- `sessions/PI-001-product-intent-realignment/session-handoff.md`
- `sessions/PX-001-product-experience/context-pack.yaml`
- `sessions/PX-001-product-experience/prompt.md`
- `sessions/PX-001-product-experience/session-handoff.md`
- `sessions/TA-001-target-architecture/session-handoff.md`
- `sessions/TA-002-target-architecture-revision/context-pack.yaml`
- `sessions/TA-002-target-architecture-revision/prompt.md`
- `sessions/TA-002-target-architecture-revision/session-handoff.md`

## Next authorized iteration

**TA-002 — Target Architecture Revision**

This is the only authorized next iteration.

## TA-002 primary question

> What target architecture supports Continuity as a Claude Code-first, repository-native agentic-development framework across work selection, context formation, skill execution, validation, resumable Runs, durable state, Guards, learning, and continuation without becoming a universal enterprise control plane?

## Required inputs

Read in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/TA-002-target-architecture-revision/context-pack.yaml`
5. this handoff
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

Use the Current Runtime Map before requesting Nestfolio source. Inspect source only for a targeted unresolved classification.

## Required TA-002 outputs

- revised `docs/30-target-architecture/target-architecture.md`;
- relevant Decision Records that explicitly disposition DR-0007 through DR-0011;
- a complete classification of all current runtime feature families;
- updated `docs/90-state/program-state.md` with an explicit G3 result;
- updated `docs/90-state/artifact-index.md`;
- completed `sessions/TA-002-target-architecture-revision/session-handoff.md`;
- updates to the prepared TA-002 Context Pack or prompt only if the iteration discovers a material instruction defect;
- changed-file list and complete repository ZIP.

## Explicit exclusions for TA-002

- implementation code;
- migration sequencing;
- product-experience design;
- commercial product or category design;
- universal platform integrations;
- automatic restoration of every Nestfolio feature;
- automatic preservation of TA-001 decisions;
- theoretical multi-executor parity as a primary objective;
- raw prior chat transcripts.

## TA-002 completion criteria

- the full operational loop has explicit architectural homes and ownership;
- Claude Code-first adapter behavior and canonical artifact boundaries are explicit;
- Work Items, Working Sets, Epics, Sessions, Runs, scope, and completion criteria have deliberate roles;
- skills and executable procedures have a defined architecture;
- Context Packs and Handoffs are integrated without dominating the complete product;
- Guards, Evidence, Decisions, Lessons, and learning have explicit lifecycle and authority boundaries;
- framework core, adapters, reusable Packs, and Nestfolio-specific behavior are separated;
- every current feature family is classified;
- external systems of record remain protected from accidental replacement;
- DR-0007 through DR-0011 are explicitly retained, revised, or superseded;
- G3 passes or fails explicitly;
- migration and implementation remain blocked unless G3 passes and Program State authorizes the next iteration.

## Continuity test

A competent new agent can run TA-002 using only the updated repository, this handoff, and the declared inputs. No PI-001 conversation or previous chat is required.
