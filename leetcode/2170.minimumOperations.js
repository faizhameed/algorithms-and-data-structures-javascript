var minimumOperations = function (nums) {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[0] === nums[1] ? 1 : 0;
  let allSame = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      allSame = false;
      break;
    }
  }
  if (allSame) return Math.floor(nums.length / 2);
  let opr = 0;
  let oddRep = {},
    evenRep = {},
    maxOdd = -Infinity,
    secOdd = -Infinity,
    maxEven = -Infinity,
    secEven = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      if (evenRep[nums[i]]) {
        evenRep[nums[i]] += 1;
      } else {
        evenRep[nums[i]] = 1;
      }
    } else {
      if (oddRep[nums[i]]) {
        oddRep[nums[i]] += 1;
      } else {
        oddRep[nums[i]] = 1;
      }
    }
  }
  for (const [key, value] of Object.entries(evenRep)) {
    if (!evenRep[maxEven] || evenRep[maxEven] <= value) {
      secEven = Number(maxEven);
      maxEven = Number(key);
    } else if (!evenRep[secEven] || value >= evenRep[secEven]) {
      secEven = Number(key);
    }
  }

  for (const [key, value] of Object.entries(oddRep)) {
    if (!oddRep[maxOdd] || oddRep[maxOdd] <= value) {
      secOdd = Number(maxOdd);
      maxOdd = Number(key);
    } else if (!oddRep[secOdd] || value >= oddRep[secOdd]) {
      secOdd = Number(key);
    }
  }
  if (maxEven === maxOdd) {
    // check which is repeating the most
    if (secEven === -Infinity) {
      maxOdd = secOdd;
    } else if (secOdd === -Infinity) {
      maxEven = secEven;
    } else if (evenRep[maxEven] >= oddRep[maxOdd]) {
      // select the 2nd of maxOdd
      if (maxOdd !== secOdd) {
        maxOdd = secOdd;
      } else {
        maxEven = secEven;
      }
    } else {
      if (maxEven !== secEven) {
        maxEven = secEven;
      } else {
        maxOdd = secOdd;
      }
    }
  }
  // we have max odd and even

  console.log(maxEven, maxOdd);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      if (maxEven !== nums[i]) {
        console.log("even", maxEven, "!", nums[i], i);
        opr++;
      }
    } else {
      if (maxOdd !== nums[i]) {
        console.log("odd", maxOdd, "!", nums[i], i);
        opr++;
      }
    }
  }
  return opr;
};

const nums = [3, 3, 3, 4, 3, 3, 3];

console.log(minimumOperations(nums));
