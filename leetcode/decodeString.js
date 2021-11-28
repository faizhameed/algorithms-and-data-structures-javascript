var decodeString = function (s) {
  let stack = [],
    isStore = false,
    temp = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  while (stack.length) {
    const curr = stack.pop();
    if (curr === "]") {
      isStore = true;
      continue;
    }
    if (isStore) {
      temp.push(curr);
    }
  }
};

console.log(decodeString("3[a]2[bc]"));
