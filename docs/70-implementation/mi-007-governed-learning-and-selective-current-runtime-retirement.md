---
artifact_id: IMPL-MI-007
status: validated
owner: implementation
last_updated: 2026-07-18
supersedes: []
superseded_by: null
---

# MI-007 — Governed Learning and Selective Current-Runtime Retirement

Status:

```text
executed 2026-07-18 by Claude Code (claude-opus-4-8), direct execution session, DR-0024
UNCONDITIONAL PASS
the program's first governed Decision-and-Learning slice, executed through the pinned store API with the engine unmodified (recordLesson never invoked)
Nestfolio execution delta uncommitted and unstaged (36 paths: 2 modified, 34 created; manifest self-hash 53c29538…)
```

MI-007 executed from the published contract revision
`29b592c04162507b9495737a3214149a03de3cee` (subject "Publish MI-007 governed
learning and selective current-runtime retirement contract") under the DR-0024
lightened development process, with the human program owner (fabio.vitali)
available in-session for the live review capture. It closes **UNCONDITIONAL
PASS**: Evidence-backed findings from the one completed target-routed effort
(`dashboard-bff-awaiting-confirmation-activity-gap`, completed by run-mi006-r1)
were reviewed under explicit human authority into governed target learning
records — five Observations, two Lessons, one durable Decision, one separate
Change Proposal, and exactly one owner-applied additive project-binding rule —
with a no-auto-promotion proof, a provenance-preserving historical import, and a
six-mechanism retirement inventory that retires nothing. The pinned engine, every
published record (including every run-mi006-r1 and VS-001 artifact), and every
current mechanism remain byte-identical. Every prior immutable result stands
unrepaired; MI-007 UNCONDITIONAL PASS is a separate new immutable result (the
thirteenth).

## Preconditions and rehearsal (C1) — all verified fail-closed before mutation

- **Session gates.** continuity-workspace, continuity-lab, and Nestfolio on
  `main` with clean working trees; continuity-lab HEAD at the published contract
  revision `29b592c0…`; Nestfolio HEAD `6229bb010d76723aaec0385c923b157762ee512e`
  (published MI-006-R1 Level 6 assurance).
- **Engine-lock.** The 20 `runtime/continuity/**` files plus `.claude/settings.json`
  are byte-identical to the pinned lock (aggregate
  `7e31ff56a10ca6b1715b29f02132e66c80e321921b41dcb55329db2e0f320a38`; hook
  `73387f34…`; settings `999e828d…`). No engine byte changed; `createStore` was
  imported unmodified as a library and `recordLesson` was never invoked.
- **Bound digests.** Every bound learning source verified: the three run-mi006-r1
  Evidence artifacts (`afd1e24b…`, `05d23141…`, `a3e3ab81…`), the classified Guard
  definition `74008f12…`, and the lesson dossier `.claude/skills/backlog-next/LESSONS.md`
  `eea79ec7…`; the Level 2 aggregate `73bbb7c9…`, Level 3 scope `db7a4527…`, and
  Level 4 Context Pack `e58c9bc1…`. The full `byte_identity_guarantees` set (37
  precondition checks total) verified before and after.
- **Route facts (read-only).** run-mi006-r1 completed, run-mi005 interrupted
  (closed), no active run lease; the `.git/journal` tree digest
  `38595c19ca318988b05a54663dff1912deb9f39c31bf17035b24b2a20993c9c4` (89 files)
  recorded at start and byte-identical at close.
- **Fixed-path absence.** All 13 fixed create paths and the `continuity/evidence/mi-007`
  tree absent; the `decisions` and `change-proposals` kind directories absent.
- **Baseline suites (real clean tree, no Skill).** Level 6 10/10, Level 5 7/7,
  Level 4 23/23, Level 3 23/23, Level 2 23/23, Level 1 14/14, engine 9/9,
  backlog-next 68/68.
- **Write-set rehearsal.** The complete write-set was rehearsed in an isolated
  copy outside all three repositories, driving the pinned store API with the fixed
  placeholder `REHEARSAL-PENDING-OWNER-CAPTURE` in all authorization fields: 13
  created + 2 modified paths frozen, the learning suite 11/11, byte-exact rollback
  to the start state, and the copy removed with an absence proof. The real
  execution produced exactly the frozen created/modified path set.

## Observations and the live human review (C2)

Five Observation artifacts were created at the fixed ids through the pinned store
API (`expectedRevision 0`, revision 1) with exact source provenance by path/digest
and evidence references by id/digest. The four factual Observations were then
advanced exactly once each (`expectedRevision 1`, revision 2) to record the owner's
live verbatim review outcome with reviewer, quoted confirmation, machine-captured
UTC, and rationale:

| Observation | outcome | owner verbatim | UTC |
|---|---|---|---|
| observation-mi007-01-deterministic-evidence-sourcing | accepted | "Confermo: 01 accepted, 02 duplicate, 03 deferred, 04 rejected" | 2026-07-18T16:56:45.000Z |
| observation-mi007-02-dead-handler-guard-duplicate | duplicate | (same confirmation) | 2026-07-18T16:56:45.000Z |
| observation-mi007-03-run-mi005-staleness | deferred | (same confirmation) | 2026-07-18T16:56:45.000Z |
| observation-mi007-04-occupied-work-item-conflict | rejected | (same confirmation) | 2026-07-18T16:56:45.000Z |

The fifth, `observation-mi007-05-historical-import-f30`, is a provenance-preserving
historical import of the LESSONS.md F-30 entry ("always stamp `closed: <today>` at
ship"), pinned to source path and digest `eea79ec7…` with the exact quoted entry;
it remains at revision 1 status `historical`, never reviewed, advanced, or promoted.
Each capture was live: the fixed rehearsal placeholder appears in zero produced
artifacts.

## Lessons (C3)

- `lesson-mi007-01-deterministic-evidence-boundary` — created revision 1 status
  `candidate` (`safety_review pending-human-review`), derived from
  observation-mi007-01 (rev 2), then advanced to revision 2 status `accepted` on
  the owner's live confirmation "confermo" (2026-07-18T16:58:57.000Z). Its
  `promotion.automatic` is `false`; the only path to a canonical change is the
  separate Change Proposal.
- `lesson-mi007-02-automatic-rebinding-rejected` — created revision 1 status
  `rejected` with `safety_review unsafe` (an automatic immutability exception would
  let any Run mutate immutable records without owner authorization); derived from
  observation-mi007-04 (rev 2), never advanced, `promotion` `not_promoted`
  `automatic false`.

No learning record mutated or authorized anything by itself.

## Decision, Change Proposal, and the one applied change (C4)

- `decision-mi007-01-accept-deterministic-evidence-boundary-change` — the durable
  Decision, revision 1 status `decided`, `decided_by fabio.vitali`, recording the
  owner's verbatim authorization "ok" (2026-07-18T17:00:48.000Z) to accept
  change-proposal-mi007-01 for owner application, with supporting refs to
  observation-mi007-01, lesson-mi007-01, and the bound Evidence.
- `change-proposal-mi007-01-deterministic-evidence-boundary-rule` — a separate
  artifact (DR-0017), advanced proposed (rev 1) → accepted (rev 2, referencing the
  Decision by id/revision/digest) → applied (rev 3, referencing the applied file by
  path and digest).
- The one applied change is the NEW additive record
  `continuity/bindings/nestfolio/decisions/mi007-deterministic-evidence-boundary-rule.json`
  (file sha256 `f602eeb0…`, status `accepted`, authority fabio.vitali), carrying
  the owner's verbatim application authorization "ok" (2026-07-18T17:01:57.000Z)
  and the full provenance chain (change-proposal → decision → lesson → observation
  → source Evidence). It was created strictly after the Decision and the accepted
  Change Proposal existed — proven by the audit ledger sequence (decision-create
  index 18 and change-proposal-accept index 20 both precede applied-change-create
  index 22) and by the machine-captured UTCs (Decision 17:00:48 precedes
  application 17:01:57). It changes no existing byte and is reversible by removal.

## No-auto-promotion, retirement inventory, and preservation (C5, C7)

The no-auto-promotion proof passed: `runtime/**` (engine aggregate `7e31ff56…`),
`.claude/settings.json`, `.claude/skills/**` including LESSONS.md, `continuity/packs/**`,
every published suite, and every pre-existing `continuity/bindings/**`,
`continuity/artifacts/**` (including the two VS-001 observation and two VS-001 lesson
records), and `.continuity/**` file except the two permitted modify paths are
byte-identical; the one applied file is the sole binding addition and appears only
after the recorded approvals. `continuity/level-6/retirement-inventory.json`
classifies exactly the six migration-plan backward-edge mechanisms
(retained/deferred/rejected for target-routed use, each with its no-active-dependency
route-fact basis) and retires **nothing** (total_retired 0). The append-only audit
ledger's pre-execution 23067 bytes remain the exact prefix; the derived index was
deterministically rebuilt, discovering the new `decisions` and `change-proposals`
kinds with zero canonical loss; the journal tree is byte-identical.

## Mandatory failures (C6)

Every mandatory failure was demonstrated with its exact typed diagnostic. Ten
fixture-based cases fail-closed in an isolated fixture (exit 1; fixture digest and
cleanup absence recorded): F-REVIEW-CONFLICT → `IMMUTABLE_ARTIFACT_EXISTS` and
`REVISION_CONFLICT` (the store's own typed codes); F-IMPORT-PROVENANCE →
`IMPORT_PROVENANCE_MISSING`; F-OUTCOME-PROMOTION → `REVIEW_OUTCOME_PROHIBITS_PROMOTION`
(for duplicate/deferred/rejected/historical); F-UNAUTHORIZED-APPLY →
`UNAUTHORIZED_TARGET_CHANGE`; F-RETIRE-ACTIVE → `RETIREMENT_BLOCKED_ACTIVE_DEPENDENCY`.
Eight standing prohibitions were verified structurally: F-AUTO-PROMOTION
(`AUTOMATIC_PROMOTION_PROHIBITED`), F-LESSON-AUTHORITY
(`LEARNING_RECORD_HAS_NO_RULE_AUTHORITY`), F-TARGET-ROUTED-MINT
(`TARGET_ROUTED_AUTOMATIC_CHECK_PROMOTION_PROHIBITED`; no run-backward.mjs
invocation appears in any recorded command), F-CORE-PROMOTION
(`FRAMEWORK_CORE_PROMOTION_PROHIBITED`), F-REVIEW-WITHHELD
(`REVIEW_AUTHORIZATION_WITHHELD`; stop-and-fail semantics documented without
fabricating a withheld reply — all seven captures were genuinely made), F10
(`EXECUTOR_DELEGATION_PROHIBITED`), F11 (`FORBIDDEN_HIGHER_LEVEL_CLAIM`), and F12
(`MANIFEST_SCOPE_MISMATCH`).

## Suites and the exact manifest (C7)

After execution, in the real tree: the learning suite
`tests/continuity-level-6-learning.test.mjs` 11/11, Level 6 10/10, Level 5 7/7,
Level 2 23/23, Level 1 14/14, engine 9/9, backlog-next 68/68 (no Skill invoked);
Level 4 23/23 and Level 3 23/23 in an isolated committed validation copy
(SE-001-R3/MI-005 mechanics, for their working-tree purity guards), removed with an
absence proof. The Nestfolio execution delta is exactly the fixed create paths and
the two permitted modified paths — **2 modified, 34 created, nothing staged**,
uncommitted and unstaged, SHA-256 manifest self-hash
`53c29538ee56b2b620dcb9ec48509feacee29e62d76351578c8cca7a33878c19`. Its publication
(MI-007-PUB) requires separate explicit authorization.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005 PASS,
MI-006 FAIL, and MI-006-R1 PASS remain twelve separate immutable results; **MI-007
UNCONDITIONAL PASS is a separate new immutable result (the thirteenth)**; the
SE-001-PUB, MI-005-PUB, and MI-006-R1-PUB publication records are unchanged. The
Nestfolio execution delta remains uncommitted; its publication requires separate
explicit authorization. Per the migration plan, sustained dogfooding against the
Product Foundation success criteria becomes the next contractable program phase;
it and broader work remain blocked pending separate contracting, review,
publication, and explicit authorization.
