var minDifficulty = function (jobDifficulty, d) {
  let hardestJob = 0;
  const n = jobDifficulty.length;
  if (n < d) {
    return -1;
  }
  const hardestRemaining = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    hardestJob = Math.max(hardestJob, jobDifficulty[i]);
    hardestRemaining[i] = hardestJob;
  }
  const memo = new Array(n).fill(0).map(() => new Array(d + 1).fill(null));
  return dp(0, 1);
  function dp(i, day) {
    if (d === day) {
      //base case
      return hardestRemaining[i];
    }

    if (memo[i][day] === null) {
      let best = Infinity;
      let hardest = 0;
      for (let j = i; j < n - (d - day); j++) {
        //n-(d-day) gives remaining elements to keep
        hardest = Math.max(hardest, jobDifficulty[j]);
        best = Math.min(best, hardest + dp(j + 1, day + 1));
      }
      memo[i][day] = best;
    }
    return memo[i][day];
  }
};

const jobDifficulty = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
d = 10;
console.log(minDifficulty(jobDifficulty, d));
