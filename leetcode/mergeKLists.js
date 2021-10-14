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
  if (!cur1) {
    cur3.next = cur2;
  } else if (!cur2) {
    cur3.next = cur1;
  }
  return newList.next;
}

/* Optimized solution */

function mergekLists(lists) {
  const amount = lists.length;
  let interval = 1;
  while (interval < amount) {
    for (let i = 0; i < amount - interval; i += interval * 2) {
      lists[i] = merge(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return amount > 0 ? lists[0] : null;
}
