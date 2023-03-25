const { checkParamIsArray } = require("./utils.js");

function compact(arr) {
  if (checkParamIsArray(arr)) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i]) {
        result[result.length] = arr[i];
      }
    }
    return result;
  }
}
module.exports = compact;
