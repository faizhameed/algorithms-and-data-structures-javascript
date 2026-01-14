// https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=problem-list-v2&envId=sliding-window

const minSubArrayLenBrute = function (target, nums) {
  const length = nums.length;
  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < length; j++) {
      const currSum = nums.slice(j, j + i).reduce((a, v) => a + v, 0);
      console.log("curr", currSum);
      if (target <= currSum) return i;
    }
  }
  return 0;
};

const minSubArrayLen = function (target, nums) {
  // what if we sort this
  let left = 0;
  let right = 0;
  let answer = Infinity;
  let currSum = nums[0];
  while (right < nums.length) {
    if (currSum < target) {
      right++;
      currSum += nums[right];
    } else {
      answer = Math.min(answer, right - left + 1);
      currSum -= nums[left];
      left++;
    }
  }

  return answer === Infinity ? 0 : answer;
};

const target = 7;
const nums = [6, 0, 1, 0, 0, 0, 0, 1];

console.log(minSubArrayLen(target, nums));
