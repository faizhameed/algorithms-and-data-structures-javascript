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

function zeroMatrix_m2(matrix, column) {
  let firstRow = false;
  let firstCol = false;

  // check if first column or first row has a zero

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      firstCol = true;
    }
  }
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[0][j] == 0) {
      firstRow = true;
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  //nullify columns based on values in first row and first col

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      nullifyRow(matrix, i);
    }
  }

  for (let j = 0; j < matrix.length; j++) {
    if (matrix[0][j] == 0) {
      nullifyCol(matrix, j);
    }
  }
}
