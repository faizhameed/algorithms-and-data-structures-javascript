/* https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/ */
const minRemoveToMakeValid = (str) => {
  const valid = str.split("");
  let stack = [];
  for (let i = 0; i < valid.length; i++) {
    if (valid[i] === "(") {
      stack.push(i);
    } else if (valid[i] === ")") {
      //check if there is something in the stack
      if (stack.length > 0) {
        stack.pop();
      } else {
        //if nothing is there is stack then this should be removed
        valid.splice(i, 1);
        //as we removed we need to continue from the same location
        i--;
      }
    }
  }
  while (stack.length > 0) {
    valid.splice(stack.pop(), 1);
  }

  return valid.join("");
};

/* From course */
const minRemoveToMakeValid2 = function (str) {
  const res = str.split("");
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = "";
  }

  return res.join("");
};

console.log(minRemoveToMakeValid("sa)abc"));
