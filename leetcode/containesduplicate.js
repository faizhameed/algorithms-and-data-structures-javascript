var containsDuplicate = function (nums) {
  map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 3, 4]));
