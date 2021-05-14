/* 
Print a triangle containing stars with equal space before and after
sample  
   *
  * *
 * * *
* * * *

*/

function draw(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let s = 1; s <= n; s++) {
      let flag = 1;
      if (s === n + 1 - i) {
        flag = 0;
        let k = 0;
        while (k < 2 * i - 1) {
          if (k % 2 == 0) {
            line += "*";
          } else {
            line += " ";
          }
          k++;
        }
      }
      if (!flag) break;
      line += " ";
    }
    console.log(line);
  }
}

draw(5);
