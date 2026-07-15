---
artifact_id: IMPLEMENTATION-MI-002
status: validated
owner: implementation
last_updated: 2026-07-15
supersedes: []
superseded_by: null
---

# MI-002 — Reusable Pack Composition

## Unconditional decision

**MI-002 UNCONDITIONAL PASS.**

The immutable `nestfolio.level-1@1.0.1` Pack and
`nestfolio.backlog-next@1.0.1` Procedure now compose predictably with one new
local read-only reusable Pack, `continuity.repository-tools@1.0.0`, containing
`continuity.repository-status@1.0.0`. One exact local composed lock resolves
exactly two Pack versions and two Procedure identities, with one specification
and one primary executor asset per Procedure, no override, no registry, no
remote source, and no version range.

All C1-C7 criteria, ten required success scenarios, and fifteen mandatory
failure scenarios pass conjunctively. The retained Level 1 activation, Pack,
Procedure, 19 behavior assets, tests, evidence, identity, and direct
`/backlog-next` path remain byte-exact. No Level 3-6 state or broader authority
was created.

## Authorization and repository bindings

Execution started only after separate Git-metadata checks proved clean,
pushed, remote-aligned `main` at:

```text
continuity-workspace  eb990e114973e42af9935379f6b13f34f2e5e3b8
continuity-lab        ef9b14cfbb352e1672a17d9b4d1c19dbb97d32d3
Nestfolio             8f923240b6be1e0373b25b090f6be76139e4b256
```

The separate explicit execution instruction was received in this fresh control
session. Program State and every required input were read in the exact contract
order before Nestfolio content modification.

No dependency was installed. `package-lock.json` was absent before and after.
No commit, push, fetch, pull, history rewrite, selected backlog execution, or
unrelated repository work occurred.

## Active Level 2 identity

```text
Project Pack:     nestfolio.level-1@1.0.1
Project Procedure: nestfolio.backlog-next@1.0.1
Project asset:    .claude/skills/backlog-next/SKILL.md

Reusable Pack:   continuity.repository-tools@1.0.0
Reusable Procedure: continuity.repository-status@1.0.0
Reusable asset:  .claude/skills/continuity-repository-status/SKILL.md

Previous aggregate: 376c1d5aff39a1477af1b49362f681d246b721b30c1e73b4f6ede247b0c9ffe4
Active aggregate:   73bbb7c9199a79e00208115f1f7ba469be7e42e1bd20d1d72bfc726ac048df26
Composed lock file SHA-256: 0d0e6b52eb5aab3957d51abb432b5baa4c4911880151de8c96a9e4f7c90bb63c
Packs / Procedures / overrides / registries / remote sources: 2 / 2 / 0 / 0 / 0
```

The reusable Procedure observes only local Git root, HEAD, branch or detached
state, locally resolvable upstream and ahead/behind counts, and staged,
unstaged, and untracked path names. It writes nothing, performs no network
request, interprets no repository content, and contains no Nestfolio-only
semantic or path.

## Resolution, authority, and activation

Canonical JSON uses sorted object keys and LF termination. The aggregate
SHA-256 is independently recomputed over compact canonical resolved lock
material excluding the aggregate field itself. Every selected manifest,
Procedure specification, project binding, primary executor asset, and all 19
retained behavior assets have exact path, SHA-256, and byte-size identity.

The composed lock is the sole Level 2 target resolution authority. Pack sources
remain immutable content authorities. The Nestfolio binding remains sole owner
of project behavior and `/backlog-next`; the reusable Pack owns only generic
repository-status behavior; Git remains authoritative for repository facts.

Activation used compare-and-swap from the exact predecessor digest and one
atomic replacement of `continuity/level-2/activation.json`. The success record
is retained in `activation-history.ndjson`. All six required package entry
points route through the Level 2 CLI. Direct `/backlog-next` remains available
outside target resolution.

## Validation results

```text
MI-002 Level 2 tests: 23/23 PASS
retained Level 1 tests: 14/14 PASS
backlog-next tests: 68/68 PASS
required success scenarios: 10/10 PASS
mandatory failure scenarios: 15/15 PASS (failed closed as required)
```

The reusable Procedure returned the same result schema in Nestfolio and a
temporary neutral Git repository with no project configuration. Before/after
Git status output was identical, and both results reported zero repository
writes and zero network requests.

The first Level 2 test attempt exposed a nested `status` field shadowing the
top-level structured success discriminator. A bounded correction renamed it
`repositoryStatus`. The second attempt exposed only a macOS `/var` versus
`/private/var` test assertion alias; the assertion was corrected to compare
canonical real paths. Both attempts and corrections are retained in deterministic
evidence. The complete final suite then passed 23/23.

## Mandatory failure disposition

Every scenario used a fresh temporary fixture outside both repositories and
failed closed with a typed diagnostic:

| Scenario | Diagnostic |
|---|---|
| duplicate Pack identity with divergent declaration | `DUPLICATE_PACK_IDENTITY` |
| duplicate Procedure identity with divergent specification | `DUPLICATE_PROCEDURE_IDENTITY` |
| competing entry point or asset path | `COMPETING_ENTRY_POINT` / `MULTIPLE_ASSET_RESOLUTION` |
| missing manifest, specification, asset, or prerequisite | `MISSING_SOURCE` / `MISSING_DECLARED_PREREQUISITE` |
| individual digest or byte-size drift | `SOURCE_DIGEST_MISMATCH` |
| aggregate tamper | `AGGREGATE_LOCK_DIGEST_MISMATCH` |
| unenumerated source | `UNENUMERATED_OR_MULTIPLY_SOURCED_ASSET` |
| unsupported executor or adoption level | `UNSUPPORTED_EXECUTOR` / `UNSUPPORTED_ADOPTION_LEVEL` |
| missing capability | `MISSING_REQUIRED_CAPABILITY` |
| undeclared or widened permission | `UNDECLARED_OR_WIDENED_PERMISSION` |
| newly selected deprecated Pack | `NEWLY_SELECTED_DEPRECATED_PACK` |
| stale CAS predecessor | `STALE_PREDECESSOR_LOCK_DIGEST` |
| interrupted replacement | `ATOMIC_REPLACEMENT_INTERRUPTED`; Level 1 remained authoritative |
| prohibited project semantic/path in reusable Pack | `PROHIBITED_PROJECT_SEMANTIC` |
| Work, Context, Run, Assurance, Learning, completion, registry, or remote claim | `FORBIDDEN_HIGHER_LEVEL_CLAIM` |

All fixtures and recovery copies were deleted by test cleanup.

## Criterion matrix

| Criterion | Result |
|---|---|
| C1 — exact two-Pack/two-Procedure deterministic resolution | PASS |
| C2 — declarations, permissions, capabilities, compatibility, individual identities, and aggregate self-validation | PASS |
| C3 — read-only reusable behavior and neutral-fixture portability | PASS |
| C4 — every mandatory failure blocks with typed diagnostics | PASS |
| C5 — exact retained 1.0.1 Pack, Procedure, 19 assets, tests, and direct behavior | PASS |
| C6 — authority, source, adapter, Git, route, and guarantee visibility | PASS |
| C7 — CAS, comparison, history, isolated rollback/reapply, and Level 3-6 absence | PASS |

## Rollback and preservation

An isolated candidate copy used a verified external recovery copy of the exact
predecessor `package.json` and Level 1 activation bytes. Rollback restored both
byte-exactly, retained the proposed Level 2 lock and history, and returned the
route to the Level 1 aggregate. Reapply restored the reviewed package entry
points and selected the identical Level 2 aggregate. No Pack version was
rewritten.

Final retained identities include:

```text
Level 1 activation SHA-256: d8d011c6d672cda725f039ddfffb26b9157bb95462538423ac473bb3b37a0650
Level 1 Pack lock SHA-256: 701caacfce402077dd77659669768759a6c6d4613a94e6abb8e68248f44a8da9
Level 1 Skill SHA-256: e56fd21ae6bb53dfdd2d5d0d239a0200d49d69c82bb171f3336b837a91124cd1
Level 1 Skill bytes: 34126
Level 1 test SHA-256: e08f981817e5c6b18f25e51900200e99723a60b90a423ee600c90684041ad19d
```

No historical MI-001 result was repaired, relabeled, reconstructed, recovered,
superseded, or re-graded.

## Evidence and exact manifests

Deterministic Nestfolio evidence is under `continuity/evidence/mi-002/**`.
It includes repository bindings, exact composition and preservation identities,
all success and mandatory-failure dispositions, all test attempts, the C1-C7
matrix, the unconditional verdict, final test summaries, and the exact
Nestfolio changed-file manifest.

continuity-lab closure paths are recorded in
`sessions/MI-002-reusable-pack-composition/changed-files.txt`. Nestfolio paths
are recorded in
`continuity/evidence/mi-002/commands/04-final-changed-files.json`. Both are
inside the contract maximum; there are no other changed paths.

## Next iteration

Exactly one next iteration is selected: **MI-003 — Bounded Local Work and
Scope**, status `selected-contract-required`.

Selection is not authorization. MI-003 was not authored, authorized, or begun.
Publication of the two MI-002 working trees requires a later separate explicit
instruction. Until clean pushed reviewed revisions exist and Program State is
reverified, MI-003 and all broader work remain blocked.
