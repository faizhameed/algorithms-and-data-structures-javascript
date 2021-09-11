/* Until ")" of stringS appears, always push s[i] into stack, when ")" appears, pop stack into temp until the last index of stack is "("
and reverse temp and then start counting.
some of cases like "-1+2" or "5+(+1+2)", will additional push zero into stack, like "0-1+2", "5+(0+1+2)" */

var calculate = function (s) {
  s = "(" + s + ")";
  let stack = [];
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] === ")") {
      while (stack[stack.length - 1] !== "(") temp.push(stack.pop());
      stack.pop();
      stack.push(count(temp));
      continue;
    }
    if (isNum(stack[stack.length - 1]) && isNum(s[i])) {
      stack[stack.length - 1] += s[i];
      continue;
    }
    if (s[i] === "-" || s[i] === "+") {
      if (stack.length === 0 || stack[stack.length - 1] === "(")
        stack.push("0");
    }
    stack.push(s[i]);
  }
  return stack[0];
};

function count(temp) {
  temp = temp.reverse();
  while (temp.length !== 1) {
    if (temp[1] === "+") temp[0] = +temp[0] + +temp[2];
    if (temp[1] === "-") temp[0] = +temp[0] - +temp[2];
    temp.splice(1, 2);
  }
  return temp.pop();
}

function isNum(str) {
  return /[0-9]+/.test(str);
}
const str = "(-3+3+546+2-(4+(3-2)))";

console.log(calculate(str));
