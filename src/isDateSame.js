var staticInvalidDate = require('./staticInvalidDate')

var toDateString = require('./toDateString')

/**
 * 比较两个日期
 *
 * @param {Number/String/Date} date1 日期
 * @param {Number/String/Date} date2 日期
 * @param {String} format 对比格式
 */
function isDateSame (date1, date2, format) {
  if (date1 && date2) {
    date1 = toDateString(date1, format)
    return date1 !== staticInvalidDate && date1 === toDateString(date2, format)
  }
  return false
}

module.exports = isDateSame
