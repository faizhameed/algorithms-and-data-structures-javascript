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

LRUCache.prototype.show = function () {
  console.log(this.cache);
};
/* ["LRUCache","put","put","get","put","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
 */
const c = new LRUCache(2);
console.log(null);
console.log(c.put(1, 1));
console.log(c.put(2, 2));
console.log(c.get(1));
console.log(c.put(3, 3));
console.log(c.get(2));
console.log(c.put(4, 4));
console.log(c.get(1));
console.log(c.get(3));
console.log(c.get(4));
