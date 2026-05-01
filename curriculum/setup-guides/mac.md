# TAMU OpenClaw Workshop - Mac Setup Guide

## Goal

Arrive with a working environment so you can spend the workshop building, not waiting on installs.

## Before You Arrive

Please create these accounts before the event if possible:
- GitHub
- OpenClaw
- Ollama Cloud, if using cloud models
- Azure account/access, only if you are joining the Azure Foundry stretch lane
- WhatsApp on your phone, optional/demo path

If you cannot finish before the event, we will help during setup, but arriving prepared will make your day much smoother.

## Required Apps

Install these before the workshop:
- Visual Studio Code
- Git
- Obsidian
- Ollama
- Node.js LTS, optional because OpenClaw installer can help
- A modern browser (Chrome, Edge, or Arc recommended)

## Install with Homebrew

If you already use Homebrew, run:

```bash
brew install git node
brew install --cask visual-studio-code obsidian ollama
```

If you do not have Homebrew yet, install it from:
- https://brew.sh

Then run the commands above.

## GitHub Check

Open Terminal and run:

```bash
git --version
```

Then confirm you can log into GitHub in your browser.

## Create Your Workshop Folder

In Terminal:

```bash
mkdir -p ~/openclaw-dev-days
cd ~/openclaw-dev-days
```

## Prepare a Memory File

Create a file called `memory.md` with three short notes:
- what you want to build
- what kind of agent would help you most
- one thing you want to learn

You can create it in Obsidian or VS Code.

## Ollama Check

Open Terminal and run:

```bash
ollama --version
curl http://127.0.0.1:11434/api/tags
```

If Ollama is not running, open the Ollama app or run:

```bash
ollama serve
```

## OpenClaw First Success Path

Preferred workshop path:

```bash
ollama pull llama3.2:3b
ollama launch openclaw
```

Fallback install path:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
```

Verify:

```bash
openclaw --version
openclaw gateway status
openclaw dashboard
```

The default success path is dashboard-first. WhatsApp/mobile channels are optional after dashboard success.

## Azure Foundry Stretch Path

If you are joining the Azure Foundry path, bring:
- endpoint URL
- API key
- deployment name

OpenClaw model ref format:

```text
microsoft-foundry/<deployment-name>
```

## Optional but Helpful

- Create a folder in Obsidian for workshop notes
- Log into GitHub in VS Code if you already know how
- Bring your charging cable
- Update macOS before the event if you are behind on security prompts or permission dialogs

## What We Will Help With Live

- OpenClaw login and first-use setup
- Ollama local/cloud baseline configuration
- Azure Foundry setup for stretch attendees
- WhatsApp linking only after dashboard success
- GitHub basics if you are new
- troubleshooting package install issues

## Success Check Before You Leave Home

You are in good shape if you can say yes to these:
- VS Code is installed
- Git works in Terminal
- Obsidian opens
- Ollama works in Terminal
- OpenClaw dashboard opens or you know you need helper lane
- GitHub account is ready
- you have at least one Markdown note created
