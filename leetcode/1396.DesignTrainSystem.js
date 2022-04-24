UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.train.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, end, t) {
  const [start, s] = this.train.get(id);
  const key = [start, end].join();
  if (this.avg.has(key)) {
    let [avg, cnt] = this.avg.get(key);
    this.avg.set(key, [avg * (cnt / ++cnt) + (t - s) / cnt, cnt]);
  } else {
    this.avg.set(key, [t - s, 1]);
  }

  this.train.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (start, end) {
  return this.avg.get([start, end].join())[0];
};
