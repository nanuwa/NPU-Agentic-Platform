# 🚀 NPU Agentic Platform

<p align="center">
  <img src="docs/images/banner.png" alt="NPU Agentic Platform">
</p>

<h2 align="center">
Enterprise Agentic AI Platform powered by FuriosaAI NPU
</h2>

<p align="center">

<strong>FuriosaAI RNGD</strong> •
<strong>OpenClaw</strong> •
<strong>K-EXAONE</strong> •
<strong>OpenAI Compatible API</strong> •
<strong>Model Context Protocol (MCP)</strong>

</p>

<p align="center">

<strong>Understand • Reason • Plan • Observe • Operate</strong>

</p>

<p align="center">

![Platform](https://img.shields.io/badge/Platform-Agentic_AI-blue)

![Runtime](https://img.shields.io/badge/OpenClaw-Enabled-purple)

![LLM](https://img.shields.io/badge/K--EXAONE-Serving-red)

![Accelerator](https://img.shields.io/badge/FuriosaAI-RNGD-orange)

![API](https://img.shields.io/badge/OpenAI-Compatible-success)

![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)

![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5)

![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 🌟 Overview

> **A production-ready Enterprise Agentic AI Platform that combines FuriosaAI NPU, OpenClaw, K-EXAONE, and MCP to enable AI agents to understand, reason, and operate enterprise infrastructure through natural language.**

The **NPU Agentic Platform** is an end-to-end platform for deploying, operating, and extending **Agentic AI** on **FuriosaAI RNGD NPUs**.

Rather than building another chatbot, this project focuses on **AI Operations (AIOps)** by integrating an LLM runtime, infrastructure management, and hardware acceleration into a single platform.

Key capabilities include:

- 🚀 AI inference optimized for **FuriosaAI RNGD**
- 🤖 Agent execution powered by **OpenClaw**
- 🧠 **K-EXAONE** Large Language Model
- 🔧 **Model Context Protocol (MCP)** for extensible tool integration
- 🌐 **OpenAI Compatible API**
- 🐳 Docker-based deployment
- ☸ Kubernetes-ready architecture
- 📊 Enterprise monitoring dashboard
- 📱 Remote operation from Android devices

---

# 🎯 Project Goals

The goal of this project is to build a **production-oriented Agentic AI platform** capable of operating real enterprise infrastructure through natural language.

The platform integrates:

| Layer | Technology |
|--------|------------|
| AI Runtime | OpenClaw |
| LLM | K-EXAONE |
| AI Accelerator | FuriosaAI RNGD |
| Runtime | Furiosa Runtime |
| API | OpenAI Compatible |
| Tool Framework | MCP |
| Container | Docker |
| Orchestration | Kubernetes |

---

# 🚀 Current Status

| Component | Status |
|-----------|:------:|
| FuriosaAI Runtime | ✅ |
| OpenClaw Runtime | ✅ |
| K-EXAONE Serving | ✅ |
| OpenAI Compatible API | ✅ |
| Docker Environment | ✅ |
| Enterprise Monitor | ✅ |
| Android Remote Access | ✅ |
| Kubernetes Integration | 🚧 |
| Enterprise RAG | 🚧 |
| Multi-Agent Runtime | 🚧 |

---

# ✨ Core Features

- 🚀 Enterprise Agent Runtime
- 🧠 K-EXAONE on FuriosaAI NPU
- ⚡ Hardware-Accelerated AI Inference
- 🔧 MCP-Native Architecture
- 🌐 OpenAI Compatible API
- 🐳 Docker Runtime
- ☸ Kubernetes Integration
- 📊 Enterprise Monitoring Dashboard
- ❤️ AI Health Analysis
- 📱 Android Remote Operations

---

# 🏗 Platform Architecture

```text
                     Users / Applications
                              │
                 Web · Mobile · REST API
                              │
                              ▼
                    OpenAI Compatible API
                              │
                              ▼
                      OpenClaw Gateway
                              │
           Planner · Memory · Tool Calling
                              │
                              ▼
                  Capability Dashboard
                              │
      ┌─────────────┬─────────────┬─────────────┐
      ▼             ▼             ▼
 Linux MCP     Docker MCP   Kubernetes MCP
                              │
                              ▼
                      Furiosa MCP
                              │
                              ▼
                  Enterprise Services
                              │
                              ▼
 Linux · Docker · Kubernetes · Runtime
                              │
                              ▼
                      K-EXAONE LLM
                              │
                              ▼
                   FuriosaAI RNGD NPU
```

---

# 📸 Platform Preview

<p align="center">

<img src="docs/images/npu-enterprise-monitor-v2.png" width="100%">

</p>

The **NPU Enterprise Monitor** provides a unified operational view of the platform.

### Features

- Linux System Monitoring
- Docker Runtime Monitoring
- OpenAI API Health
- Furiosa Runtime Monitoring
- Multi-NPU Status
- AI Health Summary

---
# 🚀 Platform Capabilities

The NPU Agentic Platform provides a unified runtime for AI-driven infrastructure operations.

| Domain | Capabilities |
|---------|--------------|
| 🤖 Agent Runtime | Planning, Memory, Tool Calling |
| 🧠 Large Language Model | K-EXAONE |
| 🚀 AI Accelerator | Furiosa Runtime & RNGD NPU |
| 🖥 Infrastructure | Linux Administration |
| 🐳 Containers | Docker Operations |
| ☸ Orchestration | Kubernetes Management |
| 🔧 Tool Framework | Model Context Protocol (MCP) |
| 🌐 API | OpenAI Compatible REST API |
| 📊 Monitoring | Enterprise Monitor & AI Health |
| 📱 Device Integration | Android Remote Operations |

---

# 💡 Example AI Operations

Instead of manually executing commands, operators interact with infrastructure using natural language.

### Linux

```text
Show current CPU utilization.

Analyze memory usage.

Summarize today's system logs.

Check available disk space.
```

### Docker

```text
Show running containers.

Display container logs.

Analyze Docker resource usage.

Restart the API container.
```

### Kubernetes

```text
Show unhealthy Pods.

Describe Deployment.

Summarize cluster health.

Display recent events.
```

### Furiosa Runtime

```text
Show current NPU utilization.

Display runtime information.

Analyze accelerator health.

Check inference performance.
```

---

# 🌐 OpenAI Compatible API

The platform exposes an **OpenAI-compatible REST API**, allowing existing applications to connect without modification.

## Supported Features

| Feature | Status |
|---------|:------:|
| Chat Completion | ✅ |
| Streaming | ✅ |
| Tool Calling | ✅ |
| Function Calling | ✅ |
| Multi-turn Conversation | ✅ |

---

# 💬 API Example

```bash
curl http://localhost:8001/v1/chat/completions \
-H "Content-Type: application/json" \
-d '{
  "model":"exaone",
  "messages":[
    {
      "role":"user",
      "content":"Show current NPU utilization."
    }
  ]
}'
```

### Response

```json
{
  "id":"chatcmpl-001",
  "model":"exaone",
  "choices":[
    {
      "message":{
        "role":"assistant",
        "content":"Furiosa Runtime is active. All 6 NPUs are healthy. Current utilization is 47%."
      }
    }
  ]
}
```

---

# 🚀 Quick Start

Clone the repository.

```bash
git clone https://github.com/nanuwa/NPU-Agentic-Platform.git

cd NPU-Agentic-Platform
```

Install dependencies.

```bash
cd system-mcp

npm install

npm run build
```

Run the platform.

```bash
npm start
```

The OpenAI-compatible API will be available at:

```text
http://localhost:8001/v1/chat/completions
```

---

# 📂 Repository Structure

```text
NPU-Agentic-Platform/

├── system-mcp/
│   ├── src/
│   ├── services/
│   ├── tools/
│   └── core/
│
├── docker/
├── kubernetes/
├── deployment/
├── docs/
├── examples/
├── scripts/
└── README.md
```

---

# 🛣 Roadmap

| Version | Description | Status |
|-----------|-------------|:------:|
| v0.1 | OpenClaw Integration | ✅ |
| v0.2 | MCP Framework | ✅ |
| v0.3 | Linux & Docker Operations | ✅ |
| v0.4 | Kubernetes Integration | 🚧 |
| v0.5 | Furiosa Runtime | 🚧 |
| v0.6 | Enterprise Dashboard | 🚧 |
| v0.7 | Enterprise RAG | ⏳ |
| v0.8 | Vision AI | ⏳ |
| v0.9 | Android Agent | ⏳ |
| v1.0 | Enterprise Agentic AI Platform | 🎯 |

---

# 📚 Documentation

Additional documentation is available under the **docs/** directory.

- 📖 Installation Guide
- 🏗 System Architecture
- 🔧 MCP Framework
- 🌐 OpenAI API
- 🚀 Deployment Guide
- 📊 Benchmark Report

---

# 🤝 Contributing

Contributions are welcome.

Areas of contribution include:

- MCP Development
- Kubernetes Integration
- Enterprise AI
- Furiosa Runtime
- Documentation
- Testing & Benchmarking

Please submit an **Issue** or **Pull Request**.

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

# ⭐ Support

If you find this project useful, please consider:

- ⭐ Star this repository
- 🍴 Fork the project
- 🐞 Report issues
- 💡 Suggest improvements

Your support helps improve the platform and encourages future development.

---
