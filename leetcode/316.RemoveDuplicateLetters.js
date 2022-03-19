function removeDuplicate(s) {
  const stack = [];
  const countObj = {},
    isInStack = {};
  for (const l of s) {
    if (!countObj[l]) {
      countObj[l] = 0;
    }
    countObj[l] += 1;
  }
  for (const l of s) {
    countObj[l] -= 1;
    if (isInStack[l]) {
      continue;
    }

    let stackTop = stack[stack.length - 1];

    while (l < stackTop && countObj[stackTop] > 0) {
      isInStack[stack.pop()] = false;
      stackTop = stack[stack.length - 1];
    }
    isInStack[l] = true;
    stack.push(l);
  }
  return stack.join("");
}

console.log(removeDuplicate("bbacdcb"));
