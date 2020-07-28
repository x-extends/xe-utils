var floor = require('./floor')
var toFixed = require('./toFixed')

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedString (str, digits) {
  return toFixed(floor(str, digits), digits)
}

module.exports = toFixedString
