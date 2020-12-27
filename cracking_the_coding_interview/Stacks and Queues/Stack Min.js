// here we create a two stacks one for storing the values and the other to keep
// track of the min value

let stack = [];
let minStack = [];

function add(value) {
  if (minStack.length === 0 || value < minStack[minStack.length - 1]) {
    minStack.push(value);
  }
  stack.push(value);
}

function remove() {
  if (stack.length === 0) {
    return;
  }
  const value = stack.pop();
  if (value === minStack[minStack.length - 1]) {
    minStack.pop();
  }
  return value;
}

function min() {
  return minStack[minStack.length - 1];
}

add(34);

add(5);
remove();

add(6);

add(45);

console.log(min());
