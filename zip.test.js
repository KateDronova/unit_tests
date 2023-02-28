const zip = require('./zip');

test('The first parameter should be an array', () => {
  function checkIfParamIsArray(f) {
    this.f = f;
    const ifParamIsArray = arguments[0] instanceof Array;
    return ifParamIsArray;
  }
  expect(checkIfParamIsArray(zip([1, 2, 3], ['s', 'h', 'e']))).toBeTruthy();
});

test('Returns new array of 1st and 2nd elements', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});

test('Returns new array from odd number of elements', () => {
  expect(zip(['a', 'b'], [1], [true, false])).toEqual([['a', 1, true], ['b', undefined, false]]);
});

test('Returns new array of 1st, 2nd, 3rd, 4th and 5th elements with no 2nd argument', () => {
  expect(zip([1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]]);
});

test('Returns new array of 1st, 2nd, 3rd, 4th and 5th elements with empty 2nd argument', () => {
  expect(zip([1, 2, 3, 4, 5], [])).toEqual([[1], [2], [3], [4], [5]]);
});

test('Returns new array of 1st and 2nd elements with null, NaN and undefined', () => {
  expect(zip(['a', 'b'], [null, NaN], [undefined, false])).toEqual([['a', null, undefined], ['b', NaN, false]]);
});
