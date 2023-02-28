const find = require('./find');

test('Returns the 1st element, for which "age: 32, active: true" is truthy', () => {
  const users = [
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false },
    { user: 'pebbles', 'age': 32, active: true },
  ];
  expect(
    find(users, {'age': 32, active: true })
  ).toEqual({ user: 'pebbles', 'age': 32, active: true });
});

test('Returns the 1st element, for which "active: false" is truthy, from index 1', () => {
  const users = [
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false },
    { user: 'pebbles', 'age': 32, active: true },
  ];
  expect(
    find(users, ['active', false])
  ).toEqual({ user: 'fred', 'age': 40, active: false });
});

test('Returns the 1st element, for which "active" is truthy', () => {
  const users = [
    { user: 'barney', 'age': 36, active: false },
    { user: 'fred', 'age': 40, active: false },
    { user: 'pebbles', 'age': 32, active: true },
  ];
  expect(
    find(users, 'active')
  ).toEqual({ user: 'pebbles', 'age': 32, active: true });
});
