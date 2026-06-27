# Track B — System Design (HLD + LLD)

**Target**: Design any system cold in 40 minutes with clear trade-offs
**Focus**: Google-scale consumer systems + infrastructure systems (alternating)
**Method**: Framework → Practice → Mock

---

## How Each Session Works

**Framework sessions** (~45 min):
1. Study the design approach/concept (15 min)
2. Practice applying it to a specific system (30 min)

**Design sessions** (~60 min):
1. Time yourself: 5 min requirements, 5 min estimation, 10 min high-level, 20 min deep-dive, 5 min wrap-up
2. Write your design (diagram + text)
3. Compare with reference material
4. Note what you missed

**LLD sessions** (~45 min):
1. Design classes, interfaces, and interactions
2. Apply SOLID principles
3. Write the core code

---

## The Framework (Learn This First)

### System Design Template (for every problem):
1. **Requirements** (3 min): Functional + Non-functional + Scale numbers
2. **Estimation** (3 min): QPS, storage, bandwidth, memory
3. **API Design** (3 min): Core endpoints/RPCs
4. **High-Level Architecture** (10 min): Components, data flow
5. **Data Model** (5 min): Schema, storage choices
6. **Deep Dive** (15 min): Scaling bottleneck, interesting component
7. **Trade-offs** (3 min): What did you choose and why? What's the alternative?

---

## Module 1: Foundations (Sessions 1-8)

### Session 1 — The Framework
**Study**: System design interview structure, back-of-envelope estimation
**Practice**: Estimate YouTube's daily storage needs. Estimate Google Search QPS.
**Deliverable**: Your cheat sheet of estimation numbers (users, QPS, storage per message/image/video)

### Session 2 — Scaling Fundamentals
**Study**: Horizontal vs vertical scaling, load balancing, caching layers, CDN, database replication
**Practice**: Draw a generic 3-tier web architecture that handles 10K QPS → 100K QPS → 1M QPS
**Key Question**: At each scale jump, what breaks first and how do you fix it?

### Session 3 — Database Design Patterns
**Study**: SQL vs NoSQL, sharding strategies, consistent hashing, replication (leader-follower, multi-leader)
**Practice**: Design the data layer for a social network (users, posts, follows, feed)
**Key Question**: When do you shard? How do you choose the shard key?

### Session 4 — Caching & CDN
**Study**: Cache-aside, write-through, write-behind, cache invalidation, CDN for static + dynamic
**Practice**: Add caching to your social network design. What do you cache? How do you invalidate?
**Key Question**: What's the thundering herd problem? How do you prevent cache stampede?

### Session 5 — Message Queues & Async
**Study**: Pub/sub, message brokers, exactly-once delivery, dead letter queues, backpressure
**Practice**: Design async notification delivery for 10M users
**Key Question**: How do you guarantee exactly-once processing? (Spoiler: you usually can't — discuss trade-offs)

### Session 6 — Consistency & Availability (CAP)
**Study**: CAP theorem (practical interpretation), eventual consistency, strong consistency, conflict resolution
**Practice**: Design a collaborative document editor — what consistency model do you need?
**Key Question**: Where does Google choose CP vs AP in their systems?

### Session 7 — Rate Limiting & API Gateway
**Study**: Token bucket, sliding window, distributed rate limiting, API gateway patterns
**Design (timed 40 min)**: Design a distributed rate limiter for a cloud API gateway
**Compare**: Check Alex Xu's rate limiter chapter. What did you miss?

### Session 8 — LLD: Design Patterns for System Design
**Study**: Strategy, Observer, Factory, Builder — how they show up in system internals
**LLD Practice**: Design a Notification Service (interface, concrete channels, routing logic)
**Code**: Write the core interfaces and 2 implementations in Java

---

## Module 2: Google-Scale Consumer Systems (Sessions 9-20)

### Session 9 — URL Shortener
**Design (timed 40 min)**: TinyURL — shorten, redirect, analytics, rate limit
**Deep Dive**: Hash collision handling, Base62 encoding, read-heavy optimization
**Scale**: 100M URLs created/day, 10B redirects/day

### Session 10 — News Feed / Timeline
**Design (timed 40 min)**: Twitter/X feed — post, follow, timeline generation
**Deep Dive**: Fan-out on write vs fan-out on read, celebrity problem
**Scale**: 500M DAU, 10K followers average, 1M+ for celebrities

### Session 11 — Chat System (WhatsApp/Messenger)
**Design (timed 40 min)**: 1:1 and group chat with read receipts, online status
**Deep Dive**: WebSocket management, message ordering, offline delivery
**Scale**: 1B DAU, 100B messages/day

### Session 12 — YouTube / Video Streaming
**Design (timed 40 min)**: Upload, transcode, stream, recommend
**Deep Dive**: Chunked upload, adaptive bitrate streaming, CDN for video
**Scale**: 500M DAU, 1B hours watched/day, 500 hours uploaded/min

### Session 13 — Google Drive / Dropbox
**Design (timed 40 min)**: File sync, versioning, sharing, collaboration
**Deep Dive**: Block-level dedup, delta sync, conflict resolution
**Scale**: 1B users, 10B files, sync across 5 devices per user

### Session 14 — Google Maps
**Design (timed 40 min)**: Routing, ETA, live traffic, place search
**Deep Dive**: Graph partitioning (A* vs Dijkstra at scale), geospatial indexing (S2/H3)
**Scale**: 1B daily queries, real-time traffic from 100M active drivers

### Session 15 — Google Search
**Design (timed 40 min)**: Web crawl, index, rank, serve
**Deep Dive**: Inverted index, PageRank, sharding the index, serving latency
**Scale**: 8.5B searches/day, 100B+ pages indexed

### Session 16 — Notification System
**Design (timed 40 min)**: Multi-channel (push, email, SMS), preferences, throttling
**Deep Dive**: Priority queues, deduplication, delivery guarantees, user preference engine
**Scale**: 10B notifications/day, 5 channels, <1s for priority alerts

### Session 17 — Distributed Key-Value Store
**Design (timed 40 min)**: Like DynamoDB/Cassandra — distributed, eventually consistent
**Deep Dive**: Consistent hashing, vector clocks, gossip protocol, read repair
**Scale**: 1M QPS writes, 10M QPS reads, 100TB+ data

### Session 18 — Job Scheduler (Google Cloud Scheduler)
**Design (timed 40 min)**: Cron-like scheduling, one-time jobs, retry, distributed locking
**Deep Dive**: Leader election, sharded time wheels, exactly-once execution
**Scale**: 100M scheduled jobs, 1M concurrent executions

### Session 19 — Metrics / Monitoring System
**Design (timed 40 min)**: Ingest metrics, store time-series, query, alert
**Deep Dive**: Write path (batching, compression), query path (pre-aggregation, downsampling)
**Scale**: 100M time series, 10M data points/sec ingestion

### Session 20 — CI/CD Pipeline System
**Design (timed 40 min)**: Build, test, deploy pipeline (like Google's TAP)
**Deep Dive**: DAG execution, artifact caching, test parallelization, canary + rollback
**Scale**: 50K builds/day, 1M test executions/day, <15 min build time target

---

## Module 3: Infrastructure Deep-Dives (Sessions 21-30)

### Session 21 — LLD: Rate Limiter Library
**Design + Code**: Multiple algorithms (token bucket, sliding window, fixed window)
**Implementation**: Interface + 3 strategies in Java. Thread-safe.
**Test**: Concurrent access, edge cases at boundary

### Session 22 — LLD: In-Memory Cache (Like Memcached)
**Design + Code**: LRU eviction, TTL, thread-safe, configurable capacity
**Implementation**: Java + Go versions
**Discuss**: Why LRU vs LFU? When would you switch eviction policy?

### Session 23 — LLD: Pub/Sub Message Broker
**Design + Code**: Topics, subscriptions, at-least-once delivery, dead letter queue
**Implementation**: In-memory in Java with proper concurrency
**Discuss**: How would you make this distributed?

### Session 24 — Design a Container Orchestrator
**Design (timed 40 min)**: Simplified Kubernetes — schedule containers, health check, restart
**Deep Dive**: Scheduling algorithms, resource binpacking, node failure handling
**Connect**: How does this relate to Borg (Google's internal system)?

### Session 25 — Design a Service Mesh
**Design (timed 40 min)**: Sidecar proxy, mTLS, traffic routing, circuit breaking
**Deep Dive**: Data plane vs control plane, xDS protocol, observability
**Connect**: How does Istio/Envoy implement this?

### Session 26 — Design a Release Orchestration System
**Design (timed 40 min)**: Pipeline stages, canary deployment, rollback, approval gates
**Deep Dive**: State machine for release stages, concurrent release conflict resolution
**Key Question**: How do you safely orchestrate thousands of services releasing in parallel without correlated failures?

### Session 27 — Design a Distributed Tracing System
**Design (timed 40 min)**: Like Jaeger/Zipkin — trace propagation, storage, query
**Deep Dive**: Context propagation, sampling strategies, tail-based sampling
**Scale**: 100K spans/sec ingestion, 7 day retention, <100ms query latency

### Session 28 — Design a Feature Flag System
**Design (timed 40 min)**: Server-side evaluation, targeting rules, percentage rollout, real-time updates
**Deep Dive**: Evaluation engine, segment targeting, A/B testing integration
**Scale**: 10B evaluations/day, <5ms evaluation latency, 1000 flags

### Session 29 — Design a Distributed Lock Service
**Design (timed 40 min)**: Like Chubby/ZooKeeper — leader election, distributed locks, watch
**Deep Dive**: Paxos/Raft for consensus, lease-based locks, fencing tokens
**Key Question**: What happens when the lock holder dies? How do you detect it?

### Session 30 — Design Review & Synthesis
**Pick 3 systems you designed** (one consumer, one infra, one LLD)
**Re-design from scratch** in 35 min each
**Compare**: How much better are you than your first attempt?
**Write**: Your "signature" system design — the one you'll nail in any interview

---

## Module 4: Mock Interviews & Mastery (Sessions 31-40)

### Session 31 — Mock #1: Random Consumer System
**Format**: 45 min, no prep. Pick randomly: YouTube, Chat, Drive, Maps, or Search
**Self-evaluate**: Did you cover requirements → estimation → design → deep dive → trade-offs?

### Session 32 — Mock #2: Random Infrastructure System
**Format**: 45 min, no prep. Pick randomly: KV Store, Scheduler, Tracing, or Orchestrator

### Session 33 — Mock #3: Novel System (never practiced)
**Format**: 45 min. Design one of: Uber/Lyft, Spotify, Google Photos, Typeahead Search
**Focus**: Can you apply your framework to something new?

### Session 34 — LLD Mock: Design in 30 min
**Format**: 30 min. Design one of: Parking Lot, Elevator System, Library Management
**Code**: Write the class diagram + core methods

### Session 35 — Deep Dive Practice
**Pick any previous design. Go DEEP on one component for 45 min:**
- Database schema + queries for hot paths
- Caching strategy with invalidation flows
- Failure modes and recovery procedures

### Session 36 — Scale Estimation Speed Round
**10 systems, 3 min each**: Estimate QPS, storage, bandwidth for each
**Goal**: Be fast and confident with numbers

### Session 37 — Trade-off Articulation
**For 5 systems you've designed, write 3 trade-offs each:**
- "I chose X over Y because Z. If we needed A instead, I'd reconsider."
**Practice saying these out loud** (Google interviewers probe trade-offs heavily)

### Session 38 — Mock #4: Full Interview Simulation
**Format**: 45 min. Have someone ask you (or use a random system). Speak out loud.
**Record yourself** if possible. Review.

### Session 39 — Weak System Revisit
**Identify your 2 weakest designs. Re-do them from scratch.**
**Focus on**: What you struggled with last time

### Session 40 — Final Synthesis
**Write your interview cheat sheet:**
- 3 systems you can design perfectly (your "go-to" deep dives)
- Estimation reference numbers
- 5 universal trade-offs you can discuss for any system
- Red flags to avoid (premature optimization, ignoring requirements, no scale numbers)
