function fibonacciRecursive(n) {
  //code here;
  if (n === 2 || n === 1) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));
//BIg O notation for this exponential time O(2^n)
