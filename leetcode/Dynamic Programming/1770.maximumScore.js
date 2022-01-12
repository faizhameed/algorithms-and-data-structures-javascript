function maximumScore(nums, multipliers) {
  const m = multipliers.length;
  const n = nums.length;
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(0));

  function dp(i, left) {
    if (i >= m) {
      return 0;
    }
    if (memo[i][left] === 0) {
      const mult = multipliers[i];
      const right = n - 1 - (i - left);
      const takeLeft = mult * nums[left] + dp(i + 1, left + 1);
      const takeRight = mult * nums[right] + dp(i + 1, left);

      memo[i][left] = Math.max(takeLeft, takeRight);
    }
    return memo[i][left];
  }
  return dp(0, 0);
}

const maxScore = () => {
  const dp = new Array(1000).fill(-1).map(() => new Array(1000).fill(-1));

  const helper = (lo = 0, m = 0) => {
    if (m >= multipliers.length) {
      return 0;
    }
    if (dp[lo][m] !== -1) {
      return dp[lo][m];
    }
    let takeFirst = multipliers[m] * nums[lo] + helper(lo + 1, m + 1);
    let takeLast =
      multipliers[m] * nums[nums.length - 1 - (m - lo)] + helper(lo, m + 1);
    return (dp[lo][m] = Math.max(takeFirst, takeLast));
  };

  return helper();
};

const nums = [1, 2, 3],
  multipliers = [3, 2, 1];

console.log(maximumScore(nums, multipliers));
