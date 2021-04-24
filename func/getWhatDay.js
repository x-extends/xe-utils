var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')
var staticParseInt = require('./staticParseInt')

var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateMonth = require('./helperGetDateMonth')
var helperGetDateTime = require('./helperGetDateTime')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回前几天或后几天的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 天(默认当天)、前几天、后几天
  * @param {String} mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
  * @return {Date}
  */
function getWhatDay (date, offset, mode) {
  date = toStringDate(date)
  if (isValidDate(date) && !isNaN(offset)) {
    date.setDate(date.getDate() + staticParseInt(offset))
    if (mode === staticStrFirst) {
      return new Date(helperGetDateFullYear(date), helperGetDateMonth(date), date.getDate())
    } else if (mode === staticStrLast) {
      return new Date(helperGetDateTime(getWhatDay(date, 1, staticStrFirst)) - 1)
    }
  }
  return date
}

module.exports = getWhatDay
