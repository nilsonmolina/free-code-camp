const { rot13 } = require('../03-caesarCipher');

describe('Project 2: Roman Numeral Converter', () => {
  it('Must pass all of the given examples', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
