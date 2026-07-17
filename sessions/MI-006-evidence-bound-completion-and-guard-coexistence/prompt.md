# MI-006 — Evidence-Bound Completion and Guard Coexistence — execution session prompt

This is a fresh MI-006 execution session under DR-0024. It authorizes
exactly one operation: execute the published MI-006 — Evidence-Bound
Completion and Guard Coexistence contract at
`sessions/MI-006-evidence-bound-completion-and-guard-coexistence/context-pack.yaml`
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
first, then the full MI-006 contract. Targeted reads of every artifact the
contract binds by digest are the default; no exhaustive complete-read
protocol applies (DR-0024).

Execute the contract exactly as written, using the pinned engine
unmodified (no engine code is introduced):

1. Verify the session gates, the engine-lock against the pinned
   `runtime/continuity/**` and `.claude/settings.json`, every bound
   Level 5/4/3/2 digest, that `run-mi005` is closed, and the read-only
   route check (no active dual Run for the effort).
2. Author the effort's target Work Item binding carrying the three
   unchanged Level 3 criteria mapped to typed validators and required
   Evidence modes, and author the one classified target Guard with full
   metadata.
3. Rehearse the complete write-set — Work Item and Guard authoring, Run
   creation, Assurance Plan formation, validation, Evidence production, the
   classified-Guard evaluation, completion including the backlog write-back,
   index rebuild, and rollback — in an isolated copy outside all three
   repositories; freeze the write-set.
4. Create `run-mi006`, form the Assurance Plan from the Work Item, validate
   each criterion, and produce the linked immutable Evidence artifacts:
   deterministic Evidence from real green suite runs and the removed-handler
   absence check; a distinct typed agent-review Evidence artifact; and the
   human-review Evidence — the program owner's explicit authorization record
   with machine-captured UTC. Reference the current Git gates and published
   implementation revision once with exact provenance (no second verdict).
5. Prove the completion is reversible in an isolated copy, then apply the
   real atomic Evidence-bound completion through the pinned engine: the Work
   Item transitions to completed with the final verified Checkpoint, the
   linked Evidence set, and the truthful backlog completion write-back (the
   single permitted canonical planning mutation).
6. Exercise every mandatory failure scenario in isolated fixtures with the
   exact typed diagnostics, and demonstrate the distinct authorized Waiver
   path in an isolated fixture (never on a real criterion).
7. Prove derived-index rebuild, audit prefix preservation, current-journal
   byte-identity, and cleanup with absence proofs; run every required suite
   (using the isolated committed validation copy for any purity-guarded or
   backlog-hashing suite, per the SE-001-R3 / MI-005 mechanics); freeze and
   verify the final manifest; and close MI-006 with the conjunctive
   unconditional verdict.

The Nestfolio execution delta remains uncommitted and unstaged at close;
its publication requires a separate explicit authorization. Perform the
continuity-lab execution closure per the contract, including the DR-0025
obligations, commit and push it with a concise subject-only message, and
record the new HEAD SHA.

Report the result and the next valid program operation, ending with the
handoff required by continuity-workspace CLAUDE.md.
