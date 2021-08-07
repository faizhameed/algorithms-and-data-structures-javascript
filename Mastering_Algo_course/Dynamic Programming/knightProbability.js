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
  if (k == 0) {
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
