var topKFrequent = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  const res = [];

  const sortedArr = Object.entries(map).map((v) => [v[0], v[1]]); // O(n)
  sortedArr.sort((a, b) => b[1] - a[1]); //O(nlogn)
  for (let i = 0; i < k; i++) {
    res.push(sortedArr[i][0]);
  }
  return res;
};

console.log(topKFrequent([1, 2, 1, 2, 1, 3], 2));

// optimized
var topKFrequent = function (nums, k) {
  const hashMap = {};

  for (const num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 0;
    }
    hashMap[num] += 1;
  }

  const arr = Array(nums.length + 1)
    .fill(0)
    .map(() => []);
  for (const [key, val] of Object.entries(hashMap)) {
    arr[val].push(key);
  }
  let i = arr.length - 1;
  const res = [];
  while (k > 0) {
    for (const val of arr[i]) {
      if (k >= 1) {
        res.push(val);
        k--;
      }
    }
    i--;
  }
  return res;
};
