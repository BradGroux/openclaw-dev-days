# OpenClaw Dev Days

OpenClaw Dev Days is a reusable workshop kit for teaching agentic workflows, Markdown-based memory, orchestration, and product building with OpenClaw.

The point is simple: get people to one real operator win fast, then show them how to extend it.

This repo is designed to support the Texas A&M workshop first, then expand into a repeatable format that other communities can use.

## What participants learn

- how to think about AI agents as specialized teammates
- why Markdown memory matters
- how to use OpenClaw through the web portal and chat surfaces
- how to orchestrate a five-agent startup team
- how to turn an idea into a scoped product and working app

## Featured workshop project

**Beaver Badges** — a fan-style app that tracks road trip stops, location visits, and achievement badges.

## Structure

- `curriculum/` — agendas, setup guides, challenges, agent role definitions
- `setup-guides/` — focused Ollama, OpenClaw, and Azure Foundry setup paths
- `labs/` — attendee exercises with binary success checkpoints
- `helper-runbook/` — facilitator triage and rescue-lane guidance
- `troubleshooting/` — common install/model/provider failures
- `research/` — comparable events, risks, agenda lessons, workshop patterns, video ingests
- `projects/beaver-badges/` — PRD, seed data, and app scaffold
- `projects/infragard-agent-team/` — critical infrastructure agent-team workshop project
- `examples/` — prompts, memory examples, orchestrator patterns
- `event-specific/` — materials tied to a specific event delivery
- `.github/` — agent and prompt definitions inspired by workshop agent patterns

## First event

- Texas A&M OpenClaw Workshop
- May 2, 2026

## Current refinement priorities

1. Lock the first 30-minute success path: Ollama → OpenClaw gateway → dashboard → first response
2. Keep Azure Foundry and messaging channels as stretch lanes unless credentials/support are pre-provisioned
3. Build a strict attendee preflight and rescue plan
4. Define scenario cards and lab checkpoints
5. Create break challenges after each major block
6. Add facilitator notes for common failure modes
7. Package a first working loop lab that proves the operator model fast
8. Add a 7-day post-event adoption challenge so momentum survives the workshop

## Success criteria

A good Dev Days session ends with most attendees having:
- OpenClaw installed and running
- Ollama installed or a managed provider path confirmed
- the gateway verified
- the dashboard working
- one first response received
- one memory-backed workflow or scenario sketched, tested, or partially live
- a clear next step for the next 7 days

## Running Beaver Badges

```bash
cd projects/beaver-badges/app
npm install
npm run dev
```

## Upcoming event-specific materials

- InfraGard AI Agent Workshop — see `event-specific/infragard-ai-agent-workshop-2026-05-14/`
