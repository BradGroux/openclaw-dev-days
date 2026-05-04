# Facilitator Runbook

Use this file for event-specific room operations. Use the root [RUNBOOK.md](../../RUNBOOK.md) for the reusable facilitator flow.

## Before the room opens

- Confirm projector, audio, and Wi-Fi.
- Open the repo and attendee links page.
- Confirm setup guides are easy to reach.
- Prepare a rescue/demo machine.
- From the repo root, run the publication scan:

```bash
./scripts/publication-scan.sh
```

## Opening links to show

- Attendee links: `event-specific/<event-folder>/attendee-links.md`
- First success lab: `labs/first-success.md`
- Markdown thinking lab: `labs/markdown-thinking-layer.md`

## First success metric

By the end of the setup block, most attendees should have:

- OpenClaw installed and onboarded
- model provider configured
- dashboard open
- first response received

## Helper lanes

- Green: keep building
- Yellow: quick triage
- Red: rescue/demo path

## Public safety checkpoint

> Do not put secrets, API keys, private data, sensitive personal notes, or anything confidential in a public repository, shared file, screenshot, or projected prompt. When in doubt, keep it local.
