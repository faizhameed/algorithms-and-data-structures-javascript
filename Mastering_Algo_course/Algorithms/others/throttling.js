const throttling = (fn, delay) => {
  let flag = true;

  return function () {
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const test = () => {
  console.log("hit");
};

const testWrapper = throttling(test, 2000);
