var deleteDuplicates = function (head) {
  let p1 = head,
    prev = new ListNode(0, head);
  const root = prev;
  while (p1 !== null) {
    if (p1.next !== null && p1.val === p1.next.val) {
      while (p1.next !== null && p1.val === p1.next.val) {
        p1 = p1.next;
      }
      prev.next = p1.next;
    } else {
      prev = prev.next;
    }
    p1 = p1.next;
  }
  return root.next;
};
