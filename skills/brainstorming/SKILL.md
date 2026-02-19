---
name: brainstorming
description: "You use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation."
---

# Brainstorming Ideas Into Designs

## Overview

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

Start by understanding the current project context, then ask questions one at a time to refine the idea. Once you understand what you're building, present the design in small sections (200-300 words), checking after each section whether it looks right so far.

## The Process

**Understanding the idea:**
- Check out the current project state first (files, docs, recent commits)
- Ask questions one at a time to refine the idea
- Prefer multiple choice questions when possible, but open-ended is fine too
- Only one question per message - if a topic needs more exploration, break it into multiple questions
- Focus on understanding: purpose, constraints, success criteria

**Exploring approaches:**
- Propose 2-3 different approaches with trade-offs
- Present options conversationally with your recommendation and reasoning
- Lead with your recommended option and explain why

**Presenting the brainstorming:**
- Once you believe you understand what you're building, present the brainstorm
- Break it into sections of 200-300 words
- Ask after each section whether it looks right so far
- Cover: Main ideas the user want to execute on
- Be ready to go back and clarify if something doesn't make sense

## After the brainstorm

**Documentation:**
- Write the validated brainstorm to `docs/brainstorm/YYYY-MM-DD/<topic>.md`
- Use `obsidian-markdown` skill to write the brainstorm

**Plan creation based on brainstorming (if continuing):**
- Ask: "Ready to create a concrete plan for this brainstorm?"
- Use powerup:planify to create detailed implementation plan

## Key Principles

- **One question at a time** - Don't overwhelm with multiple questions
- **Multiple choice preferred** - Easier to answer than open-ended when possible
- **YAGNI ruthlessly** - Remove unnecessary features from all brainstorms
- **Explore alternatives** - Always propose 2-3 approaches before settling
- **Incremental validation** - Present brainstorm in sections, validate each
- **Be flexible** - Go back and clarify when something doesn't make sense
