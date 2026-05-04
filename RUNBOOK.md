# Facilitator Runbook

Use this as the one-page control panel for running an OpenClaw Dev Days session.

## Before the event

1. Pick or create the event folder under `event-specific/`.
2. Start from [the event template](event-specific/_template/README.md) if this is a new workshop.
3. Confirm attendee requirements, setup guides, agenda, and helper lanes are linked from the event folder.
4. From the repo root, run the publication scan:

```bash
./scripts/publication-scan.sh
```

5. Review [publication safety](PUBLICATION-SAFETY.md).

## Room setup

Have these open before attendees arrive:

- event attendee links
- event agenda
- [First success lab](labs/first-success.md)
- [Markdown thinking-layer lab](labs/markdown-thinking-layer.md)
- [Helper install triage](helper-runbook/install-triage.md)
- [Fallback plan template](event-specific/_template/fallback-plan.md)

## First success target

Protect the first OpenClaw win:

1. OpenClaw installed
2. model provider selected during onboarding
3. gateway running
4. dashboard open
5. first response received

If an attendee is not green after 10 minutes, move them to helper, pairing, or demo mode.

## Safety script

Repeat this before GitHub, screenshots, shared files, or projected prompts:

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.

## Helper lanes

- Green: attendee is moving; keep them building.
- Yellow: one or two issues; helper gets one time-boxed attempt.
- Red: managed laptop, account block, no admin rights, or repeated install failure; move to rescue/demo path.

Use [helper-runbook/install-triage.md](helper-runbook/install-triage.md) for command checks.

## Drop if behind

Cut these first:

1. Messaging/mobile setup
2. deep provider troubleshooting
3. extended Git/GitHub instruction
4. full agent-team buildout
5. optional app roadmap discussion

Protect these:

1. first OpenClaw response
2. Markdown context file
3. one useful agent instruction
4. one practical scenario or sample project pass
5. clear community/follow-up path

## Closeout

Before attendees leave, point them to:

- their workshop memory note
- their agent plan
- the sample project
- the community link
- one 30-day build goal
