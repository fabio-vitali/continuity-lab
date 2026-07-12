---
artifact_id: LAB-README
status: ratified
owner: program
last_updated: 2026-07-12
---

# Continuity Lab

This repository is the canonical design and development workspace for the product currently known as **Continuity**.

It is deliberately separate from Nestfolio.

## Repository responsibilities

### `continuity-lab`

Canonical for:

- development operating model;
- product thesis and conceptual model;
- design decisions;
- current-system analysis;
- target architecture;
- product experience;
- falsification and validation;
- migration strategy;
- implementation-slice specifications;
- program state and session handoffs.

### `nestfolio`

Canonical for:

- the current runtime implementation;
- current tests;
- project-specific bindings;
- evidence about what exists today.

Nestfolio is an implementation source and experimental proving ground. It is not the canonical source for the future product definition.

## Immediate execution order

Do not start target architecture yet.

1. **PF-001 — Product falsification**
2. **RI-001 — Current runtime inventory**
3. **TA-001 — Target architecture**

Each iteration runs in a fresh AI context and produces repository artifacts.

## Setup

Create a private, empty GitHub repository named:

```text
continuity-lab
```

Unpack this bootstrap into it, then run:

```bash
git init
git add .
git commit -m "bootstrap Continuity product design program"
git branch -M main
git remote add origin git@github.com:fabio-vitali/continuity-lab.git
git push -u origin main
```

Alternatively, after unpacking:

```bash
gh repo create fabio-vitali/continuity-lab   --private   --source=.   --remote=origin   --push
```

## Before every AI session

1. Pull the latest `continuity-lab`.
2. Export or zip the repository.
3. Upload only the inputs listed in that session's Context Pack.
4. Paste the corresponding `prompt.md` unchanged.
5. Do not paste earlier chat transcripts.
6. At the end, download the produced files.
7. Review the Git diff.
8. Commit the iteration output using the required commit message.

## Canonical starting points

- Process: `docs/00-governance/product-development-operating-model.md`
- Artifact rules: `docs/00-governance/artifact-governance.md`
- Design levels: `docs/00-governance/design-levels.md`
- Product foundation: `docs/10-product/product-foundation.md`
- Program state: `docs/90-state/program-state.md`
- Artifact index: `docs/90-state/artifact-index.md`

## Rule

A chat answer is not project memory.

A result becomes project memory only after it is:

1. classified;
2. written to the correct artifact;
3. reviewed through a diff;
4. committed to this repository.
