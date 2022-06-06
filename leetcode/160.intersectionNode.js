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

//o(m+n) solution with o(1) space

var getIntersectionNode = function (headA, headB) {
  let currA = headA,
    currB = headB;

  while (currA !== currB) {
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }
  return currA;
};
