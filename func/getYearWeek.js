var helperCreateGetDateWeek = require('./helperCreateGetDateWeek')

/**
  * 返回某个年份的第几周
  *
  * @param {Date} date 日期或数字
  * @param {Number} firstDay 从年初的星期几为起始开始周开始算，默认星期一
  * @return {Number}
  */
var getYearWeek = helperCreateGetDateWeek(function (targetDate) {
  return new Date(targetDate.getFullYear(), 0, 1)
})

module.exports = getYearWeek
