var toNumber = require('./toNumber')
var toNumberString = require('./toNumberString')

function helperCreateMathNumber(name) {
  var isCeil = name === 'ceil'
  return function (num, digits) {
    var numRest = toNumber(num)
    if (numRest) {
      digits = digits >> 0
      var numStr = toNumberString(numRest)
      var nums = numStr.split('.')
      var intStr = nums[0]
      var floatStr = nums[1] || ''
      var fStr = floatStr.substring(0, digits + 1)
      var rest = intStr + (fStr ? ('.' + fStr) : '')
      if (digits >= floatStr.length) {
        return toNumber(rest)
      }
      if (digits > 0) {
        var ratio = Math.pow(10, digits)
        return Math[name]((isCeil ? numRest : rest) * ratio) / ratio
      }
      return Math[name](rest)
    }
    return numRest
  }
}

module.exports = helperCreateMathNumber
