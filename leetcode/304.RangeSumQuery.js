var NumMatrix = function (matrix) {
  this.matrix = matrix;
  this.m = matrix.length;
  this.n = matrix[0].length;
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;

  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  return sum;
};
