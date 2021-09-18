function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return l1;
  if (!l1) return l2;
  if (!l2) return l1;

  let cur1 = l1;
  let cur2 = l2;
  let node = new ListNode(null);
  const head = node;
  while (cur1 || cur2) {
    if (!cur1) {
      node.next = new ListNode(cur2.val, null);
      cur2 = cur2.next;
    } else if (!cur2) {
      node.next = new ListNode(cur1.val, null);
      cur1 = cur1.next;
    } else if (cur1.val < cur2.val) {
      node.next = new ListNode(cur1.val, null);
      cur1 = cur1.next;
    } else {
      node.next = new ListNode(cur2.val, null);
      cur2 = cur2.next;
    }

    node = node.next;
  }
  return head;
};
