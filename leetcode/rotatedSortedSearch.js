var search = function (nums, target) {
  const n = nums.length;
  if (n === 0) return -1;
  if (n === 1) return nums[0] === target ? 0 : -1;

  let left = 0,
    right = n - 1;
  let rotateIndex = 0;
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    if (nums[pivot] > nums[pivot + 1]) {
      rotateIndex = pivot + 1;
      break;
    } else if (nums[left] < nums[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  console.log("rotateindex", rotateIndex);

  if (nums[rotateIndex] === target) {
    return rotateIndex;
  }
  if (rotateIndex === 0) {
    left = 0;
    right = n - 1;
  } else if (target < nums[0]) {
    left = rotateIndex;
    right = n - 1;
  } else {
    right = rotateIndex;
    left = 0;
  }
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    console.log("pivot", left, right, pivot);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (target > nums[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return -1;
};

console.log(search([3, 4, 5, 6, 1, 2], 2));
