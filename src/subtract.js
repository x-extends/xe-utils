var helperNumberDecimal = require('./helperNumberDecimal')
var toNumberString = require('./toNumberString')
var toNumber = require('./toNumber')
var toFixed = require('./toFixed')

/**
 * 减法运算
 *
 * @param { Number } num1 被减数
 * @param { Number } num2 减数
 * @return {Number}
 */
function subtract (num1, num2) {
  var subtrahend = toNumber(num1)
  var minuend = toNumber(num2)
  var str1 = toNumberString(subtrahend)
  var str2 = toNumberString(minuend)
  var digit1 = helperNumberDecimal(str1)
  var digit2 = helperNumberDecimal(str2)
  var ratio = Math.pow(10, Math.max(digit1, digit2))
  var precision = (digit1 >= digit2) ? digit1 : digit2
  return parseFloat(toFixed((subtrahend * ratio - minuend * ratio) / ratio, precision))
}

module.exports = subtract
