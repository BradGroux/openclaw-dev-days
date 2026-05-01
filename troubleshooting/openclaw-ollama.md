# OpenClaw + Ollama Troubleshooting

## `ollama: command not found`

Fixes:

- Close and reopen terminal.
- Launch the Ollama desktop app.
- Reinstall from <https://ollama.com/download>.
- On Windows, reboot if PATH did not refresh.

## Ollama API check fails

Mac/Linux:

```bash
curl http://127.0.0.1:11434/api/tags
```

Windows:

```powershell
curl.exe http://127.0.0.1:11434/api/tags
```

Fixes:

- Start Ollama app.
- Run `ollama serve`.
- Confirm no other service is using port 11434.

## `openclaw: command not found`

Checks:

```bash
node -v
npm prefix -g
```

Fixes:

- Reopen terminal.
- Add npm global bin path to PATH.
- Rerun installer:

Mac/Linux:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Windows:

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

## Gateway not running

```bash
openclaw gateway status
openclaw onboard --install-daemon
openclaw gateway status
```

If still stuck, run:

```bash
openclaw doctor
```

## OpenClaw cannot see Ollama model

Checks:

```bash
ollama list
openclaw models list --provider ollama
```

Fixes:

- Pull model: `ollama pull llama3.2:3b`
- Use native base URL: `http://127.0.0.1:11434`
- Do **not** use `/v1` for the normal OpenClaw Ollama provider.
- If using manual shell env:

Mac/Linux:

```bash
export OLLAMA_API_KEY="ollama-local"
```

Windows:

```powershell
$env:OLLAMA_API_KEY="ollama-local"
```

## Local model too slow

Fixes:

- Use `llama3.2:3b` or another small model.
- Avoid large model downloads during the workshop.
- Switch attendee to cloud/provider/rescue lane.
- For manual config, consider `localModelLean: true` and longer timeout.

## Model behaves badly with tools

Likely causes:

- Model is too small/weak for tool schemas.
- Ollama was configured through OpenAI-compatible `/v1` endpoint.

Fixes:

- Use native Ollama URL with no `/v1`.
- Use a stronger model if available.
- Mark small local model as `supportsTools: false` for basic chat/testing.

## Azure Foundry model not found

Fixes:

- Use deployment name, not marketing model name.
- Confirm model ref is `microsoft-foundry/<deployment-name>`.
- Confirm deployment status is **Succeeded**.
- Confirm endpoint and key are from the same resource.

## When to stop debugging

If a machine is not green after 10 minutes, move it to rescue lane. The workshop win is learning the operator loop, not proving we can debug every laptop live.
