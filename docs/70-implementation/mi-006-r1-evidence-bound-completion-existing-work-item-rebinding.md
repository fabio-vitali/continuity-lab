---
artifact_id: IMPL-MI-006-R1
status: validated
owner: implementation
last_updated: 2026-07-18
supersedes: []
superseded_by: null
---

# MI-006-R1 — Evidence-Bound Completion Existing-Work-Item Rebinding Correction

Status:

```text
executed 2026-07-18 by Claude Code (claude-opus-4-8), direct execution session, DR-0024
UNCONDITIONAL PASS
the program's first Evidence-bound Work completion, executed through the pinned engine unmodified
Nestfolio execution delta uncommitted and unstaged (52 paths: 6 modified, 46 created)
```

MI-006-R1 executed from the published contract revision
`80d70ac9bf9f1252474a9fbed414a0ef6ee57061` (subject "Publish MI-006-R1
evidence-bound completion existing-work-item rebinding correction contract")
under the DR-0024 lightened development process. It is the single newly bounded
correction of the MI-006 UNCONDITIONAL FAIL (`ENGINE_POLICY_MISMATCH`) and closes
**UNCONDITIONAL PASS**: the one target-routed effort
`dashboard-bff-awaiting-confirmation-activity-gap` is Evidence-bound completed at
Level 6 Assurance scope, through the pinned engine, by advancing its **existing**
`in_progress` Work Item under exactly one bounded immutability exception. The
MI-006 FAIL, the MI-005 PASS, and every other recorded result remain immutable.

## Preconditions (C1) — all verified fail-closed before mutation

- **Session gates.** continuity-workspace, continuity-lab, Nestfolio on `main`
  with clean working trees; continuity-lab HEAD at the published contract
  revision `80d70ac9…`; Nestfolio HEAD `eafa09b81a600bd58fe8f4639298a182039d21f5`
  (published MI-005 Level 5 evidence).
- **Engine-lock.** The 20 `runtime/continuity/**` files plus `.claude/settings.json`
  are byte-identical to the Level 5 lock (aggregate
  `7e31ff56a10ca6b1715b29f02132e66c80e321921b41dcb55329db2e0f320a38`; hook
  `73387f347f43d0f6a154f83ed54c3bdaee0e0b6ba6dbf3120ebf5b8c28834378`; settings
  `999e828d22fcf1cf1e66eb81260a4f8ff3a36b2387adf117ca84602e65c2c6b7`). No engine
  byte was changed.
- **Bound digests.** Context Pack v1
  `e58c9bc1978d6799cccda96c2520ea1f7f41ab8b88e8a055ff968cd7b8ce15c1`, Level 3
  scope `db7a45278e8f4a270552e3ae1db3695b70e07d1624b27bcdc28f6417883a5ad6`,
  Level 2 aggregate
  `73bbb7c9199a79e00208115f1f7ba469be7e42e1bd20d1d72bfc726ac048df26`, effort
  source `b656733991c96c4275d11e9a9f2bff7f5ac72cdd298cbc68a4b94b6799dc742d`.
- **Revision-2 Work Item base** byte-identical to
  `313af5905dbb3fda35dc9c193502df667812f0044c91f6c3b3691d136313aa60` (store
  envelope digest `011336b848987849c890307802cbf7c2954aa0e5ab72c9f164175f4971da4079`),
  revision 2, status `in_progress`.
- **The full MI-005 byte-identity list (16 records)** verified before and after.
- **run-mi005 closed** (status `interrupted`, lease inactive; never reopened,
  reused, resumed, converted, or completed).
- **Read-only route check clear** — no active current-journal Run and no other
  active target Run for the effort; journal tree digest
  `57b5e86a8bad93ba4015b195b8610efce82f9554135d35e11dc67386ab4034a6` (89 files
  across 30 run directories; byte-immutable, unchanged after execution).
- **All fixed create paths absent** at start.
- **Baseline suites green** — Level 5 7/7, Level 4 23/23, Level 3 23/23,
  Level 2 23/23, Level 1 14/14, engine 9/9, backlog-next 68/68, dashboard-bff
  unit 70/70; integration-suite files byte-identical to their pinned digests.

## The bounded exceptions and the three-transition advancement (C2)

The effort's existing Work Item
`continuity/artifacts/work-items/dashboard-bff-awaiting-confirmation-activity-gap.json`
advanced from the immutable revision-2 MI-005 base to a completed terminal state
exclusively through the three contracted transitions:

| rev | transition | mechanism | file sha256 | envelope digest |
|---|---|---|---|---|
| 3 | rebinding write | pinned store API `writeArtifact`, `expectedRevision 2` | `a4f87ccd…` | `25a06fdb…` |
| 4 | engine `startRun` | pinned engine `run-mi006-r1` | `9ea241cb…` | `985b707b…` |
| 5 | engine `completeRun` | pinned engine `run-mi006-r1` (status completed) | `363acbe2…` | `918cb597…` |

The rebinding write changed exactly the ten contracted fields (objective,
`scope_ref`, exclusions, constraints, expected_outputs, completion_criteria,
required_evidence, guards, `active_run_refs`→[], and one appended history entry
recording the machine-captured owner authorization and the contract identity)
and left every other field byte-equal — in particular `source.sha256` remained
`b656733…`, which `completeRun`'s write-back verifies against the live backlog
bytes. The bounded **formation exception** direct-authored two new artifacts
through the pinned store API (`expectedRevision 0`): the completion Scope
`scope-mi006-r1-completion` (revision 1, envelope `053fc05b…`; empty
`allowed_write_paths`, empty `effect_classes`) and the ready Working Set
`ws-mi006-r1` (revision 1, envelope `fe881095…`) binding the rebound Work Item at
revision 3 — the exact preparation mechanism MI-005 itself used and evidenced.
The Assurance Plan was formed by the pinned engine's `startRun` from the rebound
Work Item, carrying the three unchanged Level 3 criteria with completion policy
`all-required-criteria-pass-with-evidence`.

## Evidence across distinct modes (C3) and Guard coexistence (C4)

`validateRun` produced one linked immutable Evidence artifact per criterion, all
passed:

- **mi006r1-c1-investigation** — file validator over the
  `criterion-1-investigation-review.json` record (contains gate
  `"mode": "human-review-authorization"`); the record carries the executor's
  agent-review investigation finding **and** the program owner's explicit
  human-review authorization ("Autorizzo il finding", machine-captured UTC
  `2026-07-18T13:04:57.000Z`). Modes: agent-review + human-review.
- **mi006r1-c2-cdc-sourcing** — command validator running the dashboard-bff unit
  suite (`npx nx test dashboard-bff`, exit 0; 70/70), plus a distinct typed
  agent-review sourcing confirmation (the signal is sourced from the
  DecisionPacket `AWAITING_CONFIRMATION` status via the existing
  `DECISION_PACKET_UPDATED` row CDC, never the removed dead
  `USER_CONFIRMATION_REQUESTED` event). Modes: deterministic + agent-review.
- **mi006r1-c3-non-regression** — command validator running the deterministic,
  dependency-free `criterion-3-non-regression-check.mjs`: the two integration
  files are byte-identical to their pinned digests (the integration suite targets
  real deployed AWS and is not run in a bounded local session — the SE-001
  non-regression precedent), the two unit projection files are byte-identical,
  and no non-comment `USER_CONFIRMATION_REQUESTED` occurrence exists under
  `services/investor/dashboard-bff/src`. Mode: deterministic.

The deterministic, agent-review, and human-review modes are distinct typed modes
with separate provenance, never merged into one score (DR-0017). Exactly one
concrete condition — the dead-handler regression guard — is classified as a
target Guard with full metadata
(`nestfolio-dashboard-bff-no-dead-user-confirmation-requested-handler`,
definition `74008f12…`), referenced by the rebound Work Item's guards array and
evaluated true. The dashboard-bff suites keep their own authority as validators
(unit = deterministic command; integration = byte-identity non-regression
subject) and are NOT automatically minted into Guards; the Git commit/ship gates
and the published implementation revision `363283bc…` are referenced once,
read-only, with no second verdict.

## Atomic Evidence-bound completion (C5)

`completeRun` atomically transitioned the Work Item to completed (the third
exception transition, revision 5), the Working Set to completed, recorded the
final verified Checkpoint `run-mi006-r1-final-1`, linked all three Evidence
artifacts, and performed the truthful backlog completion write-back:
`docs/backlog/dashboard-bff-awaiting-confirmation-activity-gap.md` advanced from
`b656733…` to `ea565c07025ffa9643895ea8074bd9ca20d8deb4e1be682b476ca77712e5a2c2`
(status `shipped`, `closed 2026-07-18`, validation_gate referencing
`run-mi006-r1` and the final Checkpoint), only the tracking fields written and
the planning narrative otherwise byte-identical. The single-writer lease was
held throughout and released at completion; the audit ledger is append-only (the
pre-execution bytes are the exact prefix of the final file); the derived index
was deterministically rebuilt. The full correction was proven byte-exactly
reversible in an isolated copy before real application, and the real delta
remains uncommitted.

## Mandatory failures (C6)

Every mandatory failure blocked with its exact typed diagnostic in isolated
fixtures outside all three repositories (exit code 1, fixture digest and cleanup
absence recorded): F1/F2/F3/F-NARRATIVE → `COMPLETION_GATE_BLOCKED`; F4 →
`OUT_OF_SCOPE_EFFECT`; F-REBIND-CONFLICT → `REVISION_CONFLICT` (and
`IMMUTABLE_ARTIFACT_EXISTS` on a formation collision); F-STALE-CONTEXT →
`STALE_RUN`; F5 → `UNRESOLVED_DECISION_BLOCKS_COMPLETION`; F6 →
`GUARD_BLOCKS_COMPLETION`; F-AUTO-GUARD → `AUTOMATIC_GUARD_MINTING_PROHIBITED`;
F-AUTO-WAIVER → `AUTOMATIC_OR_DISGUISED_WAIVER_PROHIBITED`; F-WAIVER-EXPIRY →
`WAIVER_EXPIRED_CRITERION_REOPENED`. F-EXCEPTION-OVERREACH, F10, F11, and F12 are
standing prohibitions verified structurally (write-set equals the frozen set; no
Skill/`/backlog-next`/`continuity:invoke` delegation; no MI-007 state; the pinned
engine byte-identical). The distinct authorized Waiver path was demonstrated in an
isolated fixture on a synthetic criterion — explicit and owner-authorized, scoped
and time-bounded, evidence-linked, recorded distinct from a pass, reopening the
blocked criterion on expiry, never automatic — with no real effort criterion
waived.

## Preservation, corrected suites, and the exact manifest (C7)

The four self-invalidating published assertions (Level 4 S7/S8/S9 and the Level 5
effort-source test) received the bounded completion-aware correction: each
verifies the recorded digest against the bound-revision committed backlog bytes
and, when the working tree has advanced past completion, additionally requires the
`completion-binding.json` write-back transition (before == recorded, after ==
current). The corrected suites pass in **both** the pre-completion and
post-completion states, proven in the rehearsal and again in the real tree; the
suite totals remain exactly 23 and 7 and no product or engine code was touched.

After execution, in the real post-completion tree: Level 6 10/10, Level 5 7/7,
Level 2 23/23, Level 1 14/14, engine 9/9, backlog-next 68/68 (no Skill invoked),
dashboard-bff unit 70/70; Level 4 23/23 and Level 3 23/23 in an isolated committed
validation copy (SE-001-R3 / MI-005 mechanics, for their working-tree purity
guards). Every MI-005/VS-001/VS-001A byte-identity record is unchanged, the
current journal tree is byte-identical, the audit prefix is preserved, and every
isolated fixture and rehearsal copy was removed with an absence proof. The
Nestfolio delta is exactly the fixed create paths, the two formation writes, the
frozen engine write-set, and the six permitted modified paths — **6 modified,
46 created, nothing staged**, uncommitted and unstaged, SHA-256 manifest self-hash
`840c12c0ae31e1884a4221372b873be5576bcd7097485d29bcb938e7d0b93fea`.

## Accepted documented consequence

After the Work Item advanced past revision 2, `run-mi005` became permanently
non-resumable (its final Checkpoint pins work_item revision 2; the engine's
freshness validation returns `STALE_RUN`). No `run-mi005` byte changed; the Run
was already closed at Level 5 operational scope and its resumability obligation
was fully discharged and evidenced by MI-005. This is an accepted, documented
consequence — not a repair, relabeling, or reinterpretation of the MI-005 PASS.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005 PASS, and
MI-006 FAIL remain eleven separate immutable results; **MI-006-R1 UNCONDITIONAL
PASS is a separate new immutable result (the twelfth)**; the SE-001-PUB and
MI-005-PUB publication records are unchanged. The Nestfolio execution delta
remains uncommitted; its publication requires separate explicit authorization.
MI-007 (Governed Learning and Selective Current-Runtime Retirement) becomes the
next contractable slice; MI-007 and broader work remain blocked pending separate
contracting, review, publication, and explicit authorization.
