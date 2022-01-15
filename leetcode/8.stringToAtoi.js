var myAtoi = function (s) {
  let sign = 1,
    result = 0,
    index = 0;

  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  const n = s.length;
  while (index < n && s[index] === " ") {
    index++;
  }

  if (index < n && s[index] === "+") {
    sign = 1;
    index++;
  } else if (index < n && s[index] === "-") {
    sign = -1;
    index++;
  }

  while (index < n && s[index] >= "0" && s[index] <= "9") {
    const digit = Number(s[index]);
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
      return sign == 1 ? INT_MAX : INT_MIN;
    }
    result = 10 * result + digit;
    index++;
  }
  return sign * result;
};
