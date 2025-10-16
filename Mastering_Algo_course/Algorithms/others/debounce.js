const debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const test = (a, b) => {
  console.log("hit", a, b);
};

const deWrapper = debounce(test, 2000);

deWrapper(5, 6);
deWrapper(7, 8);
deWrapper(9, 10);
deWrapper(11, 12);
deWrapper(13, 14);
deWrapper(15, 16);
