/* Code to find if all elements of one string are present
in another(in javascript).
Send an array of two strings to function mutation.
It will return true if second string is subset of first else false.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/mutations */

/*arr is an array of two strings that we need to compare,
first string needs to be the superset or second string i.e. all
elements of second string should be present in first string for the
funtion to return true*/


function mutation(arr) {
  arr = arr.map(function(element){
    return element.toLowerCase();
  });
  return !arr[1].split("").map(function(element){
    return arr[0].includes(element);
  }).includes(false);
}

//Example call statement
mutation(["abc__", "__d"]);

/* Explanation : Loop on array and convert all elements
to singular case i.e. either lower or upper case.
Then split the second string and loop over it and check if 
its elements are present in first. If there is even one element that 
is present then return false else return true.*/

//Challenge credits : https://www.freecodecamp.org
