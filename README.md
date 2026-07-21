# 🚀 NPU Agentic Platform

<p align="center">

**Enterprise Agentic AI Platform powered by OpenClaw, K-EXAONE and Furiosa NPU**

Build intelligent AI Agents that can understand, reason, search, operate Linux systems, control Kubernetes, interact with Docker, perform Retrieval-Augmented Generation (RAG), execute Vision AI workflows, and orchestrate enterprise infrastructure through the **Model Context Protocol (MCP)**.

---

![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Version](https://img.shields.io/badge/Version-v0.2.0--alpha-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![NodeJS](https://img.shields.io/badge/Node.js-24.x-green)
![OpenClaw](https://img.shields.io/badge/OpenClaw-Agentic_AI-purple)
![MCP](https://img.shields.io/badge/Model_Context_Protocol-MCP-red)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5)
![Furiosa](https://img.shields.io/badge/Furiosa-NPU-orange)
![K--EXAONE](https://img.shields.io/badge/K--EXAONE-LLM-red)

</p>

---

# 🌟 Overview

**NPU Agentic Platform** is an enterprise-grade Agentic AI Operations Platform built on **OpenClaw**, **K-EXAONE**, **Furiosa NPU**, and the **Model Context Protocol (MCP)**.

Unlike traditional LLM applications that only generate text, NPU Agentic Platform enables AI Agents to understand, reason, observe, and operate real-world infrastructure through natural language.

The platform provides a unified runtime for infrastructure automation, AI-assisted operations, and enterprise workflows.

### Platform Capabilities

* 🤖 AI Runtime powered by OpenClaw
* 🧠 K-EXAONE Large Language Model Integration
* 🖥 Linux System Operations
* 🐳 Docker Container Operations
* ☸ Kubernetes Cluster Operations
* 🚀 Furiosa NPU Runtime Monitoring
* 📊 AI Health Analysis
* 📂 Filesystem Operations
* 🌐 Web Search Integration
* 📚 Enterprise RAG
* 👁 Vision AI
* 📱 Android Agent Integration

Every capability is exposed through MCP, allowing AI Agents to execute infrastructure operations using natural language.


---

# 🎬 Demonstrations

This repository will include practical demonstrations covering:

- Linux Infrastructure Operations
- Docker Container Management
- Kubernetes Cluster Administration
- Furiosa NPU Monitoring
- Capability Dashboard
- Enterprise RAG
- Android Agent
- Vision AI

Future releases will provide:

- GIF Demonstrations
- YouTube Walkthroughs
- End-to-End System Videos

---

# 🏗 Architecture

## Enterprise Architecture


```
                                     Android Tablet
                                            │
                                   HTTPS / WebSocket
                                            │
                                            ▼
                              +----------------------------+
                              |     OpenClaw Gateway       |
                              +-------------+--------------+
                                            │
                              Planner / Memory / Tool Calling
                                            │
                                            ▼
                              +----------------------------+
                              |    Capability Dashboard    |
                              +-------------+--------------+
                                            │
        ┌───────────────────────┼───────────────────────────────┐
        │                       │                               │
        ▼                       ▼                               ▼
 +----------------+     +----------------+             +----------------+
 | Infrastructure |     |  Enterprise AI |             | Device Control |
 +--------+-------+     +--------+-------+             +--------+-------+
          │                      │                              │
          │                      │                              │
          ▼                      ▼                              ▼
 +----------------+      +---------------+             +----------------+
 |   Linux MCP    |      |    Web MCP    |             | Android Agent  |
 |   Docker MCP   |      |    RAG MCP    |             +----------------+
 | Kubernetes MCP |      |  Vision MCP   |
 | Furiosa MCP    |      +---------------+
 +--------+-------+
          │
          ▼
 +----------------------------+
 |        Service Layer        |
 +-------------+--------------+
               │
               ▼
 +----------------------------+
 |     Command Executor        |
 +-------------+--------------+
               │
               ▼
 +--------------------------------------------------------------+
 | Linux CLI | Docker Engine | Kubernetes API | Furiosa Runtime |
 +---------------------------+----------------------------------+
                             │
                             ▼
                      +--------------+
                      | K-EXAONE LLM |
                      +------+-------+
                             │
                             ▼
                      +--------------+
                      | Furiosa NPU  |
                      +--------------+

 

---

# 📈 High-Level Workflow
mermaid
flowchart TD

A[User]

B[OpenClaw]

C[Planner]

D[Memory]

E[System MCP]

F[Web MCP]

G[RAG MCP]

H[Furiosa Runtime]

I[K-EXAONE]

J[Answer]

A --> B

B --> C

C --> D

C --> E

C --> F

C --> G

E --> H

H --> I

F --> I

G --> I

I --> J
---

# 🧩 Platform Components

| Component             | Responsibility       |
| --------------------- | -------------------- |
| OpenClaw Gateway      | Agent Runtime        |
| K-EXAONE              | LLM                  |
| Linux Operations      | Infrastructure       |
| Docker Operations     | Container Management |
| Kubernetes Operations | Cluster Management   |
| Furiosa Runtime       | NPU Runtime          |
| Capability Dashboard  | Runtime Discovery    |
| AI Health Analyzer    | AI Operations        |
| Enterprise RAG        | Knowledge Platform   |
| Vision AI             | Image Intelligence   |

---

# 📁 Repository Structure

```
system-mcp/

src/

core/

services/

system/

tools/

linux/

docker/

capability/

utils/

types/

docs/

---

# ⚙ Technology Stack

| Category        | Technology                   |
| --------------- | ---------------------------- |
| AI Runtime      | OpenClaw                     |
| LLM             | K-EXAONE                     |
| Accelerator     | Furiosa NPU                  |
| Tool Protocol   | Model Context Protocol (MCP) |
| Backend         | Node.js                      |
| Language        | TypeScript                   |
| Container       | Docker                       |
| Orchestration   | Kubernetes                   |
| Vector Database | MongoDB                      |
| Mobile          | Android                      |
| API             | OpenAI Compatible API        |

---

# 🛠 MCP Services

| MCP Service      | Description                    | Status |
| ---------------- | ------------------------------ | ------ |
| Linux Tools      | hostname, uptime, memory, disk | 🚧     |
| Docker Tools     | containers, logs, images       | 🚧     |
| Kubernetes Tools | nodes, pods, events            | 🚧     |
| Furiosa Tools    | NPU monitoring                 | 🚧     |
| GitHub MCP       | Repository operations          | ⏳      |
| Web Search MCP   | Search engine integration      | ⏳      |
| Weather MCP      | Weather services               | ⏳      |
| RAG MCP          | Enterprise Knowledge Search    | ⏳      |
| Vision MCP       | Image Generation & Analysis    | ⏳      |

---

# 🚀 Development Roadmap

| Sprint    | Goal                   | Status         |
| --------- | ---------------------- | -------------- |
| Sprint 1  | OpenClaw Installation  | ✅ Complete     |
| Sprint 2A | MCP Foundation         | ✅ Complete     |
| Sprint 2B | System MCP Development | 🚧 In Progress |
| Sprint 3  | Web MCP                | ⏳ Planned      |
| Sprint 4  | Enterprise RAG         | ⏳ Planned      |
| Sprint 5  | Vision AI              | ⏳ Planned      |
| Sprint 6  | Android Agent          | ⏳ Planned      |

---

# 📚 Example Queries

"Show me all running Docker containers"

"Are there any failed Kubernetes Pods?"

"Check current NPU utilization."

"Analyze today's system logs."

"What capabilities are available?"

"Search enterprise knowledge."

"Generate an image from this prompt."

---

# 🎯 Project Vision

The long-term vision of **NPU Agentic Platform** is to provide a unified enterprise platform where AI Agents can:

* Understand natural language
* Execute infrastructure operations
* Manage Linux servers
* Control Docker and Kubernetes
* Monitor Furiosa NPUs
* Search enterprise knowledge
* Generate and analyze images
* Interact with Android devices
* Orchestrate enterprise AI workflows

NPU Agentic Platform aims to become a unified AI Operations Platform where Large Language Models can understand, reason, observe, and operate enterprise infrastructure through natural language while leveraging Furiosa NPU acceleration for high-performance AI workloads.

---

# 🤝 Capability Dashboard

AI Runtime

✔ OpenClaw

✔ K-EXAONE

Infrastructure

✔ Linux

✔ Docker

✔ Kubernetes

✔ Furiosa

AI Services

✔ Capability Dashboard

✔ Health Analyzer

✔ Web Search

✔ RAG

✔ Vision

✔ Android

---

# 📄 License

This project is released under the MIT License.

---

<p align="center">

**Built with ❤️ using OpenClaw, K-EXAONE, Furiosa NPU and the Model Context Protocol.**

</p>
