const { checkParamIsObject } = require("./utils.js");

function toPairs(object) {
  if (checkParamIsObject(object)) {
    const result = [];
    let arrIndex = 0;
    for (const key in object) {
      result[arrIndex] = [key, object[key]];
      arrIndex += 1;
    }
    return result;
  }
}
module.exports = toPairs;
