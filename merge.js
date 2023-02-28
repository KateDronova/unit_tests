function merge(...objects) {
  if (typeof objects[0] !== 'object') {
    return 'The first parameter should be an object';
  }
  let result = objects[0];
  if (Object.values(result)[0] instanceof Array) {
    for (let i = 1; i < objects.length; i += 1) {
      for (let j = 0; j < Object.keys(objects[i]).length; j += 1) {
        for (let k = 0; k < Object.values(objects[i])[j].length; k += 1) {
          result[Object.keys(result)[j]][k]
          [Object.keys(Object.values(objects[i])[j][k])[0]] = 
          Object.values(Object.values(objects[i])[j][k])[0]
        }
      }
    }
    return result; 
  }

  for (let i = 1; i < objects.length; i += 1) {
    for (let j = 0; j < Object.keys(objects[i]).length; j += 1) {
      if (Object.keys(result)[j] === Object.keys(objects[i])[j]
      && typeof Object.values(result)[j] !== 'object') {
        result[Object.keys(result)[j]] = Object.values(objects[i])[j];
      } else if (typeof Object.values(result)[j] !== 'object') {
        result[Object.keys(objects[i])[j]] = Object.values(objects[i])[j];
      }

      if (typeof Object.values(result)[j] === 'object'
      && Object.keys(result)[j] === Object.keys(objects[i])[j]) {
        Object.values(result)[j][Object.keys(Object.values(objects[i])[j])[j]] = 
        Object.values(Object.values(objects[i])[j])[j];
      }
    }
  }
  return result; 
}
module.exports = merge;
