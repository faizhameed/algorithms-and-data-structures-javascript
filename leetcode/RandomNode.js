/* https://leetcode.com/problems/linked-list-random-node/ */

var Solution = function (head) {
  this.nums = [];
  while (head) {
    this.nums.push(head.val);
    head = head.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const pick = Math.floor(Math.random() * this.nums.length);
  return this.nums[pick];
};
