var minWindowBrute = function (s, t) {
  if (t.length > s.length || !containsAll(s, t)) {
    return "";
  }
  let i = 0,
    j = 0,
    subArray = s;

  while (j < s.length) {
    const curr = s.substring(i, j + 1);
    if (curr.length < t.length || !containsAll(curr, t)) {
      j++;
    } else {
      i++;
      if (subArray.length > curr.length) {
        subArray = curr;
      }
    }
  }
  return subArray;
};

function containsAll(curr, t) {
  const mapTarget = {};
  for (let i = 0; i < t.length; i++) {
    if (mapTarget[t[i]]) {
      mapTarget[t[i]]++;
    } else {
      mapTarget[t[i]] = 1;
    }
  }
  for (let i = 0; i < curr.length; i++) {
    if (mapTarget[curr[i]] && mapTarget[curr[i]] >= 0) {
      mapTarget[curr[i]]--;
    }
  }
  for (const [key, value] of Object.entries(mapTarget)) {
    if (value > 0) {
      return false;
    }
  }
  return true;
}

/* Optimized two pointers approach */

function minWindow(s, t) {
  if (!s.length || !t.length) {
    return "";
  }
  let min = "",
    left = 0,
    right = -1,
    count = 0;
  const map = {};
  t.split("").forEach((v) => {
    if (map[v] === undefined) {
      map[v] = 1;
    } else {
      map[v]++;
    }
  });
  count = Object.keys(map).length;
  while (right <= s.length) {
    if (count === 0) {
      //we found a subString result
      const current = s[left];
      if (map[current] !== null) {
        //we need this for future so
        map[current]++;
      }
      if (map[current] > 0) {
        count++;
        //so now we go to else since count is no longer zero
      }
      const temp = s.substring(left, right + 1);
      if (min === "") {
        min = temp;
      } else {
        min = temp.length < min.length ? temp : min;
      }
      left++;
    } else {
      //this will be the first thing that happens when entering loop
      right++;
      const current = s[right];

      if (map[current] !== null) {
        map[current]--;
      }

      if (map[current] === 0) {
        count--;
      }
    }
  }
  return min;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
