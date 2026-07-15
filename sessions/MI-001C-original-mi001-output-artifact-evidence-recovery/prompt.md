# MI-001C — Original MI-001 Output Artifact Evidence Recovery

Run **MI-001C — Original MI-001 Output Artifact Evidence Recovery** using the committed `continuity-lab` repository as the only canonical product and program memory.

This is a fully automated, deterministic, read-only evidence-recovery operation. Do not rely on previous chats, transcripts, hidden executor state, memory, filenames alone, reconstructed provenance, or uncommitted assumptions. Do not ask the user to choose a candidate during execution.

Do not reconstruct, edit, normalize, extract to disk, install, or execute `SKILL.md`. Do not invoke Claude Code, `/backlog-next`, or `continuity:invoke`.

## 1. Authorization check

Read `docs/90-state/program-state.md` first. Before inspecting candidate ZIP contents, verify all of the following:

- continuity-workspace is `main` at `f011140c3f39ac2daa117c8c721b53c6c179871b`; record status and permit only the reviewed MI-001C contract ZIP under `output/MI-001C` in addition to the bounded evidence sources;
- continuity-lab is clean `main`, tracks `origin/main`, and `HEAD`, upstream, and `origin/main` are the same reviewed and pushed commit containing this exact contract;
- that commit descends directly from the MI-001B FAIL closure revision `538f57a6ad3fa2880acb704c865c99fd4ee04c92` through only the reviewed MI-001C contract-authoring change;
- Nestfolio is clean `main` at `63ad0b2da2dfb2192d24e73a9224b65654deadb7`;
- MA-001 remains PASS with G5 valid;
- MI-001, MI-001A, and MI-001B remain complete with unconditional FAIL;
- MI-001B stopped before extraction or installation and did not modify Nestfolio;
- MI-001C is the sole `authorized-not-started` iteration, has not executed, and has result `pending`;
- candidate reconstruction, candidate installation, genuine invocation confirmation, MI-002 through MI-007, and all broader work remain blocked.

If any authorization fact conflicts, stop without inspecting candidate ZIP contents or modifying any repository. Report the contradiction and its owning artifacts. This preauthorization stop is not an MI-001C result.

Record the full committed continuity-lab execution revision before candidate discovery. The generated contract ZIP is not proof of user review, commit, or push.

## 2. Read in this exact order

1. `sessions/MI-001C-original-mi001-output-artifact-evidence-recovery/context-pack.yaml`
2. `docs/90-state/program-state.md`
3. `CONTINUITY-NEXT-STEPS.md`
4. `docs/00-governance/product-development-operating-model.md`
5. `docs/00-governance/artifact-governance.md`
6. `docs/00-governance/design-levels.md`
7. `docs/60-migration/migration-plan.md`
8. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
9. `docs/70-implementation/mi-001-procedure-first-adoption.md`
10. `sessions/MI-001-procedure-first-adoption/context-pack.yaml`
11. `sessions/MI-001-procedure-first-adoption/session-handoff.md`
12. `docs/70-implementation/mi-001a-genuine-claude-code-invocation-confirmation.md`
13. `sessions/MI-001A-genuine-claude-code-invocation-confirmation/context-pack.yaml`
14. `sessions/MI-001A-genuine-claude-code-invocation-confirmation/session-handoff.md`
15. `docs/70-implementation/mi-001b-retained-level-1-candidate-identity-restoration.md`
16. `sessions/MI-001B-retained-level-1-candidate-identity-restoration/context-pack.yaml`
17. `sessions/MI-001B-retained-level-1-candidate-identity-restoration/session-handoff.md`
18. `docs/90-state/artifact-index.md`
19. `sessions/MI-001C-original-mi001-output-artifact-evidence-recovery/session-handoff.md`, treating it only as an unused, non-evidentiary placeholder

Apply the Context Pack exactly. Do not broaden its evidence scope.

## 3. Enforce the only permitted evidence scope

The filesystem search may inspect only these roots:

```text
/Users/fabiovitali/WebstormProjects/continuity-workspace/retained-artifacts/MI-001
/Users/fabiovitali/WebstormProjects/continuity-workspace/output
```

It may additionally inspect only relevant, read-only Git history, refs, reflogs, stashes, index entries, and reachable or unreachable object-database objects inside:

```text
/Users/fabiovitali/WebstormProjects/continuity-lab
/Users/fabiovitali/WebstormProjects/nestfolio
```

Use `GIT_OPTIONAL_LOCKS=0` for Git reads. Do not materialize an object into either worktree. Do not follow symlinks, aliases, Finder aliases, mount redirects, or archive paths outside the permitted roots. Do not inspect Downloads, any other home-directory location, browser data, cloud storage, email, chat, remote services, network resources, or unrelated projects. Do not fetch or refresh remotes.

Do not create temporary extraction files. Do not rename, copy, move, repair, recompress, edit, quarantine, delete, or replace any evidence file. Do not change Git worktrees, indexes, refs, reflogs, stashes, or object databases.

## 4. Verify the canonical MI-001 input binding first

Require exact agreement across canonical records:

```text
Nestfolio source revision: 3aa8f4773955541415f615abd80a0a9702bcb416
input archive SHA-256: 0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be
input ZIP comment: 3aa8f4773955541415f615abd80a0a9702bcb416
```

Prove the source commit and tree exist in the Nestfolio object database. Locate the preserved input archive only within the permitted evidence roots. Directly verify its SHA-256, ZIP comment, integrity, safe structure, and byte-for-byte correspondence to the source revision.

A canonical assertion without direct input-archive verification is insufficient. If the bound input archive cannot be directly verified, complete the bounded inventory as required for the candidate ledger, then converge on unconditional FAIL without treating any candidate as admissible.

## 5. Discover and classify every candidate automatically

Enumerate the two filesystem roots in bytewise lexical order without following links. Then inspect relevant continuity-lab Git refs, reflogs, stashes, index entries, and objects; repeat for Nestfolio. Identify archives by content signature and format, not filename alone. Deduplicate by archive SHA-256 and evaluate in ascending SHA-256, then lexical evidence-location order.

For every candidate, capture:

- evidence location or Git object ID and discovery surface;
- format, SHA-256, byte size, timestamps, extended attributes, ZIP comment, and available delivery metadata;
- integrity and safe normalized structure;
- whether it is the original MI-001 output, a proven byte-identical preserved copy, recreated or derived, ambiguous or unproven, or a non-candidate;
- delivery-chain evidence;
- canonical input binding, exact delta, and streamed `SKILL.md` disposition when safely available.

Do not stop after the first content match. Complete and classify the full bounded candidate inventory.

## 6. Require a provable delivery chain and distinguish recreation

The original output is the exact archive returned by the original MI-001 execution. A preserved copy is admissible only when its archive SHA-256 is byte-identical to the independently proven original output and a pre-existing copy or retention record proves the edge.

Build an ordered chain from the recorded MI-001 output event to the candidate's current bytes. Each node must record archive SHA-256, byte size, location or Git object identity, timestamps, and available metadata. Each edge must cite independent evidence that existed before MI-001C.

Expected content is not delivery provenance. Reject provenance based only on filename, current location, timestamp, recollection, a self-authored ZIP comment, matching manifest, matching `SKILL.md` hash, a newly generated record, or circular claims.

Classify every later Git archive, repository ZIP, recompression, reassembly, normalization, reconstruction, edited copy, or independently regenerated archive as recreated or derived even when its extracted files match expected bytes. The MI-001B continuity-lab source archive is not the original Nestfolio output. Multiple candidates are admissible only if they have one archive SHA-256 and converge on the same proven original-output chain; conflicting chains or hashes require FAIL.

## 7. Verify the exact output content without extraction

Reject archives with absolute paths, parent traversal, duplicate normalized paths, case collisions, unsafe links, encrypted members, malformed members, or failed integrity.

Compare the candidate output byte-for-byte with the directly verified input archive. Normalize only one common wrapper directory when present. The computed delta must be exactly:

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

No deletion, rename, type change, extra file, or metadata exception is permitted. Do not infer this delta from the later candidate Git commit.

Stream `.claude/skills/backlog-next/SKILL.md` directly from the candidate archive to the hash and byte-count commands. Do not extract it, install it, print its contents, or write it anywhere. Require exactly:

```text
SHA-256: 9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90
byte size: 33928
```

## 8. Issue exactly one unconditional result

After valid authorization starts MI-001C, every outcome must converge on exactly one overall result: **MI-001C UNCONDITIONAL PASS** or **MI-001C UNCONDITIONAL FAIL**. Candidate classifications and individual checks are evidence dispositions, not additional verdicts. Do not issue partial, provisional, qualified, or per-candidate overall results.

PASS requires every conjunctive condition in the Context Pack: direct input binding, one fully proven delivery chain, original or proven byte-identical archive identity, safe and intact archive, exact 15-entry delta, required streamed Skill hash and size, complete candidate classification, and proof of zero evidence or repository mutation.

Anything missing, ambiguous, contradictory, recreated-only, unsafe, incomplete, manually selected, or inconclusive is unconditional FAIL. No partial credit applies.

## 9. Preserve all blocks and select one next iteration

Do not reconstruct, supersede, repair, install, invoke, or modify Nestfolio in MI-001C.

- On PASS, select only **MI-001B-R1 — Proven Original Artifact Candidate Identity Restoration**, status `selected-contract-required`.
- On FAIL because the original artifact was not recovered with the full required proof, select only **MI-001D — Retained Level 1 Candidate Deliberate Supersession**, status `selected-contract-required`.

Do not author, authorize, or execute the selected iteration. Keep genuine invocation confirmation, `/backlog-next`, `continuity:invoke`, MI-002 through MI-007, and broader work blocked.

## 10. Closure

Only after issuing the one unconditional result, append an execution closure to the preserved Context Pack without rewriting its authorization terms. Replace the unused handoff placeholder, create the canonical MI-001C report, and update only the continuity-lab closure paths permitted by the Context Pack. Do not commit or push without separate user authorization.

Generate one complete updated continuity-lab ZIP under `continuity-workspace/output/MI-001C` after the result. Do not create a Nestfolio ZIP because Nestfolio must remain unchanged.

Return the authorization result, repository bindings, complete candidate ledger, delivery-chain result, input binding, exact 15-entry manifest verification, streamed Skill digest and byte count, validation commands/results, exact continuity-lab changed-file manifest, confirmation of no Nestfolio change, exactly one unconditional result, and exactly one selected contract-required next iteration.
