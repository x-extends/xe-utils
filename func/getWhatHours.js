var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')
var staticParseInt = require('./staticParseInt')

var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateMonth = require('./helperGetDateMonth')
var helperGetDateTime = require('./helperGetDateTime')

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
  if (isValidDate(date) && !isNaN(offset)) {
    date.setHours(date.getHours() + staticParseInt(offset))
    if (mode === staticStrFirst) {
      return new Date(helperGetDateFullYear(date), helperGetDateMonth(date), date.getDate(), date.getHours())
    } else if (mode === staticStrLast) {
      return new Date(helperGetDateTime(getWhatHours(date, 1, staticStrFirst)) - 1)
    }
  }
  return date
}

module.exports = getWhatHours
