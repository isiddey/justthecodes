/* Code to decode a string with ceasars cipher (in javascript).
ROT13 cipher is used i.e. alphabets are shifted 13 places.
Send the string to the function rot13.
It returns a decoded string.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/caesars-cipher */

function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/gi,function(val){
    return val.charCodeAt(0)>77?String.fromCharCode(val.charCodeAt(0)-13):String.fromCharCode(91-(13-(val.charCodeAt(0)-65)));
  });
}

// Example : function call
rot13("SERR PBQR PNZC");

/* Explanation : Replace all alhpabets,
check if the character if shifted 13 places ahead
is a character in ASCII code,
else shift it 13 characters behind.
//Challenge credits : https://www.freecodecamp.org
