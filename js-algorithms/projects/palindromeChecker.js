/*
-----------------------------------------------------------------------
JavaScript Algorithms and Data Structures Projects: Palindrome Checker
-----------------------------------------------------------------------
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring
punctuation, case, and spacing.
------
NOTE:
- You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
  and turn everything into the same case (lower or upper case) in order to check for palindromes.

- We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among
  others.

- We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
------
TESTS:
  - npm test palindromeChecker
  - npm test
*/

function palindrome(str) {
  function isAlphaNumeric(char) {
    return ('a' <= char && char <= 'z')
        || ('A' <= char && char <= 'Z')
        || ('0' <= char && char <= '9');
  }
  let head = 0;
  let tail = str.length - 1;

  str = str.toLowerCase();
  while (head < tail) {
    if (isAlphaNumeric(str[head]) && isAlphaNumeric(str[tail])) {
      if (str[head] !== str[tail]) return false;
      head++;
      tail--;
    }
    if (!isAlphaNumeric(str[head])) head++;
    if (!isAlphaNumeric(str[tail])) tail--;
  }

  return true;
}

module.exports = { palindrome };
