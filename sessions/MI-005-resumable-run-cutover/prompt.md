# MI-005 — Resumable Run Cutover — execution session prompt

This is a fresh MI-005 execution session under DR-0024. It authorizes
exactly one operation: execute the published MI-005 — Resumable Run
Cutover contract at
`sessions/MI-005-resumable-run-cutover/context-pack.yaml` in
continuity-lab. The launch instruction (the handoff file that resolved
this prompt) names the exact published continuity-lab contract revision;
verify continuity-lab HEAD is exactly that revision and contains the
contract byte-for-byte. It authorizes neither MI-006, MI-007, current
journal retirement, nor any broader work.

Session gates: continuity-workspace, continuity-lab, and Nestfolio on
main with clean working trees; Nestfolio HEAD at
363283bcc97b1e04710db0e7f759ffffddb18b69 (subject "Publish SE-001
selected effort implementation and evidence"). Stop and report on any
contradiction.

Canonical reads: read continuity-lab docs/90-state/program-state.md
first, then the full MI-005 contract. Targeted reads of every artifact
the contract binds by digest are the default; no exhaustive complete-read
protocol applies (DR-0024).

Execute the contract exactly as written: preconditions and engine-lock
verification, read-only route check, write-set rehearsal in an isolated
copy, Run preparation, then the genuine two-Session validation. The two
validation Sessions are launched by the human program owner in the
Nestfolio repository with the CONTINUITY_* environment defined by the
contract; prepare the exact launch commands for them, present them to
the human, and wait for each Session to complete before continuing.
Then verify all records, run the mandatory failure scenarios in isolated
fixtures, run every required suite, freeze and verify the final
manifest, and close MI-005 with the conjunctive unconditional verdict.

The Nestfolio execution delta remains uncommitted and unstaged at close;
its publication requires a separate explicit authorization. Perform the
continuity-lab execution closure per the contract, including the DR-0025
obligations, commit and push it with a concise subject-only message, and
record the new HEAD SHA.

Report the result and the next valid program operation, ending with the
handoff required by continuity-workspace CLAUDE.md.
