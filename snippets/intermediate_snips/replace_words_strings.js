/* Code to replace a word with another word in
string ( case sensitive ) (in javascript).
Send the string to the function myReplace.
It returns a string with replaced words.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/search-and-replace */
//str is the string, before is the word you want to replace
//after is the word you want to replace with
function myReplace(str, before, after) {
  regexp=/^[A-Z]/;
  return str.replace(before,function(){
    return (regexp.test(before))?after.replace(after[0],after[0].toUpperCase()):after;
  });
}

// Example : function call
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//Challenge credits : https://www.freecodecamp.org
