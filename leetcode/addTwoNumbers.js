/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
https://leetcode.com/problems/add-two-numbers/
*/
const reverseALinkedList = (ln) => {
  //   const current = ln.next;
  //   ln.next =null
  let current = ln;
  let prev = null;
  while (current) {
    second = current.next;
    current.next = prev;
    prev = current;
    current = second;
  }
};

const addTwoNumbers = (l1, l2) => {
  /* 1. We reverse each linked list
    2. we add the linkedlist
    to add we need to keep a var carry to store the add value if its greater than zero
    also we much consider the number of digits in the linkedlist.
    3. reverse the linkedlist
    */
};
