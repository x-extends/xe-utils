function helperCreateToNumber (handle) {
  return function (str) {
    if (str) {
      var num = handle(str)
      if (!isNaN(num)) {
        return num
      }
    }
    return 0
  }
}

module.exports = helperCreateToNumber
