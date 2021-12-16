/* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index. */

var canJump = function (nums) {
  let jumpEnd = 0,
    maxMove = 0,
    jumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxMove = Math.max(maxMove, nums[i] + i);
    if (i === jumpEnd) {
      jumps++;
      jumpEnd = maxMove;
    }
  }
  return jumps;
};

const nums = [1, 2, 3];

console.log(canJump(nums));
