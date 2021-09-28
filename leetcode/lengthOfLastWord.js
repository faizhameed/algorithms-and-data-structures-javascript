var lengthOfLastWord = function (s) {
  if (!s || !s.length) {
    return 0;
  }
  s = s.split(" ");
  s = s.filter((s) => s !== "");
  return s[s.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
