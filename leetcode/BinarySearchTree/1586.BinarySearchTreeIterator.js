var BSTIterator = function (root) {
  this.arr = [];
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    this.arr.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  this.index = -1;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.arr.length > this.index + 1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.index += 1;
  return this.arr[this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function () {
  return this.index - 1 >= 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function () {
  this.index -= 1;
  return this.arr[this.index];
};
