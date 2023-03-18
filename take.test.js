const take = require('./take');

test('The first parameter should be an array', () => {
  function checkIfParamIsArray(f) {
    this.f = f;
    const ifParamIsArray = arguments[0] instanceof Array;
    return ifParamIsArray;
  }
  expect(checkIfParamIsArray(take([1, 2, 3]))).toBeTruthy();
});

test('An empty array returns itself', () => {
  expect(take([])).toEqual([]);
});

test('Returns the array of 2 taken elements', () => {
  expect(take([1, 2, 3, 4, 5], 2)).toEqual([1, 2]);
});

test('Returns the array of 0 taken elements', () => {
  expect(take([1, 2, 3, 4, 5], 0)).toEqual([]);
});

test('Returns the array of 1 taken element by default', () => {
  expect(take([1, 2, 3, 4, 5])).toEqual([1]);
});

test('Returns the array of all taken elements without empty slots', () => {
  expect(take([1, 2, 3, 4, 5], 7)).not.toContain('');
});

test('Returns the array of all taken elements even if num is bigger', () => {
  expect(take([1, 2, 3, 4, 5], 7)).toEqual([1, 2, 3, 4, 5]);
});
