function zip(...arrays) {
  const ifParamIsArray = arrays instanceof Array;
  if (!ifParamIsArray) {
    return 'The parameters should be arrays';
  }
  let result = [];
  let tempResult = [];
  let tempResultIndex = 0;
  let arrayIndex = 0;
  for (let resultIndex = 0; resultIndex < arguments[0].length; resultIndex += 1) {
    for (let i = 0; i < arrays.length; i++) {
      tempResult[tempResultIndex] = arrays[i][arrayIndex];
      tempResultIndex += 1;
    }
    if (tempResult) {
      result[resultIndex] = tempResult;
      tempResult = [];
      tempResultIndex = 0;
      arrayIndex += 1;
    };
  }
  return result;
}
module.exports = zip;
