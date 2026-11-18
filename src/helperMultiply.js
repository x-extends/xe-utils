var helperNumberDecimal = require('./helperNumberDecimal')
var helperStringReplace = require('./helperStringReplace')

var toNumberString = require('./toNumberString')

function helperMultiply (multiplier, multiplicand) {
  var str1 = toNumberString(multiplier)
  var str2 = toNumberString(multiplicand)
  return parseInt(helperStringReplace(str1, '.', '')) * parseInt(helperStringReplace(str2, '.', '')) / Math.pow(10, helperNumberDecimal(str1) + helperNumberDecimal(str2))
}

module.exports = helperMultiply
