function reverseLinkedlist(head) {
  if (!head || !head.next) return head;

  let first = head,
    second = first.next,
    tail = head;
  while (second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  tail.next = null;
  return first;
}
