var staticDayTime = require('./staticDayTime')
var staticWeekTime = require('./staticWeekTime')

var helperGetUTCDateTime = require('./helperGetUTCDateTime')
var helperGetUTCWeekStartTime = require('./helperGetUTCWeekStartTime')
var helperNewDateByTime = require('./helperNewDateByTime')

var setupDefaults = require('./setupDefaults')
var isNumber = require('./isNumber')
var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
 * 返回某年的第几周
 *
 * @param {Date} date 日期或数字
 * @param {Number} firstDay 周视图的起始天，默认星期一
 * @return {Number}
 */
function getYearWeek (date, firstDay) {
  var viewStartDay = isNumber(firstDay) ? firstDay : setupDefaults.firstDayOfWeek
  var targetDate = toStringDate(date)
  if (!isValidDate(targetDate)) {
    return NaN
  }

  var targetTime = helperGetUTCDateTime(targetDate)
  var targetWeekStartTime = helperGetUTCWeekStartTime(targetTime, viewStartDay)

  // 周中点（周起点 + 3 天）决定这一周归属哪一年
  var belongYear = helperNewDateByTime(targetWeekStartTime + staticDayTime * 3).getUTCFullYear()

  // 归属年的 1 月 1 日
  var yearStartTime = Date.UTC(belongYear, 0, 1)
  var firstWeekStartTime = helperGetUTCWeekStartTime(yearStartTime, viewStartDay)

  // 年首周中点落在上一年 → 该周归属上一年，本年从下一周开始
  if (firstWeekStartTime + staticDayTime * 3 < yearStartTime) {
    firstWeekStartTime += staticWeekTime
  }

  return Math.round((targetWeekStartTime - firstWeekStartTime) / staticWeekTime) + 1
}

module.exports = getYearWeek
