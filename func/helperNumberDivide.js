var helperNumberDecimal = require('./helperNumberDecimal')
var toNumberString = require('./toNumberString')
var multiply = require('./multiply')

function helperNumberDivide (divisor, dividend) {
  var str1 = toNumberString(divisor)
  var str2 = toNumberString(dividend)
  var divisorDecimal = helperNumberDecimal(str1)
  var dividendDecimal = helperNumberDecimal(str2)
  var powY = dividendDecimal - divisorDecimal
  var isMinus = powY < 0
  var multiplicand = Math.pow(10, isMinus ? Math.abs(powY) : powY)
  return multiply(str1.replace('.', '') / str2.replace('.', ''), isMinus ? 1 / multiplicand : multiplicand)
}

module.exports = helperNumberDivide
