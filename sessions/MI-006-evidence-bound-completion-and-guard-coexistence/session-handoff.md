# Continuity — MI-006 Execution-Closure Handoff (UNCONDITIONAL FAIL)

## Current state

- **MI-006 — Evidence-Bound Completion and Guard Coexistence executed
  2026-07-18 under DR-0024 and closed UNCONDITIONAL FAIL
  (`ENGINE_POLICY_MISMATCH`)**, fail-closed before any Nestfolio mutation.
  Executed from published contract revision
  `6a94e73c864627c3c33a27f3a891005df22984df`. Nestfolio is byte-identical and
  clean at `eafa09b81a600bd58fe8f4639298a182039d21f5` (zero-path execution
  delta).
- **Root cause.** The pinned engine (unmodified) cannot form the effort's
  Level 6 Assurance Plan from a fresh Work Item carrying the three Level 3
  criteria, nor Evidence-bound complete it, without violating the write
  boundary. The engine keys exactly one Work Item per `work_id`, and the
  backlog write-back forces `workItem.id` to be the effort id
  `dashboard-bff-awaiting-confirmation-activity-gap`. That work-item artifact
  already exists at revision 2, status `in_progress`, committed at `eafa09b8`
  as an **immutable MI-005 record** (dogfood criterion
  `mi005-keyed-effect-materialized`), because MI-005 ran its Level 5 dogfood
  Run on the effort's real work id. `selectWork(effort)` returns
  `REVISION_CONFLICT` (proven empirically in an isolated copy, removed with
  absence proof); reusing/advancing the existing Work Item would mutate an
  immutable MI-005 record and validate the wrong criteria.
- **Everything else verified green before the blocker**: session gates,
  engine-lock (aggregate `7e31ff56…`), bound Level 5/4/3/2 digests, run-mi005
  closed, route check clear (journal `.git/journal` 89 files / 30 run dirs,
  digest `ae150653…`), fixed create paths absent, and baseline suites (Level 5
  7/7, Level 4 23/23, Level 3 23/23, Level 2 23/23, Level 1 14/14, engine 9/9,
  backlog-next 68/68, dashboard-bff unit 70/70).
- **Secondary finding, owner-authorized (not the cause).** Criterion 2/3
  deterministic Evidence references the dashboard-bff *integration* suite, but
  the awaiting-confirmation projection is asserted only in the *unit* suite and
  the integration suite targets real deployed AWS. The program owner authorized
  (UTC `2026-07-18T11:38:34.000Z`) reading criterion 2/3 Evidence as the unit
  suite plus a non-regression proof; recorded for the correction.
- **Immutable ledger.** MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL,
  MI-003-R2 PASS, MI-004 PASS, SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL,
  SE-001-R3 PASS, and MI-005 PASS remain ten separate immutable results;
  SE-001-PUB and MI-005-PUB are unchanged. MI-006 UNCONDITIONAL FAIL is a
  separate new immutable result. MI-007 and broader work remain blocked.
- **DR-0025 closure performed**: `queue_position 32`, `queue_summary` updated
  to the FAIL result, `result: unconditional-fail` added, indices regenerated,
  `node scripts/generate-program-indices.mjs --check` exits 0.

## Next valid operation

Per `next_iteration_rule.on_fail`, author a newly bounded correction supported
by the failure evidence (do not broaden scope). Because the root cause is a
hard engine/immutability constraint (the effort's work-item id is permanently
occupied by an immutable `in_progress` MI-005 record), the correction requires
a program-level decision and a design/contract-authoring session — judgment
work: use `claude-fable-5` (or `claude-opus-4-8`). The correction must choose
between (a) an engine revision enabling a fresh Level 6 completion path for an
effort whose work-item id was already used by a prior Run, or (b) a re-scoped
MI-006-R1 that explicitly authorizes advancing the existing `in_progress` Work
Item to completed under a revised criteria mapping and a bounded immutability
exception — and in either case corrects the criterion 2/3 integration-suite
Evidence wording to the unit suite plus non-regression. MI-007 and broader work
remain blocked pending separate contracting, review, publication, and explicit
authorization.
