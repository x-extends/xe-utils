var getWhatMonth = require('./getWhatMonth')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

function getQuarterNumber (date) {
  var month = date.getMonth()
  if (month < 3) {
    return 1
  } else if (month < 6) {
    return 2
  } else if (month < 9) {
    return 3
  }
  return 4
}

/**
  * 返回前几季度或后几季度的日期
  *
  * @param {Date} date 日期
  * @param {Number} offset 季度(默认当前季度)、前几季度、后几季度
  * @param {Number} day 获取哪天：月初(first)、月末(last)、指定天数(数值)，如果为空，但超过指定月份的天数时，则默认单月最后一天
  * @return {Date}
  */
function getWhatQuarter (date, offset, day) {
  var currMonth, monthOffset = offset && !isNaN(offset) ? offset * 3 : 0
  date = toStringDate(date)
  if (isValidDate(date)) {
    currMonth = (getQuarterNumber(date) - 1) * 3
    date.setMonth(currMonth)
    return getWhatMonth(date, monthOffset, day)
  }
  return date
}

module.exports = getWhatQuarter
