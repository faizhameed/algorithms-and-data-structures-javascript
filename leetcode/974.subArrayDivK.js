var subarraysDivByK = function (nums, k) {
  const n = nums.length;
  let count = 0,
    sum = 0;
  const rem = new Array(k).fill(0);
  rem[0] = 1;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    let remainder = sum % k;
    if (remainder < 0) remainder += k;

    count += rem[remainder];

    rem[remainder] += 1;
  }
  return count;
};
const nums = [4, 5, 0, -2, -3, 1],
  k = 5;
console.log(subarraysDivByK(nums, k));
