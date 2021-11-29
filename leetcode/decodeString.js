var decodeString = function (s) {
  const stack = [];
  let isStore = false,
    temp = [],
    decoded = "";
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === "]") {
      let temp = "",
        popped = "";
      while (popped !== "]") {
        popped = stack.pop();
        temp += popped;
      }
      const mult = stack.pop();
      for (let i = 1; i <= mult; i++) {
        decoded += temp;
      }
      decoded = decoded.split("").reverse().join("");
    }
  }
};

console.log(decodeString("3[a]2[bc]"));
