var isDate = require('./isDate')
var toStringDate = require('./toStringDate')

var helperHasLeapYear = require('./helperHasLeapYear')
var helperNewDate = require('./helperNewDate')

/**
  * 判断是否闰年
  *
  * @param {Date} date 日期或数字
  * @return {Boolean}
  */
function isLeapYear (date) {
  var year
  var currentDate = date ? toStringDate(date) : helperNewDate()
  if (isDate(currentDate)) {
    year = currentDate.getFullYear()
    return helperHasLeapYear(year)
  }
  return false
}

module.exports = isLeapYear
