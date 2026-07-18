# SD-001 — Execution Closure Handoff

## What this session did

Executed the published SD-001 — Sustained Dogfooding Bootstrap contract
(`context-pack.yaml` beside this file) from continuity-lab
`0585f8a576f914b3edfe2518e294730d20ccb87c`, bound Nestfolio
`914456ce44c271d5bb38b22d985448011d6adcf9`, under DR-0024, with the human
program owner (fabio.vitali) available in-session for the live period-start
confirmation. It closed **UNCONDITIONAL PASS** — the first bounded contract
opening the sustained-dogfooding validation period under governance. SD-001
performed NO store write: neither `continuity/artifacts/**` nor
`.continuity/**` changed by one byte.

## What was produced (Nestfolio, uncommitted)

- **Frozen measurement protocol**
  `continuity/evidence/sd-001/dogfooding-protocol.md` materialized with
  exactly the contracted normative content (five definitions, twelve
  criterion derivations, cadence, frozen-protocol/amendment rules). SHA-256
  `95f7f45ebc7212b6d0782cca6165c0f9d2a831ab39fd132f4e4c917ab43cd3bb`.
- **Append-only dogfooding ledger**
  `continuity/evidence/sd-001/dogfooding-ledger.md` created with entry 0
  exactly per `entry_zero`: the owner's live verbatim period-start
  confirmation ("vai", machine-captured UTC `2026-07-18T19:22:53.000Z`), the
  published contract revision, the bound Nestfolio revision, the protocol
  and criteria-source digests, the period-start-at-publication rule
  (explicitly recording the period has NOT begun yet), and the zeroed
  counters. Entry-0 SHA-256
  `74e8af2b3f27383e3291811035525f5582fb6de870ce0c43b3f3ad598dce023d`.
- No store artifact, audit-ledger byte, or derived-index byte was created,
  advanced, or rebuilt.

## Verification

- All preconditions verified fail-closed before mutation: session gates,
  engine-lock (20 files + `.claude/settings.json`, aggregate `7e31ff56…`),
  the bound criteria-source whole-file digest `223df289…` (section title
  verified), the pre-execution audit/index/journal digests, the fixed-path
  absence, and the baseline suites (all green).
- F-PROTOCOL-DRIFT and F-LEDGER-REWRITE demonstrated in isolated fixtures
  outside all three repositories with exact digests and cleanup proof; the
  remaining seven mandatory failures verified structurally.
- Post-execution byte-identity proven (audit ledger, derived index, journal
  tree unchanged; every pre-existing tracked Nestfolio path equal to the
  exact start revision). All required suites pass post-execution (learning
  11/11, Level 6 10/10, Level 5 7/7, Level 2 23/23, Level 1 14/14, engine
  9/9, backlog-next 68/68 in the real tree; Level 4 23/23 and Level 3 23/23
  in an isolated committed validation copy — throwaway commit, removed with
  absence proof, never entered any real repository history).
- Nestfolio delta: **0 modified, 2 created, nothing staged**, uncommitted
  and unstaged, manifest self-hash
  `da770f29f65535bef51b916e6ef9c9f69c7cd150fefd0477454036dba9e585af`.
- External recovery ledger: `~/continuity-recovery/sd-001/ledger/`.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005 PASS,
MI-006 FAIL, MI-006-R1 PASS, and MI-007 PASS remain thirteen separate
immutable results; SD-001 UNCONDITIONAL PASS is the fourteenth. SE-001-PUB,
MI-005-PUB, MI-006-R1-PUB, and MI-007-PUB are unchanged.

## Next valid operation

**SD-001-PUB** — publish the uncommitted 2-path Nestfolio execution delta
(manifest self-hash `da770f29…`) at Nestfolio `914456ce…`: verify
byte-exact, stage, commit as one subject-only commit "Start SD-001
sustained dogfooding period" on Nestfolio main, push. Mechanical
publication session — `claude-sonnet-5`. It requires separate explicit
authorization; the dogfooding period begins at that commit's committer UTC.
SD-001-PUB, sustained dogfooding, its period verdict (working name SD-002),
and broader work remain blocked pending it.
