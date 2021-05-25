/* URL https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/ */

/* Solution 1 */
const searchRange = (nums, target) => {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundValue = nums[mid];
    if (foundValue === target) {
      let leftIndex = mid,
        rightIndex = mid;
      while (
        nums[rightIndex] === foundValue ||
        nums[leftIndex] === foundValue
      ) {
        if (nums[leftIndex] === foundValue) {
          left = leftIndex;
          leftIndex--;
        }
        if (nums[rightIndex] === foundValue) {
          right = rightIndex;
          rightIndex++;
        }
      }
      return [left, right];
    } else if (foundValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([1, 2, 3, 3, 5, 6, 7, 7], 7));

/* Solution 2 */

const searchRange2 = (nums, target) => {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let startPos = binarySearch(nums, target, 0, nums.length - 1);
  let endPos = startPos;
  let temp1 = startPos;
  let temp2 = endPos;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, target, 0, startPos);
  }
  startPos = temp1;
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, target, 0, endPos);
  }

  endPos = temp2;

  return [startPos, endPos];
};
