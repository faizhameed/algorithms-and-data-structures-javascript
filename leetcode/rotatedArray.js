var rotate = function (nums, k) {
  k = k % nums.length;
  nums.reverse();
  const re = nums.splice(0, k);
  nums.push(...re);
  nums.reverse();
  return nums;
};
const nums = [1, 2],
  k = 3;

console.log(rotate(nums, k));
