# Module — Markdown as the Thinking Layer

## Purpose

Teach Markdown as the first practical bridge between people, models, agents, GitHub, and Obsidian.

The point is not formatting trivia. The point is that Markdown makes thinking legible, reusable, and easy for both humans and agents to inspect.

## First-hour framing

Use this sequence during the opening hour:

1. Models do not think like humans. They work from context.
2. Agents become useful when context is explicit, structured, and durable.
3. Markdown is plain text with enough structure to guide both people and models.
4. GitHub uses Markdown for READMEs, issues, pull requests, and project docs.
5. Obsidian uses Markdown for personal knowledge, connected notes, and long-running memory.
6. OpenClaw can use Markdown files as memory, instructions, plans, and task context.

## Key message

Markdown is the shared operating layer for the workshop.

- Humans can read it.
- Agents can parse it.
- GitHub can render it.
- Obsidian can organize it.
- OpenClaw can use it as durable context.

## Minimum syntax to teach

Keep this tight. Attendees only need enough syntax to create useful structure.

```markdown
# Heading 1
## Heading 2

- Bullet item
- Another item

1. First step
2. Second step

- [ ] Task to do
- [x] Task completed

**Important note**

`inline code`

```text
A prompt, command, or example block goes here.
```

[Useful link](https://example.com)
```

## Demo flow

1. Show a messy note about a project idea.
2. Convert it into Markdown headings, bullets, task lists, and a prompt block.
3. Show how the rendered Markdown becomes easier for a person to scan.
4. Show how the raw Markdown gives an agent clearer structure.
5. Save the file as `workshop-memory.md`.
6. Ask OpenClaw to read it and turn it into an agent plan.
7. Open the same file in Obsidian to show that the note can become part of a knowledge base.
8. If time allows, show the same Markdown rendered in GitHub.

## Safety checkpoint

Before using GitHub or shared repositories, say this clearly:

Do not put secrets, API keys, private data, client information, sensitive personal notes, or anything confidential in a public repository or shared note.

When in doubt, keep it local.

## Attendee exercise

Create `workshop-memory.md`:

```markdown
# My OpenClaw Workshop Memory

## Goal
I want to build or improve: ...

## Context
- My role:
- My project or idea:
- My biggest friction point:

## Constraints
- Time:
- Tools:
- Data I should not expose:

## First agent idea
- [ ] Agent name:
- [ ] Job:
- [ ] First useful task:

## Prompts that worked
```text
Paste one useful prompt here.
```
```

Then ask OpenClaw:

```text
Read my workshop-memory.md file and help me turn it into a first agent plan. Ask me three questions before you propose the plan.
```

## Facilitator notes

- Do not over-teach syntax.
- Do not make attendees install Obsidian before the concept lands.
- Treat Obsidian as a visual proof that Markdown notes can grow into a knowledge system.
- Treat GitHub as a collaboration proof that Markdown can become public project documentation.
- Keep the first win local and safe before anything is published.
