var capitalizeTitle = function (title) {
  const words = title.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 2) {
      words[i] = [
        ...word[0].toUpperCase(),
        ...word.split("").slice(1).join("").toLowerCase(),
      ].join("");
    } else {
      words[i] = word.toLowerCase();
    }
  }
  return words.join(" ");
};
