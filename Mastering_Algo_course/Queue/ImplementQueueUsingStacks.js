class QueueWithStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        const temp = this.stack1.pop();
        this.stack2.push(temp);
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length > 0) {
      return this.stack2[this.stack2.length - 1];
    }
    return this.stack1[0];
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
