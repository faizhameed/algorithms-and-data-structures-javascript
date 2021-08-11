### Rules of Sudoku

unique 1-9 in rows,columns and 3x3 box

we need to bruteforce(backtracking) the solution where we keep adding a number in each row, by checking if the number satisfies the following rule.

if at some point we are out of adding a number which brakes the rule we backtrack to last valid position.
