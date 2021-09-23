var breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) {
    return "";
  }
  const n = Math.floor(palindrome.length / 2);
  palindrome = palindrome.split("");
  for (let i = 0; i < n; i++) {
    if (palindrome[i] !== "a") {
      palindrome[i] = "a";
      return palindrome.join("");
    }
  }

  palindrome[palindrome.length - 1] = "b";

  return palindrome.join("");
};
