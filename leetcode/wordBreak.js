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

const s = "leetcode",
  wordDict = ["leet", "code"];
// output true

//  optimized solution
const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);

  // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
  // After 'cats' and 'ca', it will become 'andog', 'tsandog'
  // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
  const visited = new Set(); // to avoid checking the same rest of the string if its not there
  const q = [0];

  while (q.length) {
    const start = q.shift();

    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
};

var wordBreakTop = function (s, wordDict) {
  // if there is no word that is available in s return false
  const dp = new Array(s.length).fill(-1);
  function helper(i) {
    if (i < 0) return true;

    if (dp[i] === -1) {
      for (const word of wordDict) {
        if (i >= word.length - 1 && helper(i - word.length)) {
          const curr = s.substring(i - word.length + 1, i + 1);
          if (curr === word) {
            dp[i] = 1;
            break;
          }
        }
      }
      if (dp[i] === -1) {
        dp[i] = 0;
      }
    }
    return dp[i] === 1;
  }

  return helper(s.length - 1);
};
console.log(wordBreakTop(s, wordDict));
