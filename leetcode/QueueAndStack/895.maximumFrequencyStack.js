// https://leetcode.com/problems/maximum-frequency-stack/submissions/

var FreqStack = function () {
  this.stack = [];
  this.count = new Map();
  this.maxFreq = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  let freq = (this.count.get(val) || 0) + 1;
  this.count.set(val, freq);
  if (this.stack[freq]) this.stack[freq].push(val);
  else this.stack[freq] = [val];
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const mostArr = this.stack[this.stack.length - 1];
  const val = mostArr.pop();
  if (!mostArr.length) {
    // if this becomes empty we pop the stack
    this.stack.pop();
  }
  this.count.set(val, this.count.get(val) - 1);
  return val;
};
