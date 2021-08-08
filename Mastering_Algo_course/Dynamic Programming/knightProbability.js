const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2][(2, 1)],
  [2, -1],
  [1, -2],
  [-1, -2],
];

const knightP = (n, k, r, c) => {
  // base case
  if (r < 0 || r >= n || c < 0 || c >= n) {
    return 0;
  }
  if (k === 0) {
    return 1;
  }
  let res = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    res += knightP(n, k - 1, r + dir[0], c + dir[1]) / 8;
  }
  return res;
};

console.log(knightP(4, 3, 2, 2));

/* Method 2 utlising the DP */

const knightProbability = (N, k, r, c) => {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(N).fill(0))
    .map(() => new Array(N).fill(undefined));
  return recurse(N, k, r, c, dp);
};

const recurse = function (N, k, r, c, dp) {
  if (r < 0 || c < 0 || r >= N || c >= N) {
    return 0;
  }
  if (k === 0) return 1;
  if (dp[k][r][c] !== undefined) {
    return dp[k][r][c];
  }
  let res = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    res += recurse(N, (k = 1), r + dir[0], c + dir[1], dp) / 8;
  }
  dp[k][r][c] = res;
  return dp[k][r][c];
};
