const { customSlice, checkParamIsArray } = require("./utils.js");

function dropWhile(arr, predicate) {
  let result = [];
  let resultIndex = 0;
  if (checkParamIsArray(arr)) {
    if (predicate instanceof Array) {
      for (let i = 0; i < arr.length; i += 1) {
        for (let k = 0; k < Object.entries(arr[i]).length; k += 1) {
          if (
            Object.entries(arr[i])[k][0] === predicate[0] &&
            Object.entries(arr[i])[k][1] !== predicate[1]
          ) {
            return customSlice(arr, i, arr.length);
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (
      (typeof predicate === 'string' && !arr[i][predicate]) ||
      (typeof predicate === 'object' &&
        JSON.stringify(arr[i]) !== JSON.stringify(predicate))
    ) {
      for (let j = i; j < arr.length; j += 1) {
        result[resultIndex] = arr[j];
        resultIndex += 1;
      }
      i = arr.length;
    }
  }
  return result;
}
module.exports = dropWhile;
