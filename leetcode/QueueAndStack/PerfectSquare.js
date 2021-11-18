/* Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an 
integer; in other words, it is the product of some 
integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 */

var numSquares = function (n) {
  const squares = [];
  for (let i = 1; i < Math.sqrt(n) + 1; i++) {
    squares.push(i ** 2);
  }
  const dp = {};
  function minNumSquares(k) {
    if (dp[k] !== undefined) {
      return dp[k];
    }
    if (squares.includes(k)) {
      return 1;
    }
    let minNum = Infinity;
    let i = 0;
    while (squares[i] < k) {
      newNum = minNumSquares(k - squares[i]) + 1;
      minNum = Math.min(newNum, minNum);
      i++;
    }
    dp[k] = minNum;
    return minNum;
  }
  return minNumSquares(n);
};

console.log(numSquares(66));
// how to optimize this
