const pick = require('./pick');

test('The 1st parameter should be an object', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  function checkIfParamIsObject(f) {
    this.f = f;
    const ifParamIsObject = arguments[0] instanceof Object;
    return ifParamIsObject;
  }
  expect(checkIfParamIsObject(pick(object, ['a', 'c']))).toBeTruthy();
});

test('Returns a new object with omitted "b" key', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  expect(
    pick(object, ['a', 'c'])
  ).toEqual({ 'a': 1, 'c': 3 });
});

test('Returns an object itself, if there is no 2nd argument', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  expect(
    pick(object)
  ).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
});

test('Returns an object itself, if 2nd argument is an empty string', () => {
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  expect(
    pick(object, '')
  ).toEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }] });
});
