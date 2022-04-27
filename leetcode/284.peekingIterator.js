var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.peeked = null;
};

PeekingIterator.prototype.peek = function () {
  if (this.peeked) return this.peeked;
  this.peeked = this.iterator.next();
  return this.peeked;
};

PeekingIterator.prototype.next = function () {
  if (!this.peeked) return this.iterator.next();
  const temp = this.peeked;
  this.peeked = null;
  return temp;
};

PeekingIterator.prototype.hasNext = function () {
  if (this.peeked) return true;
  return this.iterator.hasNext();
};
