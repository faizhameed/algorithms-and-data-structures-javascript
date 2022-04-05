var swapNodes = function (head, k) {
  let listLength = 0;
  let curr = head;
  while (curr !== null) {
    listLength++;
    curr = curr.next;
  }

  let frontNode = head;
  for (let i = 1; i < k; i++) {
    frontNode = frontNode.next;
  }
  let endNode = head;
  for (let j = 1; j <= listLength - k; j++) {
    endNode = endNode.next;
  }

  const temp = frontNode.val;
  frontNode.val = endNode.val;
  endNode.val = temp;
  return head;
};
