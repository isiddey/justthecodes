/* Code to check for palindrome in strings (with javascript).
Send the string to the function palindrome.
It returns true if it palindrome else false.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/check-for-palindromes*/

function palindrome(str) {
  if (str.replace(/[^a-z0-9]+/gi, '').toLowerCase() == str.replace(/[^a-z0-9]+/gi, '').split("").reverse().join("").toLowerCase())  return true;
  else return false;
}

/* Explanation : Remove all non alpha numeric characters and
turn it into single case i.e. lower case. Then compare it with reverse 
of its own. */

//Challenge credits : https://www.freecodecamp.org
