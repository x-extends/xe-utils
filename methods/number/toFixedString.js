var padEnd = require('../string/padEnd')
var toFixedNumber = require('./toFixedNumber')

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedString (str, digits) {
  var nums = ('' + toFixedNumber(str, digits)).split('.')
  return digits ? [nums[0], '.', padEnd(nums[1] || '', digits, '0')].join('') : nums[0]
}

module.exports = toFixedString
