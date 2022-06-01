var runningSum = function (nums) {
  nums.forEach((v, i) => {
    if (i - 1 >= 0) {
      nums[i] = nums[i - 1] + v;
    }
  });
  return nums;
};
