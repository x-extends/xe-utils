var helperNumberDecimal = require('./helperNumberDecimal')
var toNumber = require('./toNumber')
var multiply = require('./multiply')

/**
 * 除法运算
 *
 * @param { Number } num1 数值1
 * @param { Number } num2 数值2
 * @return {Number}
 */
function divide (num1, num2) {
  var divisor = toNumber(num1)
  var dividend = toNumber(num2)
  var str1 = '' + divisor
  var str2 = '' + dividend
  return multiply(str1.replace('.', '') / str2.replace('.', ''), Math.pow(10, helperNumberDecimal(dividend) - helperNumberDecimal(divisor)))
}

module.exports = divide
