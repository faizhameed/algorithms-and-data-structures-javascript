var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [];
  let median = 0;
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      mergedArr.push(nums2[j]);
      j++;
    } else {
      mergedArr.push(nums1[i]);
      i++;
    }
  }

  if (i < nums1.length) {
    mergedArr.push(...nums1.slice(i));
  } else if (j < nums2.length) {
    mergedArr.push(...nums2.slice(j));
  }
  const size = mergedArr.length;
  if (size % 2 === 0) {
    median = (mergedArr[size / 2] + mergedArr[size / 2 - 1]) / 2;
  } else {
    median = mergedArr[Math.floor(size / 2)];
  }
  return median;
};

const nums1 = [];
const nums2 = [8, 12, 14, 16];

console.log(findMedianSortedArrays(nums1, nums2));
