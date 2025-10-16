setTimeout(() => {
  console.log("Hello from setTimeout");
}, 0);

queueMicrotask(() => {
  console.log("Hello from queueMicrotask");
  queueMicrotask(() => {
    console.log("Hello from queueMicrotask inside another queueMicrotask");
  });
});

Promise.resolve().then(() => console.log("Hello from Promise"));
console.log("Hello from main thread");

// Expected output:
// Hello from main thread
// Hello from Promise
// Hello from queueMicrotask
// Hello from queueMicrotask inside another queueMicrotask
// Hello from setTimeout
