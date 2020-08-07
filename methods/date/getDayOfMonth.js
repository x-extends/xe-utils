var staticDayTime = require('../static/staticDayTime')
var staticStrFirst = require('../static/staticStrFirst')
var staticStrLast = require('../static/staticStrLast')

var helperGetDateTime = require('./helperGetDateTime')

var getWhatMonth = require('./getWhatMonth')
var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回某个月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当月)、前几个月、后几个月
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
