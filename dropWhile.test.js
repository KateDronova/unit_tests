const dropWhile = require('./dropWhile');

test('Returns the array with 1 dropped element (2nd one returned falsey)', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];
  expect(
    dropWhile(users, { 'user': 'barney', 'active': false })
  ).toEqual([
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ]);
});

test('Returns the array with 2 dropped elements (3rd one returned falsey)', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];
  expect(
    dropWhile(users, ['active', false])
  ).toEqual([
    { user: 'pebbles', active: true }
  ]);
});

test('Returns the array with 0 dropped elements (1st one returned falsey)', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];
  expect(
    dropWhile(users, 'active')
  ).toEqual([
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ]);
});
