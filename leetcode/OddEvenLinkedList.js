/* 328. Odd Even Linked List


*/

var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }
  let odd = head,
    evenHead = head.next,
    even = evenHead;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
