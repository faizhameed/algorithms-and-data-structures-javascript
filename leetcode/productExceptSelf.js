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

/*  2nd approach to make it o(1) space complexity we can now make the left array as a result array and then add to res when running backwards */

const productExceptSelf2 = (nums) => {
  const n = nums.length;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      res.push(1);
    } else {
      res.push(res[i - 1] * nums[i - 1]);
    }
  }
  let i = n - 2,
    prev = 1;
  while (i >= 0) {
    res[i] = res[i] * nums[i + 1] * prev;
    prev = nums[i + 1] * prev;
    i--;
  }
  return res;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf2(nums));
