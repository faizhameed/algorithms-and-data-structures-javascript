/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
  let maxDev = Math.abs(Math.min(...nums) - Math.max(...nums));
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] % 2 === 0) {
      nums[i] /= 2;
    }
  }
  while (true) {
    const currMaxDev = Math.abs(Math.min(...nums) - Math.max(...nums));

    if (currMaxDev > maxDev) {
      break;
    } else {
      maxDev = currMaxDev;
    }

    let min = Math.min(...nums),
      flag = true;
    console.log(min, nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0 && min === nums[i]) {
        nums[i] *= 2;
        flag = false;
      }
    }
    if (flag) break;
  }

  return maxDev;
};

// correct method

function minmizeDeviation(nums) {
  const pq = new MaxPriorityQueue();
  for (const num of nums) {
    if (num % 2 !== 0) {
      pq.enqueue(num * 2);
    }
  }

  let ans = pq.front().element - pq.back().element;
  while (pq.front().element % 2 === 0) {
    pq.enqueue(pq.dequeue().element / 2);
    ans = Math.max(ans, pq.front().element - pq.back().element);
  }
  return ans;
}
