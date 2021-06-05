/* PARENT of a value: math.floor((idx-1)/2)
    right: idx*2 +1
    left: idx*2 +2
*/

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }
}
