var getIntersectionNode = function (headA, headB) {
  let curr = headA;
  const nodeSet = new Set();

  while (curr) {
    nodeSet.add(curr);
    curr = curr.next;
  }

  curr = headB;
  while (curr) {
    if (nodeSet.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
};
