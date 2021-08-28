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

console.log(lengthOfLongestSubstring("ffbcdce"));
