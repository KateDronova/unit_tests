const { checkParamIsArray, checkParamIsObject } = require("./utils.js");

function filter(collection, predicate) {
  if (checkParamIsArray(collection) || checkParamIsObject(collection)) {
    let result = [];
    let resultIndex = 0;
    if (checkParamIsArray(predicate)) {
      for (let i = 0; i < collection.length; i += 1) {
        for (let k = 0; k < Object.entries(collection[i]).length; k += 1) {
          if (
            Object.entries(collection[i])[k][0] === predicate[0] &&
            Object.entries(collection[i])[k][1] === predicate[1]
          ) {
            result[resultIndex] = collection[i];
            resultIndex += 1;
          }
        }
      }
      return result;
    }
    if (checkParamIsObject(predicate)) {
      let arrOfTrue = [];
      let arrOfTrueIndex = 0;
      for (let i = 0; i < collection.length; i += 1) {
        for (let k = 0; k < Object.entries(collection[i]).length; k += 1) {
          for (let h = 0; h < Object.entries(predicate).length; h += 1) {
            if (
              Object.entries(collection[i])[k][0] === Object.entries(predicate)[h][0] 
              && Object.entries(collection[i])[k][1] === Object.entries(predicate)[h][1]
            ) {
              if (JSON.stringify(collection[i]) !== JSON.stringify(result[resultIndex - 1])) {
                result[resultIndex] = collection[i];
                resultIndex += 1;
                arrOfTrue[arrOfTrueIndex] = true;
                arrOfTrueIndex += 1;
                if (arrOfTrue.length === Object.entries(predicate).length) {
                  return result;
                }
              }
            }
          }
        }
      }
    }
  
    for (let i = 0; i < collection.length; i += 1) {
      if (typeof predicate === 'string' && collection[i][predicate]) {
        result[resultIndex] = collection[i];
        resultIndex += 1;
        i = collection.length;
      }
    }
    return result;
  }
}
module.exports = filter;
