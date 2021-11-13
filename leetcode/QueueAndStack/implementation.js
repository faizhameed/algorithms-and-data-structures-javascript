class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  getTop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.top;
  }

  add(item) {
    this.top = item;
    this.items.push(item);
  }

  remove() {
    if (!this.isEmpty()) {
      const removed = this.items.pop();
      if (this.isEmpty()) {
        this.top = null;
      } else {
        this.top = this.items(this.items.length - 1);
      }
      return removed;
    }
    return null;
  }
}
