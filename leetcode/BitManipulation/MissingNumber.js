var missingNumber = function (nums) {
  return -nums.reduce((a, v, i) => i + 1 - a - v, 0);
};

console.log(missingNumber([1, 0, 3]));
