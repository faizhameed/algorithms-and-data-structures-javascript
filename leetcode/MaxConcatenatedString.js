var maxLength = function (arr) {
  const res = [];

  const maxL = Math.pow(2, arr.length);

  for (let i = 0; i < maxL; i++) {
    let temp = "";
    for (let j = 0; j < arr.length; j++) {
      const btWise = i & Math.pow(2, j);
      if (btWise) {
        temp += arr[j];
      }
    }
    if (temp !== "" && isUnique(temp)) {
      res.push(temp);
    }
  }
  return res.reduce((a, i) => {
    return Math.max(a, i.length);
  }, 0);
};

function isUnique(char) {
  return new Set(char).size === char.length;
}
/* Optimised solution */
var maxLength = function (arr) {
  // Initialize results with an empty string
  // from which to build all future results
  let results = [""];
  let best = 0;
  for (let word of arr) {
    // We only want to iterate through results
    // that existed prior to this loop
    let resultsLen = results.length;
    for (let i = 0; i < resultsLen; i++) {
      // Form a new result combination and
      // use a set to check for duplicate characters
      let newRes = results[i] + word,
        newResSet = new Set(newRes.split(""));
      if (newRes.length !== newResSet.size) continue;

      // Add valid options to results and
      // keep track of the longest so far
      results.push(newRes);
      best = Math.max(best, newRes.length);
    }
  }
  return best;
};

console.log(maxLength(["un", "iq", "ue"]));
