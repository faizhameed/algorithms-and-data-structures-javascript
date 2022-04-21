MyHashSet.prototype.add = function (key) {
  this.hashMap.set(key, true);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.hashMap.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hashMap.has(key);
};
