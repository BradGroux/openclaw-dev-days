# TAMU OpenClaw Workshop - Windows Setup Guide

## Goal

Arrive with a working environment so you can spend the workshop building, not waiting on installs.

## Before You Arrive

Please create these accounts before the event if possible:
- GitHub
- OpenClaw
- Ollama/Ollama Cloud access if prompted during setup
- Discord account and access to the Start Small, Think Big server
- Workshop-provided Chat GPT 5.5 Azure Foundry key, endpoint, and deployment name shared by facilitators during the event
- WhatsApp on your phone only if you want to watch the demo path after dashboard success

If you cannot finish before the event, we will help during setup, but arriving prepared will make your day much smoother.

## Required Apps

Install these before the workshop:
- Visual Studio Code
- Git
- Discord
- Obsidian
- Ollama
- Node.js LTS, optional because OpenClaw installer can help
- A modern browser (Edge or Chrome recommended)

## Install with Winget

Open PowerShell and run:

```powershell
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Discord.Discord -e
winget install --id Obsidian.Obsidian -e
winget install --id Ollama.Ollama -e
winget install --id OpenJS.NodeJS.LTS -e
```

If `winget` is unavailable, use the official installers:
- https://git-scm.com/download/win
- https://code.visualstudio.com/
- https://discord.com/download
- https://obsidian.md/
- https://ollama.com/download/windows
- https://nodejs.org/

## Discord Check

Open Discord in the desktop app or browser and join the Start Small, Think Big server:

- https://discord.gg/Gmfkm7QVSF

We will use Discord during the workshop for shared links, announcements, questions, and the workshop-provided API key.

Safety note: do not post personal API keys, tokens, credentials, private data, or sensitive notes in Discord.

## GitHub Check

Open PowerShell and run:

```powershell
git --version
```

Then confirm you can log into GitHub in your browser.

## Create Your Workshop Folder

In PowerShell:

```powershell
mkdir $HOME\openclaw-dev-days
cd $HOME\openclaw-dev-days
```

## Prepare a Memory File

Create a file called `memory.md` with three short notes:
- what you want to build
- what kind of agent would help you most
- one thing you want to learn

You can create it in Obsidian or VS Code.

## Ollama Check

Open PowerShell and run:

```powershell
ollama --version
curl.exe http://127.0.0.1:11434/api/tags
```

If Ollama is not running, open the Ollama app or run:

```powershell
ollama serve
```

## OpenClaw First Success Path

Preferred workshop path:

```powershell
ollama pull llama3.2:3b
ollama launch openclaw
```

Fallback install path:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
openclaw onboard --install-daemon
```

Verify:

```powershell
openclaw --version
openclaw gateway status
openclaw dashboard
```

The default success path is dashboard-first. WhatsApp/mobile channels are removed from live setup and should only be shown as a demo after dashboard success.

## WSL2 Fallback

Native Windows is the workshop default. If native Windows gets stuck, helpers may move you to WSL2:

```powershell
wsl --install
```

## Azure Foundry Workshop Key Path

After first OpenClaw success, use the instructor-provided Chat GPT 5.5 values:
- endpoint URL
- API key
- exact deployment name

OpenClaw model ref format:

```text
microsoft-foundry/<workshop-gpt-5-5-deployment-name>
```

## Optional but Helpful

- Log into GitHub in VS Code if you already know how
- Bring your charging cable
- Run Windows Update before the event if your machine is behind
- Reboot before arriving if your machine has pending installs

## What We Will Help With Live

- Discord join/setup for the workshop server
- OpenClaw login and first-use setup
- Ollama local/cloud baseline configuration
- Chat GPT 5.5 Azure Foundry setup for all attendees after first success
- WhatsApp demo only after dashboard success
- GitHub basics if you are new
- troubleshooting package install issues

## Success Check Before You Leave Home

You are in good shape if you can say yes to these:
- VS Code is installed
- Discord is installed or available in your browser
- Git works in PowerShell
- Obsidian opens
- Ollama works in PowerShell
- OpenClaw dashboard opens or you know you need helper lane
- GitHub account is ready
- you have joined or can join the SSTB Discord
- you have at least one Markdown note created
