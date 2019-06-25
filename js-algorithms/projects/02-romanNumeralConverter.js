/*
---------------------------------------------------------------------------
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
---------------------------------------------------------------------------
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
------
NOTE:
- For more info on roman numerals, visit: https://www.mathsisfun.com/roman-numerals.html

------
TESTS:
  - npm test romanNumeralConverter
  - npm test
*/

function convertToRoman(num) {
  const lookup = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let roman = '';

  for (let i = 0; i < lookup.length; i++) {
    if (num >= lookup[i][0]) {
      roman += lookup[i][1];
      num -= lookup[i][0];
      i -= 1;
    }
  }

  return roman;
}

module.exports = { convertToRoman };

// function convertToRomanNaive(num) {
//   let roman = '';

//   while (num > 0) {
//     if (num >= 1000) {
//       roman += 'M';
//       num -= 1000;
//     } else if (num >= 900) {
//       roman += 'CM';
//       num -= 900;
//     } else if (num >= 500) {
//       roman += 'D';
//       num -= 500;
//     } else if (num >= 400) {
//       roman += 'CD';
//       num -= 400;
//     } else if (num >= 100) {
//       roman += 'C';
//       num -= 100;
//     } else if (num >= 90) {
//       roman += 'XC';
//       num -= 90;
//     } else if (num >= 50) {
//       roman += 'L';
//       num -= 50;
//     } else if (num >= 40) {
//       roman += 'XL';
//       num -= 40;
//     } else if (num >= 10) {
//       roman += 'X';
//       num -= 10;
//     } else if (num >= 9) {
//       roman += 'IX';
//       num -= 9;
//     } else if (num >= 5) {
//       roman += 'V';
//       num -= 5;
//     } else if (num >= 4) {
//       roman += 'IV';
//       num -= 4;
//     } else if (num >= 1) {
//       roman += 'I';
//       num -= 1;
//     }
//   }

//   return roman;
// }
