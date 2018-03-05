/* Code to generate reverse of a string (with javascript).
Send the string to the function palindrome.
It will return reverse of the string.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/reverse-a-string */

function reverseString(str) {
  return str.split("").reverse().join("");
}

/* Explanation : Convert into array of substrings,
then reverse it and convert back to string. */

//Challenge credits : https://www.freecodecamp.org
