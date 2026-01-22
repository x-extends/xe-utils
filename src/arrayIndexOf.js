function arrayIndexOf (list, val) {
  if (list.indexOf) {
    return list.indexOf(val)
  }
  for (var index = 0, len = list.length; index < len; index++) {
    if (val === list[index]) {
      return index
    }
  }
}

module.exports = arrayIndexOf
