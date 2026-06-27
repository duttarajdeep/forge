# Track F — Cloud Computing (Project-Based)

**Target**: Fluency in GCP services for Google interview signal and modern cloud-native work
**Language**: Java (Spring Boot) for GKE deployments; any small language for Cloud Run/Functions
**Method**: Wide survey (concepts + AWS analogue) → 3 deep build projects → synthesis
**Reference**:
- [Cloud Architect Path 125 (Skills Boost)](https://www.skills.google/paths/125) — AWS pro → GCP
- [GEAR Get Certified](https://developers.google.com/program/gear/getcertified)
- Google SRE book (already used in Track D)

---

## How Each Session Works

**Survey sessions** (~45 min):
1. Read GCP docs + AWS analogue comparison (15 min)
2. Spin up the service in a sandbox project (15 min)
3. Sketch where you'd use it: "what problem does this solve better than the alternatives?" (15 min)

**Build sessions** (~60–75 min):
1. Implement one slice of the project from the session
2. `gcloud` or Terraform — actually deploy it, don't just read about it
3. Break it intentionally (kill a pod, exhaust a quota, drop a permission) — observe the failure

**Synthesis sessions** (~45 min):
1. Write from memory: the service map, the trade-offs, the architecture
2. Compare against the doc — what did you miss?

---

## Prerequisites (One-time, before Session 1)

- [ ] GCP sandbox project created
- [ ] `gcloud` CLI installed and authenticated
- [ ] Billing alerts set (these projects cost real money — set a $20 cap)
- [ ] Terraform installed (you'll use it from Session 11 onward)

---

## Module 1: Service Survey (Sessions 1–8)

Goal: Build the AWS→GCP map in your head. By the end you should be able to name the GCP equivalent of any AWS service in <5 seconds.

### Session 1 — Compute Landscape
**Study**: GKE Standard vs Autopilot, Cloud Run (services + jobs), Cloud Run Functions, Compute Engine
**AWS analogue**: EKS, Fargate, Lambda, EC2
**Hands-on**: Deploy "hello world" to Cloud Run from `gcloud run deploy`. Inspect the auto-generated URL and cold-start latency.
**Key Question**: When does Autopilot's "no node management" outweigh losing DaemonSet/NodePort flexibility?

### Session 2 — Networking & Ingress
**Study**: Cloud Load Balancing (Global L7, Regional L4), Cloud DNS, Cloud CDN, Cloud Armor, API Gateway vs Apigee, Certificate Manager
**AWS analogue**: ALB/NLB, Route 53, CloudFront, WAF, API Gateway, ACM
**Hands-on**: Put a Global HTTPS LB in front of your Cloud Run hello-world from S1. Add a managed cert.
**Key Question**: Why does GCP have ONE global anycast LB while AWS gives you 5+ regional ones? What does that buy you?

### Session 3 — Identity & Access
**Study**: Cloud IAM (workload + admin), service accounts, Workload Identity (GKE), Identity Platform (end-user auth)
**AWS analogue**: IAM, IAM Roles for Service Accounts (IRSA), Cognito
**Hands-on**: Create a service account, bind it to a Cloud Run service, grant minimal permissions to write to a GCS bucket. Verify least-privilege by trying to read another bucket.
**Key Question**: Workload Identity vs static service account keys — why is GCP pushing hard against the latter?

### Session 4 — Relational & Global Databases
**Study**: Cloud SQL (Postgres/MySQL), AlloyDB (Postgres-compatible, AI-tuned), Cloud Spanner (global, externally consistent)
**AWS analogue**: RDS, Aurora, (no real equivalent for Spanner)
**Hands-on**: Spin up a Cloud SQL Postgres instance, connect from Cloud Run via Cloud SQL Connector, run a query.
**Key Question**: What does Spanner's TrueTime API give you that no other DB can match? (You'll deep-dive this in Module 4.)

### Session 5 — NoSQL & Analytics
**Study**: Firestore (document), Bigtable (wide-column, HBase API), Memorystore (Redis/Valkey/Memcached), BigQuery (analytics)
**AWS analogue**: DynamoDB, (Bigtable has no AWS equivalent), ElastiCache, Redshift
**Hands-on**: Load a CSV into BigQuery (use a public sample dataset). Run an analytical query. Note the speed.
**Key Question**: BigQuery is serverless and pay-per-query — when does that beat a provisioned Redshift cluster, and when doesn't it?

### Session 6 — Storage
**Study**: Cloud Storage (GCS) classes (Standard/Nearline/Coldline/Archive), object lifecycle, BigLake, Filestore
**AWS analogue**: S3 (storage classes map almost 1:1), EFS
**Hands-on**: Create a GCS bucket. Upload artifacts. Set a lifecycle rule to move to Coldline after 30 days.
**Key Question**: Where does Coldline win/lose compared to S3 Glacier?

### Session 7 — Eventing & Async
**Study**: Pub/Sub, Eventarc, Cloud Tasks, Cloud Scheduler, Workflows
**AWS analogue**: SNS+SQS, EventBridge, SQS (HTTP-targeted), EventBridge Scheduler, Step Functions
**Hands-on**: Create a Pub/Sub topic. Publish a message from `gcloud`. Subscribe with a pull subscriber. Then create a push subscription to a Cloud Run service.
**Key Question**: Pub/Sub guarantees at-least-once with no ordering by default. What does "ordered delivery" cost you?

### Session 8 — Observability & CI/CD
**Study**: Cloud Logging, Cloud Monitoring (metrics/alerts), Cloud Trace, Cloud Profiler, Cloud Build, Artifact Registry, Secret Manager, Cloud KMS
**AWS analogue**: CloudWatch (logs+metrics+alarms), X-Ray, CodeBuild/CodePipeline, ECR+CodeArtifact, Secrets Manager, KMS
**Hands-on**: Push a structured log line from your Cloud Run hello-world. Find it in Logs Explorer. Create a log-based metric and an alert.

---

## Module 2: Project A — "Deploy a Production Service on GKE" (Sessions 9–14)

Build target: A Spring Boot service running on GKE Autopilot, reachable via Global HTTPS LB, backed by Cloud SQL, with Cloud Build CI/CD, secrets in Secret Manager, observability via Cloud Monitoring + Trace. End-state: you can demo this on a screen-share in an interview.

**Repo to create**: `cloud/project-a-gke-service/`

### Session 9 — Project Bootstrap & Containerize
**Build**: Spring Boot 3 service (one REST endpoint: `GET /releases/{id}`). Containerize with Jib (no Dockerfile — Jib builds OCI images from Gradle/Maven directly).
**Deploy**: Push to Artifact Registry. Verify with `gcloud artifacts docker images list`.
**Why Jib**: Faster builds, no Docker daemon, reproducible images.

### Session 10 — GKE Autopilot Deployment
**Build**: GKE Autopilot cluster. Write `Deployment` + `Service` (ClusterIP) YAML. Apply with `kubectl`.
**Verify**: `kubectl port-forward` and curl the endpoint.
**Break it**: Delete a pod. Watch Autopilot reschedule. Note the recovery time.

### Session 11 — Ingress + Global Load Balancer + Managed Cert
**Build**: `Gateway` API resource (the new way, replacing Ingress). Attach a Google-managed SSL cert. Point a Cloud DNS record at it.
**Verify**: `curl https://yourdomain` — should hit your service through the global LB.
**Connect**: Compare the GKE Gateway API config to a typical AWS ALB Ingress config.

### Session 12 — Cloud SQL + Workload Identity
**Build**: Cloud SQL Postgres instance. Connect your Spring Boot service via Cloud SQL Auth Proxy (sidecar pattern). Use Workload Identity — NO static keys.
**Verify**: Service reads a row from the DB. Pod has zero secrets mounted.
**Key Insight**: This is the GCP-native zero-trust pattern. Internalize it.

### Session 13 — Cloud Build CI/CD Pipeline
**Build**: `cloudbuild.yaml` — on push to `main`: build image with Jib → push to Artifact Registry → `gcloud deploy` to GKE.
**Verify**: Push a code change. Watch Cloud Build run. Confirm the new pod is rolled out.

### Session 14 — Observability & Alerts
**Build**: Add structured logging (JSON to stdout — Cloud Logging picks it up automatically). Add OpenTelemetry instrumentation → Cloud Trace. Create a Monitoring dashboard: request rate, p95 latency, error rate (RED method).
**Build**: An alert: "error rate > 1% for 5 min → page me."
**Synthesis**: What does this stack give you that you don't get out-of-the-box on EKS? What's worse?

---

## Module 3: Project B — "Event-Driven Release System" (Sessions 15–20)

Build target: A miniature release-orchestration system using Pub/Sub + Cloud Tasks + Cloud Run + Spanner. Releases get created via an API, fan out to processors, retry on failure, and global state lives in Spanner. End-state: you can sketch this architecture on a whiteboard from memory.

**Repo to create**: `cloud/project-b-release-events/`

### Session 15 — Spanner Schema & First Write
**Build**: Spanner instance (regional config for cost). Create a `releases` table with proper interleaving (`releases` → `release_steps`). Insert your first row with the Spanner client.
**Connect**: Why does Spanner want you to think about parent-child interleaving? How does this differ from a Postgres foreign key?
**Key Question**: What is a "stale read" in Spanner and when do you want one?

### Session 16 — Pub/Sub Fan-Out
**Build**: Topic `release.created`. Two subscriptions:
1. Push subscription → Cloud Run service "validator"
2. Pull subscription → a worker that writes to Spanner
**Verify**: Publish a release event. Both subscribers fire. Idempotent processing on retries.

### Session 17 — Cloud Tasks for Retries with Backoff
**Build**: When the validator finds a missing dependency, it enqueues a Cloud Task with a delay + exponential backoff. The task target is itself (recursion with retry semantics).
**Verify**: Inject a failure. Watch retries. Cap with a dead-letter queue.

### Session 18 — Eventarc Glue
**Build**: Use Eventarc to trigger a Cloud Run service when an object is uploaded to a GCS "artifacts" bucket. This simulates "artifact ready → kick off release."
**Verify**: Upload an object. Cloud Run service fires.
**Key Insight**: Eventarc is the universal event router — it normalizes events from 130+ sources into CloudEvents format.

### Session 19 — End-to-End Flow + Failure Injection
**Build**: Wire the full path: API → Spanner write → Pub/Sub event → validator → Cloud Tasks retry → Eventarc trigger on artifact upload → final state update in Spanner.
**Break it**: Kill the validator mid-flight. Verify no duplicate writes (Spanner transaction guarantees). Drop network to Cloud Tasks. Observe backoff.

### Session 20 — Architecture Diagram + Trade-off Doc
**Write**: A 1-pager. Architecture diagram (use Mermaid or draw.io). Trade-off section: "Why Pub/Sub here vs Cloud Tasks vs Workflows?" Map every component to its AWS equivalent.
**Compare**: How would you build the same thing on AWS? Where does GCP win? Where does AWS win?

---

## Module 4: Project C — Analytics + Spanner Deep Dive (Sessions 21–22)

### Session 21 — BigQuery on Release Events
**Build**: Stream Pub/Sub events from Project B into a BigQuery table via a Dataflow template (or the new direct Pub/Sub→BigQuery subscription).
**Query**: Write 3 analytical queries — "release success rate per service per day," "p95 release duration," "top 10 failing services."
**Build**: Pin one query to a Looker Studio dashboard.

### Session 22 — Spanner Deep Dive (Interview Material)
**Read**: Spanner paper key sections — TrueTime, transactions, split/merge.
**Practice**: Explain TrueTime to a rubber duck in 3 minutes. Then explain why no other database has it.
**Key Questions**:
- What is the `commit timestamp` and why does it require atomic clocks + GPS?
- Why can't you just use NTP?
- What's the relationship between Spanner and Google's internal systems (Chubby, Colossus)?
**Output**: 1-page Spanner cheat sheet for system design interviews.

---

## Module 5: Synthesis (Sessions 23–24)

### Session 23 — The AWS→GCP Map (from memory)
**Write from memory** (no looking):
- Every AWS service you can think of → its GCP equivalent
- Where there's no 1:1 (Spanner, Bigtable, BigQuery, Cloud Tasks)
- The "GCP-isms" — patterns that have no AWS analogue (Global LB, Workload Identity, TrueTime, project hierarchy with folders/orgs)
**Compare**: Open the original doc and your notes. Score yourself. Drill the gaps.

### Session 24 — GEAR Cert Readiness Check + GCP Story
**Build**: A 5-minute "my GCP story" — for behavioral interviews. "Tell me about your GCP experience" → you can demo Projects A and B end-to-end.
**Decide**: Worth pursuing GEAR Get Certified? Time investment ~30 hours.
**Final**: Update your resume with the GCP stack you've actually shipped.

---

## End-State Deliverables

Pinned in `cloud/`:
- [ ] `project-a-gke-service/` — runnable Spring Boot + GKE Autopilot + Cloud SQL service
- [ ] `project-b-release-events/` — Pub/Sub + Cloud Tasks + Spanner event system
- [ ] `aws-gcp-map.md` — your written-from-memory service map
- [ ] `spanner-cheatsheet.md` — for system design interviews
- [ ] `architecture-diagrams/` — Mermaid + draw.io diagrams of both projects

---

## Connect to Other Tracks

- **Track B (System Design)**: Use Project B as your worked example for event-driven system design questions
- **Track D (Infrastructure)**: GKE/Autopilot deep dive replaces the K8s sessions in D when you already know them
- **Track G (AI/MCP)**: Vertex AI is GCP-native; the MCP track will use Cloud Run for hosting MCP servers
