var maxAreaOfIsland = function (grid) {
  const seen = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const curr = grid[i][j];
      if (curr === 1 && !seen[i][j]) {
        let curArea = 0;
        const queue = [[i, j]];
        while (queue.length) {
          const point = queue.shift();
          curArea++;
          seen[point[0]][point[1]] = true;
          for (let k = 0; k < directions.length; k++) {
            const row = point[0] + directions[k][0];
            const col = point[1] + directions[k][1];
            if (
              row >= 0 && //if the row and col is in the matrix range
              row < grid.length &&
              col >= 0 &&
              col < grid[0].length &&
              grid[row][col] === 1 && // if the value at grid ===1 so we have an attached land
              !seen[row][col]
            ) {
              seen[row][col] = true;
              queue.push([row, col]);
            }
          }
        }
        maxArea = Math.max(maxArea, curArea);
      }
    }
  }
  return maxArea;
};

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

console.log(maxAreaOfIsland(grid));
