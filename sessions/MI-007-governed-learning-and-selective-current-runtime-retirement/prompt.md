# MI-007 — Governed Learning and Selective Current-Runtime Retirement — execution session prompt

This is a fresh MI-007 execution session under DR-0024. It authorizes
exactly one operation: execute the published MI-007 contract at
`sessions/MI-007-governed-learning-and-selective-current-runtime-retirement/context-pack.yaml`
in continuity-lab. The launch instruction (the handoff file that resolved
this prompt) names the exact published continuity-lab contract revision;
verify continuity-lab HEAD is exactly that revision and contains the
contract byte-for-byte. It authorizes neither MI-008 or later slices, nor
actual retirement of any current mechanism, nor any broader work.

Session gates: continuity-workspace, continuity-lab, and Nestfolio on main
with clean working trees; Nestfolio HEAD at
`6229bb010d76723aaec0385c923b157762ee512e` (subject "Publish MI-006-R1
evidence-bound completion Level 6 assurance"). Stop and report on any
contradiction. The human program owner must be available in-session for
the live review capture; do not start execution otherwise.

Canonical reads: read continuity-lab `docs/90-state/program-state.md`
first, then the full MI-007 contract, then DR-0017 and the MI-006-R1
report (the Evidence source this slice governs). Targeted reads of every
artifact the contract binds by digest are the default; no exhaustive
complete-read protocol applies (DR-0024).

Execute the contract exactly as written, using the pinned engine's store
API unmodified (no engine code is introduced; recordLesson is never
invoked):

1. Verify the session gates, the engine-lock against the pinned
   `runtime/continuity/**` and `.claude/settings.json`, every bound
   learning-source digest, every byte-identity record, the route facts
   (run-mi006-r1 completed, run-mi005 closed, no active Run), the absence
   of every fixed create path, and the baseline suites (Level 6 10/10,
   Level 5 7/7, Level 4 23/23, Level 3 23/23, Level 2 23/23, Level 1
   14/14, engine 9/9, backlog-next 68/68).
2. Rehearse the complete write-set in an isolated copy outside all three
   repositories — every store creation and contracted advancement, the
   audit appends, the applied change with ordering proof (placeholder
   REHEARSAL-PENDING-OWNER-CAPTURE in authorization fields; never
   fabricated quotes), the learning binding, the retirement inventory, the
   new learning suite passing, the index rebuild, and byte-exact rollback
   — then freeze the write-set and remove the copy with absence proof.
3. In the real tree, through the pinned store API only: create the five
   Observations with exact provenance; capture the owner's live verbatim
   confirmations with machine-captured UTC and advance the four factual
   Observations to the contracted accepted/duplicate/deferred/rejected
   outcomes; create lesson-mi007-01 (candidate, then accepted on the
   owner's confirmation) and lesson-mi007-02 (rejected, safety_review
   unsafe); create the durable Decision and the Change Proposal and
   advance it proposed-to-accepted; only then, on the owner's recorded
   application authorization, create the one applied binding record with
   its full provenance chain. A withheld or contradicting owner reply is
   REVIEW_AUTHORIZATION_WITHHELD: stop fail-closed, roll back, close
   UNCONDITIONAL FAIL.
4. Author the learning binding, the retirement inventory (six contracted
   classifications, zero actual retirement), and
   `tests/continuity-level-6-learning.test.mjs`; append the audit records
   via the pinned appendAudit and rebuild the derived index via the pinned
   rebuildIndex (it must discover the decisions and change-proposals
   kinds).
5. Prove the no-auto-promotion digest sets, the audit-order proof, the
   journal byte-identity, and every byte-identity record after execution;
   demonstrate the mandatory failure scenarios per the contract's
   fixture_rule with exact typed diagnostics and cleanup proofs.
6. Run every required suite (the learning suite and Level 6/5/2/1, engine,
   backlog-next in the real tree; Level 4 23/23 and Level 3 23/23 in an
   isolated committed validation copy per the SE-001-R3/MI-005 mechanics);
   freeze and verify the final manifest (exactly the fixed create paths,
   any adapter-produced executor-session records, and the two permitted
   modify paths — uncommitted and unstaged); and close MI-007 with the
   conjunctive unconditional verdict.

The Nestfolio execution delta remains uncommitted and unstaged at close;
its publication requires a separate explicit authorization (MI-007-PUB).
Perform the continuity-lab execution closure per the contract, including
the DR-0025 obligations, commit and push it with a concise subject-only
message, and record the new HEAD SHA.

Report the result and the next valid program operation, ending with the
handoff required by continuity-workspace CLAUDE.md.
