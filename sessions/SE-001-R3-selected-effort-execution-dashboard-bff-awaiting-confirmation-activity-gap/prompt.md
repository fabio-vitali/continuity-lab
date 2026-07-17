---
artifact_id: SESSION-PROMPT-SE-001-R3
status: provisional
owner: session
last_updated: 2026-07-17
supersedes: [SESSION-PROMPT-SE-001-R2]
superseded_by: null
---

# SE-001-R3 — Preserved Future Execution Instruction

This file is not execution authorization. Per the contract's
authorization_rule, execution is authorized either in the same session that
publishes the contract (DR-0024 aggregated phases, gates still valid) or in
a later fresh session under this instruction with the exact published
continuity-lab revision resolved. The session executor is Claude Code
operating directly under that instruction. Session choreography follows
DR-0024 (lightened development process); every product-level guarantee in
the contract applies in full.

```text
This is a fresh SE-001-R3 — Selected Effort Execution session. It authorizes
bounded execution of the contract at continuity-lab revision
<EXACT-PUBLISHED-SE-001-R3-CONTRACT-REVISION>: implementing exactly the
selected backlog effort dashboard-bff-awaiting-confirmation-activity-gap
under the digest-matched adapter view of the authorized Context Pack
nestfolio.context.dashboard-bff-awaiting-confirmation-activity-gap version 1,
SHA-256 e58c9bc1978d6799cccda96c2520ea1f7f41ab8b88e8a055ff968cd7b8ce15c1.
Read the full contract at
sessions/SE-001-R3-selected-effort-execution-dashboard-bff-awaiting-confirmation-activity-gap/context-pack.yaml
and follow it; this instruction summarizes but does not replace it. It does
not authorize publication of the implementation, MI-005, or broader work.

Session gates (DR-0024): continuity-workspace, continuity-lab, and Nestfolio
on main with clean working trees; continuity-lab HEAD at the revision named
above and containing the contract; Nestfolio HEAD at
89ef74ee32740d30b2ddc7f0eb69f24a1374eea6 (the MI-004-R1 corrected published
revision, sole parent a760d6f41ff14491d5b008a7f13234ba0221bcec). Stop before
Nestfolio mutation on any contradiction. Do not rewrite history anywhere.

Consume the effort exclusively through the digest-matched adapter view.
Before any mutation verify fail-closed: context-pack.json SHA-256
e58c9bc1978d6799cccda96c2520ea1f7f41ab8b88e8a055ff968cd7b8ce15c1 with
validation valid 18/18, authorization record SHA-256
a23ec489098ba487ac27da2f1ae8c8752916a462517bae553ead7f4e062221cc, adapter
view SHA-256
9062458c02bf4ac816cbd7d72af3f1ed3c0e91246217dc83811afc4bedbbe838, no stale,
rejected, or revoked disposition. Derive the writable boundary
deterministically (se001-writable-boundary@1) from the digest-pinned Level 3
scope.json
(db7a45278e8f4a270552e3ae1db3695b70e07d1624b27bcdc28f6417883a5ad6) and
working-set.json
(e24fe112a6947d1959a2f4fa6d0083e34ea1a2614347487eaba747bcaab64b97) carried
by the pack, prove three byte-identical rebuilds, and freeze it before the
first mutation. All five suites must be green at the start revision before
mutation in the clean working tree. Prove the awaiting-confirmation activity
gap: the contracted validation fails in an isolated temporary copy at the
exact start revision and passes in the implemented working tree. The
retained read-only SE-001-R2 ledger at ~/continuity-recovery/se-001-r2/
(failure-diagnosis.md; implementation-delta-bytes/ with manifest SHA-256
ad5e94bce046332200da8dc3409b6ebb6082aace5a4221239c3b4afee60bd986) is
admissible planning input only (planned sourcing: investor-adpt forwards
DECISION_PACKET_UPDATED advisory→investor; dashboard-bff adds a
status-filtered projection recording one awaiting-confirmation Activity row
per decision, keyed Activity#awaiting-confirmation#<decisionId>); every
binding is re-verified fail-closed.

The ONE correction over SE-001-R2: the contracted "after implementation"
Level 4 and Level 3 suite runs execute in an isolated committed validation
copy OUTSIDE all three repositories — the exact start revision with the
implementation delta committed on top as a throwaway commit in the copy
only (the future publication state, diagnostically proven green by
SE-001-R2), per-path delta digests proven equal to the working tree, copy
removed afterward with absence proof. Level 2, retained Level 1, and
backlog-next post-implementation runs stay in the real working tree. The
published suites are immutable and stay untouched.

Mutate only recorded writable-boundary paths and the fifteen
continuity/evidence/se-001/ create paths (evidence records iteration id
SE-001-R3). Keep every other pre-existing tracked byte immutable, including
the backlog source and every Level 1-4 artifact. After implementation the
Level 4 and Level 3 suites must return 23/23 and 23/23 in the isolated
committed validation copy, and the Level 2, retained Level 1, and
backlog-next suites 23/23, 14/14, and 68/68 in the real working tree,
without invoking any Skill. No dependency operation. Sub-agents for the
executor's own mechanical work are permitted; delegating the implementation
to any Skill, /backlog-next, or continuity:invoke is prohibited. Record no
completion, Run, Assurance, or Level 5-6 state.

Apply the conjunctive unconditional verdict over C1-C7, S1-S10, and F1-F12;
no partial or qualified PASS. After an actual mutation failure, restore per
the contract's rollback rule and close SE-001-R3 as UNCONDITIONAL FAIL.
Leave the Nestfolio implementation delta uncommitted and unstaged with a
recorded SHA-256 manifest; its publication requires a separate later
authorization with the exact subject "Publish SE-001 selected effort
implementation and evidence". Commit and push only the continuity-lab
execution closure permitted by the contract.

Preserve MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2 PASS,
MI-004 PASS, SE-001-R1 FAIL, MI-004-R1 PASS, and SE-001-R2 FAIL as eight
separate immutable results; SE-001 remains published-superseded with no
execution result.

Report the SE-001-R3 result, gap proof, frozen boundary, digest
verifications, suite outputs, exact manifests, and the next valid program
operation, ending with the handoff required by continuity-workspace
CLAUDE.md.
```

The placeholder must be replaced by the exact published contract revision in
the later explicit execution instruction. Leaving it unresolved is a hard
stop.
