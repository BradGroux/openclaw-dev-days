# OpenClaw Dev Days Helper Runbook — Install Triage

## Prime directive

Do not let install hell eat the workshop. Helpers should move people to a working path fast, then document blockers for later.

## Status lanes

### Green

- `ollama --version` works
- `openclaw --version` works
- gateway status works
- dashboard opens
- first response received

Action: keep building.

### Yellow

- one or two pieces broken
- likely fixable within 10 minutes

Action: helper works one issue, then either green or rescue.

### Red

- managed laptop blocks installs
- PATH/env broken across multiple tools
- model download too slow
- Windows/WSL networking issue
- no admin rights
- no account/API access

Action: move to rescue lane/demo path immediately.

## Triage order

1. Is Ollama installed?
2. Is OpenClaw installed?
3. Is a model available?
4. Is the gateway running?
5. Does dashboard open?
6. Does model respond?

## Commands

Mac:

```bash
ollama --version
curl http://127.0.0.1:11434/api/tags
openclaw --version
openclaw doctor
openclaw gateway status
openclaw dashboard
```

Windows:

```powershell
ollama --version
curl.exe http://127.0.0.1:11434/api/tags
openclaw --version
openclaw doctor
openclaw gateway status
openclaw dashboard
```

## Time-box rules

- 3 minutes: identify failure bucket
- 7 minutes: attempt one fix
- 10 minutes: green or rescue lane

No hero debugging during core teaching blocks.

## Common fixes

### Command missing

- Close/reopen terminal
- Check install completed
- Check PATH
- On Windows, reboot if installer added PATH but shell does not see it

### Ollama API unavailable

- Start Ollama desktop app
- Run `ollama serve`
- Use `curl.exe` on Windows, not PowerShell alias

### OpenClaw gateway not running

```bash
openclaw onboard --install-daemon
openclaw gateway status
```

### Model too slow

- Use smaller model
- Switch to provider/cloud/rescue lane
- Do not wait on giant model downloads in-room

### Azure Foundry broken

- Confirm endpoint/key/deployment name
- Use deployment name in `microsoft-foundry/<workshop-gpt-5-5-deployment-name>`
- If it is not fixed in 10 minutes, keep the attendee on Ollama and return to the shared Chat GPT 5.5 key after the room is stable

## Rescue lane options

- Pair with green attendee
- Use facilitator dashboard/demo
- Use screenshots and complete memory/operator labs conceptually
- Use cloud/provider path if available
- Continue with Beaver Badges planning artifacts even without local install
