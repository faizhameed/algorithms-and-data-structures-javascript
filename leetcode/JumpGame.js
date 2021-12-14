/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. */
var canJump = function (nums) {
  const storeIndex = {};
  function jump(nums, index = 0) {
    if (storeIndex[index + 1]) {
      return true;
    } else if (storeIndex[index + 1] === false) {
      return false;
    }
    if (nums[index] === 0 && nums.length - 1 > index) {
      storeIndex[index + 1] = false;
      return false;
    }

    if (nums.length - 1 <= index) {
      storeIndex[index + 1] = true;
      return true;
    }
    let j = nums[index];
    while (j > 0) {
      if (jump(nums, index + j)) {
        return true;
      }
      j--;
    }

    return false;
  }
  return jump(nums, 0);
};

const nums = [1, 1, 0, 1];

console.log(canJump(nums));

function canJumpOptimal(nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;
  while (idx <= target) {
    max = Math.max(nums[idx] + idx, max);
    if (max >= target) {
      return true;
    }
    if (max <= idx && nums[idx] === 0) {
      return false;
    }
    idx++;
  }
  return false;
}

var canJumpDp = function (nums) {
  if (nums[0] === 0 && nums.length > 1) return false;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // can the prev reach here
    if (prev < i) {
      return false;
    }
    prev = Math.max(prev, nums[i] + i);
  }
  return true;
};
