function helperCreateToNumber (handle) {
  return function (str) {
    if (str) {
      var num = handle(str)
      return isNaN(num) ? 0 : num
    }
    return 0
  }
}

module.exports = helperCreateToNumber
