---
artifact_id: STATE-PROGRAM
status: ratified
owner: program
last_updated: 2026-07-14
supersedes: []
superseded_by: null
---

# Program State

## Current phase

**MI-001A — Genuine Claude Code Invocation Confirmation is complete with UNCONDITIONAL FAIL. The MI-001B — Retained Level 1 Candidate Identity Restoration contract is authored; MI-001B is the sole authorized execution iteration with status `authorized-not-started`, result pending, and has not executed.**

MA-001 remains complete with unconditional PASS; G5 remains passed and valid. The accepted migration architecture and DR-0023 remain canonical. TA-002, PX-001, and the combined VS-001/VS-001A G6 result remain valid.

MI-001 remains complete with unconditional FAIL; its C2, C4, C5, C6, and C7 results are preserved factually as MI-001 execution results.

MI-001A executed Scenario A from the committed contract revision with a genuine Claude Code executor and failed unconditionally before delegation: the committed Nestfolio revision does not contain the exact retained MI-001 candidate. The root cause is retained-candidate identity drift — the candidate application commit omitted the intended MI-001 modification to `.claude/skills/backlog-next/SKILL.md`, while `continuity/level-1/pack-lock.json` and the canonical MI-001 identity records expect the modified file. Scenario B was correctly not started; activation remains active and unchanged; MI-001A repaired nothing.

MI-002 through MI-007 and all broader work remain blocked. No genuine invocation confirmation is authorized until MI-001B closes. MI-001B execution is effective only from a clean user-reviewed commit containing the exact contract under `sessions/MI-001B-retained-level-1-candidate-identity-restoration/`.

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

The MI-001 and MI-001A FAIL results do not revoke G5 or G6. They block progression to MI-002 until the retained candidate identity is restored under MI-001B, or a later separately authorized supersession closes the candidate issue, and the Level 1 genuine-evidence obligation is closed.

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

## Retained implementation candidate — identity invalid

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

**The committed candidate is invalid.** Nestfolio commit `b7d597ac` applied only 14 of the 15 canonical MI-001 manifest entries: the intended modification to `.claude/skills/backlog-next/SKILL.md` was never committed. The delivered `SKILL.md` is byte-identical to the MI-001 recorded source revision `3aa8f4773955541415f615abd80a0a9702bcb416`; the Pack lock and all identity records are internally consistent and untampered and expect the modified file. Every Level 1 entry path correctly fails closed with `ASSET_DIGEST_MISMATCH` until MI-001B restores the candidate identity, or a later separately authorized iteration supersedes it.

The MI-001 recorded source revision remains `3aa8f4773955541415f615abd80a0a9702bcb416`, with input archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`.

## Sole authorized execution iteration

### MI-001B — Retained Level 1 Candidate Identity Restoration

Status:

```text
authorized-not-started
contract authored
result pending
not executed
sole authorized execution iteration
```

Bounded purpose:

> Restore the invalid retained candidate identity only by byte-exact recovery of the intended `.claude/skills/backlog-next/SKILL.md` from the proven preserved original MI-001 implementation artifact; do not reconstruct or redesign it.

Contract binding and constraints:

- Contract: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/context-pack.yaml` and preserved executable `prompt.md`.
- Contract-authoring baseline: continuity-lab `75520a5c1118ca70c687ce76382c4809f374c993` (archive SHA-256 `55d240ad138b7646e230f52ce3e680a7133aed5563dbd39cd7b018a2cf5a9cb7`).
- Execution is permitted only from a clean user-reviewed commit containing the exact MI-001B contract files.
- Nestfolio implementation baseline is the MI-001A Scenario A inspected revision `b7d597ac5361d3c33b6f44a448373f3f9e79b8dc`; the preferred clean start is evidence revision `63ad0b2da2dfb2192d24e73a9224b65654deadb7`, which must differ only under `continuity/evidence/mi-001a/**`.
- MI-001B may restore only `.claude/skills/backlog-next/SKILL.md` with SHA-256 `9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90` and 33928 bytes, extracted byte-for-byte from the proven preserved original MI-001 implementation artifact.
- The Pack lock must remain unchanged. Reconstruction from memory, inferred prose, fabricated content, a newly designed preflight, or an arbitrary matching file is prohibited.
- The canonical repository does not contain the original MI-001 output archive or its archive-level SHA-256. If original-artifact provenance cannot be proven at execution time, MI-001B must stop before Nestfolio modification and record unconditional FAIL.
- `/backlog-next`, `continuity:invoke`, genuine invocation confirmation, Level 1 disable/removal, and C1/C3 claims are prohibited.
- No genuine invocation confirmation iteration is authorized until MI-001B closes.

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
12. MI-001B — contract authored; authorized-not-started; result pending; not executed
13. MI-002 through MI-007 — blocked
14. broader implementation and unrelated migration — blocked

## Active blockers

- The committed Nestfolio candidate identity is invalid: the delivered `SKILL.md` does not match the Pack lock; every Level 1 entry path fails closed with `ASSET_DIGEST_MISMATCH`.
- MI-001B may execute only from a clean user-reviewed commit containing the exact authored contract; the generated ZIP alone is not review or commit evidence.
- MI-001B must not fabricate restoration: without proven original MI-001 output-artifact provenance and exact recoverable `SKILL.md` bytes it must stop before Nestfolio modification; candidate reconstruction requires separate authorization.
- No genuine invocation confirmation iteration, `/backlog-next` invocation, or `continuity:invoke` command may be attempted inside MI-001B or before it closes.
- MI-002 through MI-007 remain blocked until the Level 1 evidence obligation is closed and Program State explicitly selects one next iteration.
- No Level 2 reusable composition, Work, Context, Run, Assurance, or Learning machinery is authorized.
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
- MI-001B active contract: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/context-pack.yaml`
- MI-001B preserved executable prompt: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/prompt.md`
- MI-001B unused handoff placeholder: `sessions/MI-001B-retained-level-1-candidate-identity-restoration/session-handoff.md`
- MI-001A Scenario A evidence: Nestfolio `continuity/evidence/mi-001a/scenario-a/**` at `63ad0b2da2dfb2192d24e73a9224b65654deadb7`
- Active program truth: this file
