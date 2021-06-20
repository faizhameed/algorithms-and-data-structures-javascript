/* If the matrix is sorted we first point to the middle of row and column. 
Then set new row and new column to search we change the pointer for row and column each time */

var searchMatrix = function (matrix, target) {
  let [h, w] = [matrix.length - 1, 0];
  while (h >= 0) {
    if (target >= matrix[h][w]) {
      while (w < matrix[0].length) {
        if (matrix[h][w] == target) return true;
        w++;
      }
      break;
    }
    h--;
  }
  return false;
};

const testMatr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(searchMatrix(testMatr, 5));
