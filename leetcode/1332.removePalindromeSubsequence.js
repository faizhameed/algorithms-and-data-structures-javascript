var removePalindromeSub = function (s) {
  if (s === "") return 0;
  return s.split("").reverse().join("") === s ? 1 : 2;
};
