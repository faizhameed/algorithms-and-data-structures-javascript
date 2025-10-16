const debounce = (func, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("called");
      func.apply(this, args);
    }, delay);
  };
};

function foo(a, b) {
  console.log("Hi", a, b);
}
const mydebfoo = debounce(foo, 1000);

mydebfoo(5, 6);

const throttle = (func, limit) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, limit);
  };
};

const myThrottlingFoo = throttle(foo, 2000);

myThrottlingFoo("Throttling fun called", 8);
myThrottlingFoo("Throttling fun called", 11);
// myThrottlingFoo(9, 8);

new Promise((res, rej) => {
  setTimeout(() => {
    myThrottlingFoo("Throttling fun called", "after 3 seconds delay");
    res();
  }, 3000);
}).then(() => {
  console.log("wooow");
  myThrottlingFoo(0, 7);
});
