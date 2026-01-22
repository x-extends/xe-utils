var setupDefaults = require('./setupDefaults')

var staticDayTime = require('./staticDayTime')
var staticWeekTime = require('./staticWeekTime')

var isNumber = require('./isNumber')
var includes = require('./includes')
var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')
var getWhatWeek = require('./getWhatWeek')
var range = require('./range')
var map = require('./map')

var helperGetDateTime = require('./helperGetDateTime')

var nextStartMaps = map(range(0, 7), function (day) {
  return [(day + 1) % 7, (day + 2) % 7, (day + 3) % 7]
})

function matchWeekStartDay (time, viewStartDay) {
  var day = new Date(time).getDay()
  return includes(nextStartMaps[viewStartDay], day)
}

function helperCreateGetDateWeek (getStartDate, checkCrossDate) {
  return function (date, firstDay) {
    var viewStartDay = isNumber(firstDay) ? firstDay : setupDefaults.firstDayOfWeek
    var targetDate = toStringDate(date)
    if (isValidDate(targetDate)) {
      var targetWeekStartDate = getWhatWeek(targetDate, 0, viewStartDay, viewStartDay)
      var firstDate = getStartDate(targetWeekStartDate)
      var firstTime = helperGetDateTime(firstDate)
      var targetWeekStartTime = helperGetDateTime(targetWeekStartDate)
      var targetWeekEndTime = targetWeekStartTime + staticDayTime * 6
      var targetWeekEndDate = new Date(targetWeekEndTime)
      var firstWeekStartDate = getWhatWeek(firstDate, 0, viewStartDay, viewStartDay)
      var firstWeekStartTime = helperGetDateTime(firstWeekStartDate)
      var tempTime
      if (targetWeekStartTime === firstWeekStartTime) {
        return 1
      }
      if (checkCrossDate(targetWeekStartDate, targetWeekEndDate)) {
        tempTime = helperGetDateTime(getStartDate(targetWeekEndDate))
        for (; tempTime < targetWeekEndTime; tempTime += staticDayTime) {
          if (matchWeekStartDay(tempTime, viewStartDay)) {
            return 1
          }
        }
      }
      var firstWeekEndTime = firstWeekStartTime + staticDayTime * 6
      var firstWeekEndDate = new Date(targetWeekEndTime)
      var offsetNum = 1
      if (checkCrossDate(firstWeekStartDate, firstWeekEndDate)) {
        offsetNum = 0
        tempTime = firstTime
        for (; tempTime < firstWeekEndTime; tempTime += staticDayTime) {
          if (matchWeekStartDay(tempTime, viewStartDay)) {
            offsetNum++
            break
          }
        }
      }
      return Math.floor((targetWeekStartTime - firstWeekStartTime) / staticWeekTime) + offsetNum
    }
    return NaN
  }
}

module.exports = helperCreateGetDateWeek
