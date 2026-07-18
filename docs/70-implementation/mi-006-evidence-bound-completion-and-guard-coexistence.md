---
artifact_id: IMPL-MI-006
status: validated
owner: implementation
last_updated: 2026-07-18
supersedes: []
superseded_by: null
---

# MI-006 — Evidence-Bound Completion and Guard Coexistence

Status:

```text
executed 2026-07-18 by Claude Code (claude-opus-4-8), direct execution session, DR-0024
UNCONDITIONAL FAIL
primary diagnostic: ENGINE_POLICY_MISMATCH
fail-closed before any Nestfolio mutation
Nestfolio unchanged and clean at eafa09b81a600bd58fe8f4639298a182039d21f5
```

MI-006 executed from the published contract revision
`6a94e73c864627c3c33a27f3a891005df22984df` (subject "Publish MI-006 evidence-bound
completion and guard coexistence contract") under the DR-0024 lightened
development process. It closed **UNCONDITIONAL FAIL** at pre-mutation
preparation, before any Nestfolio content was written, because the pinned
engine cannot satisfy a contracted Assurance policy without violating this
contract's write boundary — the `engine_binding` `ENGINE_POLICY_MISMATCH`
condition, which the contract defines as UNCONDITIONAL FAIL without repair or
engine modification.

## What passed before the blocker

All session gates and every read-only precondition verified green before the
blocking condition was reached:

- **Session gates.** continuity-workspace, continuity-lab, and Nestfolio on
  `main` with clean working trees; continuity-lab HEAD
  `6a94e73c864627c3c33a27f3a891005df22984df` (the published MI-006 contract,
  subject-exact); Nestfolio HEAD `eafa09b81a600bd58fe8f4639298a182039d21f5`
  (the published MI-005 Level 5 evidence).
- **Engine-lock.** The 20 `runtime/continuity/**` files plus
  `.claude/settings.json` are byte-identical to the Level 5 engine-lock
  (aggregate engine digest
  `7e31ff56a10ca6b1715b29f02132e66c80e321921b41dcb55329db2e0f320a38`; hook
  registration digest
  `73387f347f43d0f6a154f83ed54c3bdaee0e0b6ba6dbf3120ebf5b8c28834378`; settings
  `999e828d22fcf1cf1e66eb81260a4f8ff3a36b2387adf117ca84602e65c2c6b7`). The
  engine was verified read-only and never modified.
- **Bound digests.** Context Pack version 1
  `e58c9bc1978d6799cccda96c2520ea1f7f41ab8b88e8a055ff968cd7b8ce15c1`, Level 3
  scope `db7a45278e8f4a270552e3ae1db3695b70e07d1624b27bcdc28f6417883a5ad6`,
  Level 2 aggregate
  `73bbb7c9199a79e00208115f1f7ba469be7e42e1bd20d1d72bfc726ac048df26`, and the
  effort backlog source
  `b656733991c96c4275d11e9a9f2bff7f5ac72cdd298cbc68a4b94b6799dc742d` all verify.
- **run-mi005 closed.** Status `interrupted`, lease inactive, no active
  session; no active target Run exists for the effort.
- **Read-only route check clear.** No active current-journal Run for the
  effort; `.git/journal` holds 89 files across 30 run directories with tree
  digest `ae1506534f72092ec0200473e36d6d0ee39a8ce6a89444a2d4bf64e4ebd01b30`
  (byte-immutable; MI-006 wrote nothing under the journal path).
- **Fixed create paths absent** at start.
- **Baseline suites green** in the real working tree: Level 5 7/7, Level 4
  23/23, Level 3 23/23, Level 2 23/23, Level 1 14/14, engine 9/9, backlog-next
  68/68, and the dashboard-bff unit suite 70/70.

## Root cause (ENGINE_POLICY_MISMATCH)

The pinned engine (`runtime/continuity/**`, unmodified) cannot form the
contracted Level 6 Assurance Plan from a **fresh** Work Item carrying the three
unchanged Level 3 criteria for the effort, nor Evidence-bound complete it,
without violating the contract's write boundary:

1. The engine models exactly **one Work Item artifact per `work_id`**
   (`selectWork` writes `continuity/artifacts/work-items/<work_id>.json` with
   `expectedRevision: 0`), and `completeRun`'s backlog write-back
   (`updateBacklogItem(root, workItem.id, …)`) requires `workItem.id` to equal
   the backlog id `dashboard-bff-awaiting-confirmation-activity-gap` for the
   truthful completion write-back to target `docs/backlog/…md`. So the
   completing Work Item id is forced to be the effort id.
2. That work-item artifact **already exists at revision 2, status
   `in_progress`**, committed at `eafa09b8` as an **immutable MI-005 record**,
   carrying the dogfood criterion `mi005-keyed-effect-materialized` (not the
   three Level 3 criteria) — because **MI-005 executed its Level 5 dogfood Run
   using the effort's real work id**, leaving the effort's canonical Work Item
   lifecycle permanently `in_progress` and tied to the closed `run-mi005`.
3. Consequently `selectWork(dashboard-bff-awaiting-confirmation-activity-gap)`
   returns **`REVISION_CONFLICT`** (`expected_revision 0`, `actual_revision 2`)
   — confirmed empirically in an isolated copy outside all three repositories,
   since removed with an absence proof. Reusing or advancing the existing Work
   Item via `startRun`/`completeRun` would **mutate an immutable MI-005 record**
   (prohibited by `scope_rule` and the immutability of Level 5 / MI-005
   records) and would validate the wrong criteria. Using a different work id
   breaks the backlog write-back (`WORK_NOT_FOUND`).

No engine path forms or completes the effort's Work Item without engine
modification (prohibited: "introduce no engine code") or an immutability
violation (prohibited). Per `engine_binding`, execution blocks fail-closed with
`ENGINE_POLICY_MISMATCH` and MI-006 closes UNCONDITIONAL FAIL without repair or
engine modification.

## Secondary finding (owner-authorized; not the cause)

An independent contract-specification defect was found and authorized around by
the human program owner (machine-captured UTC `2026-07-18T11:38:34.000Z`):
criterion 2 and criterion 3 deterministic Evidence reference the **dashboard-bff
integration suite**, but the awaiting-confirmation projection is asserted only
in the **unit** suite (`test/unit/handlers/awaiting-confirmation-activity-gap.test.ts`,
`test/unit/transforms/awaiting-confirmation-activity.test.ts`), and the
integration suite targets **real deployed AWS** (`createTestContext` →
EventBridge/DynamoDB/AppSync/Cognito, `us-east-1`, prefix `dev`), not run in a
local bounded Continuity session — SE-001, which shipped this fix with an
UNCONDITIONAL PASS, itself relied on the unit suite plus non-regression. The
owner authorized reading criterion 2/3 Evidence as the unit suite plus a
byte-identity/non-regression proof. This was **not** the cause of the FAIL (the
`ENGINE_POLICY_MISMATCH` is) but is recorded here so any correction fixes the
integration-suite Evidence wording as well.

## What was not done

No Nestfolio content was written: no `run-mi006`, no `continuity/level-6`, no
`continuity/evidence/mi-006`, no `.continuity/runs/run-mi006`, no Work Item
binding, no Guard binding, no Assurance Plan, no Evidence, no completion, and no
backlog write-back. Nestfolio is byte-identical and clean at
`eafa09b81a600bd58fe8f4639298a182039d21f5`. The only engine invocation was the
isolated-copy `selectWork` collision proof, performed entirely outside the three
repositories and removed with an absence proof.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, and MI-005 PASS
remain ten separate immutable results; the SE-001-PUB and MI-005-PUB
publication records are unchanged. **MI-006 UNCONDITIONAL FAIL is a separate,
new immutable result** and is not repaired, relabeled, or reinterpreted. MI-007
and broader work remain blocked.

## Next operation

Per `next_iteration_rule.on_fail`, select only a newly bounded correction
supported by the failure evidence; do not broaden scope. Because the root cause
is a hard engine/immutability constraint — the effort's Work Item id is
permanently occupied by an immutable `in_progress` MI-005 record — enabling the
effort's Level 6 Evidence-bound completion requires a program-level decision:

- **(a) an engine revision** providing a fresh Level 6 completion path for an
  effort whose work-item id was already used by a prior Run (for example a
  re-keyed or additional Work Item lineage, or a completion path that does not
  collide on `work_id`); or
- **(b) a re-scoped MI-006-R1** that explicitly authorizes advancing the
  existing `in_progress` Work Item to completed under a revised criteria mapping
  and a bounded, explicit immutability exception for that single transition —
  and that also corrects the criterion 2/3 integration-suite Evidence wording to
  the unit suite plus non-regression.

Both are new decisions/contracts and are not authorized by this session.
