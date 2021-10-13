function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKLists = function (lists) {
  if (!lists.length) return null;
  let root = lists[0];

  for (let k = 1; k < lists.length; k++) {
    root = merge(root, lists[k]);
  }
  return root;
};

function merge(root, linkedList) {
  let cur1 = root;
  let cur2 = linkedList;
  const newList = new ListNode();
  let cur3 = newList;
  while (cur1 && cur2) {
    if (cur1.val > cur2.val) {
      cur3.next = new ListNode(cur2.val);
      cur2 = cur2.next;
    } else {
      cur3.next = new ListNode(cur1.val);
      cur1 = cur1.next;
    }
    cur3 = cur3.next;
  }
  if (cur1) {
    while (cur1) {
      cur3.next = new ListNode(cur1.val);
      cur1 = cur1.next;
      cur3 = cur3.next;
    }
  } else if (cur2) {
    while (cur2) {
      cur3.next = new ListNode(cur2.val);
      cur2 = cur2.next;
      cur3 = cur3.next;
    }
  }
  return newList.next;
}
