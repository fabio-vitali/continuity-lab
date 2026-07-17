---
artifact_id: DR-0025
status: validated
owner: program
last_updated: 2026-07-17
---

# DR-0025 — Generated Program Indices and Current-Phase Compaction

## Context

Two documentation-maintenance defects were observed and confirmed in this
program's own state artifacts during the SE-001 publication-closure session
on 2026-07-17:

1. The "Iteration queue" numbered list in `docs/90-state/program-state.md`
   and the "Completed implementation and validation slices" bullet list in
   `docs/70-implementation/README.md` drift out of sync with actual program
   history, because each session only touches the files named in its own
   prompt and no session's job is to keep these summary indices current.
   Confirmed gap at closure time: 28 directories exist under `sessions/`,
   but the Iteration queue represented only 25 — missing MI-004-R1,
   SE-001-R2, SE-001-R3, and the SE-001 publication-closure event itself.
   The README bullet list is further behind: it ends at MI-004 and
   represents none of SE-001, SE-001-R1, SE-001-R2, SE-001-R3, or
   MI-004-R1.
2. The "Current phase" section of `docs/90-state/program-state.md` is one
   single ever-growing narrative paragraph — never rewritten, only appended
   to, per the "never alter recorded results" convention — duplicating
   detail that already lives in each iteration's canonical report under
   `docs/70-implementation/*.md`. It is costly to read and grows without
   bound.

A feasibility check confirmed that existing `sessions/*/context-pack.yaml`
frontmatter is NOT consistent enough to mechanically synthesize summaries:
`contract.status` values vary (`completed-unconditional-pass`, `complete`,
`completed-unconditional-fail`, `authorized`, …), summary fields vary
(`result_summary`, `failure_cause`, or absent), `contract.result` is
unreliable on older completed contracts (several still read `pending`), and
seven early sessions (PF-001, RI-001, TA-001, PI-001, TA-002, VS-001,
VS-001A) have no `contract:` block at all. Not every canonical report has YAML frontmatter (the SE-001-R3 report
has none). No existing free-form field can therefore be assumed queryable
across all sessions.

This decision governs continuity-lab's own state-artifact maintenance ONLY.
It is process-only under DR-0024 and does not weaken, alter, or touch any
Continuity Core product-level guarantee: Context Pack digest bindings,
adapter views, writable boundaries, fail-closed behavior, guarantee levels,
evidence trails, explicit human authorization, conjunctive unconditional
verdicts, and immutable history all remain exactly as decided by DR-0001
through DR-0024.

## Decision

1. **Standardized index fields.** Every session directory's
   `context-pack.yaml` carries, inside its `contract:` block, two fields
   that are the SOLE mechanical input for generated indices:

   - `queue_position: <integer>` — the session's position in program order.
     Positions across all `sessions/*` directories must form a contiguous,
     duplicate-free sequence starting at 1. A new session takes N+1.
   - `queue_summary: "<one line>"` — exactly one line, double-quoted, no
     internal double quotes, of the form `<ITERATION-ID> — <clauses>`,
     matching the style of the existing Iteration queue entries (e.g.
     `MI-003-R1 — complete; unconditional FAIL caused by a partial sixth
     canonical read; no Nestfolio content read or changed`). It is written
     at closure time by the session that closes the program event and is
     the exact text rendered into the generated indices.

   Every future session that creates a session directory writes both fields
   at closure, regenerates the indices (point 2), and runs the staleness
   self-check (point 5) before its closure commit. No other frontmatter
   field is assumed queryable across sessions.

2. **Generator script.** `scripts/generate-program-indices.mjs` — plain
   Node.js, no new dependency — reads `queue_position` and `queue_summary`
   from every `sessions/*/context-pack.yaml` (enumerating directories, then
   ordering by the declared positions) and regenerates exactly two marked
   regions:

   - the "Iteration queue" numbered list in
     `docs/90-state/program-state.md`: one entry per session directory in
     position order, followed by the two permanent "blocked" catch-all
     entries (`MI-005 through MI-007 — blocked`; `broader implementation
     and unrelated migration — blocked`), which are configured constants in
     the script and renumber automatically;
   - the "Completed implementation and validation slices" bullet list in
     `docs/70-implementation/README.md`: one bullet per session whose
     iteration ID starts with `VS-`, `MI-`, or `SE-` (the
     implementation/validation family), in the same order.

   The script replaces ONLY the content between explicit HTML-comment
   markers (`<!-- generated:iteration-queue:begin/end -->`,
   `<!-- generated:implementation-slices:begin/end -->`); it never touches
   any other byte of either file. It is idempotent — re-running produces
   byte-identical output. It fails loudly (non-zero exit, no partial write)
   on: a missing or malformed `queue_position`/`queue_summary`, duplicate
   or non-contiguous positions, or missing/duplicated markers. Where a
   contract block also carries a machine `result:` of
   `unconditional-pass`/`unconditional-fail`, the script emits an advisory
   warning if the summary text disagrees; this never blocks generation and
   older `result: pending` values are ignored.

3. **Backfill.** All existing session directories receive the two fields:

   - For the 25 sessions already represented in the current Iteration
     queue, `queue_summary` copies the existing queue line text VERBATIM
     (minus the leading number) — no reinterpretation.
   - For the 3 missing sessions (MI-004-R1, SE-001-R2, SE-001-R3), one new
     line each is authored, sourced ONLY from already-published text in
     `program-state.md`, `docs/70-implementation/README.md`, and the
     per-iteration canonical reports — not from new interpretation of raw
     evidence.
   - The SE-001 publication-closure event (2026-07-17, Nestfolio
     `363283bcc97b1e04710db0e7f759ffffddb18b69`) has no session directory
     of its own. It RECEIVES one:
     `sessions/SE-001-PUB-selected-effort-implementation-publication/`,
     containing only a minimal `context-pack.yaml` (the two index fields
     plus a provenance note stating the directory is a retroactive
     representation authored by the DR-0025 backfill, sourced from
     `program-state.md` and the SE-001 session handoff). This preserves the
     invariant "one queue-visible program event = one session directory"
     that the staleness self-check relies on, without hiding program
     history inside script configuration.
   - For the seven early sessions with no `contract:` block (PF-001,
     RI-001, TA-001, PI-001, TA-002, VS-001, VS-001A), a minimal
     `contract:` block containing only the two index fields is added.

   Backfilled fields are DR-0025 index metadata. They copy published text;
   they repair, relabel, or reinterpret nothing, and every recorded
   MI-*/SE-* PASS and FAIL remains immutable.

4. **Current-phase compaction.** In `program-state.md`'s "Current phase"
   narrative, for every iteration that already has a canonical report under
   `docs/70-implementation/*.md` (MI-003, MI-003-R1, MI-003-R2, MI-004,
   SE-001-R1, MI-004-R1, SE-001-R2, SE-001-R3), the inline prose is
   replaced by a compact one-line result statement plus a link to that
   report. Full inline detail is kept ONLY for the current/latest phase —
   the SE-001 publication closure and the standing blocked state governing
   the next valid operation — and for iterations without a canonical report
   of their own (MI-002-R2 and the superseded SE-001 contract), whose prose
   stays inline. Before compacting each iteration, verify that every fact
   in its inline prose also exists in its canonical report (or elsewhere in
   the retained sections of `program-state.md`); any fact that exists ONLY
   inline stays inline. As a prerequisite, the SE-001-R3 report is
   retrofitted with the same YAML frontmatter block used by the MI-004
   report so linking conventions stay uniform. This compaction relocates
   already-duplicated detail to the artifact that canonically owns it; it
   alters, deletes, and reinterprets no recorded fact.

5. **Staleness self-check.** `scripts/generate-program-indices.mjs --check`
   runs in seconds and fails (non-zero exit) when: (a) the count of
   `sessions/*` directories does not equal the count of numbered Iteration
   queue entries minus the two permanent blocked entries, or (b)
   regenerating both marked regions to a temporary buffer does not
   byte-match the committed files. It is run (1) by every future session as
   part of its closure, before the closure commit, and (2) on demand by a
   human at any time via
   `node scripts/generate-program-indices.mjs --check` from the
   continuity-lab root.

6. **Scope guard.** This decision applies to `docs/90-state/`,
   `docs/70-implementation/README.md`, report frontmatter under
   `docs/70-implementation/`, `sessions/*/context-pack.yaml` index
   metadata, and `scripts/`. It grants no authority over Nestfolio, no
   authority over Continuity Core product artifacts or guarantees, and no
   authority to modify recorded results.

## Status

Validated

## Supporting evidence

- The confirmed 28-directories-vs-25-entries gap and the README list gap
  recorded in the Context section, observed at continuity-lab
  `c02f14d7286d980642873e8d8d21e2fe855f1525`.
- The feasibility check on `sessions/*/context-pack.yaml` frontmatter
  heterogeneity (Context section).
- DR-0024, which authorizes lightened process-only decisions and aggregated
  authoring/implementation phases for exactly this class of work.

## Alternatives considered

- Mechanically synthesize summaries from existing frontmatter
  (`contract.status`, `result_summary`, `failure_cause`): rejected — the
  feasibility check showed these fields are inconsistent, unreliable
  (`result: pending` on completed contracts), or absent.
- Keep maintaining both indices by hand: rejected — the drift is not
  hypothetical; it is the confirmed defect this decision corrects, and
  hand maintenance has no owner in the session model.
- Regenerate whole files instead of marked regions: rejected — whole-file
  rewrites of state artifacts risk touching recorded narrative facts; the
  markers confine the mechanical surface to exactly the two lists.
- Represent the SE-001 publication event as a constant inside the script
  instead of a session directory: rejected — it would hide program history
  in tool configuration and permanently complicate the count invariant of
  the staleness self-check.
- A richer tool (YAML dependency, database, CI job): rejected — the
  binding constraint is the token/effort budget of a solo experimental
  phase; a dependency-free script that runs in seconds is adequate.

## Rejected alternatives

Recorded under alternatives considered.

## Risks

- A future session forgets to write the index fields or run the check. The
  generator fails loudly on missing fields, and the self-check is part of
  the documented closure choreography; a human can run `--check` on demand
  at any time.
- The backfilled one-line summaries for MI-004-R1, SE-001-R2, SE-001-R3,
  and SE-001-PUB could drift from the record if authored carelessly. They
  are constrained to already-published text only, and the implementation
  diff must show pure reformatting/relocation, not fact changes.
- The compaction could drop a fact that exists only inline. The per-
  iteration verification rule in Decision point 4 makes this a blocking
  precondition: an iteration whose canonical report is missing a fact
  present in the paragraph is not compacted for that fact.
- Naive line-based YAML field extraction could misparse exotic formatting.
  The field shape is deliberately pinned (one line, double-quoted, fixed
  indentation inside `contract:`) and the generator fails loudly on any
  deviation.

## Validation requirements

Implementation of this decision must demonstrate, in the implementing
session:

- the generator runs twice with byte-identical output (idempotency);
- the regenerated Iteration queue and README list, diffed against the
  prior hand-written text, show zero information loss — differences are
  pure reformatting, renumbering, relocation, or the four authored
  additions (MI-004-R1, SE-001-R2, SE-001-R3, SE-001-PUB) sourced from
  published text;
- `--check` passes at the implemented state and fails when a session
  directory is temporarily unrepresented (negative test performed in a
  scratch copy, not in the repository);
- no recorded result, verdict, revision, digest, or historical fact is
  altered in substance anywhere in the touched files;
- the "Current phase" compaction preserves every inline-only fact.

## Consequences

- Future session closures gain one small obligation: write
  `queue_position`/`queue_summary`, run the generator, run `--check`.
- Both indices become complete (29 program events: 28 existing directories
  plus SE-001-PUB) and stay mechanically complete.
- `program-state.md`'s "Current phase" becomes bounded: one compact line
  plus link per reported iteration, full detail only for the latest phase.
- Reading program state for session gating becomes cheaper, which directly
  serves the DR-0024 token-budget constraint.

## Supersedes

None. DR-0001 through DR-0024 are unaffected.

## Superseded by

None.
