# MI-001B — Retained Level 1 Candidate Identity Restoration

Run **MI-001B — Retained Level 1 Candidate Identity Restoration** using the committed `continuity-lab` repository as the only canonical product and program memory, the exact committed Nestfolio candidate inspected by MI-001A as the bounded modification target, and the preserved original MI-001 implementation candidate artifact as the only admissible source of the intended `SKILL.md` bytes.

Do not rely on previous chats, transcripts, hidden executor state, memory, inferred prose, reconstructed patches, or uncommitted assumptions.

Do not redesign, reconstruct, or execute the Skill. Do not invoke `/backlog-next` or the Level 1 invoke path.

## 1. Authorization check

Read `docs/90-state/program-state.md` first. Stop without modifying either repository unless it records consistently that:

- MA-001 completed with unconditional PASS and G5 remains valid;
- MI-001 completed with unconditional FAIL;
- MI-001A completed with unconditional FAIL;
- MI-001A failed before genuine Skill invocation because the retained committed Nestfolio candidate did not match its locked identity;
- `.claude/skills/backlog-next/SKILL.md` was the sole locked-asset digest mismatch;
- the Level 1 boundary failed closed correctly with `ASSET_DIGEST_MISMATCH`;
- `/backlog-next` was not invoked;
- Scenario B was not executed;
- the MI-001B contract is present in the exact reviewed and committed continuity-lab revision;
- MI-001B is the sole authorized execution iteration with status `authorized-not-started`;
- MI-001B has not executed and its result is pending;
- MI-002 through MI-007 and all broader work remain blocked.

Apply the canonical contradiction rule if any condition is inconsistent: stop without modification, report the contradiction, and identify the owning artifacts.

Record the full clean continuity-lab revision before inspecting Nestfolio. The generated contract ZIP is not evidence that the user reviewed or committed it.

## 2. Read in this exact order

1. `sessions/MI-001B-retained-level-1-candidate-identity-restoration/context-pack.yaml`
2. `docs/00-governance/product-development-operating-model.md`
3. `docs/00-governance/artifact-governance.md`
4. `docs/00-governance/design-levels.md`
5. `docs/60-migration/migration-plan.md`
6. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
7. `docs/70-implementation/mi-001-procedure-first-adoption.md`
8. `sessions/MI-001-procedure-first-adoption/context-pack.yaml`
9. `sessions/MI-001-procedure-first-adoption/session-handoff.md`
10. `docs/70-implementation/mi-001a-genuine-claude-code-invocation-confirmation.md`
11. `sessions/MI-001A-genuine-claude-code-invocation-confirmation/context-pack.yaml`
12. `sessions/MI-001A-genuine-claude-code-invocation-confirmation/session-handoff.md`
13. `docs/90-state/program-state.md`
14. `docs/90-state/artifact-index.md`
15. DR-0012 through DR-0023 in numeric order where relevant to Procedure, Pack, Claude Code Adapter, guarantee-level, and migration authority
16. `sessions/MI-001B-retained-level-1-candidate-identity-restoration/session-handoff.md`, treating it only as an unused placeholder

Then inspect only the Nestfolio paths and preserved artifact contents required by the active contract.

## 3. Verify exact repository bindings

Bind continuity-lab to the clean reviewed execution commit derived from the MI-001A FAIL closure revision:

```text
MI-001A FAIL closure revision: 75520a5c1118ca70c687ce76382c4809f374c993
closure archive SHA-256: 55d240ad138b7646e230f52ce3e680a7133aed5563dbd39cd7b018a2cf5a9cb7
closure ZIP comment: 75520a5c1118ca70c687ce76382c4809f374c993
```

Bind the Nestfolio implementation baseline to:

```text
MI-001A Scenario A inspected revision: b7d597ac5361d3c33b6f44a448373f3f9e79b8dc
MI-001A evidence revision: 63ad0b2da2dfb2192d24e73a9224b65654deadb7
MI-001 recorded source revision: 3aa8f4773955541415f615abd80a0a9702bcb416
MI-001 input archive SHA-256: 0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be
```

Prefer the clean evidence revision `63ad0b2d` as the starting repository. Prove that `b7d597ac` is its ancestor and that the only later differences are under `continuity/evidence/mi-001a/**`. Any implementation or protected-path drift is unconditional FAIL before modification.

## 4. Prove the preserved original MI-001 artifact

Use only the original modified Nestfolio implementation-candidate artifact produced and returned by MI-001, or a byte-identical preserved copy with a provable chain to that original output.

Record its immutable archive SHA-256, byte size, path or storage reference, timestamps, and original delivery provenance. Prove that it derives from the canonical MI-001 source binding and contains the exact 15-entry MI-001 changed-file manifest, including the intended modified `.claude/skills/backlog-next/SKILL.md`.

The continuity-lab repository does not contain this output artifact and does not canonically record its archive-level SHA-256. Therefore a filename, recollection, reconstructed archive, newly assembled directory, inferred patch, later working tree, or arbitrary matching file is inadmissible.

If exact original-artifact provenance cannot be proven, stop without modifying Nestfolio and issue unconditional FAIL.

## 5. Extract and verify before installation

Extract only `.claude/skills/backlog-next/SKILL.md` to an isolated temporary location, preserving bytes exactly.

Before touching Nestfolio, verify:

```text
SHA-256: 9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90
byte size: 33928
```

Do not normalize line endings, re-encode, reformat, regenerate, edit, patch, or reconstruct the file. If either check fails, stop without modifying Nestfolio and issue unconditional FAIL.

## 6. Install only the missing file

Replace only:

```text
.claude/skills/backlog-next/SKILL.md
```

Do not modify `continuity/level-1/pack-lock.json`. Immediately verify the installed file has the exact expected SHA-256 and byte size.

The only permitted implementation change is `SKILL.md`. Narrow MI-001B evidence files and one changed-file manifest may be created exactly as listed in the Context Pack. No other Nestfolio path may change.

## 7. Required verification

Require all of the following to succeed:

1. clean committed starting revisions;
2. exact original artifact provenance;
3. byte-for-byte extraction of the intended `SKILL.md`;
4. expected SHA-256 and byte-size verification before installation;
5. replacement of only the missing file;
6. expected SHA-256 and byte-size verification after installation;
7. verification of all 19 locked assets against the unchanged lock;
8. independent aggregate lock-digest verification equal to `7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602`;
9. `npm run -s continuity:doctor`;
10. `npm run -s continuity:inspect`;
11. `npm run -s continuity:verify`;
12. `node --test tests/continuity-level-1.test.mjs`;
13. `node --test .claude/skills/backlog-next/test/*.test.mjs`;
14. protected-path comparison;
15. exact changed-file manifest.

Capture exact commands, UTC timestamps, exit statuses, stdout/stderr, relevant runtime versions, revisions, hashes, and manifests.

Any failed, skipped, environment-limited, or inconclusive verification is unconditional FAIL. Do not repair dependencies, package scripts, tests, implementation, or environment declarations inside MI-001B.

## 8. Prohibited actions

Do not:

- invoke `/backlog-next`;
- run `continuity:invoke`;
- run genuine invocation confirmation;
- disable, remove, or reactivate Level 1;
- claim C1 or C3;
- claim any Level 2-6 guarantee;
- modify the Pack lock, Pack manifest, Procedure contract, project binding, activation, `CLAUDE.md`, package scripts, adapters, application services, tests, backlog, checks, journal, runtime content, repository history, or any other Skill asset;
- fabricate or reconstruct the intended preflight.

## 9. Verdict and failure containment

Issue exactly one unconditional **PASS** or **FAIL**.

PASS only if the exact intended file is recovered from the proven preserved original MI-001 implementation artifact, installed as the sole implementation change, matches the existing locked identity before and after installation, and every required verification succeeds with no prohibited change.

Otherwise unconditional FAIL. No partial credit applies.

If failure occurs before installation, modify nothing in Nestfolio. If failure occurs after installation, restore the exact starting `SKILL.md` bytes (`0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620`, 33164 bytes), verify restoration, and report FAIL. Failure to restore is also unconditional FAIL.

## 10. Closure and next iteration

Append the result to the preserved Context Pack without rewriting its original authorization terms. Replace the unused handoff placeholder with a complete evidence-linked handoff. Create the canonical MI-001B report and update only the continuity-lab closure paths allowed by the Context Pack.

A PASS may select one subsequent separately contracted iteration for genuine active-boundary and direct-current Claude Code invocation confirmation. It must not automatically authorize or execute that confirmation. MI-002 through MI-007 and broader work remain blocked.

Return complete updated ZIPs for every modified repository, exact changed-file manifests, validation commands and results, the unconditional verdict, and exactly one selected next iteration or an explicit blocked state when no iteration is justified.
