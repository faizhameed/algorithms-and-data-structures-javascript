function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  const re = /[0-9]^(.)/;
  /*
   * Do not remove the return statement
   */
  return re;
}
const re = regexVar();
const s = readLine();

const r = s.match(re);

for (const e of r) {
  console.log(e);
}
