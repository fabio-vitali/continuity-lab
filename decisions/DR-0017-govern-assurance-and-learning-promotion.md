---
artifact_id: DR-0017
status: validated
owner: architecture
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# DR-0017 — Govern Assurance and Learning Promotion Explicitly

## Context

The current Nestfolio runtime implements checks, findings, human-floor lifecycle changes, Lessons, and check minting. The corrected Product Foundation permits Guards and learning but requires human authority for judgment-based and governance-changing decisions. Automatically turning an agent observation into a canonical rule would create unsafe policy drift and curation debt.

## Decision

Continuity separates four related lifecycles.

### Observation

A raw finding from a Run, validation failure, human review, or runtime event. It is evidence-linked but has no rule authority.

### Lesson

A reviewed reusable statement about how future work should be performed, scoped, validated, or avoided. A Lesson may be accepted, rejected, superseded, retired, or proposed for promotion.

### Change proposal

An explicit proposal to modify a Skill, Procedure, validator, Guard, Pack, or project binding. It identifies supporting Evidence, expected benefit, risk, validation plan, and required authority.

### Canonical rule or procedure

Only a reviewed and accepted change updates a Pack, Skill, validator, or Guard. Activation follows that artifact's own lifecycle and authorization rules.

Assurance keeps Goal and Guard separate. A Guard describes a condition that must remain true and declares applicability, evaluation mode, required Evidence, severity, exception policy, and owner. Completion criteria describe what must become true for one Work Item or Run. A failed Guard may block, create work, or require a waiver; it does not become the work objective automatically.

Deterministic checks, agent review, and human review are distinct validation modes. Their Evidence and authority are never collapsed into one opaque score.

Waivers or exceptions are explicit, scoped, time-bounded where possible, evidence-linked, and authorized by a declared human or policy authority.

## Status

Validated by TA-002 and accepted as the active Assurance and Learning lifecycle decision.

## Alternatives considered

### Restore automatic check minting as universal behavior

Rejected because observations and agent suggestions cannot safely become canonical rules without governance.

### Keep learning entirely external

Rejected because repository-local improvement of agent work is part of the product premise.

### Use one lifecycle for Goals and Guards

Rejected by `DR-0005`.

### Treat agent review as equivalent to deterministic validation

Rejected because reproducibility and authority differ.

## Risks

- review queues can accumulate;
- low-quality observations can create noise;
- Guard and procedure changes can become overly bureaucratic.

## Validation requirements

- VS-001 records a candidate Lesson without activating a rule.
- promotion requires explicit review and creates a versioned change to a Skill, validator, Guard, or Pack.
- failed validation cannot be hidden by a Lesson or agent narrative.
- unsafe or unsupported rule proposals are rejectable and auditable.

## Consequences

- the useful intent of Nestfolio's backward edge is retained, but automatic promotion is not.
- candidate learning is part of the framework; concrete evaluators and rules normally live in Packs.
- Assurance and Learning share Evidence but retain separate lifecycle authority.

## Supersedes

None.

## Superseded by

None.
