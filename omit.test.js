const omit = require('./omit');

test('The 1st parameter should be an object', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  function checkIfParamIsObject(f) {
    this.f = f;
    const ifParamIsObject = arguments[0] instanceof Object;
    return ifParamIsObject;
  }
  expect(checkIfParamIsObject(omit(object, ['a', 'c']))).toBeTruthy();
});

test('Returns a new object with omitted "a" and "c" keys', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  expect(
    omit(object, ['a', 'c'])
  ).toEqual({ 'b': '2' });
});

test('Returns an object itself, if there is no 2nd argument', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  expect(
    omit(object)
  ).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
});

test('Returns an object itself, if 2nd argument is an empty string', () => {
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  expect(
    omit(object, '')
  ).toEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }] });
});
