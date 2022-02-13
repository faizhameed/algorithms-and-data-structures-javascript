var minimumRemoval = function (beans) {
  beans.sort((a, b) => a - b);
  let min = Infinity;
  const n = beans.length,
    SUM = beans.reduce((a, v) => a + v, 0);
  for (let i = 0; i < n; i++) {
    min = Math.min(min, SUM - (n - i) * beans[i]);
  }
  return min;
};

const beans = [3, 4, 2, 2, 1, 1, 1];

console.log(minimumRemoval(beans));
