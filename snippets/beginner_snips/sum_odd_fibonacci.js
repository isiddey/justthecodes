/* Code sum odd numbers in fibonacci series for a given limit (with javascript).
Send the limit to the funtion sumFibs.
It returns sum of odd numbers in fobinacci series.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers */

function sumFibs(limit) {
  return getFib(1, 1, 1, limit);
}

function getFib(first, second, sum, limit){
  return second <= limit ? getFib(second, first+second, second % 2 != 0 ? sum + second : sum, limit) : sum;
}

//Example function call
sumFibs(1000);

/* Explanation : Recursively calculate fibonacci series till you reach a limit.
If the current number is odd then add it to the sum. */

//Challenge credits : https://www.freecodecamp.org
