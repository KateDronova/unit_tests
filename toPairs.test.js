const toPairs = require('./toPairs');

test('The parameter should be an object', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };
  function checkIfParamIsObject(f) {
    this.f = f;
    const ifParamIsObject = arguments[0] instanceof Object;
    return ifParamIsObject;
  }
  expect(checkIfParamIsObject(toPairs(object))).toBeTruthy();
});

test('Returns an array of 3 key-value pairs', () => {
  const object = { 'a': 1, 'b': 2, 'c': 3 };
  expect(
    toPairs(object)
  ).toEqual([['a', 1], ['b', 2], ['c', 3]]);
});

test('Returns an array of 2 key-value pairs', () => {
  function Foo() {
    this.a = 1;
    this.b = 2;
  }
  expect(
    toPairs(new Foo)
  ).toEqual([['a', 1], ['b', 2]]);
});
