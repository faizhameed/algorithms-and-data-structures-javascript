### Rules of Sudoku

unique 1-9 in rows,columns and 3x3 box

we need to bruteforce(backtracking) the solution where we keep adding a number in each row, by checking if the number satisfies the following rule.

if at some point we are out of adding a number which brakes the rule we backtrack to last valid position.

```
recursive func(args,ans){
 loop(1 to 9){
  ans.push(currentVal)
 if(isValid()){
  recursoveFunc(args,ans);
 }
 remove currentVal from ans;
}
```


| 5 | 3 |   |
| --- | --- | --- |
| 6 |   |   |
|   | 9 | 8 |

to keep track of what is available in the rows, or columns or 3x3 box, we need to create some kind of datastructure to know if there is same element

`col = [{},{},{}...]`

`row = [{},{},{}...]`

for each 3x3 boxes we can create another hashmap with each boxes from 1 to 9

now how to determine which box we are in?

This can be done by

```
const getBoxId = function (row,col){
  const colVal =  Math.floor(col/3);
  const rowVal = Math.floor(row/3)*3;
  return colVal+rowVal;
}
```

for example [2,3] row at index 2 and column at index 3. If we divide 2/3 and 3/3 we get 0 and 1 which on adding gives us 1 which means its 2nd 3x3 box
