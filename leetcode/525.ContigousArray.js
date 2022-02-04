var findMaxLength = function (nums) {
  let ones = 0,
    maxSub = 0;

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      ones++;
    } else {
      ones--;
    }
    if (map[ones] !== undefined) {
      maxSub = Math.max(i - map[ones], maxSub);
    } else {
      map[ones] = i;
    }
    if (ones === 0) {
      maxSub = Math.max(i + 1, maxSub);
    }
  }
  return maxSub;
};

const nums = [0, 0, 1];

console.log(findMaxLength(nums));
