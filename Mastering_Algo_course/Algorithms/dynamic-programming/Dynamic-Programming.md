# Dynamic Programming

Dynamic Programming is nothing but optimization technique
breaking down into collection of sub problems


## Caching
Its the way of storing values to use it later, with out programming it again. To speed up program. **Memoization** is a type of caching used in programming.

```
function addTo80(n){
let cache ={}

 return ()=>{
if(n in cache){
    return cache[n]
}else{
cache[n]=n+80
    return n + 80;
}
 }   
}

```

Dynamic Programming=
Divide and Conquer + Memoization

Can the problem be divided into sub problem
Recursive Solution
Are there repetitive subproblems
Memoize  subproblems
Demand a raise from your boss
