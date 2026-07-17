---
artifact_id: IMPLEMENTATION-MI-004-R1
status: validated
owner: implementation
last_updated: 2026-07-17
supersedes: []
superseded_by: null
---

# MI-004-R1 — Level 4 Publication-Dependent Suite Revision-Binding Correction

## Result

**UNCONDITIONAL PASS.**

Executed on 2026-07-17 by Claude Code (claude-fable-5) in the same session
that authored and published the contract at continuity-lab revision
`dfaa906f375735f3458d271e723165a744c5b8a4` (DR-0024 aggregated phases). The
correction is published at exact Nestfolio revision
`89ef74ee32740d30b2ddc7f0eb69f24a1374eea6` (subject "Correct MI-004 Level 4
suite revision binding"), sole parent
`a760d6f41ff14491d5b008a7f13234ba0221bcec`.

## Corrected defect

The defect was the sole cause of the SE-001-R1 UNCONDITIONAL FAIL: the
published Level 4 suite was HEAD-pinned to the pre-publication revision
`b9d7264082322e09cfd233819b79f128ef912e31` (hard-coded `REV` in
`tests/continuity-level-4.test.mjs` plus the `formCandidate` stage-2 HEAD
equality check in `continuity/level-4/bin/continuity-context.mjs`) and
self-invalidated once the MI-004 delta itself was committed.

The correction rebinds both to the committed bound revision recorded by
the published artifacts:

- **Tool** (`continuity/level-4/bin/continuity-context.mjs`, stage 2
  "bind-workspace-and-revision"): the HEAD-equality requirement became a
  bound-revision containment requirement — the bound revision must resolve
  to an existing commit object and be contained in the current HEAD's
  ancestry (ancestor-or-equal, `git merge-base --is-ancestor` semantics).
  Violations still block with the same typed diagnostic
  `STALE_CONTEXT_DEPENDENCY`; the recorded stage-2 result string is
  byte-identical, so the rebuilt formation-trace still equals the committed
  artifact. Formation continues to read every source as committed bytes at
  the bound revision.
- **Suite** (`tests/continuity-level-4.test.mjs`): `REV` is now derived at
  runtime from the committed published artifact
  `continuity/level-4/context-recipe.json`
  (`bound_inputs.repository_revision`, value `b9d7264…`) instead of a
  duplicated literal. No scenario's meaning, breadth, or expected
  diagnostic changed.

The suite now verifies the published Level 4 state truthfully at
`a760d6f41ff14491d5b008a7f13234ba0221bcec` and at any later revision whose
history contains the bound revision of record; a repository that does not
contain it still blocks fail-closed with `STALE_CONTEXT_DEPENDENCY`.

The contract's test-only preference was resolved during authoring with
recorded verification: no published Level 4 artifact records a digest of
the tool (the sole reference is the non-digest descriptive `deliverer`
string in `adapter-view.json`), `checkStaleness` probes exactly the seven
pack-recorded dependency digests, the S9 `PINNED` map covers neither
corrected path, and the F1 fixture is digest-drift-based and unaffected. A
test-only change could not restore truthful verification because S1
requires byte-identity with the committed artifacts, which record
`source_revision b9d7264…`, while the defective equality check lives in
the tool.

## Contracted validation sequence (all exact)

1. **Pre-edit reproduction** at `a760d6f4…`: Level 4 suite returned exactly
   21 pass / 2 fail; the failures were exactly S1 (blocked at stage 2 with
   `STALE_CONTEXT_DEPENDENCY`) and F3 (observed `STALE_CONTEXT_DEPENDENCY`
   instead of `CONTEXT_CONTRADICTION_UNRESOLVED`).
2. **Bounded edits**: exactly the two permitted paths above.
3. **Interim uncommitted check**: exactly 22 pass / 1 fail with sole
   failure S10 — the truthful report of two uncommitted tracked
   modifications.
4. **Correction commit** `89ef74ee…` with the exact contracted subject.
5. **Full validation at the corrected committed revision** (clean tree, no
   Skill invoked): Level 4 23/23, Level 3 23/23, Level 2 23/23, retained
   Level 1 14/14, backlog-next 68/68; `stale-check` clean; adapter view
   rebuilt byte-identically in memory (`adapter-view --out=none`,
   `view_sha256`
   `9062458c02bf4ac816cbd7d72af3f1ed3c0e91246217dc83811afc4bedbbe838`);
   all seven published Level 4 artifact digests exact (context-pack
   `e58c9bc1…`, authorization-record `a23ec489…`, adapter-view
   `9062458c…`, context-recipe `1b8f7e70…`, formation-trace `8c054538…`,
   validation-result `c526b961…`, schema `72e3977b…`); `git diff
   a760d6f4..HEAD` lists exactly the two permitted paths; the corrected
   revision's sole parent is `a760d6f4…`.
6. **Push only after every validation passed**; published Nestfolio HEAD
   `89ef74ee32740d30b2ddc7f0eb69f24a1374eea6`.

Corrected file identities: tool SHA-256
`f6e4067330a50e3d53b2281d51a5b224150076ecb0d1564012ff7cebe301d247`
(pre-correction `6bbfadd2…`); suite SHA-256
`e21bbb7a0f1efc411b64a7ea7d988d1db88b5f4c6df60f0082e0d3c0e3a9a628`
(pre-correction `117f6ac7…`). Command streams and the execution summary are
retained outside all repositories at `~/continuity-recovery/mi-004-r1/`.

## Preservation

The two-path diff proves byte-immutability of every published Level 4 JSON
artifact and schema, every Level 1-3 artifact, all MI evidence, the backlog
source, `package.json`, and every Skill. No Nestfolio evidence path was
created or modified; MI-004-R1 evidence lives externally plus this
canonical closure. MI-002-R2 PASS, MI-003 FAIL, MI-003-R1 FAIL, MI-003-R2
PASS, MI-004 PASS, and SE-001-R1 FAIL stand as separate immutable results;
MI-004's recorded 23/23 at its original execution condition is not
repaired, relabeled, or reinterpreted. The authorized Context Pack version
1 remains bounded Level 4 context state with unchanged digests; no
re-authorization occurred and no Level 5-6, Run, Assurance, completion,
Decision, or Learning state was created. The selected effort remains NOT
implemented.

## Next valid program operation

Per the contract's on-pass rule: author, review, and publish under DR-0024
the SE-001-R2 contract re-contracting the selected-effort execution
`dashboard-bff-awaiting-confirmation-activity-gap` against the corrected
published Nestfolio revision `89ef74ee32740d30b2ddc7f0eb69f24a1374eea6`,
carrying the SE-001 product bindings forward unchanged: exclusive
consumption through the digest-matched adapter view of Context Pack
version 1 (pack `e58c9bc1…`, authorization record `a23ec489…`, adapter
view `9062458c…`), the deterministic frozen writable boundary
(`se001-writable-boundary@1`), the fail-before/pass-after gap proof, and
the fifteen create-exactly-on-PASS evidence paths. MI-005 remains blocked.
