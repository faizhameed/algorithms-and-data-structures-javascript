var search = function (nums, target) {
  function existsInFirst(start, element) {
    return nums[start] <= element;
  }
  const isBSOK = (start, element) => nums[start] !== element;

  const n = nums.length;
  let end = n - 1,
    start = 0;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) return true;

    if (!isBSOK(start, nums[mid])) {
      start++;
      continue;
    }

    const pivot = existsInFirst(start, nums[mid]);
    const targetPivot = existsInFirst(start, target);
    if (pivot !== targetPivot) {
      if (pivot) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
};
