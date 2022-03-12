var findStrobogrammatic = function (n) {
  const straboPairs = [
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ];
  const recurse = (count, flag) => {
    if (count < 1) {
      return [""];
    }
    if (count === 1) {
      return ["0", "1", "8"];
    }
    const currStrabo = [];
    for (let i = flag ? 1 : 0; i < straboPairs.length; i++) {
      for (const item of recurse(count - 2)) {
        currStrabo.push(straboPairs[i][0] + item + straboPairs[i][1]);
      }
    }
    return currStrabo;
  };
  return recurse(n, true);
};

console.log(findStrobogrammatic(5));
