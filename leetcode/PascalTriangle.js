var generate = function (numRows) {
  if (numRows <= 0) {
    return [];
  }
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const temp = [1];
    for (let j = 1; j <= result[i - 1].length; j++) {
      if (result[i - 1][j] !== undefined) {
        temp.push(result[i - 1][j] + result[i - 1][j - 1]);
      } else {
        temp.push(1);
      }
    }
    result.push(temp);
  }
  return result;
};

console.log(generate(5));
