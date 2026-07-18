# Continuity — MI-006-R1 Contract-Authoring and Publication Handoff

## Current state

- **MI-006-R1 — Evidence-Bound Completion Existing-Work-Item Rebinding
  Correction was authored, reviewed by the human program owner, and published
  on continuity-lab main on 2026-07-18** under DR-0024, as the single newly
  bounded correction selected per the MI-006 `next_iteration_rule.on_fail`.
  The exact published contract revision is recorded in the execution handoff
  prompt under `~/continuity-handoffs/` (the contract file itself cannot
  self-reference its own commit).
- **Owner design decision (2026-07-18, this session).** The program owner
  approved the reconciled option (b): no engine code. The authoring session
  verified against the pinned engine and the committed state at `eafa09b8`
  that the naive option (b) reading — resuming and completing `run-mi005` —
  is NOT compliant (its immutable validation plan carries only the dogfood
  criterion `mi005-keyed-effect-materialized`; completing it would validate
  the wrong criteria, exactly what MI-006 prohibited), and that a compliant
  form exists and executes end-to-end through the pinned engine, proven in an
  isolated scout copy outside all three repositories (since removed):
  1. ONE bounded immutability exception — the existing Work Item
     (revision-2 base `313af590…`) advances to completed exclusively via the
     contracted rebinding write (expectedRevision 2; criteria rebound to the
     three unchanged Level 3 criteria) and the pinned engine's
     `startRun`/`completeRun` for the new Run `run-mi006-r1`;
  2. a bounded formation exception — a new completion Scope and a new ready
     Working Set direct-authored through the pinned store API, the exact
     preparation mechanism MI-005 itself used and evidenced;
  3. criterion 2/3 deterministic Evidence corrected to the dashboard-bff
     unit suite plus byte-identity/non-regression of the integration files
     (the owner-authorized MI-006 secondary finding);
  4. a bounded completion-aware correction of exactly four published suite
     assertions (Level 4 S7/S8/S9, Level 5 effort-source byte-identity) that
     pin the current backlog bytes and would otherwise fail after any
     truthful completion — proven empirically in the isolated copy (only
     those four fail; Levels 1/2/3 and the engine suite stay green);
     MI-004-R1 is the precedent for correcting a self-invalidating published
     suite.
- **Immutable ledger.** MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL,
  MI-003-R2 PASS, MI-004 PASS, SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2
  FAIL, SE-001-R3 PASS, MI-005 PASS, and MI-006 FAIL remain eleven separate
  immutable results; SE-001-PUB and MI-005-PUB are unchanged. Nestfolio is
  untouched at `eafa09b81a600bd58fe8f4639298a182039d21f5`.
- **DR-0025 closure performed**: `queue_position 33`, `queue_summary`,
  indices regenerated, `node scripts/generate-program-indices.mjs --check`
  exit 0.
- **Execution is NOT authorized by the authoring session.** It requires a
  fresh session launched under `prompt.md` beside this file with the exact
  published contract revision resolved, or an explicit same-session
  extension by the program owner after publication.

## Next valid operation

Execute MI-006-R1 from the published contract revision in a fresh session
launched with the saved execution prompt. The execution renders a
conjunctive unconditional verdict on a new immutable result — judgment
work: use `claude-opus-4-8` (fable is not required; the contract is fully
specified and rehearsal-driven). MI-007 and broader work remain blocked
pending separate contracting, review, publication, and explicit
authorization.
