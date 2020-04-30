You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array array=[7,1,3,2,4,5,6] we perform the following steps:

i arr =[7,1,3,2,4,5,6] swap (indices)
0 [7, 1, 3, 2, 4, 5, 6] swap (0,3)
1 [2, 1, 3, 7, 4, 5, 6] swap (0,1)
2 [1, 2, 3, 7, 4, 5, 6] swap (3,4)
3 [1, 2, 3, 4, 7, 5, 6] swap (4,5)
4 [1, 2, 3, 4, 5, 7, 6] swap (5,6)
5 [1, 2, 3, 4, 5, 6, 7]

Trying to figure out solution
Well, I created a temporary array (temp) to store the position (pos) of elements (val) in the original array (since they are consecutive). Then I referred to the positions in order to bring the original array into order: I looked for 1, and wherever that 1 is, I placed the element at index 0 of arr and then updated its new position in temp as well; looked for 2, wherever that 2 is, I placed the element at index 1 of arr and then updated its new position in temp... If any element is at its right place, I skipped else increased the swaps.
