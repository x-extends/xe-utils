var round = require('./round')
var toValString = require('../string/toString')

var helperStringRepeat = require('../string/helperStringRepeat')
var helperNumberOffsetPoint = require('./helperNumberOffsetPoint')

/**
  * 将数值四舍五入并格式化为固定小数位的字符串
  *
 * @param {string|number} num 数值
 * @param {number} digits 小数保留位数
  * @return {String}
  */
function toFixed (num, digits) {
  var str = toValString(round(num, digits))
  var nums = str.split('.')
  var intStr = nums[0]
  var floatStr = nums[1] || ''
  var digitOffsetIndex = digits - floatStr.length
  if (digits) {
    if (digitOffsetIndex > 0) {
      return intStr + '.' + floatStr + helperStringRepeat('0', digitOffsetIndex)
    }
    return intStr + helperNumberOffsetPoint(floatStr, Math.abs(digitOffsetIndex))
  }
  return intStr
}

module.exports = toFixed
