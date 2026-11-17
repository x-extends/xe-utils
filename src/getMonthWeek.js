var staticDayTime = require('./staticDayTime')
var staticWeekTime = require('./staticWeekTime')

var helperGetUTCDateTime = require('./helperGetUTCDateTime')
var helperGetUTCWeekStartTime = require('./helperGetUTCWeekStartTime')

var setupDefaults = require('./setupDefaults')
var isNumber = require('./isNumber')
var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
 * 返回某个月的第几周
 *
 * @param {Date} date 日期或数字
 * @param {Number} firstDay 周视图的起始天，默认星期一
 * @return {Number}
 */
function getMonthWeek (date, firstDay) {
  var viewStartDay = isNumber(firstDay) ? firstDay : setupDefaults.firstDayOfWeek
  var targetDate = toStringDate(date)
  if (!isValidDate(targetDate)) {
    return NaN
  }

  var targetTime = helperGetUTCDateTime(targetDate)
  var targetWeekStartTime = helperGetUTCWeekStartTime(targetTime, viewStartDay)

  // 周中点决定这一周归属哪个月
  var midDate = new Date(targetWeekStartTime + staticDayTime * 3)
  var belongYear = midDate.getUTCFullYear()
  var belongMonth = midDate.getUTCMonth()

  // 归属月的 1 日
  var monthStartTime = Date.UTC(belongYear, belongMonth, 1)
  var firstWeekStartTime = helperGetUTCWeekStartTime(monthStartTime, viewStartDay)

  // 月首周中点落在上个月 → 该周归属上个月，本月从下一周开始
  if (firstWeekStartTime + staticDayTime * 3 < monthStartTime) {
    firstWeekStartTime += staticWeekTime
  }

  return Math.round((targetWeekStartTime - firstWeekStartTime) / staticWeekTime) + 1
}

module.exports = getMonthWeek
