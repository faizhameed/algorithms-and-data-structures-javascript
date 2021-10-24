var nextBeautifulNumber = function (n) {
  let ans = n + 1;

  while (true) {
    const len = String(ans).length;
    if (len === 1 && ans !== 1) {
      return 22;
    }
    if (!isValid(ans)) {
      ans++;
      continue;
    }
    break;
  }
  return ans;

  function isValid(ans) {
    const strAns = String(ans).split("");
    for (let i = 0; i < strAns.length; i++) {
      if (
        parseInt(strAns[i]) !==
        strAns.reduce((a, v) => (v === strAns[i] ? a + 1 : a), 0)
      ) {
        return false;
      }
    }
    return true;
  }
};
