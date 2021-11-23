class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.low = null;
  }

  pop() {
    if (this.stack.length) {
      const elem = this.stack.pop();
      if (this.minStack[this.minStack.length - 1] === elem) {
        this.minStack.pop();
      }
    }

    return null;
  }

  push(val) {
    this.stack.push(val);
    if (
      !this.minStack.length ||
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
  }
  top() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }
  getMin() {
    if (!this.minStack.length) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

const kbj = new MinStack();

kbj.push(0);
kbj.push(1);
kbj.push(2);
kbj.push(-1);
console.log(kbj.getMin());
kbj.push(4);
kbj.pop();
kbj.pop();
console.log(kbj.getMin());
