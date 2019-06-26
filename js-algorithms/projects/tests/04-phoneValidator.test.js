const { telephoneCheck } = require('../04-phoneValidator');

describe('Project 4: Telephone Number Validator', () => {
  it('Must pass all of the given examples', () => {
    expect(telephoneCheck('555-555-5555')).toBe(true);
    expect(telephoneCheck('5555555555')).toBe(true);
    expect(telephoneCheck('(555)555-5555')).toBe(true);
    expect(telephoneCheck('1(555)555-5555')).toBe(true);
    expect(telephoneCheck('1 555 555 5555')).toBe(true);
    expect(telephoneCheck('1 456 789 4444')).toBe(true);

    expect(telephoneCheck('555-5555')).toBe(false);
    expect(telephoneCheck('5555555')).toBe(false);
    expect(telephoneCheck('1 555)555-5555')).toBe(false);
    expect(telephoneCheck('123**&!!asdf#')).toBe(false);
    expect(telephoneCheck('(6054756961)')).toBe(false);
    expect(telephoneCheck('-1 (757) 622-7382')).toBe(false);
    expect(telephoneCheck('0 (757) 622-7382')).toBe(false);
    expect(telephoneCheck('27576227382')).toBe(false);
    expect(telephoneCheck('555)-555-5555')).toBe(false);
    expect(telephoneCheck('(555-555-5555')).toBe(false);
    expect(telephoneCheck('(555)5(55?)-5555')).toBe(false);
  });
});
