var staticDayTime = require('./staticDayTime')
var staticStrFirst = require('./staticStrFirst')

var helperGetYMDTime = require('./helperGetYMDTime')

var getWhatYear = require('./getWhatYear')
var toStringDate = require('./toStringDate')

var isDate = require('./isDate')

/**
  * 返回某个年份的第几天
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearDay (date) {
  date = toStringDate(date)
  if (isDate(date)) {
    return Math.floor((helperGetYMDTime(date) - helperGetYMDTime(getWhatYear(date, 0, staticStrFirst))) / staticDayTime) + 1
  }
  return date
}

module.exports = getYearDay
