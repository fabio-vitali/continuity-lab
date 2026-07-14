# Continuity — After Authoring the MI-001B Contract

## Current state

- MI-001A is complete with **UNCONDITIONAL FAIL**.
- The retained candidate mismatch is limited to `.claude/skills/backlog-next/SKILL.md`: expected SHA-256 `9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90`, 33928 bytes; committed file SHA-256 `0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620`, 33164 bytes.
- The unchanged Pack lock is coherent; 18 of 19 assets verified; the Level 1 boundary correctly fails closed with `ASSET_DIGEST_MISMATCH`.
- `/backlog-next` was not invoked and Scenario B was not executed.
- The MI-001B contract is authored. MI-001B is the sole `authorized-not-started` execution iteration, result pending, not executed.
- MI-002 through MI-007, genuine invocation confirmation, and all broader work remain blocked.

## 1. Review the MI-001B contract-authoring diff

From the updated continuity-lab working tree, run:

```bash
git status --short
git diff --check
git diff -- \
  README.md \
  CONTINUITY-NEXT-STEPS.md \
  docs/70-implementation/README.md \
  docs/90-state/program-state.md \
  docs/90-state/artifact-index.md \
  sessions/MI-001B-retained-level-1-candidate-identity-restoration/context-pack.yaml \
  sessions/MI-001B-retained-level-1-candidate-identity-restoration/prompt.md \
  sessions/MI-001B-retained-level-1-candidate-identity-restoration/session-handoff.md \
  sessions/MI-001B-retained-level-1-candidate-identity-restoration/changed-files.txt
```

Confirm that:

- the contract permits only byte-exact restoration of `.claude/skills/backlog-next/SKILL.md` from the proven preserved original MI-001 implementation artifact;
- the expected file identity is SHA-256 `9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90`, 33928 bytes;
- `continuity/level-1/pack-lock.json` and every other implementation/protected path are immutable;
- reconstruction from memory, inferred prose, a fabricated preflight, or a newly designed file is prohibited;
- missing or unprovable original-artifact provenance causes FAIL before Nestfolio modification;
- `/backlog-next`, `continuity:invoke`, genuine invocation confirmation, Level 1 disable/removal, and C1/C3 claims are prohibited;
- MI-002 through MI-007 and broader work remain blocked.

## 2. Commit and push continuity-lab

Commit only after review. Suggested commit message:

```text
Authorize MI-001B candidate identity restoration
```

Push the commit and record its full revision. MI-001B must execute from that exact clean committed revision, not from the generated ZIP or an uncommitted working tree.

## 3. Preserve the original MI-001 implementation artifact unchanged

Locate the original modified Nestfolio ZIP returned by the MI-001 execution. Do not edit, unpack-and-repack, normalize, rename as proof, or reconstruct it.

Record locally:

```bash
shasum -a 256 /exact/path/to/original-mi-001-output.zip
stat -f '%z bytes %Sm' /exact/path/to/original-mi-001-output.zip
unzip -z /exact/path/to/original-mi-001-output.zip
```

The artifact must have a provable chain to the original MI-001 output. The continuity-lab repository records no archive-level SHA-256 for that output, so a filename or a newly assembled equivalent is not sufficient. If the original artifact or its provenance is unavailable, do not attempt restoration; MI-001B must execute and close with FAIL without changing Nestfolio.

## 4. Prepare the clean Nestfolio starting revision

Use the repository containing MI-001A evidence at:

```text
63ad0b2da2dfb2192d24e73a9224b65654deadb7
```

Verify it is clean, that `b7d597ac5361d3c33b6f44a448373f3f9e79b8dc` is an ancestor, and that the later commit changes only `continuity/evidence/mi-001a/**`:

```bash
git status --short
git merge-base --is-ancestor b7d597ac5361d3c33b6f44a448373f3f9e79b8dc 63ad0b2da2dfb2192d24e73a9224b65654deadb7
git diff --name-status b7d597ac5361d3c33b6f44a448373f3f9e79b8dc..63ad0b2da2dfb2192d24e73a9224b65654deadb7
```

Do not modify Nestfolio before starting the separately reviewed MI-001B execution.

## 5. Execute MI-001B in a fresh isolated session

Provide the executor with:

- the clean committed continuity-lab revision containing the reviewed MI-001B contract;
- the clean Nestfolio repository at `63ad0b2d`;
- the unchanged preserved original MI-001 implementation artifact;
- the instruction in `sessions/MI-001B-retained-level-1-candidate-identity-restoration/prompt.md`.

The executor must verify provenance and the extracted file digest/size before touching Nestfolio. It may replace only `SKILL.md`, must run every contracted verification, and must not invoke the Skill.

## 6. After MI-001B closes

- On PASS, review and commit both closure repositories. A separate contract may then be authored for genuine invocation confirmation; it is not automatically authorized.
- On FAIL, follow only the single corrective or evidence-recovery iteration selected by the closure. Do not reconstruct the file inside MI-001B.

## Work that remains blocked

- `/backlog-next` and `continuity:invoke` during MI-001B;
- any genuine active-boundary or direct-current invocation confirmation before MI-001B closes;
- MI-002 through MI-007;
- reusable multi-Procedure Pack composition;
- canonical Work, Context, Session, Run, Assurance, learning, or completion machinery;
- broader implementation or migration;
- Console, universal integrations, hosted services, RBAC, analytics, billing, commercial packaging, and commercial control plane;
- broad or unrelated Nestfolio migration;
- promotion of project-specific behavior into Framework Core.
