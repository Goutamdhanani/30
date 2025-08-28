import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Master the two-pointer technique for array problems',
    color: 'bg-blue-500',
    icon: 'ArrowLeftRight',
    completed: false,
    problems: [
      { id: 'lc167', name: 'Two Sum II — Input array is sorted', leetcodeNumber: 167, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc11', name: 'Container With Most Water', leetcodeNumber: 11, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc125', name: 'Valid Palindrome', leetcodeNumber: 125, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc283', name: 'Move Zeroes', leetcodeNumber: 283, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc15', name: '3Sum', leetcodeNumber: 15, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc16', name: '3Sum Closest', leetcodeNumber: 16, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc75', name: 'Sort Colors (Dutch National Flag)', leetcodeNumber: 75, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc42', name: 'Trapping Rain Water (FINAL)', leetcodeNumber: 42, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Learn sliding window patterns for substring/subarray problems',
    color: 'bg-green-500',
    icon: 'RotateCcw',
    completed: false,
    problems: [
      { id: 'lc3', name: 'Longest Substring Without Repeating Characters', leetcodeNumber: 3, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc567', name: 'Permutation in String', leetcodeNumber: 567, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc438', name: 'Find All Anagrams in a String', leetcodeNumber: 438, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc560', name: 'Subarray Sum Equals K', leetcodeNumber: 560, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc424', name: 'Longest Repeating Character Replacement', leetcodeNumber: 424, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc239', name: 'Sliding Window Maximum', leetcodeNumber: 239, difficulty: 'Hard', completed: false, attempts: 0 },
      { id: 'lc76', name: 'Minimum Window Substring (FINAL)', leetcodeNumber: 76, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'arrays-hashing',
    name: 'Arrays & Hashing',
    description: 'Fundamental array operations and hash table techniques',
    color: 'bg-purple-500',
    icon: 'Hash',
    completed: false,
    problems: [
      { id: 'lc217', name: 'Contains Duplicate', leetcodeNumber: 217, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc242', name: 'Valid Anagram', leetcodeNumber: 242, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc1', name: 'Two Sum', leetcodeNumber: 1, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc238', name: 'Product of Array Except Self', leetcodeNumber: 238, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc347', name: 'Top K Frequent Elements', leetcodeNumber: 347, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc350', name: 'Intersection of Two Arrays II', leetcodeNumber: 350, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc128', name: 'Longest Consecutive Sequence (FINAL)', leetcodeNumber: 128, difficulty: 'Medium', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'prefix-sum',
    name: 'Prefix Sum',
    description: 'Cumulative sum techniques for range queries',
    color: 'bg-orange-500',
    icon: 'Plus',
    completed: false,
    problems: [
      { id: 'lc1480', name: 'Running Sum of 1d Array', leetcodeNumber: 1480, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc560b', name: 'Subarray Sum Equals K', leetcodeNumber: 560, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc53', name: 'Maximum Subarray (Kadane)', leetcodeNumber: 53, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc303', name: 'Range Sum Query - Immutable', leetcodeNumber: 303, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc1074', name: 'Submatrix Sum Target (FINAL)', leetcodeNumber: 1074, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'stack',
    name: 'Stack',
    description: 'Stack patterns including monotonic stack',
    color: 'bg-red-500',
    icon: 'Layers3',
    completed: false,
    problems: [
      { id: 'lc20', name: 'Valid Parentheses', leetcodeNumber: 20, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc155', name: 'Min Stack', leetcodeNumber: 155, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc150', name: 'Evaluate Reverse Polish Notation', leetcodeNumber: 150, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc739', name: 'Daily Temperatures', leetcodeNumber: 739, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc224', name: 'Basic Calculator I/II', leetcodeNumber: 224, difficulty: 'Hard', completed: false, attempts: 0 },
      { id: 'lc84', name: 'Largest Rectangle in Histogram (FINAL)', leetcodeNumber: 84, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'queue-deque',
    name: 'Queue / Deque',
    description: 'Queue and deque data structures',
    color: 'bg-teal-500',
    icon: 'ArrowRightLeft',
    completed: false,
    problems: [
      { id: 'queue-basics', name: 'Implement Queue basics', leetcodeNumber: 0, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc346', name: 'Moving Average from Data Stream', leetcodeNumber: 346, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc933', name: 'Recent Calls', leetcodeNumber: 933, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc239b', name: 'Sliding Window Maximum (FINAL)', leetcodeNumber: 239, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    description: 'Linked list manipulation and algorithms',
    color: 'bg-indigo-500',
    icon: 'Link',
    completed: false,
    problems: [
      { id: 'lc206', name: 'Reverse Linked List', leetcodeNumber: 206, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc21', name: 'Merge Two Sorted Lists', leetcodeNumber: 21, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc19', name: 'Remove Nth Node From End', leetcodeNumber: 19, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc141', name: 'Linked List Cycle', leetcodeNumber: 141, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc2', name: 'Add Two Numbers', leetcodeNumber: 2, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc138', name: 'Copy List with Random Pointer', leetcodeNumber: 138, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc23', name: 'Merge k Sorted Lists (FINAL)', leetcodeNumber: 23, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'trees',
    name: 'Trees',
    description: 'Binary tree traversal and manipulation',
    color: 'bg-emerald-500',
    icon: 'TreePine',
    completed: false,
    problems: [
      { id: 'lc104', name: 'Maximum Depth of Binary Tree', leetcodeNumber: 104, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc94', name: 'Binary Tree Traversal (In/Pre/Post)', leetcodeNumber: 94, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc102', name: 'Level Order Traversal', leetcodeNumber: 102, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc98', name: 'Validate Binary Search Tree', leetcodeNumber: 98, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc236', name: 'Lowest Common Ancestor of BT', leetcodeNumber: 236, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc297', name: 'Serialize/Deserialize Binary Tree', leetcodeNumber: 297, difficulty: 'Hard', completed: false, attempts: 0 },
      { id: 'lc124', name: 'Binary Tree Maximum Path Sum (FINAL)', leetcodeNumber: 124, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Binary search patterns and variations',
    color: 'bg-cyan-500',
    icon: 'Search',
    completed: false,
    problems: [
      { id: 'lc704', name: 'Binary Search', leetcodeNumber: 704, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc35', name: 'Search Insert Position', leetcodeNumber: 35, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc34', name: 'Find First and Last Position', leetcodeNumber: 34, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc33', name: 'Search in Rotated Sorted Array', leetcodeNumber: 33, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc215', name: 'Kth Largest Element', leetcodeNumber: 215, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc33b', name: 'Search in Rotated Sorted Array (FINAL)', leetcodeNumber: 33, difficulty: 'Medium', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'graphs',
    name: 'Graphs',
    description: 'Graph traversal and algorithms',
    color: 'bg-rose-500',
    icon: 'Network',
    completed: false,
    problems: [
      { id: 'lc200', name: 'Number of Islands', leetcodeNumber: 200, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc133', name: 'Clone Graph', leetcodeNumber: 133, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc207', name: 'Course Schedule', leetcodeNumber: 207, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc261', name: 'Graph Valid Tree', leetcodeNumber: 261, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc127', name: 'Word Ladder', leetcodeNumber: 127, difficulty: 'Hard', completed: false, attempts: 0 },
      { id: 'lc127b', name: 'Word Ladder (FINAL)', leetcodeNumber: 127, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'DP patterns and state transitions',
    color: 'bg-amber-500',
    icon: 'Zap',
    completed: false,
    problems: [
      { id: 'lc70', name: 'Climbing Stairs', leetcodeNumber: 70, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc198', name: 'House Robber', leetcodeNumber: 198, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc62', name: 'Unique Paths', leetcodeNumber: 62, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc91', name: 'Decode Ways', leetcodeNumber: 91, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc300', name: 'Longest Increasing Subsequence', leetcodeNumber: 300, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc322', name: 'Coin Change', leetcodeNumber: 322, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc139', name: 'Word Break', leetcodeNumber: 139, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc300b', name: 'Longest Increasing Subsequence (FINAL)', leetcodeNumber: 300, difficulty: 'Medium', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    description: 'Combinatorial problems and path finding',
    color: 'bg-lime-500',
    icon: 'Repeat',
    completed: false,
    problems: [
      { id: 'lc78', name: 'Subsets', leetcodeNumber: 78, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc46', name: 'Permutations', leetcodeNumber: 46, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc39', name: 'Combination Sum', leetcodeNumber: 39, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc79', name: 'Word Search', leetcodeNumber: 79, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc131', name: 'Palindrome Partitioning', leetcodeNumber: 131, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc51', name: 'N-Queens (FINAL)', leetcodeNumber: 51, difficulty: 'Hard', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'heaps',
    name: 'Heaps / Priority Queue',
    description: 'Heap data structure and priority queues',
    color: 'bg-violet-500',
    icon: 'Mountain',
    completed: false,
    problems: [
      { id: 'lc215b', name: 'Kth Largest Element', leetcodeNumber: 215, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc347b', name: 'Top K Frequent Elements', leetcodeNumber: 347, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc23b', name: 'Merge k Sorted Lists', leetcodeNumber: 23, difficulty: 'Hard', completed: false, attempts: 0 },
      { id: 'lc973', name: 'K Closest Points to Origin', leetcodeNumber: 973, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc347c', name: 'Top K Frequent Elements (FINAL)', leetcodeNumber: 347, difficulty: 'Medium', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'greedy',
    name: 'Greedy / Intervals',
    description: 'Greedy algorithms and interval problems',
    color: 'bg-pink-500',
    icon: 'Target',
    completed: false,
    problems: [
      { id: 'lc55', name: 'Jump Game', leetcodeNumber: 55, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc134', name: 'Gas Station', leetcodeNumber: 134, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc455', name: 'Assign Cookies', leetcodeNumber: 455, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc56', name: 'Merge Intervals', leetcodeNumber: 56, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc253', name: 'Meeting Rooms II', leetcodeNumber: 253, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc55b', name: 'Jump Game / Meeting Rooms II (FINAL)', leetcodeNumber: 55, difficulty: 'Medium', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'bit-manipulation',
    name: 'Bit Manipulation',
    description: 'Bitwise operations and tricks',
    color: 'bg-slate-500',
    icon: 'Binary',
    completed: false,
    problems: [
      { id: 'lc136', name: 'Single Number', leetcodeNumber: 136, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc191', name: 'Number of 1 Bits', leetcodeNumber: 191, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc190', name: 'Reverse Bits', leetcodeNumber: 190, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc268', name: 'Missing Number', leetcodeNumber: 268, difficulty: 'Easy', completed: false, attempts: 0 },
    ]
  },
  {
    id: 'math',
    name: 'Math / Number Theory',
    description: 'Mathematical algorithms and number theory',
    color: 'bg-stone-500',
    icon: 'Calculator',
    completed: false,
    problems: [
      { id: 'lc7', name: 'Reverse Integer', leetcodeNumber: 7, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc9', name: 'Palindrome Number', leetcodeNumber: 9, difficulty: 'Easy', completed: false, attempts: 0 },
      { id: 'lc204', name: 'Count Primes', leetcodeNumber: 204, difficulty: 'Medium', completed: false, attempts: 0 },
      { id: 'lc50', name: 'Pow(x, n) (FINAL)', leetcodeNumber: 50, difficulty: 'Medium', completed: false, attempts: 0 },
    ]
  },
];