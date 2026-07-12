---
artifact_id: DR-0003
status: ratified
owner: program
last_updated: 2026-07-12
---

# DR-0003 — Falsify the Product Before Target Architecture

## Decision

Run PF-001 Product Falsification before target architecture.

Then run RI-001 Current Runtime Inventory.

Only after both gates pass may TA-001 Target Architecture begin.

## Rationale

- Current product concepts are attractive but provisional.
- Architecture would create sunk-cost pressure around untested abstractions.
- A neutral system inventory must precede redesign to avoid retrospective misrepresentation.
- Separate sessions reduce contamination between product advocacy, factual analysis, and architecture creation.

## Rejected alternative

Proceed immediately from the current conversation to target architecture.

Rejected because it would combine provisional product theory with incomplete repository understanding.

## Consequences

The target architecture iteration is delayed by two focused iterations, but receives stronger and cleaner inputs.
