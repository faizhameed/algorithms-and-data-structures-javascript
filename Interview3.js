let string = "angisgfde";

console.log(string.split("").sort().join(""));

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}
