var staticDayTime = require('./staticDayTime')
var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')

var helperGetDateTime = require('./helperGetDateTime')

var getWhatMonth = require('./getWhatMonth')
var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

/**
  * 返回某个月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 月(默认当月)、前几个月、后几个月
  * @return {Number}
  */
function getDayOfMonth (date, month) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    return Math.floor((helperGetDateTime(getWhatMonth(date, month, staticStrLast)) - helperGetDateTime(getWhatMonth(date, month, staticStrFirst))) / staticDayTime) + 1
  }
  return NaN
}

module.exports = getDayOfMonth
