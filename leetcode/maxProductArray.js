/* 152. Maximum Product Subarray
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 */
var maxProductBrute = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const curr = nums.slice(i, j);
      const currP = product(curr);
      if (currP > max) {
        max = currP;
      }
    }
  }
  return max;
};

function product(curr) {
  return curr.reduce((a, i) => a * i, 1);
}
console.log("product", product([1, 2, 3, 4]));
const nums = [2, 3, -2, 4];

// optimised

const maxProduct = (nums) => {
  let min_curr = nums[0],
    max_curr = nums[0],
    curr = nums[0],
    max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = nums[i];
    const temp = max_curr;
    max_curr = Math.max(temp * curr, min_curr * curr, curr);
    min_curr = Math.min(temp * curr, min_curr * curr, curr);
    max = Math.max(max, max_curr);
  }
  return max;
};

console.log(maxProduct([-4, -3, -2]));
