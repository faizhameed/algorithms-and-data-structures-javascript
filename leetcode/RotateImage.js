/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. */

var rotate = function (matrix) {
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
};
