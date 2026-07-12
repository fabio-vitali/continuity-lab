---
artifact_id: PROD-FOUNDATION
status: provisional
owner: product
last_updated: 2026-07-12
---

# Product Foundation

## Purpose

Define the current product problem, thesis, constraints, conceptual proposals, and completeness requirements.

Presence in this file does not imply ratification. Each major section states its maturity.

## Problem — Observation

Software projects lose engineering intent across:

- agent sessions;
- model changes;
- employee turnover;
- long-running initiatives;
- incident remediation;
- architecture evolution;
- documentation drift;
- repeated implementation cycles.

Code alone rarely preserves, in durable and executable form:

- what the project is trying to achieve;
- what must remain true;
- why constraints exist;
- which work should happen next;
- what evidence is required for acceptance;
- what decisions must remain human;
- what the project learned from prior failures.

Large mixed contexts degrade agent performance. Product continuity cannot depend on ever-growing conversations or opaque agent memory.

## Product thesis — Provisional Proposal

> A software project should be able to preserve its engineering intent across agents, sessions, people, and change.

The product connects:

- work;
- enforcement;
- evidence;
- human decisions;
- resumable execution;
- organizational learning;
- intentionally formed context.

It must make the project progressively harder to misunderstand, abandon, or break.

## Category — Provisional Proposal

- Category: **Engineering Continuity**
- Product working name: **Continuity**
- Product type: **Engineering Continuity Control Plane**
- Promise: **Keep engineering intent intact across agents, sessions, people, and change.**

Naming remains out of scope until a dedicated market and trademark iteration.

## Non-negotiable constraints — Decision

### Preserve feature completeness

The future product must provide all major current feature families, even if renamed, restructured, or reimplemented:

- check/Guard registry and lifecycle;
- watch and triggers;
- findings and intake;
- backlog routing;
- prioritization and rank;
- single-active discipline;
- planner;
- worker;
- grouped or epic orchestration;
- durable journal;
- pause and fulfil;
- human decision floor;
- scope control;
- deploy and ship gates;
- evidence and proof;
- lessons;
- minting enforcement;
- curation, supersession, and retirement;
- evaluator calibration and flake contracts;
- starter packs;
- executor integrations;
- operational status;
- deterministic and judgment-based evaluation.

### Executor independence

No central product concept depends on Claude Code or another single executor.

### Context resilience

Work survives model replacement, session loss, truncation, executor failure, interruption, and human/agent handoff.

### Context formation

Task-specific context is intentionally formed rather than indefinitely accumulated.

### Human authority

Irreversible and governance-changing operations remain subject to explicit human Decision policies.

### Local-first value

The product provides meaningful value without a mandatory hosted service.

### Progressive adoption

Teams gain value before adopting autonomous agents or replacing task-tracking systems.

### Evidence-based acceptance

No significant transition relies only on an agent summary or a successful process exit.

## Central abstraction — Provisional Proposal

### Engineering Commitment

A durable commitment made by the project.

#### Goal

A condition the project commits to making true.

Properties:

- completion lifecycle;
- consumes work;
- requires acceptance Evidence.

#### Guard

A condition the project commits to keeping true.

Properties:

- enforcement lifecycle;
- protects future work;
- requires evaluator Evidence and lifecycle governance.

Core duality:

```text
Goal:  must become true
Guard: must remain true
```

A violated Guard may create a Goal. A completed Goal may create, strengthen, narrow, supersede, or retire a Guard.

This proposal must survive PF-001 before architecture treats it as a stable foundation.

## Candidate public concepts — Provisional Proposal

- **Commitment**
- **Observation**
- **Evidence**
- **Run**
- **Decision**
- **Lesson**
- **Event**

Questions requiring falsification:

- Is Commitment a useful abstraction or merely elegant terminology?
- Should Goal and Guard share an entity, a schema, or only vocabulary?
- Is Observation necessary in initial UX?
- Does Lesson belong in the kernel?
- Is Event public or internal?

## Coupled loops — Provisional Proposal

### Delivery loop

```text
Observe
→ form/update Goal
→ prioritize
→ Run
→ collect Evidence
→ accept or reject
```

### Learning loop

```text
Lesson
→ propose Guard change
→ build/calibrate evaluator
→ ratify
→ enforce
→ measure effectiveness and rot
→ keep, supersede, or retire
```

### Flywheel

```text
Guard violation
→ Observation
→ Goal
→ Run
→ Lesson
→ Guard evolution
```

## Product-shape hypothesis — Provisional Proposal

```text
Product
├── Kernel
├── First-party modules
├── Providers
└── Packs
```

Candidate first-party modules:

- Assurance;
- Work;
- Execution;
- Learning;
- Trust;
- Console.

Candidate provider families:

- Executor;
- Evaluator;
- Trigger;
- Decision;
- Store.

Candidate reusable content:

- Foundation Packs;
- Ecosystem Packs;
- Organization Packs.

No architecture decision may ratify these before PF-001 and RI-001.

## Evidence principle — Provisional Proposal

> No significant transition occurs without identifiable Evidence.

Evidence should be attributable, reproducible where possible, scoped, freshness-aware, and explainable.

The product should answer:

> Why is this considered done, safe, accepted, or enforceable?

## Context Formation — Constraint and Product Hypothesis

An executor receives a formed Context Pack containing:

- objective;
- constraints;
- authorized scope;
- applicable Commitments;
- current Run state;
- pending Decisions;
- selected Evidence;
- relevant Lessons;
- relevant code slices;
- known uncertainties;
- explicit exclusions;
- output contract.

The system distinguishes:

- canonical memory;
- operational memory;
- retrieved working context;
- ephemeral reasoning.

Context Formation is both a product requirement and a capability to be designed.

## Progressive adoption — Provisional Proposal

1. **Observe** — import current checks and expose Guard health.
2. **Govern** — Evidence policies, gates, decisions, provenance.
3. **Coordinate** — Goals, priority, scope, resumable Runs.
4. **Learn** — Lessons, Guard proposals, calibration, retirement.
5. **Delegate** — multiple executors and bounded autonomy.

## Non-goals — Provisional Decision

The product is not primarily:

- a generic task tracker;
- an agent wrapper;
- a generic policy engine;
- a manually maintained knowledge graph;
- an automatic rule generator without ratification;
- a mandatory SaaS;
- a bare microkernel without integrated first-party workflows.

## Product metrics — Provisional Proposal

Prefer:

- Commitment coverage;
- Guard effectiveness;
- Guard precision;
- learning closure rate;
- recurrence rate;
- Evidence completeness;
- continuity rate;
- Guard maintenance debt.

Avoid optimizing for:

- number of Guards;
- number of Lessons;
- number of agent Runs;
- generated lines of code.

## Required validation before ratification

PF-001 must attempt to falsify:

- the problem severity;
- category distinctiveness;
- user willingness to adopt;
- central abstraction;
- feature coherence;
- progressive adoption;
- local-first premise;
- Context Formation as differentiator;
- product boundary versus CI, task trackers, knowledge bases, policy engines, and agent frameworks.
