// Native way

var addDigits = function (num) {
  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((a, v) => a + Number(v), 0);
  }
  return num;
};

// optimized

var addDigits = function (num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};
