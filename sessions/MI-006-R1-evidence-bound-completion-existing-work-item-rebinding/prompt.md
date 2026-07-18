# MI-006-R1 — Evidence-Bound Completion Existing-Work-Item Rebinding Correction — execution session prompt

This is a fresh MI-006-R1 execution session under DR-0024. It authorizes
exactly one operation: execute the published MI-006-R1 contract at
`sessions/MI-006-R1-evidence-bound-completion-existing-work-item-rebinding/context-pack.yaml`
in continuity-lab. The launch instruction (the handoff file that resolved
this prompt) names the exact published continuity-lab contract revision;
verify continuity-lab HEAD is exactly that revision and contains the
contract byte-for-byte. It authorizes neither MI-007, current journal
retirement, learning promotion, nor any broader work.

Session gates: continuity-workspace, continuity-lab, and Nestfolio on main
with clean working trees; Nestfolio HEAD at
`eafa09b81a600bd58fe8f4639298a182039d21f5` (subject "Publish MI-005
resumable run cutover Level 5 evidence"). Stop and report on any
contradiction.

Canonical reads: read continuity-lab `docs/90-state/program-state.md`
first, then the full MI-006-R1 contract, then the MI-006 report and its
execution closure (the failure this contract corrects). Targeted reads of
every artifact the contract binds by digest are the default; no exhaustive
complete-read protocol applies (DR-0024).

Execute the contract exactly as written, using the pinned engine
unmodified (no engine code is introduced):

1. Verify the session gates, the engine-lock against the pinned
   `runtime/continuity/**` and `.claude/settings.json`, every bound
   Level 5/4/3/2 digest, the revision-2 Work Item base digest
   (`313af590…`) and the full MI-005 byte-identity list, that `run-mi005`
   is closed, and the read-only route check (no active dual Run for the
   effort).
2. Author the fixed create paths the Run needs before start: the Level 6
   engine-lock and completion binding, the classified Guard binding, the
   criterion-1 investigation review record (agent-review finding plus the
   program owner's explicit human-review authorization with
   machine-captured UTC), and the criterion-3 deterministic non-regression
   check script. Author the bounded completion-aware correction of the four
   published suite assertions (Level 4 S7/S8/S9 and the Level 5 effort-
   source test) exactly per `published_suite_correction`.
3. Rehearse the complete write-set — suite correction, rebinding write
   (expectedRevision 2), the two formation writes, `startRun` on
   `ws-mi006-r1` as `run-mi006-r1`, validation, Evidence production, the
   classified-Guard evaluation, completion including the backlog
   write-back, index rebuild, the corrected suites passing in BOTH
   pre-completion and post-completion states, and byte-exact rollback — in
   an isolated copy outside all three repositories; freeze the write-set.
4. In the real tree: apply the suite correction, perform the rebinding
   write and the two formation writes through the pinned store API, then
   drive the pinned engine only — `startRun`, produce and verify the
   Evidence records, `validateRun` (all three criteria), and the atomic
   Evidence-bound `completeRun` with the truthful backlog write-back (the
   single permitted canonical planning mutation).
5. Exercise every mandatory failure scenario in isolated fixtures with the
   exact typed diagnostics, and demonstrate the distinct authorized Waiver
   path in an isolated fixture (never on a real criterion).
6. Prove derived-index rebuild, audit prefix preservation, current-journal
   byte-identity, every MI-005 byte-identity record after execution, and
   cleanup with absence proofs; run every required suite (the corrected
   Level 4/5 suites must pass 23/23 and 7/7 in the real post-completion
   tree; use the isolated committed validation copy for any purity-guarded
   suite per the SE-001-R3 / MI-005 mechanics); freeze and verify the final
   manifest; and close MI-006-R1 with the conjunctive unconditional
   verdict.

The Nestfolio execution delta remains uncommitted and unstaged at close;
its publication requires a separate explicit authorization. Perform the
continuity-lab execution closure per the contract, including the DR-0025
obligations, commit and push it with a concise subject-only message, and
record the new HEAD SHA.

Report the result and the next valid program operation, ending with the
handoff required by continuity-workspace CLAUDE.md.
