var staticDayTime = require('./staticDayTime')

var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')

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
    var oNum = offsetNum && !isNaN(offsetNum) ? offsetNum : 0
    var year = helperDateGetFullYear(date)
    var month = helperDateGetMonth(date)

    // 计算当前季度的起始月份 (0, 3, 6, 9 分别代表一、二、三、四季度)
    var quarterStartMonth = month - (month % 3)
    var targetDate = new Date(year, quarterStartMonth + oNum * 3, 1)

    var targetYear = helperDateGetFullYear(targetDate)
    var targetQuarterStartMonth = helperDateGetMonth(targetDate)

    // 使用 UTC 计算时间戳。避免夏令时误差
    var startTimestamp = Date.UTC(targetYear, targetQuarterStartMonth, 1)
    var endTimestamp = Date.UTC(targetYear, targetQuarterStartMonth + 3, 1)

    return (endTimestamp - startTimestamp) / staticDayTime
  }
  return NaN
}

module.exports = getDayOfQuarter
