## What is Data structure?

Its the way of organizing data such a way that it can be accessed quickly and easily 



- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Tries
- Graphs
- Hash Tables

### Various Operations on DS

Insertion -  Adding new item in a list
Deletion
Traversal -  Access each data items exactly ones
Searching - FInd the data in the collection
Sorting 
Access -  How do we access the data we have on the computer



## Algorithms

- Sorting
- Dynamic Programming
- BFS+DFS(Searching)
- Recursion

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

| Array Types   | Access | Search | Insertion | Apending | Deletion |
| ------------- | ------ | ------ | --------- | -------- | -------- |
| Static Array  | O(1)   | O(n)   | N/A       | N/A      | N/A      |
| Dynamic Array | O(1)   | O(n)   | O(n)      | O(1)     | O(n)     |

### Hash Tables
Objects in javascript is a type of Hash tables. In python they are dictionary

**Hash Functions**
Its a functions that returns the input in a gibrish non understandable value
its a pure function. That always return the same value for the input given

- Insert O(1)
- Delete O(1)
- Search O(1)
- Lookup O(1)

```
let user ={
	age:54,
	name:'Kyles',
	magic:true,
	scream:function(){
		console.log('Ahhhh')
	}
}
```

```
user.age //O(1)
user.spell ='abra kadabra'// now new memory is added for this //O(1)
user.scream() //O(1)

```
### Hash Collisions
When two items share same address space we say we have a collision
linkedlist is formed
with limited memory we have  collision

### How to deal with hash table collisions
 - open addressing
 - robinhood hashing
 refer wikipedia

 with js
 ```
 const a  = new Map()
 const b = new Sets()

 ```
 keys in hashtable allows us to iterate through keys
	
## Lineked Lists
null terminated 
pointer stores the address
element that links to next element

**Why is linkedlist better than hashtable or Arrays**

- linkedlist have a loose structure
- in array elements are indexed, while in linkedlist you start at the head and traverse to find the node
- linkedlist is scattered all over the memory is kind of slow
- But to push and pop are O(1)
- insert , delete, lookup are O(n)
  
	### pointers

	```
	const obj1 ={a:true}
	const obj2 =obj1 // we created a pointer here
	delete obj1
	console.log(obj2)// still the element is available.because obj2 is still referencing the memory. 
	// This is know as garbage collection



