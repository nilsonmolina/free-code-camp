/*
-----------------------------------------------------------------------
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
-----------------------------------------------------------------------
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

------
NOTE:
- All letters will be uppercase.

- Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
------
TESTS:
  - npm test caesarCipher
  - npm test
*/

function rot13(str) {
  const middle = 'A'.charCodeAt() + 12;
  let decoded = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    if ('A' <= char && char <= 'Z') {
      const code = char.charCodeAt();
      decoded += code > middle
        ? String.fromCharCode(code - 13)
        : String.fromCharCode(code + 13);
    } else decoded += char;
  }

  return decoded;
}

rot13('car');

module.exports = { rot13 };
