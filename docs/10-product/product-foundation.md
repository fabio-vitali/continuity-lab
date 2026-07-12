---
artifact_id: PROD-FOUNDATION
status: provisional
owner: product
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Product Foundation

## Purpose

Define the current product problem, thesis, boundaries, conceptual hypotheses, constraints, target adopter, and validation requirements.

Presence in this file does not imply ratification. Each major section states its epistemic status. PF-001 evidence is owned by `docs/50-validation/product-falsification-report.md`.

## PF-001 outcome — Validated Observation

The original proposal for an **Engineering Continuity Control Plane** did not survive falsification.

Current source-control, DevSecOps, issue-management, internal-developer-platform, policy, workflow, and coding-agent products can reproduce most of the proposed broad feature set when combined fairly. A product that owns Work, Assurance, Execution, Learning, Trust, and a universal Console would duplicate existing authorities and create substantial governance and synchronization debt.

A narrower product hypothesis survives around explicit, evidence-bound Context Packs and Handoffs that support safe continuation across humans, sessions, and executors without replacing existing systems of record.

Decision references:

- `DR-0004` — do not establish Engineering Continuity as a market category;
- `DR-0005` — separate Goal and Guard; reject Commitment as a shared entity;
- `DR-0006` — narrow the initial product boundary and reject feature completeness as a product constraint.

## Problem — Revised Hypothesis

Software work can lose material engineering intent when it is interrupted, transferred, or resumed across:

- agent sessions;
- executor or model changes;
- people and teams;
- long-running initiatives;
- architecture or migration phases;
- incident remediation;
- repository and documentation evolution.

Repositories, issues, pull requests, CI, ADRs, instructions, and agent memory already preserve much of this context when maintained well. The unresolved problem is narrower:

> The next human or executor may not know which context is authoritative, relevant, complete, current, intentionally excluded, or still awaiting a human decision.

The severity of this problem is expected to vary strongly by task length, interruption frequency, repository complexity, and executor changes. It is not assumed to justify a product for ordinary short tasks.

## Product thesis — Provisional Hypothesis

> A repository-native continuity layer may reduce rediscovery and unsafe continuation by producing explicit, evidence-bound Context Packs and Handoffs that remain portable across people, sessions, and executors, while leaving work, CI, policy enforcement, and workflow execution in their existing systems of record.

The product should make continuation:

- reproducible;
- explainable;
- scoped;
- evidence-aware;
- executor-neutral;
- independent of prior conversation history.

This thesis remains unvalidated until comparative takeover experiments demonstrate material benefit over a disciplined repository baseline.

## Category and naming — Validated Decision and Open Question

- **Engineering Continuity** is not a validated market category.
- The phrase may be used internally as a problem-domain label only.
- **Continuity** remains a working name, not a commercial decision.
- The product must be explainable without invented category terminology.

Current plain-language description:

> Repository-native, evidence-bound context and handoffs for resumable engineering work across humans and coding agents.

Final naming and trademark analysis remain out of scope.

## Initial adopter — Provisional Hypothesis

The initial adopter is a senior developer, technical lead, or small platform-minded team that:

- owns one or a few repositories;
- performs multi-session or multi-week engineering work;
- uses one or more coding agents;
- experiences executor changes, interruptions, or handoffs;
- already has Git, CI, issues, and repository documentation;
- can add repository-local conventions without enterprise procurement;
- is willing to compare continuation quality against its current workflow.

Large regulated organizations, central platform teams, and human-only teams may be later users but are not the initial market hypothesis.

## Adoption wedge — Provisional Proposal

The minimum useful product should:

1. reference an existing work item or objective without importing the backlog;
2. form or validate a versioned Context Pack from canonical repository artifacts and selected external references;
3. require explicit scope, exclusions, uncertainty, and pending human decisions;
4. create or validate an evidence-bound Handoff at a real interruption or ownership boundary;
5. allow a different human or executor to resume without the prior conversation;
6. diagnose missing continuity information rather than pretending the context is complete.

The first-use test is ten minutes. A user should receive either a useful Context Pack/Handoff or a useful diagnostic without replacing an issue tracker, CI, policy engine, or coding agent.

## Product boundary — Validated Decision

### The product may own

- Context Pack and Handoff structures;
- validation of their completeness and internal consistency;
- explicit objective, scope, constraints, exclusions, uncertainties, and output contracts;
- references to canonical Decisions and Evidence;
- continuity checks at session, executor, or ownership boundaries;
- executor-neutral invocation and export conventions;
- diagnostics for stale, contradictory, missing, or unauthoritative context.

### The product should reference, not own

- backlog items, priority, and project status;
- source code, commits, branches, and pull requests;
- CI results, test artifacts, and build provenance;
- policy definitions, rule engines, and enforcement outcomes;
- incident records and postmortems;
- service catalogs and ownership directories;
- agent runtime checkpoints and vendor memory;
- organization-wide knowledge bases.

### The product is not initially

- a generic task tracker;
- an issue hierarchy or prioritization system;
- a generic policy engine;
- an application-security scanner;
- a CI/CD or deployment platform;
- an agent runtime or durable workflow engine;
- a generic memory or RAG system;
- an internal developer portal;
- an incident-management product;
- a universal engineering Console;
- an automatic rule generator;
- a mandatory hosted service.

## Constraints — Validated or Provisional

### Existing-authority preservation — Validated Constraint

The product must not create a second authoritative state for work, policy, code, evidence, incidents, or runtime execution. It stores references and continuity metadata unless a later explicit Decision proves ownership necessary.

### Executor independence — Validated Constraint

No central product concept may depend on Claude Code, Codex, Copilot, or another single executor.

### Context resilience — Validated Constraint

Continuation must survive model replacement, session loss, context truncation, executor failure, interruption, and human/agent handoff.

### Explicit context formation — Provisional Product Constraint

Task-specific context is intentionally formed and inspectable rather than indefinitely accumulated or retrieved opaquely.

A Context Pack must make visible:

- selected sources;
- authority and revision where known;
- explicit exclusions;
- known uncertainty;
- pending decisions;
- output contract.

### Human authority — Validated Constraint

Irreversible, governance-changing, and judgment-based operations remain subject to explicit human Decision policies.

### Local-first value — Provisional Constraint

The product should provide meaningful repository-local value without a mandatory hosted service. Team collaboration and analytics may be optional later capabilities.

### No-agent viability — Validated Constraint

The product must remain usable for human handoffs, even if agent-assisted work is the stronger initial wedge.

### Evidence references — Validated Constraint

A significant continuation or acceptance claim must identify its Evidence. Evidence should remain in its authoritative system where practical and be referenced with provenance, scope, and freshness rather than copied into a new store.

### Low maintenance — Provisional Constraint

The product must save more rediscovery and failure cost than it creates in authoring, curation, synchronization, and review.

## Rejected constraint — Validated Decision

### Preserve all current feature families

The prior requirement that the future product provide every major feature family of the current runtime is rejected as a product constraint by `DR-0006`.

It prevented genuine falsification and forced unrelated categories into one product. RI-001 must still inventory every current feature family neutrally, but product inclusion requires later evidence and an explicit Decision.

No feature is discarded from the current runtime by this product decision. Its disposition is simply no longer predetermined.

## Conceptual model — Revised Provisional Proposals

### Context Pack

A versioned continuation input contract for one bounded objective.

Candidate content:

- objective;
- authoritative references;
- constraints;
- authorized scope;
- explicit exclusions;
- applicable external Goals and Guards;
- current continuation state;
- pending human Decisions;
- selected Evidence;
- relevant code or document slices;
- known uncertainties;
- output contract.

A Context Pack is not a transcript, generic memory dump, or guarantee of completeness.

### Handoff

A durable continuation output contract produced at an interruption, executor change, ownership change, or iteration boundary.

Candidate content:

- completed work;
- current state;
- pending work;
- changed artifacts;
- Evidence produced;
- Decisions accepted, rejected, or pending;
- discovered risks and uncertainty;
- exact next objective;
- required inputs and exclusions;
- validation result for continuation readiness.

### Evidence Reference

A reference to externally authoritative evidence, including enough provenance to answer:

- what claim the evidence supports;
- where it is stored;
- which revision or run produced it;
- its scope;
- its freshness;
- whether it is reproducible.

The product should not assume that all Evidence can or should be copied locally.

### Decision

An explicitly human-governed choice with epistemic and maturity status. The product may reference existing ADRs, pull-request approvals, issue approvals, or other authoritative records rather than owning every Decision.

### Run

A bounded execution episode by a human, agent, or mixed team. Run remains a candidate concept only if it is necessary to express continuation independently of a vendor runtime.

## Goal and Guard — Validated Conceptual Separation

### Goal

A condition a person or team intends to make true through time-bound work.

Goals normally belong to existing issue and project systems. The product may reference them but should not assume ownership.

### Guard

A condition a person or team intends to keep true through deterministic enforcement, measurement, or explicit human review.

Guards normally belong to policy repositories, CI, review processes, scorecards, or security tools. The product may reference them and their evidence but should not assume one evaluator model.

### Commitment

`Commitment` is rejected as a shared entity or schema. It may remain optional umbrella vocabulary for “something the project has intentionally promised,” but it has no independent lifecycle or authority.

Goal and Guard may be related:

- a violated Guard may cause a Goal in an issue tracker;
- completing a Goal may result in a Guard proposal or policy change;
- an incident may link to both.

These relationships do not require them to share storage, schema, lifecycle, or product ownership.

## Deferred or rejected initial public concepts

### Observation — Deferred

Useful as an epistemic state and diagnostic label, but not proven necessary as an initial first-class user object.

### Lesson — Rejected for the initial wedge

A curated Lesson entity creates substantial classification, deduplication, and lifecycle debt. Initial workflows should reference incident findings, ADR rationale, review outcomes, or handoff observations where they already live.

A later learning experiment may reintroduce Lesson if automated extraction and measurable reuse justify it.

### Event — Rejected for the initial wedge

No initial user-facing need was established. Events remain an implementation or integration concern unless a later product workflow requires them publicly.

## Continuity cycle — Provisional Proposal

```text
Existing objective or work item
→ form explicit Context Pack
→ execute with any human or agent
→ produce externally verifiable Evidence
→ record pending Decisions and uncertainty
→ create and validate Handoff
→ resume with a different session, executor, or owner
```

This cycle is intentionally narrower than a complete delivery or learning operating system.

## Context Formation — Retained Provisional Hypothesis

Generic retrieval, memory, skills, and repository instructions are widely available. Context Formation is valuable only if it adds all of the following:

- explicit authority;
- reproducible source selection;
- explicit exclusions;
- bounded scope;
- visible uncertainty;
- pending human decisions;
- evidence provenance;
- takeover validation.

The product must answer:

> Why was this context selected, what was deliberately excluded, and what evidence shows that another executor can safely continue?

If it cannot answer this better than current tools and repository templates, Context Formation is not a differentiator.

## Progressive adoption — Revised Provisional Proposal

1. **Diagnose** — inspect one repository and identify missing continuation contracts or contradictory canonical state.
2. **Form** — create or validate one Context Pack for existing work.
3. **Handoff** — create and validate one executor-neutral Handoff.
4. **Reference Evidence** — bind acceptance and continuation claims to existing CI, PR, ADR, or issue evidence.
5. **Integrate selectively** — add optional adapters for issue, CI, policy, or agent systems only where repeated value is demonstrated.
6. **Govern later** — consider Guard lifecycle, learning, analytics, or multi-team coordination only after the core wedge is validated.

Importing checks, backlog, or organizational policy is not an initial adoption requirement.

## Current feature-family disposition — Provisional Assessment

This section guides RI-001 inventory but is not a target architecture or final inclusion decision.

| Current feature family | PF-001 disposition |
|---|---|
| durable journal | Candidate support for Handoff and continuation evidence |
| pause and fulfil | Candidate support for interruption and pending human input |
| human decision floor | Retain as product constraint and reference model |
| scope control | Candidate core capability |
| evidence and proof | Candidate core capability through references |
| executor integrations | Candidate core capability only when executor-neutral |
| operational status | Candidate limited continuity status; must not duplicate issue/runtime state |
| planner and worker | External agent/runtime concern unless RI-001 proves unique continuity value |
| grouped or epic orchestration | Existing work-management concern; not initial boundary |
| backlog routing, prioritization, rank, single-active discipline | Existing issue/project concern; not initial boundary |
| check/Guard registry and lifecycle | Existing policy/platform concern; deferred integration hypothesis |
| watch, triggers, findings, intake | Existing CI/security/incident concern; deferred integration hypothesis |
| deploy and ship gates | Existing CI/CD concern; reference Evidence only |
| lessons and minting enforcement | Rejected for initial wedge; later learning hypothesis |
| curation, supersession, retirement | Necessary only for product-owned artifacts; broad Guard curation deferred |
| evaluator calibration and flake contracts | Existing assurance concern; deferred unless applied to continuity validation itself |
| starter packs | Possible adoption aid after the core protocol stabilizes |
| deterministic and judgment-based evaluation | Must remain distinct; judgment requires explicit human authority |

RI-001 must inventory facts without forcing them into these provisional dispositions.

## Product metrics — Revised Provisional Proposal

Primary comparative metrics:

- time to first correct action after takeover;
- repeated exploratory commands or tool calls;
- incorrect assumptions at continuation;
- material constraint omissions;
- context volume required to resume;
- handoff authoring and review time;
- percentage of handoffs successfully resumed without prior conversation;
- stale or contradictory context detected before execution;
- external Evidence references that remain resolvable and current.

Guard count, Lesson count, agent Run count, and generated code volume are not product success metrics.

## Required validation before product expansion

The narrow product hypothesis must be compared against:

1. repository state only;
2. repository plus issue/PR and agent instructions;
3. repository plus a structured manual handoff template;
4. formed Context Pack plus validated Handoff.

Tests should include:

- at least two different coding executors;
- one human takeover;
- one long migration or refactor;
- one monorepo or multi-domain task;
- interrupted and executor-switch conditions;
- authoring and maintenance cost.

The product should be killed or revised if it does not produce a material continuation benefit over the strongest baseline.

## Next program implication — Validated Observation

PF-001 authorizes RI-001 to inventory the current runtime. It does not authorize target architecture.

RI-001 must determine which existing capabilities provide evidence for the revised continuity wedge, which belong to adjacent systems, and which create maintenance or coupling inconsistent with the new boundary.
