var middleNode = function (head) {
  if (head.next === null) {
    return head;
  }
  let currentNode = head,
    count = 0;
  while (currentNode) {
    currentNode = currentNode.next;
    count++;
  }
  let mid = 0;
  if (count % 2 !== 0) {
    mid = Math.floor(count / 2);
  } else {
    mid = count / 2;
  }

  console.log("mid", mid, "count%2", count % 2);
  let counter = 0;
  currentNode = head;
  while (currentNode) {
    currentNode = currentNode.next;
    counter++;

    if (counter === mid) {
      return currentNode;
    }
  }
};
