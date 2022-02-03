var fourSumCountBrute = function (nums1, nums2, nums3, nums4) {
  const res = [];
  const n = nums1.length;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < n; k++)
        for (let l = 0; l < n; l++) {
          const sum = nums1[i] + nums2[j] + nums3[k] + nums4[l];
          if (sum === 0) {
            res.push([i, j, k, l]);
          }
        }
  return res;
};

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let res = 0;
  const map = {};

  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const s = nums1[i] + nums2[j];
      map[s] = map[s] ? (map[s] += 1) : (map[s] = 1);
    }
  }
  for (let k = 0; k < n; k++)
    for (let l = 0; l < n; l++) {
      const sum = nums3[k] + nums4[l];
      if (map[-sum]) {
        res += map[-sum];
      }
    }
  return res;
};

const nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];

console.log(fourSumCount(nums1, nums2, nums3, nums4));
