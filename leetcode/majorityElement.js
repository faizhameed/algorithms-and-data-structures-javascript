var majorityElement = function (nums) {
  const n = nums.length;
  const map = new Array(nums.length).fill(0);

  for (let i = 0; i < n; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.keys(map).reduce((a, k) => (map[k] > map[a] ? k : a), 0);
};

const num = [2, 2, 3, 3, 1, 2, 2, 3, 3, 3];

/* Optimized solution */

var majorityElementOpt = function (nums) {
  const n = nums.length;
  let candidate = nums[0];
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    if (candidate === nums[i]) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};

console.log(majorityElementOpt(num));
