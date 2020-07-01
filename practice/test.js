var a = "hi";
function fos() {
  console.log(a);
  let a = 24;
}
fos(); // reference error
async function func() {}

async function func2() {}

async function foo() {
  var a = func();
  var b = func2();
  var c = await Promise.all(a, b).then((values) => values);
  console.log(c);
}

let arr = ["a", "b", "c", "a"];

function delAtIndex(s) {
  arr = arr.filter((elem) => elem !== s);
  return arr;
}

function arrDup() {
  let index = arr.indexOf("a");
  arr.splice(index, 1, 0);
}

//['b','c','a']

useEffect(() => {
  addEventListener("click", func());
  return () => {
    removeEventListener("click", func());
  };
}, []);

function arrDel(arr) {
  delete arr[2];
  console.log(arr);
  delete arr;
  console.log(arr);
}

arrDel([1, 2, 3, 4, 5, 5]);

function getValue(obj, str) {
  let arrStr = str.split(".");

  if (arrStr.length == 1) {
    if (obj[arrStr[0]]) {
      return " All keys are present";
    }
    return arrStr[0]; // the value is not present
  }
  if (obj[arrStr[0]]) {
    let key = arrStr.shift();
    return getValue(obj[key], arrStr.join("."));
  } else {
    return `${arrStr[0]} is not a key`;
  }
}
