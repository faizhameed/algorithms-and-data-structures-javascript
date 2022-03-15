var minRemoveToMakeValid = function (s) {
  let count = 0;

  const res = [];
  for (const str of s) {
    if (str === "(") {
      count++;
    }
    if (str === ")" && count <= 0) {
      // no opening bracket present
      continue;
    } else if (str === ")") {
      count--;
    }
    res.push(str);
  }
  let j = res.length - 1;
  let resStr = res.join("");
  while (count !== 0 && j >= 0) {
    if (resStr[j] === "(") {
      resStr = resStr.substring(0, j) + resStr.substring(j + 1);
      count--;
    }
    j--;
  }
  return resStr;
};

var minRemoveToMakeValid = function (s) {
  let count = 0;

  const res = [];
  for (const str of s) {
    if (str === "(") {
      count++;
    }
    if (str === ")" && count <= 0) {
      // no opening bracket present
      continue;
    } else if (str === ")") {
      count--;
    }
    res.push(str);
  }
  let j = res.length - 1;

  while (count !== 0 && j >= 0) {
    if (res[j] === "(") {
      count--;
      res[j] = "";
    }
    j--;
  }
  return res.join("");
};
