const { checkParamIsArray } = require("./utils.js");

function chunk(arr, num = 1) {
    if (checkParamIsArray(arr)) {
      const result = [];
      let tempArr = [];
      for (let i = 1; i <= arr.length; i += 1) {
        tempArr[tempArr.length] = arr[i - 1];
        if (i % num === 0) {
            result[result.length] = tempArr;
            tempArr = [];
        }
      }
      if (tempArr[0]) {
        result[result.length] = tempArr;
      }
      return result;
    }
  }
module.exports = chunk;
