var toNumber = require('./toNumber')
var toNumberString = require('./toNumberString')

function helperCreateMathNumber(name) {
  return function (num, digits) {
    var rest = toNumber(num)
    if (rest) {
      digits = digits >> 0
      var numStr = toNumberString(rest)
      var nums = numStr.split('.')
      var intStr = nums[0]
      var floatStr = nums[1] || ''
      rest = intStr + '.' + floatStr.substring(0, digits + 1)
      if (digits >= floatStr.length) {
        return toNumber(rest)
      }
      if (digits > 0) {
        var ratio = Math.pow(10, digits)
        return Math[name](rest * ratio) / ratio
      }
      return Math[name](rest)
    }
    return rest
  }
}

module.exports = helperCreateMathNumber
