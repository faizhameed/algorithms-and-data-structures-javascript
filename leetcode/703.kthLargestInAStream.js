var KthLargest = function (k, nums) {
  this.items = [...nums.sort((a, b) => b - a)];
  this.k = k;
};

KthLargest.prototype.add = function (val) {
  this.items.push(val);
  this.items.sort((a, b) => b - a);
  return this.items[this.k - 1];
};

// need to write optimized solution for this.

var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  nums.forEach((n) => this.add(n));
};

KthLargest.prototype.add = function (val) {
  if (this.heap.size() < this.k) {
    this.heap.offer(val);
  } else if (this.heap.peek() < val) {
    this.heap.offer(val);
    this.heap.poll();
  }
  return this.heap.peek();
};
