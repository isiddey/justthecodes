/* Code to remove elements from an array(with javascript).
Send the array and all the elements you want to delete to function destroyer.
It returns an array with all the elements removed.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/seek-and-destroy */

function destroyer(arr) {
  return Array.from(arguments)[0].filter(function(arrVal){
    return this.indexOf(arrVal)<0;
  },Array.from(arguments).slice(1));
}
// Example : function call
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* Explanation : Filter the first array in respect
to the elements you want to delete. 
//Challenge credits : https://www.freecodecamp.org
