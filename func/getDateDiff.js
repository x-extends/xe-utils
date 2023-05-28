var helperGetDateTime = require('./helperGetDateTime')
var helperNewDate = require('./helperNewDate')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

var dateDiffRules = [
  ['yyyy', 31536000000],
  ['MM', 2592000000],
  ['dd', 86400000],
  ['HH', 3600000],
  ['mm', 60000],
  ['ss', 1000],
  ['S', 0]
]

/**
  * 返回两个日期之间差距,如果结束日期小于开始日期done为fasle
  *
  * @param {Date} startDate 开始日期
  * @param {Date} endDate 结束日期或当期日期
  * @return {Object}
  */
function getDateDiff (startDate, endDate) {
  var startTime, endTime, item, diffTime, len, index
  var result = { done: false, time: 0 }
  startDate = toStringDate(startDate)
  endDate = endDate ? toStringDate(endDate) : helperNewDate()
  if (isValidDate(startDate) && isValidDate(endDate)) {
    startTime = helperGetDateTime(startDate)
    endTime = helperGetDateTime(endDate)
    if (startTime < endTime) {
      diffTime = result.time = endTime - startTime
      result.done = true
      for (index = 0, len = dateDiffRules.length; index < len; index++) {
        item = dateDiffRules[index]
        if (diffTime >= item[1]) {
          if (index === len - 1) {
            result[item[0]] = diffTime || 0
          } else {
            result[item[0]] = Math.floor(diffTime / item[1])
            diffTime -= result[item[0]] * item[1]
          }
        } else {
          result[item[0]] = 0
        }
      }
    }
  }
  return result
}

module.exports = getDateDiff
