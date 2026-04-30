# Facilitator Notes - InfraGard AI Agent Workshop

These notes turn the 2026-04-27 planning call into a practical run-of-show aid for Brad, Richard, Andrew, and any InfraGard host/moderator.

## Workshop Intent

This is not a generic AI overview. The prior InfraGard session already proved there is interest, but the feedback split in two directions:

- some attendees wanted the macro/security picture kept clear and accessible
- many practitioners wanted tool names, setup paths, workflow detail, and a real hands-on path

The workshop should deliberately move **macro → micro → macro**:

1. why critical infrastructure professionals should care
2. how agent workflows actually look in practice
3. how to adopt safely inside an organization

## Recommended Moderator Framing

Use this before the panel/demo starts:

> The goal today is practical literacy. OpenClaw is the learning environment, but the durable skill is understanding how agent teams work, how context and memory are managed, how to verify outputs, and how to think about security and governance before using these tools in critical infrastructure environments.

Set expectations clearly:

- attendees do not need to become developers during the session
- attendees should not paste secrets, customer data, network details, or regulated data into public tools
- hands-on followers should use sanitized examples
- tooling may behave differently by model/provider; that is part of the lesson

## Security Bookend - Opening Panel Questions

Use 2-4 of these. Keep it crisp so the live workflow demo still has enough time.

### For Richard

1. What should critical infrastructure professionals understand about threat actors experimenting with agentic AI?
2. Why does hands-on literacy matter for defenders, even if they are not planning to deploy OpenClaw directly?
3. Where do you see the biggest near-term risks: credential exposure, data leakage, vulnerable generated code, over-trust, or something else?
4. How should leaders think about the difference between personal experimentation and enterprise rollout?

### For Brad

1. Why use OpenClaw as the workshop environment instead of keeping this abstract?
2. What does "agent team" mean in plain English?
3. Why does Markdown matter as memory/context for agents?
4. What should attendees verify after an agent installs or changes something?
5. How do these concepts transfer to Microsoft Agent 365, GitHub Copilot, Codex, Claude Code, Ollama, or other ecosystems?

### Joint Discussion

- What is a safe first process for someone in security, infrastructure, OT/IT, operations, healthcare, energy, legal, or maritime?
- What should never be used as a first process?
- Where does human approval need to remain mandatory?

## Live Demo Anchors

Brad's demo should emphasize mindset and pattern more than perfect installation mechanics:

1. **Start with the web portal.** Do not spend the session on Teams/WhatsApp/Telegram/Discord integrations.
2. **Let the coding assistant help install/configure.** Example framing: "Point your coding assistant at the repo and ask it to help get OpenClaw running."
3. **Inspect what changed.** Show attendees that trust requires review.
4. **Verify the result.** Run the app, inspect config, check logs, or ask a second model to review output.
5. **Iterate when models differ.** Different providers will produce different results; that is normal.
6. **Capture memory in Markdown.** Durable plain-text context is the reusable part.

## Real-World Example Talking Points

### Heavy Haul Trucking

- 35-year-old company, historically spreadsheet/email-driven
- business quadrupled quickly because of data-center build demand
- loads shifted toward HVAC and water filtration systems for data centers
- AWS contract requires real-time load tracking through 2032
- agent-assisted workflows helped move from manual coordination to a real-time tracking system in weeks

Primary lesson: automation-first thinking lets smaller, operationally smart teams compete faster.

### Oilfield Water Testing and Chemical Manufacturing

- roughly 80-person company generating about $100M/year
- high-value field and well-site data existed but was not being analyzed effectively
- manual baseline included spreadsheets, email, and WhatsApp photos of sample/test results
- agent-assisted work created a path toward field photo capture, customer portal delivery, and faster reporting

Primary lesson: institutional knowledge plus structured automation can unlock data that smaller operators already have but are not using.

## Enterprise/Governance Closing Bookend

Close with pragmatic safety guidance, not fear:

- dog-food the workflow personally before organizational rollout
- start with low-risk documentation, planning, analysis, and checklist workflows
- use identity/governance platforms for enterprise adoption; Microsoft 365/Agent 365 is the natural path for Microsoft-heavy organizations
- protect credentials with secrets managers/environment variables, not pasted chat text
- keep humans in approval loops for operational or security-sensitive changes
- use cross-model review for high-risk outputs, especially generated code or security analysis
- document assumptions, changes, approvals, and verification steps

Useful one-liner:

> You cannot govern or defend what you do not understand, but understanding it does not mean turning it loose on production.

## Promotion / Broadcast Checklist

Before broad distribution, fill these placeholders:

- registration link
- final virtual meeting platform/link policy
- community Discord invite/link, if ready
- preferred Brad bio from prior InfraGard broadcast
- whether Richard is listed as presenter, panelist, or security discussant
- whether attendees should clone the repo or simply bookmark it

## Post-Texas A&M Follow-Up

The Texas A&M Dev Days event happens before this InfraGard workshop and should feed the final materials. Capture:

- setup issues attendees hit most often
- which model/provider path worked best for non-developers
- which explanations landed with mixed audiences
- which demo steps took longer than expected
- what should be cut from a 90-minute version

Update `attendee-prep.md` and `agenda.md` after those lessons are known.
