var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')
var staticParseInt = require('./staticParseInt')

var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回前几天或后几天的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 天偏移量(默认0)、前几天、后几天
  * @param {String} mode 指定小时(null默认当前分)、0时(first)、23时(last)
  * @return {Date}
  */
function getWhatDay (date, offset, mode) {
  date = toStringDate(date)
  if (!isValidDate(date)) {
    return date
  }
  var dayOffset = staticParseInt(offset)
  if (!isNaN(dayOffset)) {
    date.setDate(helperDateGetDate(date) + dayOffset)
  }
  if (mode === staticStrFirst) {
    return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date)
    )
  }
  if (mode === staticStrLast) {
    return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date), 23, 59, 59, 999)
  }

  return date
}

module.exports = getWhatDay
