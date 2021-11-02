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
