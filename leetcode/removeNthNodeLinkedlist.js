/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const linkSize = (head) => {
    let current = head,
      count = 1;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  };
  const size = linkSize(head);
  const targetPoint = size - n;
  if (targetPoint === 0) {
    head = head.next;
    return head;
  }
  let current = head,
    count = 1,
    prev = head;
  while (count <= targetPoint) {
    prev = current;
    current = current.next;
    count++;
  }
  console.log(size, targetPoint, prev.val, current.val);

  prev.next = current.next;

  return head;
};
