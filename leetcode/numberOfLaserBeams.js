var numberOfBeams = function (bank) {
  const m = bank.length;
  const n = bank[0].length;
  let totalBeams = 0,
    prevCount = 0;
  for (let i = 0; i < m; i++) {
    let currDev = 0;
    for (let j = 0; j < n; j++) {
      if (bank[i][j] === "1") {
        currDev++;
      }
    }
    if (prevCount > 0) {
      totalBeams += prevCount * currDev;
    }
    if (currDev > 0) {
      prevCount = currDev;
    }
  }
  return totalBeams;
};

const bank = ["100", "111", "001"];

console.log(numberOfBeams(bank));
