/* 
"xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt"
"zyxyxwxwvwvuvuvututstststrqrqpqpopononmnmlmkjkigigifededededcbaba"
"zyxyxwxwvwvuvuvututstrtrtqpqpqponononmlmkmkjigifiededededcbaba"

*/
var repeatLimitedString = function (s, repeatLimit) {
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
  let res = "";
  for (let i = 0; i < ordered.length; i++) {
    const str = ordered[i];
    let repeat = repeatLimit;
    while (map[str] > 0 && repeat > 0) {
      res += str;
      repeat--;
      map[str] -= 1;
      if (map[str] > 0 && repeat === 0) {
        let j = nextValue(i);

        if (j < ordered.length - 1 && map[ordered[j + 1]] > 0) {
          res += ordered[j + 1];
          repeat = repeatLimit;
          map[ordered[j + 1]] -= 1;
        }
      }
    }
  }

  function nextValue(index) {
    while (index < ordered.length - 1 && map[ordered[index + 1]] === 0) {
      // use priorityqueue to find the next largest instead of this loop
      index++;
    }
    return index;
  }
  return res;
};

const s = "xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt";
const repeatLimit = 1;

console.log(repeatLimitedString(s, repeatLimit));
