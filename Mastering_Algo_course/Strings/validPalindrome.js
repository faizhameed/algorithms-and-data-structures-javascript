const isPalindrome = function (s) {
  const clean_str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (
    let i = 0, j = clean_str.length - 1;
    j >= (clean_str.length - 1) / 2;
    j--, i++
  ) {
    if (clean_str[i] !== clean_str[j]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
