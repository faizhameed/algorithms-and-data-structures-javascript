var shortestPathBinaryMatrix = function (grid) {
  const directions = [
    [1, 1],
    [0, 1],
    [1, 0],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [0, -1],
    [-1, 0],
  ];
  if (grid[0][0] === 1) return -1;
  const n = grid.length;
  const visited = Array(n)
    .fill(0)
    .map(() => Array(n).fill(Infinity));

  const queue = [[0, 0, 1]];
  visited[0][0] = 1;
  while (queue.length) {
    const curr = queue.shift();
    const step = curr[2];
    for (const [r, c] of directions) {
      const row = r + curr[0];
      const col = c + curr[1];

      if (row < 0 || col < 0 || row >= n || col >= n || grid[row][col] === 1) {
        continue;
      }
      if (visited[row][col] > step + 1) {
        visited[row][col] = step + 1;
        queue.push([row, col, step + 1]);
      }
    }
  }
  return visited[n - 1][n - 1] === Infinity ? -1 : visited[n - 1][n - 1];
};
