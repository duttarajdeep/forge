# Track A — DSA (Algorithmic Problem Solving)

**Target**: Solve mediums in <25 min, hards in <40 min
**Language**: Java
**Method**: Pattern-first. Learn the template, then drill problems that use it.

---

## How Each Session Works

**Study sessions** (~45 min):
1. Read the pattern explanation (10 min)
2. Understand the template/approach (10 min)
3. Solve the first problem with the template in mind (25 min)

**Drill sessions** (~45-60 min):
1. Solve 2-3 problems using the pattern (timed: 25 min each)
2. If stuck >15 min: look at hint, then solve
3. If stuck >25 min: study solution, understand, re-solve tomorrow

**Review sessions** (~30 min):
1. Re-solve problems from the pattern without hints
2. Write the pattern template from memory
3. Identify edge cases you missed

---

## Module 1: Arrays, Hashing & Two Pointers (Sessions 1-10)

### Session 1 — Arrays & Two Pointers: Study
**Learn**: Two pointer technique (converging, same-direction, fast/slow)
**Template**: Sort + two pointers for pair-finding; opposite ends for search
**Solve**: LC #1 Two Sum (hash map approach first, then two-pointer on sorted)
**Reflect**: When do you choose hash map vs two pointers?

### Session 2 — Two Pointers: Drill
**Solve**: LC #125 Valid Palindrome, LC #15 3Sum, LC #11 Container With Most Water
**Focus**: Converging pointers pattern. Always ask: "What invariant lets me move a pointer?"

### Session 3 — Hash Maps: Study
**Learn**: Hash map for O(1) lookup, frequency counting, grouping
**Template**: `map[key] = value` for lookup; `map[key]++` for counting; `map[transform(x)].add(x)` for grouping
**Solve**: LC #49 Group Anagrams
**Reflect**: What makes a good hash key? When does the choice of key determine the solution?

### Session 4 — Hash Maps: Drill
**Solve**: LC #217 Contains Duplicate, LC #242 Valid Anagram, LC #128 Longest Consecutive Sequence
**Focus**: Choosing the right key. Consecutive sequence uses a SET, not a map — why?

### Session 5 — Prefix Sum & Product: Study
**Learn**: Prefix sum array, prefix product, subarray sum problems
**Template**: `prefix[i] = prefix[i-1] + nums[i]`; sum(l,r) = prefix[r] - prefix[l-1]
**Solve**: LC #238 Product of Array Except Self
**Reflect**: How does prefix sum turn O(n²) into O(n)?

### Session 6 — Prefix Sum: Drill
**Solve**: LC #560 Subarray Sum Equals K, LC #53 Maximum Subarray (Kadane's), LC #152 Maximum Product Subarray
**Focus**: Subarray sum + hash map = powerful combo. Kadane's as a special case.

### Session 7 — Sliding Window (Fixed): Study
**Learn**: Fixed-size window, window sum/product, when to use
**Template**: Expand right, shrink left when window exceeds size k
**Solve**: LC #567 Permutation in String
**Reflect**: Fixed window = exact size constraint. How do you detect "valid window"?

### Session 8 — Sliding Window (Variable): Study
**Learn**: Variable-size window, expand until invalid, shrink until valid
**Template**: `while (invalid) shrink left; update answer; expand right`
**Solve**: LC #3 Longest Substring Without Repeating Characters
**Reflect**: What's the invariant that determines shrink vs expand?

### Session 9 — Sliding Window: Drill
**Solve**: LC #424 Longest Repeating Character Replacement, LC #76 Minimum Window Substring
**Focus**: Min window = shrink to find minimum valid. Max window = expand to find maximum valid.

### Session 10 — Module 1 Review
**Re-solve** (no hints, timed): Two Sum, 3Sum, Longest Substring, Minimum Window Substring
**Write**: Pattern templates from memory for Two Pointers, Hash Map, Prefix Sum, Sliding Window
**Identify**: Which problems gave you trouble? Mark for future revisit.

---

## Module 2: Linked Lists & Fast/Slow Pointers (Sessions 11-16)

### Session 11 — Linked List Basics: Study
**Learn**: Pointer manipulation, dummy head trick, in-place reversal
**Template**: `prev = null; curr = head; while(curr) { next = curr.next; curr.next = prev; prev = curr; curr = next; }`
**Solve**: LC #206 Reverse Linked List
**Reflect**: Why does the dummy head eliminate edge cases?

### Session 12 — Linked List: Drill
**Solve**: LC #21 Merge Two Sorted Lists, LC #143 Reorder List, LC #19 Remove Nth Node From End
**Focus**: "Remove Nth from end" uses fast/slow pointer gap technique — powerful pattern.

### Session 13 — Fast/Slow Pointers (Floyd's): Study
**Learn**: Cycle detection, finding cycle start, finding middle
**Template**: `slow = fast = head; while(fast && fast.next) { slow = slow.next; fast = fast.next.next; }`
**Solve**: LC #141 Linked List Cycle, LC #142 Linked List Cycle II
**Reflect**: Why does the math work for finding cycle start?

### Session 14 — Advanced Linked List: Drill
**Solve**: LC #23 Merge K Sorted Lists, LC #25 Reverse Nodes in K-Group
**Focus**: Merge K uses heap + linked list. K-Group reversal is the hardest linked list problem — take your time.

### Session 15 — LRU Cache: Study + Build
**Learn**: HashMap + Doubly Linked List = O(1) get/put with eviction
**Solve**: LC #146 LRU Cache
**Build**: Implement from scratch in Java
**Reflect**: Why doubly-linked? Why not just a queue?

### Session 16 — Module 2 Review
**Re-solve**: Reverse Linked List, Merge K Sorted, LRU Cache
**Speed target**: LRU Cache in <20 min
**Identify**: Edge cases you missed (null head, single node, etc.)

---

## Module 3: Stacks & Monotonic Stack (Sessions 17-22)

### Session 17 — Stack Fundamentals: Study
**Learn**: LIFO for matching (parentheses), nesting (decode), tracking state
**Template**: Push when opening, pop when closing, validate on pop
**Solve**: LC #20 Valid Parentheses, LC #155 Min Stack
**Reflect**: Min Stack teaches "auxiliary state alongside primary state" — where else does this apply?

### Session 18 — Stack Applications: Drill
**Solve**: LC #394 Decode String, LC #232 Implement Queue using Stacks
**Focus**: Decode String is recursive in nature — stack simulates the call stack.

### Session 19 — Monotonic Stack: Study
**Learn**: Find "next greater/smaller element" in O(n); maintain decreasing/increasing stack
**Template**: `for each element: while (stack.top < element) { pop and record answer }; push element`
**Solve**: LC #739 Daily Temperatures
**Reflect**: Why monotonic? What invariant does the stack maintain?

### Session 20 — Monotonic Stack: Drill
**Solve**: LC #84 Largest Rectangle in Histogram, LC #42 Trapping Rain Water
**Focus**: Histogram is THE classic monotonic stack problem. Take time to understand it deeply.

### Session 21 — Monotonic Stack Advanced
**Solve**: LC #239 Sliding Window Maximum (monotonic deque), LC #85 Maximal Rectangle
**Focus**: Sliding Window Max uses deque (not stack). Maximal Rectangle builds on Histogram.

### Session 22 — Module 3 Review
**Re-solve**: Daily Temperatures, Largest Rectangle, Trapping Rain Water
**Speed target**: Largest Rectangle in <25 min
**Write**: Monotonic stack template from memory

---

## Module 4: Binary Trees (Sessions 23-30)

### Session 23 — Tree Traversal: Study
**Learn**: DFS (preorder, inorder, postorder), BFS (level-order), recursive vs iterative
**Template**: Recursive DFS = base case + recurse left + recurse right (order varies)
**Solve**: LC #104 Max Depth, LC #226 Invert Binary Tree
**Reflect**: When do you need the RETURN value from recursion vs just traversing?

### Session 24 — DFS Patterns: Drill
**Solve**: LC #543 Diameter of Binary Tree, LC #110 Balanced Binary Tree, LC #100 Same Tree
**Focus**: Diameter teaches "track global max during DFS" — you'll reuse this in path sum problems.

### Session 25 — BFS (Level Order): Study
**Learn**: Queue-based BFS, level-by-level processing, right side view
**Template**: `queue.add(root); while(!queue.empty()) { size = queue.size(); for(i<size)... }`
**Solve**: LC #102 Binary Tree Level Order Traversal, LC #199 Binary Tree Right Side View
**Reflect**: When is BFS better than DFS? (Level-aware problems, shortest path in unweighted)

### Session 26 — BST Properties: Study
**Learn**: Inorder gives sorted order; BST search/insert/delete; validate using range
**Template**: `isValid(node, min, max)` — pass range down recursively
**Solve**: LC #98 Validate Binary Search Tree, LC #230 Kth Smallest Element in BST
**Reflect**: How does "inorder = sorted" help you solve BST problems?

### Session 27 — Tree Construction & Serialization: Drill
**Solve**: LC #105 Construct Binary Tree from Preorder and Inorder, LC #297 Serialize and Deserialize Binary Tree
**Focus**: Construction problems test understanding of traversal order deeply.

### Session 28 — Path Sum Problems: Drill
**Solve**: LC #124 Binary Tree Maximum Path Sum, LC #236 Lowest Common Ancestor
**Focus**: Max Path Sum combines "global max tracking" + "return value from recursion" — two patterns at once.

### Session 29 — Tree DFS Advanced
**Solve**: LC #235 LCA of BST, LC #337 House Robber III (DP on tree)
**Focus**: House Robber III is your first taste of DP on trees — state = (rob this node, don't rob).

### Session 30 — Module 4 Review
**Re-solve**: Max Path Sum, Serialize/Deserialize, LCA
**Speed target**: Validate BST in <10 min, LCA in <15 min
**Write**: Tree DFS template (recursive + iterative) from memory

---

## Module 5: Graphs (Sessions 31-39)

### Session 31 — Graph Basics & DFS: Study
**Learn**: Adjacency list, DFS on graph, visited set, connected components
**Template**: `dfs(node, visited): mark visited; for neighbor in adj[node]: if not visited: dfs(neighbor)`
**Solve**: LC #200 Number of Islands
**Reflect**: Islands = connected components on a grid. Grid DFS vs graph DFS — what's the difference?

### Session 32 — Graph BFS: Study
**Learn**: BFS for shortest path (unweighted), multi-source BFS
**Template**: Queue-based, level-by-level expansion
**Solve**: LC #994 Rotting Oranges (multi-source BFS)
**Reflect**: Why is BFS guaranteed to find shortest path in unweighted graphs?

### Session 33 — Graph DFS/BFS: Drill
**Solve**: LC #417 Pacific Atlantic Water Flow, LC #133 Clone Graph, LC #127 Word Ladder
**Focus**: Water Flow = multi-source DFS from both oceans. Word Ladder = BFS with implicit graph.

### Session 34 — Union-Find: Study
**Learn**: Disjoint Set Union, path compression, union by rank
**Template**: `find(x): if parent[x]!=x: parent[x]=find(parent[x]); return parent[x]`
**Solve**: LC #684 Redundant Connection, LC #323 Number of Connected Components
**Reflect**: Union-Find vs DFS for connectivity — when is each better?

### Session 35 — Topological Sort: Study
**Learn**: Kahn's algorithm (BFS), DFS-based topo sort, cycle detection
**Template**: `indegree[]; queue starts with indegree==0; process -> decrement neighbors -> add new zeros`
**Solve**: LC #207 Course Schedule, LC #210 Course Schedule II
**Reflect**: Topological sort = dependency resolution. Where do you see this in real systems?

### Session 36 — Dijkstra's Algorithm: Study
**Learn**: Shortest path with weights, priority queue, relaxation
**Template**: `pq.add((0, start)); while pq: (dist, node) = pq.poll(); for (neighbor, weight): if dist+weight < best: update`
**Solve**: LC #743 Network Delay Time
**Reflect**: Why doesn't BFS work for weighted graphs? What does "relaxation" mean?

### Session 37 — Graph Advanced: Drill
**Solve**: LC #269 Alien Dictionary, LC #261 Graph Valid Tree
**Focus**: Alien Dictionary = topological sort on character ordering. Valid Tree = connected + no cycle + V-1 edges.

### Session 38 — Graph Patterns Mastery
**Solve**: LC #286 Walls and Gates (multi-source BFS), LC #785 Is Graph Bipartite?
**Focus**: Bipartite = 2-colorable via BFS/DFS. Important theoretical concept.

### Session 39 — Module 5 Review
**Re-solve**: Number of Islands, Course Schedule II, Alien Dictionary, Network Delay Time
**Speed targets**: Islands <12 min, Course Schedule <15 min
**Write**: Graph templates from memory (DFS, BFS, Union-Find, Topo Sort, Dijkstra)

---

## Module 6: Binary Search (Sessions 40-44)

### Session 40 — Binary Search Basics: Study
**Learn**: Classic binary search, search on sorted array, template with boundary
**Template**: `lo=0, hi=n-1; while(lo<=hi): mid=(lo+hi)/2; if(target): return; elif less: lo=mid+1; else: hi=mid-1`
**Solve**: LC #704 Binary Search, LC #74 Search a 2D Matrix
**Reflect**: Binary search = eliminate half each step. What property must the search space have?

### Session 41 — Rotated Array: Drill
**Solve**: LC #33 Search in Rotated Sorted Array, LC #153 Find Minimum in Rotated Sorted Array
**Focus**: Determine which half is sorted, then decide which half to search.

### Session 42 — Binary Search on Answer: Study
**Learn**: When the answer is a number in a range, and you can check "is X feasible?"
**Template**: `lo=min_answer, hi=max_answer; while(lo<hi): mid; if(feasible(mid)): hi=mid; else: lo=mid+1`
**Solve**: LC #875 Koko Eating Bananas
**Reflect**: "Search on answer" is a meta-pattern — what makes a problem amenable to it?

### Session 43 — Binary Search Advanced
**Solve**: LC #4 Median of Two Sorted Arrays, LC #981 Time Based Key-Value Store
**Focus**: Median of Two Arrays is one of the hardest binary search problems. Spend extra time if needed.

### Session 44 — Module 6 Review
**Re-solve**: Rotated Array, Koko, Median of Two Arrays
**Speed target**: Koko in <15 min, Rotated Array in <12 min

---

## Module 7: Dynamic Programming (Sessions 45-59)

### Session 45 — DP 1D Basics: Study
**Learn**: Overlapping subproblems, optimal substructure, top-down vs bottom-up
**Template**: `dp[i] = best answer using elements 0..i`; recurrence from previous states
**Solve**: LC #70 Climbing Stairs, LC #198 House Robber
**Reflect**: How do you identify "this is a DP problem"? What are the signals?

### Session 46 — DP 1D: Drill
**Solve**: LC #213 House Robber II (circular), LC #91 Decode Ways
**Focus**: House Robber II = run House Robber twice (exclude first OR exclude last). Clever reduction.

### Session 47 — DP Unbounded: Study
**Learn**: Coin Change = unbounded knapsack; repeatable choices
**Template**: `dp[amount] = min coins to make amount; dp[a] = min(dp[a], dp[a-coin]+1)`
**Solve**: LC #322 Coin Change, LC #518 Coin Change 2
**Reflect**: Coin Change 1 = min count (BFS also works!). Coin Change 2 = count combinations (order matters for loop nesting).

### Session 48 — DP Subsequences: Drill
**Solve**: LC #139 Word Break, LC #300 Longest Increasing Subsequence, LC #152 Maximum Product Subarray
**Focus**: LIS has both O(n²) DP and O(n log n) with binary search — know both.

### Session 49 — DP 0/1 Knapsack: Study
**Learn**: Include/exclude choices, knapsack template, space optimization
**Template**: `dp[i][w] = max value using items 0..i with capacity w`
**Solve**: LC #416 Partition Equal Subset Sum
**Reflect**: Partition = "is there a subset summing to total/2?" — knapsack in disguise.

### Session 50 — DP 2D Basics: Study
**Learn**: 2D grid DP, two-string DP, state = (i, j) position
**Template**: `dp[i][j] = answer for first i chars of s1 and first j chars of s2`
**Solve**: LC #62 Unique Paths, LC #1143 Longest Common Subsequence
**Reflect**: What determines whether you need 1D or 2D state?

### Session 51 — DP 2D: Drill
**Solve**: LC #72 Edit Distance, LC #5 Longest Palindromic Substring
**Focus**: Edit Distance is a Google favorite. Trace the recurrence on paper first.

### Session 52 — DP Advanced: Interval DP
**Solve**: LC #312 Burst Balloons, LC #647 Palindromic Substrings
**Focus**: Burst Balloons = interval DP (what's the LAST balloon to burst in a range?). Mind-bending — take your time.

### Session 53 — DP on Trees
**Solve**: LC #337 House Robber III (revisit), LC #968 Binary Tree Cameras
**Focus**: DP on trees = state per node, combine children's states.

### Session 54 — DP Bitmask (Optional Advanced)
**Solve**: LC #691 Stickers to Spell Word, or LC #1125 Smallest Sufficient Team
**Focus**: Bitmask DP = state is a bitmask representing subset. Only if you're comfortable with previous DP.

### Session 55 — DP Pattern Synthesis
**Write**: Decision tree for "which DP pattern?" — Flowchart from problem traits to approach
**Categorize**: All DP problems solved into: 1D linear, knapsack, LCS-style, interval, tree, bitmask

### Session 56-57 — DP Hard Drill
**Solve**: LC #10 Regular Expression Matching, LC #44 Wildcard Matching, LC #140 Word Break II
**Focus**: These are "DP + backtracking" hybrids. Know when to memo vs enumerate.

### Session 58-59 — Module 7 Review
**Re-solve**: Coin Change, LCS, Edit Distance, Burst Balloons, House Robber III
**Speed targets**: Coin Change <12 min, Edit Distance <20 min, LCS <12 min
**Write**: DP decision framework from memory

---

## Module 8: Backtracking (Sessions 60-64)

### Session 60 — Backtracking Template: Study
**Learn**: Choose → Explore → Unchoose; pruning; permutations vs combinations vs subsets
**Template**: `backtrack(choices, path, result): if done: add path to result; for each choice: choose; backtrack; unchoose`
**Solve**: LC #78 Subsets, LC #46 Permutations
**Reflect**: Subsets = include/exclude. Permutations = used/unused. What distinguishes them?

### Session 61 — Backtracking: Drill
**Solve**: LC #39 Combination Sum, LC #40 Combination Sum II, LC #90 Subsets II
**Focus**: "II" variants teach deduplication — sort + skip duplicates.

### Session 62 — Backtracking: More Drill
**Solve**: LC #17 Letter Combinations of Phone Number, LC #22 Generate Parentheses, LC #131 Palindrome Partitioning
**Focus**: Generate Parentheses teaches "constraint-based generation" — valid at every step.

### Session 63 — Backtracking Hard
**Solve**: LC #51 N-Queens, LC #79 Word Search
**Focus**: N-Queens = constraint propagation + backtracking. Classic Google interview problem.

### Session 64 — Module 8 Review
**Re-solve**: N-Queens, Generate Parentheses, Word Search
**Speed target**: N-Queens in <25 min
**Write**: Backtracking template from memory. List when to use backtracking vs DP.

---

## Module 9: Heaps, Intervals & Greedy (Sessions 65-71)

### Session 65 — Heaps: Study
**Learn**: Min/max heap, top-K pattern, two-heap pattern
**Template**: PriorityQueue in Java
**Solve**: LC #215 Kth Largest Element, LC #347 Top K Frequent Elements
**Reflect**: Heap vs sorting — when is heap better? (Streaming data, partial results)

### Session 66 — Two Heaps: Study
**Solve**: LC #295 Find Median from Data Stream
**Focus**: Max-heap for left half, min-heap for right half. Rebalance on insert.

### Session 67 — Heaps Advanced
**Solve**: LC #621 Task Scheduler, LC #378 Kth Smallest in Sorted Matrix, LC #23 Merge K Sorted Lists (heap approach)
**Focus**: Task Scheduler uses greedy + heap. Sorted Matrix uses heap for k-way merge.

### Session 68 — Intervals: Study
**Learn**: Sort by start (or end), sweep line, merge overlapping
**Template**: Sort intervals; iterate and merge/compare with previous
**Solve**: LC #56 Merge Intervals, LC #57 Insert Interval
**Reflect**: When sort by start vs end? (Merge = start; scheduling = end)

### Session 69 — Intervals: Drill
**Solve**: LC #435 Non-Overlapping Intervals, LC #253 Meeting Rooms II
**Focus**: Meeting Rooms II = minimum platforms/rooms = sweep line or min-heap.

### Session 70 — Greedy Patterns
**Solve**: LC #121 Best Time to Buy and Sell Stock, LC #122 Best Time to Buy Sell Stock II, LC #169 Majority Element
**Focus**: Greedy works when local optimal = global optimal. How do you PROVE greedy correctness?

### Session 71 — Module 9 Review
**Re-solve**: Find Median, Task Scheduler, Meeting Rooms II, Merge Intervals
**Speed targets**: Merge Intervals <10 min, Find Median <20 min

---

## Module 10: Tries, Bit Manipulation & Design Problems (Sessions 72-75)

### Session 72 — Tries: Study + Build
**Learn**: Prefix tree, insert/search/startsWith, wildcard search
**Solve**: LC #208 Implement Trie, LC #211 Design Add and Search Words
**Build**: Implement Trie in Java

### Session 73 — Tries Advanced
**Solve**: LC #212 Word Search II (Trie + Backtracking)
**Focus**: This combines two patterns — builds on both Module 8 and this session.

### Session 74 — Bit Manipulation Essentials
**Solve**: LC #136 Single Number, LC #191 Number of 1 Bits, LC #338 Counting Bits, LC #268 Missing Number
**Focus**: XOR tricks (a^a=0, a^0=a). Bit counting (n & n-1 drops lowest set bit).

### Session 75 — Final Comprehensive Review
**Pick 5 problems randomly across all modules (one from each):**
- Array/String problem
- Graph or Tree problem
- DP problem
- Backtracking or Heap problem
- Design problem (LRU Cache, Trie, etc.)
**Time each. Record. Identify remaining weak spots.**

---

## Ongoing After Session 75

Once complete, maintain sharpness:
- Solve 1 random medium 3x/week (20 min cap)
- Revisit weak patterns monthly
- Do timed mock coding rounds (2 problems in 45 min) weekly
