/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }
  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.cache.delete(key);
  this.cache.set(key, value);
  if (this.capacity < this.cache.size) {
    const toDelete = this.cache.keys().next().value;
    this.cache.delete(toDelete);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
