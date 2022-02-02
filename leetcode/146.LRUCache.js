var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.keys = 0;
  this.updateStack = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  return this.cache[key] ? this.cache[key] : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.cache[key] = value;
    this.updateStack.push(key);
  } else {
    if (this.keys === this.capacity) {
      const getNode = this.updateStack.shift();
    } else {
      this.keys += 1;
      this.cache[key] = value;
      this.updateStack.push(key);
    }
  }
};
