var helperMultiply = require('./helperMultiply')

var toNumber = require('./toNumber')
var toNumberString = require('./toNumberString')

function helperCreateMathNumber(name, isRoundFn) {
  return function (num, decimalPlaces, awayZero) {
    var numRest = toNumber(num)
    var rest = numRest
    if (numRest) {
      decimalPlaces = decimalPlaces >> 0
      var numStr = toNumberString(numRest)
      var nums = numStr.split('.')
      var intStr = nums[0]
      var floatStr = nums[1] || ''
      var fStr = floatStr.substring(0, decimalPlaces + 1)
      var subRest = intStr + (fStr ? ('.' + fStr) : '')
      if (decimalPlaces >= floatStr.length) {
        return toNumber(subRest)
      }
      subRest = numRest
      if (decimalPlaces > 0) {
        var ratio = Math.pow(10, decimalPlaces)
        var tmplNum = helperMultiply(subRest, ratio)
        rest = isRoundFn && subRest < 0 && awayZero !== false ? -(Math[name](Math.abs(tmplNum)) / ratio) : (Math[name](tmplNum) / ratio)
      } else {
        rest = Math[name](subRest)
      }
    }
    return rest
  }
}

module.exports = helperCreateMathNumber
