---
artifact_id: CURRENT-RUNTIME-MAP
status: validated
owner: current-system-analysis
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Current Runtime Map

## 1. Purpose and boundary

This artifact records what the supplied Nestfolio runtime snapshot currently contains and how its executable paths behave. It is current-system evidence only.

It does not:

- redesign the runtime;
- assign target bounded contexts;
- rename current concepts;
- preserve current feature completeness as a future requirement;
- infer future product scope from current implementation breadth.

Observations and interpretations are separated. Repository paths are relative to the supplied Nestfolio repository root.

## 2. Evidence basis and limitations

### 2.1 Supplied source snapshot and revision binding

The reviewed implementation is the uploaded Nestfolio archive named `nestfolio-3aa8f4773955541415f615abd80a0a9702bcb416.zip`.

- Archive SHA-256: `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`
- Extracted repository root used for inspection: `nestfolio/`
- Full revision embedded in the ZIP comment: `3aa8f4773955541415f615abd80a0a9702bcb416`
- Full revision declared by `sources/nestfolio-runtime.yaml`: `3aa8f4773955541415f615abd80a0a9702bcb416`
- The exact commit exists in the declared public repository and its tree is addressable at that SHA.
- The two files changed by that commit are present in the matching state in the archive: `docs/BACKLOG.md` promotes `runtime-self-hosting-debt` to active and `docs/backlog/runtime-self-hosting-debt.md` records `status: active`.

The archive contains no `.git` directory, so Git object commands cannot be run inside it. Revision identity is nevertheless demonstrably bound by the full embedded SHA, the matching source manifest, the existence of that exact repository commit, and commit-specific content consistency. This map is canonical evidence for both the declared revision and the archive bytes identified above.

### 2.2 Inspection performed

The inspection covered:

- archive-level revision metadata and commit-specific content consistency;
- every exact repository path cited as implementation or test evidence in this map, all of which exists in the supplied revision;
- runtime schemas, engine, loop, adapters, content, starter pack, evaluation scenarios, and tests;
- project bindings in `runtime/runtime.config.json`, `.github/workflows/runtime-audit.yml`, `scripts/verify-structure.sh`, `.claude/skills/backlog-next/**`, and selected repository tools dynamically imported by runtime adapters;
- backlog item files only where they supplied evidence about current bindings or previously recorded validation;
- static import-direction analysis across production runtime files;
- static enumeration of checks and tests.

### 2.3 Test execution status

Tests were inspected but not executed in this environment.

- Repository requirement: Node `>=24`, pnpm `>=10`, declared in `package.json`.
- Available environment: Node `22.16.0`; pnpm and installed dependencies were absent.
- The runtime contains 79 files matching `*.test.mjs`/`*.spec.*` and 421 statically discoverable top-level `test(...)` declarations.
- `runtime/GUIDE.md` states 422 cases. Without executing the declared test command, the one-case discrepancy remains unresolved.

Any status below means “implemented in source and covered as stated,” not “re-executed successfully during RI-001.”

### 2.4 Exact-revision re-check result

The previous inventory was re-checked rather than accepted by assumption. Its repository observations remain supported at revision `3aa8f4773955541415f615abd80a0a9702bcb416`, with these corrections and additions:

- `run-item.mjs` now accepts an item ID, reads the item from the backlog, and composes judged capabilities through `makeDriverCapabilities`; its earlier judge-binding gap is shipped.
- `run-themes.mjs` also composes judged capabilities and has a complete park/fulfil plus backlog-mutation path.
- runtime-path provenance through journal key `path:runtime` was present but omitted from the earlier map; it is now mapped as owned observability state.
- the per-area static test distribution was corrected to 186 declarations under `runtime/engine/test` and 78 under `runtime/adapters/claude-code/test`; the total remains 421.

No other previously mapped feature-family status or principal runtime observation required revision-specific correction.

## 3. Classification vocabulary

| Status | Meaning in this map |
|---|---|
| **implemented** | Executable production code and a reachable binding or entry point exist; repository tests cover the principal behavior. |
| **partially implemented** | A substantial executable path exists, but a required stage, binding, lifecycle closure, or advertised behavior is missing or conditional. |
| **documented but not implemented** | Documentation or command surface claims behavior that the executable path does not perform. |
| **test-only** | Executable helper or binding exists and has tests, but no production caller or operational entry point was found. |
| **absent** | No implementation or equivalent current-runtime construct was found after targeted search. |
| **unclear** | Evidence is contradictory, incomplete, or cannot establish reachability/authority. |

## 4. Repository and dependency map

### 4.1 Runtime rings as implemented

| Area | Current responsibility | Direct evidence |
|---|---|---|
| `runtime/engine/schema/` | Zod-backed contracts for checks, findings, items, and journal records. | `check.schema.ts`, `finding.schema.ts`, `item.schema.ts`, `journal.schema.ts` |
| `runtime/engine/capabilities/` | Type contract for six host capabilities: `execute`, `fanOut`, `ask`, `onTrigger`, `runProcedure`, and `journal`. | `runtime/engine/capabilities/index.ts` |
| `runtime/engine/lib/` | Registry loading, evaluator resolution, check execution, scope lookup, watch/gates, journal, runtime-path provenance, intake, planning, themes, lifecycle helpers, and operational projection. | production modules under `runtime/engine/lib/` |
| `runtime/engine/loop/` | Single-item worker, epic orchestrator, and SHA-conditional pre-ship batch. | `worker.mjs`, `orchestrator.mjs`, `pre-ship-batch.mjs` |
| `runtime/engine/backward/` | Candidate check minting, human-floor lifecycle changes, eval-scenario landing, lesson reconciliation, and guard curation. | `runtime/engine/backward/lib/**`, `schema/**` |
| `runtime/adapters/claude-code/` | Claude Code/headless host bindings and operational drivers. | `index.mjs`, `driver-capabilities.mjs`, `headless-run.mjs`, `run-*.mjs` |
| `runtime/adapters/git/` | Git-staged commit gate and branch-delta ship recheck. | `pre-commit-gate.mjs`, `ship-recheck.mjs` |
| `runtime/content/` | Nestfolio-specific checks, exclusions, lessons, trigger map, backlog/lane bindings, and project rules. | `checks/**`, `exclusions/**`, `lessons/**`, `lib/**`, `triggers.yaml` |
| `runtime/starter/` | Seed checks and evaluator modules copied by `runtime init`. | `runtime/starter/checks/**`, `evaluators/**` |
| `runtime/eval/` | Scenario grading and good/bad fixture evaluation. | `grade-check-scenario.mjs`, `scenarios/**`, `test/**`, `e2e/**` |

### 4.2 Observed dependency directions

Static production-import inspection found:

- no production file under `runtime/engine/**` importing `runtime/adapters/**` or `runtime/content/**`;
- engine production modules importing only engine modules, Node built-ins, or declared external libraries;
- adapters importing engine modules and, in selected drivers, content-ring modules;
- content modules serving project-specific evaluators, lane classification, epic membership, and item-store rules;
- tests crossing rings to assert wiring and content conformance.

The ring-1 boundary is explicitly tested by `runtime/engine/test/import-boundary.test.mjs`.

### 4.3 Self-containment contradiction

`runtime/README.md` and `runtime/GUIDE.md` state that rings 1 and 2 are self-contained and that nothing in `runtime/` imports repository tooling outside the subtree. However, `runtime/adapters/claude-code/deploy-gate-runner.mjs` dynamically imports:

- `.claude/skills/backlog-next/detect-deploy-needed.mjs`;
- `tools/affected-projects.mjs`.

When these imports fail, the adapter deliberately falls back to a bare deploy and skips affected integration-test resolution. The documented self-containment claim is therefore not true for this production adapter.

### 4.4 Project bindings

`runtime/runtime.config.json` explicitly binds:

- `checksDir` → `runtime/content/checks`;
- `exclusionsRoot` → `runtime/content/exclusions`;
- `triggersFile` → `runtime/content/triggers.yaml`;
- `lessonsDir` → `runtime/content/lessons`;
- `scenariosDir` → `runtime/eval/scenarios`.

Several drivers also use `cfg.backlogDir ?? 'docs/backlog'`. `backlogDir` is not present in the checked-in config, so `docs/backlog` is an implicit project binding in:

- `runtime/adapters/claude-code/run-next.mjs`;
- `runtime/adapters/claude-code/run-epic.mjs`;
- `runtime/adapters/claude-code/run-view.mjs`;
- related intake/theme paths.

Additional project coupling appears in:

- `runtime/content/lib/classify-lane.mjs`;
- `runtime/content/lib/epic-members.mjs`;
- `.claude/skills/backlog-next/**`;
- `scripts/verify-structure.sh`;
- the deploy runner's dynamic imports and infrastructure commands.

## 5. State and authority map

| State | Current owner/writer | Storage | Read paths | Authority behavior |
|---|---|---|---|---|
| Check definitions and lifecycle status | Backward-edge registration/curation and manual repository edits | `runtime/content/checks/*.yaml` | registry loader, watch, gate, audit, meta-check | YAML is executable check authority; loader preserves malformed entries as located errors. |
| Trigger cadence and cost ceiling | Repository content | `runtime/content/triggers.yaml` | pre-commit, audit, worker/orchestrator pre-ship paths | Trigger selection is data-driven, but actual scheduling/invocation is external. |
| Check exclusions | Repository content/tools | `runtime/content/exclusions/*.json` | check evaluator tools | Project-specific allowlists/exclusions are stored state. |
| Lessons and minted-check backlinks | `reconcileLesson` in the backward edge | `runtime/content/lessons/*.md` | backward lifecycle and content-ring tests | Lesson `mints:` lists are reconciled after ratify/retire/supersede. |
| Backlog items | Driver-side file writers and existing backlog skills | `docs/backlog/*.md` | planner, scope gate, intake, themes, view, epic selection | Markdown front matter is authoritative; engine item schema accepts project extensions. |
| Run progress and decisions | Journal API; one writer lease per run | `<git-common-dir>/journal/<runId>/meta.json`, `steps.ndjson`, `writer.json` | all pausable drivers and operator view | Keyed append-only records provide replay/idempotency; last valid record wins per key. |
| Runtime-path provenance | Workstream adapter drivers through `recordRuntimePath` | journal step key `path:runtime` in each owning run | journal inspection and path-provenance helpers/tests | Stores `{path: 'runtime', workstream, sha}` as observability; it does not select a runtime path or create separate authority. |
| Audit findings | `run-audit.mjs` | `runtime/.audit-findings/<runId>.json` | `run-view.mjs` | Artifacts are merged into the read-only operational surface. |
| Ship-gate and skip evidence | Git adapters | journal run IDs `backward` and `gate-skips` | `.claude/skills/backlog-next/postflight.mjs` and operator inspection | A gate-clean record and skip chronology are used as closing evidence. |
| Eval scenarios | Backward-edge scenario landing and repository content | `runtime/eval/scenarios/*.scenario.mjs` plus fixtures | scenario grader and tests | Scenario is landed before a check is ratified or a successor is persisted. |
| Operational projection | Derived by engine; not stored | computed from backlog, registry, journal, audit artifacts | `run-view.mjs` | Active/next/queue/pending/findings are read-time views. |

### 5.1 Journal behavior

`runtime/engine/lib/journal.mjs` implements:

- `begin`, `step`, `record`, `read`, `awaiting`, and `fulfil`;
- a persistent Git-common-dir backing and an in-memory backing;
- replay of completed keyed effects without re-running the function;
- parking of paused `TaskResult` decisions and resumption after fulfilment;
- invalid/torn NDJSON-line dropping and last-write-wins by key;
- atomic metadata replacement via temporary file and rename;
- a single-writer lease with same-host dead-process reclamation;
- lease-free reads;
- separate SHA freshness records for expensive pre-ship batches.

Principal tests: `runtime/engine/test/journal.test.mjs`, `journal-schema.test.mjs`, `pre-ship-batch.test.mjs`, and adapter fulfil tests under `runtime/adapters/claude-code/test/`.

## 6. Entry points

| Entry point | Current behavior | Exit/failure contract | Status |
|---|---|---|---|
| `node runtime/cli.mjs init` | Copies every starter YAML into the configured default content directory. | Prints seeded count; file errors propagate. | implemented |
| `node runtime/cli.mjs watch` | Dynamically imports `run-watch.mjs`; the imported module's main guard does not execute. | Returns without running a trigger. | documented but not implemented |
| `node runtime/cli.mjs next` | Dynamically imports `plan-next.mjs`; the imported module's main guard does not execute. | Returns without selecting/driving work. | documented but not implemented |
| `run-next.mjs <item-id>` | Loads one backlog item, applies optional journal fulfilment, classifies its lane, computes branch delta, and drives `runWorker`. | `0` done, `3` paused, `1` failed, `2` usage/unknown. | implemented |
| `run-item.mjs <item-id>` | Resolves a backlog item by ID, applies optional fulfilment, drives `runWorker` with judged driver capabilities, and records runtime-path provenance. | `0` done, `3` paused, `1` failed, `2` usage/unknown item. | implemented |
| `run-epic.mjs <epic-id>` | Enforces item type/single-active-epic, selects members, computes branch delta, and drives the orchestrator. | `0` done, `3` paused, `1` failed, `2` usage/precondition. | implemented |
| `run-intake.mjs --finding ...` | Routes one finding, parks for judgment when needed, then writes generated backlog Markdown. | Pausable via journal; materialization errors fail. | implemented |
| `run-themes.mjs` | Clusters parking items through a journaled judgment task, records runtime-path provenance, and applies theme mints/repoints after fulfilment. | `0` done, `3` paused, `1` failed, `2` usage. | implemented |
| `run-audit.mjs --on=<trigger>` | Loads trigger and registry, runs selected checks, writes an audit artifact. | `0` clean, `1` findings, `2` configuration/usage. | implemented |
| `run-view.mjs [view\|exec]` | Derives read-only operational state; optionally dispatches a whitelisted procedure or task. | `exec`: `0` done, `3` paused, `1` failed; malformed input `2`. | implemented |
| `run-backward.mjs mint\|curate\|consider` | Drives human-floor check minting/curation and ship-time mint consideration. | Pauses at unresolved floor decisions; validates inputs and lifecycle. | implemented |
| `pre-commit-gate.mjs` | Runs commit-trigger checks over staged files; records a requested skip. | `0` clean/recorded skip, `1` findings, `2` corruption/crash/failed skip record. | implemented |
| `ship-recheck.mjs --item <id>` | Re-runs commit-trigger checks over `base..HEAD` and journals gate-clean evidence. | `0` clean, `1` findings, `2` usage/corruption/crash. | implemented |
| `deploy-gate-runner.mjs` | Resolves affected deployment/services where external helpers exist, deploys sandbox, then runs affected integration tests. | Non-zero on deploy/resolution/integration failure. | partially implemented |
| `run-check.mjs` as a direct CLI | The library function exists, but direct invocation prints that it is a library/usage error rather than running the documented check command. | exits `2`. | documented but not implemented |
| `run-watch.mjs --on=<trigger>` | Loads the configured registry and trigger, runs the watch engine over supplied/default scope, and prints findings. Judgment checks have no judge binding in this direct CLI and therefore become visible evaluator-error findings. | `0` clean, `1` findings, `2` usage/configuration. | implemented |

## 7. Main workflow traces

### 7.1 Registry load and check execution

1. `loadRegistry({checksDir})` scans YAML files.
2. Each entry is parsed and validated; malformed files and duplicate IDs become located registry errors rather than immediate loader crashes.
3. Callers that enforce a boundary use `registryErrorLines(...)` and generally fail closed.
4. `findByScope` selects active checks whose declared path globs overlap requested scope and adds all active invariants.
5. `resolveEvaluator` dispatches one of `cmd:`, `module:`, `eslint:`, or `skill:`.
6. `runCheck` refuses undeclared contexts and tags returned findings.
7. Watch paths convert evaluator exceptions into visible `gap` findings; boundary gates do the same and return `passed:false`.

Evidence: `runtime/engine/lib/load-registry.mjs`, `find-by-scope.mjs`, `resolve-evaluator.mjs`, `run-check.mjs`, `run-watch.mjs`, `run-gate.mjs` and their corresponding files in `runtime/engine/test/`.

### 7.2 Commit enforcement

1. The installed repository verification script invokes `runtime/adapters/git/pre-commit-gate.mjs` before its services-only early exit.
2. The adapter reads staged `ACMR` paths.
3. It loads the `commit` trigger from `runtime/content/triggers.yaml`.
4. `runWatch` executes activated checks within the cheap ceiling plus invariants.
5. Findings block the commit and print a curation command.
6. `RUNTIME_GATE_SKIP` is accepted only after a skip record is appended to the journal; append failure blocks the commit.
7. Later `ship-recheck` re-evaluates the branch delta and records gate-clean evidence used by the backlog postflight.

Evidence: `scripts/verify-structure.sh`, `pre-commit-gate.mjs`, `ship-recheck.mjs`, `.claude/skills/backlog-next/postflight.mjs` and adapter tests.

### 7.3 Single-item workstream

1. `run-next.mjs` or `run-item.mjs` reads `docs/backlog`, resolves the item by ID, and applies a supplied fulfilment to the owning journal step.
2. `run-next.mjs` additionally classifies the item lane and maps the lane to a pre-ship trigger; both drivers compose capabilities through `makeDriverCapabilities`.
3. The adapter records `{path: 'runtime', workstream, sha}` under journal key `path:runtime` for run ID `item-<id>`.
4. `runWorker` begins the run and executes a start gate on every wake.
5. `execute:<id>` is a keyed journal step. With the default headless binding, unresolved work parks as a `Decision` rather than executing application changes itself.
6. After fulfilment, the completed step replays its recorded value.
7. For configured lanes, a SHA-conditional pre-ship batch runs over the branch delta.
8. A ship gate runs and is recorded as `gate.ship`.
9. A floor decision `ship-<id>` asks `ship` or `hold`. Only `ship` completes the journal step; `hold` remains paused and is asked again on the next wake.
10. The worker returns `done` after approval. It does not itself commit, merge, update backlog status, deploy, or publish.

Evidence: `runtime/adapters/claude-code/run-next.mjs`, `runtime/adapters/claude-code/run-item.mjs`, `runtime/adapters/claude-code/driver-capabilities.mjs`, `runtime/engine/loop/worker.mjs`, `runtime/engine/loop/pre-ship-batch.mjs`, `runtime/engine/lib/path-provenance.mjs`, `runtime/adapters/claude-code/execute.mjs`, and worker/driver tests.

### 7.4 Epic workstream

1. `run-epic.mjs` validates that the selected item is an epic and refuses a foreign active epic.
2. It records runtime-path provenance in run ID `epic-<id>` and obtains project-bound members through `selectEpicMembers`.
3. `runOrchestrator` filters to `epic_role: core` and executes them sequentially as keyed `member.<id>` steps.
4. Captured/non-core members are not driven by this loop.
5. One expensive `epic-pre-done` batch runs over the cumulative branch delta and is keyed by HEAD SHA.
6. A floor decision `merge-<epic>` asks for merge approval.
7. The orchestrator returns `done` after approval but does not create or merge a pull request.

The documentation assigns captured-member audit, leftovers handling, PR creation, merge, and closure rituals to host skill instructions outside the orchestrator.

Evidence: `runtime/adapters/claude-code/run-epic.mjs`, `runtime/engine/loop/orchestrator.mjs`, `runtime/content/lib/epic-members.mjs`, `.claude/skills/backlog-next-epic/SKILL.md`, and their tests.

### 7.5 Finding intake

1. A finding is validated and enriched with active-epic, theme, orphan, and closure-predicate context.
2. `run-intake.mjs` begins run ID `intake-<finding-id>` and records runtime-path provenance.
3. Deterministic routes can discard, split, fold, join a theme, mint an aggregation item, or create an orphan.
4. Judgment-required routing calls `execute` and can park in the journal.
5. Emitted items carry `provenance.from_finding` and are initially parked.
6. The adapter writes Markdown backlog files and optionally invokes the backlog lint/fix path.

Evidence: `runtime/engine/lib/intake.mjs`, `intake-context.mjs`, `runtime/adapters/claude-code/run-intake.mjs`, and intake tests.

### 7.6 Planning and operational view

1. `planNext` resumes an active executable item if present; otherwise it selects the lowest queued rank.
2. Epic identifiers redirect rather than being treated as normal executable items.
3. Impact fields are computed at read time from relationships, blast, freshness, and epic pull; only rank is stored.
4. `deriveSurface` projects active, next, queue, pending decisions, findings, and provenance from the real stores.
5. `run-view` adds audit artifacts and adapter-owned resume commands.
6. Resume hints are emitted only for `item-*`, `epic-*`, and `intake-*` runs; `themes` and `backward` pending decisions receive no hint, and every `item-*` hint points to `run-next.mjs` even when the origin was `run-item.mjs`.
7. The view does not accept fulfilment; resumption remains owned by the originating driver.

Evidence: `runtime/engine/lib/plan-next.mjs`, `operational-surface.mjs`, `runtime/adapters/claude-code/run-view.mjs`, and corresponding tests.

### 7.7 Theme clustering

1. `run-themes.mjs` begins run ID `themes`, records runtime-path provenance, and reads the current backlog.
2. The engine builds clustering input from parking items and invokes a judgment task.
3. The adapter wraps that task in a keyed journal step, returning exit `3` while the judgment is awaiting fulfilment.
4. After fulfilment, replay supplies the completed clustering result.
5. `applyThemeMutations` writes new theme-epic files and repoints absorbed item front matter, then records `themes:applied`.
6. `spinOutLeftovers` exists in `themes.mjs` but no production caller was found in this workflow.

Evidence: `runtime/engine/lib/themes.mjs`, `runtime/adapters/claude-code/run-themes.mjs`, `runtime/engine/lib/path-provenance.mjs`, and their tests.

### 7.8 Backward learning/check lifecycle

1. A lesson proposal is reduced to a candidate only when `mechanizable`, `recurring`, and `stillIntended` are all true.
2. Minting presents a full candidate at a hard human floor.
3. Ratification lands the eval scenario first, then advances candidate → active, persists YAML, and reconciles the lesson backlink inside a keyed journal step.
4. Curation presents an active guard for `keep`, `retire`, or `supersede`.
5. `keep` is a procedure-level no-op and is not a lifecycle transition.
6. Retirement and supersession require floor approval. Supersession validates and lands the successor before the old check becomes superseded.
7. Replays reuse journaled results instead of performing duplicate writes.
8. `consider` records whether a shipped item produced a minted check or an explicit “none” conclusion.

Evidence: `runtime/engine/lib/advance-lifecycle.mjs`, `runtime/engine/backward/lib/**`, `runtime/adapters/claude-code/run-backward.mjs`, and tests under `runtime/engine/backward/test/`.

### 7.9 Scheduled audit

1. GitHub Actions invokes `run-audit.mjs --on=schedule` each Monday at 06:00 UTC and on manual dispatch.
2. Node 24, pnpm dependencies, and the Claude Code CLI are installed in CI.
3. Judgment checks execute through read-only audit procedures backed by headless Claude Code.
4. Findings produce an artifact under `runtime/.audit-findings/`.
5. The workflow uses `continue-on-error: true`, so findings are surfaced as an artifact rather than failing the workflow job.

Evidence: `.github/workflows/runtime-audit.yml`, `runtime/adapters/claude-code/run-audit.mjs`, `audit-procedures.mjs`, `headless-run.mjs`, and adapter tests.

## 8. State transitions

### 8.1 Check lifecycle

Observed lifecycle states in `check.schema.ts`:

- `candidate`;
- `active`;
- `superseded`;
- `retired`.

Observed transitions in `advance-lifecycle.mjs` and backward procedures:

| From | Requested transition | Result with valid human floor |
|---|---|---|
| candidate | ratify | active |
| candidate | edit | revised candidate |
| candidate | decline | no registered check |
| active | retire | retired |
| active | supersede | old check superseded plus validated active successor |
| active | keep | no lifecycle transition; procedure returns current check unchanged |
| superseded/retired | further lifecycle change | terminal/refused |

Floor approval is checked before mutation. Invalid or floorless transitions return refusal events before durable journal steps.

### 8.2 Journal step lifecycle

Observed effective states:

- absent;
- awaiting a decision;
- fulfilled with a supplied choice/value;
- complete with recorded result.

A completed keyed effect is replayed. An awaiting task remains pausable until the owning driver receives `--fulfil`. Torn or malformed records are ignored on read.

### 8.3 Work item state

`item.schema.ts` validates a base item shape but allows project-specific extensions. The authoritative item lifecycle values and mutation rules are supplied by Nestfolio backlog content and skills rather than by one closed engine state machine. The engine primarily reads statuses for active/queued planning and writes newly routed items as parking.

## 9. Failure handling

| Failure | Current handling | Visibility/authority |
|---|---|---|
| Malformed/duplicate check YAML | Loader returns located errors. Enforcing adapters call `registryErrorLines` and block. | visible, fail-closed at gates |
| Evaluator throws in watch/gate | Converted to a `gap` finding. | visible; gate fails, watch reports |
| Judgment procedure missing/fails | `deriveJudge` throws when `TaskResult.status !== done`; caller converts to a gap finding. | visible, fail-closed at selected boundaries |
| Evaluator returns a non-array | `resolve-evaluator.mjs` normalizes it to no findings. | potentially silent; no separate malformed-result finding |
| Headless `ask` or `execute` cannot resolve | Returns a paused task/decision and journals `awaiting`. | visible and resumable |
| Journal torn/malformed line | Invalid line dropped; prior valid keyed state retained. | self-healing read, malformed line not surfaced as finding |
| Journal concurrent writer | `JournalWriterConflict`; dead same-host lease may be reclaimed. | hard error for active conflicting writer |
| Skip ledger append fails | Commit skip is not honored; exit `2`. | fail-closed |
| Branch-diff command in deploy runner fails | `realDiff` catches and returns an empty changed set, causing the deploy gate to report clean without stages. | silent clean for this failure path |
| External deploy resolver unavailable | Assumes deploy is needed, performs bare deploy, skips affected integration tests. | fallback is only visible through returned `ran` data/comments, not a finding |
| Affected-project resolver command fails | Gate fails at `integration-resolve`. | visible, fail-closed |
| Audit findings in CI | Audit command may exit `1`, but workflow continues and uploads artifact. | visible artifact, non-blocking CI job |
| Invalid/torn audit artifact | `run-view` skips it. | silent omission from view |
| Pending run lacks a mapped resume prefix | `run-view` provides hints only for `item-*`, `epic-*`, and `intake-*`; `themes`/`backward` have no hint, and generic `item-*` always maps to `run-next`. | pending decision remains visible, but the operator command is absent or potentially generic |
| Missing direct CLI implementation | `runtime cli watch/next` and direct `run-check` do not perform documented operation. | command may return/no-op or exit usage |

## 10. Check-library inventory

The supplied content ring contains 36 check YAML files:

- 35 active;
- 1 superseded (`audit-system`);
- 30 deterministic and 6 judgment evaluators;
- evaluator schemes: 15 `module`, 14 `cmd`, 6 `skill`, 1 `eslint`;
- cost tiers: 26 cheap, 3 moderate, 7 expensive.

Declared active-check concerns include:

- domain, service, system-architecture, E2E-design, and integration-completeness audits;
- deploy/integration gate;
- backlog front-matter, identity, ranking, references, index, single-active, epic, promotion, closure, and shipped-evidence rules;
- item-store, planning-view, module-boundary, registry, service-structure, service-card, and read-model rules;
- forbidden scan/seed/fallback/catch/cast/pipeline/AppSync-literal patterns;
- fixture and subject typing.

`runtime/content/triggers.yaml` declares:

- commit: invariant + gate, cheap;
- merge: invariant + gate, cheap;
- schedule: audit, expensive;
- epic-pre-done: audit + gate, expensive;
- manual: invariant + gate + audit, expensive.

No production binding invoking the `merge` trigger was found.

## 11. Feature-family classification

| Feature family | Status | Observed implementation evidence | Principal test evidence |
|---|---|---|---|
| Check schema and registry | implemented | `runtime/engine/schema/check.schema.ts`; `runtime/engine/lib/load-registry.mjs` | `runtime/engine/test/check-schema.test.mjs`; `runtime/engine/test/load-registry.test.mjs` |
| Finding schema and attribution | implemented | `runtime/engine/schema/finding.schema.ts`; `runtime/engine/lib/run-check.mjs`; watch/gate completion | `runtime/engine/test/finding-schema.test.mjs`; `runtime/engine/test/run-check.test.mjs` |
| Evaluator dispatch (`cmd`, `module`, `eslint`, `skill`) | implemented | `runtime/engine/lib/resolve-evaluator.mjs`; `runtime/engine/lib/derive-judge.mjs` | `runtime/engine/test/resolve-evaluator.test.mjs`; `runtime/engine/test/derive-judge.test.mjs` |
| Scope selection and global invariants | implemented | `runtime/engine/lib/find-by-scope.mjs`; `runtime/engine/lib/glob-overlap.mjs` | `runtime/engine/test/find-by-scope.test.mjs`; `runtime/engine/test/glob-overlap.test.mjs` |
| Registry self-check and rot detection | implemented | `runtime/engine/lib/meta-check.mjs`; `runtime/content/checks/registry-integrity.yaml` | `runtime/engine/test/meta-check.test.mjs`; `runtime/engine/test/content-ring.test.mjs` |
| Trigger/cadence selection engine | partially implemented | `runtime/engine/lib/run-watch.mjs`; `runtime/content/triggers.yaml`; Git/CI callers | `runtime/engine/test/run-watch.test.mjs`; adapter tests; merge caller absent |
| Commit gate | implemented | `runtime/adapters/git/pre-commit-gate.mjs`; `scripts/verify-structure.sh` | `runtime/adapters/git/test/pre-commit-gate.test.mjs` |
| Ship branch-delta recheck | implemented | `runtime/adapters/git/ship-recheck.mjs`; `.claude/skills/backlog-next/postflight.mjs` | `runtime/adapters/git/test/ship-recheck.test.mjs`; `.claude/skills/backlog-next/test/backward-evidence.test.mjs` |
| Boundary start/ship gate | implemented | `runtime/engine/lib/run-gate.mjs`; `runtime/engine/loop/worker.mjs` | `runtime/engine/test/run-gate.test.mjs`; `runtime/engine/test/worker-pre-ship.test.mjs` |
| SHA-conditional expensive batch | implemented | `runtime/engine/loop/pre-ship-batch.mjs`; `runtime/engine/lib/journal.mjs` | `runtime/engine/test/pre-ship-batch.test.mjs`; `runtime/engine/test/worker-pre-ship.test.mjs`; `runtime/engine/loop/test/orchestrator.test.mjs` |
| Deploy and affected integration gate | partially implemented | `runtime/adapters/claude-code/deploy-gate-runner.mjs`; `runtime/content/checks/deploy-gate.yaml`; external dynamic imports and fallback skip | `runtime/adapters/claude-code/test/deploy-gate-runner.test.mjs`; `runtime/content/test/deploy-gate-check.test.mjs` |
| Actual E2E test execution in deploy/pre-done runner | documented but not implemented | `runtime/content/checks/deploy-gate.yaml` and skill prose require involved E2E tests; `runtime/adapters/claude-code/deploy-gate-runner.mjs` invokes deploy and integration only | no production E2E invocation test found in these runners |
| Git-native journal, replay, park, fulfil | implemented | `runtime/engine/lib/journal.mjs`; `runtime/adapters/claude-code/journal.mjs`; `runtime/adapters/claude-code/fulfil-key.mjs` | `runtime/engine/test/journal.test.mjs`; `runtime/engine/test/journal-schema.test.mjs`; adapter fulfil tests |
| Runtime-path provenance journaling | implemented | `runtime/engine/lib/path-provenance.mjs`; writers in `run-item`, `run-next`, `run-epic`, `run-intake`, and `run-themes` | `runtime/engine/test/path-provenance.test.mjs`; corresponding adapter driver tests |
| Single-item worker spine | partially implemented | `runtime/engine/loop/worker.mjs`; actual work/ship/backlog mutation remains host-owned | `runtime/engine/test/worker-pre-ship.test.mjs`; `runtime/adapters/claude-code/test/run-next.test.mjs` |
| Generic `run-item` driver | implemented | `runtime/adapters/claude-code/run-item.mjs` resolves backlog items by ID, uses judged `makeDriverCapabilities`, supports fulfilment, drives the worker, and records runtime-path provenance | `runtime/adapters/claude-code/test/run-item.test.mjs`; `runtime/adapters/claude-code/test/driver-capabilities.test.mjs`; shipped evidence in `docs/backlog/from-run-item-judge-binding-gap.md` |
| Epic core-member orchestrator | partially implemented | `runtime/engine/loop/orchestrator.mjs`; `runtime/adapters/claude-code/run-epic.mjs`; no PR/merge/captured-member closure | `runtime/engine/loop/test/orchestrator.test.mjs`; `runtime/adapters/claude-code/test/run-epic.test.mjs` |
| Parallel `fanOut` capability | test-only | `runtime/engine/capabilities/index.ts`; `runtime/adapters/claude-code/fan-out.mjs`; no production caller found | `runtime/adapters/claude-code/test/adapter.test.mjs`; `runtime/engine/test/capabilities-contract.test.mjs` |
| In-process `onTrigger` capability | test-only | `runtime/engine/capabilities/index.ts`; `runtime/adapters/claude-code/on-trigger.mjs`; real cadence enters through Git/CI | `runtime/adapters/claude-code/test/adapter.test.mjs`; `runtime/engine/test/capabilities-contract.test.mjs` |
| Finding-to-backlog intake | implemented | `runtime/engine/lib/intake.mjs`; `runtime/engine/lib/intake-context.mjs`; `runtime/adapters/claude-code/run-intake.mjs` | `runtime/engine/test/intake.test.mjs`; `runtime/engine/test/intake-context.test.mjs`; `runtime/adapters/claude-code/test/run-intake.test.mjs` |
| Backlog next planner and computed impact | implemented | `runtime/engine/lib/plan-next.mjs` | `runtime/engine/test/plan-next.test.mjs` |
| Operational read model and executor | implemented | `runtime/engine/lib/operational-surface.mjs`; `runtime/adapters/claude-code/run-view.mjs`; resume-hint coverage is limited to item/epic/intake prefixes | `runtime/engine/test/operational-surface.test.mjs`; `runtime/adapters/claude-code/test/run-view.test.mjs` |
| Theme clustering | implemented | `runtime/engine/lib/themes.mjs`; `runtime/adapters/claude-code/run-themes.mjs` | `runtime/engine/test/themes.test.mjs`; `runtime/adapters/claude-code/test/run-themes.test.mjs` |
| Captured-member leftovers spin-out | test-only | `runtime/engine/lib/themes.mjs#spinOutLeftovers`; no production caller found | `runtime/engine/test/themes.test.mjs` |
| Dossier related-workstream reconciliation | test-only | `runtime/engine/backward/lib/reconcile-dossiers.mjs`; no production caller found | `runtime/engine/backward/test/reconcile-dossiers.test.mjs` |
| Check minting and ratification | implemented | `runtime/engine/backward/lib/mint.mjs`; `runtime/engine/backward/lib/register-ratified.mjs`; `runtime/engine/backward/lib/land-eval-scenario.mjs`; `runtime/engine/backward/lib/reconcile-lesson.mjs` | tests under `runtime/engine/backward/test/`, including mint/register/dogfood cases |
| Check keep/retire/supersede curation | implemented | `runtime/engine/backward/lib/curate.mjs`; `runtime/engine/backward/lib/curate-guard.mjs`; `runtime/adapters/claude-code/run-backward.mjs` | curate/supersede/retire cases under `runtime/engine/backward/test/` |
| Ship-time mint consideration | implemented | `runtime/adapters/claude-code/run-backward.mjs consider`; `.claude/skills/backlog-next/postflight.mjs` | `runtime/adapters/claude-code/test/run-backward.test.mjs`; `.claude/skills/backlog-next/test/backward-evidence.test.mjs` |
| Judgment audit procedure binding | implemented | `runtime/adapters/claude-code/driver-capabilities.mjs`; every capability-building `run-*.mjs` main is constrained to use it; `audit-procedures.mjs`; `headless-run.mjs` | `runtime/adapters/claude-code/test/driver-capabilities.test.mjs` discovery-total conformance; audit/headless tests in the same test directory |
| Scheduled audit artifact production | implemented | `.github/workflows/runtime-audit.yml`; `runtime/adapters/claude-code/run-audit.mjs` | `runtime/adapters/claude-code/test/run-audit.test.mjs` |
| Merge-trigger enforcement | documented but not implemented | `runtime/content/triggers.yaml` declares `merge`; no Git/CI/runtime production invoker was found | no merge binding test found |
| Starter-pack initialization | implemented | `runtime/cli.mjs init`; seven YAML files in `runtime/starter/checks/` | `runtime/engine/test/starter-pack.test.mjs`; `runtime/engine/test/cli.test.mjs` |
| Advertised six-check starter pack | documented but not implemented | `runtime/README.md` states six; production directory and tests define seven, including `runtime/starter/checks/deploy-gate.yaml` | `runtime/engine/test/starter-pack.test.mjs`; `runtime/engine/test/cli.test.mjs` |
| Public CLI `watch` and `next` delegation | documented but not implemented | `runtime/cli.mjs` only imports modules; imported main guards do not execute | `runtime/engine/test/cli.test.mjs` tests `init`, not operational watch/next behavior |
| Direct single-check CLI | documented but not implemented | `runtime/engine/lib/run-check.mjs` exits `2` and directs callers to the watch engine | `runtime/engine/test/run-check.test.mjs` covers the library function |
| Direct watch CLI | implemented | `runtime/engine/lib/run-watch.mjs --on=<trigger>` loads configured content and executes selected checks; judgment checks lack the driver judge and surface evaluator-error findings | `runtime/engine/test/run-watch.test.mjs` |
| Evaluation scenario grader | implemented | `runtime/eval/grade-check-scenario.mjs`; `runtime/eval/scenarios/**` | `runtime/eval/test/grade-check-scenario.test.mjs`; `runtime/eval/test/grade-check-scenario.real.test.mjs`; `runtime/eval/e2e/greenfield.test.mjs` |
| Context Pack as a runtime artifact | absent | no runtime schema, store, producer, or validator found | none found |
| Executor-neutral Handoff as a runtime artifact | absent | no runtime schema, store, producer, or validator found | none found |
| Evidence Reference abstraction | partially implemented | findings, journal records, backlog validation gates, SHA records, and provenance fields carry evidence-like data without a shared reference schema | distributed tests; no common abstraction test |
| Decision as a durable first-class artifact | partially implemented | capability decisions persist inside journal awaiting/choice records; no independent decision store/artifact exists | journal, ask, worker, and backward tests |
| Run as operational state | implemented | journal run IDs/meta/steps and operational projection | `runtime/engine/test/journal.test.mjs`; `runtime/engine/test/operational-surface.test.mjs` |
| Goal as runtime-owned state | absent | no goal object or lifecycle found; goals remain external/backlog prose | none found |
| Guard as current behavior | implemented | active checks gate changes and have a floor-governed lifecycle | check, gate, and backward tests |
| Commitment shared entity/schema | absent | no common runtime entity found | none found |
| Observation public object | absent | findings exist, but no separate observation object/lifecycle was found | none found |
| Lesson dossier and check backlink | implemented | `runtime/content/lessons/*.md`; `runtime/engine/backward/lib/reconcile-lesson.mjs` | backward content-ring and reconcile-lesson tests |
| Generic event object/store | absent | lifecycle event strings exist; no event entity/store was found | lifecycle tests only |
| Generic context-formation subsystem | absent | narrow prompt/context assembly exists for intake/tasks, but no general Context Pack formation/validation path exists | `runtime/engine/test/intake-context.test.mjs` only |
| Exact Git revision binding for this inventory | implemented | source manifest full SHA, matching ZIP-comment SHA, archive SHA-256, exact public commit/tree, and commit-specific file-state cross-check | archive/repository provenance verification; not a runtime test |

## 12. Current invariants extracted from code and tests

The runtime currently enforces or tests the following structural invariants:

- ring-1 production code must not depend on adapters or project content;
- every check has a validated schema, declared contexts, lifecycle status, scope, cost, evaluator, and provenance;
- judgment checks require a flake contract and a resolvable judge procedure;
- invariants must be cheap by construction;
- global invariants are selected regardless of changed scope;
- a check cannot honestly run in an undeclared context;
- malformed registry state blocks enforcement entry points;
- gate evaluator failures become visible findings and fail the gate;
- a paused keyed effect is not complete and must be fulfilled before replay can advance;
- a completed keyed effect is not executed twice;
- only one active writer owns a persistent journal run;
- floor approval is required before raising or lowering a check guard;
- successor scenario and schema must be valid before supersession persists;
- derived operational views are not stored as independent authority;
- commit skip debt must be journaled and later adjudicated by ship recheck/postflight;
- active backlog partition and scope laws are enforced by project checks and scope-gate helpers;
- the epic engine drives only core members and runs one SHA-fresh expensive batch before merge approval;
- `fanOut` may return summaries only, never agent transcripts;
- capability-building `run-*.mjs` driver mains compose capabilities only through `makeDriverCapabilities`;
- item, next, epic, intake, and themes workstream drivers journal runtime-path provenance in their owning run.

## 13. Tests mapped to implementation areas

Static test inventory by area:

| Area | Test files | Top-level `test(...)` declarations | Main coverage observed |
|---|---:|---:|---|
| `runtime/engine/test` | 32 | 186 | schemas, registry, evaluator, scope, watch/gates, journal, path provenance, intake, planning, themes, surface, boundaries, starter/CLI wiring |
| `runtime/engine/backward/test` | 17 | 81 | candidate drafting, floors, mint/curate, scenario landing, lesson/dossier reconciliation, dogfood |
| `runtime/engine/loop` tests | 2 | 14 | worker/orchestrator pre-ship and pause/replay behavior |
| `runtime/adapters/claude-code/test` | 16 | 78 | capability bindings, drivers, fulfil keys, headless audit, deploy gate, operator view |
| `runtime/adapters/git/test` | 2 | 15 | commit gate and ship recheck |
| `runtime/content/test` | 7 | 42 | project rules, lane classification, epic membership, deploy-check content |
| `runtime/eval/test` | 2 | 4 | generic grader behavior and real scenarios |
| `runtime/eval/e2e` | 1 | 1 | greenfield starter/evaluation path |
| **Total** | **79** | **421** | static count; not executed in RI-001 |

## 14. Observations

1. The current runtime is a broad repository-native enforcement and work-orchestration system, not only a context/handoff implementation.
2. Its strongest coherent core is the check registry plus gate/watch/journal/backward-lifecycle loop.
3. The journal is the authority for pausable operational progress and human decisions within runtime-driven workstreams.
4. Backlog Markdown, check YAML, lesson Markdown, audit JSON, and Git journal files are separate stores with separate writers.
5. The worker and orchestrator coordinate gates and decisions but delegate actual implementation, shipping, merging, and several closure rituals to the host skill/session.
6. The advertised ring-2 self-containment is contradicted by the deploy adapter's imports outside `runtime/`.
7. Some implemented helpers are not connected to production flows, notably `fanOut`, `onTrigger`, dossier reconciliation, and leftovers spin-out.
8. Some documented command surfaces do not execute their advertised behavior.
9. The runtime has current project-specific bindings beyond `runtime.config.json` and the content ring.
10. The supplied archive is tied to exact revision `3aa8f4773955541415f615abd80a0a9702bcb416` through the matching manifest SHA, embedded ZIP-comment SHA, public commit identity, and commit-specific content.
11. The generic item and themes drivers now use the same judged capability composition as the other workstream drivers.
12. Runtime-path provenance is journaled as workstream/SHA observability and is not a separate runtime-selection authority.

## 15. Interpretations

The statements in this section are analytical interpretations of the observations above, not additional implementation facts and not target-design decisions.

1. The runtime currently behaves as a hybrid of policy/check registry, Git gate, resumable agent-work driver, backlog router/planner, and guard-learning loop.
2. “Harness-agnostic engine” is substantially supported at the engine import boundary, while “runtime self-contained” is only partially supported at adapter level.
3. The journal provides robust replay for runtime steps, but it does not make the whole engineering workflow atomic because repository edits, commits, deployment, pull requests, and backlog closure occur through external host procedures.
4. The current decision model is operational and journal-local rather than a portable executor-neutral decision artifact.
5. The narrow product concepts retained after PF-001—Context Pack and Handoff—are not implementations already present under different obvious names. Evidence/provenance and decisions exist as partial ingredients, not as the retained product wedge.
6. The broad feature inventory should not be read as an argument to preserve every feature in a target system; PF-001 explicitly rejected that constraint.

## 16. Unknowns and contradictions

### Provenance limitations (non-blocking)

- The supplied archive is not a Git checkout and contains no `.git` object database, so revision commands and object-level tree comparison cannot run inside the archive itself.
- Revision binding therefore relies on the archive's embedded full SHA, the source manifest, the exact public commit/tree, commit-specific file-state consistency, and the retained archive SHA-256.
- Later implementation changes do not alter this inventory's identity; a later inventory must declare and bind a new revision.

### Execution unknowns

- The declared Node 24/pnpm test suite was not executed during RI-001.
- The static test declaration count differs from `runtime/GUIDE.md` by one.
- Judgment behavior depends on an external Claude Code executable, credentials/model availability, and procedure output quality; those integrations were inspected but not exercised.
- The deploy adapter's fallback behavior depends on which non-runtime repository helpers are present at execution time.
- `run-view` does not provide resume hints for `themes` or `backward` runs and cannot distinguish generic `run-item` origins from `run-next` by the shared `item-*` run ID prefix.

### Documentation/code contradictions

- README/GUIDE: rings 1 and 2 are self-contained; deploy adapter imports outside runtime.
- README: starter pack contains six YAML checks; directory contains seven.
- README/GUIDE/CLI comments: `runtime watch` and `runtime next` delegate operationally; current dynamic imports do not invoke the target command logic.
- GUIDE quick reference: direct `run-check.mjs` command runs a check; current module is library-only when executed directly.
- Trigger map declares merge enforcement; no production merge invoker was found.
- Epic skill prose assigns batched E2E execution to epic pre-done; the runtime pre-done batch runs checks/audits and the deploy runner runs integration tests, but no direct E2E command was found in that path.

## 17. G2 assessment

**Gate G2 — Current-system evidence: PASS on 2026-07-13.**

The current runtime is factually mapped without target redesign. Major feature families have repository evidence or explicit absent/test-only/unknown status; responsibilities, entry points, workflows, dependencies, state ownership, transitions, invariants, failure paths, project bindings, and test references are documented. The exact-revision re-check corrected the changed driver behavior, added runtime-path provenance, and repaired the per-area static test counts.

The source evidence is demonstrably bound to Nestfolio revision `3aa8f4773955541415f615abd80a0a9702bcb416` through the matching source manifest, the full SHA embedded in the uploaded ZIP comment, archive SHA-256 `0ff27fc97261b3e782d39af2e563c0a785593f0ba4c3ac5474f20bef42ec13be`, the exact public repository commit/tree, and commit-specific content consistency.

The test suite was not executed because the available environment lacks the declared Node 24/pnpm 10 runtime and installed dependencies. That limitation is recorded and is not a G2 prerequisite under the RI-001 continuation instructions.

`current-runtime-map.md` is therefore **validated**, RI-001 is complete, and **TA-001 — Target Architecture** is authorized as the sole next iteration. No target-architecture work was performed here.
