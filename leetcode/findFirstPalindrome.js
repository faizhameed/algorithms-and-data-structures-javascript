var firstPalindrome = function (words) {
  function isPalindrome(str) {
    let i = 0,
      j = str.length - 1;
    while (i <= j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
};
