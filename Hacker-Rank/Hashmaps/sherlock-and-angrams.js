/* Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example s = mom, the list of all anagrammatic pairs is [m, m], [mo, om] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.

Constraints
Length of the input string: 2 ≤ |s| ≤ 100
String s contains only lowercase letters from the range ascii[a-z]. */

const sherlockAndAnagrams=((s)=> {
  let result = [],count=0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      result.push(s.slice(i, j));
    }
  }
  console.log(result)
 
for (let k=0;k<result.length;k++){
  for(j=k+1;j<result.length;j++){
    if(result[k]===result[j]){
      count++;
     }else if(result[k].length===result[j].length){
       console.log(`${result[k]} and ${result[j]} comparison`)
       let isAnagram = false;
         let temp=[...result[j]]
       for(let m=0;m<result[k].length;m++){
           if(temp.includes(result[k][m])){
             console.log(`${temp} includes ${result[k][m]}`)
             console.log(`removing ${result[k][m]} from ${temp} is index is ${temp.indexOf(result[k][m])} `)
             temp.splice(temp.indexOf(result[k][m]),1)
             isAnagram=true
           }else{
             isAnagram=false
             break; //not found
           }
         
       }
       if(isAnagram){
         console.log(`${result[k]} and ${result[j]} ok anagram count++`)
         count++
       }
     }
   }
}
console.log(count)


})


sherlockAndAnagrams("abba")