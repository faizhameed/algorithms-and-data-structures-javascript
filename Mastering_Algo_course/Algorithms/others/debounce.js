const debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const test = () => {
  console.log("hit");
};

const deWrapper = debounce(test, 2000);
