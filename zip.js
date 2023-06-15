const { checkParamIsArray } = require("./utils.js");

function zip(...arrays) {
  if (checkParamIsArray(arrays)) {
    const result = [];
    let tempResult = [];
    let arrayIndex = 0;
    for (let resultIndex = 0; resultIndex < arguments[0].length; resultIndex += 1) {
      for (let i = 0; i < arrays.length; i++) {
        tempResult[tempResult.length] = arrays[i][arrayIndex];
      }
      if (tempResult) {
        result[resultIndex] = tempResult;
        tempResult = [];
        arrayIndex += 1;
      };
    }
    return result;
  }
}
module.exports = zip;
