/* Code to convert given number into roman numerals (with javascript).
Send numeber to the function convertToRoman.
It returns a string with respective roman numeral.
For complete challenge details, follow below link.
Challenge reference : https://www.freecodecamp.org/challenges/roman-numeral-converter */

var romanNumerals = {
    1 : 'I',
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
    10 : 'X',
    40 :'XL',
    50 : 'L',
    90 : 'XC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'CM',
    1000 : 'M'
};
function convertToRoman(num) {
 return convLiteral('', num);
}
function convLiteral(roman, num){
  return num>=1000 ? convLiteral(roman + romanNumerals['1000'].repeat(Math.floor(num/1000)), num%1000) : num>=900 ? convLiteral(roman + romanNumerals['900'], num%900) : num>=500 ? convLiteral(roman + romanNumerals['500'], num%500) : num>=400 ? convLiteral(roman + romanNumerals['400'], num%400) : num>=100? convLiteral(roman + romanNumerals['100'].repeat(Math.floor(num/100)), num%100) : num>=90 ? convLiteral(roman + romanNumerals['90'], num%90) : num>=50 ? convLiteral(roman + romanNumerals['50'],num%50) : num>=40 ? convLiteral(roman + romanNumerals['40'] , num%40) : num>=10 ? convLiteral(roman + romanNumerals['10'].repeat(Math.floor(num/10)),num%10) : num>=9 ? convLiteral(roman + romanNumerals['9'], num%9) : num>=5? convLiteral(roman + romanNumerals['5'], num%5) : num>=4 ? convLiteral(roman + romanNumerals['4'], num%4) : num>=1 ? convLiteral(roman + romanNumerals['1'].repeat(num),num%1) : roman;
}

// Example : function call
convertToRoman(300);

/* Explanation : Define a JSON object to assign roman numerals with
logical numbers. Use recursion on number to add roman numerals into a string.
//Challenge credits : https://www.freecodecamp.org
