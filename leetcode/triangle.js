/* 120.Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

*/

var minimumTotal = function (triangle) {
  if (triangle.length === 1) return triangle[0][0];
  let size = triangle.length;
  for (let i = size - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] =
        triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
