function checkMagazine(magazine, note) {
  let map = {},
    flag = true;
  magazine.forEach((item) => {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item]++;
    }
  });
  note.forEach((item) => {
    if (map[item] > 0) {
      map[item]--;
    } else {
      flag = false;
    }
  });
  flag ? console.log("Yes") : console.log("No");
}
