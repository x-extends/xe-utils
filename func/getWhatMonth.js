var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')
var staticDayTime = require('./staticDayTime')

var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateTime = require('./helperGetDateTime')
var helperGetDateMonth = require('./helperGetDateMonth')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')
var isNumber = require('./isNumber')

/**
  * 返回前几月或后几月的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} offset 月(默认当前月)、前几个月、后几个月
  * @param {Number/String} day 获取哪天：月初(first)、月末(last)、指定天数(数值)，如果为空，但超过指定月份的天数时，则默认单月最后一天
  * @return {Date}
  */
function getWhatMonth (date, offset, day) {
  var monthOffset = offset && !isNaN(offset) ? offset : 0
  date = toStringDate(date)
  if (isValidDate(date)) {
    if (day === staticStrFirst) {
      return new Date(helperGetDateFullYear(date), helperGetDateMonth(date) + monthOffset, 1)
    } else if (day === staticStrLast) {
      return new Date(helperGetDateTime(getWhatMonth(date, monthOffset + 1, staticStrFirst)) - 1)
    } else if (isNumber(day)) {
      date.setDate(day)
    }
    if (monthOffset) {
      var currDate = date.getDate()
      date.setMonth(helperGetDateMonth(date) + monthOffset)
      if (currDate !== date.getDate()) {
        // 当为指定天数，且被跨月了，则默认单月最后一天
        date.setDate(1)
        return new Date(helperGetDateTime(date) - staticDayTime)
      }
    }
  }
  return date
}

module.exports = getWhatMonth
