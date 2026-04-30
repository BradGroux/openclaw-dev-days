# InfraGard AI Agent Workshop - 2026-05-14

**Event Title:** AI Agent Teams for Critical Infrastructure: Practical Workflows, Security Guardrails, and Governed Automation  
**Format:** Virtual, approximately 60 minutes; final time per InfraGard listing  
**Presenter:** Brad Groux  
**Facilitator:** Richard Garodnick  
**Audience:** InfraGard Houston members across cybersecurity, IT, OT, infrastructure, energy, maritime, healthcare, legal, and other critical infrastructure sectors.  
**Location / registration:** https://www.linkedin.com/company/infragard-houston/  
**Organizer:** Andrew Brorsen, InfraGard Houston AI council

## Purpose

This session is a practical follow-up to Brad's prior InfraGard AI overview. Strong feedback from that session emphasized two needs:

1. **Deeper literacy:** attendees wanted tool names, workflow details, and hands-on steps rather than abstract concepts.
2. **Confidence for mixed audiences:** some attendees are senior leaders (staying macro), while others are practitioners and engineers who work in the field daily and want to go deeper.

This approximately one-hour session bridges both with a facilitator-led, workflow-first approach:

- **Security context (Richard + Brad):** frame the risk/reward of AI agents in critical infrastructure, address threat actor adoption, and establish guardrails before the workflow demo.
- **Conceptual workflow demo (Brad):** show how AI agents work, how to use Markdown as memory, common setup paths across multiple providers, and verification practices without turning the session into live setup troubleshooting.
- **Real-world examples (Brad):** logistics, oilfield/water testing, infrastructure monitoring, OT/IT coordination, and how these workflows move teams beyond spreadsheets and email.

OpenClaw is the example/demo environment for this event. The broader concepts transfer to enterprise agent ecosystems (Microsoft Agent 365), other coding assistants (GitHub Copilot, Codex, Claude Code), and agentic AI platforms broadly.

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
| **Welcome and context** | 5 min | Richard + Brad | Recap prior AI session feedback and set expectations for a practical one-hour session |
| **Security and critical infrastructure context** | 10 min | Richard + Brad | Frame risk/reward: threat actors are already exploring these tools; why hands-on literacy matters for CI professionals; guardrails and verification practices |
| **Agent teams and durable context** | 10 min | Brad | Agents as specialized teammates; Markdown as durable, auditable memory; trust-but-verify mindset |
| **Conceptual OpenClaw workflow demo** | 20 min | Brad | Show the agent workflow pattern without spending the session on live setup; explain common paths across GitHub Copilot, Codex, Claude Code, Ollama/open models |
| **Real-world use cases and governance** | 10 min | Brad + Richard | Critical infrastructure patterns, identity, credential safety, human approval loops, and staged rollout practices |
| **Q&A and close** | 5 min | Richard + Brad | Capture follow-ups; point attendees to repo and community Discord |

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
- Community Discord: https://discord.gg/Gmfkm7QVSF

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

Neither Brad, Richard, nor InfraGard has all the answers. Things will change, ideas will shift, and that's okay. Attendees are invited to participate in a learning community, ask questions, and help shape how these tools are used safely in critical infrastructure.
