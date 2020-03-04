var helperNumberDecimal = require('./helperNumberDecimal')
var toNumber = require('./toNumber')

/**
 * 加法运算
 *
 * @param { Number } num1 被加数
 * @param { Number } num2 加数
 * @return {Number}
 */
function add (num1, num2) {
  var addend = toNumber(num1)
  var augend = toNumber(num2)
  var ratio = Math.pow(10, Math.max(helperNumberDecimal(addend), helperNumberDecimal(augend)))
  return (addend * ratio + augend * ratio) / ratio
}

module.exports = add
