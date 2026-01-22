function arrayLastIndexOf (list, val) {
  if (list.lastIndexOf) {
    return list.lastIndexOf(val)
  }
  for (var len = list.length - 1; len >= 0; len--) {
    if (val === list[len]) {
      return len
    }
  }
  return -1
}

module.exports = arrayLastIndexOf
