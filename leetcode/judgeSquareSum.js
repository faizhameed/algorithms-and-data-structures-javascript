var judgeSquareSum = function (c) {
  for (let i = 0; i <= Math.sqrt(c); i++) {
    const b = Math.sqrt(c - i * i);
    if (Number.isInteger(b)) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(0));
