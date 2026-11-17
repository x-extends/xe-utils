var helperHasLeapYear = require('./helperHasLeapYear')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

// 月之前的月份累计天数索引
const DAYS_BEFORE_MONTH = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]

/**
  * 返回某个年份的第几天
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearDay (date) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()

    // 基础天数：直接读取静态常量数组
    let totalDays = DAYS_BEFORE_MONTH[month] + day

    // 闰年补偿：利用短路优化，1月和2月直接跳过取模运算
    if (month > 1 && helperHasLeapYear(year)) {
      totalDays++
    }

    return totalDays
  }
  return NaN
}

module.exports = getYearDay
