function toPairs(object) {
  if (typeof object !== 'object') {
    return 'The parameter should be an object';
  }
  const result = [];
  let arrIndex = 0;
  for (const key in object) {
    result[arrIndex] = [key, object[key]];
    arrIndex += 1;
  }
  return result;
}
module.exports = toPairs;
