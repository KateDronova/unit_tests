const { checkParamIsArray, checkParamIsObject } = require("./utils.js");

function includes(collection, predicate, fromIndex = 0) {
  if (checkParamIsArray(collection) || checkParamIsObject(collection) || typeof collection === 'string') {
    if (checkParamIsArray(collection)) {
      for (let i = fromIndex; i < collection.length; i += 1) {
        if (collection[i] === predicate) {
          return true;
        }
      }
    }
    if (checkParamIsObject(collection)) {
      for (let j = fromIndex; j < Object.values(collection).length; j += 1) {
        if (Object.values(collection)[j] === predicate) {
          return true;
        }
      }
    }
    if (typeof collection === 'string') {
      const arrOfTrue = [];
      let predicateIndex = 0;
      for (let k = fromIndex; k < collection.length; k += 1) {
        if (collection[k] === predicate[predicateIndex]) {
          arrOfTrue[predicateIndex] = true;
          predicateIndex += 1;
          if (arrOfTrue.length === predicate.length) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
module.exports = includes;
