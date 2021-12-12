var SparseVector = function (nums) {
  this.map = new Map();
  this.length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.map.set(i, nums[i]);
    }
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;
  for (let i = 0; i < vec.length; i++) {
    if (this.map.has(i) && vec.map.has(i)) {
      sum += vec.map.get(i) * this.map.get(i);
    }
  }
  return sum;
};
const nums1 = [1, 0, 0, 2, 3],
  nums2 = [0, 3, 0, 4, 0];
// Your SparseVector object will be instantiated and called as such:
let v1 = new SparseVector(nums1);
let v2 = new SparseVector(nums2);
let ans = v1.dotProduct(v2);

console.log(ans);
