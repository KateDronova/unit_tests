const { checkParamIsArray, checkParamIsObject } = require("./utils.js");

function includes(collection, predicate, fromIndex = 0) {
  if (checkParamIsArray(collection) || checkParamIsObject(collection) || typeof collection === 'string') {
    let result = false;
    if (checkParamIsArray(collection)) {
      for (let i = fromIndex; i < collection.length; i += 1) {
        if (collection[i] === predicate) {
          result = true;
          return result;
        }
      }
    }
    if (checkParamIsObject(collection)) {
      for (let j = fromIndex; j < Object.values(collection).length; j += 1) {
        if (Object.values(collection)[j] === predicate) {
          result = true;
          return result;
        }
      }
    }
    if (typeof collection === 'string') {
      let arrOfTrue = [];
      let predicateIndex = 0;
      for (let k = fromIndex; k < collection.length; k += 1) {
        if (collection[k] === predicate[predicateIndex]) {
          arrOfTrue[predicateIndex] = true;
          predicateIndex += 1;
          if (arrOfTrue.length === predicate.length) {
            result = true;
            return result;
          }
        }
      }
    }
    return result;
  }
}
module.exports = includes;
