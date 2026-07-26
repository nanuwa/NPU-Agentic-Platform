# 🚀 NPU Agentic Platform

<p align="center">

<img src="docs/images/banner.png" width="100%">

</p>

<h1 align="center">
Enterprise Agentic AI Operations Platform
</h1>

<p align="center">

Powered by

**OpenClaw** • **K-EXAONE** • **FuriosaAI RNGD NPU** • **Model Context Protocol (MCP)**

</p>

<p align="center">

## Understand • Reason • Plan • Observe • Operate

</p>

---

<p align="center">

![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Version](https://img.shields.io/badge/Version-v0.5-blue)
![OpenClaw](https://img.shields.io/badge/OpenClaw-Agent_Runtime-purple)
![EXAONE](https://img.shields.io/badge/K--EXAONE-LLM-red)
![FuriosaAI](https://img.shields.io/badge/FuriosaAI-RNGD-orange)
![OpenAI](https://img.shields.io/badge/OpenAI-Compatible_API-success)

<br>

![Platform](https://img.shields.io/badge/Platform-Linux-success)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5)
![MCP](https://img.shields.io/badge/MCP-Native-red)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 🌟 Overview

"An enterprise AI platform that combines OpenClaw, K-EXAONE, FuriosaAI NPU, and MCP to enable AI agents to operate real infrastructure through natural language."

**NPU Agentic Platform** is an enterprise-grade AI Operations Platform that combines **OpenClaw**, **K-EXAONE**, **FuriosaAI RNGD NPU**, and the **Model Context Protocol (MCP)** into a unified runtime.

Instead of acting as a traditional chatbot, the platform enables AI agents to understand infrastructure, reason about operational contexts, invoke enterprise tools through MCP, and execute real infrastructure operations using natural language.

Designed for modern AI infrastructure, the platform integrates:

- 🤖 OpenClaw Agent Runtime
- 🧠 K-EXAONE Large Language Model
- 🚀 FuriosaAI Runtime & RNGD NPU
- 🔧 Model Context Protocol (MCP)
- 🐳 Docker
- ☸ Kubernetes
- 🌐 OpenAI Compatible API
- 📱 Android Remote Management

---

# 🚀 Current Deployment Status

| Component | Status |
|-----------|:------:|
| FuriosaAI RNGD Server | ✅ Running |
| OpenClaw Runtime | ✅ Running |
| K-EXAONE Model | ✅ Serving |
| Furiosa Runtime | ✅ Active |
| OpenAI Compatible API | ✅ Running |
| MCP Framework | ✅ Running |
| Docker Platform | ✅ Running |
| Android Remote Client | ✅ Connected |
| Kubernetes | 🚧 In Progress |
| Enterprise RAG | 🚧 In Progress |
| Multi-Agent Runtime | 🚧 In Progress |

---

# ✨ Key Features

- 🚀 Enterprise Agent Runtime powered by OpenClaw
- 🧠 K-EXAONE optimized for FuriosaAI NPU
- ⚡ Hardware-accelerated AI inference
- 🔧 MCP-native modular architecture
- 🌐 OpenAI Compatible REST API
- 🐳 Docker-based deployment
- ☸ Kubernetes-ready architecture
- 📊 Enterprise monitoring dashboard
- 📱 Android remote operations
- 🔒 Enterprise-ready platform design

---

# 📊 Architecture

```text
                         User
                           │
                 Web / Mobile / REST API
                           │
                           ▼
                 +----------------------+
                 |  OpenClaw Gateway    |
                 +----------+-----------+
                            │
             Planner / Memory / Tool Calling
                            │
                            ▼
               +--------------------------+
               | Capability Dashboard     |
               +-----------+--------------+
                           │
      ┌──────────┬─────────┼─────────┬──────────┐
      ▼          ▼         ▼         ▼
 Linux MCP  Docker MCP Kubernetes MCP Furiosa MCP
      │          │         │         │
      └──────────┴─────────┴─────────┘
                     │
                     ▼
             Enterprise Service Layer
                     │
                     ▼
          Linux • Docker • Kubernetes
                     │
                     ▼
              Furiosa Runtime
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

### NPU Enterprise Monitor

The platform includes a unified operational dashboard providing real-time visibility into:

- 🖥 Linux System Status
- 🤖 LLM Service Health
- 🐳 Docker Containers
- 🚀 FuriosaAI Runtime
- 📈 Multi-NPU Monitoring
- ❤️ AI Health Summary
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

Start the platform.

```bash
npm start
```

---

# 🌐 OpenAI Compatible API

The platform provides an **OpenAI-compatible REST API**, allowing existing OpenAI applications to connect without modification.

### Supported Features

| Feature | Status |
|---------|:------:|
| Chat Completion | ✅ |
| Streaming Response | ✅ |
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
      "content":"Show current NPU status."
    }
  ]
}'
```

### Example Response

```json
{
  "id": "chatcmpl-001",
  "model": "exaone",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Furiosa Runtime is active. All 6 NPUs are healthy."
      }
    }
  ]
}
```

---

# 📂 Repository Structure

```text
NPU-Agentic-Platform/

├── system-mcp/          # MCP Runtime
├── docs/                # Documentation
├── docker/              # Docker Files
├── kubernetes/          # Kubernetes Manifests
├── deployment/          # Deployment Scripts
├── examples/            # Example Applications
├── scripts/             # Utility Scripts
├── docs/images/         # Screenshots
└── README.md
```

---

# 📚 Documentation

Comprehensive documentation is available in the **docs/** directory.

| Document | Description |
|----------|-------------|
| INSTALL.md | Installation Guide |
| ARCHITECTURE.md | System Architecture |
| OPENAI_API.md | API Reference |
| MCP_ARCHITECTURE.md | MCP Framework |
| DEPLOYMENT.md | Docker & Kubernetes |
| BENCHMARK.md | Performance Benchmark |

---

# 🛣 Roadmap

| Version | Features |
|----------|----------|
| ✅ v0.1 | OpenClaw Platform |
| ✅ v0.2 | MCP Framework |
| ✅ v0.3 | Linux & Docker Operations |
| 🚧 v0.4 | Kubernetes Integration |
| 🚧 v0.5 | Furiosa Runtime |
| 🚧 v0.6 | Capability Dashboard |
| ⏳ v0.7 | Enterprise RAG |
| ⏳ v0.8 | Vision AI |
| ⏳ v0.9 | Android Agent |
| 🎯 v1.0 | Enterprise Agentic AI Platform |

---

# 🤝 Contributing

Contributions are welcome.

Areas of interest include:

- MCP Development
- Infrastructure Automation
- Kubernetes
- Furiosa Runtime
- Enterprise AI
- Documentation
- Testing & Benchmarking

Please feel free to open an Issue or submit a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ❤️ Acknowledgements

Special thanks to the communities and technologies that make this project possible.

- OpenClaw
- LG AI Research (K-EXAONE)
- FuriosaAI
- Model Context Protocol (MCP)
- Docker
- Kubernetes
- Node.js
- TypeScript

---

<p align="center">

## 🚀 NPU Agentic Platform

### Enterprise Agentic AI Operations Platform

Powered by **OpenClaw • K-EXAONE • FuriosaAI RNGD • MCP**

**Understand • Reason • Plan • Observe • Operate**

⭐ **If you find this project useful, please consider giving it a Star!**

</p>
