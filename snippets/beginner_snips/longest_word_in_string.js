/* Code to find length of longest word in a string (in javascript).
Send the string to the findLongestWord.
It will return the length of longest word in string.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string */

function findLongestWord(str) {
  return str.split(" ").sort(function(a, b){
    return b.length - a.length; 
  })[0].length;
}

/* Explanation : Convert into array of substrings,
then sort it ind descending order of length
and return length of first index. */

//Challenge credits : https://www.freecodecamp.org
