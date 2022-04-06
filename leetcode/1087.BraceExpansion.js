var expand = function (s) {
  const strArr = [];
  let flag = false,
    temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ",") continue;
    if (s[i] !== "{" && s[i] !== "}" && !flag) {
      strArr.push(s[i]);
    } else if (s[i] === "{") {
      flag = true;
    } else if (s[i] === "}") {
      strArr.push(temp);
      temp = [];
      flag = false;
    } else {
      temp.push(s[i]);
    }
  }
  const res = [],
    n = strArr.length;
  function backtrack(str, idx) {
    if (str.length === n) {
      res.push(str);
      return;
    }

    for (let i = idx; i < n; i++) {
      if (typeof strArr[i] === "string") backtrack(str + strArr[i], i + 1);
      else {
        for (const oStr of strArr[i]) {
          backtrack(str + oStr, i + 1);
        }
      }
    }
  }
  backtrack("", 0);
  return res.sort();
};
