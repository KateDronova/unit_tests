function take(arr, n = 1) {
  const ifParamIsArray = arr instanceof Array;
  if (!ifParamIsArray) {
    return 'The parameter should be an array';
  }
  let result = [];
  let resultIndex = 0;
  for (let i = 0; i < n; i += 1) {
    result[resultIndex] = arr[i];
    resultIndex += 1;
  }
  return result;
}
module.exports = take;
