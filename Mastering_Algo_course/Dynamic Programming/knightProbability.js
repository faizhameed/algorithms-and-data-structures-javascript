const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2][(2, 1)],
  [2, -1],
  [1, -2],
  [-1, -2],
];

const knightProbability = (n, k, row, column) => {
  const knightP = (k, r, c) => {
    // base case
    if (r < 0 || r >= n || c < 0 || c >= n) {
      return 0;
    }
  };
  knightP(k, row, column);
};
