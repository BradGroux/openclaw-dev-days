# OpenClaw Dev Days Lab — First Success

## Purpose

Get every attendee to one visible OpenClaw win before adding channels, agents, or app-building complexity.

## Done means

- OpenClaw installed
- Gateway running
- Dashboard open
- Model responds to one prompt
- Attendee knows the next step

## Step 1 — Confirm commands

Mac/Linux:

```bash
ollama --version
openclaw --version
```

Windows PowerShell:

```powershell
ollama --version
openclaw --version
```

If either command fails, move to helper lane.

## Step 2 — Confirm Ollama model

```bash
ollama list
ollama run llama3.2:3b "Reply with exactly: pong"
```

If the model is missing:

```bash
ollama pull llama3.2:3b
```

## Step 3 — Confirm OpenClaw gateway

```bash
openclaw gateway status
```

If not running, try:

```bash
openclaw onboard --install-daemon
openclaw gateway status
```

## Step 4 — Open dashboard

```bash
openclaw dashboard
```

## Step 5 — Send first prompt

Use this exact prompt:

```text
I am at OpenClaw Dev Days. Confirm my setup works, summarize what is working in three bullets, and give me one next step.
```

## Checkpoint card

Mark your status:

- Green: dashboard open + response received
- Yellow: command works but model/gateway/dashboard stuck
- Red: install or command missing

## Rescue rule

If you are not green after 10 minutes, move to helper/rescue lane. Do not burn the whole workshop on local setup.


## Next step

After this lab, configure the workshop-provided Chat GPT 5.5 Azure Foundry key. Do not start WhatsApp/mobile setup during the live lab; keep that as a facilitator demo after dashboard success.
