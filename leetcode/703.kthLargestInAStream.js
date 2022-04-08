var KthLargest = function (k, nums) {
  this.items = [...nums.sort((a, b) => b - a)];
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.items.push(val);
  this.items.sort((a, b) => b - a);
  return this.items[this.k - 1];
};
