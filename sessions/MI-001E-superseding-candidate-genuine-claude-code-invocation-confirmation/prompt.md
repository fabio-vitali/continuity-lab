# MI-001E — Superseding Candidate Genuine Claude Code Invocation Confirmation

Run **MI-001E — Superseding Candidate Genuine Claude Code Invocation
Confirmation** only when the committed Context Pack status is
`authorized-not-started` and every authorization precondition below passes.

The authorized-not-started contract is not itself an execution instruction.
The review package, review, authorization, commit, or push alone does not start
execution. A separate explicit user execution instruction and the exact clean
committed and pushed canonical authorization revision are required.

## 1. Authorization and repository boundary

Before reading repository content, use Git metadata only to verify:

- continuity-lab is clean `main` and HEAD, local main, upstream,
  `origin/main`, and the remote main ref all equal the exact reviewed,
  authorized, committed, and pushed MI-001E contract revision;
- Nestfolio is clean `main` at the exact revision
  `c7f9ceaf79d1703769d8175774268924119042f6`, with HEAD, local main,
  upstream, `origin/main`, and the remote main ref identical.

After those metadata checks pass, read
`docs/90-state/program-state.md` as the first repository content. Then verify:

- MA-001 remains PASS and G5 valid;
- MI-001, MI-001A, MI-001B, and MI-001C retain their unconditional FAIL results;
- MI-001D remains complete with UNCONDITIONAL PASS for the active 1.0.1
  candidate and no invocation;
- MI-001E is the sole `authorized-not-started` iteration, has no prior
  execution, and its result is pending;
- MI-002 through MI-007 and broader work remain blocked.

If any fact conflicts, stop before inspecting or modifying Nestfolio content.
Report the contradiction and its owning canonical artifacts. This stop is not
an MI-001E result.

Read-only `git ls-remote origin refs/heads/main` is permitted only for pushed
revision verification. Do not fetch, pull, browse, install, or use other remote
services. During valid execution, only the minimum existing authenticated
Claude Code traffic required by the two contracted Sessions is permitted.

## 2. Canonical reading order

1. `docs/90-state/program-state.md`
2. `sessions/MI-001E-superseding-candidate-genuine-claude-code-invocation-confirmation/context-pack.yaml`
3. `CONTINUITY-NEXT-STEPS.md`
4. `docs/00-governance/product-development-operating-model.md`
5. `docs/00-governance/artifact-governance.md`
6. `docs/00-governance/design-levels.md`
7. `docs/60-migration/migration-plan.md`
8. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
9. `docs/70-implementation/mi-001-procedure-first-adoption.md`
10. `docs/70-implementation/mi-001a-genuine-claude-code-invocation-confirmation.md`
11. `docs/70-implementation/mi-001d-retained-level-1-candidate-deliberate-supersession.md`
12. the MI-001, MI-001A, and MI-001D Context Packs and handoffs in iteration order
13. `docs/90-state/artifact-index.md`
14. this directory's `session-handoff.md`, as a non-evidentiary placeholder only

Use continuity-lab as the only product and program authority. Inspect only the
Nestfolio paths required by the active Context Pack.

## 3. Verify the exact immutable candidate

Before starting Claude Code, independently prove:

```text
Pack: nestfolio.level-1@1.0.1
Procedure: nestfolio.backlog-next@1.0.1
entry point: /backlog-next
bounded arguments: --auto
behavior authority: .claude/skills/backlog-next/**
asset count: 19
lock algorithm: SHA-256
Skill: e56fd21ae6bb53dfdd2d5d0d239a0200d49d69c82bb171f3336b837a91124cd1
Skill bytes: 34126
aggregate lock digest: 376c1d5aff39a1477af1b49362f681d246b721b30c1e73b4f6ede247b0c9ffe4
activation: active
guarantee level: 1
```

Inspect the Pack manifest, Procedure contract, project binding, activation,
lock, every actual regular behavior-authority asset, and every lock entry.
Recompute every path, SHA-256, byte size, count, and aggregate digest. Require
no missing or unenumerated asset and one unambiguous 1.0.1 identity.

Capture protected-path hashes and clean status. Run doctor, inspect, verify,
Level 1 tests, and backlog-next tests without installing dependencies.
Before either genuine Session, create a byte-exact temporary recovery copy of
all protected paths and activation outside both repositories; capture its
manifest and digest.

Any mismatch or regression after valid execution start is **MI-001E
UNCONDITIONAL FAIL**. Do not repair or invoke the candidate.

## 4. Require two genuine Claude Code Sessions

Use a real installed and already authenticated Claude Code executor. Capture
its exact version, binary path, resolved identity, authentication readiness
without secrets, Session-start commands, working directories, distinct Session
identifiers, startup sources, model when observable, UTC timestamps, exits, and
bounded relevant visible output.

Use exactly two separately started Sessions. Session B must not resume Session
A or depend on its transcript, chat, hidden state, cache, or unexported output.

If genuine Claude Code, existing authentication, distinct Session provenance,
or safe bounded capture is unavailable, issue unconditional FAIL. Do not log in,
update the executor, fabricate evidence, or substitute a shell/Node harness,
unit test, adapter, mock, or simulation.

## 5. Execute only the two genuine scenarios

### Scenario A — active Level 1 boundary

1. Start genuine Claude Code Session A in the exact Nestfolio repository.
2. In that Session run
   `npm run -s continuity:invoke -- -- --auto`.
3. Require a ready structured delegation to exactly `/backlog-next --auto`.
4. In the same Session invoke exactly `/backlog-next --auto`.
5. Capture the normal visible bounded Skill result and genuine Session
   provenance.
6. Record that `.claude/skills/backlog-next/**` remained behavior authority,
   no Level 2–6 guarantee or completion was claimed, and no selected backlog
   task or repository work was executed.
7. End Session A before disable.

### Scenario B — direct current invocation after disable

1. Capture a second protected-path and clean-state baseline excluding already
   created MI-001E evidence.
2. Run only `npm run -s continuity:disable`.
3. Run the single disabled probe
   `npm run -s continuity:invoke -- -- --auto`; require
   `LEVEL1_DISABLED` before Skill execution and direct `/backlog-next`
   remediation.
4. Start separately invoked fresh genuine Claude Code Session B without the
   Scenario A transcript.
5. Invoke exactly `/backlog-next --auto` directly.
6. Capture the normal visible bounded result and distinct genuine Session
   provenance.
7. End Session B.
8. Run only `npm run -s continuity:activate`.
9. Rerun doctor, inspect, verify, both test suites, complete lock verification,
   protected hashes, activation comparison, and exact changed-file comparison.

No third Session, other Skill, other slash command, other target invocation, or
execution of the selected backlog task is permitted.

## 6. Modification and evidence boundary

Do not change implementation, Skills, instructions, Pack assets, Procedure
semantics, binding, lock, adapter, services, tests, packages, dependency locks,
backlog content, checks, journal, runtime, hooks, application source, MI-001A
evidence, MI-001D evidence, or Git history.

Nestfolio writes are limited to:

- temporary mutation and exact restoration of
  `continuity/level-1/activation.json`;
- new deterministic JSON evidence under `continuity/evidence/mi-001e/**`.

Evidence must exclude credentials, tokens, secrets, raw transcripts, hidden
prompts, unrelated repository content, and unsupported assertions. Bounded
visible results and Session identifiers are permitted only for the contracted
proof.

If any temporary or unexpected mutation occurs, issue unconditional FAIL and
restore only the exact affected paths from the external recovery copy. Verify
all digests, remove the temporary copy, and do not use Git checkout, restore,
reset, clean, stash, or history rewriting. Required restoration does not soften
the unconditional FAIL.

## 7. Truthful guarantee boundary

MI-001E may prove only genuine invocation of the already verified 1.0.1 Level 1
candidate. It does not repair any historical FAIL, recover MI-001 output,
create Work, Context, Run, Assurance, Decision, Learning, Level 2, Console,
integration, hosted, or commercial guarantees, or complete repository work.

Do not authorize MI-002.

## 8. Single result and closure

Issue exactly one result after valid execution starts:

- `MI-001E UNCONDITIONAL PASS`; or
- `MI-001E UNCONDITIONAL FAIL`.

PASS requires both genuine scenarios, exact candidate and lock preservation,
restored active 1.0.1, C1 through C7, permitted evidence-only final scope, and
no prohibited action. No partial, provisional, or qualified PASS is allowed.

Preserve the original Context Pack authorization terms and append the result.
Replace the handoff placeholder, create the canonical MI-001E report, and
update only the permitted continuity-lab closure files. Generate complete
continuity-lab and Nestfolio ZIPs under
`continuity-workspace/output/MI-001E`. Do not commit or push.

On PASS, select MI-002 only as `selected-contract-required` and only if no
Level 1 defect or authority contradiction remains. Selection is not
authorization: do not author, authorize, or execute MI-002. On FAIL, select
only MI-001E-R1 as `selected-contract-required`, unless execution never
started because of an authorization contradiction.
