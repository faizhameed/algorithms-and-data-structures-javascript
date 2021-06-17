const setMatrixZeros = (grid) => {
  const initialZeroPos = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) initialZeroPos.push([row, col]);
    }
  }

  while (initialZeroPos.length) {
    const position = initialZeroPos.shift();

    for (let i = 0; i < grid.length; i++) {
      grid[i][position[1]] = 0;
    }
    for (let j = 0; j < grid[0].length; j++) {
      grid[position[0]][j] = 0;
    }
  }
  return grid;
};

console.log(
  setMatrixZeros([
    [1, 2, 3],
    [4, 0, 5],
  ])
);
