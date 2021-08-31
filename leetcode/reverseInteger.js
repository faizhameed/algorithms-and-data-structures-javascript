const reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
  }
  let num = Math.abs(x);
  const reverseX = Number(`${num}`.split("").reverse().join(""));
  console.log(reverseX, num);
  if (reverseX < Math.pow(2, 31) - 1) {
    return negative ? -reverseX : reverseX;
  }
  return 0;
};

console.log(reverse(1563847412), Math.pow(2, 5));
