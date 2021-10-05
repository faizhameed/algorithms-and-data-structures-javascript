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
