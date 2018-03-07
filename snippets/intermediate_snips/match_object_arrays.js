/* Code to find matching objects in an array from
 another array of objects (with javascript).
Send the two arrays to function whatIsInAName.
It returns an array with all elements that contain
the matching objects from second array.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/wherefore-art-thou */

// collection is the first array in which we have to search
// source is the second array in respect to which we have to search
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = Object.keys(source);
  return collection.filter(function(x){
    return !arr.map(function(y){
      return x[y]==source[y];
    }).includes(false);
  });
}

// Example : function call
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/* Explanation : Filter first array for elements of second array,
then map second array and check if they match the elements
of first array. If there is any partial match i.e. if it includes
false in the array after map, then return false for filter function.
Hint : Array.map returns an array with values corresponding to return
statement of callback function. Since we are returning boolean values
here, it will return an array similar to [true, false, true] etc.
//Challenge credits : https://www.freecodecamp.org
