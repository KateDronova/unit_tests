const merge = require('./merge');

test('The 1st parameter should be an object', () => {
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  function checkIfParamIsObject(f) {
    this.f = f;
    const ifParamIsObject = arguments[0] instanceof Object;
    return ifParamIsObject;
  }
  expect(checkIfParamIsObject(merge(object))).toBeTruthy();
});

test('Returns a merged object from 2 single ones', () => {
  const object1 = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  const object2 = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };
  expect(
    merge(object1, object2)
  ).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
});

test('Returns an object itself, if there is no 2nd argument', () => {
  const object1 = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  expect(
    merge(object1)
  ).toEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }] });
});

test('Returns an object itself, if 2nd argument is an empty object', () => {
  const object1 = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  const object2 = {};
  expect(
    merge(object1, object2)
  ).toEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }] });
});

test('Returns a merged object from objs with {} values', () => {
  const object3 = {
    'a': { 'b': 2 }
  };
  const object4 = {
    'a': { 'c': 3 }
  };
  expect(
    merge(object3, object4)
  ).toEqual({ 'a': { 'b': 2, 'c': 3 } });
});

test('Returns a merged object with rewritten "a"', () => {
  const object5 = {
    'a': 1,
    'b': 2
  };
  const object6 = {
    'a': 3,
    'c': 4
  };
  expect(
    merge(object5, object6)
  ).toEqual({ 'a': 3, 'b': 2, 'c': 4 });
});
