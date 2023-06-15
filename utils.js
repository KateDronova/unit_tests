function customSlice(arr, a = 0, b = arr.length) {
    const result = [];
    for (let i = a; i < b; i++) {
        result[result.length] = arr[i];
    }
    return result;
}

function checkParamIsArray(arg) {
    return (arg instanceof Array) ? true : false;
}
  
function checkParamIsObject(arg) {
    return (arg instanceof Object) ? true : false;
}
  
module.exports = { customSlice, checkParamIsArray, checkParamIsObject };
