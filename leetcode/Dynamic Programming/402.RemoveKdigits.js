var removeKdigits = function (num, k) {
  if (num.length === k) {
    return "0";
  }
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    const f = num[i];
    while (stack.length && stack[stack.length - 1] > f && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(f);
  }

  for (let i = 0; i < k; i++) {
    stack.pop();
  }
  stack.reverse();
  for (let i = stack.length - 1; i > 0; i--) {
    if (stack[i] !== "0") {
      break;
    }
    stack.pop();
  }
  stack.reverse();
  return stack.join("");
};
