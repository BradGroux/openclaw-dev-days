# Agenda - InfraGard AI Agent Workshop

**Event:** InfraGard Houston AI Agent Teams Session  
**Target date:** 2026-05-14  
**Recommended duration:** Approximately 60 minutes  
**Theme:** Agent-based practical workflows with security bookends for critical infrastructure.  
**Registration:** https://www.linkedin.com/company/infragard-houston/  
**Facilitator:** Richard Garodnick

## 0:00-0:05 - Welcome and Why This Follow-Up Exists

- Prior AI overview generated strong feedback: attendees wanted more depth, tool names, and practical steps.
- This workshop bridges strategy and practice.
- OpenClaw will be used as the learning environment, but the concepts transfer broadly.

## 0:05-0:15 - Security and Critical Infrastructure Context

**Facilitator / presenter:** Richard Garodnick + Brad Groux

**Key points:**

- AI agents are being actively explored by builders, operators, AND threat actors.
- Threat actors adopt cutting-edge tools faster and more creatively than defenders—they have fewer guardrails and more flexibility.
- Critical infrastructure professionals need to understand agentic workflows to stay ahead, not just as practitioners but as defenders.
- Why hands-on literacy matters:
  - you can't defend what you don't understand
  - betting your organization on a tool without testing it is risky
  - the opposite (avoiding it entirely) leaves you behind
- Risks to keep in view:
  - credential exposure (API keys, secrets in pasted data)
  - sensitive data leakage (customer records, operational details, security details)
  - unsafe automation (running generated code without review)
  - over-trust in generated output
  - vulnerable or incorrect generated code
  - weak auditability (no trace of what the agent did or why)
  - model/provider inconsistency (output varies by tool, model, version)
- Working principle: **experiment hands-on, but verify everything.**
- The SpaceX vs. Boeing analogy: you'll have failures if you're shipping fast, but if you learn from them and maintain due diligence, that's acceptable. Being too cautious (no launches) is also a failure.

## 0:15-0:25 - Agent Teams and Markdown Memory

- What an AI agent team is.
- Why specialized roles outperform one generic assistant.
- Why Markdown is useful as durable memory:
  - human-readable
  - portable
  - easy to version
  - easy for agents to parse
  - auditable
- The human remains the orchestrator.

## 0:25-0:45 - Conceptual OpenClaw Workflow Demo

- OpenClaw as an example command center for personal and team workflows.
- Keep this conceptual and workflow-focused; do not burn the hour on live setup troubleshooting.
- Web portal first; chat surfaces later.
- Example setup paths:
  - GitHub Copilot
  - Codex
  - Claude Code
  - Ollama/open model paths
  - manual setup for people who prefer deterministic commands
- Demonstrate the mindset:
  - ask the agent/coding assistant to help install or configure
  - inspect what it changed
  - verify the result
  - iterate when output differs by provider

## 0:45-0:55 - Critical Infrastructure Use Cases

**Presenter:** Brad Groux

**Real-world examples** from current client work:

### Heavy haul trucking (35-year-old company, now $X M/year)

- **Challenge:** Quadrupled business overnight due to data center builds; now moving HVAC systems and water filtration systems instead of generic cargo.
- **AWS requirement:** Real-time load tracking (AWS is their biggest contract through 2032).
- **Manual baseline:** Spreadsheets, emails, no visibility into live shipments.
- **Solution:** Used agentic workflows to build real-time tracking system in weeks instead of months.
- **Outcome:** Could scale up fast, reduce overhead, meet customer requirements.
- **Key insight:** The tools unlock speed and enable small teams to compete with larger operations.

### Oilfield water testing and chemical manufacturing (80-person company, $100M/year)

- **Challenge:** High demand driven by fracking and operational complexity; still using spreadsheets and emails for most processes.
- **Data problem:** Tons of well-site data exists but isn't being analyzed (unlike large operators who do this routinely).
- **Manual baseline:** Scientific data from field samples; plastic cups with water test results shared via WhatsApp.
- **Solution:** Used agents to build a portal and automated reporting system; field teams now submit photos that auto-generate customer reports.
- **Outcome:** Built in weeks instead of months/years; freed up teams from manual data entry; improved customer experience.
- **Key insight:** Small organizations with 20+ years of institutional knowledge can now leverage their data in ways large companies already do.

### Broader use cases

- Log triage and infrastructure monitoring
- SOP/runbook generation and improvement
- Incident response preparation and checklists
- Vulnerability and security analysis (with cross-validation)
- Predictive maintenance and operational analysis
- OT/IT coordination and documentation
- Project planning and process mapping
- Field data collection and automation

**Core theme:** These tools help teams move from manual, email/spreadsheet-based processes to structured, data-driven automation. The speed of iteration is key: proof of concepts in days, MVPs in weeks, learning from failures quickly.

## 0:55-1:00 - Enterprise Next Steps, Governance, and Q&A

**Facilitator / presenter:** Richard Garodnick + Brad Groux

**Key points:**

### Personal experimentation before organizational rollout

- Dog-food it: use the tool yourself before rolling it out organization-wide.
- You can't defend/govern what you don't understand personally.
- Understand the tool's limitations, strengths, and risks by working with it.
- Learn what works in your specific environment (models, integrations, workflows).

### Governance and enterprise paths

- **Identity and access:** Microsoft 365 + Agent 365 or Azure ecosystem is the natural path for large organizations (Azure AD, conditional access, governed credential handling, audit logs).
- **Credential safety:** Never paste API keys, secrets, or tokens casually. Use environment variables, secrets managers, and proper isolation.
- **Data handling:** Staged rollout; human approval loops; don't assume automation is 100% safe.
- **Audit and review:** Cross-model validation; independent review for security-sensitive output; keep logs of what the agent did and why.
- **Scope:** Start with low-risk processes (documentation, analysis, drafts) before moving to operational changes.

### What's coming from Microsoft

- Nvidia announced Nemo Claw (framework with security and governance baked in) a few weeks ago.
- Microsoft is building similar capabilities for Azure Kubernetes and 365 ecosystem.
- Brad is working with Omar Shaheen (corporate VP of OpenClaw at Microsoft) on these initiatives.
- Security and governance will be built in naturally on the Microsoft stack, coming soon.

### Cross-sector adoption

- This applies to energy, maritime, healthcare, legal, and every critical infrastructure sector.
- The concepts don't change; the tooling and compliance context varies.
- InfraGard's strength is bringing these sectors together to share approaches.

### The learning community

- Community Discord: https://discord.gg/Gmfkm7QVSF
- Attendees can join to ask questions, share examples, and learn from peers.

**Closing Challenge:** Pick one low-risk process in your work or organization and document it as a Markdown SOP. Then ask an agent to help improve it, automate part of it, or turn it into a checklist. See what's possible.

## Closing Challenge

Pick one low-risk process in your work and document it as a Markdown SOP. Then ask an agent to help improve it, automate part of it, or turn it into a checklist.

## Final Constraints

- Title should be agent-based; OpenClaw is the example environment, not the headline.
- Conceptual demo only; no extended live setup.
- Do not incorporate Texas A&M lessons into this InfraGard version.
- No InfraGard-specific limits noted around recording, screenshots, repo links, or attendee follow-up materials.
