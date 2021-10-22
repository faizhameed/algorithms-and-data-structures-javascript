/* Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 https://leetcode.com/problems/word-search/

*/

var exist = function (board, word) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function DFS(row, column, letterIdx) {
    if (word[letterIdx] !== board[row][column]) {
      return false;
    }
    if (letterIdx === word.length - 1) {
      return true;
    }
    board[row][column] = "*";
    for (let i = 0; i < directions.length; i++) {
      const curRow = directions[i][0] + row;
      const curCol = directions[i][1] + column;
      if (
        curRow >= 0 &&
        curRow < board.length &&
        curCol >= 0 &&
        curCol < board[0].length
      ) {
        if (DFS(curRow, curCol, letterIdx + 1)) {
          return true;
        }
      }
    }
    board[row][column] = word[letterIdx];
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (DFS(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

const board = [
    ["a", "a", "a", "a"],
    ["a", "a", "a", "a"],
    ["a", "a", "a", "a"],
  ],
  word = "aaaaaaaaaaaaa";

console.log(exist(board, word));
