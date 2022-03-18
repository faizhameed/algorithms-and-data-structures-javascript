var scoreOfParentheses = function (s) {
  const stack = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0);
    } else {
      const f = stack.pop();
      const s = stack.pop();

      stack.push(Math.max(f * 2, 1) + s);
    }
  }
  return stack.pop();
};

// alternative bit solution
var scoreOfParentheses = function (s) {
  let ans = 0,
    count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count++;
    else {
      count--;
      if (s[i - 1] === "(") ans += 1 << count;
    }
  }
  return ans;
};
