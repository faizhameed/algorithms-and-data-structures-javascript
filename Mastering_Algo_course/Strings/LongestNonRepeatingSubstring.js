//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  if (s.length < 1) {
    return 0;
  }
  let uniqueArr = [],
    maxLength = 1;
  for (let i = 0; i < s.length; i++) {
    if (uniqueArr.includes(s[i])) {
      uniqueArr = uniqueArr.slice(uniqueArr.indexOf(s[i]) + 1);
    }
    uniqueArr.push(s[i]);
    maxLength = Math.max(maxLength, uniqueArr.length);
  }
  return maxLength;
};

var lengthOfLongestSubstringOptimized = function (s) {
  let left = 0,
    right = 0,
    longest = 0;
  const seen = new Map();
  while (right < s.length) {
    currentChar = s[right];
    if (seen.get(currentChar) >= 0 && seen.get(currentChar) >= left) {
      // and is this before left?
      left = seen.get(currentChar) + 1; // now we can ignore everything that was before
    }
    seen.set(currentChar, right);
    longest = Math.max(right - left + 1, longest);
    right++;
  }
  return longest;
};

console.log(lengthOfLongestSubstringOptimized("abcasd"));
