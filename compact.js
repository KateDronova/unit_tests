function compact(arr) {
  const ifParamIsArray = arr instanceof Array;
  if (!ifParamIsArray) {
    return 'The parameter should be an array';
  }
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
module.exports = compact;
