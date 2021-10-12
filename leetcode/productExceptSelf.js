const productExceptSelf = (nums) => {
  const n = nums.length;
  const leftArr = [];
  const rightArr = new Array(n).fill(0);
  const res = [];
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (i === 0) {
      leftArr.push(1);
      rightArr[j] = 1;
    } else {
      leftArr.push(leftArr[i - 1] * nums[i - 1]);
      rightArr[j] = rightArr[j + 1] * nums[j + 1];
    }
  }
  let i = 0;
  while (i < nums.length) {
    res.push(leftArr[i] * rightArr[i]);
    i++;
  }
  return res;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
