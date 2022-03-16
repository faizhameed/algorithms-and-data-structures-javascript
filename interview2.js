function getA() {
  return "A";
}
function getB(callback) {
  setTimeout(() => {
    callback("B");
  }, 10);
}

function getC() {
  return Promise.resolve().then(() => "C");
}

async function getABC() {
  //only make changes here

  const getBModified = (func) => {
    return new Promise((resolve) => func(resolve));
  };
  return Promise.all([getA(), getBModified(getB), getC()]);
}

getABC().then((arr) => console.log(arr));
// expected output [ 'A', 'B', 'C' ]
