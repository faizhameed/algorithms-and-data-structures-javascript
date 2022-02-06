var Bitset = function (size) {
  this.size = size;
  this.bit = new Array(size).fill(0);
  this.ones = 0;
  this.flipCount = 0;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  let curTrue = 1,
    curFalse = 0;
  if (this.flipCount % 2 === 1) {
    curTrue = 0;
    curFalse = 1;
  }
  if (this.bit[idx] === curFalse) {
    this.ones += 1;
  }
  this.bit[idx] = curTrue;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  let curTrue = 1,
    curFalse = 0;
  if (this.flipCount % 2 === 1) {
    curTrue = 0;
    curFalse = 1;
  }
  if (this.bit[idx] === curTrue) {
    this.ones -= 1;
  }
  this.bit[idx] = curFalse;
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  this.ones = this.size - this.ones;
  this.flipCount += 1;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  return this.ones === this.size;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  return this.ones >= 1;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  return this.ones;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  let str = "";
  for (const val of this.bit) {
    str += this.flipCount % 2 === 0 ? val : val === 1 ? 0 : 1;
  }
  return str;
};
