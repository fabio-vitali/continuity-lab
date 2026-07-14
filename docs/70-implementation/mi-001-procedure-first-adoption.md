---
artifact_id: IMPLEMENTATION-MI-001
status: validated
owner: implementation
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# MI-001 — Procedure-First Adoption

## Unconditional decision

**FAIL.**

The Level 1 implementation boundary and all deterministic success/failure tests were completed, but the active contract requires both a genuine bounded Claude Code invocation and a successful genuine direct `/backlog-next` invocation after disable. The execution environment supplied no Claude Code executable, authenticated Claude Code Session, or admissible Claude executor tool. Those scenarios were not fabricated or replaced by unit tests, so criteria C1 and C3 fail and the conjunctive contract requires FAIL.

## Authorization and source verification

Authorization was consistent before modification:

- MA-001 remained complete with unconditional PASS and G5 valid;
- `docs/60-migration/migration-plan.md` was canonical;
- DR-0023 was validated and active;
- the MI-001 contract was reviewed and committed;
- MI-001 was the sole `authorized-not-started` execution iteration;
- MI-002 through MI-007 and broader work remained blocked.

The Nestfolio archive was exactly bound to the contract:

```text
reviewed revision: 3aa8f4773955541415f615abd80a0a9702bcb416
archive SHA-256: 0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be
ZIP comment: 3aa8f4773955541415f615abd80a0a9702bcb416
```

## Implemented Level 1 slice

Nestfolio now contains exactly one project-specific Procedure boundary:

```text
Pack: nestfolio.level-1@1.0.0
Procedure: nestfolio.backlog-next@1.0.0
Claude Code entry point: /backlog-next
behavior authority: .claude/skills/backlog-next/**
asset count: 19
lock algorithm: SHA-256
aggregate lock digest: 7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602
```

The implementation provides:

- one minimal Pack manifest;
- one Procedure contract;
- one Nestfolio project binding;
- a complete exact lock for every file under `.claude/skills/backlog-next/**`;
- repository identity and activation diagnostics;
- bounded doctor, inspect, verify, invoke, activate, disable, and forbidden-claim behavior;
- an Application Service boundary, Repository Infrastructure boundary, and Claude Code Adapter mapping;
- structured non-canonical invocation provenance;
- visible Level 1 guarantees and explicit Level 2-6 absence;
- fail-closed handling for missing assets, digest drift, missing prerequisites, duplicate Procedure identity, duplicate asset sources, aggregate lock tampering, corrupt locks, unenumerated assets, disabled activation, and forbidden higher-level claims.

The existing Skill remains the executable/instruction behavior authority. The only Skill change is a visible Level 1 preflight section that delegates back to the unchanged backlog-next procedure steps. No backlog, journal, runtime, check, Work, Scope, Context, Run, Assurance, Decision, Observation, or Lesson state was created or converted.

## Criterion matrix

| Criterion | Result | Evidence |
|---|---|---|
| C1 — ten-minute path from instructions through inspect and bounded invocation | **FAIL** | `npm run continuity:doctor`, `npm run continuity:inspect`, and the bounded invocation preflight completed in under one second and returned `/backlog-next --auto`; no genuine Claude Code Session was available to execute the Skill and return its normal visible result. |
| C2 — exact lock enumerates and verifies every consumed asset | **PASS** | 19/19 files under `.claude/skills/backlog-next/**` are enumerated with path, byte count, and SHA-256; missing, mismatched, duplicate, unenumerated, corrupt, and aggregate-lock-tamper cases block. |
| C3 — direct current Skill remains available after disable | **FAIL** | Disable, target-invocation block, target removal, unchanged Skill bytes, and unchanged backlog bytes were proven. A genuine direct `/backlog-next` invocation could not be executed without Claude Code. |
| C4 — no Level 2-6 state or guarantee | **PASS** | Guarantee card explicitly lists Level 2-6 absence; forbidden completion claim returns `FORBIDDEN_HIGHER_LEVEL_CLAIM`; changed-file inspection found no prohibited canonical-state paths. |
| C5 — current checks/content remain compatible | **PASS** | New Level 1 suite: 12/12 pass. Existing backlog-next suite before and after: identical 54/56 pass; the same two tests fail in both archives because dependencies such as `zod` are not installed and the supplied runtime is Node 22 while the repository declares Node >=24. No current backlog/runtime/check content changed. |
| C6 — authority ownership is observable and unambiguous | **PASS** | Inspect output names the Procedure contract, Pack manifest, project binding, exact lock, executor asset root, repository identity, entry point, permissions, prerequisites, active guarantees, and absent guarantees. |
| C7 — rollback/removal preserves history without state conversion | **PASS** | Disable and fixture removal preserve the current Skill and backlog bytes; activation returns to `active: true` in the delivered archive; no current state conversion occurs. |

## Required scenario results

### Success scenarios

| Scenario | Result |
|---|---|
| Clean activation identifies repository and truthful Level 1 guarantees | PASS |
| Inspect displays one Procedure, one Pack, all assets/digests, prerequisites, permissions, and entry point | PASS |
| Genuine bounded Claude Code invocation delegates to locked Skill and returns normal result | **FAIL — executor unavailable** |
| Disable restores direct current invocation with no state conversion | **FAIL — disable/removal proven; genuine direct Claude invocation unavailable** |

### Failure scenarios

| Scenario | Result/code |
|---|---|
| Missing primary Skill asset | PASS — blocked as `MISSING_PREREQUISITE` |
| Locked asset digest mismatch | PASS — `ASSET_DIGEST_MISMATCH` |
| Missing declared prerequisite/capability | PASS — `REPOSITORY_IDENTITY_MISMATCH` with remediation |
| Duplicate Procedure id/version | PASS — `DUPLICATE_PROCEDURE_IDENTITY` |
| Duplicate asset source | PASS — `DUPLICATE_ASSET_SOURCE` |
| Forbidden Work/Run/completion/Assurance/learning claim | PASS — `FORBIDDEN_HIGHER_LEVEL_CLAIM` |
| Corrupt lock | PASS — `CORRUPT_OR_MISSING_CONFIGURATION` |
| Partial/unlocked asset | PASS — `UNLOCKED_ASSET` |
| Aggregate lock digest tamper | PASS — `LOCK_DIGEST_MISMATCH` |

## Validation commands and results

```bash
npm run -s continuity:doctor
# ready; Nestfolio recognized; Level 1 active

npm run -s continuity:inspect
# ready; one Pack, one Procedure, 19 verified assets

npm run -s continuity:verify
# ready

npm run -s continuity:invoke -- -- --auto
# ready; delegation command /backlog-next --auto; non-canonical invocation digest emitted

node continuity/level-1/cli.mjs claim --type=completion
# exit 1; FORBIDDEN_HIGHER_LEVEL_CLAIM

npm run -s continuity:disable
node continuity/level-1/cli.mjs invoke
# exit 1; LEVEL1_DISABLED; direct /backlog-next remains the remediation

npm run -s continuity:activate
# active restored

node --test tests/continuity-level-1.test.mjs
# 12 tests, 12 pass, 0 fail

node --test .claude/skills/backlog-next/test/*.test.mjs
# original archive: 56 tests, 54 pass, 2 environment failures
# modified archive: 56 tests, 54 pass, the same 2 environment failures
```

No unit or deterministic test is presented as genuine Claude Code invocation evidence.

## Exact Nestfolio changed-file manifest

```text
M .claude/skills/backlog-next/SKILL.md
M CLAUDE.md
A continuity/level-1/README.md
A continuity/level-1/activation.json
A continuity/level-1/cli.mjs
A continuity/level-1/pack-lock.json
A continuity/level-1/pack-manifest.json
A continuity/level-1/procedure-contract.json
A continuity/level-1/project-binding.json
A continuity/level-1/src/application-service.mjs
A continuity/level-1/src/claude-code-adapter.mjs
A continuity/level-1/src/core.mjs
A continuity/level-1/src/repository-infrastructure.mjs
M package.json
A tests/continuity-level-1.test.mjs
```

## Sole selected next iteration

**MI-001A — Genuine Claude Code Invocation Confirmation.**

This is a corrective MI-001 follow-up, not MI-002. It must use the delivered Nestfolio implementation candidate in a real Claude Code environment and prove only the two missing contracted scenarios:

1. invoke `/backlog-next` through the active Level 1 boundary and capture genuine Claude Code provenance plus the normal visible Skill result;
2. disable Level 1, invoke `/backlog-next` directly in a fresh genuine Claude Code Session, and prove current behavior remains available.

A reviewed MI-001A contract is required before execution. MI-002 and all broader work remain blocked.
