const { checkParamIsObject } = require("./utils.js");

function toPairs(object) {
  if (checkParamIsObject(object)) {
    const result = [];
    for (const key in object) {
      result[result.length] = [key, object[key]];
    }
    return result;
  }
}
module.exports = toPairs;
