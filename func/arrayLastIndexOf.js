function arrayLastIndexOf (obj, val) {
  if (obj.lastIndexOf) {
    return obj.lastIndexOf(val)
  }
  for (var len = obj.length - 1; len >= 0; len--) {
    if (val === obj[len]) {
      return len
    }
  }
  return -1
}

module.exports = arrayLastIndexOf
