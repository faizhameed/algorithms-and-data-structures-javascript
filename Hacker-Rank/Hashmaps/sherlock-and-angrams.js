/* Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example s = mom, the list of all anagrammatic pairs is [m, m], [mo, om] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.

Constraints
Length of the input string: 2 ≤ |s| ≤ 100
String s contains only lowercase letters from the range ascii[a-z]. */

function sherlockAndAnagrams(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      result.push(s.slice(i, j));
    }
  }
  console.log(result);
}
