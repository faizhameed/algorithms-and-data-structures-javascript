// check if the target string has only one edit insert, delete or replace
function oneAway(s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }
  let first = s1.length < s2.length ? s1 : s2;
  let foundDifference = false;
  let second = s1.length < s2.length ? s2 : s1;
  let firstIndex = 0,
    secondIndex = 0;
  while (firstIndex < first.length && secondIndex < second.length) {
    if (first[firstIndex] != second[secondIndex]) {
      if (foundDifference) return false;
      foundDifference = true;
      if (first.length == second.length) {
        firstIndex++;
      }
    } else {
      firstIndex++;
    }

    secondIndex++;
  }
  return true;
}

console.log(oneAway("Faiz", "fa2iz")); //false
console.log(oneAway("Faiz", "Saiz")); // true
