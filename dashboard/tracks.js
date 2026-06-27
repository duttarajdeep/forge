// Auto-generated from tracks/*.md by dashboard/scripts/build-tracks.mjs
// Do not edit by hand. Re-run the build script after editing track markdown.
window.TRACKS = [
  {
    "letter": "A",
    "slug": "dsa",
    "title": "Track A — DSA (Algorithmic Problem Solving)",
    "intro": "**Target**: Solve mediums in <25 min, hards in <40 min\n**Language**: Java\n**Method**: Pattern-first. Learn the template, then drill problems that use it.\n\n---",
    "modules": [
      {
        "title": "Module 1: Arrays, Hashing & Two Pointers (Sessions 1-10)",
        "intro": "",
        "sessions": [
          {
            "n": 1,
            "title": "Arrays & Two Pointers: Study",
            "body": "**Learn**: Two pointer technique (converging, same-direction, fast/slow)\n**Template**: Sort + two pointers for pair-finding; opposite ends for search\n**Solve**: LC #1 Two Sum (hash map approach first, then two-pointer on sorted)\n**Reflect**: When do you choose hash map vs two pointers?"
          },
          {
            "n": 2,
            "title": "Two Pointers: Drill",
            "body": "**Solve**: LC #125 Valid Palindrome, LC #15 3Sum, LC #11 Container With Most Water\n**Focus**: Converging pointers pattern. Always ask: \"What invariant lets me move a pointer?\""
          },
          {
            "n": 3,
            "title": "Hash Maps: Study",
            "body": "**Learn**: Hash map for O(1) lookup, frequency counting, grouping\n**Template**: `map[key] = value` for lookup; `map[key]++` for counting; `map[transform(x)].add(x)` for grouping\n**Solve**: LC #49 Group Anagrams\n**Reflect**: What makes a good hash key? When does the choice of key determine the solution?"
          },
          {
            "n": 4,
            "title": "Hash Maps: Drill",
            "body": "**Solve**: LC #217 Contains Duplicate, LC #242 Valid Anagram, LC #128 Longest Consecutive Sequence\n**Focus**: Choosing the right key. Consecutive sequence uses a SET, not a map — why?"
          },
          {
            "n": 5,
            "title": "Prefix Sum & Product: Study",
            "body": "**Learn**: Prefix sum array, prefix product, subarray sum problems\n**Template**: `prefix[i] = prefix[i-1] + nums[i]`; sum(l,r) = prefix[r] - prefix[l-1]\n**Solve**: LC #238 Product of Array Except Self\n**Reflect**: How does prefix sum turn O(n²) into O(n)?"
          },
          {
            "n": 6,
            "title": "Prefix Sum: Drill",
            "body": "**Solve**: LC #560 Subarray Sum Equals K, LC #53 Maximum Subarray (Kadane's), LC #152 Maximum Product Subarray\n**Focus**: Subarray sum + hash map = powerful combo. Kadane's as a special case."
          },
          {
            "n": 7,
            "title": "Sliding Window (Fixed): Study",
            "body": "**Learn**: Fixed-size window, window sum/product, when to use\n**Template**: Expand right, shrink left when window exceeds size k\n**Solve**: LC #567 Permutation in String\n**Reflect**: Fixed window = exact size constraint. How do you detect \"valid window\"?"
          },
          {
            "n": 8,
            "title": "Sliding Window (Variable): Study",
            "body": "**Learn**: Variable-size window, expand until invalid, shrink until valid\n**Template**: `while (invalid) shrink left; update answer; expand right`\n**Solve**: LC #3 Longest Substring Without Repeating Characters\n**Reflect**: What's the invariant that determines shrink vs expand?"
          },
          {
            "n": 9,
            "title": "Sliding Window: Drill",
            "body": "**Solve**: LC #424 Longest Repeating Character Replacement, LC #76 Minimum Window Substring\n**Focus**: Min window = shrink to find minimum valid. Max window = expand to find maximum valid."
          },
          {
            "n": 10,
            "title": "Module 1 Review",
            "body": "**Re-solve** (no hints, timed): Two Sum, 3Sum, Longest Substring, Minimum Window Substring\n**Write**: Pattern templates from memory for Two Pointers, Hash Map, Prefix Sum, Sliding Window\n**Identify**: Which problems gave you trouble? Mark for future revisit.\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Linked Lists & Fast/Slow Pointers (Sessions 11-16)",
        "intro": "",
        "sessions": [
          {
            "n": 11,
            "title": "Linked List Basics: Study",
            "body": "**Learn**: Pointer manipulation, dummy head trick, in-place reversal\n**Template**: `prev = null; curr = head; while(curr) { next = curr.next; curr.next = prev; prev = curr; curr = next; }`\n**Solve**: LC #206 Reverse Linked List\n**Reflect**: Why does the dummy head eliminate edge cases?"
          },
          {
            "n": 12,
            "title": "Linked List: Drill",
            "body": "**Solve**: LC #21 Merge Two Sorted Lists, LC #143 Reorder List, LC #19 Remove Nth Node From End\n**Focus**: \"Remove Nth from end\" uses fast/slow pointer gap technique — powerful pattern."
          },
          {
            "n": 13,
            "title": "Fast/Slow Pointers (Floyd's): Study",
            "body": "**Learn**: Cycle detection, finding cycle start, finding middle\n**Template**: `slow = fast = head; while(fast && fast.next) { slow = slow.next; fast = fast.next.next; }`\n**Solve**: LC #141 Linked List Cycle, LC #142 Linked List Cycle II\n**Reflect**: Why does the math work for finding cycle start?"
          },
          {
            "n": 14,
            "title": "Advanced Linked List: Drill",
            "body": "**Solve**: LC #23 Merge K Sorted Lists, LC #25 Reverse Nodes in K-Group\n**Focus**: Merge K uses heap + linked list. K-Group reversal is the hardest linked list problem — take your time."
          },
          {
            "n": 15,
            "title": "LRU Cache: Study + Build",
            "body": "**Learn**: HashMap + Doubly Linked List = O(1) get/put with eviction\n**Solve**: LC #146 LRU Cache\n**Build**: Implement from scratch in Java\n**Reflect**: Why doubly-linked? Why not just a queue?"
          },
          {
            "n": 16,
            "title": "Module 2 Review",
            "body": "**Re-solve**: Reverse Linked List, Merge K Sorted, LRU Cache\n**Speed target**: LRU Cache in <20 min\n**Identify**: Edge cases you missed (null head, single node, etc.)\n\n---"
          }
        ]
      },
      {
        "title": "Module 3: Stacks & Monotonic Stack (Sessions 17-22)",
        "intro": "",
        "sessions": [
          {
            "n": 17,
            "title": "Stack Fundamentals: Study",
            "body": "**Learn**: LIFO for matching (parentheses), nesting (decode), tracking state\n**Template**: Push when opening, pop when closing, validate on pop\n**Solve**: LC #20 Valid Parentheses, LC #155 Min Stack\n**Reflect**: Min Stack teaches \"auxiliary state alongside primary state\" — where else does this apply?"
          },
          {
            "n": 18,
            "title": "Stack Applications: Drill",
            "body": "**Solve**: LC #394 Decode String, LC #232 Implement Queue using Stacks\n**Focus**: Decode String is recursive in nature — stack simulates the call stack."
          },
          {
            "n": 19,
            "title": "Monotonic Stack: Study",
            "body": "**Learn**: Find \"next greater/smaller element\" in O(n); maintain decreasing/increasing stack\n**Template**: `for each element: while (stack.top < element) { pop and record answer }; push element`\n**Solve**: LC #739 Daily Temperatures\n**Reflect**: Why monotonic? What invariant does the stack maintain?"
          },
          {
            "n": 20,
            "title": "Monotonic Stack: Drill",
            "body": "**Solve**: LC #84 Largest Rectangle in Histogram, LC #42 Trapping Rain Water\n**Focus**: Histogram is THE classic monotonic stack problem. Take time to understand it deeply."
          },
          {
            "n": 21,
            "title": "Monotonic Stack Advanced",
            "body": "**Solve**: LC #239 Sliding Window Maximum (monotonic deque), LC #85 Maximal Rectangle\n**Focus**: Sliding Window Max uses deque (not stack). Maximal Rectangle builds on Histogram."
          },
          {
            "n": 22,
            "title": "Module 3 Review",
            "body": "**Re-solve**: Daily Temperatures, Largest Rectangle, Trapping Rain Water\n**Speed target**: Largest Rectangle in <25 min\n**Write**: Monotonic stack template from memory\n\n---"
          }
        ]
      },
      {
        "title": "Module 4: Binary Trees (Sessions 23-30)",
        "intro": "",
        "sessions": [
          {
            "n": 23,
            "title": "Tree Traversal: Study",
            "body": "**Learn**: DFS (preorder, inorder, postorder), BFS (level-order), recursive vs iterative\n**Template**: Recursive DFS = base case + recurse left + recurse right (order varies)\n**Solve**: LC #104 Max Depth, LC #226 Invert Binary Tree\n**Reflect**: When do you need the RETURN value from recursion vs just traversing?"
          },
          {
            "n": 24,
            "title": "DFS Patterns: Drill",
            "body": "**Solve**: LC #543 Diameter of Binary Tree, LC #110 Balanced Binary Tree, LC #100 Same Tree\n**Focus**: Diameter teaches \"track global max during DFS\" — you'll reuse this in path sum problems."
          },
          {
            "n": 25,
            "title": "BFS (Level Order): Study",
            "body": "**Learn**: Queue-based BFS, level-by-level processing, right side view\n**Template**: `queue.add(root); while(!queue.empty()) { size = queue.size(); for(i<size)... }`\n**Solve**: LC #102 Binary Tree Level Order Traversal, LC #199 Binary Tree Right Side View\n**Reflect**: When is BFS better than DFS? (Level-aware problems, shortest path in unweighted)"
          },
          {
            "n": 26,
            "title": "BST Properties: Study",
            "body": "**Learn**: Inorder gives sorted order; BST search/insert/delete; validate using range\n**Template**: `isValid(node, min, max)` — pass range down recursively\n**Solve**: LC #98 Validate Binary Search Tree, LC #230 Kth Smallest Element in BST\n**Reflect**: How does \"inorder = sorted\" help you solve BST problems?"
          },
          {
            "n": 27,
            "title": "Tree Construction & Serialization: Drill",
            "body": "**Solve**: LC #105 Construct Binary Tree from Preorder and Inorder, LC #297 Serialize and Deserialize Binary Tree\n**Focus**: Construction problems test understanding of traversal order deeply."
          },
          {
            "n": 28,
            "title": "Path Sum Problems: Drill",
            "body": "**Solve**: LC #124 Binary Tree Maximum Path Sum, LC #236 Lowest Common Ancestor\n**Focus**: Max Path Sum combines \"global max tracking\" + \"return value from recursion\" — two patterns at once."
          },
          {
            "n": 29,
            "title": "Tree DFS Advanced",
            "body": "**Solve**: LC #235 LCA of BST, LC #337 House Robber III (DP on tree)\n**Focus**: House Robber III is your first taste of DP on trees — state = (rob this node, don't rob)."
          },
          {
            "n": 30,
            "title": "Module 4 Review",
            "body": "**Re-solve**: Max Path Sum, Serialize/Deserialize, LCA\n**Speed target**: Validate BST in <10 min, LCA in <15 min\n**Write**: Tree DFS template (recursive + iterative) from memory\n\n---"
          }
        ]
      },
      {
        "title": "Module 5: Graphs (Sessions 31-39)",
        "intro": "",
        "sessions": [
          {
            "n": 31,
            "title": "Graph Basics & DFS: Study",
            "body": "**Learn**: Adjacency list, DFS on graph, visited set, connected components\n**Template**: `dfs(node, visited): mark visited; for neighbor in adj[node]: if not visited: dfs(neighbor)`\n**Solve**: LC #200 Number of Islands\n**Reflect**: Islands = connected components on a grid. Grid DFS vs graph DFS — what's the difference?"
          },
          {
            "n": 32,
            "title": "Graph BFS: Study",
            "body": "**Learn**: BFS for shortest path (unweighted), multi-source BFS\n**Template**: Queue-based, level-by-level expansion\n**Solve**: LC #994 Rotting Oranges (multi-source BFS)\n**Reflect**: Why is BFS guaranteed to find shortest path in unweighted graphs?"
          },
          {
            "n": 33,
            "title": "Graph DFS/BFS: Drill",
            "body": "**Solve**: LC #417 Pacific Atlantic Water Flow, LC #133 Clone Graph, LC #127 Word Ladder\n**Focus**: Water Flow = multi-source DFS from both oceans. Word Ladder = BFS with implicit graph."
          },
          {
            "n": 34,
            "title": "Union-Find: Study",
            "body": "**Learn**: Disjoint Set Union, path compression, union by rank\n**Template**: `find(x): if parent[x]!=x: parent[x]=find(parent[x]); return parent[x]`\n**Solve**: LC #684 Redundant Connection, LC #323 Number of Connected Components\n**Reflect**: Union-Find vs DFS for connectivity — when is each better?"
          },
          {
            "n": 35,
            "title": "Topological Sort: Study",
            "body": "**Learn**: Kahn's algorithm (BFS), DFS-based topo sort, cycle detection\n**Template**: `indegree[]; queue starts with indegree==0; process -> decrement neighbors -> add new zeros`\n**Solve**: LC #207 Course Schedule, LC #210 Course Schedule II\n**Reflect**: Topological sort = dependency resolution. Where do you see this in real systems?"
          },
          {
            "n": 36,
            "title": "Dijkstra's Algorithm: Study",
            "body": "**Learn**: Shortest path with weights, priority queue, relaxation\n**Template**: `pq.add((0, start)); while pq: (dist, node) = pq.poll(); for (neighbor, weight): if dist+weight < best: update`\n**Solve**: LC #743 Network Delay Time\n**Reflect**: Why doesn't BFS work for weighted graphs? What does \"relaxation\" mean?"
          },
          {
            "n": 37,
            "title": "Graph Advanced: Drill",
            "body": "**Solve**: LC #269 Alien Dictionary, LC #261 Graph Valid Tree\n**Focus**: Alien Dictionary = topological sort on character ordering. Valid Tree = connected + no cycle + V-1 edges."
          },
          {
            "n": 38,
            "title": "Graph Patterns Mastery",
            "body": "**Solve**: LC #286 Walls and Gates (multi-source BFS), LC #785 Is Graph Bipartite?\n**Focus**: Bipartite = 2-colorable via BFS/DFS. Important theoretical concept."
          },
          {
            "n": 39,
            "title": "Module 5 Review",
            "body": "**Re-solve**: Number of Islands, Course Schedule II, Alien Dictionary, Network Delay Time\n**Speed targets**: Islands <12 min, Course Schedule <15 min\n**Write**: Graph templates from memory (DFS, BFS, Union-Find, Topo Sort, Dijkstra)\n\n---"
          }
        ]
      },
      {
        "title": "Module 6: Binary Search (Sessions 40-44)",
        "intro": "",
        "sessions": [
          {
            "n": 40,
            "title": "Binary Search Basics: Study",
            "body": "**Learn**: Classic binary search, search on sorted array, template with boundary\n**Template**: `lo=0, hi=n-1; while(lo<=hi): mid=(lo+hi)/2; if(target): return; elif less: lo=mid+1; else: hi=mid-1`\n**Solve**: LC #704 Binary Search, LC #74 Search a 2D Matrix\n**Reflect**: Binary search = eliminate half each step. What property must the search space have?"
          },
          {
            "n": 41,
            "title": "Rotated Array: Drill",
            "body": "**Solve**: LC #33 Search in Rotated Sorted Array, LC #153 Find Minimum in Rotated Sorted Array\n**Focus**: Determine which half is sorted, then decide which half to search."
          },
          {
            "n": 42,
            "title": "Binary Search on Answer: Study",
            "body": "**Learn**: When the answer is a number in a range, and you can check \"is X feasible?\"\n**Template**: `lo=min_answer, hi=max_answer; while(lo<hi): mid; if(feasible(mid)): hi=mid; else: lo=mid+1`\n**Solve**: LC #875 Koko Eating Bananas\n**Reflect**: \"Search on answer\" is a meta-pattern — what makes a problem amenable to it?"
          },
          {
            "n": 43,
            "title": "Binary Search Advanced",
            "body": "**Solve**: LC #4 Median of Two Sorted Arrays, LC #981 Time Based Key-Value Store\n**Focus**: Median of Two Arrays is one of the hardest binary search problems. Spend extra time if needed."
          },
          {
            "n": 44,
            "title": "Module 6 Review",
            "body": "**Re-solve**: Rotated Array, Koko, Median of Two Arrays\n**Speed target**: Koko in <15 min, Rotated Array in <12 min\n\n---"
          }
        ]
      },
      {
        "title": "Module 7: Dynamic Programming (Sessions 45-59)",
        "intro": "",
        "sessions": [
          {
            "n": 45,
            "title": "DP 1D Basics: Study",
            "body": "**Learn**: Overlapping subproblems, optimal substructure, top-down vs bottom-up\n**Template**: `dp[i] = best answer using elements 0..i`; recurrence from previous states\n**Solve**: LC #70 Climbing Stairs, LC #198 House Robber\n**Reflect**: How do you identify \"this is a DP problem\"? What are the signals?"
          },
          {
            "n": 46,
            "title": "DP 1D: Drill",
            "body": "**Solve**: LC #213 House Robber II (circular), LC #91 Decode Ways\n**Focus**: House Robber II = run House Robber twice (exclude first OR exclude last). Clever reduction."
          },
          {
            "n": 47,
            "title": "DP Unbounded: Study",
            "body": "**Learn**: Coin Change = unbounded knapsack; repeatable choices\n**Template**: `dp[amount] = min coins to make amount; dp[a] = min(dp[a], dp[a-coin]+1)`\n**Solve**: LC #322 Coin Change, LC #518 Coin Change 2\n**Reflect**: Coin Change 1 = min count (BFS also works!). Coin Change 2 = count combinations (order matters for loop nesting)."
          },
          {
            "n": 48,
            "title": "DP Subsequences: Drill",
            "body": "**Solve**: LC #139 Word Break, LC #300 Longest Increasing Subsequence, LC #152 Maximum Product Subarray\n**Focus**: LIS has both O(n²) DP and O(n log n) with binary search — know both."
          },
          {
            "n": 49,
            "title": "DP 0/1 Knapsack: Study",
            "body": "**Learn**: Include/exclude choices, knapsack template, space optimization\n**Template**: `dp[i][w] = max value using items 0..i with capacity w`\n**Solve**: LC #416 Partition Equal Subset Sum\n**Reflect**: Partition = \"is there a subset summing to total/2?\" — knapsack in disguise."
          },
          {
            "n": 50,
            "title": "DP 2D Basics: Study",
            "body": "**Learn**: 2D grid DP, two-string DP, state = (i, j) position\n**Template**: `dp[i][j] = answer for first i chars of s1 and first j chars of s2`\n**Solve**: LC #62 Unique Paths, LC #1143 Longest Common Subsequence\n**Reflect**: What determines whether you need 1D or 2D state?"
          },
          {
            "n": 51,
            "title": "DP 2D: Drill",
            "body": "**Solve**: LC #72 Edit Distance, LC #5 Longest Palindromic Substring\n**Focus**: Edit Distance is a Google favorite. Trace the recurrence on paper first."
          },
          {
            "n": 52,
            "title": "DP Advanced: Interval DP",
            "body": "**Solve**: LC #312 Burst Balloons, LC #647 Palindromic Substrings\n**Focus**: Burst Balloons = interval DP (what's the LAST balloon to burst in a range?). Mind-bending — take your time."
          },
          {
            "n": 53,
            "title": "DP on Trees",
            "body": "**Solve**: LC #337 House Robber III (revisit), LC #968 Binary Tree Cameras\n**Focus**: DP on trees = state per node, combine children's states."
          },
          {
            "n": 54,
            "title": "DP Bitmask (Optional Advanced)",
            "body": "**Solve**: LC #691 Stickers to Spell Word, or LC #1125 Smallest Sufficient Team\n**Focus**: Bitmask DP = state is a bitmask representing subset. Only if you're comfortable with previous DP."
          },
          {
            "n": 55,
            "title": "DP Pattern Synthesis",
            "body": "**Write**: Decision tree for \"which DP pattern?\" — Flowchart from problem traits to approach\n**Categorize**: All DP problems solved into: 1D linear, knapsack, LCS-style, interval, tree, bitmask"
          },
          {
            "n": 56,
            "title": "57 — DP Hard Drill",
            "body": "**Solve**: LC #10 Regular Expression Matching, LC #44 Wildcard Matching, LC #140 Word Break II\n**Focus**: These are \"DP + backtracking\" hybrids. Know when to memo vs enumerate."
          },
          {
            "n": 58,
            "title": "59 — Module 7 Review",
            "body": "**Re-solve**: Coin Change, LCS, Edit Distance, Burst Balloons, House Robber III\n**Speed targets**: Coin Change <12 min, Edit Distance <20 min, LCS <12 min\n**Write**: DP decision framework from memory\n\n---"
          }
        ]
      },
      {
        "title": "Module 8: Backtracking (Sessions 60-64)",
        "intro": "",
        "sessions": [
          {
            "n": 60,
            "title": "Backtracking Template: Study",
            "body": "**Learn**: Choose → Explore → Unchoose; pruning; permutations vs combinations vs subsets\n**Template**: `backtrack(choices, path, result): if done: add path to result; for each choice: choose; backtrack; unchoose`\n**Solve**: LC #78 Subsets, LC #46 Permutations\n**Reflect**: Subsets = include/exclude. Permutations = used/unused. What distinguishes them?"
          },
          {
            "n": 61,
            "title": "Backtracking: Drill",
            "body": "**Solve**: LC #39 Combination Sum, LC #40 Combination Sum II, LC #90 Subsets II\n**Focus**: \"II\" variants teach deduplication — sort + skip duplicates."
          },
          {
            "n": 62,
            "title": "Backtracking: More Drill",
            "body": "**Solve**: LC #17 Letter Combinations of Phone Number, LC #22 Generate Parentheses, LC #131 Palindrome Partitioning\n**Focus**: Generate Parentheses teaches \"constraint-based generation\" — valid at every step."
          },
          {
            "n": 63,
            "title": "Backtracking Hard",
            "body": "**Solve**: LC #51 N-Queens, LC #79 Word Search\n**Focus**: N-Queens = constraint propagation + backtracking. Classic Google interview problem."
          },
          {
            "n": 64,
            "title": "Module 8 Review",
            "body": "**Re-solve**: N-Queens, Generate Parentheses, Word Search\n**Speed target**: N-Queens in <25 min\n**Write**: Backtracking template from memory. List when to use backtracking vs DP.\n\n---"
          }
        ]
      },
      {
        "title": "Module 9: Heaps, Intervals & Greedy (Sessions 65-71)",
        "intro": "",
        "sessions": [
          {
            "n": 65,
            "title": "Heaps: Study",
            "body": "**Learn**: Min/max heap, top-K pattern, two-heap pattern\n**Template**: PriorityQueue in Java\n**Solve**: LC #215 Kth Largest Element, LC #347 Top K Frequent Elements\n**Reflect**: Heap vs sorting — when is heap better? (Streaming data, partial results)"
          },
          {
            "n": 66,
            "title": "Two Heaps: Study",
            "body": "**Solve**: LC #295 Find Median from Data Stream\n**Focus**: Max-heap for left half, min-heap for right half. Rebalance on insert."
          },
          {
            "n": 67,
            "title": "Heaps Advanced",
            "body": "**Solve**: LC #621 Task Scheduler, LC #378 Kth Smallest in Sorted Matrix, LC #23 Merge K Sorted Lists (heap approach)\n**Focus**: Task Scheduler uses greedy + heap. Sorted Matrix uses heap for k-way merge."
          },
          {
            "n": 68,
            "title": "Intervals: Study",
            "body": "**Learn**: Sort by start (or end), sweep line, merge overlapping\n**Template**: Sort intervals; iterate and merge/compare with previous\n**Solve**: LC #56 Merge Intervals, LC #57 Insert Interval\n**Reflect**: When sort by start vs end? (Merge = start; scheduling = end)"
          },
          {
            "n": 69,
            "title": "Intervals: Drill",
            "body": "**Solve**: LC #435 Non-Overlapping Intervals, LC #253 Meeting Rooms II\n**Focus**: Meeting Rooms II = minimum platforms/rooms = sweep line or min-heap."
          },
          {
            "n": 70,
            "title": "Greedy Patterns",
            "body": "**Solve**: LC #121 Best Time to Buy and Sell Stock, LC #122 Best Time to Buy Sell Stock II, LC #169 Majority Element\n**Focus**: Greedy works when local optimal = global optimal. How do you PROVE greedy correctness?"
          },
          {
            "n": 71,
            "title": "Module 9 Review",
            "body": "**Re-solve**: Find Median, Task Scheduler, Meeting Rooms II, Merge Intervals\n**Speed targets**: Merge Intervals <10 min, Find Median <20 min\n\n---"
          }
        ]
      },
      {
        "title": "Module 10: Tries, Bit Manipulation & Design Problems (Sessions 72-75)",
        "intro": "",
        "sessions": [
          {
            "n": 72,
            "title": "Tries: Study + Build",
            "body": "**Learn**: Prefix tree, insert/search/startsWith, wildcard search\n**Solve**: LC #208 Implement Trie, LC #211 Design Add and Search Words\n**Build**: Implement Trie in Java"
          },
          {
            "n": 73,
            "title": "Tries Advanced",
            "body": "**Solve**: LC #212 Word Search II (Trie + Backtracking)\n**Focus**: This combines two patterns — builds on both Module 8 and this session."
          },
          {
            "n": 74,
            "title": "Bit Manipulation Essentials",
            "body": "**Solve**: LC #136 Single Number, LC #191 Number of 1 Bits, LC #338 Counting Bits, LC #268 Missing Number\n**Focus**: XOR tricks (a^a=0, a^0=a). Bit counting (n & n-1 drops lowest set bit)."
          },
          {
            "n": 75,
            "title": "Final Comprehensive Review",
            "body": "**Pick 5 problems randomly across all modules (one from each):**\n- Array/String problem\n- Graph or Tree problem\n- DP problem\n- Backtracking or Heap problem\n- Design problem (LRU Cache, Trie, etc.)\n**Time each. Record. Identify remaining weak spots.**\n\n---"
          }
        ]
      }
    ],
    "totalSessions": 75,
    "extras": [
      {
        "heading": "How Each Session Works",
        "body": "**Study sessions** (~45 min):\n1. Read the pattern explanation (10 min)\n2. Understand the template/approach (10 min)\n3. Solve the first problem with the template in mind (25 min)\n\n**Drill sessions** (~45-60 min):\n1. Solve 2-3 problems using the pattern (timed: 25 min each)\n2. If stuck >15 min: look at hint, then solve\n3. If stuck >25 min: study solution, understand, re-solve tomorrow\n\n**Review sessions** (~30 min):\n1. Re-solve problems from the pattern without hints\n2. Write the pattern template from memory\n3. Identify edge cases you missed\n\n---"
      },
      {
        "heading": "Ongoing After Session 75",
        "body": "Once complete, maintain sharpness:\n- Solve 1 random medium 3x/week (20 min cap)\n- Revisit weak patterns monthly\n- Do timed mock coding rounds (2 problems in 45 min) weekly"
      }
    ]
  },
  {
    "letter": "B",
    "slug": "system-design",
    "title": "Track B — System Design (HLD + LLD)",
    "intro": "**Target**: Design any system cold in 40 minutes with clear trade-offs\n**Focus**: Google-scale consumer systems + infrastructure systems (alternating)\n**Method**: Framework → Practice → Mock\n\n---",
    "modules": [
      {
        "title": "Module 1: Foundations (Sessions 1-8)",
        "intro": "",
        "sessions": [
          {
            "n": 1,
            "title": "The Framework",
            "body": "**Study**: System design interview structure, back-of-envelope estimation\n**Practice**: Estimate YouTube's daily storage needs. Estimate Google Search QPS.\n**Deliverable**: Your cheat sheet of estimation numbers (users, QPS, storage per message/image/video)"
          },
          {
            "n": 2,
            "title": "Scaling Fundamentals",
            "body": "**Study**: Horizontal vs vertical scaling, load balancing, caching layers, CDN, database replication\n**Practice**: Draw a generic 3-tier web architecture that handles 10K QPS → 100K QPS → 1M QPS\n**Key Question**: At each scale jump, what breaks first and how do you fix it?"
          },
          {
            "n": 3,
            "title": "Database Design Patterns",
            "body": "**Study**: SQL vs NoSQL, sharding strategies, consistent hashing, replication (leader-follower, multi-leader)\n**Practice**: Design the data layer for a social network (users, posts, follows, feed)\n**Key Question**: When do you shard? How do you choose the shard key?"
          },
          {
            "n": 4,
            "title": "Caching & CDN",
            "body": "**Study**: Cache-aside, write-through, write-behind, cache invalidation, CDN for static + dynamic\n**Practice**: Add caching to your social network design. What do you cache? How do you invalidate?\n**Key Question**: What's the thundering herd problem? How do you prevent cache stampede?"
          },
          {
            "n": 5,
            "title": "Message Queues & Async",
            "body": "**Study**: Pub/sub, message brokers, exactly-once delivery, dead letter queues, backpressure\n**Practice**: Design async notification delivery for 10M users\n**Key Question**: How do you guarantee exactly-once processing? (Spoiler: you usually can't — discuss trade-offs)"
          },
          {
            "n": 6,
            "title": "Consistency & Availability (CAP)",
            "body": "**Study**: CAP theorem (practical interpretation), eventual consistency, strong consistency, conflict resolution\n**Practice**: Design a collaborative document editor — what consistency model do you need?\n**Key Question**: Where does Google choose CP vs AP in their systems?"
          },
          {
            "n": 7,
            "title": "Rate Limiting & API Gateway",
            "body": "**Study**: Token bucket, sliding window, distributed rate limiting, API gateway patterns\n**Design (timed 40 min)**: Design a distributed rate limiter for a cloud API gateway\n**Compare**: Check Alex Xu's rate limiter chapter. What did you miss?"
          },
          {
            "n": 8,
            "title": "LLD: Design Patterns for System Design",
            "body": "**Study**: Strategy, Observer, Factory, Builder — how they show up in system internals\n**LLD Practice**: Design a Notification Service (interface, concrete channels, routing logic)\n**Code**: Write the core interfaces and 2 implementations in Java\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Google-Scale Consumer Systems (Sessions 9-20)",
        "intro": "",
        "sessions": [
          {
            "n": 9,
            "title": "URL Shortener",
            "body": "**Design (timed 40 min)**: TinyURL — shorten, redirect, analytics, rate limit\n**Deep Dive**: Hash collision handling, Base62 encoding, read-heavy optimization\n**Scale**: 100M URLs created/day, 10B redirects/day"
          },
          {
            "n": 10,
            "title": "News Feed / Timeline",
            "body": "**Design (timed 40 min)**: Twitter/X feed — post, follow, timeline generation\n**Deep Dive**: Fan-out on write vs fan-out on read, celebrity problem\n**Scale**: 500M DAU, 10K followers average, 1M+ for celebrities"
          },
          {
            "n": 11,
            "title": "Chat System (WhatsApp/Messenger)",
            "body": "**Design (timed 40 min)**: 1:1 and group chat with read receipts, online status\n**Deep Dive**: WebSocket management, message ordering, offline delivery\n**Scale**: 1B DAU, 100B messages/day"
          },
          {
            "n": 12,
            "title": "YouTube / Video Streaming",
            "body": "**Design (timed 40 min)**: Upload, transcode, stream, recommend\n**Deep Dive**: Chunked upload, adaptive bitrate streaming, CDN for video\n**Scale**: 500M DAU, 1B hours watched/day, 500 hours uploaded/min"
          },
          {
            "n": 13,
            "title": "Google Drive / Dropbox",
            "body": "**Design (timed 40 min)**: File sync, versioning, sharing, collaboration\n**Deep Dive**: Block-level dedup, delta sync, conflict resolution\n**Scale**: 1B users, 10B files, sync across 5 devices per user"
          },
          {
            "n": 14,
            "title": "Google Maps",
            "body": "**Design (timed 40 min)**: Routing, ETA, live traffic, place search\n**Deep Dive**: Graph partitioning (A* vs Dijkstra at scale), geospatial indexing (S2/H3)\n**Scale**: 1B daily queries, real-time traffic from 100M active drivers"
          },
          {
            "n": 15,
            "title": "Google Search",
            "body": "**Design (timed 40 min)**: Web crawl, index, rank, serve\n**Deep Dive**: Inverted index, PageRank, sharding the index, serving latency\n**Scale**: 8.5B searches/day, 100B+ pages indexed"
          },
          {
            "n": 16,
            "title": "Notification System",
            "body": "**Design (timed 40 min)**: Multi-channel (push, email, SMS), preferences, throttling\n**Deep Dive**: Priority queues, deduplication, delivery guarantees, user preference engine\n**Scale**: 10B notifications/day, 5 channels, <1s for priority alerts"
          },
          {
            "n": 17,
            "title": "Distributed Key-Value Store",
            "body": "**Design (timed 40 min)**: Like DynamoDB/Cassandra — distributed, eventually consistent\n**Deep Dive**: Consistent hashing, vector clocks, gossip protocol, read repair\n**Scale**: 1M QPS writes, 10M QPS reads, 100TB+ data"
          },
          {
            "n": 18,
            "title": "Job Scheduler (Google Cloud Scheduler)",
            "body": "**Design (timed 40 min)**: Cron-like scheduling, one-time jobs, retry, distributed locking\n**Deep Dive**: Leader election, sharded time wheels, exactly-once execution\n**Scale**: 100M scheduled jobs, 1M concurrent executions"
          },
          {
            "n": 19,
            "title": "Metrics / Monitoring System",
            "body": "**Design (timed 40 min)**: Ingest metrics, store time-series, query, alert\n**Deep Dive**: Write path (batching, compression), query path (pre-aggregation, downsampling)\n**Scale**: 100M time series, 10M data points/sec ingestion"
          },
          {
            "n": 20,
            "title": "CI/CD Pipeline System",
            "body": "**Design (timed 40 min)**: Build, test, deploy pipeline (like Google's TAP)\n**Deep Dive**: DAG execution, artifact caching, test parallelization, canary + rollback\n**Scale**: 50K builds/day, 1M test executions/day, <15 min build time target\n\n---"
          }
        ]
      },
      {
        "title": "Module 3: Infrastructure Deep-Dives (Sessions 21-30)",
        "intro": "",
        "sessions": [
          {
            "n": 21,
            "title": "LLD: Rate Limiter Library",
            "body": "**Design + Code**: Multiple algorithms (token bucket, sliding window, fixed window)\n**Implementation**: Interface + 3 strategies in Java. Thread-safe.\n**Test**: Concurrent access, edge cases at boundary"
          },
          {
            "n": 22,
            "title": "LLD: In-Memory Cache (Like Memcached)",
            "body": "**Design + Code**: LRU eviction, TTL, thread-safe, configurable capacity\n**Implementation**: Java + Go versions\n**Discuss**: Why LRU vs LFU? When would you switch eviction policy?"
          },
          {
            "n": 23,
            "title": "LLD: Pub/Sub Message Broker",
            "body": "**Design + Code**: Topics, subscriptions, at-least-once delivery, dead letter queue\n**Implementation**: In-memory in Java with proper concurrency\n**Discuss**: How would you make this distributed?"
          },
          {
            "n": 24,
            "title": "Design a Container Orchestrator",
            "body": "**Design (timed 40 min)**: Simplified Kubernetes — schedule containers, health check, restart\n**Deep Dive**: Scheduling algorithms, resource binpacking, node failure handling\n**Connect**: How does this relate to Borg (Google's internal system)?"
          },
          {
            "n": 25,
            "title": "Design a Service Mesh",
            "body": "**Design (timed 40 min)**: Sidecar proxy, mTLS, traffic routing, circuit breaking\n**Deep Dive**: Data plane vs control plane, xDS protocol, observability\n**Connect**: How does Istio/Envoy implement this?"
          },
          {
            "n": 26,
            "title": "Design a Release Orchestration System",
            "body": "**Design (timed 40 min)**: Pipeline stages, canary deployment, rollback, approval gates\n**Deep Dive**: State machine for release stages, concurrent release conflict resolution\n**Key Question**: How do you safely orchestrate thousands of services releasing in parallel without correlated failures?"
          },
          {
            "n": 27,
            "title": "Design a Distributed Tracing System",
            "body": "**Design (timed 40 min)**: Like Jaeger/Zipkin — trace propagation, storage, query\n**Deep Dive**: Context propagation, sampling strategies, tail-based sampling\n**Scale**: 100K spans/sec ingestion, 7 day retention, <100ms query latency"
          },
          {
            "n": 28,
            "title": "Design a Feature Flag System",
            "body": "**Design (timed 40 min)**: Server-side evaluation, targeting rules, percentage rollout, real-time updates\n**Deep Dive**: Evaluation engine, segment targeting, A/B testing integration\n**Scale**: 10B evaluations/day, <5ms evaluation latency, 1000 flags"
          },
          {
            "n": 29,
            "title": "Design a Distributed Lock Service",
            "body": "**Design (timed 40 min)**: Like Chubby/ZooKeeper — leader election, distributed locks, watch\n**Deep Dive**: Paxos/Raft for consensus, lease-based locks, fencing tokens\n**Key Question**: What happens when the lock holder dies? How do you detect it?"
          },
          {
            "n": 30,
            "title": "Design Review & Synthesis",
            "body": "**Pick 3 systems you designed** (one consumer, one infra, one LLD)\n**Re-design from scratch** in 35 min each\n**Compare**: How much better are you than your first attempt?\n**Write**: Your \"signature\" system design — the one you'll nail in any interview\n\n---"
          }
        ]
      },
      {
        "title": "Module 4: Mock Interviews & Mastery (Sessions 31-40)",
        "intro": "",
        "sessions": [
          {
            "n": 31,
            "title": "Mock #1: Random Consumer System",
            "body": "**Format**: 45 min, no prep. Pick randomly: YouTube, Chat, Drive, Maps, or Search\n**Self-evaluate**: Did you cover requirements → estimation → design → deep dive → trade-offs?"
          },
          {
            "n": 32,
            "title": "Mock #2: Random Infrastructure System",
            "body": "**Format**: 45 min, no prep. Pick randomly: KV Store, Scheduler, Tracing, or Orchestrator"
          },
          {
            "n": 33,
            "title": "Mock #3: Novel System (never practiced)",
            "body": "**Format**: 45 min. Design one of: Uber/Lyft, Spotify, Google Photos, Typeahead Search\n**Focus**: Can you apply your framework to something new?"
          },
          {
            "n": 34,
            "title": "LLD Mock: Design in 30 min",
            "body": "**Format**: 30 min. Design one of: Parking Lot, Elevator System, Library Management\n**Code**: Write the class diagram + core methods"
          },
          {
            "n": 35,
            "title": "Deep Dive Practice",
            "body": "**Pick any previous design. Go DEEP on one component for 45 min:**\n- Database schema + queries for hot paths\n- Caching strategy with invalidation flows\n- Failure modes and recovery procedures"
          },
          {
            "n": 36,
            "title": "Scale Estimation Speed Round",
            "body": "**10 systems, 3 min each**: Estimate QPS, storage, bandwidth for each\n**Goal**: Be fast and confident with numbers"
          },
          {
            "n": 37,
            "title": "Trade-off Articulation",
            "body": "**For 5 systems you've designed, write 3 trade-offs each:**\n- \"I chose X over Y because Z. If we needed A instead, I'd reconsider.\"\n**Practice saying these out loud** (Google interviewers probe trade-offs heavily)"
          },
          {
            "n": 38,
            "title": "Mock #4: Full Interview Simulation",
            "body": "**Format**: 45 min. Have someone ask you (or use a random system). Speak out loud.\n**Record yourself** if possible. Review."
          },
          {
            "n": 39,
            "title": "Weak System Revisit",
            "body": "**Identify your 2 weakest designs. Re-do them from scratch.**\n**Focus on**: What you struggled with last time"
          },
          {
            "n": 40,
            "title": "Final Synthesis",
            "body": "**Write your interview cheat sheet:**\n- 3 systems you can design perfectly (your \"go-to\" deep dives)\n- Estimation reference numbers\n- 5 universal trade-offs you can discuss for any system\n- Red flags to avoid (premature optimization, ignoring requirements, no scale numbers)"
          }
        ]
      }
    ],
    "totalSessions": 40,
    "extras": [
      {
        "heading": "How Each Session Works",
        "body": "**Framework sessions** (~45 min):\n1. Study the design approach/concept (15 min)\n2. Practice applying it to a specific system (30 min)\n\n**Design sessions** (~60 min):\n1. Time yourself: 5 min requirements, 5 min estimation, 10 min high-level, 20 min deep-dive, 5 min wrap-up\n2. Write your design (diagram + text)\n3. Compare with reference material\n4. Note what you missed\n\n**LLD sessions** (~45 min):\n1. Design classes, interfaces, and interactions\n2. Apply SOLID principles\n3. Write the core code\n\n---"
      },
      {
        "heading": "The Framework (Learn This First)",
        "body": "### System Design Template (for every problem):\n1. **Requirements** (3 min): Functional + Non-functional + Scale numbers\n2. **Estimation** (3 min): QPS, storage, bandwidth, memory\n3. **API Design** (3 min): Core endpoints/RPCs\n4. **High-Level Architecture** (10 min): Components, data flow\n5. **Data Model** (5 min): Schema, storage choices\n6. **Deep Dive** (15 min): Scaling bottleneck, interesting component\n7. **Trade-offs** (3 min): What did you choose and why? What's the alternative?\n\n---"
      }
    ]
  },
  {
    "letter": "C",
    "slug": "concurrency",
    "title": "Track C — Concurrency & Language Depth",
    "intro": "**Target**: Write production-grade concurrent code; articulate the Java memory model\n**Language**: Java (JCIP depth)\n**Method**: Concept → Code → Explain\n\n---",
    "modules": [
      {
        "title": "Module 1: Java Concurrency Fundamentals (Sessions 1-10)",
        "intro": "",
        "sessions": [
          {
            "n": 1,
            "title": "Thread Safety: What & Why",
            "body": "**Read**: JCIP Ch 2 (Thread Safety)\n**Concepts**: Race condition, atomicity, visibility, compound actions, intrinsic locks\n**Code**: Write a program that demonstrates a race condition, then fix it with `synchronized`\n**Key Insight**: Thread safety = correct behavior when accessed from multiple threads WITHOUT requiring the caller to do anything special"
          },
          {
            "n": 2,
            "title": "Sharing Objects Safely",
            "body": "**Read**: JCIP Ch 3 (Sharing Objects)\n**Concepts**: Visibility (volatile), publication and escape, thread confinement, immutability\n**Code**: Demonstrate visibility bug (stale data without volatile). Fix with volatile.\n**Key Insight**: Publication safety — if you pass `this` to another thread during construction, it sees a partially-constructed object."
          },
          {
            "n": 3,
            "title": "Composing Thread-Safe Classes",
            "body": "**Read**: JCIP Ch 4 (Composing Objects)\n**Concepts**: Instance confinement, delegation, adding functionality to thread-safe classes\n**Code**: Build a thread-safe `NumberRange` class using confinement. Then build using delegation.\n**Key Insight**: Confinement = simplest strategy. Delegation = most flexible. Choose based on complexity."
          },
          {
            "n": 4,
            "title": "Building Blocks",
            "body": "**Read**: JCIP Ch 5 (Building Blocks)\n**Concepts**: Synchronized collections, ConcurrentHashMap, BlockingQueue, synchronizers (CountDownLatch, Semaphore, Barrier)\n**Code**: Producer-consumer using `BlockingQueue`. Worker coordination using `CountDownLatch`.\n**Key Insight**: Don't build from scratch — use java.util.concurrent. Know when to use which."
          },
          {
            "n": 5,
            "title": "Task Execution & Executors",
            "body": "**Read**: JCIP Ch 6 (Task Execution)\n**Concepts**: Executor framework, thread pools, Callable/Future, CompletionService\n**Code**: Build a parallel web page renderer using `ExecutorService` + `Future`\n**Key Insight**: Thread pool sizing: CPU-bound = N_cpu + 1. IO-bound = N_cpu * (1 + wait/compute)."
          },
          {
            "n": 6,
            "title": "Cancellation & Shutdown",
            "body": "**Read**: JCIP Ch 7 (Cancellation and Shutdown)\n**Concepts**: Interruption, cooperative cancellation, poison pills, shutdownNow vs shutdown\n**Code**: Build a cancellable task. Demonstrate proper shutdown with poison pill pattern.\n**Key Insight**: Never swallow InterruptedException. Either propagate or restore the interrupt flag."
          },
          {
            "n": 7,
            "title": "Thread Pool Configuration",
            "body": "**Read**: JCIP Ch 8 (Applying Thread Pools)\n**Concepts**: Pool sizing, ThreadPoolExecutor parameters, work queues, saturation policies\n**Code**: Configure a ThreadPoolExecutor with bounded queue + CallerRunsPolicy. Load test it.\n**Key Insight**: Unbounded queue + fixed pool = OOM waiting to happen under load."
          },
          {
            "n": 8,
            "title": "Performance & Scalability",
            "body": "**Read**: JCIP Ch 11 (Performance and Scalability)\n**Concepts**: Amdahl's Law, lock contention, lock striping, narrowing lock scope\n**Code**: Benchmark a shared counter: synchronized vs AtomicLong vs LongAdder. Measure contention.\n**Key Insight**: Lock striping (ConcurrentHashMap's approach) = segment the lock for higher concurrency."
          },
          {
            "n": 9,
            "title": "Explicit Locks & Atomics",
            "body": "**Read**: JCIP Ch 13-14 (Explicit Locks, Building Custom Synchronizers)\n**Concepts**: ReentrantLock, ReadWriteLock, Condition, AbstractQueuedSynchronizer, AtomicReference, CAS\n**Code**: Build a bounded buffer using ReentrantLock + Condition (not wait/notify).\n**Key Insight**: CAS = optimistic concurrency. Good for low contention. AQS = foundation of all j.u.c locks."
          },
          {
            "n": 10,
            "title": "Java Memory Model",
            "body": "**Read**: JCIP Ch 16 (Java Memory Model)\n**Concepts**: Happens-before, final field semantics, safe publication idioms, double-checked locking\n**Code**: Demonstrate unsafe publication (no happens-before). Fix with volatile/final/synchronized.\n**Key Insight**: The JMM defines WHEN writes become visible to other threads. Without happens-before, no guarantees.\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Advanced Patterns & Production Code (Sessions 11-22)",
        "intro": "",
        "sessions": [
          {
            "n": 11,
            "title": "Java Virtual Threads (Project Loom)",
            "body": "**Learn**: Virtual threads in Java 21+, structured concurrency, when to use vs platform threads\n**Code**: Rewrite your executor-based web renderer using virtual threads. Benchmark difference.\n**Key Insight**: Virtual threads = lightweight threads. Don't pool them. 1 per task."
          },
          {
            "n": 12,
            "title": "CompletableFuture Mastery",
            "body": "**Learn**: CompletableFuture composition, thenCompose, thenCombine, allOf, exceptionally\n**Code**: Build an async service aggregator — call 3 APIs in parallel, combine results, handle partial failure"
          },
          {
            "n": 13,
            "title": "Lock-Free Data Structures",
            "body": "**Learn**: CAS loops, ABA problem, lock-free stack, lock-free queue (Michael-Scott)\n**Code**: Implement a lock-free stack using AtomicReference + CAS\n**Key Insight**: Lock-free ≠ faster. Better for: low contention, real-time requirements, preventing priority inversion."
          },
          {
            "n": 14,
            "title": "Build: Thread-Safe Rate Limiter",
            "body": "**Build**: Token bucket + sliding window rate limiters, thread-safe, configurable\n**Test**: Concurrent access from 100 threads. Verify correctness under load."
          },
          {
            "n": 15,
            "title": "Build: Concurrent Cache with TTL",
            "body": "**Build**: Cache with configurable TTL, LRU eviction, concurrent access\n**Design choices**: ConcurrentHashMap + scheduled cleanup vs weak references vs Caffeine-style"
          },
          {
            "n": 16,
            "title": "Build: Producer-Consumer with Backpressure",
            "body": "**Build**: Bounded queue, multiple producers/consumers, backpressure when full, graceful shutdown\n**Reflect**: When is a `BlockingQueue` enough vs. when do you reach for a reactive stream?"
          },
          {
            "n": 17,
            "title": "Build: Parallel Map-Reduce",
            "body": "**Build**: Framework for parallel processing — split work, map, shuffle, reduce\n**Test**: Process 1M records. Measure speedup vs serial."
          },
          {
            "n": 18,
            "title": "Effective Java: Concurrency Items",
            "body": "**Read**: EJ Items 78-84 (synchronize access, prefer executors, prefer concurrency utilities, document thread safety, use lazy initialization judiciously, don't depend on thread scheduler)\n**Code**: Find violations of these items in sample code. Fix them."
          },
          {
            "n": 19,
            "title": "Effective Java: General Programming",
            "body": "**Read**: EJ Items 57-68 (minimize scope, prefer for-each, know libraries, avoid float for exact, prefer interfaces to reflection, use native carefully, optimize judiciously, naming conventions)\n**Apply**: Refactor a piece of your own code applying these items."
          },
          {
            "n": 20,
            "title": "Effective Java: API Design",
            "body": "**Read**: EJ Items 49-56 (check parameters, defensive copies, method signatures, overloading carefully, varargs, return optionals, write doc comments)\n**Code**: Design a clean API for one of your concurrent data structures. Apply these items."
          },
          {
            "n": 21,
            "title": "Testing Concurrent Code",
            "body": "**Learn**: How to test for race conditions, liveness, deadlocks; stress testing\n**Code**: Write tests that expose race conditions in buggy code. Use `java.util.concurrent` tools for test timing."
          },
          {
            "n": 22,
            "title": "Concurrency Synthesis",
            "body": "**Write from memory**:\n- Java thread safety checklist (10 items)\n- When to use which j.u.c primitive (decision tree)\n- Explain aloud: Java Memory Model happens-before rules"
          }
        ]
      }
    ],
    "totalSessions": 22,
    "extras": [
      {
        "heading": "How Each Session Works",
        "body": "**Study sessions** (~45-60 min):\n1. Read the chapter/concept (30 min)\n2. Write a small program demonstrating the concept (15-30 min)\n\n**Build sessions** (~60 min):\n1. Implement a concurrent data structure or system\n2. Write tests that prove thread-safety (or expose race conditions)\n3. Benchmark if relevant\n\n---"
      }
    ]
  },
  {
    "letter": "D",
    "slug": "infrastructure",
    "title": "Track D — Infrastructure & Distributed Systems",
    "intro": "**Target**: Articulate distributed systems trade-offs; hands-on infra fluency\n**Method**: Concept → Connect to real systems → Build/demonstrate\n**Reference**: DDIA (primary text), Google SRE book (supplementary)\n\n---",
    "modules": [
      {
        "title": "Module 1: Distributed Systems Foundations (Sessions 1-12)",
        "intro": "",
        "sessions": [
          {
            "n": 1,
            "title": "Data Models & Query Languages",
            "body": "**Read**: DDIA Ch 2\n**Core ideas**: Relational vs document vs graph models; impedance mismatch; query languages\n**Sketch**: Data model diagram for a release orchestration system"
          },
          {
            "n": 2,
            "title": "Storage Engines",
            "body": "**Read**: DDIA Ch 3\n**Core ideas**: LSM-trees vs B-trees; SSTables; write amplification; read amplification\n**Key Question**: Why does Cassandra use LSM-trees? Why does Postgres use B-trees?"
          },
          {
            "n": 3,
            "title": "Encoding & Evolution",
            "body": "**Read**: DDIA Ch 4\n**Core ideas**: JSON, Protocol Buffers, Avro; schema evolution; backward/forward compatibility\n**Hands-on**: Define a .proto file. Add a field. Verify old clients still work."
          },
          {
            "n": 4,
            "title": "Replication",
            "body": "**Read**: DDIA Ch 5\n**Core ideas**: Leader-follower, multi-leader, leaderless; sync vs async; consistency guarantees\n**Key Question**: If the leader dies, what happens? How long is the failover?"
          },
          {
            "n": 5,
            "title": "Partitioning (Sharding)",
            "body": "**Read**: DDIA Ch 6\n**Core ideas**: Hash partitioning, range partitioning, secondary indexes, rebalancing\n**Key Question**: Hot partition problem — what if 80% of traffic is for one tenant?"
          },
          {
            "n": 6,
            "title": "Transactions",
            "body": "**Read**: DDIA Ch 7\n**Core ideas**: ACID, isolation levels (read committed, snapshot, serializable), 2PL, SSI\n**Key Question**: What's the difference between \"serializable\" in theory vs in practice?"
          },
          {
            "n": 7,
            "title": "Problems of Distributed Systems",
            "body": "**Read**: DDIA Ch 8\n**Core ideas**: Unreliable networks, unreliable clocks, process pauses, partial failure\n**Key Question**: How do you distinguish \"the service is slow\" from \"the service is dead\"?"
          },
          {
            "n": 8,
            "title": "Consistency & Consensus",
            "body": "**Read**: DDIA Ch 9\n**Core ideas**: Linearizability, causal consistency, total order broadcast, Raft/Paxos, 2PC, 3PC\n**Key Question**: Why is 2PC a \"blocking\" protocol? What does Raft improve?"
          },
          {
            "n": 9,
            "title": "Batch Processing",
            "body": "**Read**: DDIA Ch 10\n**Core ideas**: MapReduce, dataflow engines (Spark), join algorithms, fault tolerance in batch\n**Key Question**: How does MapReduce handle a failed node mid-computation?"
          },
          {
            "n": 10,
            "title": "Stream Processing",
            "body": "**Read**: DDIA Ch 11\n**Core ideas**: Event sourcing, CDC, stream joins, exactly-once semantics, windowing\n**Key Question**: \"Exactly-once\" in streaming — is it real? What does Kafka actually guarantee?"
          },
          {
            "n": 11,
            "title": "Reliability & Fault Tolerance",
            "body": "**Read**: Google SRE Book Ch 1-4 (or summaries)\n**Core ideas**: SLOs/SLIs/SLAs, error budgets, risk assessment, toil reduction\n**Practice**: Define SLOs for a release orchestration system (availability, latency, correctness)"
          },
          {
            "n": 12,
            "title": "Observability Fundamentals",
            "body": "**Study**: Three pillars — metrics, logs, traces; RED method; USE method\n**Core ideas**: What to instrument, alert fatigue, service-level dashboards\n**Practice**: Design a monitoring strategy for a critical microservice (what alerts, what dashboards)\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Cloud-Native Infrastructure (Sessions 13-22)",
        "intro": "",
        "sessions": [
          {
            "n": 13,
            "title": "Containers Deep Dive",
            "body": "**Study**: OCI spec, namespaces (pid, net, mnt, uts, ipc, user), cgroups, seccomp\n**Hands-on**: Run a container. Inspect its namespaces from the host (`/proc/[pid]/ns/`).\n**Key Question**: How is a container different from a VM? What isolation does it NOT provide?"
          },
          {
            "n": 14,
            "title": "Kubernetes Architecture",
            "body": "**Study**: Control plane (API server, etcd, scheduler, controller manager), data plane (kubelet, kube-proxy)\n**Hands-on**: Set up a local cluster (kind/minikube). Explore with `kubectl get --raw`\n**Key Question**: What happens step-by-step when you `kubectl apply` a Deployment?"
          },
          {
            "n": 15,
            "title": "Kubernetes Workloads",
            "body": "**Study**: Pod lifecycle, Deployment strategies (rolling, recreate), StatefulSet, DaemonSet, Job/CronJob\n**Hands-on**: Deploy an app. Trigger a rolling update. Observe pod replacement."
          },
          {
            "n": 16,
            "title": "Kubernetes Networking",
            "body": "**Study**: Service types (ClusterIP, NodePort, LoadBalancer), Ingress, DNS, NetworkPolicy\n**Hands-on**: Expose a service. Trace the network path from client to pod.\n**Key Question**: How does kube-proxy route traffic? What's the difference between iptables and IPVS mode?"
          },
          {
            "n": 17,
            "title": "Kubernetes Configuration & Storage",
            "body": "**Study**: ConfigMap, Secret, PV/PVC, StorageClass, resource requests/limits, probes\n**Hands-on**: Deploy an app with ConfigMap, liveness/readiness probes. Kill the probe — watch restart."
          },
          {
            "n": 18,
            "title": "Helm & Templating",
            "body": "**Study**: Chart structure, values.yaml, templates, hooks, dependencies, release lifecycle\n**Hands-on**: Write a Helm chart for a Spring Boot app. Deploy. Upgrade with new values."
          },
          {
            "n": 19,
            "title": "Service Mesh Concepts",
            "body": "**Study**: Sidecar proxy pattern, mTLS, traffic management, observability injection\n**Core ideas**: Data plane vs control plane, Envoy, xDS protocol\n**Key Question**: When does a service mesh earn its keep, and when is it overkill?"
          },
          {
            "n": 20,
            "title": "GitOps & Continuous Delivery",
            "body": "**Study**: Declarative desired state, reconciliation loop, ArgoCD/Flux architecture\n**Core ideas**: Push vs pull deployment, drift detection, progressive delivery\n**Hands-on**: Set up ArgoCD locally. Deploy from a git repo. Make a change. Watch sync."
          },
          {
            "n": 21,
            "title": "Observability Stack",
            "body": "**Study**: Prometheus (metrics), Grafana (dashboards), Jaeger/Tempo (traces), Loki (logs)\n**Hands-on**: Instrument a Java app with Micrometer + Prometheus. Build a Grafana dashboard."
          },
          {
            "n": 22,
            "title": "CI/CD Pipeline Design",
            "body": "**Study**: Build → Test → Scan → Package → Deploy. Artifact caching, test parallelization.\n**Design**: CI/CD pipeline for a Java microservice (Dockerfile → registry → K8s)\n**Key Question**: What stages can run in parallel? What must be serialized? Where are the failure-recovery seams?\n\n---"
          }
        ]
      },
      {
        "title": "Module 3: Google-Scale Infrastructure Concepts (Sessions 23-30)",
        "intro": "",
        "sessions": [
          {
            "n": 23,
            "title": "Google's Infrastructure Papers (Overview)",
            "body": "**Read summaries of**: Borg, Omega, MapReduce, Bigtable, Spanner, Chubby, GFS/Colossus\n**Core insight**: Google invented most of what we use (K8s from Borg, HDFS from GFS, etc.)\n**Map**: Which Google system → which open-source equivalent → which concept it teaches"
          },
          {
            "n": 24,
            "title": "Borg & Large-Scale Scheduling",
            "body": "**Study**: Borg paper key ideas — resource binpacking, preemption, allocs, jobs vs tasks\n**Key Question**: At Google scale (millions of jobs), what's the scheduling bottleneck?"
          },
          {
            "n": 25,
            "title": "Spanner & Global Consistency",
            "body": "**Study**: TrueTime API, externally consistent transactions, Paxos groups, split/merge\n**Core insight**: Spanner achieves global strong consistency using atomic clocks + GPS\n**Key Question**: Why can't other databases do this? What's special about TrueTime?"
          },
          {
            "n": 26,
            "title": "Load Balancing at Scale",
            "body": "**Study**: L4 vs L7 load balancing, Maglev (Google's L4 LB), consistent hashing for LB\n**Core insight**: Google serves billions of requests — how does traffic reach the right server?\n**Design**: Load balancing for a global service (anycast, geo-routing, health-aware)"
          },
          {
            "n": 27,
            "title": "Capacity Planning & Autoscaling",
            "body": "**Study**: Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), custom metrics scaling\n**Core ideas**: Scaling signals, cooldown periods, flapping prevention\n**Hands-on**: Configure HPA. Load test. Watch scale-up and scale-down behavior."
          },
          {
            "n": 28,
            "title": "Reliability Engineering",
            "body": "**Study**: Chaos engineering principles, failure injection, game days, disaster recovery\n**Core ideas**: Blast radius, circuit breakers, bulkheads, timeouts, retries with backoff\n**Design**: Resilience strategy for a release orchestration system (what if the DB goes down mid-release?)"
          },
          {
            "n": 29,
            "title": "Security in Distributed Systems",
            "body": "**Study**: Zero trust architecture, mTLS everywhere, RBAC, Pod Security Standards, supply chain security\n**Core ideas**: Principle of least privilege, defense in depth, secrets management\n**Key Question**: How would you handle auth between services in a zero-trust architecture?"
          },
          {
            "n": 30,
            "title": "Infrastructure Synthesis",
            "body": "**Write from memory**:\n- Distributed systems trade-off matrix (consistency, availability, partition tolerance, latency)\n- When to use each database type (relational, document, graph, time-series, KV)\n- Kubernetes architecture diagram with all components\n- CI/CD pipeline stages and what can fail at each\n**Prepare**: Your \"infrastructure story\" for interviews — how you deploy, scale, monitor in production"
          }
        ]
      }
    ],
    "totalSessions": 30,
    "extras": [
      {
        "heading": "How Each Session Works",
        "body": "**Concept sessions** (~45-60 min):\n1. Read/study the concept (25-30 min)\n2. Draw it out — diagrams, data flow, failure modes (10 min)\n3. Connect to a real system you know (10 min)\n\n**Hands-on sessions** (~60 min):\n1. Set up or build something that demonstrates the concept\n2. Break it intentionally — observe failure behavior\n3. Document what you learned\n\n---"
      }
    ]
  },
  {
    "letter": "E",
    "slug": "behavioral",
    "title": "Track E — Behavioral & Communication (Googleyness + Leadership)",
    "intro": "**Target**: Pass Google's Googleyness & Leadership interview dimension\n**Weight**: ~25% of Google's hiring signal — don't skip this track\n**Method**: Story crafting → Practice articulation → Mock responses\n\n---",
    "modules": [
      {
        "title": "Module 1: Core Stories (Sessions 1-8)",
        "intro": "",
        "sessions": [
          {
            "n": 1,
            "title": "Identify Your Impact Stories",
            "body": "**Exercise**: List your top 10 professional accomplishments across your career.\nFor each, write one sentence: \"I did X which resulted in Y (measured by Z).\"\n\n**Filter to top 6** that demonstrate:\n- Technical leadership\n- Ambiguity navigation\n- Cross-team collaboration\n- Tough trade-off decisions\n- Failure + recovery\n- Mentoring/growth"
          },
          {
            "n": 2,
            "title": "STAR Format Deep Dive",
            "body": "**For your #1 story (biggest impact), write full STAR:**\n- **Situation**: 2-3 sentences. What was the context? What was at stake?\n- **Task**: What was YOUR specific responsibility? (Not the team's — yours)\n- **Action**: 3-5 bullet points of what YOU did. Be specific. Name technologies, approaches, decisions.\n- **Result**: Quantified outcome. Revenue? Users? Time saved? Reliability improved?\n\n**Practice**: Tell it aloud in under 3 minutes. Record if possible."
          },
          {
            "n": 3,
            "title": "Story #2: Navigating Ambiguity",
            "body": "**Write STAR for**: A time you had to make progress without clear direction.\n**Focus on**: How you broke down the ambiguity, who you consulted, how you made decisions\n**Google signal**: Can this person be productive without hand-holding? Do they seek information proactively?"
          },
          {
            "n": 4,
            "title": "Story #3: Technical Disagreement",
            "body": "**Write STAR for**: A time you disagreed with a technical approach and influenced the outcome.\n**Focus on**: How you presented data, how you listened to the other side, how you resolved it\n**Google signal**: Can this person disagree respectfully? Do they use data over ego?\n**Important**: Show you COULD be wrong. Show flexibility. Never sound like \"I was right and they were wrong.\""
          },
          {
            "n": 5,
            "title": "Story #4: Cross-Team Collaboration",
            "body": "**Write STAR for**: A time you drove a project that required coordination across multiple teams.\n**Focus on**: How you built alignment, how you handled different priorities, how you tracked progress\n**Google signal**: Can this person lead without authority? Can they get buy-in?"
          },
          {
            "n": 6,
            "title": "Story #5: Failure & Recovery",
            "body": "**Write STAR for**: Something that went wrong (production incident, missed deadline, wrong decision).\n**Focus on**: What you learned, how you recovered, what you changed afterward\n**Google signal**: Is this person self-aware? Do they learn from mistakes? Are they honest?\n**Important**: Own it. Don't blame others. Show growth."
          },
          {
            "n": 7,
            "title": "Story #6: Mentoring & Growing Others",
            "body": "**Write STAR for**: A time you helped someone else grow (junior engineer, peer, cross-functional partner).\n**Focus on**: What you taught, how you adapted to their level, what was the outcome for THEM\n**Google signal**: Does this person make the team better? Do they invest in others?"
          },
          {
            "n": 8,
            "title": "Story Review & Polish",
            "body": "**For all 6 stories**:\n1. Time each one aloud. All must be <3 min.\n2. Check: Does each have a quantified result?\n3. Check: Is YOUR role clear (not \"we did X\" but \"I did X\")?\n4. Prepare 1-sentence \"hook\" for each: a grabber that sets the scene quickly.\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Common Questions (Sessions 9-14)",
        "intro": "",
        "sessions": [
          {
            "n": 9,
            "title": "\"Tell me about yourself\"",
            "body": "**Craft your 2-min intro:**\n- Current role + what you do (30 sec)\n- Most impressive accomplishment (30 sec)\n- Why Google + what excites you about the role (30 sec)\n- What you bring that's unique (30 sec)\n\n**Practice**: Tell it aloud 3 times. Cut it to 90 seconds."
          },
          {
            "n": 10,
            "title": "Leadership Without Authority",
            "body": "**Common questions**: \"How did you influence a decision?\" \"How did you get buy-in?\"\n**Map to your stories**: Which story best answers this? Prepare a version.\n**Key framing**: I proposed X. I gathered data showing Y. I addressed concern Z. The team adopted it."
          },
          {
            "n": 11,
            "title": "Handling Conflict",
            "body": "**Common questions**: \"Tell me about a disagreement.\" \"How do you handle pushback?\"\n**Map to your stories**: Use your Technical Disagreement story. Prepare variants.\n**Key framing**: I listened, I understood their perspective, I proposed a compromise/experiment, we resolved it."
          },
          {
            "n": 12,
            "title": "Dealing with Ambiguity",
            "body": "**Common questions**: \"What do you do when requirements are unclear?\" \"How do you prioritize?\"\n**Map to your stories**: Use your Navigating Ambiguity story.\n**Key framing**: I identified the unknowns, I proposed lightweight experiments, I iterated based on feedback."
          },
          {
            "n": 13,
            "title": "Growth Mindset & Failure",
            "body": "**Common questions**: \"Tell me about a mistake.\" \"What would you do differently?\"\n**Map to your stories**: Use your Failure & Recovery story.\n**Key framing**: I made X mistake. It caused Y impact. I learned Z. Now I do W differently.\n**Important**: Never say \"I can't think of a failure.\" Always have one ready."
          },
          {
            "n": 14,
            "title": "Why Google? + Career Goals",
            "body": "**Prepare answers for**:\n- \"Why Google?\" (specific, authentic, not generic)\n- \"Why SSE?\" (why this level, what you bring)\n- \"Where do you see yourself in 5 years?\" (growth at Google, not leaving Google)\n- \"What's your ideal team?\" (describe collaborative, impactful environment)\n\n---"
          }
        ]
      },
      {
        "title": "Module 3: Interview Simulation (Sessions 15-20)",
        "intro": "",
        "sessions": [
          {
            "n": 15,
            "title": "Mock Behavioral #1",
            "body": "**Format**: Pick 4 questions randomly. Answer each in <3 min. Time yourself.\n**Questions bank**:\n- \"Tell me about a project you led.\"\n- \"How did you handle a production incident?\"\n- \"Describe a time you had to learn something quickly.\"\n- \"Tell me about a time you simplified something complex.\""
          },
          {
            "n": 16,
            "title": "Mock Behavioral #2",
            "body": "**Format**: Same as above, different questions:\n- \"How do you mentor junior engineers?\"\n- \"Tell me about a time you had to say no to a stakeholder.\"\n- \"Describe your biggest technical decision and its trade-offs.\"\n- \"How do you handle technical debt?\""
          },
          {
            "n": 17,
            "title": "Googleyness Deep Dive",
            "body": "**Study**: What Google means by Googleyness\n**Core traits**: Enjoys fun, comfortable with ambiguity, collaborative, pushes back on bureaucracy, questions assumptions, bias for action\n**Practice**: For each trait, map to a story from your experience.\n**Anti-patterns**: Arrogance, rigidity, \"my way or the highway\", blaming others"
          },
          {
            "n": 18,
            "title": "Mock with Follow-ups",
            "body": "**Format**: Tell one story. Then answer 3 follow-up probes:\n- \"What would you do differently?\"\n- \"How did the other person react?\"\n- \"What was the measurable outcome?\"\n- \"What did you learn from this?\"\n**Practice**: Follow-ups are where most people stumble. Prepare deep answers."
          },
          {
            "n": 19,
            "title": "Questions to Ask YOUR Interviewers",
            "body": "**Prepare 5-7 thoughtful questions for Google interviewers:**\n- About the team's biggest challenge\n- About how decisions are made\n- About the tech stack and trade-offs\n- About growth opportunities\n- About what \"great\" looks like in this role\n\n**Important**: These questions signal your thinking level. Make them specific."
          },
          {
            "n": 20,
            "title": "Final Behavioral Synthesis",
            "body": "**Complete checklist**:\n- [ ] 6 polished STAR stories (all under 3 min)\n- [ ] 2-min self-intro rehearsed\n- [ ] \"Why Google?\" answer authentic and specific\n- [ ] Can answer any common behavioral question by mapping to a story\n- [ ] 5 questions to ask interviewers prepared\n- [ ] Practiced follow-up answers for each story\n- [ ] Know what Googleyness means and can demonstrate it\n\n**Final exercise**: Record yourself answering 3 random behavioral questions. Watch the recording. Critique."
          }
        ]
      }
    ],
    "totalSessions": 20,
    "extras": [
      {
        "heading": "Why This Matters",
        "body": "Google evaluates:\n1. **Googleyness**: Collaboration, navigating ambiguity, handling disagreements, learning mindset\n2. **Leadership**: Influencing without authority, mentoring, driving outcomes, making tough calls\n3. **Communication**: Clear thinking, structured responses, appropriate detail level\n\nMany strong coders fail at Google because they neglect this dimension.\n\n---"
      },
      {
        "heading": "How Each Session Works",
        "body": "**Story sessions** (~30-45 min):\n1. Identify a story from your experience\n2. Write it in STAR format (Situation, Task, Action, Result)\n3. Time yourself telling it aloud (target: 2-3 min per story)\n4. Refine — cut fluff, sharpen the action/result\n\n**Practice sessions** (~30 min):\n1. Pick a common behavioral question\n2. Choose the right story from your bank\n3. Tell it aloud. Time it. <3 min.\n4. Add a \"what I learned\" or \"what I'd do differently\" ending\n\n---"
      }
    ]
  },
  {
    "letter": "F",
    "slug": "cloud-computing",
    "title": "Track F — Cloud Computing (Project-Based)",
    "intro": "**Target**: Fluency in GCP services for Google interview signal and modern cloud-native work\n**Language**: Java (Spring Boot) for GKE deployments; any small language for Cloud Run/Functions\n**Method**: Wide survey (concepts + AWS analogue) → 3 deep build projects → synthesis\n**Reference**:\n- [Cloud Architect Path 125 (Skills Boost)](https://www.skills.google/paths/125) — AWS pro → GCP\n- [GEAR Get Certified](https://developers.google.com/program/gear/getcertified)\n- Google SRE book (already used in Track D)\n\n---",
    "modules": [
      {
        "title": "Module 1: Service Survey (Sessions 1–8)",
        "intro": "Goal: Build the AWS→GCP map in your head. By the end you should be able to name the GCP equivalent of any AWS service in <5 seconds.",
        "sessions": [
          {
            "n": 1,
            "title": "Compute Landscape",
            "body": "**Study**: GKE Standard vs Autopilot, Cloud Run (services + jobs), Cloud Run Functions, Compute Engine\n**AWS analogue**: EKS, Fargate, Lambda, EC2\n**Hands-on**: Deploy \"hello world\" to Cloud Run from `gcloud run deploy`. Inspect the auto-generated URL and cold-start latency.\n**Key Question**: When does Autopilot's \"no node management\" outweigh losing DaemonSet/NodePort flexibility?"
          },
          {
            "n": 2,
            "title": "Networking & Ingress",
            "body": "**Study**: Cloud Load Balancing (Global L7, Regional L4), Cloud DNS, Cloud CDN, Cloud Armor, API Gateway vs Apigee, Certificate Manager\n**AWS analogue**: ALB/NLB, Route 53, CloudFront, WAF, API Gateway, ACM\n**Hands-on**: Put a Global HTTPS LB in front of your Cloud Run hello-world from S1. Add a managed cert.\n**Key Question**: Why does GCP have ONE global anycast LB while AWS gives you 5+ regional ones? What does that buy you?"
          },
          {
            "n": 3,
            "title": "Identity & Access",
            "body": "**Study**: Cloud IAM (workload + admin), service accounts, Workload Identity (GKE), Identity Platform (end-user auth)\n**AWS analogue**: IAM, IAM Roles for Service Accounts (IRSA), Cognito\n**Hands-on**: Create a service account, bind it to a Cloud Run service, grant minimal permissions to write to a GCS bucket. Verify least-privilege by trying to read another bucket.\n**Key Question**: Workload Identity vs static service account keys — why is GCP pushing hard against the latter?"
          },
          {
            "n": 4,
            "title": "Relational & Global Databases",
            "body": "**Study**: Cloud SQL (Postgres/MySQL), AlloyDB (Postgres-compatible, AI-tuned), Cloud Spanner (global, externally consistent)\n**AWS analogue**: RDS, Aurora, (no real equivalent for Spanner)\n**Hands-on**: Spin up a Cloud SQL Postgres instance, connect from Cloud Run via Cloud SQL Connector, run a query.\n**Key Question**: What does Spanner's TrueTime API give you that no other DB can match? (You'll deep-dive this in Module 4.)"
          },
          {
            "n": 5,
            "title": "NoSQL & Analytics",
            "body": "**Study**: Firestore (document), Bigtable (wide-column, HBase API), Memorystore (Redis/Valkey/Memcached), BigQuery (analytics)\n**AWS analogue**: DynamoDB, (Bigtable has no AWS equivalent), ElastiCache, Redshift\n**Hands-on**: Load a CSV into BigQuery (use a public sample dataset). Run an analytical query. Note the speed.\n**Key Question**: BigQuery is serverless and pay-per-query — when does that beat a provisioned Redshift cluster, and when doesn't it?"
          },
          {
            "n": 6,
            "title": "Storage",
            "body": "**Study**: Cloud Storage (GCS) classes (Standard/Nearline/Coldline/Archive), object lifecycle, BigLake, Filestore\n**AWS analogue**: S3 (storage classes map almost 1:1), EFS\n**Hands-on**: Create a GCS bucket. Upload artifacts. Set a lifecycle rule to move to Coldline after 30 days.\n**Key Question**: Where does Coldline win/lose compared to S3 Glacier?"
          },
          {
            "n": 7,
            "title": "Eventing & Async",
            "body": "**Study**: Pub/Sub, Eventarc, Cloud Tasks, Cloud Scheduler, Workflows\n**AWS analogue**: SNS+SQS, EventBridge, SQS (HTTP-targeted), EventBridge Scheduler, Step Functions\n**Hands-on**: Create a Pub/Sub topic. Publish a message from `gcloud`. Subscribe with a pull subscriber. Then create a push subscription to a Cloud Run service.\n**Key Question**: Pub/Sub guarantees at-least-once with no ordering by default. What does \"ordered delivery\" cost you?"
          },
          {
            "n": 8,
            "title": "Observability & CI/CD",
            "body": "**Study**: Cloud Logging, Cloud Monitoring (metrics/alerts), Cloud Trace, Cloud Profiler, Cloud Build, Artifact Registry, Secret Manager, Cloud KMS\n**AWS analogue**: CloudWatch (logs+metrics+alarms), X-Ray, CodeBuild/CodePipeline, ECR+CodeArtifact, Secrets Manager, KMS\n**Hands-on**: Push a structured log line from your Cloud Run hello-world. Find it in Logs Explorer. Create a log-based metric and an alert.\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Project A — \"Deploy a Production Service on GKE\" (Sessions 9–14)",
        "intro": "Build target: A Spring Boot service running on GKE Autopilot, reachable via Global HTTPS LB, backed by Cloud SQL, with Cloud Build CI/CD, secrets in Secret Manager, observability via Cloud Monitoring + Trace. End-state: you can demo this on a screen-share in an interview.\n\n**Repo to create**: `cloud/project-a-gke-service/`",
        "sessions": [
          {
            "n": 9,
            "title": "Project Bootstrap & Containerize",
            "body": "**Build**: Spring Boot 3 service (one REST endpoint: `GET /releases/{id}`). Containerize with Jib (no Dockerfile — Jib builds OCI images from Gradle/Maven directly).\n**Deploy**: Push to Artifact Registry. Verify with `gcloud artifacts docker images list`.\n**Why Jib**: Faster builds, no Docker daemon, reproducible images."
          },
          {
            "n": 10,
            "title": "GKE Autopilot Deployment",
            "body": "**Build**: GKE Autopilot cluster. Write `Deployment` + `Service` (ClusterIP) YAML. Apply with `kubectl`.\n**Verify**: `kubectl port-forward` and curl the endpoint.\n**Break it**: Delete a pod. Watch Autopilot reschedule. Note the recovery time."
          },
          {
            "n": 11,
            "title": "Ingress + Global Load Balancer + Managed Cert",
            "body": "**Build**: `Gateway` API resource (the new way, replacing Ingress). Attach a Google-managed SSL cert. Point a Cloud DNS record at it.\n**Verify**: `curl https://yourdomain` — should hit your service through the global LB.\n**Connect**: Compare the GKE Gateway API config to a typical AWS ALB Ingress config."
          },
          {
            "n": 12,
            "title": "Cloud SQL + Workload Identity",
            "body": "**Build**: Cloud SQL Postgres instance. Connect your Spring Boot service via Cloud SQL Auth Proxy (sidecar pattern). Use Workload Identity — NO static keys.\n**Verify**: Service reads a row from the DB. Pod has zero secrets mounted.\n**Key Insight**: This is the GCP-native zero-trust pattern. Internalize it."
          },
          {
            "n": 13,
            "title": "Cloud Build CI/CD Pipeline",
            "body": "**Build**: `cloudbuild.yaml` — on push to `main`: build image with Jib → push to Artifact Registry → `gcloud deploy` to GKE.\n**Verify**: Push a code change. Watch Cloud Build run. Confirm the new pod is rolled out."
          },
          {
            "n": 14,
            "title": "Observability & Alerts",
            "body": "**Build**: Add structured logging (JSON to stdout — Cloud Logging picks it up automatically). Add OpenTelemetry instrumentation → Cloud Trace. Create a Monitoring dashboard: request rate, p95 latency, error rate (RED method).\n**Build**: An alert: \"error rate > 1% for 5 min → page me.\"\n**Synthesis**: What does this stack give you that you don't get out-of-the-box on EKS? What's worse?\n\n---"
          }
        ]
      },
      {
        "title": "Module 3: Project B — \"Event-Driven Release System\" (Sessions 15–20)",
        "intro": "Build target: A miniature release-orchestration system using Pub/Sub + Cloud Tasks + Cloud Run + Spanner. Releases get created via an API, fan out to processors, retry on failure, and global state lives in Spanner. End-state: you can sketch this architecture on a whiteboard from memory.\n\n**Repo to create**: `cloud/project-b-release-events/`",
        "sessions": [
          {
            "n": 15,
            "title": "Spanner Schema & First Write",
            "body": "**Build**: Spanner instance (regional config for cost). Create a `releases` table with proper interleaving (`releases` → `release_steps`). Insert your first row with the Spanner client.\n**Connect**: Why does Spanner want you to think about parent-child interleaving? How does this differ from a Postgres foreign key?\n**Key Question**: What is a \"stale read\" in Spanner and when do you want one?"
          },
          {
            "n": 16,
            "title": "Pub/Sub Fan-Out",
            "body": "**Build**: Topic `release.created`. Two subscriptions:\n1. Push subscription → Cloud Run service \"validator\"\n2. Pull subscription → a worker that writes to Spanner\n**Verify**: Publish a release event. Both subscribers fire. Idempotent processing on retries."
          },
          {
            "n": 17,
            "title": "Cloud Tasks for Retries with Backoff",
            "body": "**Build**: When the validator finds a missing dependency, it enqueues a Cloud Task with a delay + exponential backoff. The task target is itself (recursion with retry semantics).\n**Verify**: Inject a failure. Watch retries. Cap with a dead-letter queue."
          },
          {
            "n": 18,
            "title": "Eventarc Glue",
            "body": "**Build**: Use Eventarc to trigger a Cloud Run service when an object is uploaded to a GCS \"artifacts\" bucket. This simulates \"artifact ready → kick off release.\"\n**Verify**: Upload an object. Cloud Run service fires.\n**Key Insight**: Eventarc is the universal event router — it normalizes events from 130+ sources into CloudEvents format."
          },
          {
            "n": 19,
            "title": "End-to-End Flow + Failure Injection",
            "body": "**Build**: Wire the full path: API → Spanner write → Pub/Sub event → validator → Cloud Tasks retry → Eventarc trigger on artifact upload → final state update in Spanner.\n**Break it**: Kill the validator mid-flight. Verify no duplicate writes (Spanner transaction guarantees). Drop network to Cloud Tasks. Observe backoff."
          },
          {
            "n": 20,
            "title": "Architecture Diagram + Trade-off Doc",
            "body": "**Write**: A 1-pager. Architecture diagram (use Mermaid or draw.io). Trade-off section: \"Why Pub/Sub here vs Cloud Tasks vs Workflows?\" Map every component to its AWS equivalent.\n**Compare**: How would you build the same thing on AWS? Where does GCP win? Where does AWS win?\n\n---"
          }
        ]
      },
      {
        "title": "Module 4: Project C — Analytics + Spanner Deep Dive (Sessions 21–22)",
        "intro": "",
        "sessions": [
          {
            "n": 21,
            "title": "BigQuery on Release Events",
            "body": "**Build**: Stream Pub/Sub events from Project B into a BigQuery table via a Dataflow template (or the new direct Pub/Sub→BigQuery subscription).\n**Query**: Write 3 analytical queries — \"release success rate per service per day,\" \"p95 release duration,\" \"top 10 failing services.\"\n**Build**: Pin one query to a Looker Studio dashboard."
          },
          {
            "n": 22,
            "title": "Spanner Deep Dive (Interview Material)",
            "body": "**Read**: Spanner paper key sections — TrueTime, transactions, split/merge.\n**Practice**: Explain TrueTime to a rubber duck in 3 minutes. Then explain why no other database has it.\n**Key Questions**:\n- What is the `commit timestamp` and why does it require atomic clocks + GPS?\n- Why can't you just use NTP?\n- What's the relationship between Spanner and Google's internal systems (Chubby, Colossus)?\n**Output**: 1-page Spanner cheat sheet for system design interviews.\n\n---"
          }
        ]
      },
      {
        "title": "Module 5: Synthesis (Sessions 23–24)",
        "intro": "",
        "sessions": [
          {
            "n": 23,
            "title": "The AWS→GCP Map (from memory)",
            "body": "**Write from memory** (no looking):\n- Every AWS service you can think of → its GCP equivalent\n- Where there's no 1:1 (Spanner, Bigtable, BigQuery, Cloud Tasks)\n- The \"GCP-isms\" — patterns that have no AWS analogue (Global LB, Workload Identity, TrueTime, project hierarchy with folders/orgs)\n**Compare**: Open the original doc and your notes. Score yourself. Drill the gaps."
          },
          {
            "n": 24,
            "title": "GEAR Cert Readiness Check + GCP Story",
            "body": "**Build**: A 5-minute \"my GCP story\" — for behavioral interviews. \"Tell me about your GCP experience\" → you can demo Projects A and B end-to-end.\n**Decide**: Worth pursuing GEAR Get Certified? Time investment ~30 hours.\n**Final**: Update your resume with the GCP stack you've actually shipped.\n\n---"
          }
        ]
      }
    ],
    "totalSessions": 24,
    "extras": [
      {
        "heading": "How Each Session Works",
        "body": "**Survey sessions** (~45 min):\n1. Read GCP docs + AWS analogue comparison (15 min)\n2. Spin up the service in a sandbox project (15 min)\n3. Sketch where you'd use it: \"what problem does this solve better than the alternatives?\" (15 min)\n\n**Build sessions** (~60–75 min):\n1. Implement one slice of the project from the session\n2. `gcloud` or Terraform — actually deploy it, don't just read about it\n3. Break it intentionally (kill a pod, exhaust a quota, drop a permission) — observe the failure\n\n**Synthesis sessions** (~45 min):\n1. Write from memory: the service map, the trade-offs, the architecture\n2. Compare against the doc — what did you miss?\n\n---"
      },
      {
        "heading": "Prerequisites (One-time, before Session 1)",
        "body": "- [ ] GCP sandbox project created\n- [ ] `gcloud` CLI installed and authenticated\n- [ ] Billing alerts set (these projects cost real money — set a $20 cap)\n- [ ] Terraform installed (you'll use it from Session 11 onward)\n\n---"
      },
      {
        "heading": "End-State Deliverables",
        "body": "Pinned in `cloud/`:\n- [ ] `project-a-gke-service/` — runnable Spring Boot + GKE Autopilot + Cloud SQL service\n- [ ] `project-b-release-events/` — Pub/Sub + Cloud Tasks + Spanner event system\n- [ ] `aws-gcp-map.md` — your written-from-memory service map\n- [ ] `spanner-cheatsheet.md` — for system design interviews\n- [ ] `architecture-diagrams/` — Mermaid + draw.io diagrams of both projects\n\n---"
      },
      {
        "heading": "Connect to Other Tracks",
        "body": "- **Track B (System Design)**: Use Project B as your worked example for event-driven system design questions\n- **Track D (Infrastructure)**: GKE/Autopilot deep dive replaces the K8s sessions in D when you already know them\n- **Track G (AI/MCP)**: Vertex AI is GCP-native; the MCP track will use Cloud Run for hosting MCP servers"
      }
    ]
  },
  {
    "letter": "G",
    "slug": "ai-mcp",
    "title": "Track G — AI / MCP / Agents (Build-First)",
    "intro": "**Target**: Ship a working MCP server + a Spring AI app with RAG and tool calling. Be able to discuss agent architectures with conviction.\n**Language**: Java (Spring AI app + MCP server via the official Java SDK)\n**Method**: Build the protocol first, then layer in app frameworks, then agents. Theory only when you hit something you can't ship without.\n**Reference**:\n- [MCP Complete Guide (O'Reilly)](https://learning.oreilly.com/course/mcp-complete-guide/9781806384136/)\n- [Spring AI in Action (Manning)](https://learning.oreilly.com/videos/spring-ai-in/9781633436114VE/)\n- [Build AI Apps with Spring AI (O'Reilly)](https://learning.oreilly.com/videos/build-ai-apps/9781806704132/)\n- [AI Engineer (O'Reilly video)](https://learning.oreilly.com/videos/ai-engineer/9780135586570/)\n- [MCP spec](https://modelcontextprotocol.io/)\n\n---",
    "modules": [
      {
        "title": "Module 1: MCP Protocol & Your First Server (Sessions 1–6)",
        "intro": "Goal: Understand the MCP wire protocol, then ship a real MCP server. By the end you should be able to add tools/resources/prompts without checking the spec.",
        "sessions": [
          {
            "n": 1,
            "title": "MCP: What & Why",
            "body": "**Study**: Read MCP spec overview (transport, lifecycle, capabilities). Watch the first chapter of the O'Reilly MCP course.\n**Core ideas**: Client ↔ Server protocol, JSON-RPC over stdio/SSE/HTTP, capability negotiation, three primitives (tools, resources, prompts)\n**Connect**: Why is MCP different from \"just calling a REST API\"? Think about Claude Code's plugin model.\n**Output**: 1-page \"MCP in your own words\" doc."
          },
          {
            "n": 2,
            "title": "Hello MCP Server (stdio transport)",
            "body": "**Build**: A Java MCP server with ONE tool: `echo(text: string) → string`. Stdio transport. Use the official Java SDK.\n**Verify**: Wire it into Claude Code via `~/.claude.json` or via Claude Desktop. Call the tool from a chat. Watch it work.\n**Reflect**: Where does the stdio handshake happen? Trace one round-trip in the logs."
          },
          {
            "n": 3,
            "title": "Tools, Resources, Prompts",
            "body": "**Build**: Extend your server with:\n- One resource: `release://{id}` returning a sample release JSON\n- One prompt: `summarize-release` with a templated argument\n**Verify**: Claude can list, read, and invoke all three primitives.\n**Key Insight**: Tools are imperative (model calls them). Resources are declarative (model reads them as context). Prompts are user-facing templates. Don't confuse them."
          },
          {
            "n": 4,
            "title": "Real Tool: Release Lookup",
            "body": "**Build**: Mock a release service in Java with realistic shapes (release id, status, services, timestamps). Wire your MCP tool to it.\n**Add**: A second tool `find-failed-releases(time_window: string)`.\n**Verify**: Ask Claude \"what releases failed in the last hour?\" — it should call your tool and answer.\n**Reflect**: What other tools would you add for a release engineer?"
          },
          {
            "n": 5,
            "title": "Transport: HTTP + SSE",
            "body": "**Build**: Re-run the same server over HTTP+SSE instead of stdio. Host it on Cloud Run (cross-track with F — Session 1 set this up).\n**Verify**: Connect from Claude Desktop using the HTTP transport. Same tools work.\n**Reflect**: When would you choose stdio over HTTP? (Hint: local CLI tools vs. shared org-wide services.)"
          },
          {
            "n": 6,
            "title": "Auth & Error Handling for MCP",
            "body": "**Build**: Add token auth to the HTTP transport. Return structured errors (per MCP spec — `isError: true` with a content payload).\n**Break it**: Pass a bad token. Verify the server rejects cleanly. Pass a malformed request. Verify the JSON-RPC error code is correct.\n**Output**: Server is ready for a teammate to use. Push to a real repo.\n\n---"
          }
        ]
      },
      {
        "title": "Module 2: Spring AI Foundations (Sessions 7–13)",
        "intro": "Goal: Be able to build a production-shaped Spring AI app — chat, embeddings, RAG, tool calling, evals, observability. Spring AI is the most polished JVM AI framework.",
        "sessions": [
          {
            "n": 7,
            "title": "Spring AI: ChatClient",
            "body": "**Study**: ChatClient abstraction, model abstraction layer (Anthropic, OpenAI, Vertex, etc.), prompt templates\n**Build**: Spring Boot app. One endpoint `POST /chat` that proxies to Claude via ChatClient.\n**Verify**: curl works. Streaming response works."
          },
          {
            "n": 8,
            "title": "Prompts & Structured Output",
            "body": "**Study**: PromptTemplate, output converters (BeanOutputConverter for typed responses)\n**Build**: Endpoint that classifies a free-text \"what kind of incident is this?\" → returns a typed `Incident` Java object.\n**Reflect**: Where does structured output beat free-text? Where does it lose flexibility?"
          },
          {
            "n": 9,
            "title": "Embeddings & Vector Store",
            "body": "**Study**: EmbeddingClient, vector stores (in-memory for now, pgvector later), similarity search\n**Build**: Index a handful of mock runbook markdown files into an in-memory vector store. Build a search endpoint.\n**Verify**: Search \"what to do when validator times out\" returns the right runbook."
          },
          {
            "n": 10,
            "title": "RAG (Retrieval Augmented Generation)",
            "body": "**Build**: `POST /ask` — given a question, retrieve top-k runbooks, stuff them into a prompt, return Claude's answer with citations.\n**Iterate**: Try chunking strategies (paragraph, fixed-size, semantic). Compare answer quality.\n**Connect**: This is the architecture pattern you'd use for a \"Release Assistant.\""
          },
          {
            "n": 11,
            "title": "Tool Calling (Function Calling) in Spring AI",
            "body": "**Build**: Register Java methods as tools (e.g., `getReleaseStatus(String id)`). Let Claude call them mid-conversation.\n**Critical comparison**: When do you reach for Spring AI tool calling vs. building an MCP server? (Hint: in-process for app-specific tools, MCP server for cross-app shareable tools.)"
          },
          {
            "n": 12,
            "title": "Evals & Quality Loops",
            "body": "**Study**: AI evaluators — relevance, factuality, hallucination detection. Eval datasets.\n**Build**: An eval suite for your `/ask` RAG endpoint. 20 question/expected-answer pairs. Run on every change.\n**Insight**: Without evals, you're flying blind. This is where most AI apps fail in production."
          },
          {
            "n": 13,
            "title": "Observability for AI Apps",
            "body": "**Study**: Token usage tracking, prompt/response logging (privacy-aware), latency percentiles, model cost attribution\n**Build**: Micrometer metrics for token usage, latency, error rate. Pipe to Prometheus (or Cloud Monitoring from Track F).\n**Reflect**: What's the right blast-radius scope for a hallucination metric — per endpoint, per prompt template, per user?\n\n---"
          }
        ]
      },
      {
        "title": "Module 3: Project — \"Release Copilot\" (Sessions 14–18)",
        "intro": "Build target: A Spring AI chat app that consumes your MCP server from Module 1 as a tool, retrieves over release runbooks via RAG, and answers release engineer questions. Evaluated. Observable. Demo-ready.\n\n**Repo to create**: `ai-mcp/release-copilot/`",
        "sessions": [
          {
            "n": 14,
            "title": "Wire Spring AI to your MCP Server",
            "body": "**Build**: Connect the Spring AI app (Module 2) to your Cloud Run-hosted MCP server (Module 1) using Spring AI's MCP client integration.\n**Verify**: Spring AI app discovers your MCP tools dynamically. A chat that needs release data triggers the MCP server."
          },
          {
            "n": 15,
            "title": "RAG over Release Docs",
            "body": "**Build**: Index sample release runbooks (use public-shaped equivalents). Use pgvector on Cloud SQL (cross-track with F).\n**Iterate**: Add re-ranking. Add hybrid search (BM25 + vector)."
          },
          {
            "n": 16,
            "title": "Multi-Step Reasoning",
            "body": "**Build**: A workflow where Claude must (1) look up a release via MCP, (2) check runbooks via RAG, (3) propose an action. All in one chat.\n**Reflect**: When do you let the LLM orchestrate vs. control the flow in code?"
          },
          {
            "n": 17,
            "title": "Evals + Hardening",
            "body": "**Build**: Extend your eval suite to cover the full Copilot flow. Add adversarial prompts (\"ignore your instructions\"). Verify the app behaves.\n**Add**: Rate limiting, prompt injection guardrails, PII scrubbing on inputs."
          },
          {
            "n": 18,
            "title": "Architecture Diagram + Demo Script",
            "body": "**Write**: 1-pager architecture diagram. Component responsibilities. Failure modes.\n**Build**: 3-minute demo script — open with the problem, show three scenarios, close with what's next.\n\n---"
          }
        ]
      },
      {
        "title": "Module 4: Agents + Synthesis (Sessions 19–20)",
        "intro": "",
        "sessions": [
          {
            "n": 19,
            "title": "Agent Patterns",
            "body": "**Study**: Planner / executor / critic, ReAct loop, multi-agent systems, when to use orchestration vs. when to let the model decide. Read the Claude Code \"skills\" model — that's an opinionated agent architecture.\n**Connect**: The doc theme — \"skills/plugins = architecture/testing/design.\" Articulate that POV in your own words. When does a skill belong as a skill vs. as a prompt instruction vs. as code?\n**Output**: 1-page \"agent architecture POV\" doc."
          },
          {
            "n": 20,
            "title": "Synthesis: AI/MCP Story",
            "body": "**Write from memory**:\n- The MCP protocol model (transports, primitives, lifecycle)\n- Spring AI's building blocks (ChatClient, embeddings, RAG, tool calling, evals)\n- Your Copilot architecture\n- The agent-pattern decision tree (when planner/executor/critic, when straight chat, when MCP)\n**Prepare**: Your \"AI/MCP story\" for behavioral and architecture interviews.\n\n---"
          }
        ]
      }
    ],
    "totalSessions": 20,
    "extras": [
      {
        "heading": "How Each Session Works",
        "body": "**Build sessions** (~60 min): Code something that runs by end-of-session. Demo it to yourself.\n**Concept sessions** (~45 min): Read + summarize + map to what you'll build next.\n**Iterate sessions** (~60 min): Take the previous build and add one capability (auth, eval, tool, observability).\n\n**Theme**: Skills / plugins = architecture / testing / design. Every session, ask: \"If this were a skill or a plugin, what would its boundary be?\"\n\n---"
      },
      {
        "heading": "Prerequisites (One-time)",
        "body": "- [ ] Anthropic API key (for testing MCP server with Claude Code/Desktop)\n- [ ] Java 21+ installed\n- [ ] Spring Boot 3.3+ project set up locally\n- [ ] Familiarity with JSON-RPC 2.0 (read the spec once, ~20 min)\n\n---"
      },
      {
        "heading": "End-State Deliverables",
        "body": "Pinned in `ai-mcp/`:\n- [ ] `mcp-server/` — Java MCP server with real tools, hosted on Cloud Run, token-auth'd\n- [ ] `release-copilot/` — Spring AI app with RAG + MCP tool calling + evals + observability\n- [ ] `mcp-cheatsheet.md` — protocol + primitives + transport decisions\n- [ ] `agent-patterns-pov.md` — your architectural POV on agents/skills/plugins\n- [ ] `evals/` — eval datasets and runner\n\n---"
      },
      {
        "heading": "Connect to Other Tracks",
        "body": "- **Track B (System Design)**: Release Copilot is your worked example for \"design an AI assistant for X\" questions\n- **Track C (Concurrency)**: MCP server concurrency model (handling many simultaneous tool calls) is a real concurrency exercise\n- **Track F (Cloud Computing)**: Cloud Run hosts your MCP server; Cloud SQL pgvector backs RAG; Vertex AI is an alternative model provider"
      }
    ]
  }
];
