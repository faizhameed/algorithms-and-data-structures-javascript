/* Brute force */

var findTargetSumWaysBrute = function (nums, target) {
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

var findTargetSumWays = function (nums, target) {
  const map = new Map();
  function calculate(i, sum) {
    if (i === nums.length) {
      return target === sum ? 1 : 0;
    }
    if (map.has(`${i}-${sum}`)) {
      return map.get(`${i}-${sum}`);
    }
    const res =
      calculate(i + 1, sum + nums[i]) + calculate(i + 1, sum - nums[i]);
    map.set(`${i}-${sum}`, res);
    return res;
  }
  return calculate(0, 0);
};

console.log(findTargetSumWays(nums, target));
