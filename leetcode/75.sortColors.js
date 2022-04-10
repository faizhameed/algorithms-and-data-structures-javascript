var sortColors = function (nums) {
  const n = nums.length;
  let curr = 0,
    p0 = 0,
    p2 = n - 1;
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
  while (curr <= p2) {
    if (nums[curr] === 0) {
      swap(curr, p0);
      p0++;
      curr++;
    } else if (nums[curr] === 2) {
      swap(curr, p2);
      p2--;
    } else {
      curr++;
    }
  }
  return nums;
};
const nums = [2, 0, 2, 1, 1, 0];

console.log(sortColors(nums));
