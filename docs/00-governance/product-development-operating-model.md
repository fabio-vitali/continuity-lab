---
artifact_id: GOV-OPERATING-MODEL
status: ratified
owner: program
last_updated: 2026-07-12
---

# Product Development Operating Model

## Purpose

This document governs how Continuity is explored, falsified, decided, designed, implemented, and validated through isolated iterations, canonical artifacts, and intentionally formed contexts.

It does not contain product decisions.

## Governing principles

### Context is formed, not accumulated

Each iteration receives the smallest sufficient set of canonical inputs and repository slices. More context is not inherently better.

### Conversation is not canonical memory

Conversation is ephemeral reasoning. Nothing becomes durable because it appeared in chat.

### Artifacts are the continuity boundary

A new competent agent must be able to continue from repository artifacts without reading prior conversations.

### One iteration has one primary question

Product thesis, current-system analysis, target architecture, UX, migration, and implementation are different iterations.

### Proposals are not decisions

Persuasive wording has no decision authority. Decisions must be explicitly accepted, recorded, and versioned.

### Falsification precedes commitment

A high-impact product or architecture proposal must be actively challenged before ratification.

### Exclusion is part of context formation

Each Context Pack states both included and deliberately excluded information.

### Handoffs are executable

Every completed iteration leaves one next objective, exact inputs, output contract, and completion criteria.

### Design levels do not silently overwrite one another

A lower-level discovery may challenge a higher-level decision, but it must raise an explicit revision proposal. It may not silently redefine the product.

## Epistemic states

Every important assertion uses one state:

- **Observation** — externally or technically verifiable fact.
- **Hypothesis** — explanation or direction awaiting validation.
- **Proposal** — concrete candidate solution.
- **Decision** — explicitly accepted proposal.
- **Constraint** — non-negotiable requirement.
- **Open Question** — deliberately unresolved issue.
- **Rejected** — evaluated and discarded alternative.
- **Superseded** — formerly valid decision replaced by another.

Decision maturity:

- **Provisional**
- **Validated**
- **Ratified**
- **Superseded**

## Required iteration lifecycle

1. **Frame**
   - one primary question;
   - one primary deliverable;
   - explicit out-of-scope list.

2. **Form Context**
   - canonical inputs;
   - repository slices;
   - relevant decisions and constraints;
   - explicit exclusions;
   - output contract.

3. **Explore**
   - alternatives are generated;
   - no automatic promotion to decisions.

4. **Challenge**
   - counterexamples;
   - boundary cases;
   - category confusion;
   - unnecessary complexity;
   - cheaper substitutes;
   - adoption barriers;
   - failure conditions.

5. **Propose**
   - concrete model;
   - trade-offs;
   - consequences;
   - validation plan.

6. **Decide**
   - accept;
   - modify;
   - defer;
   - reject;
   - or request further evidence.

7. **Consolidate**
   - update canonical artifacts;
   - record decisions;
   - remove duplication;
   - mark superseded material.

8. **Validate Handoff**
   - next iteration can begin without the current conversation;
   - exactly one next objective is declared.

9. **Reset Context**
   - a new phase begins in a fresh AI session.

## Mandatory phase gates

### Gate G0 — Bootstrap

Pass condition:

- canonical design repository exists;
- operating model exists;
- artifact ownership is defined;
- program state points to one next iteration.

### Gate G1 — Product survivability

Required iteration: PF-001.

Pass condition:

- the product thesis has been intentionally attacked;
- strongest substitutes and competitors are considered;
- at least ten end-to-end scenarios are stress-tested;
- fatal flaws and survivable risks are distinguished;
- product foundation is updated;
- central abstractions are retained, revised, or rejected explicitly.

Target architecture cannot start before G1 passes.

### Gate G2 — Current-system evidence

Required iteration: RI-001.

Pass condition:

- the current runtime is mapped without redesigning it;
- responsibilities, data, workflows, dependencies, invariants, and tests are documented;
- every major feature family has repository evidence;
- unknowns are explicit.

Target architecture cannot be finalized before G2 passes.

### Gate G3 — Target architecture coherence

Required iteration: TA-001.

Pass condition:

- all feature families have a target home;
- data and lifecycle ownership are unambiguous;
- dependency rules are explicit;
- context formation is designed;
- current-to-target mapping exists;
- unresolved trade-offs are explicit;
- architecture does not silently revise the product foundation.

### Gate G4 — Product experience viability

Pass condition:

- onboarding;
- primary workflows;
- progressive disclosure;
- adoption levels;
- error and recovery UX;
- human decision UX;
- context explainability are specified and tested conceptually.

### Gate G5 — Migration viability

Pass condition:

- no big-bang rewrite is required;
- vertical slices have independent value;
- compatibility and rollback are defined;
- migration order is justified.

### Gate G6 — Implementation validation

Pass condition:

- a vertical slice demonstrates the core flywheel;
- evidence and resumability survive context loss;
- the system is dogfooded on its own development process.

## When to create a new AI context

Create a new session when any condition applies:

- the primary question changes;
- the design level changes;
- exploration moves to implementation;
- the current answer would modify more than two primary artifacts;
- superseded ideas remain salient in conversation;
- repository content loaded exceeds the requested slice;
- the current state requires substantial chat history to understand;
- a phase gate has been reached;
- a canonical checkpoint is sufficient.

Default rule:

> One named iteration equals one fresh AI session.

## Context budget policy

- No raw prior chat transcripts.
- Maximum five primary canonical artifacts unless the Context Pack justifies more.
- Load a full code repository only for inventory or when slice extraction is impossible.
- Architecture sessions prefer current-system maps plus targeted code slices.
- Historical alternatives are included only through decision records.
- Superseded material is excluded unless the task is explicitly historical.
- The session stops when its primary deliverable is complete; adjacent work becomes a new iteration.

## Memory layers

### Canonical memory

Ratified or explicitly provisional artifacts and decisions in Git.

### Operational memory

Program state, iteration state, pending decisions, and handoff state.

### Retrieved working context

The selected subset used for one iteration.

### Ephemeral reasoning

The active conversation, intermediate drafts, and discarded reasoning.

Only the first two are durable by default.

## Compression policy

### Preserve exactly

- decisions;
- constraints;
- contracts;
- acceptance criteria;
- repository references;
- open questions;
- decisive rationale;
- next-step instructions.

### Preserve by summary

- alternatives explored;
- secondary arguments;
- examples;
- discussion history.

### Discard

- repetition;
- rhetorical framing;
- intermediate wording;
- superseded drafts;
- unrelated conversation;
- failed approaches without diagnostic value.

## Required end-of-session outputs

Every session must return:

1. the primary deliverable;
2. updated `docs/90-state/program-state.md`;
3. updated `docs/90-state/artifact-index.md` when artifacts change;
4. decision records for accepted or rejected high-impact choices;
5. `session-handoff.md` inside the session directory;
6. a concise list of changed files;
7. no requirement to retain the chat transcript.

## Handoff test

Ask:

> Can a competent new agent continue using only the repository state and the next Context Pack?

If not, the iteration is incomplete.

## Dogfooding rule

This operating model is the first process Continuity must eventually govern.

Future executable Guards should verify at least:

- every iteration has a Context Pack;
- every canonical decision has a decision record;
- program state names one next iteration;
- superseded content is excluded from new Context Packs;
- every implementation slice traces to a Decision or Hypothesis;
- every phase transition satisfies its gate;
- every handoff passes the continuity test.
