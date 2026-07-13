---
artifact_id: DR-0006
status: superseded
owner: product
last_updated: 2026-07-13
supersedes: []
superseded_by: DR-0012
---

# DR-0006 — Narrow the Initial Product Boundary and Reject Feature Completeness as a Product Constraint

## PI-001 supersession note

`DR-0012` supersedes this record as the active product-boundary decision.

The following conclusions remain preserved through DR-0012:

- do not build a universal commercial engineering control plane;
- do not require preservation of every current feature;
- do not replace enterprise systems of record by default;
- add external integrations selectively.

The following restrictions are superseded:

- Context Pack and Handoff as the complete product boundary;
- categorical exclusion of repository-local backlog, orchestration, resumable Run state, Guards, Lessons, and learning;
- no-agent viability and theoretical executor neutrality as product requirements;
- read-only integration and externally owned execution as universal product constraints.

The remainder of this file is retained as historical PF-001 evidence and rationale.

## Context

The Product Foundation required the future product to preserve every major feature family of the current runtime and proposed a product composed of Work, Assurance, Execution, Learning, Trust, Context Formation, Providers, Packs, and a Console.

PF-001 compared this surface with complete current stacks. Existing issue trackers, source-control platforms, CI/CD, policy engines, internal developer platforms, workflow runtimes, incident tools, and coding agents already own most of these responsibilities.

Requiring feature completeness before validation prevents genuine falsification, turns implementation history into product authority, and forces multiple product categories into one bundle.

## Decision

Narrow the initial product hypothesis to a repository-native continuity layer centered on:

- explicit and reproducible Context Packs;
- executor-neutral Handoffs;
- authorized scope and explicit exclusions;
- pending human Decisions and uncertainty;
- references to externally authoritative Evidence;
- validation that work can continue without prior conversation.

The product must integrate with and reference existing authorities rather than own backlog, CI, policy enforcement, incident records, service catalogs, or agent-runtime checkpoints by default.

Reject **preserve all current feature families** as a non-negotiable product constraint.

RI-001 must still inventory every current runtime feature family neutrally. Each feature's future inclusion, externalization, rejection, or deferral requires evidence and an explicit later Decision.

Do not infer that this Decision removes or deprecates any current implementation feature.

## Status

Superseded by `DR-0012`. This decision was historically validated during PF-001 but no longer governs the active product boundary.

## Supporting evidence

See `docs/50-validation/product-falsification-report.md`, especially:

- Strongest substitute stacks;
- Product completeness and coherence;
- Economics and maintenance;
- Cross-scenario conclusions;
- Fatal flaws versus fixable risks;
- Initial adopter and adoption wedge.

## Alternatives considered

### Preserve the full current feature set and find a unifying architecture

Rejected because it converts implementation inheritance into product strategy and creates a broad control plane before market validation.

### Build an enterprise control plane over all existing systems

Rejected as an initial product because of integration, procurement, synchronization, and governance debt.

### Build only generic agent memory

Rejected because agent vendors and open-source projects already provide memory, instructions, skills, and session persistence.

### Build a thin continuity layer that references existing authorities

Accepted as the surviving hypothesis.

## Rejected alternatives

- mandatory backlog import;
- a new universal Guard registry in the initial product;
- owning agent durable execution;
- a universal Console as the first adoption surface;
- requiring a hosted service for initial value.

## Risks

- The surviving wedge may be too small or easy for platform vendors to absorb.
- Repository templates and scripts may reproduce it adequately.
- Context validation may create false confidence or ritual overhead.
- Local-first operation may limit collaboration and analytics.
- A narrow product may not support a viable standalone business.

## Validation requirements

Before expanding the boundary, demonstrate:

- useful first value in ten minutes;
- measurable improvement over repository plus issue/PR, CI, and agent-instruction baselines;
- low authoring and maintenance cost;
- executor portability;
- no duplicated authoritative state;
- reliable omission and contradiction diagnostics;
- successful human and agent takeover across multiple repositories.

## Consequences

- The Product Foundation no longer treats all current feature families as mandatory.
- RI-001 remains neutral and complete but must not assume that every current capability belongs in the future product.
- TA-001 remains blocked until RI-001 and may not restore the broad boundary silently.
- Work, policy enforcement, agent orchestration, incident management, and internal developer portal capabilities are external by default.

## Supersedes

- The preserve-feature-completeness constraint in the 2026-07-12 Product Foundation.
- The broad Kernel/modules/Providers/Packs product-shape proposal as an assumed complete product.

## Superseded by

`DR-0012 — Reframe Continuity as a Repository-Native Agentic-Development Framework`.
