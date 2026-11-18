var helperStringReplace = require('./helperStringReplace')

function helperCreateToNumber (handle) {
  return function (str) {
    if (str) {
      var num = handle(str && str.replace ? helperStringReplace(str, /,/g, '') : str)
      if (!isNaN(num)) {
        return num
      }
    }
    return 0
  }
}

module.exports = helperCreateToNumber
