# Searching
- Linear Searching
- Binary Searching
- Depth First Search
- Breadth First Search



## Breadth First Search

- Search in Each level from left to right
- Uses more memory
- Time complexity O(n)

## Depth First Search
- Search deep as possible, then return and going deep to every Branch
- Uses less memory
- Time complexity O(n)
- Can get slower
- DFS methods
  - inorder
  - preorder
  - postorder

**Q)** If you know a solution is not far from the root of the tree:
Ans: BFS

**Q)** If the tree is very deep and solutions are rare, 
BAns: FS (DFS will take long time. )

**Q)** If the tree is very wide:
DAns: FS (BFS will need too much memory)

**Q)** If solutions are frequent but located deep in the tree
Ans: DFS

**Q)** determining whether a path exists between two nodes
Ans: DFS

**Q)** Finding the shortest path
Ans: BFS