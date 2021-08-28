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
  const seen = {};
  while (right < s.length) {
    if (seen[s[right]] >= 0 && seen[s[right]] >= left) {
      // and is this before left?
      left = seen[s[right]] + 1; // now we can ignore everything that was before
    }
    seen[s[right]] = right;
    longest = Math.max(right - left + 1, longest);
    right++;
  }
  return longest;
};

console.log(lengthOfLongestSubstringOptimized("ab"));
