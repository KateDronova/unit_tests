const filter = require('./filter');

test('Returns the array of 1 element, for which "age: 32, active: true" is truthy', () => {
  const users = [
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false },
    { user: 'pebbles', 'age': 32, active: true },
  ];
  expect(
    filter(users, {'age': 32, active: true })
  ).toEqual([
    { user: 'pebbles', 'age': 32, active: true },
  ]);
});

test('Returns the array of 2 elements, for which "active: false" is truthy', () => {
  const users = [
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false },
    { user: 'pebbles', 'age': 32, active: true },
  ];
  expect(
    filter(users, ['active', false])
  ).toEqual([
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false }
  ]);
});

test('Returns the array of 2 elements, for which "active" is truthy', () => {
  const users = [
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false },
    { user: 'pebbles', 'age': 32, active: true },
  ];
  expect(
    filter(users, 'active')
  ).toEqual([
    { user: 'pebbles', 'age': 32, active: true },
  ]);
});
