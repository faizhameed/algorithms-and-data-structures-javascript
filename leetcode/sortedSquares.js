var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums.sort((a, b) => a - b);
  return nums;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
