const { checkParamIsObject } = require("./utils.js");

function omit(object, arr) {
  if (checkParamIsObject(object)) {
    const result = Object.assign({}, object);
    if (arr) {
      let index = 0;
      for (const key in object) {
        if (key === arr[index]) {
          delete result[key];
          index += 1;
        }
      }
    }
    return result;
  }
}
module.exports = omit;
