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

  dfs(matrix, 0, 0, seen, values);
};

const dfs = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].lenght ||
    seen[matrix[row][col]]
  )
    return;

  seen[matrix[row][col]] = true;
  values.push(matrix[row][col]);

  for (let i = 0; i < directions.length; i++) {
    const currentDirection = directions[i];
    dfs(
      matrix,
      row + currentDirection[0],
      col + currentDirection[1],
      seen,
      values
    );
  }
};
