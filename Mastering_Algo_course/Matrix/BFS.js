const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const traverse = (matrix) => {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];

  bfs(matrix, 0, 0, seen, values);
  return values;
};

const bfs = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;

  const queue = [];

  queue.push([row, col]);
  values.push(matrix[row][col]);

  while (queue.length) {
    const cp = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      const currRow = cp[0] + directions[i][0];
      const currCol = cp[1] + directions[i][1];
      if (
        currRow >= 0 &&
        currRow < matrix.length &&
        currCol >= 0 &&
        currCol < matrix[0].length &&
        !seen[currRow][currCol]
      ) {
        queue.push([currRow, currCol]);
        values.push(matrix[currRow][currCol]);
        seen[currRow][currCol] = true;
      }
    }
  }
};
