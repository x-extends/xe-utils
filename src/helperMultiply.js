var staticParseInt = require('./staticParseInt')

var helperNumberDecimal = require('./helperNumberDecimal')
var helperStringReplace = require('./helperStringReplace')
var helperMathPow = require('./helperMathPow')

var toNumberString = require('./toNumberString')

function helperMultiply (multiplier, multiplicand) {
  var str1 = toNumberString(multiplier)
  var str2 = toNumberString(multiplicand)
  return staticParseInt(helperStringReplace(str1, '.', '')) * staticParseInt(helperStringReplace(str2, '.', '')) / helperMathPow(10, helperNumberDecimal(str1) + helperNumberDecimal(str2))
}

module.exports = helperMultiply
