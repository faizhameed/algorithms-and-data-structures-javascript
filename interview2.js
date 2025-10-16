function getA() {
  return "A";
}
function getB(callback) {
  setTimeout(() => {
    callback("B");
  }, 1000);
}

function getC() {
  return Promise.resolve().then(() => "C");
}

async function getABC() {
  return Promise.all([getA(), new Promise((resolve) => getB(resolve)), getC()]);
}

getABC().then((result) => console.log(result));
// expected output [ 'A', 'B', 'C' ]

// Some other examples

// Example 1
Promise.resolve(getA())
  .then((result) => console.log(result))
  .then(() => {
    return new Promise((resolve) => getB(resolve));
  })
  .then((result) => console.log(result))
  .then(() => {
    return getC();
  })
  .then((result) => console.log(result));
