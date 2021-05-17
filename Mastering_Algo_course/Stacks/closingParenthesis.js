function checkClosingParenthesis(strVal) {
  const parenthesisTypes = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];

  if (strVal === "") {
    return true;
  }

  for (let i = 0; i < strVal.length; i++) {
    const br = strVal[i];
    if (parenthesisTypes[br]) {
      stack.push(br);
    } else {
      const str = stack.pop();
      if (parenthesisTypes[str] !== br) return false;
    }
  }
  return stack.length === 0;
}

console.log(checkClosingParenthesis("{}}[]"));
