---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-15
supersedes: []
superseded_by: null
---

# Program State

## Current phase

**MI-002 — Reusable Pack Composition is complete with UNCONDITIONAL PASS. The immutable `nestfolio.level-1@1.0.1` Pack and its exact 19-asset `nestfolio.backlog-next@1.0.1` Procedure compose with one new local read-only `continuity.repository-tools@1.0.0` Pack and `continuity.repository-status@1.0.0` Procedure under exact aggregate lock `73bbb7c9199a79e00208115f1f7ba469be7e42e1bd20d1d72bfc726ac048df26`. C1-C7, all ten success scenarios, all fifteen mandatory failures, atomic activation, neutral-fixture portability, and isolated byte-exact rollback/reapply pass. MI-003 is selected-contract-required only; it is not authorized or started.**

MA-001 remains complete with unconditional PASS; G5 remains passed and valid. The accepted migration architecture and DR-0023 remain canonical. TA-002, PX-001, and the combined VS-001/VS-001A G6 result remain valid.

MI-001 remains complete with unconditional FAIL; its C2, C4, C5, C6, and C7 results are preserved factually as MI-001 execution results.

MI-001A executed Scenario A from the committed contract revision with a genuine Claude Code executor and failed unconditionally before delegation: the committed Nestfolio revision does not contain the exact retained MI-001 candidate. The root cause is retained-candidate identity drift — the candidate application commit omitted the intended MI-001 modification to `.claude/skills/backlog-next/SKILL.md`, while `continuity/level-1/pack-lock.json` and the canonical MI-001 identity records expect the modified file. Scenario B was correctly not started; activation remains active and unchanged; MI-001A repaired nothing.

MI-001B executed from the reviewed contract revision and failed at the original-artifact provenance gate. The supplied archive SHA-256 was `0c3687022316de8841bf94996f39fa3198a5b94b4305266874ee55d7a54febcb`; its ZIP comment was continuity-lab revision `47f89495ced69f464724c52967d077679cdec78a`, and its 115 entries contained 0 of the 15 required MI-001 Nestfolio manifest entries and no `SKILL.md`. Nothing was extracted or installed, no Nestfolio evidence was created, and restoration was not applicable.

MI-002 is complete with unconditional PASS from continuity-lab execution binding `ef9b14cfbb352e1672a17d9b4d1c19dbb97d32d3` and Nestfolio execution binding `8f923240b6be1e0373b25b090f6be76139e4b256`. The active Level 2 lock contains exactly two Packs and two Procedures, no override, registry, or remote source. The new reusable Procedure is generic, local, read-only, and network-forbidden; no Nestfolio behavior was extracted or promoted. Exact Level 1 bytes and tests remain unchanged. MI-003 is selected-contract-required but remains unauthorized and unstarted; MI-004 through MI-007 and broader work remain blocked. Publication of both MI-002 working trees requires a separate explicit instruction.

## Gate history and current validity

| Gate | Current result | Owning evidence |
|---|---|---|
| G0 | passed; valid | governance artifacts and DR-0001 to DR-0003 |
| G1 | passed under PI-001-corrected interpretation; valid | Product Foundation and DR-0012 |
| G2 | passed; valid | Current Runtime Map and exact Nestfolio binding |
| G3 | passed; valid | TA-002 and DR-0013 to DR-0018 |
| G4 | passed; valid | PX-001 and DR-0019 to DR-0021 |
| G5 | passed; valid | Migration Plan, DR-0023, MA-001 handoff |
| G6 | passed; valid | combined VS-001 and VS-001A evidence |

The MI-001 and MI-001A FAIL results do not revoke G5 or G6. MI-001D deliberate supersession plus MI-001E and MI-001E-R1 genuine-invocation evidence now close the Level 1 obligation without repairing, relabeling, reconstructing, or recovering the historical 1.0.0 output.

## MI-002 result

**MI-002 — Reusable Pack Composition: UNCONDITIONAL PASS.**

```text
C1 PASS — exact two-Pack/two-Procedure deterministic resolution
C2 PASS — exact declarations, permissions, compatibility, file identities, and aggregate self-validation
C3 PASS — read-only generic repository status in Nestfolio and a neutral Git fixture
C4 PASS — all fifteen mandatory scenarios fail closed with typed diagnostics
C5 PASS — immutable 1.0.1 Pack, Procedure, 19 assets, tests, evidence, and direct path preserved
C6 PASS — authority, source, adapter, Git, route, and guarantees observable
C7 PASS — CAS activation, history, comparison, isolated rollback/reapply, and no Level 3-6 state
```

Execution facts:

- start bindings: continuity-workspace `eb990e114973e42af9935379f6b13f34f2e5e3b8`, continuity-lab `ef9b14cfbb352e1672a17d9b4d1c19dbb97d32d3`, Nestfolio `8f923240b6be1e0373b25b090f6be76139e4b256`;
- active composition: `nestfolio.level-1@1.0.1` plus `continuity.repository-tools@1.0.0`;
- Procedures: `nestfolio.backlog-next@1.0.1` plus `continuity.repository-status@1.0.0`;
- exact active aggregate: `73bbb7c9199a79e00208115f1f7ba469be7e42e1bd20d1d72bfc726ac048df26`;
- selected cardinality: two Packs, two Procedures, zero overrides, zero registries, zero remote sources;
- tests: MI-002 23/23, retained Level 1 14/14, backlog-next 68/68;
- required scenarios: ten of ten success; fifteen of fifteen mandatory failures fail closed;
- reusable execution: same schema in the bound repository and neutral Git fixture; zero repository writes and zero network requests;
- preserved baseline: 19/19 exact assets, Level 1 aggregate `376c1d5a…ffe4`, Skill `e56fd21…24cd1` and 34126 bytes;
- no dependency installation, `package-lock.json` change, selected backlog execution, Level 3-6 state, MI-001 recovery claim, commit, or push.

Canonical report: `docs/70-implementation/mi-002-reusable-pack-composition.md`.
Canonical Nestfolio evidence: `continuity/evidence/mi-002/**` in the uncommitted MI-002 working tree.

## Selected next iteration

**MI-003 — Bounded Local Work and Scope** is selected with status
`selected-contract-required`. Selection is not authorization. MI-003 has not
been authored, authorized, or started, and remains blocked until MI-002 is
reviewed, published through a separate explicit instruction, and rebound in a
fresh control session.

## MI-001 result

**Unconditional decision: FAIL.**

Criterion results:

```text
C1 FAIL — no genuine Claude Code invocation
C2 PASS — complete exact 19-asset lock and verification
C3 FAIL — disable/removal proven; no genuine direct Claude invocation
C4 PASS — no Level 2-6 state or claim
C5 PASS — current-content/check compatibility and baseline parity
C6 PASS — observable, unambiguous authority ownership
C7 PASS — rollback/removal preserves current bytes and history
```

Canonical report: `docs/70-implementation/mi-001-procedure-first-adoption.md`.

## MI-001A result

**MI-001A — Genuine Claude Code Invocation Confirmation: UNCONDITIONAL FAIL.**

Criterion results:

```text
C1 FAIL — genuine Level 1 invocation blocked before delegation by the candidate identity mismatch
C3 NOT EXECUTED — Scenario B correctly not started; FAIL under the conjunctive verdict rule
```

Execution facts:

- continuity-lab authorizing revision: `b8306295030fd8b4667e96dad4c3556316fa3c0b`;
- Nestfolio revision inspected by Scenario A: `b7d597ac5361d3c33b6f44a448373f3f9e79b8dc`;
- Nestfolio revision containing the committed Scenario A evidence: `63ad0b2da2dfb2192d24e73a9224b65654deadb7`;
- genuine executor: Claude Code 2.1.209, `/Users/fabiovitali/.local/bin/claude`, interactive repository session, model claude-fable-5, Scenario A Session ID `4f27b7f0-7b22-4d90-9d06-2b7fa4532451`;
- candidate identity verification: 26/26 identity field checks pass; 18/19 locked assets verify; one mismatch on `.claude/skills/backlog-next/SKILL.md` (expected SHA-256 `9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90`, 33928 bytes; delivered `0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620`, 33164 bytes); independent aggregate lock-digest recomputation matches `7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602` exactly;
- `continuity:doctor`, `continuity:inspect`, `continuity:verify`, and `continuity:invoke -- -- --auto` all exit 1 blocked with `ASSET_DIGEST_MISMATCH`; the Level 1 boundary failed closed before Skill execution; `/backlog-next` was not invoked;
- activation remained active and unchanged; no Level 2–6 guarantee or canonical repository-work completion was claimed; Nestfolio changes were limited to the eight Scenario A evidence files.

MI-001 C2, C4, C5, C6, and C7 remain preserved factually as MI-001 execution results; they do not qualify the MI-001A unconditional verdict.

Canonical report: `docs/70-implementation/mi-001a-genuine-claude-code-invocation-confirmation.md`.

## Retained implementation candidate 1.0.0 — historically invalid

The retained MI-001 candidate identity expected in Nestfolio is:

```text
Pack: nestfolio.level-1@1.0.0
Procedure: nestfolio.backlog-next@1.0.0
Claude Code entry point: /backlog-next
behavior authority: .claude/skills/backlog-next/**
asset count: 19
lock algorithm: SHA-256
aggregate lock digest: 7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602
delivered activation state: active
```

**The committed historical candidate is invalid.** Nestfolio commit `b7d597ac` applied only 14 of the 15 canonical MI-001 manifest entries: the intended modification to `.claude/skills/backlog-next/SKILL.md` was never committed. The delivered `SKILL.md` is byte-identical to the MI-001 recorded source revision `3aa8f4773955541415f615abd80a0a9702bcb416`; the Pack lock and all identity records are internally consistent and untampered and expect the modified file. At the pre-MI-001D start revision, every Level 1 entry path correctly failed closed with `ASSET_DIGEST_MISMATCH`. MI-001D later superseded, but did not repair or relabel, this identity.

The MI-001 recorded source revision remains `3aa8f4773955541415f615abd80a0a9702bcb416`, with input archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.

## MI-001B result

### MI-001B — Retained Level 1 Candidate Identity Restoration

Status:

```text
complete
unconditional FAIL
original MI-001 output-artifact provenance failed
stopped before extraction or installation
Nestfolio unchanged
```

Execution facts:

- continuity-lab execution revision: `47f89495ced69f464724c52967d077679cdec78a`;
- Nestfolio start/end revision: `63ad0b2da2dfb2192d24e73a9224b65654deadb7`, clean and unchanged;
- supplied archive: `/Users/fabiovitali/WebstormProjects/continuity-workspace/retained-artifacts/MI-001/continuity-lab-47f89495ced69f464724c52967d077679cdec78a.zip`;
- archive SHA-256: `0c3687022316de8841bf94996f39fa3198a5b94b4305266874ee55d7a54febcb`, 347866 bytes;
- ZIP comment: `47f89495ced69f464724c52967d077679cdec78a`;
- archive integrity: PASS; 115 entries;
- required MI-001 changed-file manifest: 0 of 15 entries present;
- `.claude/skills/backlog-next/SKILL.md`: absent;
- original MI-001 output provenance: FAIL;
- extraction, installation, downstream verification, invocation, and restoration: not executed; no prohibited action occurred.

Canonical report: `docs/70-implementation/mi-001b-retained-level-1-candidate-identity-restoration.md`.

## MI-001C result

### MI-001C — Original MI-001 Output Artifact Evidence Recovery

Status:

```text
complete
unconditional FAIL
no directly verified canonical input archive
no original output or proven preserved copy
no delivery chain
Nestfolio unchanged
```

Execution facts:

- continuity-lab execution revision: `dcd4289db3df1d30d4daaf7d7e0b8a19fd5cc0aa`;
- Nestfolio start/end revision: `63ad0b2da2dfb2192d24e73a9224b65654deadb7`, clean and unchanged;
- canonical source commit and tree exist, but input archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be` was absent;
- continuity-lab object scan: 239 blobs, zero archives;
- Nestfolio object scan: 16,700 blobs, one unrelated safe fixture ZIP (`b64e9419…f3e0`), classified non-candidate;
- restored `output/MI-001C` file: zero bytes, non-archive, post-start, classified non-candidate;
- admissible original outputs or preserved copies: zero;
- delivery chain: unavailable;
- exact 15-entry delta: not verifiable;
- streamed `SKILL.md` digest/size: not executed because no member was available;
- no extraction, installation, invocation, reconstruction, or Nestfolio modification occurred;
- evidence-source mutation and recorded inspection order/scope deviations independently required FAIL.

Canonical report: `docs/70-implementation/mi-001c-original-mi001-output-artifact-evidence-recovery.md`.

## MI-001D result

### MI-001D — Retained Level 1 Candidate Deliberate Supersession

Status:

```text
complete
unconditional PASS
new active 1.0.1 candidate
19 of 19 assets verified
no invocation
no recovery claim
```

Execution facts:

- continuity-lab authorization revision: `f58d482b73a545b34f5f0cd100a5204bb0419a8f`;
- Nestfolio start revision: `63ad0b2da2dfb2192d24e73a9224b65654deadb7`;
- Nestfolio post-review published revision: `c7f9ceaf79d1703769d8175774268924119042f6`;
- new Pack/Procedure: `nestfolio.level-1@1.0.1` / `nestfolio.backlog-next@1.0.1`;
- new Skill: SHA-256 `e56fd21ae6bb53dfdd2d5d0d239a0200d49d69c82bb171f3336b837a91124cd1`, 34126 bytes;
- 19 of 19 assets verify; aggregate lock digest `376c1d5aff39a1477af1b49362f681d246b721b30c1e73b4f6ede247b0c9ffe4`;
- diagnostics ready; Level 1 tests 14/14; backlog-next baseline/final 68/68;
- every mandatory failure, isolated disable/re-enable, and byte-exact rollback passed;
- activation ends active; Levels 2–6 remain absent;
- no Skill, Claude Code, `/backlog-next`, or `continuity:invoke` ran;
- no MI-001 recovery or reconstruction claim was made.

Canonical report: `docs/70-implementation/mi-001d-retained-level-1-candidate-deliberate-supersession.md`.

## MI-001E result

### MI-001E — Superseding Candidate Genuine Claude Code Invocation Confirmation

Status:

```text
complete
unconditional FAIL
two genuine Claude Code Sessions executed
exact active 1.0.1 restored
final Nestfolio changes limited to permitted deterministic evidence
```

Criterion results:

```text
C1 PASS — active boundary delegation and normal genuine Session A result
C2 PASS — all 19 assets and aggregate lock independently verified
C3 FAIL — genuine direct Session B invocation returned no normal result
C4 PASS — no Level 2–6 state, guarantee, or completion claim
C5 PASS — content, behavior, diagnostics, and test parity preserved
C6 PASS — authority and executor identity remain observable
C7 PASS — disable and restoration preserved exact bytes and Git history
```

The exact Session A process-start UTC was not machine-captured, independently
requiring FAIL. Scenario B stopped at the current Skill's clean-tree preflight
because exact disable state and permitted evidence made the worktree non-clean.
No selected backlog item or repository work was executed. Final activation is
byte-exact active 1.0.1, protected manifests match, Level 1 tests pass 14/14,
and backlog-next tests pass 68/68.

Canonical report:
`docs/70-implementation/mi-001e-superseding-candidate-genuine-claude-code-invocation-confirmation.md`.

## Recent completed correction

### MI-001E-R1 — Superseding Candidate Genuine Claude Code Invocation Confirmation Correction

Status:

```text
complete
unconditional PASS
two exact-timed fresh genuine Claude Code Sessions
normal active-boundary and direct-disabled Skill results
exact active 1.0.1 and Git-index metadata restored
```

Execution facts:

- continuity-lab authorization revision: `1113a670a638ac9e946eeb31fcc373bb8187bb8e`;
- Nestfolio execution revision: `c5a54d04fe1d88e36fd6e466b62ae1e4d468d87a`;
- genuine executor: authenticated Claude Code 2.1.210, resolved binary SHA-256 `1b471d62d1117482689d75447f5e050c640da717a5a3c91e6c13792450f8c662`, no drift;
- Session A: `98496f9a-8d01-44e4-a60f-00d8e8e6a471`, exact interval `2026-07-15T12:55:12.343Z` to `2026-07-15T12:56:18.748Z`, active boundary plus normal bounded result;
- Session B: `7581a042-6dcd-4430-8225-5aba036ee023`, exact interval `2026-07-15T12:59:01.103Z` to `2026-07-15T12:59:50.528Z`, normal direct result while disabled under the one-path containment;
- immutable candidate: 19/19 assets and aggregate digest `376c1d5aff39a1477af1b49362f681d246b721b30c1e73b4f6ede247b0c9ffe4` before and after;
- protection: 3417 tracked entries, byte-exact activation and index restoration, no special final index flags;
- diagnostics ready; Level 1 tests 14/14 and backlog-next tests 68/68 before and after;
- no selected backlog item, implementation, candidate, Skill, dependency, MI-001 output, commit, push, or Level 2–6 state changed.

Canonical report:
`docs/70-implementation/mi-001e-r1-superseding-candidate-genuine-claude-code-invocation-confirmation-correction.md`.

## Iteration queue

1. PF-001 — complete
2. RI-001 — complete; G2 valid
3. TA-001 — historical; superseded as active baseline
4. PI-001 — complete
5. TA-002 — complete; G3 passed
6. VS-001 — complete; historical FAIL preserved
7. VS-001A — complete; PASS; G6 valid
8. PX-001 — complete; PASS; G4 valid
9. MA-001 — complete; PASS; G5 valid
10. MI-001 — complete; unconditional FAIL; C2/C4/C5/C6/C7 preserved factually
11. MI-001A — complete; unconditional FAIL; retained-candidate identity drift identified
12. MI-001B — complete; unconditional FAIL; original-output provenance failed before extraction or installation; Nestfolio unchanged
13. MI-001C — complete; unconditional FAIL; no directly verified input archive, admissible output, or delivery chain; Nestfolio unchanged
14. MI-001D — complete; unconditional PASS; deliberate 1.0.1 supersession verified without invocation or recovery claim
15. MI-001E — complete; unconditional FAIL; Scenario B produced no normal result and exact Session A start UTC is absent; active 1.0.1 restored
16. MI-001E-R1 — complete; unconditional PASS; exact-timed active and direct-disabled genuine results; exact restoration
17. MI-002 — complete; unconditional PASS; exact reusable composition, activation, failure, and rollback evidence
18. MI-003 — selected-contract-required; not authored, authorized, or started
19. MI-004 through MI-007 — blocked
20. broader implementation and unrelated migration — blocked

## Active blockers

- The retained historical Nestfolio 1.0.0 candidate identity remains invalid; MI-001D did not relabel or repair it, and no recovery claim is permitted.
- MI-001B and MI-001C provenance failures remain immutable history; the Level 1 closure relies only on deliberate 1.0.1 supersession and genuine evidence.
- MI-001E remains historical UNCONDITIONAL FAIL; MI-001E-R1 corrects its two bounded evidence gaps without rewriting that result.
- MI-002 is complete with unconditional PASS, but both execution working trees remain uncommitted and unpushed pending a separate explicit publication instruction.
- MI-003 is selected-contract-required only; it remains unauthorized and unstarted. MI-004 through MI-007 remain blocked.
- Level 2 reusable composition is active in the uncommitted Nestfolio candidate. Work, Context, Run, Assurance, and Learning remain unauthorized and absent.
- Console, universal integrations, hosted services, RBAC, analytics, billing, commercial packaging, and commercial control plane remain blocked.
- Broad or unrelated Nestfolio migration remains blocked.
- Nestfolio-specific behavior may not move into Framework Core without repeated cross-project evidence and a new Decision.

## Evidence bindings

- Product truth: `docs/10-product/product-foundation.md`
- Current-system truth: `docs/20-current-system/current-runtime-map.md`
- Target architecture: `docs/30-target-architecture/target-architecture.md`
- Product Experience: `docs/40-product-experience/product-experience.md`
- Migration architecture: `docs/60-migration/migration-plan.md`
- MI-001 report: `docs/70-implementation/mi-001-procedure-first-adoption.md`
- MI-001 completed contract: `sessions/MI-001-procedure-first-adoption/context-pack.yaml`
- MI-001 handoff: `sessions/MI-001-procedure-first-adoption/session-handoff.md`
- MI-001A report: `docs/70-implementation/mi-001a-genuine-claude-code-invocation-confirmation.md`
- MI-001A completed contract: `sessions/MI-001A-genuine-claude-code-invocation-confirmation/context-pack.yaml`
- MI-001A preserved executable prompt: `sessions/MI-001A-genuine-claude-code-invocation-confirmation/prompt.md`
- MI-001A handoff: `sessions/MI-001A-genuine-claude-code-invocation-confirmation/session-handoff.md`
- MI-001B report: `docs/70-implementation/mi-001b-retained-level-1-candidate-identity-restoration.md`
- MI-001B completed contract: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/context-pack.yaml`
- MI-001B preserved executable prompt: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/prompt.md`
- MI-001B handoff: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/session-handoff.md`
- MI-001C report: `docs/70-implementation/mi-001c-original-mi001-output-artifact-evidence-recovery.md`
- MI-001C completed contract: `sessions/MI-001C-original-mi001-output-artifact-evidence-recovery/context-pack.yaml`
- MI-001C executable prompt: `sessions/MI-001C-original-mi001-output-artifact-evidence-recovery/prompt.md`
- MI-001C handoff: `sessions/MI-001C-original-mi001-output-artifact-evidence-recovery/session-handoff.md`
- MI-001D completed contract: `sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/context-pack.yaml`
- MI-001D preserved future executable prompt: `sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/prompt.md`
- MI-001D completed handoff: `sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/session-handoff.md`
- MI-001D report: `docs/70-implementation/mi-001d-retained-level-1-candidate-deliberate-supersession.md`
- MI-001D Nestfolio evidence: `continuity/evidence/mi-001d/**` at published Nestfolio revision `c7f9ceaf79d1703769d8175774268924119042f6`
- MI-001E completed contract: `sessions/MI-001E-superseding-candidate-genuine-claude-code-invocation-confirmation/context-pack.yaml`
- MI-001E preserved executable prompt: `sessions/MI-001E-superseding-candidate-genuine-claude-code-invocation-confirmation/prompt.md`
- MI-001E completed handoff: `sessions/MI-001E-superseding-candidate-genuine-claude-code-invocation-confirmation/session-handoff.md`
- MI-001E report: `docs/70-implementation/mi-001e-superseding-candidate-genuine-claude-code-invocation-confirmation.md`
- MI-001E Nestfolio evidence: `continuity/evidence/mi-001e/**` at published Nestfolio revision `c5a54d04fe1d88e36fd6e466b62ae1e4d468d87a`
- MI-001E-R1 completed contract: `sessions/MI-001E-R1-superseding-candidate-genuine-claude-code-invocation-confirmation-correction/context-pack.yaml`
- MI-001E-R1 preserved execution prompt: `sessions/MI-001E-R1-superseding-candidate-genuine-claude-code-invocation-confirmation-correction/prompt.md`
- MI-001E-R1 completed handoff: `sessions/MI-001E-R1-superseding-candidate-genuine-claude-code-invocation-confirmation-correction/session-handoff.md`
- MI-001E-R1 report: `docs/70-implementation/mi-001e-r1-superseding-candidate-genuine-claude-code-invocation-confirmation-correction.md`
- MI-001E-R1 Nestfolio evidence: `continuity/evidence/mi-001e-r1/**` at published revision `8f923240b6be1e0373b25b090f6be76139e4b256`, above exact execution binding `c5a54d04fe1d88e36fd6e466b62ae1e4d468d87a`
- MI-001E-R1 contract-authoring manifest: `sessions/MI-001E-R1-superseding-candidate-genuine-claude-code-invocation-confirmation-correction/changed-files.txt`
- MI-002 completed contract: `sessions/MI-002-reusable-pack-composition/context-pack.yaml`
- MI-002 preserved inactive execution prompt: `sessions/MI-002-reusable-pack-composition/prompt.md`
- MI-002 completion handoff: `sessions/MI-002-reusable-pack-composition/session-handoff.md`
- MI-002 continuity-lab closure manifest: `sessions/MI-002-reusable-pack-composition/changed-files.txt`
- MI-002 report: `docs/70-implementation/mi-002-reusable-pack-composition.md`
- MI-002 Nestfolio evidence: `continuity/evidence/mi-002/**` in the uncommitted execution working tree based on `8f923240b6be1e0373b25b090f6be76139e4b256`
- MI-001A Scenario A evidence: Nestfolio `continuity/evidence/mi-001a/scenario-a/**` at `63ad0b2da2dfb2192d24e73a9224b65654deadb7`
- Active program truth: this file
