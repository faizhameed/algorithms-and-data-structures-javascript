function fibR() {
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
}
const fib = fibR();
console.log(fib(1000));
