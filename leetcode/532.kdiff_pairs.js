var findPairsBrute = function (nums, k) {
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

/* Optimized */

var findPairs = function (nums, k) {
  let count = 0;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else map[nums[i]] += 1;
  }
  for (let x of Object.keys(map)) {
    x = Number(x);
    if (k > 0 && map[x + k]) {
      count++;
    } else if (k === 0 && map[x] > 1) {
      count++;
    }
  }
  return count;
};
const nums = [1, 3, 1, 5, 4],
  k = 0;
console.log(findPairs(nums, k));
