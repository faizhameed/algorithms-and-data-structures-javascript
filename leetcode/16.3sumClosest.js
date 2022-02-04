var threeSumClosest = function (nums, target) {
  let diff = Infinity;
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let high = n - 1,
      low = i + 1;

    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }

      if (diff === 0) break;

      if (target > sum) {
        low++;
      } else {
        high--;
      }
    }
  }
  return target - diff;
};
