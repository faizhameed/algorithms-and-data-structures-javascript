var isValid = function (s) {
  const stack = [];
  const bracketPair = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === "(" || curr === "[" || curr === "{") {
      stack.push(curr);
      continue;
    }
    if (curr === ")" || curr == "}" || curr == "]") {
      const stackItem = stack.pop();
      if (bracketPair[stackItem] !== curr) return false;
    }
  }
  return stack.length === 0;
};

const str1 = "(())}}}";
const str2 = "(())";
const str3 = "]";

console.log(isValid(str2));
