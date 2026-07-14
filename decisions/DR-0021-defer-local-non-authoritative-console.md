---
artifact_id: DR-0021
status: validated
owner: product-experience
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# DR-0021 — Defer a Local Non-Authoritative Console

## Context

TA-002 deferred a local graphical Console. PX-001 must decide whether Product Experience requires, defers, or rejects it.

A Console could improve dense context inspection, Run timelines, Decision queues, recovery, team handoff, and learning review. It could also create implementation cost, duplicate CLI and repository artifacts, imply a hosted control plane, or become an accidental second source of truth before core workflows are validated in routine use.

## Decision

Defer a local non-authoritative Console.

Initial required surfaces are:

- Claude Code adapter views and commands;
- a non-authoritative CLI over Application Services and read models;
- human-readable canonical repository artifacts;
- non-authoritative inspection/export bundles.

A later Console may be proposed only if dogfooding evidence shows that these surfaces are insufficient for first value, context/authority inspection, Run visibility, human Decisions, recovery, handoff, or learning review.

Any future Console must:

- remain local-first and optional;
- read through Application Services/read models;
- issue mutations only through the same Application Services used by CLI and adapters;
- link every view to canonical artifacts, revisions, and digests;
- maintain no authoritative product database;
- not require a hosted service, commercial control plane, universal integration, or agentless product position.

## Status

Validated by PX-001 CLI-versus-Console analysis.

## Supporting evidence

- TA-002 sections 13 and 19;
- PF-001 evidence against a universal Console and duplicated authorities;
- VS-001/VS-001A evidence that the validated loop can operate through adapter commands and repository artifacts;
- `docs/40-product-experience/product-experience.md`, sections 13–15.

## Alternatives considered

### Require a Console for first value

Rejected because the ten-minute path is achievable through CLI and Claude Code and a Console would delay practical value.

### Reject a Console permanently

Rejected because recovery, team handoff, and learning review may later justify a local visual surface.

### Build a hosted Console/control plane

Rejected because it introduces a second-source and adoption boundary not required by the product premise.

## Rejected alternatives

- Console-owned state;
- Console-only workflows;
- mandatory account or server;
- hidden synchronization between Console and repository state.

## Risks

- CLI views may become dense;
- recovery across many objects may be difficult;
- non-technical reviewers may prefer a visual surface.

Mitigation: structured human views, machine-readable output, export bundles, and explicit re-evaluation criteria.

## Validation requirements

Reconsider the Console only if measured dogfooding shows one or more of:

- first value cannot be reached within ten minutes because of surface complexity;
- operators cannot identify current state and exact next action reliably;
- context authorization errors arise from fragmented inspection;
- recovery requires unsafe manual joining of canonical artifacts;
- team takeover or Lesson review has unacceptable overhead.

## Consequences

- no Console code is authorized by PX-001;
- CLI and adapter semantics must be sufficient and not designed as temporary throwaways;
- migration architecture may reserve a compatible surface boundary but must not require a Console.

## Supersedes

None.

## Superseded by

None.
