var helperMultiply = require('./helperMultiply')

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
  return helperMultiply(multiplier, multiplicand)
}

module.exports = multiply
