var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const numMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  const res = [];

  function helper(i, s) {
    if (i === digits.length) {
      res.push(s);
      return;
    }
    for (const c of numMap[digits[i] - 2]) {
      helper(i + 1, s + c);
    }
  }
  helper(0, "");
  return res;
};

const digits = "23";

console.log(letterCombinations(digits));
