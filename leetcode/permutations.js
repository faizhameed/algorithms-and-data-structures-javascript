var permute = function (nums, curr = [], res = []) {
  if (curr.length === nums.length) {
    res.push(curr);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (curr.includes(nums[i])) continue;
    permute(nums, [...curr, nums[i]], res);
  }
  return res;
};

var permuteUnique = function (nums, curr = [], res = [], indexArr = []) {
  if (curr.length === nums.length) {
    if (!res.some((a) => curr.every((v, i) => v === a[i]))) {
      res.push(curr);
    }
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (indexArr.includes(i)) continue;
    permuteUnique(nums, [...curr, nums[i]], res, [...indexArr, i]);
  }
  return res;
};
