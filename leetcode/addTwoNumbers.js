/* You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
https://leetcode.com/problems/add-two-numbers/
*/
const reverseALinkedList = (ln) => {
  //   const current = ln.next;
  //   ln.next =null
  let current = ln.next;
  let prev = ln;
  let tail = ln;
  while (current) {
    let second = current.next;
    current.next = prev;
    prev = current;
    current = second;
  }
  tail.next = null;
  return prev;
};
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let v1;
  let v2;
  let l3 = new ListNode((l1.val + l2.val) % 10);
  carry = Math.floor((l1.val + l2.val) / 10);
  let current = l3;
  l1 = l1.next;
  l2 = l2.next;
  while (l1 || l2) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;
    const val = (carry + v1 + v2) % 10;
    const node = new ListNode(val);
    current.next = node;
    current = current.next;
    carry = Math.floor((carry + v1 + v2) / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    const node = new ListNode(carry);
    current.next = node;
  }
  return l3;
};
