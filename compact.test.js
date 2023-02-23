const compact = require('./compact');

test('The parameter should be an array', () => {
  function checkIfParamIsArray(f) {
    this.f = f;
    const ifParamIsArray = arguments[0] instanceof Array;
    return ifParamIsArray;
  }
  expect(checkIfParamIsArray(compact([1, 2, 3]))).toBeTruthy();
});

test('Empty array returns empty array', () => {
  expect(compact([])).toEqual([]);
});

test('All falsey values are removed', () => {
  expect(compact([1, '', null, 4, 0, NaN])).toEqual([1, 4]);
});

test('Non-empty string falsey values are not removed', () => {
  expect(compact([1, '', 'null', 4, '0', 'NaN'])).toEqual([1, 'null', 4, '0', 'NaN']);
});
