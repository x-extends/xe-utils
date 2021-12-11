var helperCreateGetDateWeek = require('./helperCreateGetDateWeek')

/**
  * 返回某个月的第几周
  *
  * @param {Date} date 日期或数字
  * @param {Number} firstDay 周视图的起始天，默认星期一
  * @return {Number}
  */
var getMonthWeek = helperCreateGetDateWeek(function (targetDate) {
  return new Date(targetDate.getFullYear(), targetDate.getMonth(), 1)
})

module.exports = getMonthWeek
