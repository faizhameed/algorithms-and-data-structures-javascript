class HeapQueue {
  constructor(comparator) {
    this._comparator = comparator;
    this._heap = [];
  }
  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
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
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._shiftUp();

    return this.size();
  }

  _shiftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this.shiftDown();
    return poppedValue;
  }

  shiftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const targetChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(targetChildIdx, nodeIdx);
      nodeIdx = targetChildIdx;
    }
  }
}

/* Actual code  */
var minimumEffortPath = function (heights) {
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const m = heights.length,
    n = heights[0].length;
  const diffMat = new Array(m).fill(0).map(() => new Array(n).fill(Infinity));
  const queue = new HeapQueue((a, b) => a[0] < b[0]); //diff,x,y
  queue.push([0, 0, 0]);
  diffMat[0][0] = 0;
  const seen = new Array(m).fill(0).map(() => new Array(n).fill(false));
  while (!queue.isEmpty()) {
    const [diff, x, y] = queue.pop();
    seen[x][y] = true;
    for (const [dx, dy] of dir) {
      const r = x + dx;
      const c = y + dy;
      if (r >= 0 && c >= 0 && r < m && c < n && !seen[r][c]) {
        const curr_diff = Math.abs(heights[r][c] - heights[x][y]);
        const max_diff = Math.max(curr_diff, diff);
        if (max_diff < diffMat[r][c]) {
          diffMat[r][c] = max_diff;
          queue.push([max_diff, r, c]);
        }
      }
    }
  }
  return diffMat[m - 1][n - 1];
};
