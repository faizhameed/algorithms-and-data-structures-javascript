var numDecodings = function (s) {
  const Map = {};
  return recursiveMemo(0, s, Map);
};

function recursiveMemo(index, s, Map) {
  if (Map[index]) {
    return Map[index];
  }
  if (index === s.length) {
    return 1;
  }
  if (s[index] === "0") {
    return 0;
  }
  if (index === s.length - 1) {
    return 1;
  }

  let ans = recursiveMemo(index + 1, s, Map);
  if (parseInt(s.substring(index, index + 2)) <= 26) {
    ans += recursiveMemo(index + 2, s, Map);
  }

  Map[index] = ans;
  return ans;
}

/* iterative Approach */

const iterNumDecoding = (s) => {
  if (s[0] === "0") return 0;

  let one_back = 1,
    two_back = 1;

  let i = 1;
  while (i < s.length) {
    let current = 0;
    if (s[i] !== "0") {
      current = one_back;
    }
    let two_digit = parseInt(s.substring(i - 1, i + 1));
    if (two_digit >= 10 && two_digit <= 26) {
      current += two_back;
    }
    two_back = one_back;
    one_back = current;
  }
  return one_back;
};

console.log(numDecodings("2125"));
