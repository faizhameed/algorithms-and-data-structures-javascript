/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  */

/* Brute force method */

var groupAnagrams = function (strs) {
  const res = [[strs[0]]];
  let i = 1;

  while (i < strs.length) {
    let flag = false;
    for (let j = 0; j < res.length; j++) {
      if (checkIfSub(strs[i], res[j][0])) {
        res[j].push(strs[i]);
        flag = true;
        break;
      }
      //if its not true we check for the next value and if none is true then we should
      // create a new value in res array
    }
    if (!flag) {
      res.push([strs[i]]);
    }
    i++;
  }
  return res;
};

function checkIfSub(str, target) {
  if (str.length !== target.length) return false;
  const strArr = str.split("").sort();
  const targetArr = target.split("").sort();
  return strArr.join("") === targetArr.join("");
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));

var groupAnagramsOptimized = function (strs) {
  const map = {};
  let i = 0;

  while (i < strs.length) {
    const sortedStr = strs[i].split("").sort().join("");
    if (map[sortedStr]) {
      map[sortedStr].push(strs[i]);
    } else {
      map[sortedStr] = [strs[i]];
    }
    i++;
  }
  const res = Object.keys(map).map((key) => [...map[key]]);
  return res;
};

console.log(groupAnagramsOptimized(strs));
