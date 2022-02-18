var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let current = head;
  let next = head.next;
  while (current && next) {
    [current.val, next.val] = [next.val, current.val];
    if (current.next && current.next.next && next.next && next.next.next) {
      current = current.next.next;
      next = next.next.next;
    } else {
      break;
    }
  }
  return head;
};
