var setupDefaults = require('./setupDefaults')

var staticDayTime = require('./staticDayTime')
var staticWeekTime = require('./staticWeekTime')

var helperGetDateTime = require('./helperGetDateTime')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')
var isNumber = require('./isNumber')

/**
  * 返回前几周或后几周的星期几
  *
  * @param {Date} date 日期
  * @param {Number} offsetWeek 周(默认当前周)、前几周、后几周
  * @param {Number} offsetDay 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
  * @param {Number} firstDay 周视图的起始天，默认星期一
  * @return {Date}
  */
function getWhatWeek (date, offsetWeek, offsetDay, firstDay) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    var hasCustomDay = isNumber(offsetDay)
    var hasStartDay = isNumber(firstDay)
    var whatDayTime = helperGetDateTime(date)
    // 如果指定了天或周视图起始天
    if (hasCustomDay || hasStartDay) {
      var viewStartDay = hasStartDay ? firstDay : setupDefaults.firstDayOfWeek
      var currentDay = date.getDay()
      var customDay = hasCustomDay ? offsetDay : currentDay
      if (currentDay !== customDay) {
        var offsetNum = 0
        if (viewStartDay > currentDay) {
          offsetNum = -(7 - viewStartDay + currentDay)
        } else if (viewStartDay < currentDay) {
          offsetNum = viewStartDay - currentDay
        }
        if (customDay > viewStartDay) {
          whatDayTime += ((customDay === 0 ? 7 : customDay) - viewStartDay + offsetNum) * staticDayTime
        } else if (customDay < viewStartDay) {
          whatDayTime += (7 - viewStartDay + customDay + offsetNum) * staticDayTime
        } else {
          whatDayTime += offsetNum * staticDayTime
        }
      }
    }
    if (offsetWeek && !isNaN(offsetWeek)) {
      whatDayTime += offsetWeek * staticWeekTime
    }
    return new Date(whatDayTime)
  }
  return date
}

module.exports = getWhatWeek
