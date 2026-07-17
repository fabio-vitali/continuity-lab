---
artifact_id: IMPL-MI-005
status: complete
result: unconditional-pass
owner: program
last_updated: 2026-07-17
---

# MI-005 — Resumable Run Cutover

**Unconditional decision: PASS.** Executed 2026-07-17 under DR-0024 directly by
Claude Code (orchestrating session model claude-opus-4-8), with the two genuine
validation Sessions launched by the human program owner (fabio.vitali) in
Nestfolio on model claude-sonnet-5.

## Criterion results

```text
C1 PASS — session gates, engine/store binding, Level 4/3/2 digest verification, and route check passed fail-closed before mutation
C2 PASS — exact Run creation binding, frozen rehearsed write-set, complete pre-mutation preservation ledger
C3 PASS — real two-Session start/resume with machine-captured provenance and ordering, verified Checkpoints, published Handoff, keyed-effect deduplication
C4 PASS — every mandatory failure F1-F12 blocked with the exact typed diagnostic
C5 PASS — current journal, backlog source, Levels 1-4, VS-001/VS-001A records, and every byte outside the permitted sets remain exact
C6 PASS — authority, route, cutover/drain, lease, store ownership, and absent Level 6 guarantees observable, truthful, unambiguous
C7 PASS — deterministic index rebuild, audit prefix preservation, operational rollback proof, cleanup absence proofs, exact uncommitted final manifest
```

## Execution facts

- start bindings: continuity-workspace `384d4b7d2deb0bd78cc74557340ab07f46790f4a`, continuity-lab `f469d8c8c8b77bc5d94fddb33072b4e13c41b7da`, Nestfolio `363283bcc97b1e04710db0e7f759ffffddb18b69` (all clean on main before mutation);
- engine lock: 20 `runtime/continuity/**` files plus `.claude/settings.json` verified byte-identical to the bound revision; aggregate engine digest `7e31ff56a10ca6b1715b29f02132e66c80e321921b41dcb55329db2e0f320a38`; hook registration digest `73387f347f43d0f6a154f83ed54c3bdaee0e0b6ba6dbf3120ebf5b8c28834378`;
- bound digests verified: Context Pack v1 `e58c9bc1978d6799cccda96c2520ea1f7f41ab8b88e8a055ff968cd7b8ce15c1`, Level 3 scope `db7a45278e8f4a270552e3ae1db3695b70e07d1624b27bcdc28f6417883a5ad6`, Level 2 aggregate `73bbb7c9199a79e00208115f1f7ba469be7e42e1bd20d1d72bfc726ac048df26`, effort source `b656733991c96c4275d11e9a9f2bff7f5ac72cdd298cbc68a4b94b6799dc742d`;
- route check: 30 current-journal run directories (89 files), no active current run for the bound effort, no existing target run; journal tree digest `57b5e86a8bad93ba4015b195b8610efce82f9554135d35e11dc67386ab4034a6`, byte-identical after execution;
- write-set rehearsal completed in an isolated copy outside all three repositories (hand-authored Run-prep artifacts, not `select`); frozen write-set satisfied `nestfolio_scope` exactly;
- Session 1 `session-mi005-1`: genuine Claude Code session `d8e31071-caf8-4622-9e8c-2a4cc88afccb`, `startup_source=startup`, digest-matched start view; keyed effect `mi005-material-effect` completed once at `continuity/dogfood/mi-005-effect.txt`; intermediate Checkpoint `run-mi005-cp-1` verified (19:56:56Z) and Handoff published; SessionEnd 19:58:28Z (after Checkpoint and Handoff);
- Session 2 `session-mi005-2`: distinct genuine Claude Code session `34ad63b5-ff75-4f9f-8c63-58fd90bb31ab`, `startup_source=startup`, no transcript resume; freshness validation passed and lease acquired; replay of `mi005-material-effect` returned `deduplicated:true` with exactly one completed effect record; final Checkpoint `run-mi005-final-2` verified (19:59:10Z); SessionEnd 20:06:48Z;
- closure: the Run is closed at the final verified Checkpoint; the single-writer lease was released and the final Handoff `run-mi005-session-mi005-2` published via `interrupt` as an orchestrator recovery step because Session 2 ended without a deliberate pause (`lease_policy`: released "by recovery after unexpected stop"); no `validate` or `complete` was ever invoked;
- mandatory failures: F1-F12 all blocked fail-closed with the exact typed diagnostic (F1 STALE_RUN and F4 LEASE_CONFLICT engine-native in isolated fixtures; F2/F3/F5-F9 MI-005 validation-layer diagnostics enforced over engine behavior; F10-F12 structural), fixtures removed with absence proof;
- suites after execution: Level 5 7/7, engine `node --test runtime/continuity/test/*.test.mjs` 9/9 exit 0, Level 2 23/23, Level 1 14/14, backlog-next 68/68 in the real working tree; Level 4 23/23 and Level 3 23/23 in an isolated committed validation copy (real `.git`, throwaway commit on top of `363283bc`, `--no-verify` to bypass repo hooks) per the SE-001-R3 corrected-validation-environment mechanics, since their S10 purity guard is unsatisfiable against the uncommitted delta;
- preservation: audit ledger append-only (pre-execution 14064 bytes are the exact prefix of the final file); derived index deleted and rebuilt deterministically (stable projection `a7439d7fbb867f7c6537f2e096a6da3c`, run reflected `interrupted`, zero canonical loss); operational rollback proven in an isolated fixture (pause captures Handoff, releases lease, no completed effect repeated, no unknown effect retried, zero journal writes, history readable);
- final manifest: exactly 47 uncommitted, unstaged paths (45 created, 2 modified), zero out-of-scope, manifest self-hash `3edd7a87a539184c89be3b1edf84be5559c551f93dde0f9b4d07a5fa0f4efd2a`;
- no commit, push, dependency operation, Skill, `/backlog-next`, `continuity:invoke`, Work completion, Evidence-bound completion, Assurance, Guard, Waiver, Decision, Learning, or Level 6 state occurred; the two permitted modify paths and every other pre-existing tracked byte satisfy their rules.

## Engine adaptations (disclosed, contract-consistent)

1. The pinned engine has no Level-5-only terminal "closed" state (only `completed`, which would ship the backlog and mark the Work completed — forbidden). The Run therefore closes at the final verified Checkpoint, with the lease released via the `interrupt` recovery mechanism the contract's `lease_policy` explicitly provides for an unexpected stop.
2. F1/F4 are engine-native diagnostics; F2/F3/F5-F9 are MI-005 validation-layer diagnostics enforced by the isolated fixtures and orchestrator over engine behavior (F3 maps the engine raw code `UNKNOWN_EFFECT_REQUIRES_RECONCILIATION`); F10-F12 are structural, consistent with the contract's own treatment.
3. `create_fixed_paths_on_pass` enumerates 20 explicit fixed paths; `scope_rule` prose says "twenty-one". The explicit enumeration (20) was followed and all 20 are present.

## Bindings and evidence

- Completed contract: `sessions/MI-005-resumable-run-cutover/context-pack.yaml`
- Execution prompt (consumed 2026-07-17): `sessions/MI-005-resumable-run-cutover/prompt.md`
- Execution-closure manifest: `sessions/MI-005-resumable-run-cutover/execution-changed-files.txt`
- Nestfolio Level 5 binding and evidence (uncommitted at Nestfolio `363283bcc97b1e04710db0e7f759ffffddb18b69`, publication separately authorized): `continuity/level-5/**`, `tests/continuity-level-5.test.mjs`, `continuity/evidence/mi-005/**`, and the frozen engine write-set for Run `run-mi005`.

The target operational store holds one closed target Run `run-mi005` with its immutable history; no active Run persists. Level 5 is a proven bounded guarantee for target-routed Runs; Level 6 remains absent. The current journal continues to drain its own Runs. MI-006 becomes the next contractable slice and remains unauthorized until separately contracted, reviewed, published, and explicitly executed.
