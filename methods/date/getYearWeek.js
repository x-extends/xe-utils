var staticDayTime = require('../static/staticDayTime')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回某个年份的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearWeek (date) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
    var week = new Date(date.getFullYear(), 0, 4)
    return Math.round(((date.getTime() - week.getTime()) / staticDayTime + (week.getDay() + 6) % 7 - 3) / 7) + 1
  }
  return NaN
}

module.exports = getYearWeek
