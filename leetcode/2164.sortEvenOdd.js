// odd decreasing

var sortEvenOdd = function (nums) {
  const odd = [],
    even = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  odd.sort((a, b) => a - b);
  even.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res.push(even.pop());
    } else {
      res.push(odd.pop());
    }
  }

  return res;
};
