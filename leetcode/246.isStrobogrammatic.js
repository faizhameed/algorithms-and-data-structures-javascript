var isStrobogrammatic = function (num) {
  const straboPairs = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };
  let start = 0,
    end = num.length - 1;
  if (num.length % 2 === 1) {
    if (!["0", "1", "8"].includes(num[Math.floor(num.length / 2)])) {
      console.log("false");
      return false;
    }
  }
  while (start < end) {
    if (straboPairs[num[start]] !== num[end]) return false;
    start++;
    end--;
  }
  return true;
};
