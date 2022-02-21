var generateParenthesis = function (n) {
  const res = [];
  function dfs(str, open, close) {
    // close parenthesis cannot be more than open p

    if (open > close) return;
    if (open === 0 && close === 0) {
      res.push(str);
      return;
    }

    if (open > 0) {
      dfs(str + "(", open - 1, close);
    }
    if (close > 0) {
      dfs(str + ")", open, close - 1);
    }
  }
  dfs("", n, n);
  return res;
};

console.log(generateParenthesis(4));
