var isDate = require('./isDate')
var toStringDate = require('./toStringDate')

var helperHasLeapYear = require('./helperHasLeapYear')
var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperNewEmptyDate = require('./helperNewEmptyDate')

/**
  * 判断是否闰年
  *
  * @param {Date} date 日期或数字
  * @return {Boolean}
  */
function isLeapYear (date) {
  var year
  var currentDate = date ? toStringDate(date) : helperNewEmptyDate()
  if (isDate(currentDate)) {
    year = helperDateGetFullYear(currentDate)
    return helperHasLeapYear(year)
  }
  return false
}

module.exports = isLeapYear
