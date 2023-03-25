const { checkParamIsArray, checkParamIsObject } = require("./utils.js");

function find(collection, predicate, fromIndex = 0) {
  if (checkParamIsArray(collection) || checkParamIsObject(collection)) {
    let result;
    if (checkParamIsArray(predicate)) {
      for (let i = 0; i < collection.length; i += 1) {
        for (let k = 0; k < Object.entries(collection[i]).length; k += 1) {
          if (
            Object.entries(collection[i])[k][0] === predicate[0] &&
            Object.entries(collection[i])[k][1] === predicate[1]
          ) {
            result = collection[i];
          }
        }
      }
      return result;
    }
    if (checkParamIsObject(predicate)) {
      const arrOfTrue = [];
      for (let i = 0; i < collection.length; i += 1) {
        for (let k = 0; k < Object.entries(collection[i]).length; k += 1) {
          for (let h = 0; h < Object.entries(predicate).length; h += 1) {
            if (
              Object.entries(collection[i])[k][0] === Object.entries(predicate)[h][0] 
              && Object.entries(collection[i])[k][1] === Object.entries(predicate)[h][1]
            ) {
              result = collection[i];
              arrOfTrue[arrOfTrue.length] = true;
              if (arrOfTrue.length === Object.entries(predicate).length) {
                return result;
              }
            }
          }
        }
      }
    }
  
    for (let i = 0; i < collection.length; i += 1) {
      if (typeof predicate === 'string' && collection[i][predicate]) {
        return collection[i];
      }
    }
    return result;
  }
}
module.exports = find;
