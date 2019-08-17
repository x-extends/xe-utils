var toNumber = require('./toNumber')
var toInteger = require('./toInteger')

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedNumber (str, digits) {
  if (digits) {
    return toNumber(('' + toNumber(str)).replace(new RegExp('(\\d+.\\d{0,' + digits + '}).*'), '$1'))
  }
  return toInteger(str)
}

module.exports = toFixedNumber
