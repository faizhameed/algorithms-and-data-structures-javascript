function nullifyRow(matrix, row) {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
}
function nullifyColumn(matrix, column) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
}
/* method one */
function zeroMatrix_m1(matrix) {
  let rowArr = new Array(matrix.length);
  let colArr = new Array(matrix[0].length);

  // pass through entire array and find if a value is zero

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowArr[i] = true;
        colArr[j] = true;
      }
    }
  }

  for (let i = 0; i < rowArr.length; i++) {
    if (rowArr[i]) {
      nullifyRow(matrix, i);
    }
  }

  for (let j = 0; j < colArr.length; j++) {
    if (colArr[j]) {
      nullifyColumn(matrix, j);
    }
  }
}

/* method two (better)*/
