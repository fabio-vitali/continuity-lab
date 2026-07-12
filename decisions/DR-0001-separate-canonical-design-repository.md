---
artifact_id: DR-0001
status: ratified
owner: program
last_updated: 2026-07-12
---

# DR-0001 — Use a Separate Canonical Design Repository

## Decision

Create a private repository named `continuity-lab`.

`continuity-lab` is canonical for process, product, architecture, validation, migration, and design state.

Nestfolio remains canonical for the current runtime implementation and tests.

## Rationale

- The proposed product is broader than the current Nestfolio runtime.
- Product design must be able to reject or replace current implementation assumptions.
- Mixing provisional product research with application code would blur canonical ownership.
- A separate repository supports context-isolated AI sessions and explicit handoffs.
- Current implementation can be referenced by immutable revision rather than copied.

## Rejected alternatives

### Store all documents in Nestfolio

Rejected because it makes the future product appear subordinate to one implementation and encourages accidental fossilization of provisional design.

### Keep documents only outside Git

Rejected because local folders do not provide reliable canonicality, history, diff review, or agent handoff.

### Copy the Nestfolio runtime into the lab

Rejected because it creates synchronization and provenance problems.

## Consequences

- Two repositories exist.
- Cross-repository references must record exact revisions.
- Implementation changes remain in Nestfolio until an approved extraction or migration begins.
