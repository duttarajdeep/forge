# Track D — Infrastructure & Distributed Systems

**Target**: Articulate distributed systems trade-offs; hands-on infra fluency
**Method**: Concept → Connect to real systems → Build/demonstrate
**Reference**: DDIA (primary text), Google SRE book (supplementary)

---

## How Each Session Works

**Concept sessions** (~45-60 min):
1. Read/study the concept (25-30 min)
2. Draw it out — diagrams, data flow, failure modes (10 min)
3. Connect to a real system you know (10 min)

**Hands-on sessions** (~60 min):
1. Set up or build something that demonstrates the concept
2. Break it intentionally — observe failure behavior
3. Document what you learned

---

## Module 1: Distributed Systems Foundations (Sessions 1-12)

### Session 1 — Data Models & Query Languages
**Read**: DDIA Ch 2
**Core ideas**: Relational vs document vs graph models; impedance mismatch; query languages
**Sketch**: Data model diagram for a release orchestration system

### Session 2 — Storage Engines
**Read**: DDIA Ch 3
**Core ideas**: LSM-trees vs B-trees; SSTables; write amplification; read amplification
**Key Question**: Why does Cassandra use LSM-trees? Why does Postgres use B-trees?

### Session 3 — Encoding & Evolution
**Read**: DDIA Ch 4
**Core ideas**: JSON, Protocol Buffers, Avro; schema evolution; backward/forward compatibility
**Hands-on**: Define a .proto file. Add a field. Verify old clients still work.

### Session 4 — Replication
**Read**: DDIA Ch 5
**Core ideas**: Leader-follower, multi-leader, leaderless; sync vs async; consistency guarantees
**Key Question**: If the leader dies, what happens? How long is the failover?

### Session 5 — Partitioning (Sharding)
**Read**: DDIA Ch 6
**Core ideas**: Hash partitioning, range partitioning, secondary indexes, rebalancing
**Key Question**: Hot partition problem — what if 80% of traffic is for one tenant?

### Session 6 — Transactions
**Read**: DDIA Ch 7
**Core ideas**: ACID, isolation levels (read committed, snapshot, serializable), 2PL, SSI
**Key Question**: What's the difference between "serializable" in theory vs in practice?

### Session 7 — Problems of Distributed Systems
**Read**: DDIA Ch 8
**Core ideas**: Unreliable networks, unreliable clocks, process pauses, partial failure
**Key Question**: How do you distinguish "the service is slow" from "the service is dead"?

### Session 8 — Consistency & Consensus
**Read**: DDIA Ch 9
**Core ideas**: Linearizability, causal consistency, total order broadcast, Raft/Paxos, 2PC, 3PC
**Key Question**: Why is 2PC a "blocking" protocol? What does Raft improve?

### Session 9 — Batch Processing
**Read**: DDIA Ch 10
**Core ideas**: MapReduce, dataflow engines (Spark), join algorithms, fault tolerance in batch
**Key Question**: How does MapReduce handle a failed node mid-computation?

### Session 10 — Stream Processing
**Read**: DDIA Ch 11
**Core ideas**: Event sourcing, CDC, stream joins, exactly-once semantics, windowing
**Key Question**: "Exactly-once" in streaming — is it real? What does Kafka actually guarantee?

### Session 11 — Reliability & Fault Tolerance
**Read**: Google SRE Book Ch 1-4 (or summaries)
**Core ideas**: SLOs/SLIs/SLAs, error budgets, risk assessment, toil reduction
**Practice**: Define SLOs for a release orchestration system (availability, latency, correctness)

### Session 12 — Observability Fundamentals
**Study**: Three pillars — metrics, logs, traces; RED method; USE method
**Core ideas**: What to instrument, alert fatigue, service-level dashboards
**Practice**: Design a monitoring strategy for a critical microservice (what alerts, what dashboards)

---

## Module 2: Cloud-Native Infrastructure (Sessions 13-22)

### Session 13 — Containers Deep Dive
**Study**: OCI spec, namespaces (pid, net, mnt, uts, ipc, user), cgroups, seccomp
**Hands-on**: Run a container. Inspect its namespaces from the host (`/proc/[pid]/ns/`).
**Key Question**: How is a container different from a VM? What isolation does it NOT provide?

### Session 14 — Kubernetes Architecture
**Study**: Control plane (API server, etcd, scheduler, controller manager), data plane (kubelet, kube-proxy)
**Hands-on**: Set up a local cluster (kind/minikube). Explore with `kubectl get --raw`
**Key Question**: What happens step-by-step when you `kubectl apply` a Deployment?

### Session 15 — Kubernetes Workloads
**Study**: Pod lifecycle, Deployment strategies (rolling, recreate), StatefulSet, DaemonSet, Job/CronJob
**Hands-on**: Deploy an app. Trigger a rolling update. Observe pod replacement.

### Session 16 — Kubernetes Networking
**Study**: Service types (ClusterIP, NodePort, LoadBalancer), Ingress, DNS, NetworkPolicy
**Hands-on**: Expose a service. Trace the network path from client to pod.
**Key Question**: How does kube-proxy route traffic? What's the difference between iptables and IPVS mode?

### Session 17 — Kubernetes Configuration & Storage
**Study**: ConfigMap, Secret, PV/PVC, StorageClass, resource requests/limits, probes
**Hands-on**: Deploy an app with ConfigMap, liveness/readiness probes. Kill the probe — watch restart.

### Session 18 — Helm & Templating
**Study**: Chart structure, values.yaml, templates, hooks, dependencies, release lifecycle
**Hands-on**: Write a Helm chart for a Spring Boot app. Deploy. Upgrade with new values.

### Session 19 — Service Mesh Concepts
**Study**: Sidecar proxy pattern, mTLS, traffic management, observability injection
**Core ideas**: Data plane vs control plane, Envoy, xDS protocol
**Key Question**: When does a service mesh earn its keep, and when is it overkill?

### Session 20 — GitOps & Continuous Delivery
**Study**: Declarative desired state, reconciliation loop, ArgoCD/Flux architecture
**Core ideas**: Push vs pull deployment, drift detection, progressive delivery
**Hands-on**: Set up ArgoCD locally. Deploy from a git repo. Make a change. Watch sync.

### Session 21 — Observability Stack
**Study**: Prometheus (metrics), Grafana (dashboards), Jaeger/Tempo (traces), Loki (logs)
**Hands-on**: Instrument a Java app with Micrometer + Prometheus. Build a Grafana dashboard.

### Session 22 — CI/CD Pipeline Design
**Study**: Build → Test → Scan → Package → Deploy. Artifact caching, test parallelization.
**Design**: CI/CD pipeline for a Java microservice (Dockerfile → registry → K8s)
**Key Question**: What stages can run in parallel? What must be serialized? Where are the failure-recovery seams?

---

## Module 3: Google-Scale Infrastructure Concepts (Sessions 23-30)

### Session 23 — Google's Infrastructure Papers (Overview)
**Read summaries of**: Borg, Omega, MapReduce, Bigtable, Spanner, Chubby, GFS/Colossus
**Core insight**: Google invented most of what we use (K8s from Borg, HDFS from GFS, etc.)
**Map**: Which Google system → which open-source equivalent → which concept it teaches

### Session 24 — Borg & Large-Scale Scheduling
**Study**: Borg paper key ideas — resource binpacking, preemption, allocs, jobs vs tasks
**Key Question**: At Google scale (millions of jobs), what's the scheduling bottleneck?

### Session 25 — Spanner & Global Consistency
**Study**: TrueTime API, externally consistent transactions, Paxos groups, split/merge
**Core insight**: Spanner achieves global strong consistency using atomic clocks + GPS
**Key Question**: Why can't other databases do this? What's special about TrueTime?

### Session 26 — Load Balancing at Scale
**Study**: L4 vs L7 load balancing, Maglev (Google's L4 LB), consistent hashing for LB
**Core insight**: Google serves billions of requests — how does traffic reach the right server?
**Design**: Load balancing for a global service (anycast, geo-routing, health-aware)

### Session 27 — Capacity Planning & Autoscaling
**Study**: Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), custom metrics scaling
**Core ideas**: Scaling signals, cooldown periods, flapping prevention
**Hands-on**: Configure HPA. Load test. Watch scale-up and scale-down behavior.

### Session 28 — Reliability Engineering
**Study**: Chaos engineering principles, failure injection, game days, disaster recovery
**Core ideas**: Blast radius, circuit breakers, bulkheads, timeouts, retries with backoff
**Design**: Resilience strategy for a release orchestration system (what if the DB goes down mid-release?)

### Session 29 — Security in Distributed Systems
**Study**: Zero trust architecture, mTLS everywhere, RBAC, Pod Security Standards, supply chain security
**Core ideas**: Principle of least privilege, defense in depth, secrets management
**Key Question**: How would you handle auth between services in a zero-trust architecture?

### Session 30 — Infrastructure Synthesis
**Write from memory**:
- Distributed systems trade-off matrix (consistency, availability, partition tolerance, latency)
- When to use each database type (relational, document, graph, time-series, KV)
- Kubernetes architecture diagram with all components
- CI/CD pipeline stages and what can fail at each
**Prepare**: Your "infrastructure story" for interviews — how you deploy, scale, monitor in production
