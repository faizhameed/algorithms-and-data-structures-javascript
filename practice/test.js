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
