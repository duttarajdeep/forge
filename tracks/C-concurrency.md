# Track C — Concurrency & Language Depth

**Target**: Write production-grade concurrent code; articulate the Java memory model
**Language**: Java (JCIP depth)
**Method**: Concept → Code → Explain

---

## How Each Session Works

**Study sessions** (~45-60 min):
1. Read the chapter/concept (30 min)
2. Write a small program demonstrating the concept (15-30 min)

**Build sessions** (~60 min):
1. Implement a concurrent data structure or system
2. Write tests that prove thread-safety (or expose race conditions)
3. Benchmark if relevant

---

## Module 1: Java Concurrency Fundamentals (Sessions 1-10)

### Session 1 — Thread Safety: What & Why
**Read**: JCIP Ch 2 (Thread Safety)
**Concepts**: Race condition, atomicity, visibility, compound actions, intrinsic locks
**Code**: Write a program that demonstrates a race condition, then fix it with `synchronized`
**Key Insight**: Thread safety = correct behavior when accessed from multiple threads WITHOUT requiring the caller to do anything special

### Session 2 — Sharing Objects Safely
**Read**: JCIP Ch 3 (Sharing Objects)
**Concepts**: Visibility (volatile), publication and escape, thread confinement, immutability
**Code**: Demonstrate visibility bug (stale data without volatile). Fix with volatile.
**Key Insight**: Publication safety — if you pass `this` to another thread during construction, it sees a partially-constructed object.

### Session 3 — Composing Thread-Safe Classes
**Read**: JCIP Ch 4 (Composing Objects)
**Concepts**: Instance confinement, delegation, adding functionality to thread-safe classes
**Code**: Build a thread-safe `NumberRange` class using confinement. Then build using delegation.
**Key Insight**: Confinement = simplest strategy. Delegation = most flexible. Choose based on complexity.

### Session 4 — Building Blocks
**Read**: JCIP Ch 5 (Building Blocks)
**Concepts**: Synchronized collections, ConcurrentHashMap, BlockingQueue, synchronizers (CountDownLatch, Semaphore, Barrier)
**Code**: Producer-consumer using `BlockingQueue`. Worker coordination using `CountDownLatch`.
**Key Insight**: Don't build from scratch — use java.util.concurrent. Know when to use which.

### Session 5 — Task Execution & Executors
**Read**: JCIP Ch 6 (Task Execution)
**Concepts**: Executor framework, thread pools, Callable/Future, CompletionService
**Code**: Build a parallel web page renderer using `ExecutorService` + `Future`
**Key Insight**: Thread pool sizing: CPU-bound = N_cpu + 1. IO-bound = N_cpu * (1 + wait/compute).

### Session 6 — Cancellation & Shutdown
**Read**: JCIP Ch 7 (Cancellation and Shutdown)
**Concepts**: Interruption, cooperative cancellation, poison pills, shutdownNow vs shutdown
**Code**: Build a cancellable task. Demonstrate proper shutdown with poison pill pattern.
**Key Insight**: Never swallow InterruptedException. Either propagate or restore the interrupt flag.

### Session 7 — Thread Pool Configuration
**Read**: JCIP Ch 8 (Applying Thread Pools)
**Concepts**: Pool sizing, ThreadPoolExecutor parameters, work queues, saturation policies
**Code**: Configure a ThreadPoolExecutor with bounded queue + CallerRunsPolicy. Load test it.
**Key Insight**: Unbounded queue + fixed pool = OOM waiting to happen under load.

### Session 8 — Performance & Scalability
**Read**: JCIP Ch 11 (Performance and Scalability)
**Concepts**: Amdahl's Law, lock contention, lock striping, narrowing lock scope
**Code**: Benchmark a shared counter: synchronized vs AtomicLong vs LongAdder. Measure contention.
**Key Insight**: Lock striping (ConcurrentHashMap's approach) = segment the lock for higher concurrency.

### Session 9 — Explicit Locks & Atomics
**Read**: JCIP Ch 13-14 (Explicit Locks, Building Custom Synchronizers)
**Concepts**: ReentrantLock, ReadWriteLock, Condition, AbstractQueuedSynchronizer, AtomicReference, CAS
**Code**: Build a bounded buffer using ReentrantLock + Condition (not wait/notify).
**Key Insight**: CAS = optimistic concurrency. Good for low contention. AQS = foundation of all j.u.c locks.

### Session 10 — Java Memory Model
**Read**: JCIP Ch 16 (Java Memory Model)
**Concepts**: Happens-before, final field semantics, safe publication idioms, double-checked locking
**Code**: Demonstrate unsafe publication (no happens-before). Fix with volatile/final/synchronized.
**Key Insight**: The JMM defines WHEN writes become visible to other threads. Without happens-before, no guarantees.

---

## Module 2: Advanced Patterns & Production Code (Sessions 11-22)

### Session 11 — Java Virtual Threads (Project Loom)
**Learn**: Virtual threads in Java 21+, structured concurrency, when to use vs platform threads
**Code**: Rewrite your executor-based web renderer using virtual threads. Benchmark difference.
**Key Insight**: Virtual threads = lightweight threads. Don't pool them. 1 per task.

### Session 12 — CompletableFuture Mastery
**Learn**: CompletableFuture composition, thenCompose, thenCombine, allOf, exceptionally
**Code**: Build an async service aggregator — call 3 APIs in parallel, combine results, handle partial failure

### Session 13 — Lock-Free Data Structures
**Learn**: CAS loops, ABA problem, lock-free stack, lock-free queue (Michael-Scott)
**Code**: Implement a lock-free stack using AtomicReference + CAS
**Key Insight**: Lock-free ≠ faster. Better for: low contention, real-time requirements, preventing priority inversion.

### Session 14 — Build: Thread-Safe Rate Limiter
**Build**: Token bucket + sliding window rate limiters, thread-safe, configurable
**Test**: Concurrent access from 100 threads. Verify correctness under load.

### Session 15 — Build: Concurrent Cache with TTL
**Build**: Cache with configurable TTL, LRU eviction, concurrent access
**Design choices**: ConcurrentHashMap + scheduled cleanup vs weak references vs Caffeine-style

### Session 16 — Build: Producer-Consumer with Backpressure
**Build**: Bounded queue, multiple producers/consumers, backpressure when full, graceful shutdown
**Reflect**: When is a `BlockingQueue` enough vs. when do you reach for a reactive stream?

### Session 17 — Build: Parallel Map-Reduce
**Build**: Framework for parallel processing — split work, map, shuffle, reduce
**Test**: Process 1M records. Measure speedup vs serial.

### Session 18 — Effective Java: Concurrency Items
**Read**: EJ Items 78-84 (synchronize access, prefer executors, prefer concurrency utilities, document thread safety, use lazy initialization judiciously, don't depend on thread scheduler)
**Code**: Find violations of these items in sample code. Fix them.

### Session 19 — Effective Java: General Programming
**Read**: EJ Items 57-68 (minimize scope, prefer for-each, know libraries, avoid float for exact, prefer interfaces to reflection, use native carefully, optimize judiciously, naming conventions)
**Apply**: Refactor a piece of your own code applying these items.

### Session 20 — Effective Java: API Design
**Read**: EJ Items 49-56 (check parameters, defensive copies, method signatures, overloading carefully, varargs, return optionals, write doc comments)
**Code**: Design a clean API for one of your concurrent data structures. Apply these items.

### Session 21 — Testing Concurrent Code
**Learn**: How to test for race conditions, liveness, deadlocks; stress testing
**Code**: Write tests that expose race conditions in buggy code. Use `java.util.concurrent` tools for test timing.

### Session 22 — Concurrency Synthesis
**Write from memory**:
- Java thread safety checklist (10 items)
- When to use which j.u.c primitive (decision tree)
- Explain aloud: Java Memory Model happens-before rules
