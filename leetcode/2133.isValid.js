var checkValid = function (matrix) {
  // check every column
  // check every row
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    const nRow = {};
    const nCol = {};
    for (let j = 0; j < n; j++) {
      if (nRow[matrix[i][j]] || nCol[matrix[j][i]]) {
        return false;
      } else {
        nRow[matrix[i][j]] = true;
        nCol[matrix[j][i]] = true;
      }
    }
  }
  return true;
};
