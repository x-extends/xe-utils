var getWhatYear = require('./getWhatYear')
var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

var isLeapYear = require('../base/isLeapYear')

/**
  * 返回某个年份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} year 年(默认当年)、前几个年、后几个年
  * @return {Number}
  */
function getDayOfYear (date, year) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    return isLeapYear(getWhatYear(date, year)) ? 366 : 365
  }
  return NaN
}

module.exports = getDayOfYear
