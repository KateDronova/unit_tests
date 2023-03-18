const { checkParamIsArray } = require("./utils.js");

function compact(arr) {
  if (checkParamIsArray(arr)) {
    let result = [];
    let resultIndex = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i]) {
        result[resultIndex] = arr[i];
        resultIndex += 1;
      }
    }
    return result;
  }
}
module.exports = compact;
