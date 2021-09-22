var maxLength = function (arr) {
  const res = [];

  const maxL = Math.pow(2, arr.length);

  for (let i = 0; i < maxL; i++) {
    let temp = "";
    for (let j = 0; j < arr.length; j++) {
      const btWise = i & Math.pow(2, j);
      if (btWise) {
        temp += arr[j];
      }
    }
    if (temp !== "" && isUnique(temp)) {
      res.push(temp);
    }
  }
  return res.reduce((a, i) => {
    return Math.max(a, i.length);
  }, 0);
};
function isUnique(char) {
  return new Set(char).size === char.length;
}
console.log(maxLength(["un", "iq", "ue"]));
