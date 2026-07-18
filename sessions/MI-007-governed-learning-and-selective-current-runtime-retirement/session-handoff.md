# MI-007 — Execution Closure Handoff

## What this session did

Executed the published MI-007 — Governed Learning and Selective Current-Runtime
Retirement contract (`context-pack.yaml` beside this file) from continuity-lab
`29b592c04162507b9495737a3214149a03de3cee`, bound Nestfolio
`6229bb010d76723aaec0385c923b157762ee512e`, under DR-0024, with the human
program owner (fabio.vitali) available in-session for the live review capture.
It closed **UNCONDITIONAL PASS** — the program's first governed
Decision-and-Learning slice, through the pinned store API with the engine
unmodified (`recordLesson` never invoked).

## What was produced (Nestfolio, uncommitted)

- **Five Observations** created rev 1 via `writeArtifact expectedRevision 0`;
  the four factual advanced rev 2 to the owner's live outcomes — accepted /
  duplicate / deferred / rejected ("Confermo: 01 accepted, 02 duplicate, 03
  deferred, 04 rejected", `2026-07-18T16:56:45.000Z`); the fifth is the F-30
  historical import, kept `historical` at rev 1, never promoted.
- **Two Lessons**: `lesson-mi007-01` candidate→accepted ("confermo",
  `2026-07-18T16:58:57.000Z`); `lesson-mi007-02` rejected-unsafe; both
  `promotion.automatic false`.
- **One durable Decision** `decision-mi007-01` ("ok",
  `2026-07-18T17:00:48.000Z`) and one separate **Change Proposal**
  `change-proposal-mi007-01` advanced proposed→accepted→applied.
- **Exactly ONE owner-applied additive binding**
  `continuity/bindings/nestfolio/decisions/mi007-deterministic-evidence-boundary-rule.json`
  (file sha256 `f602eeb0…`, "ok" `2026-07-18T17:01:57.000Z`), created only
  after the Decision and accepted proposal — proven by audit order
  (decision-create and change-proposal-accept strictly precede
  applied-change-create) and by the machine-captured UTCs.
- **Level-6 binding + inventory + learning suite**: `learning-binding.json`,
  `retirement-inventory.json` (six mechanisms, zero retired), and
  `tests/continuity-level-6-learning.test.mjs` (11/11). Derived index rebuilt,
  discovering the new `decisions` and `change-proposals` kinds; audit ledger
  append-only prefix preserved.
- **Evidence** `continuity/evidence/mi-007/00..10` + `commands/01..10`.

## Verification

- 37 precondition checks green; baseline and post-execution suites all green
  (learning 11/11, L6 10/10, L5 7/7, L4 23/23 and L3 23/23 in an isolated
  committed copy, L2 23/23, L1 14/14, engine 9/9, backlog-next 68/68).
- No-auto-promotion proof passed; every mandatory failure fail-closed (ten
  fixture-based + eight structural); the rehearsal copy and all fixtures were
  removed with absence proofs; the pinned engine, journal tree, and every
  run-mi006-r1/VS-001 record are byte-identical.
- Nestfolio delta: **2 modified, 34 created, nothing staged**, uncommitted and
  unstaged, manifest self-hash
  `53c29538ee56b2b620dcb9ec48509feacee29e62d76351578c8cca7a33878c19`.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005 PASS,
MI-006 FAIL, and MI-006-R1 PASS remain twelve separate immutable results;
MI-007 UNCONDITIONAL PASS is the thirteenth. SE-001-PUB, MI-005-PUB, and
MI-006-R1-PUB are unchanged.

## Next valid operation

**MI-007-PUB** — publish the uncommitted 36-path Nestfolio execution delta
(manifest self-hash `53c29538…`) at Nestfolio `6229bb01…`: verify byte-exact,
stage, commit as one subject-only commit on main, push. Mechanical publication
session — `claude-sonnet-5`. It requires separate explicit authorization;
MI-007-PUB, sustained dogfooding, and broader work remain blocked pending it.
