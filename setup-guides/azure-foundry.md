# OpenClaw Dev Days Setup Guide — Azure AI Foundry API Key

Audience: attendees or facilitators configuring OpenClaw to use an Azure AI Foundry / Azure OpenAI deployment through an API key.

## Strong recommendation

Treat Azure Foundry as a **managed-provider stretch lane** unless every attendee has pre-provisioned access. For a large room, shared keys and live Azure setup are a support and cost-risk trap.

Use Ollama as the baseline path; use Foundry for:

- advanced attendees
- facilitator demo
- enterprise-ready/provider comparison
- post-workshop follow-up

## What you need

- Azure AI Foundry or Azure OpenAI resource
- Deployment name
- Endpoint URL
- API key
- OpenClaw installed

Important: OpenClaw uses the **deployment name** in the model reference:

```text
microsoft-foundry/<deployment-name>
```

The bundled OpenClaw provider id is:

```text
microsoft-foundry
```

API-key auth method:

```text
microsoft-foundry-apikey
```

## 1. Create or select a Foundry deployment

Portal path:

1. Go to <https://ai.azure.com>.
2. Sign in.
3. Create or select a Foundry project/resource.
4. Go to **Discover** → **Models**.
5. Choose the model assigned by the instructor.
6. Select **Deploy**.
7. Use **Custom settings** if you need to name the deployment explicitly.
8. Set a deployment name, for example:

```text
gpt-4o-mini-devdays
```

9. Wait for deployment status **Succeeded**.
10. Copy:
    - endpoint URL
    - API key
    - deployment name

Classic Azure portal path:

1. Go to <https://portal.azure.com>.
2. Create or select an **Azure OpenAI** resource.
3. Create a model deployment in Azure AI Foundry or the Azure OpenAI resource UI.
4. Record endpoint, API key, and deployment name.

## 2. Configure OpenClaw with the recommended auth flow

Run:

```bash
openclaw models auth login --provider microsoft-foundry --method api-key --set-default
```

When prompted, provide:

1. Azure OpenAI / Foundry API key
2. Endpoint URL, usually one of:

```text
https://<resource>.openai.azure.com
https://<resource>.services.ai.azure.com
```

3. Deployment name, e.g.:

```text
gpt-4o-mini-devdays
```

4. Model family / request API:
   - Use **Responses API** for GPT-5, o-series, and Codex-style Azure OpenAI deployments.
   - Use **Chat Completions API** if the deployment only supports chat/completions.

Alternative onboarding command:

```bash
openclaw onboard --auth-choice microsoft-foundry-apikey
```

## 3. Validate Foundry in OpenClaw

List models:

```bash
openclaw models list --provider microsoft-foundry
```

Check active model:

```bash
openclaw models status
```

Set model explicitly if needed:

```bash
openclaw models set microsoft-foundry/<deployment-name>
```

Direct smoke test:

```bash
openclaw infer model run \
  --local \
  --model microsoft-foundry/<deployment-name> \
  --prompt "Reply with exactly: foundry-ok" \
  --json
```

PowerShell:

```powershell
openclaw infer model run `
  --local `
  --model microsoft-foundry/<deployment-name> `
  --prompt "Reply with exactly: foundry-ok" `
  --json
```

## 4. Key safety rules

- Never paste real API keys into slides, repos, screenshots, or public chat.
- Use placeholders in curriculum:

```text
<AZURE_FOUNDRY_API_KEY>
<AZURE_FOUNDRY_ENDPOINT>
<DEPLOYMENT_NAME>
```

- For shared workshop keys, set quota/spend controls before the event.
- Rotate or revoke any temporary keys immediately after the workshop.
- Do not let attendees copy keys from projected screens.

## 5. Troubleshooting

### 401 or 403

- Key does not match the endpoint/resource.
- Network restrictions block the attendee machine.
- API-key auth should use the `api-key` header; the OpenClaw flow handles this automatically.

### 404 or deployment not found

- Use the deployment name, not just model name.
- Confirm deployment status is **Succeeded**.
- Confirm endpoint belongs to the resource that owns the deployment.
- Confirm model ref is exactly:

```text
microsoft-foundry/<deployment-name>
```

### 400 Bad Request

- Wrong request API for the deployment.
- Re-run auth/onboarding and choose Chat Completions vs Responses appropriately.
- Some Azure deployments do not support all parameters.

### Quota/deployment failures

- Choose a supported model/region.
- Use a smaller deployment.
- Reallocate TPM from another deployment.
- Request quota ahead of the workshop.

## Success checklist

- [ ] Foundry/Azure OpenAI resource exists
- [ ] Deployment status is **Succeeded**
- [ ] Endpoint, key, and deployment name are recorded privately
- [ ] `openclaw models list --provider microsoft-foundry` shows deployment
- [ ] `openclaw models set microsoft-foundry/<deployment-name>` succeeds
- [ ] Smoke test returns `foundry-ok`
