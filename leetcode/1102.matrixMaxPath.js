var maximumMinimumPath = function (grid) {
  let R = grid.length,
    C = grid[0].length;

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function isPathExist(score) {
    const queue = [[0, 0]];
    const visited = Array(R)
      .fill(null)
      .map(() => Array(C).fill(false));

    while (queue.length) {
      const [curr_row, curr_col] = queue.shift();
      console.log(curr_row, curr_col);
      if (curr_row === R - 1 && curr_col === C - 1) return true;
      visited[curr_row][curr_col] = true;
      for (const [dx, dy] of dirs) {
        const new_row = dx + curr_row;
        const new_col = dy + curr_col;
        if (
          new_row < 0 ||
          new_row >= R ||
          new_col < 0 ||
          new_col >= C ||
          score > grid[new_row][new_col] ||
          visited[new_row][new_col]
        ) {
          continue;
        }
        queue.push([new_row, new_col]);
      }
    }
    return false;
  }

  //binary search

  let high = Math.min(grid[0][0], grid[R - 1][C - 1]),
    lo = 0;

  while (lo < high) {
    const mid = Math.floor((lo + high + 1) / 2);
    if (isPathExist(mid)) {
      lo = mid;
    } else {
      high = mid - 1;
    }
  }

  return lo;
};
const grid = [
  [5, 4, 5],
  [1, 2, 6],
  [100, 4, 6],
];

console.log(maximumMinimumPath(grid));
