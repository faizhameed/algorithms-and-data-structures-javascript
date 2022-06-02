var transpose = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const result = new Array(m).fill(null).map(() => Array(n).fill(null));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};
