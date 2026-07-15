---
artifact_id: IMPLEMENTATION-MI-001D
status: validated
owner: implementation
last_updated: 2026-07-15
supersedes: []
superseded_by: null
---

# MI-001D — Retained Level 1 Candidate Deliberate Supersession

## Unconditional decision

**MI-001D UNCONDITIONAL PASS.**

The invalid retained `nestfolio.level-1@1.0.0` candidate was deliberately
superseded by one new active `1.0.1` candidate. The new candidate verifies all
19 behavior-authority assets, exposes one truthful Level 1 boundary, preserves
the existing backlog-next behavior outside one explicitly bounded newly
authored preflight block, passes every success and mandatory-failure check, and
has a byte-exact isolated rollback to the pre-MI-001D Nestfolio state.

Version `1.0.1` is newly authored after MI-001C. It is not recovered, restored,
reconstructed, original, preserved, or claimed byte-identical to the unavailable
MI-001 output. All four earlier unconditional FAIL results remain unchanged.

## Authorization and repository bindings

Execution began only after the required bindings passed:

```text
continuity-lab authorization revision: f58d482b73a545b34f5f0cd100a5204bb0419a8f
continuity-lab branch: main
continuity-lab HEAD/local main/upstream/origin-main: identical and clean
authorization parent: 86bd2532c85c4cc9e412e0cbc770e0543646cd09
authorization diff: exactly the nine reviewed MI-001D contract paths

Nestfolio start revision: 63ad0b2da2dfb2192d24e73a9224b65654deadb7
Nestfolio post-review published revision: c7f9ceaf79d1703769d8175774268924119042f6
Nestfolio branch: main
Nestfolio HEAD/local main/upstream/origin-main: identical and clean at start
retained candidate ancestor: b7d597ac5361d3c33b6f44a448373f3f9e79b8dc
later committed difference: exactly eight MI-001A Scenario A evidence files
```

No fetch, pull, install, or network operation occurred.

After review, separate user authorization published the verified Nestfolio
tree as `c7f9ceaf79d1703769d8175774268924119042f6`. This publication was not part
of MI-001D execution and does not change its prohibited-action record.

## Independently reproduced retained defect

The complete retained `1.0.0` identity was captured before mutation:

```text
Pack: nestfolio.level-1@1.0.0
Procedure: nestfolio.backlog-next@1.0.0
asset count: 19
recorded aggregate lock digest: 7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602
independently recomputed aggregate: 7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602
verified assets: 18 of 19
sole mismatch: .claude/skills/backlog-next/SKILL.md
expected: 9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90, 33928 bytes
delivered: 0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620, 33164 bytes
boundary result: blocked, ASSET_DIGEST_MISMATCH
```

The historical `1.0.0` candidate remains recorded as invalid. It was not
relabeled or rewritten.

## Newly authored superseding identity

```text
Pack: nestfolio.level-1@1.0.1
Procedure: nestfolio.backlog-next@1.0.1
entry point: /backlog-next
behavior authority: .claude/skills/backlog-next/**
asset count: 19
lock algorithm: SHA-256
Skill SHA-256: e56fd21ae6bb53dfdd2d5d0d239a0200d49d69c82bb171f3336b837a91124cd1
Skill bytes: 34126
aggregate lock digest: 376c1d5aff39a1477af1b49362f681d246b721b30c1e73b4f6ede247b0c9ffe4
delivered activation: active
guarantee level: Level 1 of 6
```

Independent verification found 19 actual regular files, 19 exact lock entries,
19 matching SHA-256 and byte-size pairs, no missing assets, no unenumerated
assets, and an aggregate recomputation identical to the recorded digest.

The new Skill block is 962 bytes. Removing that bounded block from the final
Skill yields exactly the committed start file: SHA-256
`0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620`,
33164 bytes. Existing Skill behavior outside the block is therefore byte-exact.

## Validation results

Success checks:

| Check | Result |
|---|---|
| `continuity:doctor` | PASS — ready; active 1.0.1 identity |
| `continuity:inspect` | PASS — one Pack, one Procedure, one binding, 19 assets |
| `continuity:verify` | PASS — ready; exact lock verified |
| Independent lock recomputation | PASS — 19/19; aggregate exact |
| Level 1 tests | PASS — 14/14 |
| backlog-next baseline parity | PASS — before 68/68; after 68/68 |
| Level 2–6 absence | PASS — explicit in the guarantee card |
| Isolated disable and re-enable | PASS — disabled blocks; re-enabled returns ready; Skill digest unchanged |
| Isolated rollback | PASS — 33 protected paths exact; no backlog change or state conversion |
| Final Nestfolio scope | PASS — every path is contract-permitted |

Mandatory failures, all exercised in fresh temporary copies outside Nestfolio:

| Fixture | Required fail-closed result |
|---|---|
| retained invalid 1.0.0 | `ASSET_DIGEST_MISMATCH` |
| missing primary asset | `MISSING_PREREQUISITE` |
| asset digest mismatch | `ASSET_DIGEST_MISMATCH` |
| asset byte-size mismatch | `ASSET_DIGEST_MISMATCH` |
| aggregate lock tamper | `LOCK_DIGEST_MISMATCH` |
| missing repository prerequisite | `REPOSITORY_IDENTITY_MISMATCH` |
| duplicate Procedure identity | `DUPLICATE_PROCEDURE_IDENTITY` |
| duplicate asset source | `DUPLICATE_ASSET_SOURCE` |
| corrupt lock | `CORRUPT_OR_MISSING_CONFIGURATION` |
| unenumerated asset | `UNLOCKED_ASSET` |
| mixed 1.0.0/1.0.1 identity | `IDENTITY_MISMATCH` |
| forbidden Level 2–6/completion claim | `FORBIDDEN_HIGHER_LEVEL_CLAIM` |
| disabled activation | `LEVEL1_DISABLED` |

All temporary copies were deleted after capture. The real Nestfolio activation
was never disabled and ends active at `1.0.1`.

## Prohibited-action confirmation

- no Skill, Claude Code, `/backlog-next`, or `continuity:invoke` command ran;
- no original-output search, extraction, reconstruction, installation, or
  recovery claim occurred;
- no dependency was installed and no dependency lock changed;
- no Level 2–6 state or guarantee was created;
- MI-002 was not selected or authorized;
- neither repository was committed, pushed, fetched, pulled, merged, rebased,
  reset, checked out, restored, stashed, or cleaned.

## Exact Nestfolio changed-file manifest

```text
M .claude/skills/backlog-next/SKILL.md
M CLAUDE.md
M continuity/level-1/README.md
M continuity/level-1/activation.json
M continuity/level-1/pack-lock.json
M continuity/level-1/pack-manifest.json
M continuity/level-1/procedure-contract.json
M continuity/level-1/project-binding.json
M continuity/level-1/src/application-service.mjs
M continuity/level-1/src/repository-infrastructure.mjs
M tests/continuity-level-1.test.mjs
A continuity/evidence/mi-001d/supersession-record.json
A continuity/evidence/mi-001d/validation-result.json
A continuity/evidence/mi-001d/commands/00-repository-bindings.json
A continuity/evidence/mi-001d/commands/01-doctor.json
A continuity/evidence/mi-001d/commands/02-inspect.json
A continuity/evidence/mi-001d/commands/03-verify.json
A continuity/evidence/mi-001d/commands/04-level1-tests.json
A continuity/evidence/mi-001d/commands/05-backlog-next-tests.json
A continuity/evidence/mi-001d/commands/06-isolated-fixtures.json
A continuity/evidence/mi-001d/commands/07-independent-lock-and-protected-hashes.json
A continuity/evidence/mi-001d/commands/08-skill-preservation.json
```

## Exact continuity-lab changed-file manifest

```text
M CONTINUITY-NEXT-STEPS.md
M README.md
M docs/70-implementation/README.md
A docs/70-implementation/mi-001d-retained-level-1-candidate-deliberate-supersession.md
M docs/90-state/artifact-index.md
M docs/90-state/program-state.md
M sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/context-pack.yaml
M sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/session-handoff.md
```

## Repository deliverables

Nestfolio PASS archive:

```text
/Users/fabiovitali/WebstormProjects/continuity-workspace/output/MI-001D/nestfolio-MI-001D-unconditional-pass-20260715T101500Z.zip
SHA-256: 41fa7e8dd86d7a21d2bc72438d1ca3c4e4993223a79d629a93ac9fe080644897
bytes: 10224904
entries: 3394
integrity: PASS
```

The continuity-lab PASS archive is generated after the closure documents are
finalized; its identity is necessarily captured externally because an archive
cannot truthfully contain its own final digest.

## Sole selected next iteration

**MI-001E — Superseding Candidate Genuine Claude Code Invocation Confirmation**
is selected with status `selected-contract-required`.

MI-001E is not authored, authorized, or executed by MI-001D. MI-002 through
MI-007, genuine invocation, and broader work remain blocked pending a separate
reviewed contract and explicit authorization.
