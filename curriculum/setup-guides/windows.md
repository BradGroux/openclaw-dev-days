# TAMU OpenClaw Workshop - Windows Setup Guide

## Goal

Arrive with a working environment so you can spend the workshop building, not waiting on installs.

## Before You Arrive

Please create these accounts before the event if possible:
- GitHub
- OpenClaw
- Ollama Cloud
- WhatsApp on your phone

If you cannot finish before the event, we will help during setup, but arriving prepared will make your day much smoother.

## Required Apps

Install these before the workshop:
- Visual Studio Code
- Git
- Obsidian
- A modern browser (Edge or Chrome recommended)

## Install with Winget

Open PowerShell and run:

```powershell
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Obsidian.Obsidian -e
```

If `winget` is unavailable, use the official installers:
- https://git-scm.com/download/win
- https://code.visualstudio.com/
- https://obsidian.md/

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

## OpenClaw Access Path

You will use:
- the OpenClaw web portal
- WhatsApp on mobile
- the public workshop repo

This workshop is not CLI-only.

## WhatsApp

Make sure WhatsApp is installed and logged in on your phone before arrival.

## Optional but Helpful

- Log into GitHub in VS Code if you already know how
- Bring your charging cable
- Run Windows Update before the event if your machine is behind
- Reboot before arriving if your machine has pending installs

## What We Will Help With Live

- OpenClaw login and first-use setup
- Ollama Cloud baseline configuration
- WhatsApp linking
- GitHub basics if you are new
- troubleshooting package install issues

## Success Check Before You Leave Home

You are in good shape if you can say yes to these:
- VS Code is installed
- Git works in PowerShell
- Obsidian opens
- GitHub account is ready
- WhatsApp works on your phone
- you have at least one Markdown note created
