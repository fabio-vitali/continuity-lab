---
artifact_id: DR-0020
status: validated
owner: product-experience
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# DR-0020 — Require Explicit Human Context Authorization by Default

## Context

TA-002 permits Context Pack authorization by an explicit human or a configured accepted deterministic policy. Product Experience must choose a safe default.

Context Packs bind Work, Scope, Decisions, Guards, Pack assets, repository sources, uncertainty, and required Evidence. Automatic authorization without an accepted policy could start Claude Code from incomplete, contradictory, stale, or over-broad context while hiding the authority decision inside convenience behavior.

## Decision

The default authorization path is explicit human review and authorization of the exact validated Context Pack version and digest.

A deterministic auto-authorization policy is allowed only when:

- a human authority has explicitly accepted the policy and its scope;
- the policy is repository-readable and versioned;
- every required input is valid, current, and non-contradictory;
- no material uncertainty, degraded source, unresolved Decision, Scope expansion, Guard conflict, waiver, or unsupported validation is present;
- the authorization result records policy identity, version, actor/delegation, and exact Context Pack digest;
- the user can revoke the policy or require manual authorization for a Work class.

A formed or validated Context Pack is not executable until authorization succeeds. The Claude Code adapter receives only the exact authorized version.

Rejection is an explicit non-authorization disposition. Revocation applies after authorization. Expiration is exposed as a time/freshness cause of `stale`, not as a silent grace state.

## Status

Validated by PX-001 authority and failure scenario analysis.

## Supporting evidence

- TA-002 sections 7.2, 9, 15, and 16.3–16.4;
- `DR-0014` repository-local canonical state;
- `DR-0017` human authority and Evidence separation;
- `docs/40-product-experience/product-experience.md`, sections 7, 8, and 10.

## Alternatives considered

### Auto-authorize every structurally valid Context Pack

Rejected because structural validity does not resolve material uncertainty, authority, Scope, or degraded-input judgment.

### Require human authorization forever

Rejected because accepted deterministic policies can safely remove repetitive approval when their boundaries are explicit and testable.

### Let Claude Code decide whether context is sufficient

Rejected because executor judgment cannot grant authority to itself.

## Rejected alternatives

- authorization inferred from starting Claude Code;
- warning-only authorization for contradictory or missing required inputs;
- mutable authorized Context Packs;
- generic `--yes` as a substitute for required authority.

## Risks

- frequent manual authorization may create friction;
- users may approve without inspecting details;
- deterministic policies may become overly broad.

Mitigation: concise default summaries, explicit blocking differences, versioned policy scope, and dogfooding metrics on authorization time and errors.

## Validation requirements

- first-time users must identify included/excluded sources and active authority before authorization;
- degraded, contradictory, stale, or invalid context must not auto-authorize;
- policy authorization must produce the same auditable result shape as human authorization;
- revocation and reformation must prevent use of the old version.

## Consequences

- context formation, validation, authorization, delivery, and execution remain visibly distinct;
- first value at Levels 1–3 does not require Context Pack authorization;
- migration architecture and implementation must preserve an explicit authorization boundary.

## Supersedes

None.

## Superseded by

None.
