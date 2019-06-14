const { palindrome } = require('../palindromeChecker');

describe('Project 1: Palindrome Checker', () => {
  it('Must pass all of the given examples', () => {
    expect(palindrome('eye')).toBe(true);
    expect(palindrome('_eye')).toBe(true);
    expect(palindrome('race car')).toBe(true);
    expect(palindrome('not a palindrome')).toBe(false);
    expect(palindrome('never odd or even')).toBe(true);
    expect(palindrome('nope')).toBe(false);
    expect(palindrome('almostomla')).toBe(false);
    expect(palindrome('My age is 0, 0 si ega ym.')).toBe(true);
  });
});
