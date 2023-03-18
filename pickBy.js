const { checkParamIsObject } = require("./utils.js");

function pickBy(object, func) {
  if (checkParamIsObject(object)) {
    const result = object;
    if (func) {
      for (const key in object) {
        if (!func(result[key])) {
          delete result[key];
        }
      }
    }
    return result;
  }
}
module.exports = pickBy;
