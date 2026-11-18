var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')
var staticParseInt = require('./staticParseInt')

var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')
var helperDateGetHours = require('./helperDateGetHours')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回前几小时或后几小时的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 小时偏移量(默认0)、前几小时、后几小时
  * @param {String} mode 指定分钟(null默认当前分)、0分(first)、59分(last)
  * @return {Date}
  */
function getWhatHours (date, offset, mode) {
  date = toStringDate(date)
  if (!isValidDate(date)) {
    return date
  }
  var hourOffset = staticParseInt(offset)
  if (!isNaN(hourOffset)) {
    date.setHours(helperDateGetHours(date) + hourOffset)
  }
  if (mode === staticStrFirst) {
    return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date), helperDateGetHours(date), 0, 0, 0)
  }
  if (mode === staticStrLast) {
    return new Date(helperDateGetFullYear(date), helperDateGetMonth(date), helperDateGetDate(date), helperDateGetHours(date), 59, 59, 999)
  }
  return date
}

module.exports = getWhatHours
