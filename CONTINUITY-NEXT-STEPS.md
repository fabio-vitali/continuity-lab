# Current Execution Instructions

## 1. Review and commit VS-001

Replace the local repositories with the returned contents, then review both diffs.

Nestfolio expected implementation result:

```text
67e21251ee4e64ff8051c4b239a8466dac296dd2
```

Confirm that:

- `runtime/continuity/` contains only the bounded VS-001 path;
- `.claude/skills/continuity-*` and `continuity/packs/**` are explicit and digest-locked;
- `continuity/artifacts/**` and `.continuity/**` contain the dogfood Run evidence;
- `continuity/evidence/vs001/test-results.txt` reports 6 passed and 0 failed;
- `continuity/evidence/vs001/environment.json` states that Claude Code was unavailable;
- no unrelated Nestfolio source was modified.

Then commit/push the returned `continuity-lab` changes after reviewing `git diff`.

## 2. Do not reinterpret the result

VS-001 is **FAIL**, not partial PASS.

The implementation is retained, but criteria 4, 7, and 8 are unproven because no actual Claude Code process participated. Do not discard the implementation and do not mark G6 passed.

## 3. Run only VS-001A

Start a fresh conversation and upload:

1. the latest committed `continuity-lab` ZIP;
2. Nestfolio at `67e21251ee4e64ff8051c4b239a8466dac296dd2` or a descendant containing it exactly.

Use unchanged:

```text
sessions/VS-001A-claude-code-session-confirmation/context-pack.yaml
sessions/VS-001A-claude-code-session-confirmation/prompt.md
sessions/VS-001-resumable-agent-work-session/session-handoff.md
```

Before any Run starts, verify and capture the real `claude` executable/version. If unavailable, VS-001A must fail without simulation.

## 4. Keep VS-001A bounded

VS-001A proves only:

```text
real Claude Code Session 1 consumes adapter view
→ keyed effect
→ verified Checkpoint/Handoff
→ Session 1 ends
→ separately started real Claude Code Session 2 resumes
→ effect deduplicates
→ executor-linked Evidence
```

Do not alter accepted architecture unless an actual blocker is discovered. Do not migrate more runtime capabilities.

## Still blocked

- PX-001;
- MA-001;
- broader implementation;
- later vertical slices;
- unrelated Nestfolio work;
- commercial/universal-control-plane design.

## Permanent rules

- Chat and hidden executor state are not canonical.
- Review every generated Git diff before committing.
- Keep Goal and Guard separate.
- Keep Nestfolio-specific behavior outside Framework Core.
- Require criterion-linked Evidence for completion.
- Never promote an Observation or Lesson automatically.
