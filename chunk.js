function chunk(arr, num = 1) {
    const ifParamIsArray = arr instanceof Array;
    if (!ifParamIsArray) {
      return 'The parameter should be an array';
    }
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
module.exports = chunk;
