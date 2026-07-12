---
artifact_id: VALIDATION-PF-REPORT
status: validated
owner: validation
last_updated: 2026-07-13
supersedes: []
superseded_by: null
---

# Product Falsification Report

## Iteration

**PF-001 — Product Falsification**

Research cut-off: **2026-07-13**.

## Primary question

Can the proposed Continuity product thesis, category, boundaries, adoption model, and central abstractions survive a serious attempt to prove that the product is unnecessary, incoherent, or economically impractical?

## Verdict

### Overall result

**The proposed broad “Engineering Continuity Control Plane” does not survive falsification. A narrower repository-native continuity product hypothesis survives.**

The original proposal combines at least five mature or fast-converging product categories:

- work management;
- policy and software assurance;
- agent execution and durable workflow orchestration;
- engineering knowledge and learning;
- internal developer platform governance.

Credible combinations of current tools reproduce most of the proposed feature surface. GitHub and GitLab increasingly combine issues, policy, evidence, coding agents, repository instructions, skills, hooks, memory, and workflow controls. Atlassian combines Jira, Confluence, automation, Rovo agents, and a coding agent. Port and Cortex combine software catalogs, standards, scorecards, workflows, organizational context, and AI governance. OPA, Semgrep, Temporal, LangGraph, MCP, Backstage, and agent-memory tools fill remaining gaps in composable stacks.

The broad product would therefore begin with three liabilities:

1. **second-source-of-truth risk** — it would duplicate work, policy, evidence, and execution state already owned elsewhere;
2. **governance debt** — it would require users to curate Guards, Lessons, mappings, evidence links, and lifecycle state across heterogeneous systems;
3. **category ambiguity** — no validated buyer or budget category corresponds to the full bundle.

A narrower hypothesis remains credible:

> A repository-native continuity layer may reduce rediscovery and unsafe continuation by producing explicit, evidence-bound Context Packs and Handoffs that remain portable across people, sessions, and executors, while leaving issues, CI, policy enforcement, and workflow execution in their existing systems of record.

This surviving hypothesis is not yet a validated product. It is a testable wedge.

### G1 result

**G1 — Product survivability: PASS WITH MATERIAL REVISION.**

The gate passes because the original thesis was attacked, the strongest substitutes were treated as complete stacks, all required scenarios were modeled, fatal flaws were separated from fixable risks, central abstractions were explicitly revised or rejected, and a narrow initial adopter and wedge were identified.

G1 does **not** ratify a market category, product name, target architecture, or commercial viability.

## Epistemic status

- **Observation** — supported by current public documentation or directly implied by the canonical repository.
- **Hypothesis** — plausible but unvalidated explanation or product direction.
- **Proposal** — concrete candidate for a later decision or experiment.
- **Validated decision** — recorded in a Decision Record after this falsification exercise; not automatically ratified.
- **Rejected** — a candidate that failed this iteration.
- **Open Question** — deliberately unresolved.

## What would kill the surviving product hypothesis

The product should be stopped or reframed again if any of the following are observed in comparative trials:

1. A repository plus issue tracker, CI, `AGENTS.md`/`CLAUDE.md`, and a small handoff template achieves equivalent takeover quality with materially lower maintenance.
2. Formed Context Packs do not reduce rediscovery time, repeated tool calls, or unsafe assumptions versus a well-maintained repository baseline.
3. Users cannot obtain a useful first handoff or validation result in ten minutes without migrating backlog, CI, or agent workflows.
4. Context omission detection produces either frequent false alarms or misses material constraints often enough that users stop trusting it.
5. The product requires more ongoing curation than the rediscovery and failure cost it removes.
6. Context Packs become another opaque retrieval layer whose selection cannot be explained and reproduced.
7. The product cannot remain executor-independent as coding-agent vendors add native memory, skills, hooks, task state, and repository-level workflows.
8. The product creates a second authoritative state for work, policy, decisions, or evidence instead of referencing their existing authorities.
9. No narrow adopter both experiences the pain and has authority to install and maintain the product.
10. The same wedge is absorbed into GitHub, GitLab, Atlassian, or an agent runtime before independent adoption is established.

The first comparative experiment should use a deliberately strong baseline, not an unstructured chat baseline.

## Method

PF-001 used:

- adversarial decomposition of the proposed product surface;
- strongest-case analysis of current substitutes;
- comparison of complete tool combinations rather than isolated products;
- twelve required end-to-end scenario stress tests;
- explicit assessment of maintenance and governance debt;
- targeted public-source research, prioritizing official product documentation;
- targeted search for evidence that “Engineering Continuity” is an established software category.

### Limitations

- Vendor documentation establishes capability, not customer outcomes.
- Several agent-memory and continuity projects are young and may disappear or change quickly.
- No user interviews, pricing study, installation test, or measured takeover benchmark was performed in PF-001.
- Recent academic results about agent handoffs and memory are directional evidence, not sufficient market validation.
- The current Nestfolio runtime was intentionally excluded; this report evaluates product coherence, not implementation quality.

## Market and category falsification

### “Engineering Continuity” is not currently a validated software category

A targeted search for the exact phrase produced mostly unrelated uses in physical engineering, consulting, staffing, and emerging informal agent-memory projects. It did not reveal a stable software market category with recognized buyers, analysts, or a consistent competitive set.

**Falsification result:** the category proposal fails as a market claim.

The phrase may remain useful as an internal problem-domain label, but it should not be treated as evidence of category creation. The product must be explainable using established language: repository context, durable handoffs, engineering intent, evidence, policy, and agent continuity.

### Adjacent categories are converging toward the proposed surface

The proposed product is surrounded by active categories with existing budgets:

- source-code management and DevSecOps platforms;
- issue and project management;
- enterprise AI coding agents;
- internal developer platforms and software catalogs;
- policy-as-code and application security;
- durable workflow and agent orchestration;
- engineering intelligence and scorecards;
- knowledge management and agent memory.

GitLab describes its Duo Agent Platform as orchestration across planning, building, securing, and shipping, within organizational context and guardrails. Port describes an agentic SDLC platform combining a Context Lake, workflows, scorecards, governance, and agent management. Cortex combines catalogs, scorecards, initiatives, workflows, engineering intelligence, and AI governance. These are not exact equivalents, but they invalidate the assumption that Continuity would occupy an uncontested integrated-control-plane space.

**Observation:** the closest competitive pressure comes from suites expanding horizontally, not from one direct clone.

**Implication:** a broad product must either replace major systems or become an integration layer over them. Both paths are expensive and slow for a new entrant.

## Strongest substitute stacks

### Stack A — GitHub-native repository operating system

**Components**

- GitHub Issues and Projects for work hierarchy, fields, views, and progress;
- pull requests, reviews, CODEOWNERS, branch protection, and rulesets for human authority and merge policy;
- GitHub Actions for checks, workflow automation, evidence artifacts, and deployment gates;
- artifact attestations for build provenance;
- Copilot repository custom instructions, custom agents, Agent Skills, hooks, MCP, and Copilot Memory;
- Markdown ADRs, runbooks, and handoff templates in the repository.

**Current evidence**

- [GitHub Issues supports work tracking and sub-issue hierarchy](https://docs.github.com/issues/tracking-your-work-with-issues/about-issues).
- [GitHub Projects supports structured metadata and custom fields](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).
- [Rulesets enforce reviews, status checks, and repository policies](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).
- [Artifact attestations establish build provenance and integrity](https://docs.github.com/en/actions/concepts/security/artifact-attestations).
- [Repository custom instructions provide project-specific build, test, and validation context](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot).
- [Agent Skills package reusable instructions and resources](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
- [Copilot hooks can run deterministic quality and security checks during agent execution](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks).
- [Copilot Memory persists repository and preference facts](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory).

**Strongest case**

For a GitHub-centered team, this stack already owns the authoritative work, code, review, policy, evidence, and agent surfaces. A few repository templates and Actions can enforce Context Pack and Handoff presence. Continuity would need to add measurable semantic validation or portable cross-executor continuity without copying GitHub state.

**Residual gap**

GitHub provides many primitives but does not clearly provide one explicit, executor-neutral contract for formed context, declared exclusions, handoff completeness, decision maturity, and cross-system evidence lineage.

**Falsification result:** reproduces most broad-product value; does not conclusively reproduce the narrow continuity wedge.

### Stack B — GitLab integrated DevSecOps and agent platform

**Components**

- issues, epics, merge requests, CI/CD, environments, approvals, compliance frameworks, security policies, and auditability;
- GitLab Duo Agent Platform with foundational, custom, and external agents and flows;
- self-managed and private deployment options;
- repository documents and policy files.

**Current evidence**

- [GitLab 18.8 made Duo Agent Platform generally available across the software lifecycle](https://docs.gitlab.com/releases/18/gitlab-18-8-released/).
- [GitLab supports external agents working alongside native agents](https://docs.gitlab.com/user/duo_agent_platform/agents/external/).
- [GitLab supports self-hosted models and agent-platform deployment options](https://docs.gitlab.com/administration/gitlab_duo_self_hosted/).
- [GitLab 19.1 expanded compliance and imported scanner findings into a consolidated security workflow](https://docs.gitlab.com/releases/19/gitlab-19-1-released/).
- [GitLab CI/CD owns build, test, deploy, and monitoring workflows](https://docs.gitlab.com/ci/).

**Strongest case**

GitLab is the strongest broad substitute because it intentionally consolidates lifecycle work, compliance, security, agents, evidence, and delivery. A regulated or self-hosted customer can reasonably prefer one integrated vendor over another control plane.

**Residual gap**

Cross-vendor executor portability and explicit formed-context contracts may remain incomplete, but GitLab can add them faster than a new product can recreate the rest of the lifecycle.

**Falsification result:** strongly falsifies the broad control-plane thesis, especially for enterprise buyers.

### Stack C — Atlassian work-and-knowledge suite plus coding agents

**Components**

- Jira work items, workflows, approvals, automation, and planning;
- Confluence knowledge and decision records;
- Rovo agents and automation;
- Jira Coding Agent using Jira, Confluence, and repository context;
- connected GitHub or Bitbucket repositories;
- Compass/DX scorecards and component health where applicable.

**Current evidence**

- [Jira Coding Agent uses work-item, Jira, Confluence, and codebase knowledge](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-jira-coding-agent/).
- [Jira can automate coding-agent work for repeatable tasks](https://support.atlassian.com/jira-software-cloud/docs/work-with-jira-coding-agent-in-automations/).
- [Rovo agents participate in Jira, Confluence, and automation rules](https://support.atlassian.com/rovo/docs/agents/).
- [Compass scorecards measure component health against organization-specific criteria](https://support.atlassian.com/compass/docs/what-are-scorecards/).

**Strongest case**

Organizations already standardized on Atlassian can keep work, knowledge, approvals, and agent delegation in one commercial ecosystem. Continuity risks becoming an additional layer that must synchronize with Jira and Confluence.

**Residual gap**

Repository-native portability and explicit exclusion-aware context may be weaker, but Atlassian owns the buyer relationship and collaboration surface.

**Falsification result:** strongly challenges adoption in existing Atlassian organizations.

### Stack D — Internal developer platform plus source control and policy

**Components**

- Port or Cortex for software catalog, organizational context, scorecards, standards, initiatives, workflows, approvals, and agent governance;
- GitHub or GitLab for code and work;
- CI plus OPA/Semgrep for enforcement;
- incident tooling for learning and remediation;
- coding agents connected through MCP or vendor integrations.

**Current evidence**

- [Port combines Context Lake, workflows, agents, scorecards, governance, approvals, and integrations](https://docs.port.io/).
- [Port scorecards evaluate engineering standards and quality](https://docs.port.io/scorecards/overview/).
- [Port documents AI-triggered remediation of degraded scorecards](https://docs.port.io/guides/all/self-heal-scorecards-with-ai/).
- [Cortex combines Catalogs, Scorecards, Workflows, and Engineering Intelligence](https://docs.cortex.io/get-started/quickstart/building-on-the-foundation-catalogs-scorecards-workflows-and-eng-intelligence).
- [Cortex Initiatives convert standards into owned, time-bound improvement goals](https://docs.cortex.io/improve/initiatives).
- [Cortex documents AI-governance use cases based on scorecards and SDLC controls](https://docs.cortex.io/solutions/ai-governance).

**Strongest case**

This stack already models the relationship between standards, failing entities, improvement initiatives, workflows, ownership, and organization-wide context. It directly challenges the Goal/Guard flywheel and the Assurance/Learning/Trust modules.

**Residual gap**

These platforms focus primarily on services and organizational governance, not task-level cross-session takeover. Their hosted, enterprise orientation also leaves room for a local repository wedge.

**Falsification result:** falsifies the enterprise governance bundle but leaves a developer-level continuity gap.

### Stack E — Composable open-source and framework stack

**Components**

- Git plus GitHub/GitLab issues and CI;
- ADRs and documentation-as-code;
- OPA and Semgrep for policy and findings;
- Backstage for catalog, TechDocs, templates, and permissions;
- Temporal or LangGraph for durable execution and human-in-the-loop pauses;
- MCP and repository instructions for context access;
- a vector store or agent-memory project for cross-session memory.

**Current evidence**

- [OPA is a general-purpose policy engine with policy-as-code](https://openpolicyagent.org/docs).
- [OPA supports policy testing](https://openpolicyagent.org/docs/policy-testing) and [decision logs for audit and debugging](https://openpolicyagent.org/docs/management-decision-logs).
- [Semgrep custom rules create findings for correctness, security, performance, and best-practice enforcement](https://semgrep.dev/docs/running-rules).
- [Backstage provides a software catalog, TechDocs, templates, and permissions](https://backstage.io/docs/features/techdocs/) and [software templates](https://backstage.io/docs/features/software-templates/).
- [Temporal workflows resume from recorded event history after failures](https://docs.temporal.io/workflows).
- [LangGraph provides persistence, checkpoints, stores, interrupts, and durable execution](https://docs.langchain.com/oss/python/langgraph/persistence) and [human-in-the-loop interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts).
- [MCP standardizes agent access to data, tools, and workflows](https://modelcontextprotocol.io/docs/getting-started/intro).

**Strongest case**

A technically strong team can assemble the full proposed capability set without Continuity. The cost is integration, schema design, lifecycle governance, and UX. If Continuity merely packages this stack, it becomes a consultancy-heavy platform rather than a focused product.

**Residual gap**

A consistent, low-maintenance protocol for context formation, handoff validation, and evidence references could reduce assembly cost.

**Falsification result:** adequate reproduction is technically possible; product value must come from simplification and trustworthy conventions, not exclusive capability.

### Stack F — Agent-native instructions, memory, and handoff tools

**Components**

- Claude Code `CLAUDE.md`, auto memory, Skills, subagents, hooks, plugins, MCP, and sessions;
- OpenAI Codex `AGENTS.md`, projects, parallel task threads, memory, tools, and evidence from logs and tests;
- GitHub Copilot Memory, Agent Skills, custom agents, hooks, and repo memory;
- emerging cross-agent memory and handoff tools such as Holistic, agentmemory, and StandIn.

**Current evidence**

- [Claude Code loads project memory at the start of conversations and distinguishes context from enforced hooks](https://docs.anthropic.com/en/docs/claude-code/memory).
- [Claude Code Skills, subagents, and hooks support specialized context and deterministic controls](https://docs.anthropic.com/en/docs/claude-code/skills), [subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents), and [hooks](https://docs.anthropic.com/en/docs/claude-code/hooks-guide).
- [Codex uses repository `AGENTS.md` files and returns verifiable terminal and test evidence](https://openai.com/index/introducing-codex/).
- [Codex projects organize multiple parallel agent threads](https://openai.com/index/introducing-the-codex-app/).
- [Holistic advertises repository-resident cross-agent memory and handoffs](https://github.com/lweiss01/holistic).
- [StandIn represents structured handoffs as queryable, source-citing records](https://www.standin.co/glossary).

**Strongest case**

Native agent products are rapidly adding exactly the memory, instruction, hook, session, and multi-agent features that Continuity proposes. A standalone product cannot rely on “agents forget” as a durable moat.

**Residual gap**

Vendor memory is often executor-specific, may be opaque, and may treat remembered material as context rather than governed authority. Cross-executor portability, explicit exclusions, decision maturity, and evidence-bound handoffs remain plausible gaps.

**Falsification result:** falsifies generic agent memory and orchestration as differentiators; supports only an executor-neutral governance protocol.

## Falsification by required question

### Problem severity

**Observation:** repositories, issues, CI, ADRs, instructions, and agent memory already preserve substantial engineering context when maintained well.

**Observation:** long-running and interrupted agent work still has a takeover problem. A recent preprint on “handoff debt” reports that structured/context-bearing handoffs reduced successor-agent events and prompt tokens compared with repository-only takeover. This is useful directional evidence, but it is not yet a broad, independently replicated market result: [Handoff Debt preprint](https://arxiv.org/abs/2606.02875).

**Falsification attempt:** assume disciplined teams already use repository docs, issues, PRs, CI, and agent instructions. Under this baseline, the problem is not “no memory”; it is selective formation, authority, completeness, and takeover cost.

**Result:** the broad problem statement is overstated. A narrower handoff and context-integrity problem survives, especially in long-running, interrupted, multi-executor work.

### Buyer and adopter

The broad product has no coherent initial buyer:

- developers feel session and handoff pain but cannot impose organization-wide governance;
- platform teams can adopt governance tools but will compare against Port, Cortex, Backstage, GitHub, and GitLab;
- security and compliance teams own policy but not work orchestration;
- engineering managers own delivery but may resist another source of truth.

**Result:** enterprise buyer coherence fails.

A narrow adopter survives:

> A senior individual contributor, technical lead, or small platform-minded team responsible for long-running AI-assisted changes in one or a few repositories, already using Git and CI, and able to add repository conventions without procurement or backlog migration.

The initial adopter can also be the maintainer, avoiding a buyer-maintainer split.

### Category

The product can be explained without invented terminology as:

> repository-native, evidence-bound context and handoffs for resumable engineering work across humans and coding agents.

This description is less grand but more falsifiable.

**Result:** “Engineering Continuity” is rejected as a validated category and retained only as an internal domain label.

### Central abstraction

#### Commitment

The Goal/Guard duality is rhetorically elegant:

```text
Goal: must become true
Guard: must remain true
```

But the lifecycles are materially different:

- a Goal is time-bound work with completion, priority, ownership, and acceptance;
- a Guard is an enduring policy or expectation with applicability, evaluator semantics, exception handling, false positives, versioning, and retirement;
- Goals naturally live in issue/project systems;
- Guards naturally live in policy, CI, scorecard, or review systems;
- one may generate the other, but that relationship does not justify a shared entity or schema.

Cortex already separates Scorecards from Initiatives: standards are ongoing, while initiatives are time-bound improvement goals. That market pattern directly contradicts the need for one public entity.

**Result:** reject `Commitment` as a shared public entity or schema. Retain it, at most, as umbrella vocabulary. Keep Goal and Guard conceptually separate and externally referencable.

#### Observation, Lesson, and Event

- Observation is useful as an epistemic label but is not proven as a required initial user-facing object.
- Lesson is valuable provenance but becomes governance debt if every insight requires a curated entity.
- Event is an implementation and integration concern unless a user workflow proves otherwise.

**Result:** none belongs in an assumed initial public kernel. Their later status remains open.

### Product completeness and coherence

The proposed modules do not form one necessary initial product:

- Work competes with GitHub Issues, GitLab, Jira, and Linear.
- Assurance competes with CI, OPA, Semgrep, rulesets, scorecards, and review tools.
- Execution competes with coding agents, LangGraph, Temporal, and workflow engines.
- Learning competes with incident tools, ADRs, documentation, and knowledge systems.
- Trust is cross-cutting rather than a standalone module.
- Console competes with every existing authoritative UI and creates synchronization pressure.

**Result:** the broad module set is a bundle, not a coherent minimum product.

The coherent residual is the transition boundary between existing systems and the next human or executor: what context is authorized, what was excluded, what evidence exists, what remains unresolved, and how continuation can be validated.

### Substitution

**Result:** existing tool combinations can adequately reproduce the broad product. They cannot yet be assumed to reproduce a low-friction, executor-neutral, explicit, reproducible context-and-handoff protocol. That residual must be measured, not asserted.

### Adoption

The original progressive adoption ladder begins with importing checks and exposing Guard health. This immediately positions the product against CI, security, and internal developer platforms and requires mapping existing controls.

A lower-friction wedge is:

1. point at a repository and existing work item;
2. form or validate a Context Pack with objective, scope, constraints, decisions, evidence references, uncertainties, and exclusions;
3. produce a Handoff after work;
4. verify that a different human or executor can resume without the prior conversation.

No backlog migration, policy migration, hosted service, or autonomous agent is required.

**Result:** the original adoption ladder is rejected for the initial wedge. Ten-minute value remains plausible but unproven.

### Context Formation

Context Formation is not unique as a generic capability:

- repository instructions select standing context;
- agent skills package task-specific instructions and resources;
- MCP connects agents to data and tools;
- RAG and memory systems retrieve relevant material;
- Jira Coding Agent uses Jira, Confluence, and codebase context;
- Port markets a Context Lake for humans and agents.

The potentially distinct claim is narrower:

> Context selection is a versioned, inspectable contract with explicit authority, provenance, uncertainty, and exclusions, and its adequacy is tested through takeover.

This is materially different from “retrieve relevant chunks,” but the difference is only valuable if it prevents omissions or reduces rediscovery without high curation.

**Result:** retain Context Formation as a product hypothesis, not as an established differentiator.

### Economics and maintenance

The original product accumulates maintenance in every loop:

- Guard authorship, applicability, calibration, exceptions, and retirement;
- evidence adapters and freshness semantics;
- synchronization with issue trackers and CI;
- lesson curation and deduplication;
- executor integrations and session-state compatibility;
- context-selection tuning and omission review;
- analytics and local/team data reconciliation.

This is not incidental operational work; it is the core cost of the product.

The narrow wedge reduces maintenance by storing only continuation contracts and references to external authorities. It still risks stale Context Packs and ritualized handoffs.

**Result:** governance debt is fatal to the broad product and the primary risk to the narrow one.

## Required scenario stress tests

### Scenario 1 — Single developer with one coding agent

| Field | Analysis |
|---|---|
| User | One developer working in one repository with one preferred coding agent. |
| Trigger | A task spans several sessions or is interrupted for days. |
| Current alternative | Git, issue notes, `CLAUDE.md` or `AGENTS.md`, agent auto-memory, a TODO file, and test results. |
| Proposed Continuity workflow | Form a task Context Pack, record Run state and Evidence, create a Handoff, resume later. |
| Required concepts | Context Pack, Handoff, Evidence references; Goal and Guard add little unless already present externally. |
| Incremental value | Reduced re-explanation and a more disciplined resume point. |
| Maintenance cost | The same person must write or approve context and handoff state; overhead is highly visible. |
| Failure modes | Ritual documentation, stale state, agent memory already sufficient, user skips the process for short tasks. |
| Decisive value | The successor session resumes materially faster and makes fewer incorrect assumptions than the repository-plus-agent baseline. |
| Falsification result | **Mostly falsified for ordinary work.** Survives only for long, interruption-prone, high-context tasks. |

### Scenario 2 — Small team with existing CI and GitHub Issues

| Field | Analysis |
|---|---|
| User | Two to ten engineers using GitHub Issues, pull requests, Actions, and one or more coding agents. |
| Trigger | Work changes hands or an agent completes only part of an issue. |
| Current alternative | Issue hierarchy, Projects fields, PR description, checks, artifacts, custom instructions, CODEOWNERS, and a handoff template. |
| Proposed Continuity workflow | Reference the GitHub issue and checks, form explicit scope and exclusions, produce a takeover-ready Handoff. |
| Required concepts | Context Pack, Handoff, Evidence reference, Decision reference. |
| Incremental value | Cross-executor portability and completeness validation without moving authoritative work out of GitHub. |
| Maintenance cost | Integration mapping, duplicate metadata risk, and discipline at handoff boundaries. |
| Failure modes | Continuity creates shadow issue state; GitHub adds equivalent native workflow; team ignores another CLI or UI. |
| Decisive value | A new assignee can resume from repository state and Handoff without reading the whole issue/PR/chat history. |
| Falsification result | **Conditional survival.** Broad work and assurance modules fail; a thin reference-based layer may survive. |

### Scenario 3 — Large regulated organization

| Field | Analysis |
|---|---|
| User | Platform, security, compliance, and product engineering teams across many repositories. |
| Trigger | A controlled change requires traceability, approval, evidence, and audit. |
| Current alternative | GitLab Ultimate or GitHub Enterprise, Jira/Confluence, Port/Cortex, OPA/Semgrep, compliance frameworks, audit logs, attestations, and workflow approvals. |
| Proposed Continuity workflow | Model Goals, Guards, Decisions, Evidence, Runs, Lessons, and formed context across the organization. |
| Required concepts | Nearly the entire proposed product. |
| Incremental value | Potential cross-tool lineage from intent through execution and learning. |
| Maintenance cost | Very high: integrations, data classification, RBAC, retention, validation, policy ownership, evidence semantics, and procurement. |
| Failure modes | Becomes a new regulated system of record; inconsistent mappings undermine audits; platform duplicates existing controls; local-first conflicts with analytics and governance. |
| Decisive value | Demonstrably lower audit effort or change-failure risk than established suites without weakening authority boundaries. |
| Falsification result | **Falsified as an initial market.** Possible later use case only after a narrow product is proven. |

### Scenario 4 — Monorepo with multiple teams

| Field | Analysis |
|---|---|
| User | Multiple teams sharing a large repository with overlapping ownership and policies. |
| Trigger | A change crosses domains and must load only relevant context and controls. |
| Current alternative | CODEOWNERS, path-based CI, rulesets, repository instructions, monorepo tooling, Backstage/Cortex ownership metadata, and team-specific docs. |
| Proposed Continuity workflow | Form a scoped Context Pack from relevant ownership, decisions, Guards, code slices, and exclusions. |
| Required concepts | Context Pack, scope, Evidence, Decision references; Guard references rather than owned Guards. |
| Incremental value | Explicit negative scope and explainable selection may prevent accidental cross-domain changes. |
| Maintenance cost | Ownership and applicability mappings must stay synchronized with repository structure. |
| Failure modes | Omitted dependency, stale ownership, excessive context, false confidence from a “validated” pack. |
| Decisive value | Fewer cross-boundary errors or faster onboarding than CODEOWNERS plus path-scoped docs and CI. |
| Falsification result | **Conditional survival.** Context validation is plausible; broad orchestration is unnecessary. |

### Scenario 5 — Incident produces a recurring prevention rule

| Field | Analysis |
|---|---|
| User | Service team, incident commander, security or reliability engineer. |
| Trigger | A production incident reveals a preventable failure mode. |
| Current alternative | Incident postmortem, follow-up issue, ADR/runbook update, Semgrep/OPA/custom CI rule, scorecard, and recurring review. |
| Proposed Continuity workflow | Incident Lesson proposes a Guard; a human ratifies it; evaluator is calibrated; violations create Goals; effectiveness and rot are measured. |
| Required concepts | Lesson, Guard, Evidence, Decision, Goal, evaluator lifecycle. |
| Incremental value | End-to-end lineage from incident to rule to remediation to retirement. |
| Maintenance cost | High: rule quality, applicability, false positives, ownership, exceptions, and periodic review. |
| Failure modes | Rule does not encode the real lesson; noisy Guard is bypassed; postmortem and policy tools remain authoritative; duplicate lifecycle state. |
| Decisive value | Lower recurrence or provably faster closure than incident-tool-plus-policy baseline. |
| Falsification result | **The loop is useful but not category-distinct.** Treat as later integration use case, not the initial product. |

### Scenario 6 — Judgment-based architectural review

| Field | Analysis |
|---|---|
| User | Staff engineer, architecture group, or domain owner. |
| Trigger | A proposed change may violate a nuanced architectural principle. |
| Current alternative | ADRs, design review, PR templates, CODEOWNERS, architecture tests where deterministic, and human approval. |
| Proposed Continuity workflow | A judgment evaluator produces Evidence against a Guard; a human Decision accepts, rejects, or requests changes. |
| Required concepts | Guard, Evidence, Decision; possibly Observation. |
| Incremental value | Consistent review prompts and explicit provenance for a human judgment. |
| Maintenance cost | Evaluator calibration, model drift, explanation review, and exceptions. |
| Failure modes | False authority, inconsistent LLM judgments, reviewers defer to automation, architectural nuance becomes a brittle rule. |
| Decisive value | Better review consistency without reducing human responsibility or increasing review time. |
| Falsification result | **Falsifies “Guard” as a uniform enforcement concept.** Judgment review must remain explicitly human and cannot share deterministic semantics. |

### Scenario 7 — Long migration interrupted across sessions

| Field | Analysis |
|---|---|
| User | Senior engineer or team executing a multi-week migration. |
| Trigger | Work is paused, priorities change, or context windows reset. |
| Current alternative | Epic/sub-issues, migration plan, ADRs, branches, PRs, test matrix, journal, and agent instructions. |
| Proposed Continuity workflow | Each bounded Run receives formed context, records completed and pending work, links evidence, and leaves an executable Handoff. |
| Required concepts | Context Pack, Run, Handoff, Evidence, Decision, explicit exclusions. |
| Incremental value | Reduces rediscovery and prevents repeated or contradictory migration steps. |
| Maintenance cost | Handoff must be updated at real boundaries and kept aligned with code and issue state. |
| Failure modes | Handoff becomes stale; migration plan and issue tracker diverge; too much state is copied rather than referenced. |
| Decisive value | A successor can continue safely without the previous chat and with fewer exploratory steps. |
| Falsification result | **Strongest surviving scenario.** Requires comparative measurement against a disciplined repository baseline. |

### Scenario 8 — Executor changes mid-Run

| Field | Analysis |
|---|---|
| User | Developer switching between Claude Code, Codex, Copilot, another agent, or a human successor. |
| Trigger | Cost, outage, model capability, policy, or personal preference causes an executor switch. |
| Current alternative | Repository state, issue/PR, `AGENTS.md`/`CLAUDE.md`, MCP, shared memory service, raw session export, or manual summary. |
| Proposed Continuity workflow | Freeze authoritative state, produce an executor-neutral Handoff, form a new Context Pack, validate successor understanding, resume. |
| Required concepts | Context Pack, Handoff, Evidence, scope, pending Decisions. |
| Incremental value | Portability and explicit authority independent of vendor memory. |
| Maintenance cost | Adapters must not encode vendor-specific assumptions; handoffs must be concise but complete. |
| Failure modes | Hidden executor state is lost; shared memory is already adequate; output contract differs by tool; prompt injection through recalled context. |
| Decisive value | Comparable continuation quality across executors without copying full transcripts. |
| Falsification result | **Strong survival.** This is a core candidate for the adoption wedge. |

### Scenario 9 — Contradictory or obsolete Guard

| Field | Analysis |
|---|---|
| User | Guard owner, platform team, or developer blocked by policy. |
| Trigger | Two rules conflict, a rule no longer matches architecture, or its evaluator becomes noisy. |
| Current alternative | Policy repository, version control, tests, rule ownership, waivers, deprecation, CI metrics, and manual review. |
| Proposed Continuity workflow | Detect conflict or decay, open a Decision, compare Evidence, supersede or retire the Guard, and preserve history. |
| Required concepts | Guard, Evidence, Decision, lifecycle, ownership, exceptions, retirement. |
| Incremental value | First-class lifecycle and lineage across heterogeneous evaluators. |
| Maintenance cost | Very high; semantic conflicts and obsolescence are not reliably detectable automatically. |
| Failure modes | False conflict detection, orphaned rules, “temporary” waivers become permanent, users bypass the system. |
| Decisive value | Lower policy noise and faster retirement than existing policy repositories and scorecards. |
| Falsification result | **Major survivability risk.** Guard rot can make the product net-negative; not suitable for the initial wedge. |

### Scenario 10 — Human rejects an automatically proposed Guard

| Field | Analysis |
|---|---|
| User | Maintainer, architecture owner, security owner, or team lead. |
| Trigger | An agent infers a lesson and proposes a new rule. |
| Current alternative | Agent opens a PR or issue containing a proposed Semgrep/OPA/CI rule; humans review and reject it. |
| Proposed Continuity workflow | Proposal remains non-authoritative; human Decision rejects it; rationale and evidence are retained. |
| Required concepts | Proposal state, Decision, Evidence; Guard exists only after acceptance. |
| Incremental value | Clear epistemic status and retained rejection rationale. |
| Maintenance cost | Review queue, duplicate proposals, and storage of rejected material. |
| Failure modes | Proposal spam, accidental enforcement before ratification, rejected rules remain salient in future context. |
| Decisive value | Fewer accidental policy promotions than PR-based governance. |
| Falsification result | **Mostly falsified as distinct value.** Standard pull-request governance already handles this well. |

### Scenario 11 — No-agent adoption

| Field | Analysis |
|---|---|
| User | Human-only team or team not delegating implementation to autonomous agents. |
| Trigger | A person leaves, work is paused, or a complex change changes owner. |
| Current alternative | Issues, documentation, ADRs, pull requests, CI, runbooks, and handover checklists. |
| Proposed Continuity workflow | Form context and handoff contracts for human continuation; link evidence and decisions. |
| Required concepts | Context Pack, Handoff, Evidence, Decision references. |
| Incremental value | Structured takeover and explicit exclusions independent of AI. |
| Maintenance cost | Manual capture is harder to justify without agent token or rediscovery savings. |
| Failure modes | Perceived as process bureaucracy; overlaps with good project hygiene; low frequency of handoffs. |
| Decisive value | Faster and safer human takeover in measured migrations or incidents. |
| Falsification result | **Survives only as a quality constraint, not a strong initial sales wedge.** The product must work without agents but need not lead with no-agent use. |

### Scenario 12 — Product repository dogfoods its own Context Formation

| Field | Analysis |
|---|---|
| User | Continuity maintainers and successive AI sessions. |
| Trigger | Each named iteration begins in a fresh context. |
| Current alternative | Manually curated canonical Markdown, Context Packs, Decision Records, program state, and handoffs in Git. |
| Proposed Continuity workflow | Validate that declared inputs are canonical, exclusions are explicit, outputs satisfy contracts, decisions are recorded, and the next session can continue. |
| Required concepts | Context Pack, Handoff, Decision reference, artifact status, Evidence reference. |
| Incremental value | Automation can detect missing or contradictory artifacts and measure continuation quality. |
| Maintenance cost | The repository may be unusually disciplined and unrepresentative; automation can fossilize its own process. |
| Failure modes | Circular validation, overfitting to Markdown artifacts, no comparison baseline, process success mistaken for market demand. |
| Decisive value | A fresh agent completes RI-001 without prior chat, with lower omission and rediscovery than a manually prepared baseline. |
| Falsification result | **Necessary dogfood test, insufficient market evidence.** It validates feasibility and protocol quality only. |

## Cross-scenario conclusions

### Where the original product fails

1. **Work ownership** should remain in issue and project systems.
2. **Enforcement ownership** should remain in CI, policy engines, code review, and scorecards.
3. **Execution durability** should remain in agent runtimes and workflow engines.
4. **Incident ownership** should remain in incident systems.
5. **Organization-wide catalog and standards** should remain in internal developer platforms.
6. **A universal Console** would duplicate authoritative UIs and create synchronization debt.
7. **A single Commitment entity** hides incompatible Goal and Guard semantics.
8. **Preserving every current feature family as a product constraint** prevents falsification and forces a bundle.

### Where value may remain

1. Explicit formed context rather than opaque retrieval.
2. Explicit exclusions and authorized scope.
3. Executor-neutral handoffs.
4. Evidence references with provenance and freshness, without copying evidence ownership.
5. Pending human decisions and uncertainty made visible at takeover.
6. Validation that a successor can continue without prior conversation.
7. Repository-native operation with optional hosted collaboration later.

## Fatal flaws versus fixable risks

### Fatal to the broad product

| Flaw | Why fatal |
|---|---|
| No coherent category or buyer | The full surface maps to several established budgets and owners. |
| Second source of truth | Duplicating issue, policy, evidence, and execution state undermines trust. |
| Governance debt exceeds default value | Guard and Lesson lifecycle maintenance is not optional overhead. |
| Suite convergence | GitLab, GitHub, Atlassian, Port, and Cortex can absorb broad features. |
| Incompatible module adoption | Teams cannot progressively adopt a control plane that assumes ownership of all loops. |
| Commitment as shared entity | Goal and Guard lifecycle semantics are too different. |

### Fixable or testable risks for the narrow wedge

| Risk | Required mitigation or evidence |
|---|---|
| Handoff ritual becomes bureaucracy | Automate extraction, minimize required fields, and measure saved rediscovery. |
| Context omission creates false confidence | Expose source selection, exclusions, uncertainty, and validation failures. |
| Vendor-native memory closes the gap | Remain executor-neutral and authority-aware; test portability. |
| Repository conventions are sufficient | Run comparative experiments against a strong template-and-script baseline. |
| Local-first limits team analytics | Treat collaboration/analytics as optional later capabilities, not initial requirements. |
| Context Packs become stale | Bind them to repository revisions and external evidence freshness; avoid copied state. |
| Narrow adopter is too small | Validate frequency, willingness to install, and repeat use across several teams. |

## Central proposal dispositions

| Proposal | PF-001 disposition | Rationale |
|---|---|---|
| Engineering Continuity as a market category | **Rejected as validated category** | No stable category evidence; adjacent categories already own budgets and language. |
| Continuity as an Engineering Continuity Control Plane | **Rejected** | Too broad, duplicative, and maintenance-heavy. |
| Problem of engineering intent loss | **Revised and retained as hypothesis** | Real in long-running interrupted work, but severity is context-dependent. |
| Commitment as shared entity/schema | **Rejected** | Goal and Guard have incompatible lifecycles and systems of record. |
| Commitment as umbrella vocabulary | **Retained optionally** | Useful explanatory language if it has no schema or lifecycle authority. |
| Goal | **Retained as external concept/reference** | Existing issue systems already model it well. |
| Guard | **Retained as external concept/reference** | Existing policy and assurance systems already model enforcement; lifecycle remains important. |
| Observation as initial public object | **Deferred** | Epistemically useful, not proven necessary in initial UX. |
| Lesson as initial kernel object | **Rejected for initial wedge** | High curation debt; use referenced provenance until validated. |
| Event as public object | **Rejected for initial wedge** | No user-facing necessity established. |
| Context Formation | **Retained as product hypothesis** | Only distinct if explicit, reproducible, authority-aware, and omission-visible. |
| Evidence principle | **Revised and retained** | Use references to authoritative evidence; do not create a new evidence store by default. |
| Preserve all current feature families | **Rejected as product constraint** | It prevents falsification and forces unrelated modules into one product. |
| Progressive adoption starting with Guard import | **Rejected for initial wedge** | High integration and governance cost before immediate value. |
| Local-first value | **Retained** | Supports low-friction adoption and repository authority. |
| Executor independence | **Retained** | Essential to the surviving portability claim. |
| Human authority | **Retained** | Required for decisions and judgment-based review. |

## Initial adopter and adoption wedge

### Initial adopter hypothesis

A senior developer, technical lead, or small team that:

- performs multi-session, multi-week engineering work;
- uses one or more coding agents;
- changes executors or hands work between people;
- already has Git, CI, issues, and repository documentation;
- can add repository-local conventions without enterprise procurement;
- experiences repeated rediscovery, omitted constraints, or poor handoffs.

This adopter is narrow enough to own installation and maintenance and broad enough to exercise the core continuity problem.

### Adoption wedge hypothesis

The minimum product should not import the backlog or manage Guards. It should:

1. reference an existing work item or objective;
2. form a versioned Context Pack from canonical repository artifacts and selected external references;
3. require explicit scope, exclusions, uncertainty, and pending human decisions;
4. generate or validate an evidence-bound Handoff;
5. prove that another human or executor can resume without the prior conversation.

### Ten-minute value test

A new user should be able to:

- install or invoke the product;
- point it at a repository and one active work item;
- receive a useful Context Pack or a diagnostic showing missing continuity artifacts;
- complete one Handoff without changing issue tracker, CI, or agent.

Failure of this test should block expansion into Guards, Learning, orchestration, or organization analytics.

## Maintenance model for the surviving hypothesis

### What the product may own

- the structure and validation rules of Context Packs and Handoffs;
- references to canonical decisions and evidence;
- explicit scope, exclusions, uncertainties, and pending decisions;
- continuity checks at handoff boundaries;
- executor-neutral export or invocation contracts.

### What it should not own by default

- issue priority or backlog state;
- source code and pull-request state;
- CI results or artifact storage;
- policy definitions and enforcement engines;
- incident records;
- service catalog ownership;
- agent runtime checkpoints;
- organization-wide knowledge graph.

This boundary minimizes synchronization and governance debt.

## Required evidence after PF-001

PF-001 supports continuation to RI-001, not target architecture.

RI-001 should inventory the current runtime neutrally and identify:

- which current features directly support the narrow context-and-handoff hypothesis;
- which features are generic substitutes already better owned elsewhere;
- which features impose maintenance or coupling inconsistent with the revised product boundary;
- which implementation facts are reusable without assuming the old product shape.

A later validation iteration should run controlled takeover experiments across at least:

- repository-only baseline;
- repository plus issue/PR and agent instructions;
- repository plus a structured manual handoff template;
- the proposed formed-context and validated-handoff workflow;
- at least two different executors and one human takeover.

Measure:

- time to first correct action;
- repeated exploratory commands or tool calls;
- prompt or context volume;
- incorrect assumptions;
- omitted constraints;
- completion quality;
- handoff authoring and maintenance time.

## Public evidence index

### Source control, work, policy, and evidence

- [GitHub Issues](https://docs.github.com/issues/tracking-your-work-with-issues/about-issues)
- [GitHub Projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [GitHub rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)
- [GitHub artifact attestations](https://docs.github.com/en/actions/concepts/security/artifact-attestations)
- [GitLab Duo Agent Platform GA](https://docs.gitlab.com/releases/18/gitlab-18-8-released/)
- [GitLab CI/CD](https://docs.gitlab.com/ci/)
- [GitLab 19.1 compliance and scanner integration](https://docs.gitlab.com/releases/19/gitlab-19-1-released/)
- [Jira Coding Agent](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-jira-coding-agent/)
- [Linear GitHub integration](https://linear.app/docs/github-integration)

### Internal developer platforms and governance

- [Port documentation](https://docs.port.io/)
- [Port scorecards](https://docs.port.io/scorecards/overview/)
- [Cortex catalogs, scorecards, workflows, and engineering intelligence](https://docs.cortex.io/get-started/quickstart/building-on-the-foundation-catalogs-scorecards-workflows-and-eng-intelligence)
- [Cortex initiatives](https://docs.cortex.io/improve/initiatives)
- [Backstage TechDocs](https://backstage.io/docs/features/techdocs/)
- [Backstage Software Templates](https://backstage.io/docs/features/software-templates/)

### Policy and assurance

- [Open Policy Agent](https://openpolicyagent.org/docs)
- [OPA policy testing](https://openpolicyagent.org/docs/policy-testing)
- [OPA decision logs](https://openpolicyagent.org/docs/management-decision-logs)
- [Semgrep rules and findings](https://semgrep.dev/docs/running-rules)

### Agent context, memory, and execution

- [GitHub Copilot custom instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [GitHub Copilot Agent Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)
- [GitHub Copilot hooks](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks)
- [GitHub Copilot Memory](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory)
- [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Claude Code hooks](https://docs.anthropic.com/en/docs/claude-code/hooks-guide)
- [OpenAI Codex and `AGENTS.md`](https://openai.com/index/introducing-codex/)
- [Codex multi-agent projects](https://openai.com/index/introducing-the-codex-app/)
- [LangGraph persistence](https://docs.langchain.com/oss/python/langgraph/persistence)
- [LangGraph interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts)
- [Temporal workflows](https://docs.temporal.io/workflows)
- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Holistic cross-agent repository memory](https://github.com/lweiss01/holistic)
- [StandIn handoff glossary](https://www.standin.co/glossary)

### Directional research

- [Handoff Debt: The Rediscovery Cost When Coding Agents Take Over Interrupted Tasks](https://arxiv.org/abs/2606.02875)
- [Agent Memory: Characterization and System Implications of Stateful Long-Horizon Workloads](https://arxiv.org/abs/2606.06448)

## Final falsification statement

Continuity should **not** proceed as a new all-encompassing control plane, a replacement for issue tracking, a generic policy platform, an agent orchestrator, or an organization-wide learning system.

It may proceed as a narrow, repository-native continuity protocol and product hypothesis only if it can prove that explicit, evidence-bound context and handoffs outperform disciplined use of existing repositories, issue trackers, CI, and agent instructions while adding little maintenance and no new source of truth.
