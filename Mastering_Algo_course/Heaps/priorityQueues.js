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
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  _leftChild(idx) {
    return idx * 2 + 1;
  }
  _rightChild(idx) {
    return idx * 2 + 2;
  }
  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }
  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  insert(val) {
    this._heap.push(val);
    // check if the parent is larger
    let currentPos = this.size() - 1;
    let parentPos = this._parent(currentPos);
    while (currentPos > 0 && this._heap[parentPos] < val) {
      // swap the position
      this._swap(this._heap[parentPos], this._heap[currentPos]);
      // set the new parent position and current pos
      currentPos = parentPos;
      parentPos = this._parent(currentPos);
    }
    return currentPos;
  }

  delete() {
    // the elements with highest priority is removed first and the last element is replaced in its place
    if (this.size() > 1) {
      let swapVal = this._heap.pop();
      const removedVal = this._heap[0];
      this._heap[0] = swapVal;
      let currentPos = 0;
      let leftChild = this._heap[this._leftChild(currentPos)];
      let rightChild = this._heap[this._rightChild(currentPos)];
      while (
        (this._leftChild(currentPos) < this.size() &&
          this._heap[currentPos] < leftChild) ||
        (this._rightChild(currentPos) < this.size() &&
          this._heap[currentPos] < rightChild)
      ) {
        const greatestValIdx =
          this._rightChild(currentPos) < this.size() &&
          this._comparator(rightChild, leftChild)
            ? this._rightChild(currentPos)
            : this._leftChild(currentPos);
        this._swap(this._heap(greatestValIdx), currentPos);
        currentPos = greatestValIdx;
        leftChild = this._heap[this._leftChild(currentPos)];
        rightChild = this._heap[this._rightChild(currentPos)];
      }
      return [this._heap, removedVal];
    }
  }
}
