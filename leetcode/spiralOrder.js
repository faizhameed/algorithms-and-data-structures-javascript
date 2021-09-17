const spiralOrder = (matrix) => {
  const m = matrix.length,
    n = matrix[0].length;
  let count = 0,
    row_start = 0,
    row_end = m - 1,
    col_start = 0,
    col_end = n - 1;
  const result = [];
  while (count < m * n) {
    for (let i = col_start; i <= col_end; i++) {
      result.push(matrix[row_start][i]);
      count++;
    }
    row_start++;
    if (count < m * n) {
      for (let i = row_start; i <= row_end; i++) {
        result.push(matrix[i][col_end]);
        count++;
      }
      col_end--;
    }
    if (count < m * n) {
      for (let i = col_end; i >= col_start; i--) {
        result.push(matrix[row_end][i]);
        count++;
      }
      row_end--;
    }
    if (count < m * n) {
      for (let i = row_end; i >= row_start; i--) {
        result.push(matrix[i][col_start]);
        count++;
      }
      col_start++;
    }
  }
  return result;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(mat));
