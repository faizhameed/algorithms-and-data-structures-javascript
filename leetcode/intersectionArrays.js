const intersect = (nums1, nums2) => {
  const map = {};
  const result = [];
  nums2.forEach((v, i) => {
    if (!map[v]) {
      map[v] = 1;
    } else {
      map[v]++;
    }
  });
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] && map[nums1[i]] > 0) {
      map[nums1[i]]--;
      result.push(nums1[i]);
    }
  }
  return result;
};

const nums1 = [1, 2, 1, 2, 3, 5],
  nums2 = [1, 1, 2, 2, 33, 4, 5, 6];

const uniqueIntersect = (nums1, nums2) => {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return result;
};

/* Alternative */

//return [...new Set(nums2)].filter((v) => nums1.includes(v))

console.log(uniqueIntersect(nums1, nums2));
