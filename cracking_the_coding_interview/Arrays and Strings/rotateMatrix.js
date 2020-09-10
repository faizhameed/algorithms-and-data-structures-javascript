function rotateMatrix(matrix) {
  if (matrix.length == 0 || matrix.length != matrix[0].length) {
    return false;
  }
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      //left->top
      matrix[first][i] = matrix[last - offset][first];
      //bottom->left
      matrix[last - offset][first] = matrix[last][last - offset];
      //right->bottom
      matrix[last][last - offset] = matrix[i][last];
      //top->right
      matrix[i][last] = top;
      matrixRepresentaion(matrix);
    }
  }

  return matrix;
}

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [8, 9, 10],
];

let matrix2 = [
  [1, 2],
  [3, 4],
];

let matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function matrixRepresentaion(matrix) {
  if (!matrix.length) {
    return console.log("No matrix");
  }
  for (let r = 0; r < matrix.length; r++) {
    console.log(matrix[r]);
  }
  console.log("  ");
}

rotateMatrix(matrix1);
rotateMatrix(matrix2);
rotateMatrix(matrix3);
/* 
expected
    [ 8, 4, 1 ]
    [ 9, 5, 2 ]
    [ 10, 6, 3 ]

*/
