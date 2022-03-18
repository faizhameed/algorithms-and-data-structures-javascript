var permuteUnique = function (nums) {
  const res = [],
    set = new Set(nums),
    remain = {};
  nums.forEach((num) => {
    if (!remain[num]) {
      remain[num] = 1;
    } else {
      remain[num] += 1;
    }
  });
  function dfs(curr) {
    if (curr.length === nums.length) {
      res.push([...curr]);
      return;
    }
    for (const num of set) {
      if (remain[num]) {
        remain[num]--;
        curr.push(num);
        dfs(curr);
        curr.pop();
        remain[num]++;
      }
    }
  }
  dfs([]);
  return res;
};

console.log(permuteUnique([1, 1, 2]));
