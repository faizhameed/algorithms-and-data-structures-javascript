var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let n = 0,
    curr = head;
  while (curr) {
    n++;
    curr = curr.next;
  }

  curr = head;
  let position = 0;
  k = k % n; // to handle cases where rotation is higher that the linkedlist
  if (k === 0) return head;
  while (position < n - k - 1) {
    curr = curr.next;
    position++;
  }
  let newHead = curr.next;
  curr.next = null;
  curr = newHead;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = head;
  return newHead;
};
