/* Code to title case a string (with javascript).
Send the string to the function titleCase.
It returns a string with first letter of each word in upper case.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/title-case-a-sentence */

function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(capString){
    return capString[0].toUpperCase()+capString.substring(1,capString.length);
  }).join(" ");
}

/* Explanation : Convert string to one single case, 
split it into an array for every word ,
and iterate over the array. Capitalize the first letter of each
array element i.e. word. Join the array into string and return.
//Challenge credits : https://www.freecodecamp.org
