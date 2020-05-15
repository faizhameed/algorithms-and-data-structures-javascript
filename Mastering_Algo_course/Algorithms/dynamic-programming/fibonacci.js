/* function fibR() {
  let cache = {};
  return (n) => {
    if (n <= 2) {
      return 1;
    }
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return fib(n - 1) + fib(n - 2);
    }
  };
} */

/* alternative way
 */

function fibR(n) {
  let cache = {};
  const fib = (n) => {
    if (n <= 2) {
      return 1;
    }
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return fib(n - 1) + fib(n - 2);
    }
  };
  return fib(n);
}

// const fib = fibR();
console.log(fibR(6));
