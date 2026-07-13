---
artifact_id: DR-0008
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0008 — Make Repository Artifacts Authoritative and Keep Ledger State Secondary

## Context

The surviving product hypothesis requires repository-native, inspectable, portable continuity artifacts. The current Nestfolio runtime demonstrates useful Git-native journaling and replay, but its journal is operational authority for runtime workstreams. The target must not make an opaque journal or hosted database the only source of Context Pack, Handoff, or pending-decision state.

## Decision

Store authorized Context Pack versions, published Handoff versions, validation reports, local Pack definitions, and their lifecycle metadata as human-inspectable repository artifacts.

Use separate local operational stores for:

- indexes and reference caches;
- an operation journal for crash recovery, idempotency, pause/resume, and writer leases;
- an append-only internal event ledger for audit, projections, and recovery diagnostics.

Repository artifacts are the authority for product-owned durable state. The event ledger is not the primary state store and does not make the architecture event-sourced.

Authorized Context Pack and published Handoff versions are immutable. Corrections create a new version and explicit supersession.

A pending human decision must be present in the product artifact before an operation pauses; it may not exist only in the local journal.

## Status

Validated, not ratified.

## Supporting evidence

- local-first and context-resilience constraints in `docs/10-product/product-foundation.md`;
- journal behavior and authority observations in `docs/20-current-system/current-runtime-map.md`;
- persistence, journal, and ledger sections in `docs/30-target-architecture/target-architecture.md`.

## Alternatives considered

### Event-sourced primary state

Rejected because it weakens direct Git inspection and makes local editing, recovery, and handoff dependent on replay infrastructure without proven value.

### Hosted database as mandatory authority

Rejected because initial value must exist locally and without procurement or service availability.

### Repository files only, with no operational journal

Rejected because interrupted provider calls, long formation stages, and pending decisions require recoverable idempotent operations.

## Rejected alternatives

- last-write-wins lifecycle mutation;
- storing authorized artifacts only in a vendor executor memory;
- making Git history alone represent explicit artifact lifecycle state.

## Risks

- File artifacts and local ledger records can temporarily diverge after a crash.
- Human edits can bypass application commands.
- A later hosted replica may create authority ambiguity.

## Validation requirements

- Recovery tests must cover artifact-written/event-missing and event-present/artifact-missing cases.
- Digest verification must detect edits after authorization/publication.
- Deleting indexes and caches must not lose authoritative state.
- A fresh installation must reconstruct usable state from repository artifacts and declared providers.

## Consequences

- Persistence adapters must support immutable versions and atomic replacement/creation semantics.
- Console and CLI use application services rather than writing files directly.
- Hosted collaboration, if introduced, must preserve repository authority or be explicitly decided otherwise.

## Supersedes

None.

## Superseded by

None.
