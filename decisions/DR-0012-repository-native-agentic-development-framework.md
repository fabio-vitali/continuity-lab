---
artifact_id: DR-0012
status: validated
owner: product
last_updated: 2026-07-13
supersedes:
  - DR-0006
superseded_by: null
---

# DR-0012 — Reframe Continuity as a Repository-Native Agentic-Development Framework

## Context

PF-001 correctly falsified the proposed commercial **Engineering Continuity Control Plane** and showed that a universal product spanning work management, policy, CI/CD, incidents, agent execution, learning, and enterprise governance would duplicate established authorities and create adoption and synchronization debt.

However, the product objective used during that falsification was itself incomplete. The actual stakeholder intent is not to create a new market category or a universally adoptable commercial platform. It is to build a practical framework that helps developers and teams use coding agents continuously and effectively inside medium-to-complex repositories.

The first executor is Claude Code. Nestfolio is the first dogfooding environment. The intended evolution is:

```text
Claude Code → skills → backlog and work orchestration → resumable execution → guards and learning
```

DR-0006 converted the commercial-control-plane falsification into an overly restrictive product boundary centered almost exclusively on Context Packs and Handoffs. It also treated repository-local backlog state, orchestration, durable Runs, Guards, Lessons, and learning as external by default. Those restrictions conflict with the actual practical objective.

RI-001 provides validated evidence that the current Nestfolio runtime already explores useful repository-native work orchestration, resumable journaling, Claude Code adapters, checks, evidence, human decision floors, and learning flows. That evidence does not prove that every feature belongs in the framework, but it demonstrates that these capabilities are legitimate candidates rather than category mistakes.

## Decision

Reframe Continuity as:

> A repository-native framework for organizing, executing, validating, resuming, and improving long-running software-development work performed with coding agents.

The primary user is a developer, technical lead, architect, or small team using coding agents in a medium-to-complex repository.

Using a coding agent is a product premise. Continuity is not required to establish independent usefulness for agentless development.

Claude Code is the first and primary executor. Initial behavior may directly use Claude Code skills, hooks, commands, subagents, permissions, and session conventions when they provide practical value.

Canonical durable artifacts and stable product semantics should remain understandable outside Claude Code where doing so is inexpensive and protects repository authority. This portability requirement must not force theoretical executor neutrality or equal multi-executor support before practical Claude Code value exists.

Continuity may own repository-local agent-work state, including:

- Work Items and local backlog lifecycle;
- Working Sets and Epics;
- Sessions and resumable Runs;
- scope, exclusions, constraints, and completion criteria;
- Context Packs and Handoffs;
- skills and executable procedures;
- Decisions, pending human input, and Evidence;
- Guards and repository-local learning;
- operational journals, recovery state, and projections.

This ownership is limited to state required to operate coding-agent work in the repository. It does not make Continuity a replacement for enterprise issue management, source control, CI/CD, security, incident, catalog, or policy systems of record.

External integrations are optional and concrete-use driven. A repository-local Work Item may reference or derive from an external issue while remaining authoritative for the local agent execution it governs.

Context Packs and Handoffs remain important capabilities but are insufficient as the complete product definition. They participate in the larger loop:

```text
select work → form context → execute through skills and agents → validate → record state and learning → continue
```

The framework is expected to separate:

- stable framework core semantics;
- concrete agent adapters, beginning with Claude Code;
- reusable Packs containing skills, validators, Guards, templates, and integrations;
- project-specific Packs or bindings, beginning with Nestfolio.

Every current Nestfolio feature must be classified rather than automatically restored. Valid target dispositions are framework core, Claude Code adapter, reusable Pack, Nestfolio-specific Pack/binding, external integration, deferred, or rejected.

## Status

Validated, not ratified.

## Supporting evidence

- the stakeholder intent recorded by PI-001;
- `docs/50-validation/product-falsification-report.md`, retained as evidence against a commercial universal control plane;
- `docs/20-current-system/current-runtime-map.md`, especially the implemented Claude Code adapter, skills/project bindings, backlog routing, worker/orchestrator, journal recovery, checks, human decision floor, and backward learning capabilities;
- `docs/10-product/product-foundation.md` as revised by PI-001;
- the mismatch between DR-0006/TA-001 and the required operational loop.

## PF-001 conclusions preserved

This Decision preserves:

- no established Engineering Continuity market-category claim;
- no universal commercial control plane;
- no default replacement of enterprise systems of record;
- no requirement to preserve every existing feature;
- Goal and Guard as separate concepts;
- human authority for judgment-based and governance-changing choices;
- local-first repository value;
- selective, evidence-driven external integrations;
- Context Packs and Handoffs as important continuity capabilities;
- maintenance cost as a first-class product risk.

## DR-0006 conclusions superseded

This Decision supersedes DR-0006 as the active product-boundary authority, especially its conclusions that:

- the initial product is limited to Context Packs and Handoffs;
- product-owned repository backlog state is categorically excluded;
- worker, orchestration, and resumable execution are external concerns;
- Guard and Lesson lifecycles are necessarily outside the product;
- agent runtime checkpoints must remain external;
- read-only providers and no external writes are product-level constraints;
- human-only/no-agent viability is required;
- executor portability should take priority over Claude Code-first practical value.

## Alternatives considered

### Retain TA-001 and treat the wider intent as future expansion

Rejected because the wider operational loop is the current product objective, not optional later scope. Designing UX or migration around TA-001 would deepen the wrong architecture.

### Restore the entire current Nestfolio runtime as the product

Rejected because RI-001 is implementation evidence, not automatic product authority. Each feature still requires role classification and value evidence.

### Build only Claude Code skills without durable framework state

Rejected because skills alone do not preserve work selection, completion criteria, Run recovery, Decisions, Evidence, or learning across long-running work.

### Build a universal multi-agent abstraction first

Rejected because it prioritizes theoretical portability over the first practical executor and delays dogfooding value.

### Build a commercial control plane with universal integrations

Rejected by PF-001 evidence and by the current non-commercial objective.

## Rejected alternatives

- no-agent usefulness as an acceptance criterion;
- mandatory universal backlog synchronization;
- equal-priority support for multiple executors before Claude Code dogfooding succeeds;
- automatic promotion of every Nestfolio feature into framework core;
- hidden chat or vendor memory as canonical work state;
- combining Goal and Guard into one shared entity.

## Risks

- repository-local work state can still duplicate external systems if authority boundaries are unclear;
- Claude Code-first implementation may create accidental vendor coupling in canonical artifacts;
- practical scope can grow into an undisciplined framework if feature classification is weak;
- learning and Guard lifecycle can create curation debt;
- Nestfolio-specific conventions may be generalized prematurely;
- resumable execution may add complexity without enough failure reduction;
- dogfooding by one developer may not prove broader team value.

## Validation requirements

Before implementation is considered successful, sustained Nestfolio dogfooding must demonstrate the concrete success criteria in `docs/10-product/product-foundation.md`, including multi-session work continuity, reliable Run recovery, evidence-bound completion, skill reuse, a reviewed learning loop, bounded operational overhead, and correct separation of framework core from Nestfolio-specific behavior.

TA-002 must classify current feature families and redesign the architecture around the complete operational loop without assuming either total preservation or categorical exclusion.

## Consequences

- `docs/10-product/product-foundation.md` is revised.
- `DR-0006` is superseded as the active product-boundary record while its preserved conclusions are restated here.
- PF-001 remains validated historical evidence but its narrow-wedge product interpretation is corrected.
- TA-001 becomes provisional and is not an implementation baseline.
- G3 is reopened.
- PX-001 is no longer authorized.
- the sole authorized next iteration is `TA-002 — Target Architecture Revision`.
- migration planning and implementation remain blocked until TA-002 is complete and G3 is reassessed.

## Supersedes

- `DR-0006 — Narrow the Initial Product Boundary and Reject Feature Completeness as a Product Constraint` as the active product-boundary decision.
- the Context Pack/Handoff-only product interpretation used by TA-001.

## Superseded by

None.
