/* You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, 
which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, 
and so on, to produce a multilevel data structure, as shown in the example below.
Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
*/

const flatten = (linkedlist) => {
  let currentNode = linkedlist;
  if (!linkedlist) {
    return null;
  }
  while (currentNode) {
    let next = null,
    if (currentNode.next) {
      next = currentNode.next;
    }
    if (currentNode.child) {
      child = currentNode.child;
      let childCurrentNode = child;
      while (childCurrentNode.next) {
        childCurrentNode = childCurrentNode.next;
      }
      childCurrentNode.next = next;
      if (next) {
        next.prev = childCurrentNode;
      }
      currentNode.next = child;
      currentNode.child = null;
      child.prev = currentNode;
    }
    currentNode = currentNode.next;
  }
  return linkedlist;
};
