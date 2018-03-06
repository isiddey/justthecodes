/* Code to sum numbers between a range(with javascript).
Send the two numbers for whose range you want a sum to function sumAll.
It returns the sum of the range.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range */

function sumAll(arr) {
  return sum(Math.min(arr[0],arr[1]),Math.max(arr[0],arr[1]));
}
function sum(start,end){
  return start==end?start:(start+sum(start+1,end));
}
// Example : function call
sumAll([1, 4]);

/* Explanation : Send the lower limit and upper limit
to the function sum. Recursively add the numbers 
till you reach the end of range.
//Challenge credits : https://www.freecodecamp.org
