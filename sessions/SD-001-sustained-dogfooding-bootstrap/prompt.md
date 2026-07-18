# SD-001 — Sustained Dogfooding Bootstrap — execution session prompt

This is a fresh SD-001 execution session under DR-0024. It authorizes
exactly one operation: execute the published SD-001 contract at
`sessions/SD-001-sustained-dogfooding-bootstrap/context-pack.yaml` in
continuity-lab. The launch instruction (the handoff file that resolved this
prompt) names the exact published continuity-lab contract revision; verify
continuity-lab HEAD is exactly that revision and contains the contract
byte-for-byte. It authorizes neither the dogfooding period verdict, nor any
dogfooded Work Item or Run, nor engine modification, nor any broader work.

Session gates: continuity-workspace, continuity-lab, and Nestfolio on main
with clean working trees; Nestfolio HEAD at
`914456ce44c271d5bb38b22d985448011d6adcf9` (subject "Publish MI-007
governed learning and selective current-runtime retirement evidence"). Stop
and report on any contradiction. The human program owner must be available
in-session for the live period-start confirmation; do not start execution
otherwise.

Canonical reads: read continuity-lab `docs/90-state/program-state.md`
first, then the full SD-001 contract, then the bound criteria section of
`docs/10-product/product-foundation.md` (verify its SHA-256
`223df2894f1b265ea46d16ce9a6031d48d15078ce391cc10db8dab385563f3ab`).
Targeted reads are the default; no exhaustive complete-read protocol
applies (DR-0024).

Execute the contract exactly as written. SD-001 performs NO store write:
neither `continuity/artifacts/**` nor `.continuity/**` changes by one byte.

1. Verify the session gates, the engine-lock against the pinned
   `runtime/continuity/**` and `.claude/settings.json`, the bound
   criteria-source digest, the pre-execution digests of the audit ledger,
   the derived index, and the journal tree, the absence of
   `continuity/evidence/sd-001/`, and the baseline suites (learning 11/11,
   Level 6 10/10, Level 5 7/7, Level 4 23/23, Level 3 23/23, Level 2
   23/23, Level 1 14/14, engine 9/9, backlog-next 68/68).
2. Materialize `continuity/evidence/sd-001/dogfooding-protocol.md` with
   exactly the contracted normative content (definitions, the twelve
   criterion derivations, cadence, frozen-protocol and amendment rules)
   and record its SHA-256.
3. Present the period-start statement to the human program owner, capture
   the verbatim confirmation with machine-captured UTC, and create
   `continuity/evidence/sd-001/dogfooding-ledger.md` with entry 0 exactly
   per the contract's entry_zero (owner confirmation, bound revisions,
   protocol and criteria digests, period-start-at-publication rule, zeroed
   counters). A withheld or contradicting reply is
   PERIOD_START_AUTHORIZATION_WITHHELD: stop fail-closed, roll back, close
   UNCONDITIONAL FAIL.
4. Demonstrate F-PROTOCOL-DRIFT and F-LEDGER-REWRITE in isolated fixtures
   outside all three repositories with exact diagnostics, digests, and
   cleanup proofs; verify the remaining mandatory failures structurally
   per the contract's fixture_rule.
5. Prove full byte-identity (audit ledger, derived index, journal tree,
   and every pre-existing tracked path equal to the exact start
   revision); run every required suite (learning, Level 6/5/2/1, engine,
   backlog-next in the real tree; Level 4 23/23 and Level 3 23/23 in an
   isolated committed validation copy per the SE-001-R3/MI-005 mechanics);
   freeze and verify the final manifest (exactly the two created paths,
   uncommitted and unstaged, with a recorded SHA-256 manifest); and close
   SD-001 with the conjunctive unconditional verdict.

The Nestfolio delta remains uncommitted and unstaged at close; its
publication (SD-001-PUB — one subject-only commit "Start SD-001 sustained
dogfooding period" on Nestfolio main, then push) requires separate
explicit authorization, which the owner may grant as a same-session
extension; the dogfooding period begins at that commit's committer UTC.
Perform the continuity-lab execution closure per the contract, including
the DR-0025 obligations, commit and push it with a concise subject-only
message, and record the new HEAD SHA.

Report the result and the next valid program operation, ending with the
handoff required by continuity-workspace CLAUDE.md.
