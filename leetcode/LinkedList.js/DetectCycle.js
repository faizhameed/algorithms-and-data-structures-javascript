var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) {
    return null;
  }
  let p1 = head.next,
    p2 = head.next.next;

  while (p1 !== p2) {
    p1 = p1.next;
    if (p2 && p2.next) {
      p2 = p2.next.next;
    } else {
      return null;
    }
  }
  let p3 = head;
  while (p3 !== p1) {
    p3 = p3.next;
    p1 = p1.next;
  }
  return p3;
};
