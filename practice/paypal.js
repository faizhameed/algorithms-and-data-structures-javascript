function stringRepeat(s, n) {
  if (n === 1) {
    return s;
  }
  if (n % 2 === 0) {
    return stringRepeat(s + s, n / 2);
  } else {
    return stringRepeat(s + s, (n - 1) / 2) + s;
  }
}

console.log(stringRepeat("f", 100).length);
