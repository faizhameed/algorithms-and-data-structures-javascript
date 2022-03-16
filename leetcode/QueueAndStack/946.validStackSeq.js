var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let j = 0;
  for (const x of pushed) {
    stack.push(x);
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0;
};
const pushed = [1, 2, 3, 4, 5],
  popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));
