var singleNumber = function (nums) {
  return nums.reduce((a, v) => a ^ v, 0);
};

console.log(singleNumber([1, 2, 4, 2, 1]));
