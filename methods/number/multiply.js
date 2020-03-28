var helperNumberDecimal = require('./helperNumberDecimal')
var helperNumString = require('./helperNumString')
var toNumber = require('./toNumber')

/**
 * 乘法运算
 *
 * @param { Number } num1 数值1
 * @param { Number } num2 数值2
 * @return {Number}
 */
function multiply (num1, num2) {
  var multiplier = toNumber(num1)
  var multiplicand = toNumber(num2)
  var str1 = helperNumString(multiplier)
  var str2 = helperNumString(multiplicand)
  return parseInt(str1.replace('.', '')) * parseInt(str2.replace('.', '')) / Math.pow(10, helperNumberDecimal(str1) + helperNumberDecimal(str2))
}

module.exports = multiply
