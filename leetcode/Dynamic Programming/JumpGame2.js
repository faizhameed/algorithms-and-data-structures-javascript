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
