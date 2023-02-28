function map(collection, func) {
  if (typeof collection !== 'object') {
    return 'The first parameter should be an array or an object';
  }
  let result = [];
  let resultIndex = 0;
  
  if (collection instanceof Array && func instanceof Function) {
    for (let i = 0; i < collection.length; i += 1) {
      result[resultIndex] = func(collection[i]);
      resultIndex += 1;
    }
    return result;
  }
  if (typeof collection === 'object'&& func instanceof Function) {
    for (let j = 0; j < Object.values(collection).length; j += 1) {
      result[resultIndex] = func(Object.values(collection)[j]);
      resultIndex += 1;
    }
    return result;
  }
  if (typeof func === 'string') {
    for (let j = 0; j < collection.length; j += 1) {
      for (let k = 0; k < Object.entries(collection[j]).length; k += 1) {
        if (Object.entries(collection[j])[k][0] === func) {
          result[resultIndex] = Object.entries(collection[j])[k][1];
          resultIndex += 1;
        }
      }
    }
  }
  return result;
}
module.exports = map;
