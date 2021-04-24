var staticDayTime = require('./staticDayTime')
var staticWeekTime = require('./staticWeekTime')
var staticParseInt = require('./staticParseInt')

var helperGetDateTime = require('./helperGetDateTime')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

/**
  * 返回前几周或后几周的星期几
  *
  * @param {Date} date 日期
  * @param {Number} offset 周(默认当前周)、前几周、后几周
  * @param {Number} day 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
  * @return {Date}
  */
function getWhatWeek (date, offset, day) {
  var time, whatDayTime, currentDay, customDay
  date = toStringDate(date)
  if (isValidDate(date)) {
    customDay = staticParseInt(/^[0-7]$/.test(day) ? day : date.getDay())
    currentDay = date.getDay()
    time = helperGetDateTime(date)
    whatDayTime = time + ((customDay === 0 ? 7 : customDay) - (currentDay === 0 ? 7 : currentDay)) * staticDayTime
    if (offset && !isNaN(offset)) {
      whatDayTime += offset * staticWeekTime
    }
    return new Date(whatDayTime)
  }
  return date
}

module.exports = getWhatWeek
