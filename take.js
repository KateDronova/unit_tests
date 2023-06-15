const { customSlice, checkParamIsArray } = require("./utils.js");

function take(arr, n = 1) {
  if (checkParamIsArray(arr)) {
    return customSlice(arr, 0, n);
  }
}
module.exports = take;
