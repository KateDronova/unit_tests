const includes = require('./includes');

test('Returns true, as 1 is found in the array', () => {
  expect(
    includes([1, 2, 3], 1)
  ).toBeTruthy();
});

test('Returns false, as 1 isn`t found from the index 2', () => {
  expect(
    includes([1, 2, 3], 1, 2)
  ).toBeFalsy();
});

test('Returns true, as 1 is found in the object', () => {
  expect(
    includes({ 'a': 1, 'b': 2 }, 1)
  ).not.toBeFalsy();
});

test('Returns true, as "bc" is found in the string', () => {
  expect(
    includes('abcd', 'bc')
  ).toBeTruthy();
});
