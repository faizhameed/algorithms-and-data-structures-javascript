var tictactoe = function (moves) {
  const cases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const grid = new Array(9).fill(0);
  for (let i = 0; i < moves.length; ++i) {
    grid[moves[i][0] * 3 + moves[i][1]] = (i % 2) + 1;
  }
  console.log(grid);
  for (let i = 0; i < cases.length; ++i) {
    const role = grid[cases[i][0]];
    if (
      role !== 0 &&
      grid[cases[i][1]] === role &&
      grid[cases[i][2]] === role
    ) {
      return role === 1 ? "A" : "B";
    }
  }
  return moves.length === 9 ? "Draw" : "Pending";
};

console.log(
  tictactoe([
    [1, 1],
    [0, 0],
  ])
);
