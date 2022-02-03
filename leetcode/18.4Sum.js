var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let low = j + 1;
      let high = nums.length - 1;
      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1]) low++;
          while (nums[high] === nums[high + 1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return res;
};
const nums = [1, 0, -1, 0, -2, 2],
  target = 0;

console.log(fourSum(nums, 0));
