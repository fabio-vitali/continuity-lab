---
artifact_id: DR-0024
status: validated
owner: program
last_updated: 2026-07-17
---

# DR-0024 — Lightened Development Process for the Solo Experimental Phase

## Context

The Continuity program is developed by a single human (fabio.vitali, human
program owner) with a single Claude Code executor. Nothing is in production;
all three repositories are experimental. The binding constraint is the token
budget of the executor subscription.

Through MI-004 the development process deliberately mirrored the product's
own strictest discipline — pinned multi-repository SHA gates, byte-level
SHA-256 manifests, fresh single-purpose sessions, and the segmented
canonical complete-read protocol — in order to prove that such discipline is
executable at all. That validation value has been captured: MI-003-R2 and
MI-004 closed with UNCONDITIONAL PASS under the strict regime and stand as
immutable results, and MI-003 and MI-003-R1 record exactly how the strict
protocol fails closed.

The product's own context-delivery mechanism now exists: MI-004 produced an
explicitly human-authorized Context Pack with a digest-matched adapter view,
precisely so that an executor does not need to re-read entire repositories
to obtain trustworthy, bounded context.

## Decision

1. Development sessions — how the program is driven from
   continuity-workspace — adopt a lightened process: reduced Git checks
   (clean expected branch before writes; record SHAs after pushes),
   aggregated phases (contract authoring and publication in one session;
   execution may follow when context allows), targeted reads instead of
   exhaustive complete-read sweeps, per-session executor model selection,
   and file-based handoffs saved to `~/continuity-handoffs/` with fully
   resolved launch commands.
2. Product-level guarantees are explicitly NOT lightened: Context Pack
   digest bindings, exclusive digest-matched adapter-view consumption,
   deterministic frozen writable boundaries, fail-closed typed diagnostics,
   truthful guarantee levels (DR-0019), explicit human authorization
   (DR-0020), deterministic evidence, conjunctive unconditional verdicts,
   and immutable history. Continuity as a product remains designed for
   adversarial contexts; validating its strict protocols happens through
   scoped, deliberate tests, not through blanket session discipline.
3. Strict session choreography — pinned-SHA multi-repository alignment
   gates, byte-level authoring manifests, and the segmented canonical
   complete-read protocol — is retired as blanket development-session
   discipline. It remains available as a deliberate validation instrument
   when a future iteration explicitly targets it.
4. The session executor may use its own sub-agents and tools for mechanical
   work. Delegating contracted implementation to the product's executor
   procedures (any Skill, `/backlog-next`, `continuity:invoke`) remains
   prohibited inside execution contracts.

## Status

Validated

## Supporting evidence

- MI-003-R2 and MI-004 UNCONDITIONAL PASS under the strict regime
  (`docs/70-implementation/README.md`).
- The authorized Context Pack version 1 and its digest-matched adapter view
  published at Nestfolio `a760d6f41ff14491d5b008a7f13234ba0221bcec`.
- The lightened operating instructions in continuity-workspace `CLAUDE.md`
  (workspace revision `b7259cee7241387eaa849309f6fd39b84f725e7e`).

## Alternatives considered

- Keep the strict regime for every development session: rejected — it
  spends the binding token budget re-proving what is already immutably
  proven.
- Lighten product-level guarantees as well: rejected — the product targets
  adversarial contexts; its guarantees are the subject matter under
  development, not development overhead.

## Rejected alternatives

Recorded under alternatives considered.

## Risks

- A lightened session could drift into product-guarantee territory. This is
  mitigated by the explicit boundary in this decision and by contracts that
  bind every product input by exact digest.
- Reduced Git gating relies on the single-developer assumption. If more
  actors or machines join, session gating must be revisited by a new
  Decision.

## Validation requirements

SE-001-R1 executes under the lightened session choreography while every
product-level guarantee — digest-bound context delivery, boundary
determinism, fail-before/pass-after gap proof, fail-closed scenarios,
deterministic evidence, conjunctive verdict — remains contractually
required and verified.

## Consequences

- SE-001 (published, never executed) is superseded by SE-001-R1, which
  carries every product-level binding forward unchanged.
- Session prompts shrink to scope, product bindings, light gates, and
  verdict rules.
- Handoff prompts are always saved outside the repositories with a fully
  resolved launch command that includes the per-session executor model.

## Supersedes

None. DR-0001 through DR-0023 are unaffected.

## Superseded by

None.
