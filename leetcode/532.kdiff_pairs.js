var findPairs = function (nums, k) {
  let count = 0;
  const seen = {};
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!seen[`${nums[i]},${nums[j]}`] && Math.abs(nums[i] - nums[j]) === k) {
        seen[`${nums[i]},${nums[j]}`] = true;
        seen[`${nums[j]},${nums[i]}`] = true;
        count++;
      }
    }
  }
  return count;
};
