function pickBy(object, func) {
  if (typeof object !== 'object') {
    return 'The 1st parameter should be an object';
  }
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
module.exports = pickBy;
