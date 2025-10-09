# BrainDrive Ollama Plugin

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/BrainDriveAI/BrainDrive-Ollama-Plugin)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![BrainDrive](https://img.shields.io/badge/BrainDrive-Plugin-purple.svg)](https://github.com/BrainDriveAI/BrainDrive)

A dedicated BrainDrive plugin that delivers Ollama-specific experiences including server lifecycle management, model installation, and a prompt chat interface.

## Features
- Ollama server registration, health checks, and connection testing
- Model discovery and install/remove flows with streaming progress
- Prompt chat UI with streaming toggle, conversation history, and event-driven model selection
- Module federation exposes `ComponentOllamaServer` and `AIPromptChat` for flexible host integration

## Getting Started
```bash
cd PluginBuild/BrainDrive-Ollama-Plugin
npm install
npm run build
```
Build artifacts are emitted to `dist/remoteEntry.js` for consumption by the BrainDrive host.

## Development
- `npm start` serves the plugin on port 9006 for local development
- Webpack Module Federation library name: `BrainDriveOllama`
- Exposed modules:
  - `ComponentOllamaServer`
  - `AIPromptChat`

## Lifecycle Manager
See `lifecycle_manager.py` for installation hooks, module metadata, and settings definitions registered with BrainDrive.

## License
MIT © BrainDrive.ai
