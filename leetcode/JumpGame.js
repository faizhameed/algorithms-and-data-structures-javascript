/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. */
const map = {};
var canJump = function (nums, index = 0) {
  if (map[index + 1]) {
    return true;
  } else if (map[index + 1] === false) {
    return false;
  }
  if (nums[index] === 0 && nums.length - 1 > index) {
    map[index + 1] = false;
    return false;
  }

  if (nums.length - 1 <= index) {
    map[index + 1] = true;
    return true;
  }
  let j = 1;
  while (j <= nums[index]) {
    if (canJump(nums, index + j)) {
      return true;
    }
    j++;
  }

  return false;
};

const nums = [1, 0];

console.log(canJump(nums));
