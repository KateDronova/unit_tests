const pickBy = require('./pickBy');

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
  expect(checkIfParamIsObject(pickBy(object, isNumber))).toBeTruthy();
});

test('Returns a new object with omitted "b" key', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  function isNumber(elem) {
    if (typeof elem === 'number') {
      return true;
    }
    return false;
  }
  expect(
    pickBy(object, isNumber)
  ).toEqual({ 'a': 1, 'c': 3 });
});

test('Returns an object itself, if there is no 2nd argument', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  expect(
    pickBy(object)
  ).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
});
