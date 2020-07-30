let redV = [1, 2, 3, 4].reduce((item) => null, {});

console.log(redV);

function pushRun(arr) {
  let temp = [...arr];
  return temp.push(4);
}

console.log(pushRun([1, 2, 3]));

let b = [3, 4, 5, 6];

let c = b.push(9);

console.log(c); //returns the new length of the array
