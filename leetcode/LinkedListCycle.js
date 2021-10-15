var hasCycle = function (head) {
  if (!head) return null;

  let tortoise = head;
  let hare = head;

  while (hare) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      // there is a cycle
      return true;
    }
  }

  return false;
};
