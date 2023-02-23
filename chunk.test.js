const chunk = require('./chunk');

test('The first parameter should be an array', () => {
  function checkIfParamIsArray(f) {
    this.f = f;
    const ifParamIsArray = arguments[0] instanceof Array;
    return ifParamIsArray;
  }
  expect(checkIfParamIsArray(chunk([1, 2, 3]))).toBeTruthy();
});

test('Chunk an empty array', () => {
  expect(chunk([])).toEqual([]);
});

test('Chunk an array of 5 num values with the length of 2', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('Chunk an array of 5 num values with the length of 1', () => {
  expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
});

test('Chunk an array of 3 num values with default length', () => {
  expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
});

test('Chunk an array of 5 string values with the length of 3', () => {
  expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).toEqual([['a', 'b', 'c'], ['d', 'e']]);
});

test('Chunk an array of 5 values with the length of 3 don`t add an empty value', () => {
  expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).not.toEqual([['a', 'b', 'c'], ['d', 'e', '']]);
});

test('Chunk an array of 4 non-standard values with the length of 2', () => {
  expect(chunk([null, '', NaN, undefined], 2)).toEqual([[null, ''], [NaN, undefined]]);
});
