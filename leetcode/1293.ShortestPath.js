var shortestPath = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const dir = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];

  let queue = [[0, 0, k]]; //row,col,obsCount,steps
  let steps = 0;
  const seen = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(null)
        .map(() => Array(k).fill(false))
    );
  while (queue.length) {
    let nextMoves = [];
    while (queue.length) {
      const [row, col, obs] = queue.pop();
      if (row === m - 1 && col === n - 1) {
        return steps;
      }

      for (const [dx, dy] of dir) {
        const new_row = dx + row;
        const new_col = dy + col;
        if (
          new_row >= m ||
          new_row < 0 ||
          new_col < 0 ||
          new_col >= n ||
          seen[new_row][new_col][obs]
        ) {
          continue;
        }
        let new_obs = obs;
        if (grid[new_row][new_col] === 1) {
          if (obs <= 0) {
            // cannot proceed
            continue;
          }
          new_obs -= 1;
        }
        if (seen[new_row][new_col][new_obs]) continue;
        seen[new_row][new_col][new_obs] = true;
        nextMoves.push([new_row, new_col, new_obs, steps + 1]);
      }
    }
    queue = nextMoves;
    steps++;
  }
  return -1;
};
const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

k = 2;

console.log(shortestPath(grid, k));
