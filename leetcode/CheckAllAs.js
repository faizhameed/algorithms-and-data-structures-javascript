var checkString = function (s) {
  let found = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      found = true;
    }
    if (s[i] === "a" && found) {
      return false;
    }
  }
  return true;
};

console.log(checkString("abbbbba"));
