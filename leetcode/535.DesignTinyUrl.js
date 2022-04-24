const codeDB = new Map(),
  urlDB = new Map();
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function getCode() {
  const code = new Array(6)
    .fill(0)
    .map((_) => chars.charAt(~~(Math.random() * 62)));
  return code.join("");
}
var encode = function (longUrl) {
  if (urlDB.has(longUrl)) return urlDB.get(longUrl);
  let code = getCode();
  while (codeDB.has(code)) {
    code = getCode();
  }
  urlDB.set(longUrl, code);
  codeDB.set(code, longUrl);
  return code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return codeDB.get(shortUrl);
};

const encoded = encode("https://leetcode.com/problems/design-tinyurl");
console.log("http://www.tinyurl.com/" + encoded);

console.log(decode(encoded));
