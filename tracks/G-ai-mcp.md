# Track G — AI / MCP / Agents (Build-First)

**Target**: Ship a working MCP server + a Spring AI app with RAG and tool calling. Be able to discuss agent architectures with conviction.
**Language**: Java (Spring AI app + MCP server via the official Java SDK)
**Method**: Build the protocol first, then layer in app frameworks, then agents. Theory only when you hit something you can't ship without.
**Reference**:
- [MCP Complete Guide (O'Reilly)](https://learning.oreilly.com/course/mcp-complete-guide/9781806384136/)
- [Spring AI in Action (Manning)](https://learning.oreilly.com/videos/spring-ai-in/9781633436114VE/)
- [Build AI Apps with Spring AI (O'Reilly)](https://learning.oreilly.com/videos/build-ai-apps/9781806704132/)
- [AI Engineer (O'Reilly video)](https://learning.oreilly.com/videos/ai-engineer/9780135586570/)
- [MCP spec](https://modelcontextprotocol.io/)

---

## How Each Session Works

**Build sessions** (~60 min): Code something that runs by end-of-session. Demo it to yourself.
**Concept sessions** (~45 min): Read + summarize + map to what you'll build next.
**Iterate sessions** (~60 min): Take the previous build and add one capability (auth, eval, tool, observability).

**Theme**: Skills / plugins = architecture / testing / design. Every session, ask: "If this were a skill or a plugin, what would its boundary be?"

---

## Prerequisites (One-time)

- [ ] Anthropic API key (for testing MCP server with Claude Code/Desktop)
- [ ] Java 21+ installed
- [ ] Spring Boot 3.3+ project set up locally
- [ ] Familiarity with JSON-RPC 2.0 (read the spec once, ~20 min)

---

## Module 1: MCP Protocol & Your First Server (Sessions 1–6)

Goal: Understand the MCP wire protocol, then ship a real MCP server. By the end you should be able to add tools/resources/prompts without checking the spec.

### Session 1 — MCP: What & Why
**Study**: Read MCP spec overview (transport, lifecycle, capabilities). Watch the first chapter of the O'Reilly MCP course.
**Core ideas**: Client ↔ Server protocol, JSON-RPC over stdio/SSE/HTTP, capability negotiation, three primitives (tools, resources, prompts)
**Connect**: Why is MCP different from "just calling a REST API"? Think about Claude Code's plugin model.
**Output**: 1-page "MCP in your own words" doc.

### Session 2 — Hello MCP Server (stdio transport)
**Build**: A Java MCP server with ONE tool: `echo(text: string) → string`. Stdio transport. Use the official Java SDK.
**Verify**: Wire it into Claude Code via `~/.claude.json` or via Claude Desktop. Call the tool from a chat. Watch it work.
**Reflect**: Where does the stdio handshake happen? Trace one round-trip in the logs.

### Session 3 — Tools, Resources, Prompts
**Build**: Extend your server with:
- One resource: `release://{id}` returning a sample release JSON
- One prompt: `summarize-release` with a templated argument
**Verify**: Claude can list, read, and invoke all three primitives.
**Key Insight**: Tools are imperative (model calls them). Resources are declarative (model reads them as context). Prompts are user-facing templates. Don't confuse them.

### Session 4 — Real Tool: Release Lookup
**Build**: Mock a release service in Java with realistic shapes (release id, status, services, timestamps). Wire your MCP tool to it.
**Add**: A second tool `find-failed-releases(time_window: string)`.
**Verify**: Ask Claude "what releases failed in the last hour?" — it should call your tool and answer.
**Reflect**: What other tools would you add for a release engineer?

### Session 5 — Transport: HTTP + SSE
**Build**: Re-run the same server over HTTP+SSE instead of stdio. Host it on Cloud Run (cross-track with F — Session 1 set this up).
**Verify**: Connect from Claude Desktop using the HTTP transport. Same tools work.
**Reflect**: When would you choose stdio over HTTP? (Hint: local CLI tools vs. shared org-wide services.)

### Session 6 — Auth & Error Handling for MCP
**Build**: Add token auth to the HTTP transport. Return structured errors (per MCP spec — `isError: true` with a content payload).
**Break it**: Pass a bad token. Verify the server rejects cleanly. Pass a malformed request. Verify the JSON-RPC error code is correct.
**Output**: Server is ready for a teammate to use. Push to a real repo.

---

## Module 2: Spring AI Foundations (Sessions 7–13)

Goal: Be able to build a production-shaped Spring AI app — chat, embeddings, RAG, tool calling, evals, observability. Spring AI is the most polished JVM AI framework.

### Session 7 — Spring AI: ChatClient
**Study**: ChatClient abstraction, model abstraction layer (Anthropic, OpenAI, Vertex, etc.), prompt templates
**Build**: Spring Boot app. One endpoint `POST /chat` that proxies to Claude via ChatClient.
**Verify**: curl works. Streaming response works.

### Session 8 — Prompts & Structured Output
**Study**: PromptTemplate, output converters (BeanOutputConverter for typed responses)
**Build**: Endpoint that classifies a free-text "what kind of incident is this?" → returns a typed `Incident` Java object.
**Reflect**: Where does structured output beat free-text? Where does it lose flexibility?

### Session 9 — Embeddings & Vector Store
**Study**: EmbeddingClient, vector stores (in-memory for now, pgvector later), similarity search
**Build**: Index a handful of mock runbook markdown files into an in-memory vector store. Build a search endpoint.
**Verify**: Search "what to do when validator times out" returns the right runbook.

### Session 10 — RAG (Retrieval Augmented Generation)
**Build**: `POST /ask` — given a question, retrieve top-k runbooks, stuff them into a prompt, return Claude's answer with citations.
**Iterate**: Try chunking strategies (paragraph, fixed-size, semantic). Compare answer quality.
**Connect**: This is the architecture pattern you'd use for a "Release Assistant."

### Session 11 — Tool Calling (Function Calling) in Spring AI
**Build**: Register Java methods as tools (e.g., `getReleaseStatus(String id)`). Let Claude call them mid-conversation.
**Critical comparison**: When do you reach for Spring AI tool calling vs. building an MCP server? (Hint: in-process for app-specific tools, MCP server for cross-app shareable tools.)

### Session 12 — Evals & Quality Loops
**Study**: AI evaluators — relevance, factuality, hallucination detection. Eval datasets.
**Build**: An eval suite for your `/ask` RAG endpoint. 20 question/expected-answer pairs. Run on every change.
**Insight**: Without evals, you're flying blind. This is where most AI apps fail in production.

### Session 13 — Observability for AI Apps
**Study**: Token usage tracking, prompt/response logging (privacy-aware), latency percentiles, model cost attribution
**Build**: Micrometer metrics for token usage, latency, error rate. Pipe to Prometheus (or Cloud Monitoring from Track F).
**Reflect**: What's the right blast-radius scope for a hallucination metric — per endpoint, per prompt template, per user?

---

## Module 3: Project — "Release Copilot" (Sessions 14–18)

Build target: A Spring AI chat app that consumes your MCP server from Module 1 as a tool, retrieves over release runbooks via RAG, and answers release engineer questions. Evaluated. Observable. Demo-ready.

**Repo to create**: `ai-mcp/release-copilot/`

### Session 14 — Wire Spring AI to your MCP Server
**Build**: Connect the Spring AI app (Module 2) to your Cloud Run-hosted MCP server (Module 1) using Spring AI's MCP client integration.
**Verify**: Spring AI app discovers your MCP tools dynamically. A chat that needs release data triggers the MCP server.

### Session 15 — RAG over Release Docs
**Build**: Index sample release runbooks (use public-shaped equivalents). Use pgvector on Cloud SQL (cross-track with F).
**Iterate**: Add re-ranking. Add hybrid search (BM25 + vector).

### Session 16 — Multi-Step Reasoning
**Build**: A workflow where Claude must (1) look up a release via MCP, (2) check runbooks via RAG, (3) propose an action. All in one chat.
**Reflect**: When do you let the LLM orchestrate vs. control the flow in code?

### Session 17 — Evals + Hardening
**Build**: Extend your eval suite to cover the full Copilot flow. Add adversarial prompts ("ignore your instructions"). Verify the app behaves.
**Add**: Rate limiting, prompt injection guardrails, PII scrubbing on inputs.

### Session 18 — Architecture Diagram + Demo Script
**Write**: 1-pager architecture diagram. Component responsibilities. Failure modes.
**Build**: 3-minute demo script — open with the problem, show three scenarios, close with what's next.

---

## Module 4: Agents + Synthesis (Sessions 19–20)

### Session 19 — Agent Patterns
**Study**: Planner / executor / critic, ReAct loop, multi-agent systems, when to use orchestration vs. when to let the model decide. Read the Claude Code "skills" model — that's an opinionated agent architecture.
**Connect**: The doc theme — "skills/plugins = architecture/testing/design." Articulate that POV in your own words. When does a skill belong as a skill vs. as a prompt instruction vs. as code?
**Output**: 1-page "agent architecture POV" doc.

### Session 20 — Synthesis: AI/MCP Story
**Write from memory**:
- The MCP protocol model (transports, primitives, lifecycle)
- Spring AI's building blocks (ChatClient, embeddings, RAG, tool calling, evals)
- Your Copilot architecture
- The agent-pattern decision tree (when planner/executor/critic, when straight chat, when MCP)
**Prepare**: Your "AI/MCP story" for behavioral and architecture interviews.

---

## End-State Deliverables

Pinned in `ai-mcp/`:
- [ ] `mcp-server/` — Java MCP server with real tools, hosted on Cloud Run, token-auth'd
- [ ] `release-copilot/` — Spring AI app with RAG + MCP tool calling + evals + observability
- [ ] `mcp-cheatsheet.md` — protocol + primitives + transport decisions
- [ ] `agent-patterns-pov.md` — your architectural POV on agents/skills/plugins
- [ ] `evals/` — eval datasets and runner

---

## Connect to Other Tracks

- **Track B (System Design)**: Release Copilot is your worked example for "design an AI assistant for X" questions
- **Track C (Concurrency)**: MCP server concurrency model (handling many simultaneous tool calls) is a real concurrency exercise
- **Track F (Cloud Computing)**: Cloud Run hosts your MCP server; Cloud SQL pgvector backs RAG; Vertex AI is an alternative model provider
