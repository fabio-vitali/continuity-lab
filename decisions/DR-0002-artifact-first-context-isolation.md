---
artifact_id: DR-0002
status: ratified
owner: program
last_updated: 2026-07-12
---

# DR-0002 — Use Artifact-First Context Isolation

## Decision

Each major iteration runs in a fresh AI context.

The new context receives only a declared Context Pack, canonical artifacts, and required source slices.

Raw historical chats are excluded.

Chat and Canvas are never canonical.

## Rationale

Large mixed contexts degrade model performance, blur epistemic status, preserve superseded proposals, and make handoffs dependent on conversational history.

Canonical artifacts allow deliberate semantic compression and reproducible continuation.

## Consequences

- Every session has a named directory.
- Every session begins from a Context Pack and exact prompt.
- Every session ends with repository files and a handoff.
- The user reviews a Git diff before accepting AI output.
