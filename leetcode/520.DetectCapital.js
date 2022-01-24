var detectCapitalUse = function (word) {
  //
  if (word.toLowerCase() === word || word.toUpperCase() === word) {
    return true;
  }
  if (word.charAt(0) === word.charAt(0).toUpperCase()) {
    // now check if the rest are lowercase
    const rest = [...word.split("").slice(1)].join("");

    if (rest === rest.toLowerCase()) {
      return true;
    }
  }
  return false;
};

// simple solution

function detectCapitalUse2(word) {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substring(1).toLowerCase()
  );
}

const word = "usa";

console.log(detectCapitalUse2(word));
