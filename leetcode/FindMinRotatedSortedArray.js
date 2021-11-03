var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0,
    right = nums.length - 1;
  if (nums[0] < nums[right]) return nums[0]; // no rotation
  let mid = 0;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // if the mid element is lesser than its previous element then mid element is the smallest
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      // if nums[0] is greater than the mid value then this means the smallest value is somewhere to
      // the left
      right = mid - 1;
    }
  }
  return -1;
};
[3, 4, 5, 1, 2][(4, 5, 6, 7, 0, 1, 2)][(11, 13, 15, 17)];
console.log(findMin([-2, 0, 1, 2]));
