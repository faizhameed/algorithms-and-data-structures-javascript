var maximumUniqueSubarray = function (nums) {
  const seen = new Set();

  let sum = 0,
    max = 0,
    start = 0;
  let result = 0;
  for (let end = 0; end < nums.length; end++) {
    while (seen.has(nums[end])) {
      seen.delete(nums[start]);
      sum -= nums[start];
      start++;
    }
    sum += nums[end];
    seen.add(nums[end]);
    result = Math.max(result, sum);
  }
  return result;
};
