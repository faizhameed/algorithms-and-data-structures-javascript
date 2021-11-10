var reorderList = function (head) {
  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow is at middle
  if (fast.next) {
    fast = fast.next; // bring fast to last node
  }
  let temp = slow;
  slow = slow.next;
  temp.next = null; // we are cutting off at the middle
  if (slow === null) {
    // if there is no slow
    return;
  }
  /* 
    1->2->3->null
    4->5->6->null
    */
  /* 
now we need to reverse the 2nd half of the linkedlist
*/

  let first = slow,
    second = slow.next; // starting of 2nd LinkedList
  // reversing 2nd half
  while (second) {
    let temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  slow.next = null;

  let l1 = head,
    l2 = first;
  // now we are merging both linkedlist
  while (l2 !== null) {
    let temp = l1.next;
    l1.next = l2;
    l1 = temp;

    temp = l2.next;
    l2.next = l1;
    l2 = temp;
  }
};
