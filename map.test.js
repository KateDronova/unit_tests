const map = require('./map');

test('Returns the new mapped array from initial array', () => {
  function square(n) {
    return n * n;
  }
  expect(map([4, 8], square)).toEqual([16, 64]);
});

test('Returns the new mapped array from object values', () => {
  function square(n) {
    return n * n;
  }
  expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
});

test('Returns array of values for selected key', () => {
  const users = [
    { 'user': 'barney', 'user1': 'barney' },
    { 'user': 'fred', 'user1': 'barney' }
  ];
  expect(map(users, 'user')).toEqual(['barney', 'fred']);
});
