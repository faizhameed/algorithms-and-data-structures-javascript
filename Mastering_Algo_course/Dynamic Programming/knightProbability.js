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
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));
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

/* Bottom up solution */
const knightProbability = function (N, k, r, c) {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));
  dp[0][r][c] = 1;
  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const dir = DIRECTIONS[i];
          const preRow = row + dir[0];
          const preCol = col + dir[1];
          if (preRow >= 0 && preRow < N && preCol >= 0 && preRow < N) {
            dp[step][row][col] += dp[step - 1][preRow][preCol] / 8;
          }
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += dp[k][i][j];
    }
  }
  return res;
};

/* Optimizing DP by storing prev Row and Pre Col */

const knightProbability = function (n, k, r, c) {
  const prevDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const currDP = new Array(n).fill(0).map(() => new Array(n).fill(0));
  prevDp[0][r][c] = 1;
  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const dir = DIRECTIONS[i];
          const preRow = row + dir[0];
          const preCol = col + dir[1];
          if (preRow >= 0 && preRow < n && preCol >= 0 && preRow < n) {
            currDP[row][col] += prevDp[preRow][preCol] / 8;
          }
        }
      }
    }
    prevDp = currDP;
    currDP = new Array(n).fill(0).map(() => new Array(n).fill(0));
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += prevDp[i][j];
    }
  }
  return res;
};
