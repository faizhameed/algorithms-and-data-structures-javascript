var maxScoreIndices = function (nums) {
  let res = [];
  const n = nums.length;
  const countZeroLeft = new Array(n + 1).fill(0);
  const countOneRight = new Array(n + 1).fill(0);
  let zero = 0,
    ones = 0;
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    const numZ = nums[i];
    const numO = nums[j];
    if (numZ === 0) {
      zero++;
    }
    if (numO === 1) {
      ones++;
    }
    countZeroLeft[i + 1] = zero;

    countOneRight[j] = ones;
  }

  let maxScore = 0;
  for (let i = 0; i <= n + 1; i++) {
    const currScore = countOneRight[i] + countZeroLeft[i];

    if (currScore > maxScore) {
      res = [i];
      maxScore = currScore;
    } else if (currScore === maxScore) {
      res.push(i);
    }
  }
  return res;
};

const nums = [1, 1];

console.log(maxScoreIndices(nums));
