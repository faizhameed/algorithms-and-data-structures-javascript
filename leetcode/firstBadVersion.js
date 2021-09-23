var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  //   return function (n) {
  //     for (let i = 1; i <= n; i++) {
  //       if (isBadVersion(i)) return i;
  //     }
  //   };

  /* Optimized*/

  return function (n) {
    let start = 1;
    let end = n;
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);

      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  };
};
