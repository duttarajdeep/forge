// Curated learning resources per track.
// Edit freely — no build step. Reload dashboard.html to see changes.
// Kinds: book | docs | practice | blog | video | course | repo | paper

window.RESOURCES = {

  A: [
    { kind: "practice", title: "NeetCode 150 / Roadmap",                  url: "https://neetcode.io/roadmap",                                    note: "Pattern-organized LeetCode set. Walk top-to-bottom in order." },
    { kind: "practice", title: "Striver's A2Z DSA Sheet",                 url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", note: "Comprehensive, ordered, Java-friendly." },
    { kind: "practice", title: "LeetCode — Top Interview 150",            url: "https://leetcode.com/studyplan/top-interview-150/",              note: "Curated 150 covering all major patterns." },
    { kind: "book",     title: "Cracking the Coding Interview (6e)",       url: "https://www.crackingthecodinginterview.com",                     note: "Gayle Laakmann — strong pattern chapters + behavioral." },
    { kind: "book",     title: "Elements of Programming Interviews (Java)",url: "https://elementsofprogramminginterviews.com",                    note: "Harder problems, Java edition." },
    { kind: "video",    title: "NeetCode YouTube",                        url: "https://www.youtube.com/@NeetCode",                              note: "Clearest walkthroughs of standard LC patterns." },
    { kind: "blog",     title: "LeetCode Patterns — Sean Prashad",         url: "https://seanprashad.com/leetcode-patterns/",                     note: "Problems tagged by pattern + frequency." },
    { kind: "course",   title: "Algorithms Part I/II — Princeton (Coursera)", url: "https://www.coursera.org/learn/algorithms-part1",            note: "Sedgewick. Strong theory backbone." },
    { kind: "repo",     title: "Google Interview University",              url: "https://github.com/jwasham/coding-interview-university",         note: "Long-form roadmap for FAANG prep." }
  ],

  B: [
    { kind: "book",     title: "Designing Data-Intensive Applications",    url: "https://dataintensive.net",                                      note: "Kleppmann. The single most-cited SD book." },
    { kind: "book",     title: "System Design Interview Vol 1 & 2",        url: "https://www.amazon.com/dp/B08CMF2CQF",                           note: "Alex Xu. Pattern-per-chapter, interview-shaped." },
    { kind: "practice", title: "Hello Interview — System Design",          url: "https://www.hellointerview.com/learn/system-design",             note: "Walks through real interview questions with diagrams." },
    { kind: "blog",     title: "ByteByteGo Newsletter",                    url: "https://blog.bytebytego.com",                                    note: "Alex Xu — weekly architecture deep dives." },
    { kind: "blog",     title: "High Scalability",                         url: "http://highscalability.com",                                     note: "Real-world architecture writeups (Instagram, Uber, etc.)." },
    { kind: "repo",     title: "System Design Primer",                     url: "https://github.com/donnemartin/system-design-primer",            note: "Open-source compendium of SD concepts." },
    { kind: "video",    title: "Gaurav Sen — System Design",               url: "https://www.youtube.com/@gkcs",                                  note: "Whiteboard-style walk-throughs." },
    { kind: "paper",    title: "Google papers reading list",               url: "https://github.com/papers-we-love/papers-we-love",               note: "MapReduce, GFS, Spanner, Bigtable — read the originals." }
  ],

  C: [
    { kind: "book",     title: "Java Concurrency in Practice",              url: "https://jcip.net",                                               note: "Brian Goetz. Definitive Java concurrency." },
    { kind: "book",     title: "The Go Programming Language",               url: "https://www.gopl.io",                                            note: "Donovan & Kernighan. Strong Go concurrency chapters." },
    { kind: "practice", title: "Go by Example — Concurrency",                url: "https://gobyexample.com/goroutines",                             note: "Tiny runnable examples for every primitive." },
    { kind: "docs",     title: "Effective Go — Concurrency",                url: "https://go.dev/doc/effective_go#concurrency",                    note: "Official Go style guide." },
    { kind: "video",    title: "Rob Pike — Concurrency is not Parallelism",url: "https://www.youtube.com/watch?v=oV9rvDllKEg",                    note: "Classic 30-min talk that sets the mental model." },
    { kind: "blog",     title: "Project Loom (virtual threads)",            url: "https://openjdk.org/projects/loom/",                             note: "JDK 21+ virtual threads — relevant for modern Java." },
    { kind: "docs",     title: "java.util.concurrent JavaDoc",              url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html", note: "Reference for executors, locks, atomics." }
  ],

  D: [
    { kind: "book",     title: "Kubernetes: Up & Running (3e)",             url: "https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/", note: "Brendan Burns. Practical K8s." },
    { kind: "book",     title: "Site Reliability Engineering (free)",       url: "https://sre.google/sre-book/table-of-contents/",                 note: "Google's SRE book — full text online." },
    { kind: "book",     title: "Release It! (2e)",                          url: "https://pragprog.com/titles/mnee2/release-it-second-edition/",  note: "Michael Nygard. Stability patterns, circuit breakers." },
    { kind: "practice", title: "Kubernetes the Hard Way",                   url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",     note: "Kelsey Hightower. Bootstrap K8s from scratch." },
    { kind: "practice", title: "KodeKloud K8s Playgrounds",                  url: "https://kodekloud.com/playgrounds/",                             note: "Free sandboxes for kubectl drills." },
    { kind: "docs",     title: "Kubernetes Official Docs",                  url: "https://kubernetes.io/docs/home/",                               note: "Reference; start with Concepts → Workloads." },
    { kind: "blog",     title: "Learnk8s blog",                             url: "https://learnk8s.io/learn-kubernetes",                           note: "Deep technical posts." }
  ],

  E: [
    { kind: "blog",     title: "Levels.fyi — Engineering Levels",            url: "https://www.levels.fyi/blog/",                                  note: "Career framing and L5/L6 expectation calibration." },
    { kind: "blog",     title: "Google re:Work — People Practices",          url: "https://rework.withgoogle.com",                                  note: "Project Oxygen, GRAD, structured interviewing — primary source." },
    { kind: "blog",     title: "Staff Eng (Will Larson)",                    url: "https://staffeng.com",                                           note: "Stories + archetypes for senior+ ICs." },
    { kind: "book",     title: "The Staff Engineer's Path",                 url: "https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/", note: "Tanya Reilly. What L5+ work actually looks like." },
    { kind: "book",     title: "An Elegant Puzzle",                          url: "https://lethain.com/elegant-puzzle/",                            note: "Will Larson. Engineering management + senior IC." },
    { kind: "docs",     title: "STAR method explained",                      url: "https://www.themuse.com/advice/star-interview-method",           note: "Reference template for behavioral answers." }
  ],

  F: [
    { kind: "docs",     title: "Google Cloud Documentation",                url: "https://cloud.google.com/docs",                                  note: "Official — start with each service's 'Overview' page." },
    { kind: "course",   title: "Google Cloud Skills Boost",                  url: "https://www.cloudskillsboost.google",                            note: "Hands-on labs — free monthly credits." },
    { kind: "book",     title: "Cloud Native Patterns",                      url: "https://www.manning.com/books/cloud-native-patterns",            note: "Cornelia Davis. Patterns that map cleanly to GCP." },
    { kind: "paper",    title: "Spanner: Google's Globally-Distributed DB",  url: "https://research.google/pubs/spanner-googles-globally-distributed-database/", note: "Original Spanner paper — TrueTime, external consistency." },
    { kind: "paper",    title: "Dremel paper (BigQuery)",                    url: "https://research.google/pubs/dremel-interactive-analysis-of-webscale-datasets/", note: "How BigQuery scans petabytes interactively." },
    { kind: "blog",     title: "Google Cloud Blog",                          url: "https://cloud.google.com/blog",                                  note: "Service announcements + architecture posts." },
    { kind: "video",    title: "Google Cloud Tech YouTube",                  url: "https://www.youtube.com/@googlecloudtech",                       note: "Short videos per service + deep dives." },
    { kind: "practice", title: "GCP Free Tier",                              url: "https://cloud.google.com/free",                                  note: "Always-free tier — use a personal project for hands-on." }
  ],

  G: [
    { kind: "docs",     title: "Model Context Protocol — Spec",              url: "https://modelcontextprotocol.io/specification",                  note: "Official spec. Read top to bottom for protocol detail." },
    { kind: "docs",     title: "MCP Documentation",                          url: "https://modelcontextprotocol.io",                                note: "Quickstart, SDKs, examples for Python/TS/Java." },
    { kind: "repo",     title: "MCP servers — official + community",         url: "https://github.com/modelcontextprotocol/servers",                note: "Reference servers (filesystem, git, postgres, slack...). Read the source." },
    { kind: "docs",     title: "Spring AI Reference",                        url: "https://docs.spring.io/spring-ai/reference/",                    note: "ChatClient, EmbeddingClient, vector stores, tool calling — Java-first." },
    { kind: "docs",     title: "Anthropic API Documentation",                url: "https://docs.anthropic.com",                                     note: "Tool use, prompt caching, computer use." },
    { kind: "blog",     title: "Anthropic Engineering Blog",                 url: "https://www.anthropic.com/engineering",                          note: "Building effective agents, prompt patterns." },
    { kind: "book",     title: "Building LLM Powered Applications",          url: "https://www.manning.com/books/building-llm-powered-applications", note: "Practical patterns for RAG, agents, evaluation." },
    { kind: "repo",     title: "LangChain examples",                          url: "https://github.com/langchain-ai/langchain",                      note: "Reference even when building in Spring AI — patterns transfer." }
  ]

};
