---
artifact_id: DR-0026
status: validated
owner: program
last_updated: 2026-07-19
---

# DR-0026 — Cheapest-Adequate Model and Reasoning-Effort Selection for Development Sessions

## Context

DR-0024 lightened development-session choreography for the solo
experimental phase and, in its Decision point 1, introduced "per-session
executor model selection" as one of the lightened controls, without
specifying how that selection must be made. In practice the selection
criterion — always pick the cheapest model tier and reasoning-effort level
genuinely adequate for the task, escalating only for judgment work — was
worked out and enforced only in continuity-workspace's `CLAUDE.md`
operating instructions, added there directly across two commits
(`d45449dfd5d96ea4e89174e535a0942aa0e4021f` "Mandate cheapest-adequate
model selection in the model policy" and
`8ca88401d6a17e80c82a5cdf286f144fc0257e2b` "Add per-session
reasoning-effort selection to the model policy and handoff launch
template") without a corresponding canonical decision in continuity-lab.

This left the program's actual model/effort selection rule undocumented
in the repository DR-0024 itself names as governing this class of
decision (Decision point 1: "development sessions ... adopt a lightened
process ... per-session executor model selection"), and absent from
continuity-lab entirely — an inconsistency between where the program
records canonical process decisions and where this one specific rule
actually lives. It was surfaced by inspection during the SD-001 sustained
dogfooding period (2026-07-19) when checking whether continuity-lab
reflected the same session-discipline rules as continuity-workspace.

The binding constraint driving both the original DR-0024 lightening and
this elaboration is unchanged: the token budget of the single-developer
Claude Code executor subscription. Under-selecting the model/effort tier
wastes nothing observable but risks an inadequate result; over-selecting
spends budget that is the program's actual scarce resource. Both failure
directions matter, with a documented asymmetry: a wrong verdict recorded
against an immutable MI-*/SE-* result costs far more than the tokens
saved by under-modeling it, so the rule must bias toward escalation
specifically when a session's output becomes part of the immutable
record.

This decision governs continuity-workspace's own session-choreography
practice ONLY, exactly as DR-0024 does. It is process-only under DR-0024
and does not weaken, alter, or touch any Continuity Core product-level
guarantee: Context Pack digest bindings, adapter views, writable
boundaries, fail-closed behavior, guarantee levels, evidence trails,
explicit human authorization, conjunctive unconditional verdicts, and
immutable history all remain exactly as decided by DR-0001 through
DR-0025.

## Decision

1. **Two independent cost axes.** Every development session selects both
   an executor model AND a reasoning-effort level; DR-0024's "per-session
   executor model selection" is elaborated to mean both, chosen
   independently, each on the cheapest-adequate rule below.

2. **Model tiers.**
   - `claude-sonnet-5` — mechanical sessions: publications, gate
     verifications, suite runs, evidence bookkeeping.
   - `claude-fable-5` (or `claude-opus-4-8`) — contract and design
     authoring, implementation execution, hard debugging.
   - `claude-haiku-4-5-20251001` — optional, for trivial bookkeeping.

3. **Cheapest-adequate mandate.** The session driver MUST always select
   the cheapest model tier that is genuinely ADEQUATE for the task; the
   premium tier is never the default. If a task can be done by a lower
   tier, the lower tier MUST be picked. Mechanical or fully
   scripted-execution tasks — publications, gate verifications, suite
   runs, evidence bookkeeping, and genuine but fully scripted validation
   sessions — take `claude-sonnet-5` (or `claude-haiku-4-5-20251001` for
   trivial bookkeeping). Escalation to `claude-fable-5`/`claude-opus-4-8`
   is reserved for genuine judgment work: adversarial contract authoring
   or interpretation, conjunctive verdicts, and hard debugging — because a
   wrong verdict on an immutable result costs far more than the tokens
   saved, so under-modeling such a task is a false economy, not a saving.

4. **Reasoning-effort levels.** Independently of model tier, every session
   pins a `--effort` level: `low`, `medium`, `high`, `xhigh`, or `max`.
   `low` is for trivial bookkeeping; `medium` for mechanical/scripted
   sessions (publications, gate verifications, suite runs, evidence
   collection following a pre-authorized decision tree); `high` for
   standard judgment work; `xhigh`/`max` are reserved for the hardest
   adversarial authoring or conjunctive-verdict sessions. The same
   false-economy asymmetry from point 3 applies on this axis too: never
   under-effort a session whose verdict lands on an immutable record.

5. **Handoff obligation.** Every end-of-session handoff launch command
   (already mandated by DR-0024's file-based handoffs saved to
   `~/continuity-handoffs/` with fully resolved launch commands) MUST pin
   BOTH `--model` and `--effort` explicitly — no placeholders — and the
   handoff's closing summary MUST carry one shared one-line justification
   covering both choices together, so the next session's driver (human or
   agent) can audit the selection without re-deriving it.

6. **Escalation guard pattern.** A session may start on a cheaper tier
   with an explicit, pre-authorized decision tree that fences off any
   genuinely ambiguous or judgment-bearing branch: if that branch is
   reached, the session stops, records its evidence, and hands off to a
   fresh session on the escalated tier rather than rendering the verdict
   itself. This is the mechanism by which scripted-evidence work and hard
   judgment work can be split across sessions without ever letting a
   cheap-tier session render a judgment call it was not resourced for.

## Status

Validated

## Supporting evidence

- continuity-workspace `CLAUDE.md` "Model policy" section, as committed at
  workspace revisions `d45449dfd5d96ea4e89174e535a0942aa0e4021f` and
  `8ca88401d6a17e80c82a5cdf286f144fc0257e2b` (current workspace HEAD at
  the time of this decision).
- DR-0024, whose Decision point 1 names "per-session executor model
  selection" as a lightened-process control without specifying the
  selection rule this decision supplies.
- The escalation-guard pattern (point 6) as practiced in the SD-001
  sustained dogfooding period: a `claude-sonnet-5`/`medium` session
  collecting scripted evidence for the
  `circuit-breaker-lifecycle-e2e-breaker-stuck-open` Work Item, with a
  pre-authorized decision tree that, on reaching genuine ambiguity,
  stopped and handed off to `claude-fable-5`/`high` rather than rendering
  a verdict (continuity/evidence/sd-001/dogfooding-ledger.md Entries
  27-30 in Nestfolio, HEAD `11ac42891ed6861efd9b98e1b73a7b01411e5f61` at
  the time of this decision).

## Alternatives considered

- Leave the model/effort selection rule living only in
  continuity-workspace `CLAUDE.md`, treating it as pure session tooling
  outside canonical program memory: rejected — DR-0024 itself names model
  selection as a governed lightened-process control, and continuity-lab
  is the program's canonical memory; a rule this consequential (it
  directly trades off token budget against verdict-quality risk on
  immutable records) belongs where other process decisions are recorded,
  not only in the operating file that happens to apply it.
- Fold this elaboration into DR-0024 by editing it in place: rejected —
  the program's own convention (observed across every prior DR, e.g. how
  DR-0006 was marked superseded rather than rewritten) is that a
  validated decision's body is not edited after the fact; refinements are
  recorded as new decisions that elaborate or supersede it. DR-0024 is
  not reversed or contradicted by this decision, only made specific, so
  it is elaborated (see Supersedes/Superseded by below), matching the
  DR-0025 precedent of a process-only decision that elaborates DR-0024
  without superseding it.
- Mandate a single combined "tier" conflating model and effort into one
  choice: rejected — the two axes vary independently in practice (e.g. a
  mechanical suite-run session and a scripted-evidence-with-escalation-
  guard session can both suit `claude-sonnet-5` while needing different
  effort levels), and the workspace practice this decision canonicalizes
  already treats them as independent.

## Rejected alternatives

Recorded under alternatives considered.

## Risks

- A session driver could under-select either axis to save budget and
  produce a wrong verdict on an immutable record. Mitigated by the
  explicit false-economy statements in points 3 and 4 and by the
  escalation-guard pattern (point 6), which lets cheap-tier sessions do
  real scripted work without ever being the one to render an ambiguous
  judgment.
- The handoff obligation (point 5) could be skipped under time pressure,
  losing the audit trail for why a tier was chosen. Mitigated by DR-0024's
  pre-existing mandatory handoff-file requirement, which this decision
  extends rather than introduces.
- Model/tier names drift as Anthropic ships new models, making this
  decision's point 2 list stale. Accepted risk, consistent with how
  DR-0024 already tolerates the underlying executor changing over time;
  a future elaboration can update the tier list without touching the
  cheapest-adequate principle itself.

## Validation requirements

This is a process-only documentation decision with no code or product
artifact to validate against. Its implementation is complete when:

- this file is committed and pushed to continuity-lab `main`;
- continuity-workspace `CLAUDE.md`'s "Model policy" section is confirmed
  to already match this decision's points 2-6 (it does, by construction —
  this decision canonicalizes existing workspace practice rather than
  changing it), so no workspace edit is required as part of this
  decision's implementation.

## Consequences

- continuity-lab now carries the canonical statement of the model/effort
  selection rule that continuity-workspace `CLAUDE.md` already
  operationalizes, closing the gap between where the program records
  process decisions and where this one lived.
- Future revisions to the model/effort policy should be recorded as a new
  decision elaborating or superseding this one, then mirrored into
  continuity-workspace `CLAUDE.md`, keeping the two in sync going forward.
- No change to any session's actual behavior: the rule this decision
  canonicalizes was already in force via the workspace file.

## Supersedes

None. DR-0001 through DR-0025 are unaffected. This decision elaborates
DR-0024 Decision point 1 without reversing or contradicting it.

## Superseded by

None.
