var matrixReshape = function (mat, r, c) {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }

  let row = 0,
    col = 0;
  const result = new Array(r).fill(0).map((v) => new Array(c).fill(0));
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (col === c) {
        col = 0;
        row++;
      }
      result[row][col] = mat[i][j];
      col++;
    }
  }
  return result;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
