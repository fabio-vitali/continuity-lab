# MI-001D — Retained Level 1 Candidate Deliberate Supersession

Run **MI-001D — Retained Level 1 Candidate Deliberate Supersession** only when
the committed Context Pack status is `authorized-not-started` and every
authorization precondition below passes.

The authorized-not-started contract is not itself an execution instruction. A
review ZIP, review approval, commit, or push alone does not start execution. A
separate explicit user execution instruction and the exact clean committed and
pushed canonical authorization revision are required.

## 1. Authorization boundary

Read `docs/90-state/program-state.md` first. Then verify:

- continuity-lab is clean `main` and HEAD, local main, upstream, and
  `origin/main` all equal the exact reviewed, authorized, committed, and pushed
  MI-001D contract revision;
- Nestfolio is clean `main` at
  `63ad0b2da2dfb2192d24e73a9224b65654deadb7`, with upstream and `origin/main`
  identical, without fetching;
- MA-001 remains PASS and G5 valid;
- MI-001, MI-001A, MI-001B, and MI-001C remain complete with their four
  unconditional FAIL results unchanged;
- MI-001D is the sole `authorized-not-started` iteration and result is pending;
- original-output recovery/reconstruction, genuine invocation, `/backlog-next`,
  `continuity:invoke`, MI-002 through MI-007, and broader work remain blocked.

If any fact conflicts, stop before inspecting or modifying Nestfolio. Report
the contradiction and its owning canonical artifacts. This stop is not an
MI-001D result.

Do not fetch, pull, install dependencies, or use any network operation.

## 2. Canonical reading order

1. `docs/90-state/program-state.md`
2. `sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/context-pack.yaml`
3. `CONTINUITY-NEXT-STEPS.md`
4. `docs/00-governance/product-development-operating-model.md`
5. `docs/00-governance/artifact-governance.md`
6. `docs/00-governance/design-levels.md`
7. `docs/60-migration/migration-plan.md`
8. `decisions/DR-0023-cumulative-strangler-migration-by-guarantee-level.md`
9. `docs/70-implementation/mi-001-procedure-first-adoption.md`
10. `docs/70-implementation/mi-001a-genuine-claude-code-invocation-confirmation.md`
11. `docs/70-implementation/mi-001b-retained-level-1-candidate-identity-restoration.md`
12. `docs/70-implementation/mi-001c-original-mi001-output-artifact-evidence-recovery.md`
13. the four MI-001 through MI-001C Context Packs and handoffs in order
14. `docs/90-state/artifact-index.md`
15. `sessions/MI-001D-retained-level-1-candidate-deliberate-supersession/session-handoff.md`, as a non-evidentiary placeholder only

Use continuity-lab as the only product and program authority. Do not use prior
chat, remembered lost output, or the review ZIP as product evidence.

## 3. Reproduce and preserve the retained defect

Before mutation, independently capture the complete retained identity:

```text
Pack: nestfolio.level-1@1.0.0
Procedure: nestfolio.backlog-next@1.0.0
asset count: 19
aggregate lock digest: 7a4061778f9e89e98cc5c4e3c73ca9990ca4a71838f0cd7af245ffd4d2430602
expected Skill: 9ff3b13cc3f422c6845c8e49a7662ea51f5f12713f4a610f967463973391fa90, 33928 bytes
delivered Skill: 0de07500cad6a05ee14842edc4375a508d55beb7b318b1a387c0e2b99ff42620, 33164 bytes
```

Prove that the aggregate lock is coherent, 18 of 19 assets verify, the delivered
Skill is the sole mismatch, and the 1.0.0 boundary fails closed. Capture exact
protected-path hashes and Git status.

Do not search for or reconstruct the lost bytes. Do not describe any new bytes
as recovered, restored, original, preserved, or byte-identical to the lost
MI-001 output.

## 4. Author exactly one new candidate identity

Deliberately supersede, do not repair, `1.0.0`:

```text
Pack: nestfolio.level-1@1.0.1
Procedure: nestfolio.backlog-next@1.0.1
Claude Code entry point: /backlog-next
behavior authority: .claude/skills/backlog-next/**
asset count: exactly the final complete regular-file inventory, expected 19
lock algorithm: SHA-256
delivered activation: active Level 1
```

Start from the exact committed 33164-byte Skill. If the truthful Level 1 UX
requires a visible preflight block, author it anew from the canonical contract,
mark it as MI-001D `1.0.1` content, and preserve the remaining Skill behavior.
Never imitate or infer unavailable text.

Update only the paths allowed by the Context Pack and only when necessary.
Every identity-bearing surface must agree on `1.0.1`. Compute a fresh exact lock
from the final behavior-authority files; never reuse the old aggregate digest as
the new identity.

The historical `1.0.0` candidate remains invalid. Capture its identity in the
MI-001D supersession record and rely on Git history for its bytes. Do not rewrite
history or relabel it as valid.

## 5. Validate without invoking the Skill

Run only the bounded diagnostic paths:

```text
continuity:doctor
continuity:inspect
continuity:verify
```

Do not run Claude Code, `/backlog-next`, `continuity:invoke`, or any Skill. Unit
tests and diagnostic commands are not genuine invocation evidence.

Independently recompute and compare every final asset path, SHA-256, byte size,
asset count, and aggregate lock digest. Require one unambiguous Pack, Procedure,
binding, activation, and executor-asset authority. Require the visible Level 1
guarantee card and explicit Level 2-6 absence.

Run the Level 1 and existing backlog-next test suites without installing
dependencies. Compare the existing suite against a pre-change baseline; the
post-change result must not worsen. Environment-only failures may be accepted
only when their exact tests, causes, and counts are unchanged.

Exercise every mandatory failure from the Context Pack in an isolated temporary
copy outside Nestfolio. Prove disable, re-enable, forbidden claims, and exact
rollback only in that copy. Delete the copy after evidence capture. Never
disable or invoke the real Nestfolio candidate during MI-001D.

## 6. Failure containment

After valid execution begins, every required check is conjunctive. Any missing,
failed, ambiguous, contradictory, skipped, or out-of-scope condition is
**MI-001D UNCONDITIONAL FAIL**.

If failure occurs after Nestfolio mutation, restore every tracked and untracked
path to the exact clean start state before writing closure documents. Do not use
destructive Git history commands. Record the failure and restoration evidence.

On success, leave only the permitted active `1.0.1` candidate and deterministic
MI-001D evidence uncommitted in Nestfolio. Do not commit or push.

## 7. Truthful guarantee boundary

MI-001D may prove only a new deterministic Level 1 candidate identity. It does
not prove genuine Claude Code invocation or repair any prior FAIL. It creates no
Work, Context, Run, Assurance, completion, Decision, learning, Level 2, Console,
integration, hosted, or commercial guarantee.

Do not authorize MI-002.

## 8. Single result and closure

Issue exactly one result after valid execution starts:

- `MI-001D UNCONDITIONAL PASS`; or
- `MI-001D UNCONDITIONAL FAIL`.

No partial, provisional, or qualified PASS is allowed. Preserve the original
Context Pack terms and append the result only after the verdict. Replace the
handoff placeholder, create the canonical MI-001D report, and update only the
permitted continuity-lab closure files.

Generate the complete continuity-lab ZIP under
`continuity-workspace/output/MI-001D`. Generate a Nestfolio ZIP only on PASS.
Do not commit or push either repository.

On PASS, select only **MI-001E — Superseding Candidate Genuine Claude Code
Invocation Confirmation**, status `selected-contract-required`. On FAIL, select
only **MI-001D-R1 — Retained Level 1 Candidate Deliberate Supersession
Correction**, status `selected-contract-required`. Do not author, authorize, or
execute the selected iteration.
