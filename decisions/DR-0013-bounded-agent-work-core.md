---
artifact_id: DR-0013
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes:
  - DR-0007
superseded_by: null
---

# DR-0013 — Adopt a Bounded Agent-Work Core with First-Class Runs

## Context

TA-001 defined a dependency-free Kernel centered on Context Packs, Handoffs, typed references, and continuity diagnostics. PI-001 corrected the product boundary: repository-local Work Items, Working Sets, Sessions, resumable Runs, Guards, Evidence, Decisions, and Lessons are legitimate product concerns when they exist to operate coding-agent work.

Retaining the TA-001 Kernel unchanged would leave the complete operational loop outside the framework. Restoring the whole Nestfolio runtime as core would instead promote project-specific implementation breadth into universal semantics.

## Decision

Continuity has a dependency-free **Framework Core** containing only stable domain semantics and lifecycle rules required by continuous agentic development:

- Work Item, Working Set, Epic, work selection, dependencies, and completion state;
- Scope, exclusions, constraints, completion criteria, and authorized change boundaries;
- Session, Run, Checkpoint, pause, resume, retry, cancellation, failure, and completion;
- Context Pack, Formation Trace, and Handoff contracts;
- Skill and procedure references, prerequisites, outputs, and execution-result contracts;
- Guard, Validation Requirement, Evidence, Waiver, and completion-gate relationships;
- Decision, Observation, Lesson, and governed promotion proposals;
- typed identifiers, revisions, digests, actor/authority descriptors, and external references;
- lifecycle transition guards and concurrency tokens.

The Core does not contain:

- filesystem, Git, network, shell, database, model, or vendor SDK code;
- Claude Code commands, hooks, subagents, session formats, or skill-file formats;
- Nestfolio backlog fields, lane rules, repository topology, deploy commands, or project checks;
- organization-wide issue, CI/CD, incident, catalog, or policy aggregates;
- generic arbitrary-command, arbitrary-tool, or universal workflow capabilities;
- a shared Goal/Guard or Commitment aggregate.

Work Coordination, Context Formation, Execution Continuity, Assurance, and Decision/Learning remain distinct domain areas even though they share Core primitives. Application services coordinate them through explicit commands; no aggregate silently changes another aggregate's state.

## Status

Validated by TA-002 and accepted as the active Framework Core boundary.

## Supporting evidence

- corrected Product Foundation and `DR-0012`;
- the Current Runtime Map's practical evidence for local backlog state, journals, workers, orchestration, Guards, Decisions, and Lessons;
- TA-001 evidence that dependency direction, typed references, explicit scope, Context Packs, and Handoffs remain valuable;
- VS-001's need to execute and resume a complete agent-work path without external workflow authority.

## Alternatives considered

### Retain DR-0007 unchanged

Rejected because it excludes first-class Run and repository-local work semantics that are now part of the validated product direction.

### Restore the full Nestfolio engine as framework core

Rejected because evaluator types, triggers, deployment flows, lane classification, and backward-edge details are not universal domain semantics.

### Put Work and Run state only in the Claude Code adapter

Rejected because durable resumption and evidence-bound completion must survive one executor session and remain inspectable outside hidden vendor state.

### One universal workflow aggregate

Rejected because Work Item, Working Set, Run, Guard, Decision, Evidence, and Lesson have different authority and lifecycle semantics.

## Risks

- the broadened Core can become a new control plane if external authority boundaries are ignored;
- premature generalization of Nestfolio concepts could contaminate the Core;
- too many first-class concepts could increase routine maintenance cost.

## Validation requirements

VS-001 must prove that:

- one or more Work Items can form a bounded Working Set;
- a Run can checkpoint and resume in a new Claude Code session without manual state reconstruction;
- completion is blocked without required Evidence;
- a candidate Lesson remains non-canonical until reviewed;
- Nestfolio-specific procedures remain outside Core semantics.

## Consequences

- `DR-0007` is superseded.
- Context Pack and Handoff remain Core capabilities but no longer define the entire product.
- public Run and Checkpoint concepts are authorized.
- generic execution capabilities remain excluded from the Core.

## Supersedes

`DR-0007 — Define a Narrow Continuity Kernel`.

## Superseded by

None.
