---
artifact_id: TA-002-TARGET-ARCHITECTURE-REVISION-HANDOFF
status: validated
owner: session
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Session Handoff

## Iteration closed

**TA-002 — Target Architecture Revision**

## Gate result

**G3 — Target architecture coherence: PASS on 2026-07-13.**

The revised Target Architecture is accepted. No structural architecture question blocks the first validation slice.

## Preconditions verified

Before architecture changes, Program State was confirmed to record:

- PI-001 complete;
- RI-001 and G2 valid;
- TA-001 provisional;
- G3 reopened;
- TA-002 as the sole authorized next iteration.

The validated Current Runtime Map was sufficient. Nestfolio source inspection was not required.

## Primary outcome

Continuity is now architected as a repository-native, Claude Code-first framework for continuous agentic development.

The target operational loop is:

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

The active architecture separates:

- dependency-free Framework Core semantics;
- application services;
- repository infrastructure and declared operational state;
- a first-class Claude Code Adapter;
- reusable engineering, technology, and organization Packs;
- Nestfolio-specific Pack/binding behavior;
- selective typed external integrations.

## Key architecture decisions

### Framework Core

Core now includes stable semantics for Work Items, Working Sets, Epics, Scope, Sessions, Runs, Checkpoints, Context Packs, Handoffs, Skills/Procedures, Guards, validation, Evidence, Decisions, Observations, Lessons, and governed promotion proposals.

It excludes vendor APIs, Claude Code formats, Nestfolio semantics, external-system aggregates, and generic arbitrary execution.

### State authority

Two canonical repository-local storage classes are accepted:

1. versioned repository artifacts for collaborative durable state;
2. a declared inspectable operational store for active Session, Run, Checkpoint, effect, lease, and recovery state.

Hidden Claude Code memory and chat are never authority. Derived indexes, caches, projections, and optional event streams are rebuildable.

### Claude Code

Claude Code is the first and primary executor. Native commands, skills, hooks, subagents, permissions, and session behavior may be used by the adapter.

Canonical Work, Run, Checkpoint, Context Pack, Guard, Evidence, Decision, and Lesson semantics remain outside Claude Code-specific formats.

### Skills and Packs

Packs contain a versioned manifest, canonical Procedure contracts, and optional executor-specific assets. Pack composition is explicit, digest-locked, capability-declared, and unable to redefine Core lifecycle or authority.

Nestfolio backlog conventions, lanes, project checks, deploy procedures, and local skills may remain in a Nestfolio Pack or binding.

### Assurance and learning

Goal and Guard remain separate.

Deterministic checks, agent review, human review, external Evidence, and waivers have distinct authority.

Observations and candidate Lessons cannot automatically become Skills, validators, Guards, or Pack rules. Promotion requires explicit review, a change proposal, and target-artifact validation.

## TA-001 disposition

The target architecture contains a complete salvage matrix.

Decision Record disposition:

- `DR-0007` superseded by `DR-0013`;
- `DR-0008` superseded by `DR-0014`;
- `DR-0009` superseded by `DR-0015`;
- `DR-0010` superseded by `DR-0016`;
- `DR-0011` retained and integrated into the full execution loop.

TA-001 remains historical evidence. Its prior G3 result is not current authority.

## New validated Decision Records

- `DR-0013 — Adopt a Bounded Agent-Work Core with First-Class Runs`
- `DR-0014 — Use Repository-Local Canonical Artifacts and Declared Operational State`
- `DR-0015 — Use Concrete Typed Integration Ports and a First-Class Claude Code Adapter`
- `DR-0016 — Separate Pack Manifests, Canonical Procedures, and Executor Assets`
- `DR-0017 — Govern Assurance and Learning Promotion Explicitly`
- `DR-0018 — Validate the Architecture Through VS-001 Before Broader Migration`

## Current Runtime Map result

Every feature family is classified in the Target Architecture as exactly one of:

- framework capability;
- Claude Code adapter capability;
- reusable Pack capability;
- Nestfolio-specific capability;
- implementation detail to replace;
- deferred capability;
- rejected capability.

No current module is approved for direct reuse by TA-002. Reuse decisions are bounded implementation decisions for VS-001 or a later migration iteration.

## Sole next objective

Run **VS-001 — Resumable Agent Work Session**.

Primary question:

> Can Continuity prove in Nestfolio that one or more selected Work Items can form a coherent Working Set, execute through Claude Code, persist a verified Checkpoint, end the session, resume in a new session without manual reconstruction or duplicate effects, validate completion with Evidence, update work state, and record a candidate Lesson without promoting it automatically?

## Required VS-001 inputs

Read in this order:

1. `docs/00-governance/product-development-operating-model.md`
2. `docs/00-governance/artifact-governance.md`
3. `docs/00-governance/design-levels.md`
4. `sessions/VS-001-resumable-agent-work-session/context-pack.yaml`
5. `docs/10-product/product-foundation.md`
6. `docs/30-target-architecture/target-architecture.md`
7. `decisions/DR-0012-repository-native-agentic-development-framework.md`
8. `decisions/DR-0013-bounded-agent-work-core.md`
9. `decisions/DR-0014-repository-local-canonical-state.md`
10. `decisions/DR-0015-concrete-integration-ports-and-claude-code-adapter.md`
11. `decisions/DR-0016-pack-manifests-procedures-and-executor-assets.md`
12. `decisions/DR-0017-govern-assurance-and-learning-promotion.md`
13. `decisions/DR-0018-validate-through-vs-001-before-broader-migration.md`
14. `docs/20-current-system/current-runtime-map.md`
15. `docs/90-state/program-state.md`
16. `docs/90-state/artifact-index.md`
17. this handoff
18. the Nestfolio repository at the implementation revision explicitly declared by VS-001

Use `sessions/VS-001-resumable-agent-work-session/prompt.md` unchanged.

## VS-001 required path

VS-001 must demonstrate:

1. select one or more Work Items;
2. create a Working Set;
3. declare Scope and completion criteria;
4. resolve Skills, Guards, Decisions, repository context, and Pack lock;
5. start a Run through Claude Code;
6. record at least one material keyed effect;
7. persist a verified Checkpoint;
8. end the Claude Code Session;
9. resume in a fresh Session without reading the old transcript or reconstructing state manually;
10. avoid replaying completed effects;
11. run required validation;
12. attach criterion-linked Evidence;
13. complete or return Work through revision-safe transitions;
14. record an Observation and candidate Lesson without automatic promotion.

## Explicit VS-001 exclusions

- broad migration of the current runtime;
- all current Nestfolio feature families;
- universal backlog or platform synchronization;
- external write adapters;
- PR/merge/deploy/release orchestration except as referenced project Evidence;
- parallel fan-out and full Epic implementation;
- multi-executor parity;
- hosted service, RBAC, analytics, or universal Console;
- automatic Guard minting or Lesson promotion;
- final public API, schema, or package stability;
- authorization of any later iteration before slice evidence is evaluated.

## VS-001 completion contract

VS-001 must:

- implement only the minimum components named in the Target Architecture;
- preserve Nestfolio-specific behavior in a Pack/binding;
- produce evidence for every VS-001 acceptance criterion and required failure case;
- record exact implementation revision and test environment;
- update canonical artifacts and Program State;
- make an explicit slice PASS or FAIL decision;
- authorize exactly one next iteration based on evidence;
- return the complete updated repositories or explicitly scoped patches according to the session contract.

## Still blocked

- PX-001;
- MA-001;
- broader implementation;
- universal integrations;
- commercial product design;
- unrelated Nestfolio changes.

## Continuity test

A competent new agent can start VS-001 from the repository, the VS-001 Context Pack and prompt, this handoff, and the declared Nestfolio revision without reading any TA-002 conversation.
