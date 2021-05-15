function reverseAtMandN(linkedList, m, n) {
  // 1->2->3->4->5->6->7 , 2,5
  let startPoint = linkedList,
    currentNode = linkedList,
    currentPosition = 1;

  while (currentPosition < m) {
    startPoint = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }
  let tail = currentNode,
    newList = null;

  while (n >= currentPosition && m <= currentPosition) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPosition++;
  }
  startPoint.next = newList;
  tail.next = currentNode;
  if (m === 1) {
    return newList;
  }
  return linkedList;
}

const testNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: null,
            },
          },
        },
      },
    },
  },
};
