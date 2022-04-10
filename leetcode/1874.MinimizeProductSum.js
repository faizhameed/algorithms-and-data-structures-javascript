var minProductSum = function (nums1, nums2) {
  const n = nums1.length;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums1[i] * nums2[i];
  }
  return sum;
};
