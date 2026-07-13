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

Define the current product intent, primary user, operating premise, enduring value, product boundary, conceptual model, success criteria, and validation requirements for Continuity.

This artifact is the L1/L2 product authority. Architecture and implementation must follow it; they may challenge it only through the cross-level change rule.

## PI-001 outcome — Validated product direction

The product objective used by PF-001 and TA-001 was framed too much as a potential commercial product and universal engineering control plane. That framing correctly exposed category, integration, synchronization, and governance risks, but it also removed practical capabilities that are central to the actual intended use.

Continuity is not being designed primarily as a standalone commercial platform. It is a practical, repository-native framework that helps developers and teams use coding agents effectively across sustained work in medium-to-complex enterprise repositories.

Its first executor and primary practical target is Claude Code.

Its intended evolution path is:

```text
Claude Code
→ skills
→ backlog and work orchestration
→ resumable execution
→ guards and learning
```

Its operational loop is:

```text
select work
→ form context
→ execute through skills and agents
→ validate
→ record state and learning
→ continue
```

Decision reference:

- `DR-0012` — reframe Continuity as a repository-native agentic-development framework.

## Product description — Validated Decision

> Continuity is a repository-native framework for organizing, executing, validating, resuming, and improving long-running software-development work performed with coding agents.

It gives an agent and its human operators durable, inspectable project memory and executable procedures so work can continue across sessions without losing tasks, scope, decisions, constraints, evidence, completion criteria, or learned ways of working.

Context Packs and Handoffs are important mechanisms within this framework. They are not the complete product definition.

## Primary user and operating environment — Validated Decision

The primary user is:

- an experienced software developer, technical lead, architect, or small engineering team;
- working in a medium-to-complex repository, commonly a monorepo or multi-domain codebase;
- using coding agents as a normal part of implementation, analysis, validation, and maintenance;
- responsible for work that spans multiple tasks, sessions, branches, decisions, and verification steps;
- able to install repository-local conventions, skills, scripts, and state without enterprise procurement.

The primary operating environment is:

- a Git repository containing code, tests, documentation, and agent instructions;
- a local or CI-capable development environment;
- Claude Code as the first executor;
- existing engineering systems such as GitHub, GitLab, Jira, CI, or deployment platforms where already useful;
- repository-local Continuity artifacts and executable procedures that remain reviewable through ordinary code review.

Nestfolio is the reference implementation and first dogfooding environment. It is not the universal product model, but it is the first source of practical requirements and validation evidence.

## Coding-agent premise — Validated Decision

Using a coding agent is a product premise, not an optional adoption mode.

Continuity does not need to prove that it is independently valuable for agentless software development. Humans remain essential as operators, reviewers, decision authorities, and collaborators, but the product exists to improve agent-assisted development.

Human-readable and repository-native artifacts remain required because they provide inspectability, reviewability, recovery, and vendor independence. They do not imply a separate human-only product requirement.

## Claude Code-first — Validated Decision

Claude Code-first means:

- initial workflows, skills, hooks, commands, adapters, and dogfooding optimize for Claude Code;
- current practical value takes priority over abstract parity across executors;
- Claude Code capabilities may be used directly when they solve real repository work problems;
- the first complete operational loop must work well with Claude Code before multi-executor equivalence is pursued.

Claude Code-first does not mean that canonical product artifacts should encode Claude Code-specific semantics when a stable, inexpensive, repository-level representation is sufficient.

The boundary is:

- **canonical work state and durable product concepts** should remain understandable outside one vendor runtime;
- **executor adapters and executable procedures** may be Claude Code-specific;
- **portability** is a preservation property for durable state, not a requirement to support every executor equally or immediately;
- abstractions must not be introduced solely to achieve theoretical executor neutrality at the expense of current usefulness.

## Problem — Revised Validated Hypothesis

Coding agents can perform substantial software work, but long-running repository work degrades when the active session is treated as the only operational memory.

Material information is commonly lost or fragmented across:

- task lists and partially completed backlog items;
- changing scope and exclusions;
- multi-task working sets and epics;
- decisions and unresolved questions;
- project constraints and repository-specific procedures;
- evidence required to claim completion;
- interrupted tool calls or partially completed operations;
- lessons discovered during implementation;
- transitions between sessions, models, people, or branches.

Repository instructions and vendor memory help, but they do not by themselves provide a complete, inspectable work-management and continuation loop.

The practical problem is:

> How can a developer or team use coding agents continuously on a complex repository without repeatedly reconstructing work state, losing constraints or decisions, duplicating actions, or declaring work complete without evidence?

## Product thesis — Provisional Hypothesis

> A repository-native framework that combines executable skills, agent-oriented work state, deliberate context formation, resumable Runs, validation, Guards, Decisions, Evidence, Handoffs, and reusable learning can materially improve the reliability and continuity of coding-agent work without replacing enterprise systems of record.

The product should make agentic development:

- continuous across sessions;
- scope-aware;
- procedure-driven;
- resumable after interruption;
- evidence-bound;
- reviewable by humans;
- increasingly adapted to the repository through explicit learning;
- practical in the repository before it is generalized into a platform.

## Category and commercial boundary — Validated Decision

- Continuity must not claim an established **Engineering Continuity** market category.
- The phrase may remain an internal problem-domain label.
- The current objective is not to create a standalone commercial product, establish a new software category, or satisfy a universal enterprise buyer.
- Commercial packaging, pricing, hosted governance, and market positioning are not product constraints for the current program.
- The product must be explainable through the concrete agentic-development problem it solves.

PF-001 remains valid evidence that a universal commercial control plane spanning issue management, policy, CI/CD, incidents, agent execution, knowledge, and organization governance would be incoherent and expensive to adopt.

## Product boundary — Validated Decision

### Continuity may own

Repository-local state and behavior required to coordinate coding-agent work, including:

- agent-oriented backlog items and their local lifecycle;
- active working sets and explicit work selection;
- epics or grouped work when they improve coherent execution;
- session records and durable session boundaries;
- resumable Runs and operation checkpoints;
- current scope, exclusions, constraints, and completion criteria;
- Context Packs and context-formation traces;
- Handoffs and continuation readiness;
- executable skills and procedures;
- project and reusable Packs;
- Decisions and pending human decisions where the repository is the selected authority;
- Evidence references and locally produced validation evidence;
- Guards used to protect repository work;
- Lessons and reviewed promotion of lessons into skills, checks, or Guards;
- journals, indexes, and projections needed for recovery and operation.

This ownership is legitimate when the state exists specifically to operate Continuity and coding agents inside the repository.

### Continuity must not replace by default

- enterprise portfolio planning;
- organization-wide issue management;
- source-control authority;
- pull-request and branch authority;
- CI/CD execution and artifact stores;
- security and compliance systems of record;
- incident-management systems;
- service catalogs and ownership directories;
- organization-wide policy administration;
- universal agent infrastructure.

Continuity may link to or selectively integrate with these systems when concrete usage requires it. It must not require universal integration or duplicate their complete state.

### Repository-local authority rule

A repository-local Continuity backlog or Run state may be authoritative for agent execution without becoming the enterprise source of truth for product planning.

When an external item exists, Continuity may:

- reference it;
- derive a local executable item or working set;
- record local execution state and evidence;
- optionally synchronize a narrow result through an explicit adapter.

The external system remains authoritative for the external object. Continuity remains authoritative for its local agent-work representation and execution history.

## Core operational concepts — Revised Provisional Model

### Work Item

A bounded unit of agent-executable repository work.

It should identify:

- objective;
- scope and exclusions;
- relevant constraints and Decisions;
- expected outputs;
- completion criteria;
- validation requirements;
- current state;
- evidence and dependencies;
- optional reference to an external issue or request.

A Work Item is not required to model every field or workflow of an enterprise issue tracker.

### Working Set

The explicitly selected set of Work Items and supporting context that may be acted on together.

A Working Set prevents an agent session from treating the entire repository backlog as active. It provides bounded scope for planning, context formation, and execution.

### Epic

A coherent group of Work Items requiring coordinated progress, shared context, ordering, or a common completion boundary.

An Epic is a practical orchestration structure, not a mandatory replica of Jira or another product hierarchy.

### Session

A bounded interaction period between humans, coding agents, and the repository.

A Session may start or resume Runs, make Decisions, execute skills, and produce a Handoff. Session state is not sufficient as durable project memory unless consolidated into repository-local artifacts.

### Run

A durable, resumable execution episode for one Work Item, Working Set, Epic stage, skill, validation flow, or other bounded procedure.

A Run may contain:

- selected inputs and context revision;
- current step and completed effects;
- decisions or human input required;
- produced changes and Evidence;
- failure and recovery state;
- exact continuation instruction.

Run is a first-class product concept because resumable execution is part of the intended product, not merely an adapter concern.

### Scope and completion criteria

Scope defines what the Run or Work Item is authorized to change or inspect. Exclusions state what is deliberately outside the work.

Completion criteria state what must be true before the item can be considered complete. They must be testable or explicitly reviewable and linked to Evidence.

### Context Pack

A formed, versioned input contract for a specific Work Item, Working Set, Epic stage, Session, or Run.

A Context Pack may contain:

- selected canonical artifacts and code slices;
- task and working-set state;
- scope, exclusions, and constraints;
- applicable Decisions and Guards;
- relevant skills and procedures;
- known uncertainty;
- required Evidence and completion criteria;
- exact execution objective.

Context Packs are one part of the execution loop. They are not the entire product.

### Handoff

A durable continuation contract created when work crosses a meaningful boundary such as session end, interruption, executor change, human takeover, or iteration closure.

A Handoff records:

- completed and pending work;
- current Run and work-state position;
- changed artifacts;
- Decisions and unresolved questions;
- Evidence produced or still required;
- failures, risks, and uncertainty;
- exact next action and required context.

A Handoff is not required after every small action. It exists where durable continuation value exceeds its cost.

### Skill and executable procedure

A Skill is a named, versioned, executable procedure that helps an agent perform recurring repository work correctly.

Skills may encode:

- task selection;
- context formation;
- implementation rituals;
- validation flows;
- backlog updates;
- deployment preparation;
- evidence collection;
- handoff creation;
- project-specific operating knowledge.

Skills are central product capabilities. They may be implemented using Claude Code-specific facilities while remaining represented and governed in the repository.

### Guard

A condition intended to remain true through deterministic enforcement, measurement, or explicit human review.

Guards may protect:

- repository structure;
- work-state invariants;
- scope boundaries;
- test or evidence requirements;
- procedure conformance;
- known project risks.

Goal and Guard remain separate concepts. A Guard violation may create work; completing work may propose a Guard change. They do not require one shared entity or lifecycle.

### Evidence

A result that supports a claim about execution or completion.

Evidence may be local or externally referenced and can include:

- test results;
- static analysis;
- diffs and commits;
- generated reports;
- human approvals;
- runtime observations;
- reproduced failure or success conditions.

Completion claims should identify the Evidence that supports them.

### Decision

An explicit accepted, rejected, deferred, or pending choice that materially affects work.

Decisions may be stored directly in Continuity artifacts or referenced from an authoritative ADR, review, issue, or pull request. Judgment-based and governance-changing decisions remain under human authority unless an explicit policy delegates them.

### Lesson and learning

A Lesson is a reusable finding about how work should be performed, validated, scoped, or avoided in this repository or class of repositories.

Learning is not automatic rule proliferation. A Lesson may be:

- recorded from a Run or failure;
- linked to Evidence;
- reviewed and deduplicated;
- applied to a Pack or project binding;
- promoted into a Skill, validator, check, or Guard;
- superseded or retired when no longer valid.

Continuity may own this repository-local learning loop because improving future agent work is part of the intended product.

## Framework structure — Product-level boundary

### Framework core

The framework core should own stable, reusable semantics needed for the operational loop, such as:

- work selection and bounded work state;
- Run and session continuation;
- scope and completion semantics;
- context and handoff contracts;
- evidence, decision, Guard, and learning relationships;
- validation and state-transition rules;
- extension and Pack contracts.

The exact bounded contexts and package boundaries belong to TA-002.

### Agent adapters

Agent adapters bind the framework to a concrete executor.

The first adapter is Claude Code and may use its native skills, hooks, commands, subagents, tool permissions, and session behavior. Other adapters are optional and should be added only when real use justifies them.

### Reusable Packs

A reusable Pack groups portable behavior such as:

- skills and procedures;
- work-item templates;
- validators and Guards;
- context-formation recipes;
- evidence collectors;
- handoff conventions;
- integration bindings.

Packs should make useful behavior reusable without forcing all repositories into one universal model.

### Project-specific Pack or binding

Nestfolio-specific behavior may remain in a Nestfolio Pack or project binding, including:

- backlog conventions;
- repository structure checks;
- domain-specific validation;
- deployment or release procedures;
- project-specific task routing;
- local Guard and Lesson content.

Project-specific behavior should enter the universal framework core only after repeated evidence shows that it is stable, reusable, and not merely a Nestfolio convention.

## Progressive practical evolution — Validated Direction

### Stage 1 — Claude Code operating layer

Make repository instructions, skills, and durable artifacts work coherently with Claude Code.

### Stage 2 — Skills and repeatable procedures

Encode high-value repository workflows as executable, reviewable skills.

### Stage 3 — Backlog and work orchestration

Select, group, scope, route, and complete agent work without relying on chat memory.

### Stage 4 — Resumable execution

Persist Run progress, decisions, effects, and continuation state across interruption and session loss.

### Stage 5 — Guards and learning

Use Evidence and Lessons to improve procedures and protect future work through reviewed Skills, checks, and Guards.

These stages are an evolution path, not a mandate to restore every current Nestfolio capability unchanged.

## Current feature-family classification rule — Validated Decision

Existing Nestfolio features must not be automatically retained or automatically discarded.

TA-002 must classify each feature as one of:

- framework core;
- Claude Code adapter;
- reusable Pack capability;
- Nestfolio-specific Pack or binding;
- external integration;
- deferred;
- rejected.

Classification must consider actual agentic-development value, coupling, reusability, and maintenance cost.

## PF-001 conclusions retained — Validated Evidence

The following PF-001 conclusions remain valid:

- Continuity must not claim an established Engineering Continuity market category.
- A universal commercial control plane spanning all engineering systems is not the product.
- Continuity must not replace enterprise systems of record by default.
- Preserve-all-features is not a product constraint.
- Goal and Guard remain separate concepts.
- External integrations should be introduced only for concrete usage.
- Repository-native and local-first operation is valuable.
- Human authority remains required for judgment-based and governance-changing choices.
- Context Packs and Handoffs are important continuity capabilities.
- Maintenance cost must remain lower than the work loss and rediscovery cost removed.

## PF-001 conclusions revised or superseded — Validated Decision

The following conclusions no longer govern the product:

- Context Pack and Handoff as the complete product boundary;
- usefulness without coding agents as a product requirement;
- executor neutrality as a reason to avoid Claude Code-specific practical capabilities;
- product prohibition on repository-local backlog, orchestration, Run state, Guards, Lessons, or learning;
- the assumption that all work execution and runtime checkpoints must remain external;
- read-only integrations as a universal product constraint;
- the ten-minute Context Pack/Handoff diagnostic as the defining success test;
- the exclusion of skills, workers, orchestration, and learning from the initial product definition.

`DR-0006` is superseded as the active product-boundary decision by `DR-0012`. Its evidence against a commercial universal control plane and mandatory feature completeness is preserved.

## Constraints — Validated or Provisional

### Repository-native durable state — Validated Constraint

Durable product state must be inspectable, reviewable, and recoverable from repository-local artifacts and declared stores. Hidden model or conversation state is never sufficient authority.

### Practical value before abstraction — Validated Constraint

A general abstraction must not displace a working Claude Code-first capability unless it provides concrete safety, reuse, or maintainability value.

### No enterprise-system replacement — Validated Constraint

Continuity must not recreate organization-wide issue, CI/CD, policy, incident, or catalog systems merely to control agent work.

### Explicit authority — Validated Constraint

Every durable state family must have a declared authority. Local Continuity state and external referenced state may coexist only with clear ownership and synchronization rules.

### Goal and Guard separation — Validated Constraint

Goal and Guard remain distinct in meaning and lifecycle.

### Human decision floor — Validated Constraint

Irreversible, security-sensitive, governance-changing, and genuinely judgment-based actions require explicit human authority or an explicitly accepted delegation policy.

### Evidence-bound completion — Provisional Constraint

Material completion claims should be backed by declared Evidence appropriate to the completion criteria.

### Recoverability — Provisional Constraint

A Run should be recoverable without relying on the previous chat transcript, hidden executor memory, or manual reconstruction of completed effects.

### Selective integration — Validated Constraint

External integrations are added only when a concrete workflow requires them. Universal integration coverage is not a success criterion.

## Sustained Nestfolio dogfooding success criteria — Provisional Validation Contract

The product direction is considered practically validated only after sustained use in Nestfolio demonstrates the full operational loop.

Minimum dogfooding period:

- at least six consecutive weeks of active development;
- at least twenty non-trivial Work Items managed through Continuity;
- at least five multi-item or multi-session work efforts, including at least two Epics or equivalent grouped workflows;
- at least fifteen resumptions after a session boundary or interruption.

Required outcome criteria:

1. **Work continuity** — at least 90% of sampled resumptions identify the correct next action without reconstructing prior chat history.
2. **State integrity** — no material Work Item, scope constraint, accepted Decision, or required completion criterion is lost across sampled resumptions.
3. **Resumable execution** — interrupted Runs resume without duplicated completed effects or silent skipping of required steps in at least 90% of tested recoveries.
4. **Evidence-bound completion** — at least 90% of completed non-trivial items have explicit completion criteria and linked validation Evidence.
5. **Practical work selection** — the developer can select the next coherent Work Item or Working Set from repository state without manually rebuilding priority and dependency context in chat.
6. **Skill reuse** — at least three executable skills or procedures are each reused successfully on three or more real tasks.
7. **Learning loop** — at least five evidence-backed Lessons are recorded, and at least two are reused through an updated Skill, validator, check, Guard, or Pack rule.
8. **Project-specific separation** — Nestfolio-only behavior remains classifiable as a project Pack or binding unless repeated evidence justifies promotion to core.
9. **Operational overhead** — routine Continuity maintenance and state recording remain below 15% of active development time for the dogfooded work.
10. **No forced external duplication** — dogfooding does not require copying the complete state of an enterprise backlog, CI system, or policy platform into Continuity.
11. **Failure visibility** — unresolved decisions, failed validation, stale state, and unavailable evidence are visible and do not silently produce a completion claim.
12. **Developer preference** — after the dogfooding period, the primary developer chooses to keep using the framework for long-running Nestfolio work rather than return to ad hoc Claude Code sessions and manual notes.

Thresholds may be revised before implementation only through an explicit validation Decision. Failure against several criteria should revise the product or its operating model rather than trigger automatic feature expansion.

## Product success metrics — Provisional Proposal

Ongoing metrics should include:

- time from session start to first correct action;
- number of repeated exploratory actions after resume;
- incomplete or lost Work Items;
- scope violations or omitted constraints;
- Run recovery success rate;
- duplicate side effects after retry;
- percentage of completion claims with Evidence;
- skill reuse and failure rates;
- Lesson reuse and Guard effectiveness;
- maintenance overhead;
- human interventions caused by unclear state;
- percentage of project-specific behavior incorrectly placed in core.

Generated code volume, number of integrations, number of supported executors, and number of public objects are not success metrics.

## Kill or revise conditions — Provisional Validation Criteria

Continuity should be materially revised if sustained Nestfolio use shows that:

- disciplined Claude Code skills plus a simple backlog file provide equivalent continuity with substantially less machinery;
- local work state becomes more expensive to maintain than reconstructing it;
- Runs cannot recover reliably from interruption;
- skills and learning do not improve repeated work;
- the framework repeatedly duplicates or conflicts with external authority;
- the core becomes dominated by Nestfolio-specific behavior;
- executor abstraction prevents use of practical Claude Code capabilities;
- agents still require prior chat reconstruction to resume correctly;
- completion state cannot be trusted because Evidence and criteria are routinely missing.

## Program implication — Validated Observation

PI-001 changes the Product Foundation and therefore invalidates TA-001 as an implementation baseline.

RI-001 and G2 remain valid factual current-system evidence.

G3 is reopened. TA-001 is provisional historical architecture derived from the superseded product interpretation.

The sole authorized next iteration is:

**TA-002 — Target Architecture Revision**.
