var maximumTop = function (nums, k) {
  if (k === 0) {
    // we can only return the top element
    return nums[0];
  }
  const n = nums.length;
  if (n === 1) {
    return k % 2 === 0 ? nums[0] : -1;
    // only one value so we check how many times
    // we can remove and insert it back
  }
  if (n > k) {
    // if array length is greater than k we have some conditions to look
    let max = -Infinity,
      second = -Infinity;
    for (let i = 0; i < k; i++) {
      // find max and second max upto k
      if (nums[i] > max) {
        second = max;
        max = nums[i];
      } else if (nums[i] > second) {
        second = nums[i];
      }
    }
    if (max < nums[k]) {
      // if max upto k is smaller than the next value we return the next value
      return nums[k];
    }
    if (max === nums[k - 1]) {
      // if max was the last element up to k there is no way to have it on top
      // we return max of second and element just after the max which is nums[k]
      return Math.max(second, nums[k]);
    }
    // if none of the above things happened we can safely return the max
    return max;
  }
  if (n < k) {
    // if array length is less than k, we can easily return the max
    return Math.max(...nums);
  }
  // if array length is equal to k, we can return the max excluding the last element
  return Math.max(...nums.slice(0, n - 1));
};
