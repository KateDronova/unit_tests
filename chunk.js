const { checkParamIsArray } = require("./utils.js");

function chunk(arr, num = 1) {
    if (checkParamIsArray(arr)) {
      const result = [];
      let resultIndex = 0;
      let tempArr = [];
      let tempArrIndex = 0;
      for (let i = 1; i <= arr.length; i += 1) {
        tempArr[tempArrIndex] = arr[i - 1];
        tempArrIndex += 1;
        if (i % num === 0) {
            result[resultIndex] = tempArr;
            resultIndex += 1;
            tempArr = [];
            tempArrIndex = 0;
        }
      }
      if (tempArr[0]) {
        result[resultIndex] = tempArr;
      }
      return result;
    }
  }
module.exports = chunk;
