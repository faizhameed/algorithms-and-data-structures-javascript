const decodeString = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let curr = stack.pop();
    let str = "";
    while (curr !== "[") {
      str = curr + str;
      curr = stack.pop();
    }
    let num = "";
    curr = stack.pop();

    while (!isNaN(Number(curr))) {
      /*
       * if this is a number for example '3' then we run while loop once else if it was '23' we run while loop twice
       * first num=3, num becomes 23
       */
      num = curr + num;
      curr = stack.pop();
    }
    stack.push(curr);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
};

console.log(decodeString("2[ab2[d]]"));
