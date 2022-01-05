var nextPermutation = function (nums) {
  const n = nums.length;
  let i = n - 2;
  // we check from backwards to see if the currVal is larger than previous
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  function reverse(start) {
    let i = start,
      j = nums.length - 1;
    while (i < j) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  reverse(i + 1);
  return nums;
};

const nums = [1, 2, 4, 3, 0];
//   [2, 3, 3, 7, 6, 5, 4];
//[1,3,2]

console.log(nextPermutation(nums));
