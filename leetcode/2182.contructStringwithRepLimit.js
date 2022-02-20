/* 
"xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt"
"zyxyxwxwvwvuvuvututstststrqrqpqpopononmnmlmkjkigigifededededcbaba"
"zyxyxwxwvwvuvuvututstrtrtqpqpqponononmlmkmkjigifiededededcbaba"

*/
var repeatLimitedString = function (s, repeatLimit) {
  console.log(s.length);
  const map = {};
  for (const ch of s) {
    map[ch] = map[ch] ? (map[ch] += 1) : (map[ch] = 1);
  }
  const set = new Set(s);
  const ordered = [...set.keys()].sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
  //   console.log(set, ordered, map);
  let res = "";
  for (let i = 0; i < ordered.length; i++) {
    const str = ordered[i];
    let repeat = repeatLimit;
    while (map[str] > 0 && repeat > 0) {
      res += str;
      repeat--;
      map[str] -= 1;
      if (map[str] > 0 && repeat === 0) {
        let j = i;
        while (j < ordered.length - 1 && map[ordered[j + 1]] === 0) {
          j++;
        }
        // console.log(map, i, ordered);
        if (j < ordered.length - 1 && map[ordered[j + 1]] > 0) {
          res += ordered[j + 1];
          repeat = repeatLimit;
          map[ordered[j + 1]] -= 1;
        }
      }
    }
  }
  console.log(res.length);
  return res;
};

const s = "xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt";
const repeatLimit = 1;

console.log(repeatLimitedString(s, repeatLimit));
