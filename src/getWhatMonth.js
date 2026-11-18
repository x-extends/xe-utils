var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')

var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')
var isNumber = require('./isNumber')

/**
  * 返回前几月或后几月的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offsetMonth 月(默认当前月)、前几个月、后几个月
  * @param {Number/String} offsetDay 获取哪天：月初(first)、月末(last)、指定天数(数值)，如果为空，但超过指定月份的天数时，则默认单月最后一天
  * @return {Date}
  */
function getWhatMonth (date, offsetMonth, offsetDay) {
  var monthNum = offsetMonth && !isNaN(offsetMonth) ? Number(offsetMonth) : 0
  date = toStringDate(date)
  if (!isValidDate(date)) {
    return date
  }
  var year = helperDateGetFullYear(date)
  var month = helperDateGetMonth(date)
  // 月初
  if (offsetDay === staticStrFirst) {
    return new Date(year, month + monthNum, 1, 0, 0, 0, 0)
  }
  // 月末
  if (offsetDay === staticStrLast) {
    return new Date(year, month + monthNum + 1, 0, 23, 59, 59, 999)
  }
  // 指定天数
  if (isNumber(offsetDay) && offsetDay > 0) {
    date.setDate(offsetDay)
  }
  // 偏移月份
  if (monthNum) {
    var currDate = helperDateGetDate(date)
    date.setMonth(month + monthNum)
    // 跨月溢出，回退到目标月最后一天
    if (currDate !== helperDateGetDate(date)) {
      date.setDate(0)
    }
  }

  return date
}

module.exports = getWhatMonth
