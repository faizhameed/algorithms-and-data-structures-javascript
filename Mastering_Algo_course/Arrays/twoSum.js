/*https://leetcode.com/problems/two-sum/  */

var twoSum = function (nums, target) {
  const store = {};

  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]]) {
      return [store[nums[i]] - 1, i];
    } else {
      store[target - nums[i]] = i + 1;
    }
  }
};
