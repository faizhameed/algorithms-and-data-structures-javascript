function addTo80() {
  let cache = {};

  return (n) => {
    if (n in cache) {
      console.log("took from cache");
      return cache[n];
    } else {
      cache[n] = n + 80;
      return n + 80;
    }
  };
}

const add = addTo80();
console.log(add(20));
console.log(add(20));
