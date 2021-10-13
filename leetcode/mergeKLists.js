function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKLists = function (lists) {
  if (!lists.length) return null;
  let root = lists[0];

  for (let k = 0; k < lists.length; k++) {
    root = merge(root, lists[k]);
  }
};

function merge(root, linkedList) {
  let cur1 = root;
  let cur2 = linkedList;
  let newList = new ListNode();
  while (cur1 && cur2) {
    if (cur1.val > cur2.val) {
      newList.next = new ListNode(cur2.val);
      cur2 = cur2.next;
    } else {
      newList.next = new ListNode(cur1.val);
      cur1 = cur1.next;
    }
  }
  if (cur1) {
    while (cur1) {
      newList.next = new ListNode(cur1.val);
      cur1 = cur1.next;
    }
  } else if (cur2) {
    while (cur2) {
      newList.next = new ListNode(cur2.val);
      cur2 = cur2.next;
    }
  }
  return newList;
}
