var subarraySumBrute = function (nums, k) {
  let count = 0;
  let i = 0,
    j = 0,
    sum = 0;
  const n = nums.length;
  for (i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

var subarraySum = function (nums, k) {
  let count = 0;
  let i = 0,
    sum = 0;
  const n = nums.length;
  const hashMap = {};
  hashMap[0] = 1;
  for (i = 0; i < n; i++) {
    sum += nums[i];
    if (hashMap[sum - k]) {
      count += hashMap[sum - k];
    }
    hashMap[sum] = hashMap[sum] ? (hashMap[sum] += 1) : 1;
  }
  return count;
};

const nums = [1, 2, 3],
  k = 2;
console.log(subarraySum(nums, k));
