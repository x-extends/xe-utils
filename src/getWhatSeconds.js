var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')
var staticParseInt = require('./staticParseInt')

var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')
var helperDateGetHours = require('./helperDateGetHours')
var helperDateGetMinutes = require('./helperDateGetMinutes')
var helperDateGetSeconds = require('./helperDateGetSeconds')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回前几秒或后几秒的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 秒偏移量(默认0)、前几秒、后几秒
  * @param {String} mode 指定毫秒(null默认当前毫秒)、0毫秒(first)、59毫秒(last)
  * @return {Date}
  */
function getWhatSeconds (date, offset, mode) {
  date = toStringDate(date)
  if (!isValidDate(date)) {
    return date
  }
  var secondOffset = staticParseInt(offset)
  if (!isNaN(secondOffset)) {
    date.setSeconds(helperDateGetSeconds(date) + secondOffset)
  }
  if (mode === staticStrFirst) {
    return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date), helperDateGetHours(date), helperDateGetMinutes(date), helperDateGetSeconds(date), 0)
  }
  if (mode === staticStrLast) {
    return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date), helperDateGetHours(date), helperDateGetMinutes(date), helperDateGetSeconds(date), 999)
  }
  return date
}

module.exports = getWhatSeconds
