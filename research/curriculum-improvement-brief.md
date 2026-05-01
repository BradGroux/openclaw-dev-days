# OpenClaw Dev Days Curriculum Improvement Brief

Date: 2026-05-01  
Prepared by: Ava  
Scope: curriculum update, OpenClaw via Ollama install path for Mac/PC, Azure Foundry API key configuration, and qualifying questions for Brad's follow-up conversation.

## 1. Current known context found

### Reusable OpenClaw Dev Days curriculum
- `content/openclaw-dev-days/README.md`
  - Reusable workshop kit goal: avoid install hell, get attendees to one real operator win fast, then show extension paths.
  - Current priorities already align with Brad's latest ask: first 30-minute success path, attendee preflight, scenario cards, lab checkpoints, troubleshooting, first working loop, and follow-up adoption challenge.
- `content/openclaw-dev-days/curriculum/curriculum-outline-v0.md`
  - Strong 2.5-3 hour structure: preflight, operator model, install/onboard/dashboard, memory loop, scenario lab, delegation, optional extensions, wrap-up.
  - Main gap: it is generic and does not yet include a step-by-step Ollama launch path or Azure Foundry custom-provider path.
- `content/openclaw-dev-days/research/openclaw-workshop-landscape.md`
  - Research supports a milestone-based workshop design: install -> onboard -> gateway -> dashboard -> first chat before channels or advanced integrations.
  - Key repeated lesson: first visible win in 20-30 minutes beats broad feature coverage.

### TAMU / Dev Days event-specific material
- `appearances/tamu-openclaw-2026-05-02/workshop-planning-notes-2026-04-24.md`
  - Locked context: full-day workshop, mostly students plus professionals/enthusiasts, up to 250 attendees, 2-3 helpers, reliable Wi-Fi, installs allowed, public repo acceptable.
  - Existing direction: startup-in-a-day using OpenClaw, memory, agent roles, and Beaver Badges.
- `appearances/tamu-openclaw-2026-05-02/workshop-agenda.md`
  - Current agenda runs 9 AM-5 PM with blocks for agentic AI/memory, prerequisites, OpenClaw setup, five-agent team, Beaver Badges, and showcase.
  - Strength: coherent story. Risk: 90 minutes of prerequisite/setup plus portal/WhatsApp assumptions may still become support-heavy if Ollama/OpenClaw install paths are not scripted.
- `appearances/tamu-openclaw-2026-05-02/workshop-plan-v1.md`
  - Strong teaching stance: operator vs chatbot, Obsidian as human brain, OpenClaw as operator, one clean working loop, layered base/stretch/rescue paths.
- `appearances/tamu-openclaw-2026-05-02/setup-guide-mac.md`
  - Current Mac guide covers Git, VS Code, Obsidian, GitHub, WhatsApp, and a memory note.
  - Gap: does not include explicit Ollama install, `ollama launch openclaw`, OpenClaw install verification, gateway verification, dashboard, or Azure Foundry.
- `appearances/tamu-openclaw-2026-05-02/setup-guide-windows.md`
  - Current Windows guide mirrors Mac with Winget for Git/VS Code/Obsidian.
  - Gap: does not choose native Windows vs WSL2 for OpenClaw, does not include Ollama, OpenClaw launch, gateway, dashboard, or Azure Foundry.
- `appearances/tamu-openclaw-2026-05-02/challenge-prompts.md`
  - Good block-level prompts, but should add install verification checkpoints and one model-provider smoke test.
- `appearances/tamu-openclaw-2026-05-02/openclaw-dev-days-repo-structure.md`
  - Good reusable repo structure. Should add `troubleshooting/`, `setup-guides/ollama-mac.md`, `setup-guides/ollama-windows.md`, `setup-guides/azure-foundry.md`, and `labs/first-success.md`.

### Brain mirror / related references found
- `Brain/dm-bg/appearances/tamu-openclaw-2026-05-02/*`
  - Brain mirrors the TAMU materials above. I did not write to Brain per instruction.
- `Brain/dm-bg/clients/wildcat-heavy-haul/meetings/2026-04-14-collin-openclaw-working-session.md`
  - Mentioned in existing plans as calibration: practical starting point, simple working loop, avoid complicated automation first.
- `memory/2026-04-30.md`
  - Notes that InfraGard materials should not reuse TAMU-specific lessons. Relevant only as a boundary: keep TAMU/Dev Days content reusable, but do not blindly transfer it to other audiences.

### External docs consulted for install/provider accuracy
- `https://docs.openclaw.ai/install`
  - OpenClaw supports macOS, Linux, native Windows, and WSL2; WSL2 is more stable for Windows.
  - Recommended install: installer script, with `openclaw onboard --install-daemon`, `openclaw --version`, `openclaw doctor`, `openclaw gateway status`.
- `https://docs.openclaw.ai/start/getting-started`
  - Canonical first success path: install, onboarding, gateway status, dashboard, first message.
- `https://docs.openclaw.ai/start/wizard`
  - Onboarding supports QuickStart vs Advanced, model/auth selection, workspace, gateway, channels, daemon, health check, and skills.
- `https://docs.ollama.com/integrations/openclaw`
  - `ollama launch openclaw` can install/configure OpenClaw, select Ollama local/cloud model, install gateway daemon, set primary model, enable Ollama web search, and open the TUI.
- `https://raw.githubusercontent.com/openclaw/openclaw/main/docs/providers/ollama.md`
  - OpenClaw uses Ollama native API. Do not use `/v1` OpenAI-compatible URL for Ollama because tool calling can break.
  - Local/LAN Ollama can use `ollama-local`; Ollama Cloud requires real `OLLAMA_API_KEY`.

## 2. Recommended curriculum modules and agenda flow

### Strong recommendation
Keep the startup-in-a-day story, but put a hard install/onboarding spine under it. The day should be split into three lanes:

1. **Base lane:** everyone reaches OpenClaw first chat through Ollama.
2. **Stretch lane:** faster attendees configure Azure Foundry and/or start Beaver Badges earlier.
3. **Rescue lane:** stuck attendees use prebuilt screenshots, facilitator demo, or a web portal fallback so they keep learning even if local setup fails.

### Updated full-day agenda

#### 9:00-9:35 — Why agents, why memory, why OpenClaw
Outcome: attendees understand the operator model before touching installs.

Key points:
- Chatbot vs operator.
- OpenClaw as local-first gateway + tools + memory + sessions.
- Human as orchestrator.
- Beaver Badges as the shared working example.

Checkpoint:
- Attendee writes one sentence: "The workflow I want an agent to help with is ____."

#### 9:35-10:15 — Machine preflight and setup lanes
Outcome: every attendee is classified green/yellow/red before deep build time starts.

Green means:
- Git works.
- VS Code or editor available.
- Browser works.
- Ollama installed or ready.
- OpenClaw can launch or install.
- One model path is available: Ollama Cloud/local or Azure Foundry.

Artifacts:
- Mac setup guide.
- Windows setup guide.
- Preflight checklist.
- Helper triage card.

#### 10:15-11:00 — Install OpenClaw through Ollama and reach first response
Outcome: first visible win.

Core path:
- Install Ollama.
- Launch OpenClaw from Ollama.
- Select a model.
- Let onboarding configure gateway + primary model.
- Verify gateway.
- Open dashboard.
- Send first message.

Milestones:
- `ollama --version` works.
- `openclaw --version` works.
- `openclaw gateway status` shows running/listening.
- `openclaw dashboard` opens.
- First AI response received.

Do not introduce WhatsApp, Teams, Discord, GitHub workflows, or source installs before this checkpoint.

#### 11:00-11:30 — Markdown memory loop
Outcome: attendees see why OpenClaw is more than a chat box.

Hands-on:
- Create workshop folder.
- Create `MEMORY.md` or `memory.md`.
- Add workshop goal, preferred project, one useful personal/work context fact.
- Ask OpenClaw to read/summarize/update that memory.
- Save one improved note.

#### 11:30-12:15 — Lunch + rescue lane
Outcome: unblock as many machines as possible without derailing the room.

Use lunch for:
- PATH fixes.
- Windows WSL2 guidance.
- Ollama sign-in/API key issues.
- Azure Foundry key setup for all attendees after first OpenClaw/Ollama success, using the workshop-provided Chat GPT 5.5 key.

#### 12:15-12:50 — Provider configuration: Ollama baseline + Azure Foundry option
Outcome: attendees understand model provider choices and how API keys fit.

Teach:
- Ollama local vs Ollama Cloud.
- Azure Foundry as managed model endpoint path.
- Why API keys must be treated as credentials, not pasted into shared docs/screenshots.
- Provider smoke tests.

Base attendees stay on Ollama. Advanced attendees configure Azure Foundry.

#### 12:50-1:30 — First useful operator task
Outcome: one real artifact, not just a setup success.

Lab options:
- Summarize workshop goal and convert it into action items.
- Create a project brief for a tiny app.
- Turn a rough note into a structured README.
- Ask for a 7-day build plan.

#### 1:30-2:15 — Build the five-agent team
Outcome: attendees define specialist roles without overcomplicating execution.

Agent roles:
- Market Researcher.
- Idea Validator.
- Coder.
- Project Manager.
- Outreach Assistant.

Deliverable:
- `agents/startup-team.md` with role, responsibilities, boundaries, and example prompt for each agent.

#### 2:15-3:45 — Beaver Badges build lab
Outcome: attendees use the agent team to build or shape a concrete product.

Keep it scoped:
- PRD or feature brief.
- JSON data model.
- Simple app scaffold or static mockup.
- Badge logic.
- Roadmap list.

This block should have checkpoints every 15 minutes.

#### 3:45-4:15 — Optional channels and command center demo
Outcome: show adoption multiplier without making it critical path.

Show, do not require:
- WhatsApp/mobile access.
- Messaging as ambient operator interface.
- Veritas Kanban or task tracking as command center example.

#### 4:15-5:00 — Showcase, recovery, and 30-day challenge
Outcome: leave with momentum.

Deliverables:
- One thing built.
- One thing learned.
- One blocker identified.
- One 30-day commitment.

## 3. Step-by-step OpenClaw via Ollama install path

### Mac path

Preflight:
```bash
sw_vers
node --version || true
git --version || true
```

Install basics:
```bash
# If Homebrew is not installed, install it from https://brew.sh first.
brew install git
brew install --cask visual-studio-code
brew install --cask obsidian
brew install --cask ollama
```

Start/sign in to Ollama:
```bash
ollama --version
ollama signin
```

Launch OpenClaw through Ollama:
```bash
ollama launch openclaw
```

Recommended model choices for workshop baseline:
- Cloud: `kimi-k2.5:cloud` or another current Ollama Cloud model with strong tool/context support.
- Local: only if machine has enough memory/VRAM. Use local as optional, not the room default.

Verify OpenClaw:
```bash
openclaw --version
openclaw gateway status
openclaw dashboard
```

First prompt:
```text
I am at OpenClaw Dev Days. Help me confirm this setup works. Reply with a short checklist of what is working and one useful next step.
```

If `openclaw` is not found:
```bash
npm prefix -g
echo "$PATH"
```
Then open a new terminal or add the npm global bin path to `~/.zshrc`.

### Windows PC path

Recommendation: use WSL2 if the audience can handle it. Native Windows is supported, but WSL2 is more stable for the full OpenClaw experience.

#### Option A — Windows native PowerShell baseline

Install basics:
```powershell
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Obsidian.Obsidian -e
winget install --id Ollama.Ollama -e
```

Restart PowerShell, then verify:
```powershell
git --version
ollama --version
```

Sign in and launch:
```powershell
ollama signin
ollama launch openclaw
```

Verify OpenClaw:
```powershell
openclaw --version
openclaw gateway status
openclaw dashboard
```

#### Option B — WSL2 stable path

Install WSL2:
```powershell
wsl --install
```

Restart if prompted. In Ubuntu/WSL:
```bash
sudo apt update
sudo apt install -y git curl
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

Ollama options under WSL2:
- Use Ollama for Windows as host-backed Ollama if networking is working.
- Or install Ollama inside WSL if the lab has time and support.
- For a big room, native Ollama for Windows + `ollama launch openclaw` is simpler; WSL2 is the fallback for OpenClaw stability.

### Install fallback if Ollama launch fails

Mac/Linux/WSL2:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

Windows PowerShell:
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

### Troubleshooting buckets

- `ollama` command missing: app install failed or shell path not refreshed.
- `openclaw` command missing: OpenClaw install did not complete or global bin path missing.
- Gateway not running: rerun onboarding or `openclaw gateway status`; use helper lane.
- Model fails: wrong provider auth, missing Ollama sign-in/API key, unavailable cloud model, or local model too weak for agentic tool use.
- Windows path issues: move attendee to WSL2 or demo/rescue lane.

## 4. Azure Foundry API key configuration

### Teaching stance
Azure Foundry should be a stretch/managed-provider lane, not the default path for every attendee unless Brad confirms everyone has access to the same Azure project and keys. API key distribution in a 250-person room is a security and support problem.

### What attendees need
- Azure Foundry project or endpoint URL.
- Model deployment/model ID.
- API key.
- Confirmation of API compatibility path, usually OpenAI-compatible chat/completions or responses depending on endpoint.

### Environment-variable pattern
Use environment variables or OpenClaw secret/auth profile flows. Do not paste real keys into slides, repos, screenshots, or shared config.

Mac/Linux/WSL2:
```bash
export AZURE_FOUNDRY_API_KEY="paste-your-key-here"
```

Windows PowerShell, current session:
```powershell
$env:AZURE_FOUNDRY_API_KEY="paste-your-key-here"
```

Windows PowerShell, persistent user environment:
```powershell
setx AZURE_FOUNDRY_API_KEY "paste-your-key-here"
```
Then open a new terminal.

### OpenClaw custom provider pattern
Use OpenClaw's custom provider configuration for Azure Foundry. Example shape, with placeholder values only:

```json5
{
  "env": {
    "AZURE_FOUNDRY_API_KEY": "${AZURE_FOUNDRY_API_KEY}"
  },
  "models": {
    "mode": "merge",
    "providers": {
      "azure-foundry-openai": {
        "baseUrl": "https://<resource>.services.ai.azure.com/api/projects/<project>/openai/v1",
        "apiKey": "${AZURE_FOUNDRY_API_KEY}",
        "api": "openai-completions",
        "models": [
          {
            "id": "<model-or-deployment-id>",
            "name": "Azure Foundry Model",
            "api": "openai-completions",
            "reasoning": false,
            "input": ["text"],
            "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
            "contextWindow": 200000,
            "maxTokens": 16384
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "azure-foundry-openai/<model-or-deployment-id>"
      }
    }
  }
}
```

### Verification steps
```bash
openclaw doctor
openclaw models list --provider azure-foundry-openai
openclaw models set azure-foundry-openai/<model-or-deployment-id>
openclaw gateway restart
openclaw dashboard
```

Smoke-test prompt:
```text
Reply with exactly one sentence confirming the Azure Foundry model is responding through OpenClaw.
```

### Risks
- Endpoint shape varies by Azure Foundry resource/project configuration.
- Deployment/model ID naming must match exactly.
- Keys should not be shared casually with students unless quota/cost controls are in place.
- Azure Foundry is a good instructor/facilitator demo path unless attendee access is pre-provisioned.

## 5. Recommended hands-on labs and attendee outputs

### Lab 1 — First Success
Output:
- Screenshot or checked box: gateway running, dashboard open, first response received.

Attendee artifact:
- `setup-check.md` with install status, model path, and one issue if blocked.

### Lab 2 — Memory Seed
Output:
- `MEMORY.md` or `memory.md` with workshop goal, preferred project, and agent need.

Prompt:
```text
Read my workshop memory note and turn it into a cleaner project goal with three next actions.
```

### Lab 3 — Operator Loop
Output:
- `workshop-goal-summary.md` containing a goal, constraints, first task, and done criteria.

### Lab 4 — Five-Agent Startup Team
Output:
- `startup-team.md` with five agents, each with role, responsibility, boundaries, and first prompt.

### Lab 5 — Beaver Badges MVP
Output options by skill level:
- Beginner: PRD + feature list + JSON data model.
- Intermediate: Vite app scaffold with static data.
- Advanced: badge logic, progress view, and starter test/checklist.

### Lab 6 — Provider Stretch: Azure Foundry
Output:
- Provider configuration completed or documented blocker.
- One successful smoke-test response.

### Lab 7 — 30-Day Build Commitment
Output:
- `30-day-plan.md` with one shippable goal, weekly checkpoints, and first action after the workshop.

## 6. Content gaps and risks

### Gaps
- Existing Mac/Windows setup guides do not yet include Ollama install/launch or OpenClaw CLI verification.
- Existing agenda says OpenClaw portal/WhatsApp, but Brad's current goal calls for OpenClaw via Ollama and Azure Foundry. The curriculum needs to reconcile these paths.
- No standalone Azure Foundry handout exists yet.
- No explicit rescue lane artifact exists for people who cannot install locally.
- No facilitator runbook exists for a 250-person install flow.
- Challenge prompts are good, but lack binary technical checkpoints.
- The repo structure needs a troubleshooting directory and first-success lab.

### Risks
- **Install hell:** highest risk. Mitigate with preflight, helper lane, and one default path.
- **Windows drift:** native Windows, WSL2, PowerShell policy, PATH, and app installers will vary. Mitigate by choosing one default and one fallback.
- **Ollama local model quality:** local models may be too weak or context-limited for agentic workflows. Use Ollama Cloud as the default unless machines are vetted.
- **API key leakage:** Azure Foundry keys in slides/chat/repos/screenshares would be bad. Use placeholders and environment variables.
- **Quota/cost spike:** shared Azure/Ollama keys across a large room can burn quota fast. Use individual accounts or controlled workshop keys with limits.
- **Too many integration surfaces:** WhatsApp, Azure, Ollama, GitHub, app build, and OpenClaw channels in one day can overwhelm attendees. Keep channels optional.
- **Advanced attendees get bored:** give stretch cards: Azure Foundry, Beaver Badges feature extension, prompt/agent refinement, test generation.
- **Beginners fall behind silently:** use checkpoint cards and color status: green/yellow/red.

## 7. Qualifying questions for Brad

### Audience
1. Who is the actual primary audience now: students, developers, entrepreneurs, IT pros, or mixed?
2. How technical can we assume attendees are with terminal/PowerShell?
3. Should beginners be expected to install locally, or is observing/following through a portal acceptable?
4. Are attendees bringing their own laptops? Any managed devices with install restrictions?
5. What percentage do we expect on Windows vs Mac?
6. Are students allowed/expected to create Ollama, GitHub, Azure, or OpenClaw accounts before the event?
7. Should the day optimize for learning OpenClaw, building Beaver Badges, or understanding agentic workflows broadly?

### Logistics
1. How many helpers will be in the room during setup?
2. Is there an install clinic before the official start or during lunch?
3. Is Wi-Fi confirmed for 250 people doing downloads/model traffic?
4. Can we send prework 3-5 days before the event?
5. Will attendees have power at every seat?
6. Will the room have projector visibility good enough for terminal commands?
7. Is recording allowed, and can setup troubleshooting be published afterward?
8. Do we need printed handouts, or is repo/QR enough?
9. What is the hard stop time for setup before switching to demo/rescue mode?

### Tooling
1. Is `ollama launch openclaw` the official baseline Brad wants for both Mac and PC?
2. For Windows, should the default path be native PowerShell or WSL2?
3. Which Ollama model should be the default: `kimi-k2.5:cloud`, another cloud model, or a local model?
4. Will attendees use their own Ollama accounts/API keys, or will Digital Meld provide temporary access?
5. Is Azure Foundry for all attendees, only facilitators, or only advanced/stretch lane?
6. What exact Azure Foundry endpoint and model/deployment ID should the handout use, with placeholders if public?
7. Should WhatsApp remain in-scope for live setup, or be demo-only after dashboard success?
8. Should GitHub repo cloning/scaffolding happen live, or should the Beaver Badges starter repo be downloadable as a zip?
9. Are Node/npm installs acceptable on managed student laptops?
10. Should we include source install instructions at all? Recommendation: no, except contributor appendix.

### Business goals
1. What is the desired follow-up action: community signup, GitHub stars, OpenClaw adoption, Digital Meld leads, Start Small, Think Big audience growth, or future workshops?
2. Is this positioned as OpenClaw Dev Days, Digital Meld workshop, TAMU entrepreneurship session, or startup build day?
3. Should the curriculum be reusable for future paid/client workshops?
4. What attendee profile counts as a qualified lead or strong follow-up candidate?
5. Should we collect attendee build goals and contact info?
6. Is the 30-day challenge meant to drive a public showcase, office hours, or private Discord/community follow-up?
7. Should Azure Foundry be framed as enterprise-ready path and Ollama as accessible local/cloud path?
8. Are there sponsors/partners whose tooling must be mentioned or avoided?

## 8. Suggested artifacts to create next

### Must create before the next event/conversation
1. `curriculum/setup-guides/ollama-mac.md`
   - Mac install, Ollama sign-in, `ollama launch openclaw`, gateway/dashboard verification, troubleshooting.
2. `curriculum/setup-guides/ollama-windows.md`
   - Native Windows and WSL2 paths, with a clear default recommendation.
3. `curriculum/setup-guides/azure-foundry.md`
   - Placeholder-safe custom provider setup, environment variable handling, verification, key safety.
4. `curriculum/labs/first-success.md`
   - Binary checklist for first response.
5. `curriculum/labs/memory-loop.md`
   - Starter memory note and prompt sequence.
6. `curriculum/helper-runbook/install-triage.md`
   - Green/yellow/red lanes, common failure buckets, time-box rules.
7. `curriculum/troubleshooting/openclaw-ollama.md`
   - `ollama` missing, `openclaw` missing, gateway down, dashboard won't open, model auth failures.
8. `slides/openclaw-dev-days-core-deck.md` or PPTX outline
   - 20-25 slides max, with setup screenshots and QR links.
9. `projects/beaver-badges/starter/`
   - Starter repo or zip with README, data, app scaffold, and stretch tasks.
10. `resources/preflight-email.md`
   - Send before event with accounts, installs, machine requirements, and what to do if blocked.

### Nice-to-have
- One-page printable setup checklist.
- QR landing page with all links.
- Facilitator timing card.
- Post-event email template.
- 30-day challenge tracker.
- FAQ: "What if my laptop cannot install OpenClaw?"
- Screenshots for Mac, Windows, Ollama, dashboard, gateway status.

## 9. Bottom-line recommendation

Update the curriculum around this spine:

**Ollama launch -> OpenClaw gateway -> dashboard first chat -> memory loop -> agent team -> Beaver Badges build -> optional Azure/WhatsApp stretch -> 30-day challenge.**

Do not let Azure Foundry or messaging setup become the main path unless Brad confirms controlled credentials, quota limits, and helper capacity. The install story should be boring, repeatable, and heavily checkpointed. The memorable part should be the operator loop and Beaver Badges build, not 90 minutes of PATH hell.

---

## Addendum: Brad's decisions on qualifying questions (2026-05-01)

- `ollama launch openclaw` is the official baseline for both Mac and Windows.
- Windows default path: native Windows PowerShell. WSL2 is the rescue lane for PATH, permission, daemon, or installer failures.
- Azure Foundry is for everyone in the workshop after first OpenClaw/Ollama success. Attendees will receive a workshop-provided Chat GPT 5.5 API key.
- Deployment/model wording: use Chat GPT 5.5 and the exact instructor-provided Azure deployment name in OpenClaw as `microsoft-foundry/<deployment-name>`. Do not guess from the marketing model label.
- WhatsApp should be removed from live setup and kept as a demo after dashboard success.
- Primary post-event conversion goal: OpenClaw adoption plus SSTB/community, including future workshops.

