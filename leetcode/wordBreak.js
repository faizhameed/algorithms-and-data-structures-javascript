/* 
139 Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into 
a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation. */
// Brute force solution
function wordBreakBrute(s, wordDict, curr = "") {
  /* 
     any unavailable word in dictionary -> return false
     any unavailable word in string is not a problem as long as dictionary words combine to form the string
     back tracking
    */
  //   console.log(curr.join(""));
  console.log(curr);
  if (s === curr) {
    return true;
  }
  const len = curr.length;
  if (s.length <= len) {
    return false;
  }
  for (let i = 0; i < wordDict.length; i++) {
    if (wordBreak(s, wordDict, curr.concat(wordDict[i]))) {
      return true;
    }
  }
  return false;
}

const s = "applepenapple",
  wordDict = ["apple", "pen"];
// output true

//  optimized solution

function wordBreak(s, wordDict, curr = "") {
  if (s === curr) {
    return true;
  }
  const len = curr.length;
  if (s.length <= len) {
    return false;
  }
  for (let i = 0; i < wordDict.length; i++) {
    if (wordBreak(s, wordDict, curr.concat(wordDict[i]))) {
      return true;
    }
  }
  return false;
}

console.log(wordBreak(s, wordDict));
