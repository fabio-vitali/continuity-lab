# VS-001A — Interactive Claude Code Session Confirmation

Run only the corrective validation slice defined by `sessions/VS-001A-claude-code-session-confirmation/context-pack.yaml`.

Use `continuity-lab` as canonical design/program memory and Nestfolio at commit `34f7c86d0bea256f2fbe8c0c63ca2b04f924f62f` or an exact descendant as the implementation target.

First verify that the real Claude Code executable is available and record its exact version. If it is unavailable, end VS-001A with FAIL. Do not substitute a shell/Node harness for genuine Claude Code executor evidence.

Do not redo `run-vs001`. Create a distinct VS-001A Work Item, Working Set, Run, two Session identities, and effect key. Use the existing adapter, Packs, Skills, store, and tests without expanding architecture.

Prove in order:

1. genuine Claude Code Session 1 consumes its adapter-produced execution view;
2. it records one material keyed effect;
3. it persists a verified Checkpoint with exact continuation action;
4. Session 1 ends or is deliberately interrupted and publishes a Handoff;
5. a separately started fresh Claude Code Session 2, without the first transcript, discovers and resumes the Run through the adapter;
6. replaying the effect key is deduplicated;
7. criterion-linked Evidence records exact executor provenance.

At completion, update only the required VS-001A artifacts, set unconditional PASS or FAIL, record exact revisions and environment, and authorize exactly one next iteration. PX-001, migration, broader implementation, and unrelated Nestfolio work remain blocked.
