# OpenClaw Dev Days Lab — Markdown Memory Loop

## Purpose

Show why OpenClaw is more than a chatbot: it can use durable Markdown context to improve future work.

## Step 1 — Create workshop folder

Mac/Linux:

```bash
mkdir -p ~/openclaw-dev-days
cd ~/openclaw-dev-days
```

Windows PowerShell:

```powershell
mkdir $HOME\openclaw-dev-days
cd $HOME\openclaw-dev-days
```

## Step 2 — Create `memory.md`

Add:

```markdown
# Workshop Memory

## My goal
I want to build or improve: <your idea>

## My useful context
- My technical comfort level is: <beginner/intermediate/advanced>
- The kind of agent help I want most is: <research/planning/coding/outreach/project management>
- One constraint I have is: <time/tool/access/skill constraint>

## Today's next step
The next useful thing for me is: <one action>
```

## Step 3 — Ask OpenClaw to use it

Prompt:

```text
Read my workshop memory note and turn it into a cleaner project goal, three next actions, and one risk I should watch.
```

## Step 4 — Save the improved result

Create `workshop-goal-summary.md` with:

- cleaned project goal
- three next actions
- one risk
- one decision you made

## Done means

- `memory.md` exists
- OpenClaw used the memory context
- `workshop-goal-summary.md` exists
- attendee can explain how memory changed the answer
