var staticStrFirst = require('./staticStrFirst')
var staticStrLast = require('./staticStrLast')

var toStringDate = require('./toStringDate')
var isValidDate = require('./isValidDate')

/**
  * 返回前几季度或后几季度的日期
  *
  * @param {Date} date 日期
  * @param {Number} offset 季度(默认当前季度)、前几季度、后几季度
  * @param {Number} day 获取哪天：月初(first)、月末(last)、指定天数(数值)，如果为空，但超过指定月份的天数时，则默认单月最后一天
  * @return {Date}
  */
function getWhatQuarter(date, offset, day) {
  var monthOffset = (offset != null && !isNaN(offset)) ? Number(offset) * 3 : 0
  date = toStringDate(date)
  if (!isValidDate(date)) {
    return date
  }
  var year = date.getFullYear()
  var month = date.getMonth()
  var quarterStart = Math.floor(month / 3) * 3
  // 月初
  if (day === staticStrFirst) {
    var targetMonth = quarterStart + monthOffset
    return new Date(year, targetMonth, 1, 0, 0, 0, 0)
  }
  // 月末
  if (day === staticStrLast) {
    var targetEndMonth = quarterStart + 2 + monthOffset
    return new Date(year, targetEndMonth + 1, 0, 23, 59, 59, 999)
  }
  // 目标季度首月 + 原始日期，溢出则回退到月末
  var targetMonth = quarterStart + monthOffset
  var result = new Date(year, targetMonth, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
  if (date.getDate() !== result.getDate()) {
    result.setDate(0)
  }
  return result
}

module.exports = getWhatQuarter