---
artifact_id: DR-0009
status: superseded
owner: architecture
last_updated: 2026-07-13
supersedes: []
superseded_by: DR-0015
---

# DR-0009 — Use Typed, Read-Oriented Provider Contracts

## TA-002 supersession note

`DR-0015` supersedes this record as active architecture authority. Typed authority-specific ports and rejection of generic arbitrary execution are preserved. Universal read-only integration and executor-export-only behavior are superseded by DR-0015.

The remainder is retained unchanged as TA-001 historical evidence.

## Context

Continuity must reference repositories, work items, Decisions, Evidence, Guards, ownership data, and executor formats without taking authority from their existing systems. Generic host capabilities such as arbitrary execution, task fan-out, and trigger handling would make the domain depend on one runtime and allow Packs or source content to escalate behavior.

## Decision

Define narrow provider ports by external authority type:

- repository source;
- work/Goal reference;
- Decision reference;
- Evidence reference;
- Guard reference;
- ownership metadata;
- executor export;
- clock and actor identity.

Providers are read/resolve/export oriented by default. They return typed provenance, revision, digest or immutable locator where available, freshness, access limitations, and typed failures.

No generic arbitrary-shell or arbitrary-tool execution contract belongs to the product domain.

External writes are excluded from the initial provider surface. Any later write capability requires a separate Decision Record, explicit idempotency and confirmation semantics, and proof that it does not create a second source of truth.

Resolved content is treated as untrusted data. It cannot change provider permissions, Pack rules, authorization policies, or Kernel lifecycle semantics.

## Status

Superseded by `DR-0015`; retained as historical TA-001 evidence.

## Supporting evidence

- executor-independence and existing-authority constraints in `docs/10-product/product-foundation.md`;
- current engine/adapters boundaries and project-coupling observations in `docs/20-current-system/current-runtime-map.md`;
- provider and dependency sections in `docs/30-target-architecture/target-architecture.md`.

## Alternatives considered

### One generic provider/tool interface

Rejected because it hides authority types, weakens diagnostics, and encourages runtime-specific capabilities.

### Import all external state into a Continuity graph

Rejected because it creates synchronization and governance debt.

### Permit writes from the start

Rejected because the initial wedge only needs resolution and export, while writes introduce authority and failure complexity.

## Rejected alternatives

- provider-to-provider dependencies;
- domain modules importing vendor SDKs;
- source text treated as trusted instructions;
- non-deterministic provider output authorizing lifecycle transitions by itself.

## Risks

- Narrow ports may require more adapters.
- Some systems cannot provide immutable revisions or digests.
- Read-only integrations may limit convenience in early workflows.

## Validation requirements

- Implementations must demonstrate at least two repository/executor combinations without changing Kernel contracts.
- Provider conformance tests must verify provenance and typed-failure behavior.
- Security tests must show that hostile source content cannot alter capabilities or authorization.

## Consequences

- Provider adapters are anti-corruption layers.
- Context Formation records provider identities, versions, and limitations.
- Work, CI, policy, incident, and executor systems remain authoritative.

## Supersedes

None.

## Superseded by

`DR-0015`.
