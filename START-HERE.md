# Start Here

Use this page to choose the shortest useful path through the repo.

## I am attending the TAMU workshop

Start with the TAMU event links:

1. [Requirements](event-specific/tamu-openclaw-2026-05-02/requirements.md)
2. [Attendee links](event-specific/tamu-openclaw-2026-05-02/attendee-links.md)
3. [Mac setup](curriculum/setup-guides/mac.md)
4. [Windows setup](curriculum/setup-guides/windows.md)
5. [First success lab](labs/first-success.md)

## I am attending another workshop

Use the evergreen setup docs first:

1. [Mac OpenClaw setup](setup-guides/openclaw-mac.md)
2. [Windows OpenClaw setup](setup-guides/openclaw-windows.md)
3. [AI-assisted install](setup-guides/ai-assisted-openclaw-install.md)
4. [First success lab](labs/first-success.md)
5. [Markdown thinking-layer lab](labs/markdown-thinking-layer.md)

## I am facilitating a workshop

Run the room from:

1. [Facilitator runbook](RUNBOOK.md)
2. [Helper install triage](helper-runbook/install-triage.md)
3. [Publication safety guidelines](PUBLICATION-SAFETY.md)
4. [Event template](event-specific/_template/README.md)

## I just want to install OpenClaw

Use the direct installer for your platform:

- [Mac setup](setup-guides/openclaw-mac.md)
- [Windows setup](setup-guides/openclaw-windows.md)
- [Microsoft Foundry key setup](setup-guides/microsoft-foundry.md)

## I want to understand the OpenClaw architecture

Use the reusable architecture docs:

- [OpenClaw architecture explainer](docs/openclaw-architecture.md)
- [OpenClaw architecture showcase HTML](docs/openclaw-architecture-showcase.html)

## I want the sample project

Use Beaver Badges:

- [Beaver Badges README](projects/beaver-badges/README.md)
- [Beaver Badges PRD](projects/beaver-badges/PRD.md)

## I am adapting this repo for a new event

Copy the event template folder, rename it with your event slug and date, then update the audience-specific assumptions:

```bash
cp -R event-specific/_template event-specific/<event-slug>-YYYY-MM-DD
```

Before committing public-facing material, run:

```bash
./scripts/publication-scan.sh
```
