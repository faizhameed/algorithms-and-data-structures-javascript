// Temperature closer to zero

function closerToZero(ts) {
  let closer = [Math.abs(ts[0]), ts[0]];
  ts.forEach((element) => {
    debugger;
    if (Math.abs(element) == closer[0]) {
      closer[1] = Math.abs(closer[1]);
    }

    if (Math.abs(element) < closer[0]) {
      closer[1] = element;
      closer[0] = Math.abs(element);
    }
  });
  console.log(closer);
}

closerToZero([10, 20, -3, 2, -6, 45, 23]);
