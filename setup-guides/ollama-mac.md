# OpenClaw Dev Days Setup Guide — Mac + Ollama

Audience: attendees using macOS. The official workshop baseline is `ollama launch openclaw`, followed by the workshop-provided Chat GPT 5.5 Azure Foundry key after first success.

## Goal

By the end, you should have:

- Ollama installed
- OpenClaw installed/configured
- OpenClaw gateway running
- Dashboard open
- First model response working

## Prerequisites

- macOS 14 Sonoma or later preferred
- Apple Silicon preferred, Intel acceptable for small/cloud models
- 8 GB RAM minimum, 16 GB+ better
- Terminal access
- A modern browser
- Optional but recommended: Git, VS Code, Obsidian

## 1. Install basics

If you use Homebrew:

```bash
brew install git node
brew install --cask visual-studio-code obsidian ollama
```

If you do not have Homebrew, install it first from <https://brew.sh>, or use the official installers:

- Ollama: <https://ollama.com/download/mac>
- VS Code: <https://code.visualstudio.com/>
- Obsidian: <https://obsidian.md/>
- Git: <https://git-scm.com/download/mac>

Open a new Terminal after installing.

## 2. Verify Ollama

```bash
ollama --version
```

If Ollama is not running automatically:

```bash
ollama serve
```

Leave that terminal open if you started it manually.

Verify the local API:

```bash
curl http://127.0.0.1:11434/api/tags
```

## 3. Pull a workshop-safe local model

Recommended baseline for broad laptop compatibility:

```bash
ollama pull llama3.2:3b
ollama list
ollama run llama3.2:3b "Reply with exactly: pong"
```

If your machine is slow, do not panic. A cloud/provider path may be used during the workshop.

## 4. Install or launch OpenClaw through Ollama

Preferred workshop path:

```bash
ollama launch openclaw
```

Follow the prompts. Choose Ollama/local when asked for the baseline provider. Use:

- Base URL: `http://127.0.0.1:11434`
- Model: `llama3.2:3b`

Important: use the native Ollama URL with **no `/v1` suffix**. OpenClaw's Ollama integration uses Ollama's native API; `/v1` can break tool calling.

## 5. Fallback OpenClaw install

If `ollama launch openclaw` does not work:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
```

During onboarding, choose Ollama/local and the same model settings above.

## 6. Verify OpenClaw

```bash
openclaw --version
openclaw doctor
openclaw gateway status
openclaw dashboard
```

In the dashboard, send:

```text
I am at OpenClaw Dev Days. Confirm this setup works and give me one useful next step.
```

## 7. If `openclaw` is not found

Check Node/npm path:

```bash
node -v
npm prefix -g
echo "$PATH"
```

Add the npm global bin path if needed:

```bash
export PATH="$(npm prefix -g)/bin:$PATH"
```

Then add the same line to `~/.zshrc` and open a new terminal.

## Success checklist

- [ ] `ollama --version` works
- [ ] `curl http://127.0.0.1:11434/api/tags` returns JSON
- [ ] `ollama list` shows `llama3.2:3b` or workshop model
- [ ] `openclaw --version` works
- [ ] `openclaw gateway status` shows running/listening
- [ ] `openclaw dashboard` opens
- [ ] First prompt receives a response
