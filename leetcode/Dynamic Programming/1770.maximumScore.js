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

const maxScoreBottomUp = (nums, multipliers) => {
  const dp = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
  const m = multipliers.length;
  for (let i = m - 1; i >= 0; i--) {
    for (let left = i; i >= 0; left--) {
      let takeFirst = multipliers[i] * nums[left] + dp[left + 1][i + 1];
      let takeLast =
        multipliers[i] * nums[nums.length - 1 - (i - left)] + dp[left][i + 1];
      dp[i][left] = Math.max(takeFirst, takeLast);
    }
  }

  return dp[0][0];
};

const nums = [1, 2, 3],
  multipliers = [3, 2, 1];

console.log(maximumScore(nums, multipliers));
