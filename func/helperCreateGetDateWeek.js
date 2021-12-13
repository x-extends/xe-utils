var setupDefaults = require('./setupDefaults')

var staticWeekTime = require('./staticWeekTime')

var isNumber = require('./isNumber')
var isValidDate = require('./isValidDate')
var getWhatWeek = require('./getWhatWeek')

var helperGetDateTime = require('./helperGetDateTime')

function helperCreateGetDateWeek (getStartDate) {
  return function (date, firstDay) {
    var viewStartDay = isNumber(firstDay) ? firstDay : setupDefaults.firstDayOfWeek
    var targetDate = getWhatWeek(date, 0, viewStartDay, viewStartDay)
    if (isValidDate(targetDate)) {
      var targetOffsetDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())
      var targerStartDate = getStartDate(targetDate)
      var targetFirstDay = targerStartDate.getDay()
      if (targetFirstDay > viewStartDay) {
        targerStartDate.setDate(7 - targetFirstDay + viewStartDay + 1)
      }
      if (targetFirstDay < viewStartDay) {
        targerStartDate.setDate(viewStartDay - targetFirstDay + 1)
      }
      return Math.floor((helperGetDateTime(targetOffsetDate) - helperGetDateTime(targerStartDate)) / staticWeekTime + 1)
    }
    return NaN
  }
}

module.exports = helperCreateGetDateWeek
