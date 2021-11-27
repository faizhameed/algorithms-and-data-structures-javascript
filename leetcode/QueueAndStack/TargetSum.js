/* Brute force */

var findTargetSumWays = function (nums, target) {
  let count = 0;
  function calculate(i, sum) {
    if (i === nums.length) {
      if (sum === target) {
        count++;
      }
    } else {
      calculate(i + 1, sum + nums[i]);
      calculate(i + 1, sum - nums[i]);
    }
  }
  calculate(0, 0);
  return count;
};

const nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target));
