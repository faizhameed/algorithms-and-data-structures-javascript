// creating new linkedlist after sorting the values - easy
var sortListEasy = function (head) {
  const list = [];

  let curr = head;
  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }
  const newHead = new ListNode();
  curr = newHead;
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length; i++) {
    const node = new ListNode(list[i]);
    curr.next = node;
    curr = curr.next;
  }

  return newHead.next;
};

// sorting based on mergesort in place
function sortList(head) {
  if (!head || head.next === null) {
    return head;
  }

  const [left, right] = splitAtMid(head);
  const root = new ListNode();
  return merge(root, sortList(left), sortList(right));
}

function splitAtMid(head) {
  // get mid and separate them
  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const left = head;
  const right = slow.next;
  slow.next = null; // cutt of the slow from right

  return [left, right];
}

function merge(root, left, right) {
  let pointer = root;
  while (left !== null || right !== null) {
    if (left === null) {
      pointer.next = right;
      right = right.next;
    } else if (right === null) {
      pointer.next = left;
      left = left.next;
    } else {
      if (left.val < right.val) {
        pointer.next = left;
        left = left.next;
      } else {
        pointer.next = right;
        right = right.next;
      }
    }
    pointer = pointer.next;
  }
  return root.next;
}
