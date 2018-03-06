/* Code to find symmetric difference or
 disjunctive union of two arrays (with javascript).
Send the two arrays to function diffArray.
It returns an array with all elements that are not similar between
either of the array.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/diff-two-arrays */

function diffArray(arr1, arr2) {
  return arr1.filter(function(x){
    return arr2.indexOf(x)<0;
  }).concat(arr2.filter(function(y){
    return arr1.indexOf(y)<0;
  }));
}

// Example : function call
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

/* Explanation : Filter first array for elements of second array,
then filter second array for elements of first array,
finally combine/concat them together.
//Challenge credits : https://www.freecodecamp.org
