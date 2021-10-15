var hasCycle = function (head) {
  if (!head) return false;

  let tortoise = head;
  let hare = head;

  while (hare.next && hare.next.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      // there is a cycle
      return true;
    }
  }

  return false;
};
