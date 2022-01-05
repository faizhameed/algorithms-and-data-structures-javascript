/* https://leetcode.com/problems/longest-repeating-character-replacement/ */

function characterReplacementBrute(s, k) {
  let max = 1,
    locked;
  for (let i = 0; i < s.length; i++) {
    const newStr = s.split("");
    let hi = i + 1,
      lo = i - 1;
    temp = k;
    locked = s[i];
    while (hi < newStr.length) {
      if (locked !== newStr[hi]) {
        if (temp > 0) {
          newStr[hi] = locked;
          temp--;
        } else {
          // we break since no more charcter change can be done
          break;
        }
      }
      hi++;
    }
    while (lo >= 0) {
      if (locked !== newStr[lo]) {
        if (temp > 0) {
          newStr[lo] = locked;
          temp--;
        } else {
          // we break since no more charcter change can be done
          break;
        }
      }
      lo--;
    }
    console.log(newStr.join(""));

    max = Math.max(max, findLongestSubstring(newStr.join("")));
  }
  return max;
}

function findLongestSubstring(str) {
  let count = 0,
    pre = null,
    currCount = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if (count === 0) {
      count++;
      currCount = 1;
      pre = curr;
      continue;
    }
    if (curr !== pre) {
      count = Math.max(currCount, count);
      currCount = 1;
      pre = curr;
      continue;
    }
    currCount++;
  }
  return Math.max(count, currCount);
}

const s = "ABBB",
  k = 2;

/* Alternate Best  */

function characterReplacement(s, k) {
  let left = 0,
    right = 0,
    maxFreq = 0;
  const visitied = {};
  while (right < s.length) {
    visitied[s[right]] = visitied[s[right]] ? visitied[s[right]] + 1 : 1;

    maxFreq = Math.max(maxFreq, visitied[s[right]]);
    if (right - left + 1 - maxFreq > k) {
      visitied[s[left]]--;
      left++;
    }
    right++;
  }
  return right - left;
}

console.log(characterReplacement(s, k));
