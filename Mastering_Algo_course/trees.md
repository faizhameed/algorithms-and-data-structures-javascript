# **Trees**

HTML dom is an example of tree data structure

Abstract Syntax Tree

Lookup O(logN)
Insert O(logN)
Delete O(logN)

A **Perfect Binary Tree** have everything filled
Bottom layer of the tree is completely filled .

- Number of nodes in the last level = sum of nodes in all the levels +1
- Nodes double with each level
  - level1 : 2^1
  - level2 : 2^2
  - level3 : 2^8
- BigO notation with binary tree connect to O(log(n))

### Rules of Binary search Tree

- to the right values increases
- to the left values decreases
- example :
  101
  / \
   33 105
  / \ / \
   9 37 104 144
  Search and lookup becomes very easy
  Google implements this way of searching algorithm

Insert and delete takes O(logN)

**Full Binary Tree**
Node has either 0 or 2 children , not one children

**Balanced and Unbalanced tree**
if we keep on adding items to binary search tree that is higher than one another. Time complexity can get to O(n) which is not so good for performance reason

Therefore there are methods to balance binary trees like AVL trees and Red Black tree

The disadvantage of Binary search Tree is it doesnt Have O(1)

While the advantages are better than O(n)
Ordered
Flexible Size

**Redblack and AVL trees**

## BINARY Heap

Heap is a tree in which its children is less than the root

or it can be children greater than the root

Its is useful for things like priority queues.

## **Priority Queues**

Its a type of Data where each element have priority
looKup is slow O(1)

### Advantages

- fast Insertion (occasional bubble up depending on the priority)
- findMax O(1)
- findMin O(1)

## Trie

A specialized tree used in searching. Most cases can outperform other DS like binary search. Usually has empty root node value
This is what is used in to provide auto suggestions in google search, Ip routing, auto completion

Space complexity - because it uses prefixes to fit the word. each work starting with N is in another node.
