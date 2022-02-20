var mergeNodes = function (head) {
  let curr = head;
  let tempSum = 0,
    flag = false;
  const newHead = new ListNode(0);
  let newCurr = newHead;
  while (curr) {
    if (curr.val === 0 && tempSum !== 0) {
      // end of the linked list
      // console.log(tempSum)
      newCurr.next = new ListNode(tempSum);
      newCurr = newCurr.next;
      tempSum = 0;
    } else {
      // console.log(curr.val)
      tempSum += curr.val;
    }
    curr = curr.next;
  }
  return newHead.next;
};
