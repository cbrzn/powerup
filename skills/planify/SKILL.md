---
name: planify
description: Create a detailed plan of asked feature, refactor or bug fix
---

# Create a plan for a new feature or bug fix

## Introduction

Use this when dating plans and searching for recent documentation.

Transform feature descriptions, bug reports, or improvement ideas into well-structured markdown files issues that follow project conventions and best practices. This skill provides flexible detail levels to match your needs.

## Feature Description

<feature_description> #$ARGUMENTS </feature_description>

**If the feature description above is empty, ask the user:** "What would you like to plan? Please describe the feature, bug fix, or improvement you have in mind."

Do not proceed until you have a clear feature description from the user.

### 0. Idea Refinement

**Check for brainstorm output first:**

Before asking questions, look for recent brainstorm documents in `docs/brainstorms/` that match this feature:

```bash
ls -la docs/brainstorms/*.md 2>/dev/null | head -10
```

**Relevance criteria:** A brainstorm is relevant if:
- The topic (from filename) semantically matches the feature description
- Created within the last 14 days
- If multiple candidates match, use the most recent one

**If a relevant brainstorm exists:**
1. Read the brainstorm document
2. Announce: "Found brainstorm from [date]: [topic]. Using as context for planning."
3. Extract key decisions, chosen approach, and open questions
4. **Skip the idea refinement questions below** - the brainstorm already answered WHAT to build
5. Use brainstorm decisions as input to the research phase

**If multiple brainstorms could match:**
Use **AskUserQuestion tool** to ask which brainstorm to use, or whether to proceed without one.

**If no brainstorm found (or not relevant), run idea refinement:**

Refine the idea through collaborative dialogue using the **AskUserQuestion tool**:

- Ask questions one at a time to understand the idea fully
- Prefer multiple choice questions when natural options exist
- Focus on understanding: purpose, constraints and success criteria
- Continue until the idea is clear OR user says "proceed"

**Skip option:** If the feature description is already detailed, offer:
"Your description is clear. Should I proceed with research, or would you like to refine it further?"

## Main Tasks

### 1. Repository Research & Context Gathering

<thinking>
First, I need to understand the project's conventions and existing patterns, leveraging all available resources and use parallel subagents to do this.
</thinking>

Run the following agent to gather more information:

- Task best-practices-researcher(feature_description)
- Task learnings-researcher(feature_description)

**What to look for:**
- **Learnings:** documented solutions in `docs/knowledge/` that might apply (gotchas, patterns, lessons learned)
- **Best practices:** which best practices so they can then be in sync with knowledge base


**Reference Collection:**

- [ ] Document all research findings with specific file paths (e.g., `app/services/exampleService.ts:42`)
- [ ] Include URLs to external documentation and best practices guides
- [ ] Note any team conventions discovered in `CLAUDE.md` or team documentation

### 2. Issue Planning & Structure

<thinking>
Think like a product manager - what would make this issue clear and actionable? Consider multiple perspectives
</thinking>

**Title & Categorization:**

- [ ] Draft clear, searchable issue title using conventional format (e.g., `feat: Add user authentication`, `fix: Cart total calculation`)
- [ ] Determine issue type: enhancement, bug, refactor
- [ ] Convert title to filename: today's date as folder, kebab-case and file name is the plan name
  - Example: `feat: Add User Authentication` → `2026-01-21/feat-add-user-authentication-plan.md`
  - Keep it descriptive (3-5 words after prefix) so plans are findable by context

**Stakeholder Analysis:**

- [ ] Identify who will be affected by this issue (end users, developers, operations)
- [ ] Consider implementation complexity and required expertise

**Content Planning:**

- [ ] Choose appropriate detail level based on issue complexity and audience
- [ ] List all necessary sections for the chosen template
- [ ] Gather supporting materials (error logs, screenshots, design mockups)
- [ ] Prepare code examples or reproduction steps if applicable, name the mock filenames in the lists

### 3. Choose Implementation Detail Level

Select how comprehensive you want the issue to be, simpler is mostly better.

#### 📄 MINIMAL (Quick Issue)

**Best for:** Simple bugs, small improvements, clear features

**Includes:**

- Problem statement or feature description
- Basic acceptance criteria
- Essential context only

**Structure:**

````markdown
[Brief problem/feature description]

## Acceptance Criteria

- [ ] Core requirement 1

- [ ] Core requirement 2

## Context

[Any critical information]

## MVP

### test.ts

```ts
export class Test {
  constructor() {}
}
```

## References

- Related issue: #[issue_number]
- Documentation: [relevant_docs_url]
````

#### 📋 MORE (Standard Issue)

**Best for:** Most features, complex bugs, team collaboration

**Includes everything from MINIMAL plus:**

- Detailed background and motivation

- Technical considerations

- Success metrics

- Dependencies and risks

- Basic implementation suggestions

**Structure:**

```markdown
## Overview

[Comprehensive description]

## Problem Statement / Motivation

[Why this matters]

## Proposed Solution

[High-level approach]

## Technical Considerations

- Architecture impacts

- Performance implications

- Security considerations

## Acceptance Criteria

- [ ] Detailed requirement 1

- [ ] Detailed requirement 2

- [ ] Testing requirements

## Success Metrics

[How we measure success]

## Dependencies & Risks

[What could block or complicate this]

## References & Research

- Similar implementations: [file_path:line_number]

- Best practices: [documentation_url]

- Related PRs: #[pr_number]
```

#### 📚 A LOT (Comprehensive Issue)

**Best for:** Major features, architectural changes, complex integrations

**Includes everything from MORE plus:**

- Detailed implementation plan with phases

- Alternative approaches considered

- Extensive technical specifications

- Resource requirements and timeline

- Future considerations and extensibility

- Risk mitigation strategies

- Documentation requirements

**Structure:**

```markdown
## Overview

[Executive summary]

## Problem Statement

[Detailed problem analysis]

## Proposed Solution

[Comprehensive solution design]

## Technical Approach

### Architecture

[Detailed technical design]

### Implementation Phases

#### Phase 1: [Foundation]

- Tasks and deliverables

- Success criteria

- Estimated effort

#### Phase 2: [Core Implementation]

- Tasks and deliverables

- Success criteria

- Estimated effort

#### Phase 3: [Polish & Optimization]

- Tasks and deliverables

- Success criteria

- Estimated effort

## Alternative Approaches Considered

[Other solutions evaluated and why rejected]

## Acceptance Criteria

### Functional Requirements

- [ ] Detailed functional criteria

### Non-Functional Requirements

- [ ] Performance targets

- [ ] Security requirements

- [ ] Accessibility standards

### Quality Gates

- [ ] Test coverage requirements

- [ ] Documentation completeness

- [ ] Code review approval

## Success Metrics

[Detailed KPIs and measurement methods]

## Dependencies & Prerequisites

[Detailed dependency analysis]

## Risk Analysis & Mitigation

[Comprehensive risk assessment]

## Resource Requirements

[Team, time, infrastructure needs]

## Future Considerations

[Extensibility and long-term vision]

## Documentation Plan

[What docs need updating]

## References & Research

### Internal References

- Architecture decisions: [file_path:line_number]

- Similar features: [file_path:line_number]

- Configuration: [file_path:line_number]

### External References

- Framework documentation: [url]

- Best practices guide: [url]

- Industry standards: [url]

### Related Work

- Previous PRs: #[pr_numbers]

- Related issues: #[issue_numbers]

- Design documents: [links]
```

### 4. Issue Creation & Formatting

<thinking>

Apply best practices for clarity and actionability, making the issue easy to scan and understand

</thinking>

In order to write the plan, you will use the `obsidian-markdown` skill - And will write things inside of the `plans` folder

**Content Formatting:**

- [ ] Use clear, descriptive headings with proper hierarchy (##, ###)

- [ ] Include code examples in triple backticks with language syntax highlighting

- [ ] Add screenshots/mockups if UI-related (drag & drop or use image hosting)

- [ ] Use task lists (- [ ]) for trackable items that can be checked off

- [ ] Add collapsible sections for lengthy logs or optional details using `<details>` tags

- [ ] Apply appropriate emoji for visual scanning (🐛 bug, ✨ feature, 📚 docs, ♻️ refactor)

**Code & Examples:**

````markdown
# Good example with syntax highlighting and line references

```ts

# app/services/user.ts:42

function processUser(user) {

}
```

# Collapsible error logs

<details>

<summary>Full error stacktrace</summary>

`Error details here...`

</details>
````

**AI-Era Considerations:**

- [ ] Account for accelerated development with AI pair programming

- [ ] Include prompts or instructions that worked well during research

- [ ] Note which AI tools were used for initial exploration (Claude, Copilot, etc.)

- [ ] Emphasize comprehensive testing given rapid implementation

- [ ] Document any AI-generated code that needs human review

### 5. Final Review & Submission

**Pre-submission Checklist:**

- [ ] Title is searchable and descriptive

- [ ] Labels accurately categorize the issue

- [ ] All template sections are complete

- [ ] Links and references are working

- [ ] Acceptance criteria are measurable

- [ ] Add names of files in pseudo code examples and todo lists

- [ ] Add an ERD mermaid diagram if applicable for new model changes

## Output Format

Write the plan to `docs/plans/YYYY-MM-DD/<topic>.md`

## Post-Generation Options

After writing the plan file, you must use the `ask-senior.sh` script to ask for feedback about your plan. You must do it until you get "No feedback to give. Looks perfect" once that happens you can proceed to ask the user if you should execute.

```
# ✅ CORRECT - Always use the script
bash ${CLAUDE_PLUGIN_ROOT}/skills/planify/scripts/ask-senior.sh ${plan_file}
```

**Question:** "Plan ready at `docs/plans/YYYY-MM-DD/<topic>.md`. What would you like to do next?"

NEVER CODE! Just research and write the plan.
