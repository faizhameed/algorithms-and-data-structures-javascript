/* Normal recursion - space O(N) */
const recFactorial = (x) => {
  if (x <= 1) {
    return 1;
  }
  return x * recFactorial(x - 1);
};

/* tail recursion - space O(1) */

const tailFactorial = (x, totalSoFar = 1) => {
  if (x === 0) {
    return totalSoFar;
  }
  return tailFactorial(x - 1, totalSoFar * x);
};

console.log(tailFactorial(4));
console.log(recFactorial(4));
