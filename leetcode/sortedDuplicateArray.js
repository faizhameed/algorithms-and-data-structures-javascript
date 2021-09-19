var removeDuplicates = function (nums) {
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (i !== j && nums[i] === nums[j]) {
      nums.splice(j, 1);
      j--;
    }
    if (i !== j && nums[j] !== nums[i]) {
      i++;
    }
  }
  return nums;
};

console.log(
  removeDuplicates([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5])
);
