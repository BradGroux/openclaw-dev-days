# OpenClaw Dev Days Setup Guide — Windows + Ollama

Audience: attendees using Windows PC. The official workshop baseline is native PowerShell + `ollama launch openclaw`, followed by the workshop-provided Chat GPT 5.5 Azure Foundry key after first success.

## Goal

By the end, you should have:

- Ollama installed
- OpenClaw installed/configured
- OpenClaw gateway running
- Dashboard open
- First model response working

## Recommended path

Recommended Windows path: use **native Windows PowerShell** as the default. Use WSL2 only as the rescue lane if native Windows has PATH, permission, daemon, or installer issues.

## Prerequisites

- Windows 10 or later
- PowerShell or Windows Terminal
- 8 GB RAM minimum, 16 GB+ better
- A modern browser
- Optional but recommended: Git, VS Code, Obsidian

## 1. Install basics with Winget

Open PowerShell as your normal user:

```powershell
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Obsidian.Obsidian -e
winget install --id Ollama.Ollama -e
winget install --id OpenJS.NodeJS.LTS -e
```

If `winget` is unavailable, use official installers:

- Ollama: <https://ollama.com/download/windows>
- VS Code: <https://code.visualstudio.com/>
- Obsidian: <https://obsidian.md/>
- Git: <https://git-scm.com/download/win>
- Node: <https://nodejs.org/>

Close and reopen PowerShell after installing.

## 2. Verify Ollama

```powershell
ollama --version
```

Verify the local API:

```powershell
curl.exe http://127.0.0.1:11434/api/tags
```

If that fails, open the Ollama desktop app or run:

```powershell
ollama serve
```

Leave that terminal open if you started it manually.

## 3. Pull a workshop-safe local model

Recommended baseline for broad laptop compatibility:

```powershell
ollama pull llama3.2:3b
ollama list
ollama run llama3.2:3b "Reply with exactly: pong"
```

If your machine is slow, do not panic. A cloud/provider path may be used during the workshop.

## 4. Install or launch OpenClaw through Ollama

Preferred workshop path:

```powershell
ollama launch openclaw
```

Follow the prompts. Choose Ollama/local when asked for the baseline provider. Use:

- Base URL: `http://127.0.0.1:11434`
- Model: `llama3.2:3b`

Important: use the native Ollama URL with **no `/v1` suffix**. OpenClaw's Ollama integration uses Ollama's native API; `/v1` can break tool calling.

## 5. Fallback OpenClaw install

If `ollama launch openclaw` does not work:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
openclaw onboard --install-daemon
```

During onboarding, choose Ollama/local and the same model settings above.

## 6. Verify OpenClaw

```powershell
openclaw --version
openclaw doctor
openclaw gateway status
openclaw dashboard
```

In the dashboard, send:

```text
I am at OpenClaw Dev Days. Confirm this setup works and give me one useful next step.
```

## 7. WSL2 fallback path

If native Windows gets stuck, use WSL2.

From PowerShell:

```powershell
wsl --install
```

Restart if prompted. Then in Ubuntu/WSL:

```bash
sudo apt update
sudo apt install -y git curl nodejs npm
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
openclaw gateway status
openclaw dashboard
```

Ollama can run as the Windows desktop app while OpenClaw runs in WSL, but networking can vary. If the helper lane cannot quickly connect WSL to `http://127.0.0.1:11434`, switch to the rescue/demo lane rather than burning workshop time.

## Success checklist

- [ ] `ollama --version` works
- [ ] `curl.exe http://127.0.0.1:11434/api/tags` returns JSON
- [ ] `ollama list` shows `llama3.2:3b` or workshop model
- [ ] `openclaw --version` works
- [ ] `openclaw gateway status` shows running/listening
- [ ] `openclaw dashboard` opens
- [ ] First prompt receives a response
