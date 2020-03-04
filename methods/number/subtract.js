var helperNumberDecimal = require('./helperNumberDecimal')
var toNumber = require('./toNumber')

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
  var digit1 = helperNumberDecimal(subtrahend)
  var digit2 = helperNumberDecimal(minuend)
  var ratio = Math.pow(10, Math.max(digit1, digit2))
  var precision = (digit1 >= digit2) ? digit1 : digit2
  return parseFloat(((subtrahend * ratio - minuend * ratio) / ratio).toFixed(precision))
}

module.exports = subtract
