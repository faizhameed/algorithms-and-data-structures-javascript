var suggestedProducts = function (products, searchWord) {
  const res = [];
  products.sort();
  let lastArr = [...products];
  for (let i = 0; i < searchWord.length; i++) {
    if (i === 0) {
      lastArr = products.filter((v) => v[i] === searchWord[i]);
      res.push(lastArr.slice(0, 3));
    } else {
      lastArr = lastArr.filter((v) => v[i] === searchWord[i]);
      res.push(lastArr.slice(0, 3));
    }
  }
  return res;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  searchWord = "wqwe";

console.log(suggestedProducts(products, searchWord));
