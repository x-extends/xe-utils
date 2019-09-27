var padEnd = require('../string/padEnd')
var helperFixedNumber = require('./helperFixedNumber')

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedString (str, digits) {
  var nums = helperFixedNumber(str, digits).split('.')
  var rest = digits ? [nums[0], '.', padEnd(nums[1] || '', digits, '0')].join('') : nums[0]
  if (rest.substring(0, 1) === '-' && parseFloat(rest) === 0) {
    return digits ? rest.replace(/^-/, '') : '0'
  }
  return rest
}

module.exports = toFixedString
