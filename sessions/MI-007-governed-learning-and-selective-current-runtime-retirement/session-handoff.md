# MI-007 — Contract Authoring Handoff

## What this session did

Authored, owner-reviewed, and published the MI-007 — Governed Learning and
Selective Current-Runtime Retirement contract
(`context-pack.yaml` beside this file) under DR-0024, in one session, from
continuity-lab `0459cc23049e901119745114698d6ea4c64cca62` and read-only
Nestfolio `6229bb010d76723aaec0385c923b157762ee512e`. Execution was NOT
started.

## The owner-approved design

The human program owner approved the recommended full-loop bound in the
authoring session on 2026-07-18:

- **Five fixed Observations** through the pinned store API: four factual
  ones sourced by digest from the run-mi006-r1 Evidence and the MI-006
  closure, reviewed at execution — live, verbatim, machine-captured — to
  the contracted outcomes **accepted** (deterministic-evidence sourcing
  finding), **duplicate** (dead-handler condition, already governed by the
  classified Guard), **deferred** (run-mi005 staleness consequence), and
  **rejected** (unsafe automatic-rebinding candidate); plus **one
  provenance-preserving historical import** (current LESSONS.md F-30
  entry, digest-pinned, never promoted).
- **Two Lessons** (accepted candidate; rejected-unsafe), one **durable
  Decision**, one **separate Change Proposal**, and exactly **ONE
  owner-applied additive change**: the deterministic-evidence boundary
  rule as a new record under `continuity/bindings/nestfolio/decisions/`,
  created only after the recorded Decision and acceptance (audit-order
  proven), reversible by removal.
- **Retirement inventory** classifying the six migration-plan
  backward-edge mechanisms (retained/deferred/rejected for target-routed
  use; automatic check promotion prohibited for target-routed work);
  **nothing is actually retired** in this bound.
- **Pinned engine unmodified**; `recordLesson` excluded (it would advance
  the published run-mi006-r1 record); every published record byte-identity
  pinned; the only pre-existing paths that change at execution are the
  append-only audit ledger and the derived index.

The store mechanics (kind-generic writeArtifact, new decisions and
change-proposals kinds, fail-closed REVISION_CONFLICT and
IMMUTABLE_ARTIFACT_EXISTS, index rebuild discovery) were proven
empirically in an isolated scratch store outside all three repositories,
since removed.

## DR-0025 closure

queue_position 34; the generator's permanent blocked tail reduced from
"MI-007 — blocked" to the single "broader implementation and unrelated
migration — blocked" entry; indices regenerated; `--check` exit 0.

## Immutable ledger

MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS, MI-004 PASS,
SE-001-R1 FAIL, MI-004-R1 PASS, SE-001-R2 FAIL, SE-001-R3 PASS, MI-005
PASS, MI-006 FAIL, and MI-006-R1 PASS remain twelve separate immutable
results; SE-001-PUB, MI-005-PUB, and MI-006-R1-PUB are unchanged.

## Next valid operation

Execute MI-007 in a fresh session launched under `prompt.md` beside this
file, with continuity-lab HEAD at the exact published contract revision
recorded in the launch handoff, Nestfolio clean at `6229bb01…`, and the
human program owner available in-session for the live review capture.
Execution remains blocked until that session (or an explicit same-session
extension) is explicitly authorized.
