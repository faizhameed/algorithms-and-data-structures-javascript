/**
 * @param {number} length
 */
var SnapshotArray1 = function (length) {
  this.arr = [];
  this.snapCount = 0;
  this.snapMap = new Map(); // id -> array
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray1.prototype.set = function (index, val) {
  this.arr[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray1.prototype.snap = function () {
  this.snapCount++;
  let snap_id = this.snapCount - 1;
  let snapshot = [...this.arr]; // make a copy of the snapshot
  this.snapMap.set(snap_id, snapshot);
  return snap_id;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray1.prototype.get = function (index, snap_id) {
  return this.snapMap.get(snap_id)[index]
    ? this.snapMap.get(snap_id)[index]
    : null;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

/* Alternative method */

/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.arr = new Array(length).fill(null).map(() => []);
  this.snap_id = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.arr[index].push([this.snap_id, val]);
};

SnapshotArray.prototype.snap = function () {
  this.snap_id++;
  return this.snap_id - 1;
};

SnapshotArray.prototype.get = function (index, snap_id) {
  // understand this
  const element = this.arr[index];
  let left = 0,
    right = element.length - 1,
    mid,
    id = -1;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (element[mid][0] <= snap_id) {
      id = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return id === -1 ? 0 : element[id][1];
};
