const isStringRotation = (s1, s2) => {
  if (s1.length !== s2.length && s1.length > 0) return false;
  return (s1 + s1).includes(s2);
};

console.log(isStringRotation("daiz", "izad"));
console.log(isStringRotation("daiz", "izda"));
