/* https://leetcode.com/problems/number-of-islands/ */

(function () {
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
    let count = 0;

    const isThisUnique = (row, col) => {
      for (let i = directions; i < directions.length; i++) {
        const pos = directions[i];
        if (
          matrix[(row + pos[0], col + pos[1])] === 1 &&
          seen[(row + pos[0], col + pos[1])]
        ) {
          return false;
        }
      }
      return true;
    };

    const dfs = (row, col) => {
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
      if (elem === 1 && isThisUnique(row, col)) {
        count++;
      }

      for (let i = 0; i < directions.length; i++) {
        const currentDirection = directions[i];
        dfs(row + currentDirection[0], col + currentDirection[1]);
      }
    };

    dfs(0, 0);
    return values;
  };
})();
/* More best optimized solution */

const islands = (matrix) => {
  if (matrix.lenght === 0) return 0;
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        count++;
        // now we wanted to make all 1s connected to this to zero
        const queue = [];
        matrix[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          const curPos = queue.shift();
          for (let i = 0; i < directions.length; i++) {
            const currentDirection = directions[i];
            const curRow = currentDirection[0] + curPos[0];
            const curCol = currentDirection[1] + curPos[1];
            if (
              curRow < 0 ||
              curPos > matrix.length ||
              curCol < 0 ||
              curCol > matrix[0].length
            ) {
              continue;
            }
            if (matrix[curRow][curCol] === 1) {
              queue.push([curRow, curCol]);
              matrix[curRow][curCol] = 0;
            }
          }
        }
      }
    }
  }
  return count;
};
