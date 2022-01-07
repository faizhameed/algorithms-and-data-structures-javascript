var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = Math.max(0, i - k); j < i; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};
