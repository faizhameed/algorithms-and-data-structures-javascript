var subsetXORSum = function (nums) {
  const subsetsArr = subset(nums);
  let count = 0;
  for (let i = 0; i < subsetsArr.length; i++) {
    const curr = subsetsArr[i].reduce((a, v) => a ^ v, 0);
    console.log(curr);
    count += curr;
  }
  return count;
};

function subset(nums, res = [], curr = [], index = 0) {
  for (let i = index; i < nums.length; i++) {
    res.push([...curr, nums[i]]);
    subset(nums, res, [...curr, nums[i]], i + 1);
  }
  return res;
}

console.log(subsetXORSum([1, 2, 3, 4]));
