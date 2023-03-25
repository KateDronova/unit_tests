const { checkParamIsObject } = require("./utils.js");

function omitBy(object, func) {
  if (checkParamIsObject(object)) {
    const result = Object.assign({}, object);
    if (func) {
      for (const key in object) {
        if (func(result[key])) {
          delete result[key];
        }
      }
    }
    return result;
  }
}
module.exports = omitBy;
