const nums = [0, 1, 0, 3, 12];

var moveZeroes = function () {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const val = nums[i];
    if (val === 0) {
      nums.push(...nums.splice(i, 1));
      i--;
      n--;
    }
  }
};

moveZeroes();

console.log(nums);
