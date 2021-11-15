/* Moving averages */

function Node(val) {
  return {
    next: null,
    val,
  };
}
var MovingAverage = function (size) {
  this.size = size;
  this.length = 0;
  this.head = null;
  this.tail = null;
  this.currentSum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  const newNode = new Node(val);
  this.currentSum += val;
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  }
  if (this.size === this.length) {
    this.currentSum -= this.head.val;
    this.head = this.head.next;
  } else {
    this.length++;
  }
  this.tail.next = newNode;
  this.tail = this.tail.next;
  return this.currentSum / this.length;
};
