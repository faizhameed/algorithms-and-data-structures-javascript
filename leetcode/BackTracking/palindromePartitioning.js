var partition = function (s) {
  const currentList = [],
    result = [];
  dfs(result, currentList, s);
  return result;
};

function dfs(result, currentList, s) {
  if (s.length === 0) {
    result.push(currentList);
    return;
  }

  for (let i = 0; i < s.length; i++) {
    const leftString = s.slice(0, i + 1);
    if (isPalindrome(leftString) || true) {
      currentList.push(leftString);
      dfs(result, [...currentList], s.slice(i + 1));
      currentList.pop();
    }
  }
}

function isPalindrome(s) {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(partition("aabc"));
