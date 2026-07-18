---
artifact_id: IMPL-SD-001
status: validated
owner: implementation
last_updated: 2026-07-18
supersedes: []
superseded_by: null
---

# SD-001 — Sustained Dogfooding Bootstrap

Status:

```text
executed 2026-07-18 by Claude Code (claude-sonnet-5), direct execution session, DR-0024
UNCONDITIONAL PASS
the first bounded contract opening the sustained-dogfooding validation period under governance; NO store write
Nestfolio execution delta uncommitted and unstaged (2 paths created; manifest self-hash da770f29…)
```

SD-001 executed from the published contract revision
`0585f8a576f914b3edfe2518e294730d20ccb87c` (subject "Publish SD-001 sustained
dogfooding bootstrap contract") under the DR-0024 lightened development
process, with the human program owner (fabio.vitali) available in-session for
the live period-start confirmation. It closes **UNCONDITIONAL PASS**: the
frozen measurement protocol and the append-only dogfooding ledger were
materialized exactly as contracted, the owner's live verbatim period-start
confirmation was captured, and every byte-identity, suite, and mandatory-
failure requirement passed conjunctively. SD-001 performed NO store write —
neither `continuity/artifacts/**` nor `.continuity/**` changed by one byte —
and the pinned engine remains frozen, byte-identical to the MI-005/MI-006/
MI-006-R1/MI-007 engine-lock. SD-001 UNCONDITIONAL PASS is a separate new
immutable result (the fourteenth); every prior immutable result and every
prior publication record remain unchanged.

## Preconditions (C1) — all verified fail-closed before mutation

- **Session gates.** continuity-workspace, continuity-lab, and Nestfolio all
  on `main`, clean. continuity-lab HEAD `0585f8a5…` (subject "Publish SD-001
  sustained dogfooding bootstrap contract"); Nestfolio HEAD `914456ce…`
  (subject "Publish MI-007 governed learning and selective current-runtime
  retirement evidence").
- **Engine-lock.** All 20 pinned `runtime/continuity/**` files plus
  `.claude/settings.json` recomputed by SHA-256 and compared byte-for-byte
  against `continuity/level-6/engine-lock.json`: exact match, aggregate
  digest `7e31ff56a10ca6b1715b29f02132e66c80e321921b41dcb55329db2e0f320a38`,
  hook-registration digest `73387f347f43d0f6a154f83ed54c3bdaee0e0b6ba6dbf3120ebf5b8c28834378`,
  settings digest `999e828d22fcf1cf1e66eb81260a4f8ff3a36b2387adf117ca84602e65c2c6b7`.
  Independently confirmed by `tests/continuity-level-6.test.mjs`'s own
  engine-lock assertions in the baseline run.
- **Bound criteria-source digest.** `docs/10-product/product-foundation.md`
  at continuity-lab is byte-identical between the bound revision
  `8a8cc8cba0cbe2b40b8e9d058b7bcaf72dd7d0b1` and the published-contract
  revision (zero diff, ancestor confirmed); whole-file SHA-256
  `223df2894f1b265ea46d16ce9a6031d48d15078ce391cc10db8dab385563f3ab` matches
  the contract's bound target exactly, and its section title "Sustained
  Nestfolio dogfooding success criteria — Provisional Validation Contract"
  (line 523) matches exactly.
- **Pre-execution preservation digests.** `.continuity/audit.ndjson` SHA-256
  `6648d4dd5f4eaaf7258b1d351926234990e663401cf5e103f7ddc8f62988c65e`;
  `.continuity/derived/index.json` SHA-256
  `5c25ba965e3bce6e5f85da86de2fa6d3d23db83d0e112093e925b3a5eb833e95`; the Git
  common-directory journal tree digest (`digestJson` over the sorted
  `{path, sha256}` of all 89 files under `.git/journal`)
  `12c6689c7d39ce727082a76f89bc53d9357225b4bd6d91653c374b801521c7e1`. Recorded
  externally at `~/continuity-recovery/sd-001/ledger/pre-change-digests.json`.
- **Fixed-path absence.** `continuity/evidence/sd-001/` confirmed absent
  before any mutation.
- **Baseline suites, real tree.** learning 11/11, Level 6 10/10, Level 5
  7/7, Level 4 23/23, Level 3 23/23, Level 2 23/23, Level 1 14/14, engine
  9/9, backlog-next 68/68 — all green (no Skill invoked).

## Protocol and period-start marker (C2)

- `continuity/evidence/sd-001/dogfooding-protocol.md` was materialized with
  exactly the contracted normative content — the five definitions
  (non-trivial Work Item, sampled resumption, multi-item effort, overhead
  sample, active week), the twelve criterion derivations, the cadence rule,
  and the frozen-protocol/amendment rule — nothing else. SHA-256
  `95f7f45ebc7212b6d0782cca6165c0f9d2a831ab39fd132f4e4c917ab43cd3bb`.
- The period-start statement was presented to the human program owner live
  in-session; the owner replied **"vai"**, machine-captured UTC
  `2026-07-18T19:22:53.000Z` — an affirmative go-ahead, not silence,
  refusal, or contradiction.
- `continuity/evidence/sd-001/dogfooding-ledger.md` was created with entry 0
  exactly per `entry_zero`: the owner's verbatim confirmation and its UTC,
  the published SD-001 contract revision, the bound Nestfolio revision, the
  protocol file SHA-256, the bound criteria source (path, continuity-lab
  revision, SHA-256, section title), the minimum-period text, the
  period-start-at-publication rule (explicitly recording that the period has
  **NOT** begun as of this entry — publication is separate), and the zeroed
  counters (Work Items 0/20; multi-item efforts 0/5 with Epics 0/2;
  resumption samples 0/15; active weeks 0/6). Entry-0 SHA-256
  `74e8af2b3f27383e3291811035525f5582fb6de870ce0c43b3f3ad598dce023d`.

## Mandatory failures (C4)

- **F-PROTOCOL-DRIFT** and **F-LEDGER-REWRITE** were demonstrated in
  isolated fixtures outside all three repositories: a byte mutation to a
  fixture copy of the protocol file produced a digest mismatch against the
  recorded ledger-entry-0 digest (`PROTOCOL_FROZEN_VIOLATION`); a rewrite of
  previously appended ledger bytes in a fixture copy broke the append-only
  prefix invariant (`LEDGER_APPEND_ONLY_VIOLATION`). Both fixtures were
  removed with absence proof immediately after.
- The remaining seven mandatory failures (F-RETROACTIVE-SAMPLE,
  F-START-WITHHELD, F-STORE-WRITE, F-MECHANISM-INVENTION, F-VERDICT-CLAIM,
  F-DELEGATION, F-SCOPE) were verified structurally — no sample was ever
  recorded (so no sample could be retroactive), the owner's reply was
  affirmative (documented stop-and-fail semantics without fabricating a
  withheld reply), byte-identity proves no store write, no engine code or
  new artifact kind was introduced, no criterion/period-verdict claim
  appears anywhere in this closure, no Skill/slash-command/`continuity:invoke`
  was used to perform contracted work, and the final manifest contains
  exactly the two fixed create paths. Full detail:
  `~/continuity-recovery/sd-001/ledger/fixture-cleanup-proof.txt`.

## Byte-identity and suites (C3, C5)

- Post-execution: `.continuity/audit.ndjson`, `.continuity/derived/index.json`,
  and the journal tree digest are identical to the pre-execution values;
  `git status --porcelain` in Nestfolio shows exactly one entry,
  `?? continuity/evidence/sd-001/`, containing exactly the two fixed create
  paths — no modified, staged, deleted, or renamed path anywhere.
- **Real tree, post-execution:** learning 11/11, Level 6 10/10, Level 5 7/7,
  Level 2 23/23, Level 1 14/14, engine 9/9, backlog-next 68/68.
- **Isolated committed validation copy** (SE-001-R3/MI-005 mechanics —
  required because Level 4/3's working-tree purity guards are unsatisfiable
  against the uncommitted two-file delta): a `git clone` of the real local
  Nestfolio repository at HEAD `914456ce…`, the two-file delta copied in
  with per-path digests verified equal to the working tree, committed as
  throwaway commit `2f050c71df42a67b30ee74ddfc12639862223039` with
  `--no-verify`. Level 4 **23/23**, Level 3 **23/23**. The copy was removed
  with absence proof; the throwaway commit was confirmed absent from the
  real Nestfolio repository's object database — it never existed in any
  real repository history.

## Final manifest (C6)

The Nestfolio diff from the exact start revision (`914456ce…`) contains
exactly the two fixed create paths, uncommitted and unstaged:

- `continuity/evidence/sd-001/dogfooding-protocol.md` — SHA-256
  `95f7f45ebc7212b6d0782cca6165c0f9d2a831ab39fd132f4e4c917ab43cd3bb` (6697
  bytes)
- `continuity/evidence/sd-001/dogfooding-ledger.md` — SHA-256
  `74e8af2b3f27383e3291811035525f5582fb6de870ce0c43b3f3ad598dce023d` (2186
  bytes)

SHA-256 manifest self-hash (`digestJson` over the sorted
`{path, sha256, size}` entries above):
`da770f29f65535bef51b916e6ef9c9f69c7cd150fefd0477454036dba9e585af`. Recorded
externally at `~/continuity-recovery/sd-001/ledger/final-delta-manifest.json`.

## Verdict

Conjunctive over C1–C6: **UNCONDITIONAL PASS**. No prohibited action
occurred; no criterion, period-verdict, or per-criterion claim is made
anywhere in this closure; the period has not begun. SD-001 UNCONDITIONAL
PASS is a separate new immutable result (the fourteenth). MI-002-R2 PASS,
MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS, SE-001-R1 FAIL,
MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005 PASS, MI-006 FAIL,
MI-006-R1 PASS, and MI-007 PASS remain thirteen separate immutable results,
unrepaired and unrelabeled; the SE-001-PUB, MI-005-PUB, MI-006-R1-PUB, and
MI-007-PUB publication records are unchanged.

## Next valid operation

**SD-001-PUB** — publish the uncommitted two-path Nestfolio execution delta
(manifest self-hash `da770f29…`) at Nestfolio `914456ce…`: verify byte-exact,
stage, commit as one subject-only commit "Start SD-001 sustained dogfooding
period" on Nestfolio main, push. This requires separate explicit
authorization by the human program owner, which may be granted as a
same-session extension. The dogfooding period begins at that commit's
committer UTC; from then the standing period rules govern real
backlog-routed Nestfolio work through Continuity, with contemporaneous
ledger measurement toward the twelve Product Foundation criteria. The period
verdict (working name SD-002) becomes contractable at the earliest when the
minimum period is satisfiable, and never earlier.
