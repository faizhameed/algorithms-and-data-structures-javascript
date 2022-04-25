var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.peeked = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.peeked) return this.peeked;
  this.peeked = this.iterator.next();
  return this.peeked;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (!this.peeked) return this.iterator.next();
  const temp = this.peeked;
  this.peeked = null;
  return temp;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  if (this.peeked) return true;
  return this.iterator.hasNext();
};
