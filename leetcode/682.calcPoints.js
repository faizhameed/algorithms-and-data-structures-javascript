var calPoints = function (ops) {
  const rec = [];

  for (const item of ops) {
    const n = rec.length;
    if (item === "D") {
      rec.push(rec[n - 1] * 2);
    } else if (item === "C") {
      rec.pop();
    } else if (item === "+") {
      rec.push(rec[n - 1] + rec[n - 2]);
    } else {
      rec.push(Number(item));
    }
  }
  return rec.reduce((a, v) => a + v, 0);
};
const ops = ["5", "2", "C", "D", "+"];

console.log(calPoints(ops));
