var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const curr = tokens[i];
    if (!isNaN(curr)) {
      stack.push(Number(curr));
    } else {
      if (curr === "+") {
        stack[stack.length - 2] += stack[stack.length - 1];
        stack.pop();
      } else if (curr === "-") {
        stack[stack.length - 2] -= stack[stack.length - 1];
        stack.pop();
      } else if (curr === "*") {
        stack[stack.length - 2] *= stack[stack.length - 1];
        stack.pop();
      } else if (curr === "/") {
        stack[stack.length - 2] = division(
          stack[stack.length - 2],
          stack[stack.length - 1]
        );
        stack.pop();
      }
    }
  }
  function division(a, b) {
    return a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b);
  }
  return stack[0];
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
