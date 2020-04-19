## What is Data structure?

Its the way of organizing data such a way that it can be accessed quickly and easily 

### Why data structure

They are essential ingredients in creating fast and powerful algorithms.
They help to manage and organize data effectively
They make code cleaner and easier to understand

## Abstract Data Type and Data Structure

An Abstract Data type is an abstract data structure which provides only the interface to which a data structure musr adhere to.

The interface dose not give any specific details about how something  should be implemented or in what programming language


## Big-O Notation

It gives the upper bound of complexity in the algorithm in the worst case, helping to quantify performance as input size becomes arbitrarily large




Constant Time:O(1)
Logarithmic Time:O(log(n))
Linear Time:O(n)
Linearithmic Time:O(n(log(n)))
Quadratic Time: O(n^2)
Cubic Time: O(n^3)
Exponential Time: O(b^n)
Factorial Time:O(n!)
### Some examples to remember

**Logarithmic O(log(n))**

Searching algorithm in a sorted array where first takes the mid values and checks the value is greater or lesser than the given value then proceeds by creating new high value and low value
`Binary Search in python`
```
def binary_search(item_list,item):
	first = 0
	last = len(item_list)-1
	found = False
	while( first<=last and not found):
		mid = (first + last)//2
		if item_list[mid] == item :
			found = True
		else:
			if item < item_list[mid]:
				last = mid - 1
			else:
				first = mid + 1	
	return found
```

## Arrays

Why arrays are use full in Algorithms and DS:
- Storing and accessing sequencial data
- Used as a lookup in tables and inverse tables
- Can be used to return multiple values from a function
- Used by IO routines as a buffer
- Used in dynamic programming to cache solutions to subproblems
- Temporarily store data or objects

### Time complexity

|Array Types|Access |Search |Insertion    |Apending    | Deletion       |
|-------------|------|------|----------|-----------|-----------|
|Static Array|O(1)|O(n)|N/A|N/A|N/A|
|Dynamic Array|O(1)|O(n)|O(n)|O(1)|O(n)






