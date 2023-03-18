const { customSlice, checkParamIsArray } = require("./utils.js");

function drop(arr, n = 1) {
  if (checkParamIsArray(arr)) {
    return customSlice(arr, n, arr.length);
  }
}
module.exports = drop;
