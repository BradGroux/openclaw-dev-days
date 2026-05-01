# OpenClaw Dev Days

OpenClaw Dev Days is the reusable workshop kit for teaching OpenClaw without turning the room into install hell.

The point is simple: get people to one real operator win fast, then show them how to extend it.

## Learn more with the community

Dev Days is the starting line, not the finish line. If you want a calmer place to ask follow-up questions, keep building with other operators, and hear about future training, join the Start Small, Think Big community:

- SSTB Discord: https://discord.gg/Gmfkm7QVSF

For deeper training, future workshops, and small-business AI/operator playbooks, sign up at:

- Start Small, Think Big: https://sstb.ai

## What this curriculum is trying to do
- Get attendees from zero to one working OpenClaw loop quickly
- Teach operator workflow, not just terminal commands
- Keep mixed-skill rooms moving together
- Leave behind reusable material other organizers can run with
- Convert curiosity into actual adoption after the event

## Core stance
- **First success beats feature coverage.** If people don’t get a working loop early, the rest doesn’t matter.
- **Dashboard first. Channels second.** Messaging integrations are cool and fragile. They are not the critical path.
- **Scenario-first beats blank slate.** Give people a concrete use case instead of a vague platform tour.
- **Workshop time is expensive.** Anything likely to explode should be preflighted, optional, or moved to helper lanes.

## Structure
- `curriculum/` — modules, labs, pacing, facilitator notes, including the Markdown thinking-layer module
- `setup-guides/` — Mac, Windows, Ollama, and Azure Foundry instructions
- `labs/` — attendee exercises with binary success checkpoints
- `helper-runbook/` — facilitator triage and rescue-lane guidance
- `troubleshooting/` — common install/model/provider failures
- `research/` — comparable events, risks, agenda lessons, workshop patterns, video ingests
- `resources/` — checklists, FAQs, templates, post-event support assets

## Event-specific content
The Texas A&M / Arnold Castro workshop content lives under:
- `appearances/tamu-openclaw-2026-05-02/`

## Current refinement priorities
1. Lock the first 30-minute success path: `ollama launch openclaw` → OpenClaw gateway → dashboard → first response
2. Use the workshop-provided Chat GPT 5.5 Azure Foundry API key for all attendees after the first Ollama/OpenClaw success
3. Keep WhatsApp/mobile channels out of live setup; demo them only after dashboard success
4. Build a strict attendee preflight and rescue plan
5. Define scenario cards and lab checkpoints
6. Create break challenges after each major block
7. Add facilitator notes for common failure modes
8. Package a first working loop lab that proves the operator model fast
9. Drive post-event conversion toward OpenClaw adoption and the SSTB community/future workshop path

## Success criteria
A good Dev Days session ends with most attendees having:
- OpenClaw installed and running
- Ollama installed and OpenClaw launched through `ollama launch openclaw`
- the workshop Chat GPT 5.5 Azure Foundry key configured after first success
- the gateway verified
- the dashboard working
- one first response received
- one memory-backed workflow or scenario sketched, tested, or partially live
- a clear next step into OpenClaw adoption and the SSTB/community follow-up path
