const sortArrayByParity = (nums) => {
  const n = nums.length;
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  let i = 0,
    j = 1;
  while (i < n && j < n) {
    if (nums[i] % 2 === 0) {
      i += 2;
    } else if (nums[j] % 2 === 1) {
      j += 2;
    } else {
      swap(i, j);
    }
  }
  return nums;
};
