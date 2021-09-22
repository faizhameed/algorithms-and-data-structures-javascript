var searchInsert = function (nums, target) {
  //binary search
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];
    if (val === target) {
      return mid;
    } else if (val < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// how do we know if we searched all

const nums = [1, 2, 3],
  target = 1;

console.log(searchInsert(nums, target));
