---
name: compound-knowledge
description: Capture solved problems and session learnings as structured Obsidian notes with wikilinks and JSON Canvas relationship maps. Use this skill whenever the user says "compound", "save what we learned", "document this session", "add to my knowledge base", or asks to capture/persist insights, decisions, or solutions from the current conversation. Also trigger proactively at the end of long technical sessions involving debugging, architecture decisions, or new patterns.
---

# Compound Knowledge

Turn session learnings into a durable, interlinked knowledge base.

## When to run

The user explicitly asks to compound (e.g. "compound this", "save what we learned"),
or you've just resolved something non-trivial — a gnarly bug, a key architectural
decision, a useful pattern — and it's worth preserving.

## Start here: read the Obsidian skills

Before writing any files, read these two skills so you follow their exact format:

```
obsidian-markdown 
obsidian-json-canvas
obsidian-base
```

The guidance below describes *what* to capture and *why* — defer to those skills
for the precise syntax, frontmatter, wikilink, callout, and canvas conventions.

## What to extract

Scan the conversation for:

- **Solved problems** — bugs fixed, errors resolved, root causes found
- **Decisions** — architectural choices, tool selections, tradeoffs accepted
- **Patterns & techniques** — reusable approaches, code idioms, config tricks
- **Preferences** — how the user likes things done (naming, style, workflow)
- **Mental models** — conceptual explanations that clicked, analogies that helped

Group related items into one note. Don't create a note per message — create one
note per *concept or problem domain*.

## What each note should contain

Follow `obsidian-markdown` SKILL.md for exact syntax. Each note should cover:

- **Frontmatter**: title, date, tags (see taxonomy below), aliases
- **Context**: 1-2 sentences on what prompted this
- **Solution / Insight**: the concrete knowledge, with code if relevant
- **Why it works**: brief explanation (skip if obvious)
- **Related**: `[[wikilinks]]` to other notes in the knowledge base

**Tag taxonomy** — pick the most relevant category tag, add tech-specific tags freely:

| Category tag | When to use |
|---|---|
| `debugging` | Error traces, root causes, fixes |
| `architecture` | Design decisions, tradeoffs, system structure |
| `pattern` | Reusable code or workflow techniques |
| `preference` | User's personal style/workflow choices |
| `tooling` | CLI tools, libraries, dev environment |
| `concept` | Mental models, explanations, theory |
| `research` | External knowledge gathered during session |

**Filename convention**: `kebab-case-title.md`

## JSON Canvas (relationship map)

After creating 2+ notes in a session, create a canvas that maps their relationships,
following `obsidian-json-canvas` SKILL.md exactly for format details.

Use labeled edges to describe relationships: `"caused by"`, `"solution for"`,
`"uses"`, `"depends on"`, `"contrasts with"`, `"part of"`.

Layout: arrange left-to-right or top-to-bottom reflecting causal/conceptual
flow. Generous spacing (x/y multiples of 300).

Name the canvas after the session topic: `<topic>-map.canvas`.

## Output structure

The obsidian vault path will be `docs/knowledge` of the current folder, if it not exists feel free to create it

```
<vault-root>/
├── <category>/
│   ├── <kebab-case-note>.md
│   └── ...
└── maps/
    └── <topic>-map.canvas
```

## Process

1. **Scan** the conversation — identify the 1-5 most valuable things to preserve.
2. **Draft note titles** — share briefly: "I'm planning to create notes for: X, Y, Z. Anything to add or rename?" (Skip if the user said "just do it".)
3. **Read the Obsidian skills** listed above.
4. **Write notes** — one file per concept, proper Obsidian format.
5. **Create canvas** — only if 2+ notes; map their relationships.
6. **Present files** — use `present_files`.
7. **One-line summary** — "Created N notes + 1 canvas covering: [topics]."

Keep notes focused and scannable. The goal is that future-you (or future-Claude)
can read a note in 30 seconds and know exactly what to do. Avoid padding.