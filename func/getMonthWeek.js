var staticWeekTime = require('./staticWeekTime')
var staticStrFirst = require('./staticStrFirst')

var helperGetYMDTime = require('./helperGetYMDTime')

var getWhatMonth = require('./getWhatMonth')
var toStringDate = require('./toStringDate')
var getWhatWeek = require('./getWhatWeek')

var isValidDate = require('./isValidDate')

/**
  * 返回某个月的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getMonthWeek (date) {
  var monthFirst, monthFirstWeek
  var currentDate = toStringDate(date)
  if (isValidDate(currentDate)) {
    monthFirst = getWhatMonth(currentDate, 0, staticStrFirst)
    monthFirstWeek = getWhatWeek(monthFirst, 0, 1)
    if (monthFirstWeek < monthFirst) {
      monthFirstWeek = getWhatWeek(monthFirst, 1, 1)
    }
    if (currentDate >= monthFirstWeek) {
      return Math.floor((helperGetYMDTime(currentDate) - helperGetYMDTime(monthFirstWeek)) / staticWeekTime) + 1
    }
    return getMonthWeek(getWhatWeek(currentDate, 0, 1))
  }
  return NaN
}

module.exports = getMonthWeek
