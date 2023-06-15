const omitBy = require('./omitBy');

test('The 1st parameter should be an object', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  function isNumber(elem) {
    if (typeof elem === 'number') {
      return true;
    }
    return false;
  }
  function checkIfParamIsObject(f) {
    this.f = f;
    const ifParamIsObject = arguments[0] instanceof Object;
    return ifParamIsObject;
  }
  expect(checkIfParamIsObject(omitBy(object, isNumber))).toBeTruthy();
});

test('Returns a new object with omitted "a" and "c" keys', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  function isNumber(elem) {
    if (typeof elem === 'number') {
      return true;
    }
    return false;
  }
  expect(
    omitBy(object, isNumber)
  ).toEqual({ 'b': '2' });
});

test('Returns an object itself, if there is no 2nd argument', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  expect(
    omitBy(object)
  ).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
});
