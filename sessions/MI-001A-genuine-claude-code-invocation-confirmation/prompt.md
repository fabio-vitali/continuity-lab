# MI-001A — Genuine Claude Code Invocation Confirmation

Run **MI-001A — Genuine Claude Code Invocation Confirmation** using the committed `continuity-lab` repository as the only canonical product and program memory and the exact committed Nestfolio repository containing the retained MI-001 Level 1 implementation candidate as bounded executor evidence.

Do not rely on prior chats, transcripts, hidden executor state, or uncommitted assumptions. Do not redesign or reimplement MI-001.

## 1. Authorization check

Read `docs/90-state/program-state.md` first. Stop without modifying either repository unless it records consistently that:

- MA-001 completed with unconditional PASS and G5 remains passed and valid;
- `docs/60-migration/migration-plan.md` is accepted and canonical;
- DR-0023 is validated and active;
- MI-001 completed with unconditional FAIL and its implementation candidate is retained;
- MI-001 failed only because genuine Claude Code executor evidence required by C1 and C3 was unavailable;
- the MI-001A contract under `sessions/MI-001A-genuine-claude-code-invocation-confirmation/` is present in the exact reviewed and committed continuity-lab revision;
- MI-001A is the sole authorized execution iteration with status `authorized-not-started`;
- MI-001A has not executed and its result is pending;
- MI-002 through MI-007 and all broader work remain blocked.

Apply the canonical contradiction rule if any condition is inconsistent: stop without modification, report the contradiction, and identify the owning artifacts.

Record the full clean continuity-lab revision before inspecting Nestfolio. The generated contract ZIP is not evidence that the user reviewed or committed it.

## 2. Read in this exact order

1. `sessions/MI-001A-genuine-claude-code-invocation-confirmation/context-pack.yaml`
2. `docs/00-governance/product-development-operating-model.md`
3. `docs/00-governance/artifact-governance.md`
4. `docs/00-governance/design-levels.md`
5. `docs/60-migration/migration-plan.md`
6. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
7. `docs/70-implementation/mi-001-procedure-first-adoption.md`
8. `sessions/MI-001-procedure-first-adoption/context-pack.yaml`
9. `sessions/MI-001-procedure-first-adoption/prompt.md`
10. `sessions/MI-001-procedure-first-adoption/session-handoff.md`
11. `docs/90-state/program-state.md`
12. `docs/90-state/artifact-index.md`
13. DR-0012 through DR-0023 in numeric order where relevant to Procedure, Pack, Claude Code Adapter, guarantee-level, and migration authority
14. `sessions/MI-001A-genuine-claude-code-invocation-confirmation/session-handoff.md`, treating it only as an unused placeholder

Then inspect only the Nestfolio paths required by the active contract. Do not broaden source inspection or modify implementation.

## 3. Verify exact repository and candidate identity

Record the exact committed Nestfolio revision, branch, remote, archive provenance, and clean worktree status.

Before any invocation, prove that the repository contains exactly the retained MI-001 candidate:

```text
Pack: nestfolio.level-1@1.0.0
Procedure: nestfolio.backlog-next@1.0.0
entry point: /backlog-next
behavior authority: .claude/skills/backlog-next/**
asset count: 19
lock algorithm: SHA-256
aggregate lock digest: 7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602
Level: 1
```

Inspect the Pack manifest, Procedure contract, project binding, Pack lock, activation metadata, and every locked Skill asset. Any mismatch is unconditional FAIL. Do not repair it in MI-001A.

## 4. Require a genuine Claude Code executor

Use a real installed and authenticated Claude Code executor. Record its exact version, executable/invocation channel, authentication readiness, Session-start commands, distinct Session identifiers or equivalent genuine-session provenance, UTC timestamps, exit status, stdout/stderr, and relevant visible Claude Code output.

If genuine Claude Code or admissible Session provenance is unavailable, issue unconditional FAIL. Unit tests, mocks, simulations, fabricated transcripts, shell/Node-only execution, or adapter-only tests do not count.

## 5. Execute only the two missing genuine scenarios

### Scenario A — active Level 1 boundary

1. Capture clean repository status and protected-path hashes.
2. Run the existing doctor, inspect, and verify paths.
3. Confirm repository identity, one Pack, one Procedure, the complete 19-asset lock, prerequisites, permissions, Level 1 guarantees, and explicit Level 2–6 absence.
4. Run the existing bounded invoke path and capture its structured delegation/provenance.
5. In the same genuine Claude Code Session, invoke `/backlog-next` with the bounded arguments selected by the retained implementation.
6. Capture the normal visible Skill result and structured evidence showing that `.claude/skills/backlog-next/**` remained behavior authority.
7. Record explicitly that no Level 2–6 guarantee and no canonical repository-work completion was claimed.

### Scenario B — direct current invocation after disable

1. Capture a second protected-path and worktree baseline.
2. Disable Level 1 using only the existing MI-001 activation mechanism, or remove only activation assets if the retained implementation explicitly supports that exact route.
3. Prove target invocation is disabled and direct `/backlog-next` is the current route.
4. Start a separately invoked fresh genuine Claude Code Session without relying on Scenario A's transcript.
5. Invoke the existing `/backlog-next` Skill directly with the same bounded arguments.
6. Capture its normal visible result and genuine Session provenance.
7. Prove that Skill, backlog, checks, journal, runtime content, Pack, Procedure, binding, lock, tests, and repository history remain preserved.
8. Restore the delivered active Level 1 state using the existing activation mechanism.
9. Rerun doctor, inspect, verify, tests, hashes, and exact changed-file comparison.

Record every exact command and relevant output. Known MI-001 commands are listed in the context pack, but they do not replace the genuine Claude Code invocations.

## 6. Modification boundary

Do not change implementation code, tests, Skills, Pack assets, Procedure semantics, project bindings, adapters, application services, backlog content, checks, journal content, runtime content, or repository history.

Nestfolio changes are limited to:

- temporary mutation and final restoration of `continuity/level-1/activation.json`;
- new genuine evidence records under `continuity/evidence/mi-001a/**`.

Continuity-lab closure changes are limited to the paths listed in the active context pack. Every other path is prohibited.

Any unpermitted change, candidate drift, regression, false guarantee, canonical work-completion claim, or failure to restore activation is unconditional FAIL. Do not fix defects inside MI-001A.

## 7. Verdict and closure

Issue exactly one unconditional **PASS** or **FAIL**.

PASS is permitted only if both missing MI-001 obligations are satisfied with genuine evidence:

- C1 genuine active Level 1 Claude Code invocation;
- C3 genuine direct current invocation after disable or permitted removal.

C2, C4, C5, C6, and C7 must remain valid without regression. Failure or inadmissible evidence for either genuine scenario produces unconditional FAIL.

Append the result to the preserved context pack without rewriting its authorization terms. Replace the unused handoff placeholder with a complete evidence-linked handoff. Create the canonical MI-001A report, update Program State, Artifact Index, and next-step instructions, and return complete updated ZIPs, exact manifests, commands/results, the unconditional verdict, and exactly one selected next iteration.

MI-002 through MI-007 and all broader work remain blocked during MI-001A. A PASS may only select MI-002 as `selected-contract-required` when justified; it does not pre-authorize execution. A FAIL must select a narrowly corrective MI-001 follow-up or architecture review.
