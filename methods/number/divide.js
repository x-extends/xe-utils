var helperNumberDivide = require('./helperNumberDivide')
var toNumber = require('./toNumber')

/**
 * 除法运算
 *
 * @param { Number } num1 数值1
 * @param { Number } num2 数值2
 * @return {Number}
 */
function divide (num1, num2) {
  return helperNumberDivide(toNumber(num1), toNumber(num2))
}

module.exports = divide
