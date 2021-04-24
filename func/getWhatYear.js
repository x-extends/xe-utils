var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')

var helperGetDateFullYear = require('./helperGetDateFullYear')

var getWhatMonth = require('./getWhatMonth')
var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回前几年或后几年的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 年(默认当前年)、前几个年(数值)、后几个年(数值)
  * @param {Number/String} month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
  * @return {Date}
  */
function getWhatYear (date, offset, month) {
  var number
  date = toStringDate(date)
  if (isValidDate(date)) {
    if (offset) {
      number = offset && !isNaN(offset) ? offset : 0
      date.setFullYear(helperGetDateFullYear(date) + number)
    }
    if (month || !isNaN(month)) {
      if (month === staticStrFirst) {
        return new Date(helperGetDateFullYear(date), 0, 1)
      } else if (month === staticStrLast) {
        date.setMonth(11)
        return getWhatMonth(date, 0, staticStrLast)
      } else {
        date.setMonth(month)
      }
    }
  }
  return date
}

module.exports = getWhatYear
