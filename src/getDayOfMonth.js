var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateMonth = require('./helperGetDateMonth')
var helperHasLeapYear = require('./helperHasLeapYear')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

// 月份天数常量表
var staticMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/**
  * 返回某个月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 月(默认当月)、前几个月、后几个月
  * @return {Number}
  */
function getDayOfMonth (date, offsetNum) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    var year = helperGetDateFullYear(date)
    var month = helperGetDateMonth(date) + (offsetNum || 0)
    // 规范化月份到 0-11 范围，并调整年份
    if (month < 0 || month > 11) {
      year += Math.floor(month / 12)
      month = ((month % 12) + 12) % 12
    }
    // 查表获取天数，闰年2月返回29
    return month === 1 && helperHasLeapYear(year) ? 29 : staticMonthDays[month]
  }
  return NaN
}

module.exports = getDayOfMonth