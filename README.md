# 🚀 NPU Agentic Platform

<p align="center">

<img src="docs/images/platform-overview.png" width="100%">

</p>

<h1 align="center">
Enterprise Agentic AI Operations Platform
</h1>

<p align="center">

Powered by

<b>OpenClaw</b> •
<b>K-EXAONE</b> •
<b>FuriosaAI RNGD NPU</b> •
<b>Model Context Protocol (MCP)</b>

</p>

<p align="center">

### AI Agents that can

## Understand • Reason • Plan • Observe • Operate

<p align="center">

![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Version](https://img.shields.io/badge/Version-v0.5-blue)
![OpenClaw](https://img.shields.io/badge/OpenClaw-Agent_Runtime-purple)
![EXAONE](https://img.shields.io/badge/K--EXAONE-LLM-red)
![Furiosa](https://img.shields.io/badge/FuriosaAI-RNGD-orange)
![OpenAI](https://img.shields.io/badge/OpenAI-Compatible_API-success)

<br>

![Platform](https://img.shields.io/badge/Platform-Linux-success)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5)
![MCP](https://img.shields.io/badge/MCP-Native-red)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 🌟 Enterprise Agentic AI Platform

NPU Agentic Platform is an **Enterprise AI Operations Platform** designed to execute real-world infrastructure operations through natural language.

Unlike conventional chat-based AI systems, the platform enables autonomous AI Agents to understand infrastructure, reason about operational contexts, invoke enterprise tools through MCP, and execute actions safely on production environments.

The platform integrates:

- 🚀 FuriosaAI RNGD NPU
- 🧠 LG AI Research K-EXAONE
- 🤖 OpenClaw Agent Runtime
- 🔧 Model Context Protocol (MCP)
- ☸ Kubernetes
- 🐳 Docker
- 🌐 OpenAI Compatible API

into a unified enterprise runtime.

---

# 🚀 Current Deployment Status

| Component | Status |
|------------|--------|
| FuriosaAI RNGD Server | ✅ Running |
| OpenClaw Runtime | ✅ Running |
| K-EXAONE Model | ✅ Serving |
| Furiosa Runtime | ✅ Active |
| OpenAI Compatible API | ✅ Running |
| MCP Framework | ✅ Running |
| Docker Platform | ✅ Running |
| Android Remote Client | ✅ Connected |
| Kubernetes Cluster | 🚧 Preparing |
| Multi-Agent Runtime | 🚧 In Progress |
| Enterprise RAG | 🚧 In Progress |

---

# 🎯 Platform Highlights

## 🚀 Enterprise Agent Runtime

OpenClaw provides intelligent planning, memory management, tool calling and agent execution.

---

## 🧠 Enterprise LLM

Optimized deployment of **K-EXAONE** running on FuriosaAI NPU.

---

## ⚡ Hardware Accelerated AI

High-performance inference powered by **Furiosa Runtime**.

---

## 🔧 MCP Native Architecture

Every capability is exposed as an independent MCP service.

---

## ☸ Kubernetes Ready

Designed for scalable production deployment.

---

## 🌐 OpenAI Compatible API

Drop-in replacement for OpenAI Chat Completion APIs.

---

## 📱 Android Remote Operation

Operate enterprise AI infrastructure directly from Android tablets.

---

# 💡 Why NPU Agentic Platform?

Traditional LLMs generate responses.

NPU Agentic Platform performs **operations**.

| Traditional LLM | NPU Agentic Platform |
|----------------|----------------------|
| Answer Questions | Understand Infrastructure |
| Generate Text | Plan Actions |
| Tool Calling | Enterprise Tool Orchestration |
| Passive Assistant | Autonomous Agent |
| Chatbot | AI Operations Platform |
| Single Request | Continuous Agent Workflow |
| CPU/GPU | FuriosaAI NPU |

---

# 🖥 Production Environment

| Category | Technology |
|------------|------------|
| AI Accelerator | FuriosaAI RNGD |
| Runtime | Furiosa Runtime |
| Agent Runtime | OpenClaw |
| LLM | K-EXAONE |
| Protocol | MCP |
| API | OpenAI Compatible |
| Container | Docker |
| Orchestration | Kubernetes |
| OS | Ubuntu 22.04 |
| Language | TypeScript |
| Backend | Node.js |
| Mobile | Android |

---

# 📊 System Overview

```text
                       Android Tablet
                              │
                      HTTPS / WebSocket
                              │
                              ▼

                  +-------------------------+
                  |    OpenClaw Gateway     |
                  +-----------+-------------+
                              │
                  Planner / Memory / Agent
                              │
                              ▼

                +---------------------------+
                | Capability Dashboard      |
                +-------------+-------------+
                              │
      ┌─────────────┬─────────┴──────────┬──────────────┐
      ▼             ▼                    ▼              ▼

 Linux MCP     Docker MCP      Kubernetes MCP     Furiosa MCP

      │             │                    │              │
      └─────────────┴──────────┬─────────┴──────────────┘
                               ▼

                     Enterprise Service Layer

                               │

                     Command Executor Engine

                               │

     Linux • Docker • Kubernetes • Furiosa Runtime

                               │

                         K-EXAONE LLM

                               │

                      FuriosaAI RNGD NPU
```

---

# 📸 Platform Preview

> Screenshots will be updated as development progresses.

| Dashboard | Runtime |
|------------|---------|
| ![](docs/images/dashboard.png) | ![](docs/images/runtime.png) |

| Docker | Kubernetes |
|----------|------------|
| ![](docs/images/docker.png) | ![](docs/images/kubernetes.png) |

| Furiosa | Android |
|----------|----------|
| ![](docs/images/furiosa.png) | ![](docs/images/android.png) |

---

# 🎬 Live Demonstration

```text
Natural Language

↓

"Show current NPU utilization"

↓

Planner

↓

Furiosa MCP

↓

Runtime

↓

AI Analysis

↓

Natural Language Response
```

---

# 📈 Project Progress

```
███████████████████████░░░░░░░░░░░░ 65%

✔ Infrastructure

✔ OpenClaw

✔ Furiosa Runtime

✔ EXAONE

✔ OpenAI API

✔ Docker

✔ Android

🚧 Kubernetes

🚧 Enterprise RAG

🚧 Multi-Agent
```

---

Continue Reading ↓

- Enterprise Architecture
- Platform Components
- MCP Framework
- API Guide
- Deployment Guide
- Benchmark
- Roadmap
---

# 🏗 Enterprise Architecture

The **NPU Agentic Platform** adopts a layered architecture that separates AI reasoning, capability discovery, infrastructure services, and hardware acceleration into independent modules.

This architecture allows every capability to evolve independently while exposing a unified interface through the **Model Context Protocol (MCP)**.

```text
                                   Users
                                      │
                         Web / Mobile / REST API
                                      │
                                      ▼
                      +--------------------------------+
                      |        OpenClaw Gateway        |
                      +--------------------------------+
                                      │
             Planner • Memory • Tool Calling • Sessions
                                      │
                                      ▼
                      +--------------------------------+
                      |     Capability Dashboard       |
                      +--------------------------------+
                                      │
      ┌───────────────┬───────────────┼───────────────┬───────────────┐
      ▼               ▼               ▼               ▼
 Linux MCP      Docker MCP    Kubernetes MCP    Furiosa MCP
      │               │               │               │
      └───────────────┴───────────────┼───────────────┘
                                      ▼
                         Enterprise Service Layer
                                      │
                       Command Execution Framework
                                      │
        Linux CLI • Docker Engine • Kubernetes API • Furiosa Runtime
                                      │
                                      ▼
                              K-EXAONE LLM
                                      │
                                      ▼
                           FuriosaAI RNGD NPU
```

---

# 🎯 Platform Design Principles

The platform is built around six core principles.

## 🧠 AI-Native

AI is not an add-on.

It is the primary interface for infrastructure operations.

---

## 🔧 MCP First

Every capability is implemented as an independent MCP service.

This makes the platform modular and easily extensible.

---

## 🚀 Hardware Accelerated

Inference is optimized for **FuriosaAI RNGD NPU** through the Furiosa Runtime.

---

## ☸ Cloud Native

Every service is containerized and designed for Kubernetes deployment.

---

## 🔒 Enterprise Ready

Security, modularity, observability and scalability are considered from the beginning.

---

## 📈 Production Focused

The project is designed to become an operational AI platform rather than a research prototype.

---

# 🚀 Platform Capabilities

The platform combines infrastructure automation and enterprise AI into a single runtime.

| Category | Capabilities |
|-----------|--------------|
| 🤖 Agent Runtime | Planning, Memory, Tool Calling, Session Management |
| 🧠 Large Language Model | K-EXAONE |
| 🚀 AI Accelerator | Furiosa Runtime & RNGD NPU |
| 🖥 Linux Operations | Process, CPU, Memory, Disk, Network |
| 🐳 Docker Operations | Containers, Images, Logs, Statistics |
| ☸ Kubernetes | Cluster, Node, Pod, Deployment, Events |
| 📊 AI Operations | Health Analysis, Capability Discovery |
| 📚 Enterprise AI | RAG, Search, Knowledge Retrieval |
| 👁 Vision AI | Image Understanding & Generation |
| 📱 Android Integration | Remote AI Operations |

---

# 🧩 Core Platform Components

The NPU Agentic Platform consists of loosely coupled services that communicate through MCP.

| Component | Responsibility |
|------------|----------------|
| OpenClaw Gateway | AI Agent Runtime |
| Planner | Task decomposition |
| Memory | Long-term context |
| Tool Calling | Dynamic tool invocation |
| Capability Dashboard | Runtime capability discovery |
| MCP Framework | Standardized communication |
| Service Layer | Business logic |
| Command Executor | Secure command execution |
| Linux Service | Operating system management |
| Docker Service | Container management |
| Kubernetes Service | Cluster administration |
| Furiosa Service | Runtime & NPU monitoring |
| Enterprise AI | Search, RAG and Vision |
| Android Agent | Remote operations |

---

# 🧠 Agent Execution Pipeline

Every user request follows the same execution pipeline.

```text
User Request

↓

Planner

↓

Task Analysis

↓

Capability Discovery

↓

Tool Selection

↓

MCP Invocation

↓

Infrastructure Execution

↓

Result Collection

↓

LLM Reasoning

↓

Natural Language Response
```

---

# 🔧 MCP Framework

The Model Context Protocol (MCP) provides a standardized interface between AI Agents and enterprise infrastructure.

Instead of embedding infrastructure logic directly inside the LLM, the platform exposes reusable capabilities through independent MCP services.

Current MCP modules include:

| MCP Module | Purpose |
|------------|---------|
| Linux MCP | Linux administration |
| Docker MCP | Container operations |
| Kubernetes MCP | Cluster management |
| Furiosa MCP | NPU monitoring |
| Filesystem MCP | File operations |
| Logs MCP | Log analysis |
| Capability MCP | Runtime discovery |
| Enterprise AI MCP | Search & RAG |

Additional MCP services can be added without modifying the existing runtime.

---

# ⚙ Enterprise Service Layer

The Service Layer abstracts infrastructure-specific implementations and provides reusable APIs for AI Agents.

```text
AI Agent
    │
    ▼

Service Layer

├── Linux Service

├── Docker Service

├── Kubernetes Service

├── Furiosa Service

├── OpenClaw Service

└── Enterprise AI Service

    │

Command Executor

    │

Infrastructure
```

Each service is independently testable and can be extended without affecting other modules.

---

# 📂 Repository Structure

```text
NPU-Agentic-Platform/

├── system-mcp/
│
├── docs/
│   ├── architecture/
│   ├── deployment/
│   ├── api/
│   ├── benchmark/
│   ├── setup/
│   └── examples/
│
├── docker/
│
├── kubernetes/
│
├── deployment/
│
├── benchmark/
│
├── examples/
│
├── scripts/
│
├── images/
│
├── videos/
│
├── LICENSE
│
└── README.md
```

---

# 📦 Project Modules

The repository is organized into several independent modules.

| Module | Description |
|----------|-------------|
| system-mcp | MCP framework implementation |
| docs | Technical documentation |
| deployment | Production deployment guides |
| docker | Docker configurations |
| kubernetes | Kubernetes manifests |
| benchmark | Performance reports |
| examples | Sample applications |
| scripts | Utility scripts |
| images | Documentation assets |
| videos | Demonstration materials |

---

# 🌐 Supported Deployment Targets

The platform is designed to support multiple deployment environments.

| Environment | Status |
|-------------|--------|
| Ubuntu Server | ✅ Supported |
| Docker | ✅ Supported |
| Docker Compose | ✅ Supported |
| Kubernetes | 🚧 In Progress |
| On-Premise | ✅ Supported |
| Private Cloud | 🚧 Planned |
| Hybrid Cloud | 🚧 Planned |

---

Continue Reading ↓

- Enterprise Services
- OpenAI Compatible API
- Natural Language Examples
- AI Health Analyzer
- Deployment Guide
- Benchmark Results
- Product Roadmap
---

# 🛠 Enterprise Services

The NPU Agentic Platform exposes enterprise infrastructure through reusable MCP services.

Every service follows the same execution model:

**Natural Language → Planner → MCP → Infrastructure → AI Analysis → Response**

---

# 🖥 Linux Operations

The Linux MCP provides secure operating system administration through natural language.

Supported capabilities include:

| Category | Operations |
|-----------|------------|
| System | Hostname, Uptime, Kernel |
| CPU | Utilization, Architecture |
| Memory | Total, Free, Swap |
| Storage | Disk Usage, Mount Points |
| Network | Interfaces, IP, Routes |
| Processes | Running Processes |
| Users | Current User, Sessions |
| Services | systemctl |
| Logs | journalctl |
| Security | Permission Inspection |

Example

```text
Show current hostname.

Display CPU utilization.

Analyze memory usage.

How much disk space is available?

Summarize today's system logs.

Check running services.
```

---

# 🐳 Docker Operations

Container lifecycle management through MCP.

Supported operations include:

| Category | Operations |
|-----------|------------|
| Containers | Running Containers |
| Images | Docker Images |
| Statistics | CPU / Memory |
| Logs | Container Logs |
| Health | Health Status |
| Inspect | Container Details |
| Networks | Docker Networks |
| Volumes | Docker Volumes |

Example

```text
Show running containers.

Analyze Docker resource usage.

Which containers are unhealthy?

Display API container logs.

Inspect OpenClaw container.
```

---

# ☸ Kubernetes Operations

The Kubernetes MCP provides AI-assisted cluster administration.

Supported capabilities include:

| Category | Operations |
|-----------|------------|
| Cluster | Cluster Info |
| Nodes | Node Status |
| Pods | Pod Status |
| Deployments | Deployment Analysis |
| Services | Kubernetes Services |
| Events | Recent Events |
| Logs | Pod Logs |
| Health | Cluster Analysis |

Example

```text
Show all Pods.

Describe this Deployment.

Display unhealthy workloads.

Analyze Restart counts.

Summarize cluster health.
```

---

# 🚀 FuriosaAI Operations

The Furiosa MCP provides hardware-aware AI infrastructure monitoring.

Supported capabilities include:

| Category | Operations |
|-----------|------------|
| Runtime | Runtime Status |
| Devices | Device Discovery |
| Utilization | Core Usage |
| Memory | NPU Memory |
| Power | Power Consumption |
| Temperature | Device Temperature |
| Diagnostics | Runtime Diagnostics |
| Health | Overall Health |

Example

```text
Check NPU utilization.

Display runtime information.

Show NPU memory usage.

Analyze accelerator health.

Display inference statistics.
```

---

# 🧠 Enterprise AI Services

The platform combines infrastructure automation with enterprise AI services.

Available capabilities

- Retrieval-Augmented Generation (RAG)

- Enterprise Search

- Knowledge Retrieval

- Vision AI

- Image Understanding

- Image Generation

- Document Analysis

- Workflow Automation

- Tool Calling

- Multi-step Reasoning

---

# 🌐 OpenAI Compatible API

One of the platform's primary goals is compatibility with the OpenAI API.

Applications built for OpenAI can connect without modification.

Current endpoints

| Endpoint | Status |
|-----------|--------|
| Chat Completion | ✅ |
| Streaming | ✅ |
| Tool Calling | ✅ |
| Function Calling | ✅ |
| Multi-turn Conversation | ✅ |

---

# 🚀 API Example

```bash
curl http://SERVER_IP:8001/v1/chat/completions \
-H "Content-Type: application/json" \
-d '{
    "model":"exaone",
    "messages":[
        {
            "role":"user",
            "content":"Hello!"
        }
    ]
}'
```

Example Response

```json
{
  "id":"chatcmpl-001",
  "object":"chat.completion",
  "created":1740000000,
  "model":"exaone",
  "choices":[
    {
      "index":0,
      "message":{
        "role":"assistant",
        "content":"Hello! How can I help you today?"
      },
      "finish_reason":"stop"
    }
  ]
}
```

---

# 🔧 Tool Calling Example

User

```text
Analyze current Docker environment.
```

↓

Planner

↓

Docker MCP

↓

Command Executor

↓

docker ps

docker stats

docker images

↓

AI Analysis

↓

Response

```text
Docker Environment Summary

Running Containers

✓ OpenClaw

✓ API Gateway

✓ MongoDB

Average CPU

18%

Memory Usage

42%

Overall Health

★★★★★ Excellent
```

---

# 🤖 Natural Language Operations

Examples of AI-native infrastructure administration.

---

## Linux

```text
Show CPU utilization.

Analyze disk usage.

Check available memory.

Display current hostname.

Who is logged into the server?

Summarize today's logs.
```

---

## Docker

```text
Show running containers.

Restart API container.

Inspect this image.

Analyze container resources.

Display container logs.
```

---

## Kubernetes

```text
Show all Pods.

Describe Deployment.

Display Node status.

Analyze failed Pods.

Summarize cluster health.
```

---

## Furiosa Runtime

```text
Check runtime status.

Show inference performance.

Analyze NPU utilization.

Display runtime diagnostics.

Summarize accelerator health.
```

---

## Enterprise AI

```text
Search internal documentation.

Retrieve deployment guide.

Summarize uploaded document.

Generate architecture diagram.

Analyze this image.

Search enterprise knowledge.
```

---

# 📊 Capability Dashboard

The Capability Dashboard enables AI Agents to discover runtime services dynamically.

```text
=====================================================

           Capability Dashboard

=====================================================

AI Runtime

✓ OpenClaw

✓ Planner

✓ Memory

✓ Tool Calling

-----------------------------------------------------

Infrastructure

✓ Linux

✓ Docker

✓ Kubernetes

✓ Furiosa Runtime

-----------------------------------------------------

Enterprise AI

✓ Search

✓ Enterprise RAG

✓ Vision AI

✓ Document Analysis

-----------------------------------------------------

API

✓ OpenAI Compatible

✓ Streaming

✓ Tool Calling

-----------------------------------------------------

Mobile

✓ Android Agent

=====================================================
```

Unlike traditional AI systems, capabilities are discovered dynamically rather than hard-coded.

---

# ❤️ AI Health Analyzer

The AI Health Analyzer aggregates infrastructure metrics from Linux, Docker, Kubernetes and Furiosa Runtime into a unified operational summary.

Example

```text
Infrastructure Summary

Linux

✓ CPU Usage

18%

✓ Memory

61%

✓ Disk

43%

----------------------------------

Docker

✓ Running Containers

6

✓ Healthy

6

----------------------------------

Kubernetes

✓ Nodes Ready

3

✓ Pods Healthy

24

----------------------------------

Furiosa Runtime

✓ Runtime Active

✓ NPU Healthy

✓ Temperature Normal

✓ Core Utilization

47%

----------------------------------

Overall Platform Health

★★★★★ Excellent
```

---

# 📈 Performance Snapshot

| Category | Status |
|-----------|--------|
| OpenAI Compatible API | ✅ |
| Streaming Response | ✅ |
| Tool Calling | ✅ |
| MCP Framework | ✅ |
| Linux Operations | ✅ |
| Docker Operations | ✅ |
| Kubernetes Integration | 🚧 |
| Furiosa Runtime | ✅ |
| Android Remote Agent | ✅ |
| Enterprise RAG | 🚧 |

---

Continue Reading ↓

- Deployment Guide
- Benchmark
- Screenshots
- Documentation
- Product Roadmap
- Future Vision
---

# 🚀 Deployment Guide

The NPU Agentic Platform is designed for deployment in enterprise environments with support for Docker, Kubernetes, and on-premises infrastructure.

## Prerequisites

| Component | Requirement |
|-----------|-------------|
| Operating System | Ubuntu 22.04 LTS or later |
| Container Runtime | Docker 24+ |
| Node.js | 20+ |
| Package Manager | npm |
| AI Runtime | Furiosa Runtime |
| Accelerator | FuriosaAI RNGD NPU |

---

## Clone Repository

```bash
git clone https://github.com/nanuwa/NPU-Agentic-Platform.git

cd NPU-Agentic-Platform
```

---

## Install Dependencies

```bash
cd system-mcp

npm install

npm run build
```

---

## Start Platform

```bash
npm start
```

---

## Verify API

```bash
curl http://localhost:8001/v1/chat/completions \
-H "Content-Type: application/json" \
-d '{
  "model":"exaone",
  "messages":[
    {
      "role":"user",
      "content":"Hello"
    }
  ]
}'
```

---

# 🐳 Docker Deployment

Build the application image.

```bash
docker build -t npu-agentic-platform .
```

Run the container.

```bash
docker run -d \
--name npu-agentic-platform \
-p 8001:8001 \
npu-agentic-platform
```

Check running containers.

```bash
docker ps
```

---

# ☸ Kubernetes Deployment

Deploy the platform.

```bash
kubectl apply -f kubernetes/
```

Verify workloads.

```bash
kubectl get pods

kubectl get deployments

kubectl get services
```

---

# 📊 Benchmark

The following summarizes the current implementation status.

| Feature | Status |
|----------|--------|
| OpenAI Compatible API | ✅ |
| Streaming Response | ✅ |
| Tool Calling | ✅ |
| MCP Framework | ✅ |
| Linux Operations | ✅ |
| Docker Operations | ✅ |
| Kubernetes Operations | 🚧 |
| Furiosa Runtime | ✅ |
| Android Integration | ✅ |
| Enterprise RAG | 🚧 |
| Multi-Agent Runtime | 🚧 |

---

# 📈 Platform Maturity

| Area | Progress |
|------|----------|
| Infrastructure | ██████████ 100% |
| OpenClaw Runtime | ██████████ 100% |
| Furiosa Runtime | ██████████ 100% |
| OpenAI API | ██████████ 100% |
| Linux MCP | ██████████ 100% |
| Docker MCP | ██████████ 100% |
| Kubernetes MCP | ███████░░░ 70% |
| Enterprise RAG | ███░░░░░░░ 30% |
| Multi-Agent | ██░░░░░░░░ 20% |

---

# 📸 Screenshots

The following screenshots will be updated as the platform evolves.

```
docs/images/

platform-overview.png

openclaw-dashboard.png

linux-mcp.png

docker-mcp.png

kubernetes-mcp.png

furiosa-runtime.png

capability-dashboard.png

health-analyzer.png

android-agent.png
```

---

# 🎥 Demonstrations

Planned demonstration videos include:

- Platform Overview
- OpenClaw Runtime
- Linux MCP
- Docker MCP
- Kubernetes MCP
- Furiosa Runtime
- OpenAI Compatible API
- Enterprise RAG
- Android Agent

GIF previews will also be included.

```
docs/videos/

platform-demo.gif

linux-demo.gif

docker-demo.gif

kubernetes-demo.gif

furiosa-demo.gif

android-demo.gif
```

---

# 📚 Documentation

Project documentation is organized under the `docs/` directory.

```
docs/

├── README.md
│
├── architecture/
│   ├── ARCHITECTURE.md
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── MCP_ARCHITECTURE.md
│   └── FURIOSA_RUNTIME.md
│
├── setup/
│   ├── INSTALL.md
│   ├── OPENCLAW.md
│   ├── K_EXAONE.md
│   ├── FURIOSA.md
│   └── DEVELOPMENT.md
│
├── deployment/
│   ├── DOCKER.md
│   ├── KUBERNETES.md
│   ├── ONPREM.md
│   └── PRODUCTION.md
│
├── api/
│   ├── OPENAI_API.md
│   ├── MCP_API.md
│   └── TOOL_CALLING.md
│
├── benchmark/
│
├── examples/
│
└── images/
```

The documentation will continue to expand with deployment guides, API references, architecture documentation, and operational best practices.

---

# 🗺 Product Roadmap

| Version | Planned Features |
|---------|------------------|
| v0.1 | Platform Foundation |
| v0.2 | System MCP |
| v0.3 | Linux & Docker |
| v0.4 | Kubernetes |
| v0.5 | Furiosa Runtime |
| v0.6 | Capability Dashboard |
| v0.7 | Enterprise RAG |
| v0.8 | Vision AI |
| v0.9 | Android Agent |
| v1.0 | Enterprise Agentic AI Platform |

---

# 🌍 Future Vision

The long-term vision of the NPU Agentic Platform is to provide a unified AI Operations environment capable of managing enterprise infrastructure through intelligent autonomous agents.

Future capabilities include:

- Multi-Agent Collaboration
- Distributed MCP Services
- Enterprise Workflow Automation
- AI-native Infrastructure Operations
- Hybrid Cloud Management
- GPU/NPU Resource Scheduling
- Knowledge Graph Integration
- Autonomous AIOps
- Digital Twin Integration
- Enterprise AI Marketplace

---

# 🤝 Contributing

Contributions are welcome from developers, researchers, and AI practitioners.

Areas of contribution include:

- MCP Tool Development
- Infrastructure Automation
- Kubernetes Integration
- Furiosa Runtime Optimization
- Enterprise AI Services
- Documentation
- Testing and Benchmarking
- Tutorials and Examples

Please submit issues or pull requests following the project's contribution guidelines.

---

# 📖 Related Technologies

| Technology | Purpose |
|------------|---------|
| OpenClaw | Agent Runtime |
| K-EXAONE | Large Language Model |
| Furiosa Runtime | AI Runtime |
| FuriosaAI RNGD | NPU Accelerator |
| MCP | Tool Integration |
| Docker | Container Platform |
| Kubernetes | Orchestration |
| MongoDB | Data Platform |
| Node.js | Runtime |
| TypeScript | Development Language |

---

# 🎯 Project Philosophy

The NPU Agentic Platform is not intended to be another chatbot.

Its mission is to bridge the gap between Large Language Models and real-world enterprise infrastructure through safe, observable, and extensible AI operations.

The platform is built around five core principles:

- **Understand** — Interpret natural language and infrastructure context.
- **Reason** — Analyze operational conditions using AI.
- **Plan** — Select the appropriate tools and execution strategy.
- **Observe** — Continuously monitor infrastructure health.
- **Operate** — Execute infrastructure actions safely through MCP.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute the software under the terms of the MIT License.

---

# ❤️ Acknowledgements

Special thanks to the open-source communities and technologies that make this project possible.

- OpenClaw
- LG AI Research (K-EXAONE)
- FuriosaAI
- Model Context Protocol (MCP)
- Docker
- Kubernetes
- Node.js
- TypeScript
- Open Source Community

---

# ⭐ Support the Project

If you find this project useful, please consider:

- ⭐ Starring the repository
- 🍴 Forking the project
- 🐞 Reporting issues
- 💡 Suggesting new features
- 📢 Sharing the project with the community

Your support helps improve the platform for everyone.

---

<p align="center">

# 🚀 NPU Agentic Platform

### Enterprise Agentic AI Operations Platform

Powered by

**OpenClaw • K-EXAONE • FuriosaAI RNGD • MCP**

---

**Understand • Reason • Plan • Observe • Operate**

Building the next generation of Enterprise AI Infrastructure.

⭐ If this project helps you, please consider giving it a **Star**.

</p>
