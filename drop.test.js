const drop = require('./drop');

test('The first parameter should be an array', () => {
  function checkIfParamIsArray(f) {
    this.f = f;
    const ifParamIsArray = arguments[0] instanceof Array;
    return ifParamIsArray;
  }
  expect(checkIfParamIsArray(drop([1, 2, 3]))).toBeTruthy();
});

test('An empty array returns itself', () => {
  expect(drop([])).toEqual([]);
});

test('Returns the slice of array with 2 dropped elements', () => {
  expect(drop([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
});

test('Returns the slice of array with 0 dropped elements', () => {
  expect(drop([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
});

test('Returns the slice of array with 1 dropped element by default', () => {
  expect(drop([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
});

test('Returns the slice of array with 1 dropped element', () => {
  expect(drop([1, 2, 3, 4, 5], 1)).not.toContain(1);
});
