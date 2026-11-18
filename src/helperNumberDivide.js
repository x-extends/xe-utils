var helperNumberDecimal = require('./helperNumberDecimal')
var helperStringReplace = require('./helperStringReplace')
var helperMathAbs = require('./helperMathAbs')
var helperMathPow = require('./helperMathPow')

var toNumberString = require('./toNumberString')
var multiply = require('./multiply')

function helperNumberDivide (divisor, dividend) {
  var str1 = toNumberString(divisor)
  var str2 = toNumberString(dividend)
  var divisorDecimal = helperNumberDecimal(str1)
  var dividendDecimal = helperNumberDecimal(str2)
  var powY = dividendDecimal - divisorDecimal
  var isMinus = powY < 0
  var multiplicand = helperMathPow(10, isMinus ? helperMathAbs(powY) : powY)
  return multiply(helperStringReplace(str1, '.', '') / helperStringReplace(str2, '.', ''), isMinus ? 1 / multiplicand : multiplicand)
}

module.exports = helperNumberDivide
