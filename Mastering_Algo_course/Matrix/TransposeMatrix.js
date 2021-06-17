const transpose = (grid) => {
  const newMatrix = [];
  for (let col = 0; col < grid[0].length; col++) {
    let newCol = [];
    for (let row = 0; row < grid.length; row++) {
      newCol.push(grid[row][col]);
    }
    newMatrix.push(newCol);
  }
  return newMatrix;
};

console.log(
  transpose([
    [1, 2, 5],
    [3, 4, 6],
  ])
);
