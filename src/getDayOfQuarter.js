var staticDayTime = require('./staticDayTime')
var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')

var helperGetDateTime = require('./helperGetDateTime')

var getWhatQuarter = require('./getWhatQuarter')
var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

/**
  * 返回某个季度的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 季度(默认当季度)、前几个季度、后几个季度
  * @return {Number}
  */
function getDayOfQuarter (date, offsetNum) {
  date = toStringDate(date)
  if (isValidDate(date)) {
    return Math.floor((helperGetDateTime(getWhatQuarter(date, offsetNum, staticStrLast)) - helperGetDateTime(getWhatQuarter(date, offsetNum, staticStrFirst))) / staticDayTime) + 1
  }
  return NaN
}

module.exports = getDayOfQuarter
