# InfraGard AI Agent Workshop - 2026-05-14

**Event Title:** AI Agent Teams for Critical Infrastructure: Hands-On OpenClaw Workflows and Security Guardrails  
**Format:** Virtual, 90 minutes (11:30 AM – 1:00 PM CDT)  
**Primary presenters:** Brad Groux and Richard Garodnick (panel format)  
**Audience:** InfraGard Houston members across cybersecurity, IT, OT, infrastructure, energy, maritime, healthcare, legal, and other critical infrastructure sectors.  
**Location:** Virtual (Zoom or InfraGard platform)  
**Organizer:** Andrew Brorsen, InfraGard Houston AI council

## Purpose

This session is a practical follow-up to Brad's prior InfraGard AI overview. Strong feedback from that session emphasized two needs:

1. **Deeper literacy:** attendees wanted tool names, workflow details, and hands-on steps rather than abstract concepts.
2. **Confidence for mixed audiences:** some attendees are senior leaders (staying macro), while others are practitioners and engineers who work in the field daily and want to go deeper.

This 90-minute workshop bridges both with a panel-based approach:

- **Security context (Brad + Richard):** frame the risk/reward of AI agents in critical infrastructure, address threat actor adoption, and establish guardrails before diving into hands-on work.
- **Hands-on workflow (Brad):** show how AI agents work, how to use Markdown as memory, setup paths across multiple providers, and verification practices.
- **Real-world examples (Brad):** logistics, oilfield/water testing, infrastructure monitoring, OT/IT coordination, and how these workflows move teams beyond spreadsheets and email.

OpenClaw is the hands-on learning environment for this event. The broader concepts transfer to enterprise agent ecosystems (Microsoft Agent 365), other coding assistants (GitHub Copilot, Codex, Claude Code), and agentic AI platforms broadly.

## What Attendees Will Learn

- how to think automation-first and agent-first
- how AI agents can act as specialized teammates
- why Markdown is useful as simple, auditable agent memory
- how to approach setup with GitHub Copilot, Codex, Claude Code, Ollama/open models, or other coding assistants
- how to verify agent work instead of blindly trusting it
- how agentic workflows apply to critical infrastructure, cybersecurity, infrastructure operations, OT/IT, and business process improvement
- what security guardrails matter before enterprise adoption

## Suggested Run of Show

| Segment | Time | Presenter(s) | Purpose |
|---|---:|---|---|
| **Welcome and context** | 5 min | Brad + Andrew | Recap prior AI session feedback and set expectations for 90-minute deep dive |
| **Security and critical infrastructure context** | 10-15 min | Brad + Richard (panel) | Frame risk/reward: threat actors are already exploring these tools; why hands-on literacy matters for CI professionals; guardrails and verification practices |
| **OpenClaw and agent-team workflow** | 35-45 min | Brad | Agents as specialized teammates; Markdown as durable, auditable memory; multi-provider setup paths (GitHub Copilot, Codex, Claude Code, Ollama/open models); trust-but-verify mindset |
| **Real-world use cases** | 10-15 min | Brad | Heavy haul trucking (from spreadsheets to real-time tracking for AWS contracts); oilfield water testing (automating field reporting and sample analysis); log triage and infrastructure monitoring; OT/IT coordination |
| **Enterprise and next steps** | 10-15 min | Brad + Richard | Governance, identity, credential safety, human approval loops; staged rollout practices; when and how to move from personal use to organizational rollout |
| **Q&A and close** | 5-10 min | Brad + Richard + Andrew | Capture follow-ups; point attendees to repo, community Discord, and future events |

## Recommended Prep

Attendees who want to follow along hands-on should:

1. Review [`attendee-prep.md`](attendee-prep.md) and [`agenda.md`](agenda.md).
2. Set up a coding assistant (GitHub Copilot, Codex, Claude Code, or another) on your machine.
3. Bring one low-risk process from work or life that is repetitive or poorly documented.
4. Optional: clone the repo and create a `memory.md` file to take notes during the session.

Platform-specific setup guides:

- Mac: [`../../curriculum/setup-guides/mac.md`](../../curriculum/setup-guides/mac.md)
- Windows: [`../../curriculum/setup-guides/windows.md`](../../curriculum/setup-guides/windows.md)

Project reference:

- [`projects/infragard-agent-team`](../../projects/infragard-agent-team) — template for designing your own agent team
- [`facilitator-notes.md`](facilitator-notes.md) — moderator prompts, security bookends, demo anchors, and follow-up checklist

Resource hub: https://github.com/BradGroux/openclaw-dev-days

## Core Messages

### Primary (Brad)

**The technology will change. The mindset matters more.**

The durable skill is learning how to:

- break work into clear processes
- give agents specialized roles
- preserve context in plain, auditable files (Markdown)
- verify output before trusting it
- think automation-first and agent-first
- give people faith to figure things out themselves

For critical infrastructure, that literacy is now part of understanding both opportunity and risk.

### Secondary (Richard)

**Threat actors are already here.**

Threat actors adopt cutting-edge tools faster and more creatively than defenders. Understanding how to use agentic workflows safely is essential for critical infrastructure professionals who want to stay ahead—not just using the tools, but understanding their risks and guardrails.

### Tertiary (Cross-theme)

**This is figuring it out together.**

Neither Brad, Richard, nor InfraGard has all the answers. The first OpenClaw Dev Days is this weekend (Texas A&M, 200+ attendees); the InfraGard workshop is the second. Things will change, ideas will shift, and that's okay. Attendees are invited to participate in a learning community, ask questions, and help shape how these tools are used safely in critical infrastructure.
