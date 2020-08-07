var setupDefaults = require('../setupDefaults')

var helperGetDateTime = require('./helperGetDateTime')
var helperNewDate = require('./helperNewDate')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

/**
  * 返回两个日期之间差距,如果结束日期小于开始日期done为fasle
  *
  * @param {Date} startDate 开始日期
  * @param {Date} endDate 结束日期或当期日期
  * @param {Date} rule 自定义计算规则
  * @return {Object}
  */
function getDateDiff (startDate, endDate, rules) {
  var startTime, endTime, item, diffTime, rule, len, index
  var result = { done: false, time: 0 }
  startDate = toStringDate(startDate)
  endDate = endDate ? toStringDate(endDate) : helperNewDate()
  if (isValidDate(startDate) && isValidDate(endDate)) {
    startTime = helperGetDateTime(startDate)
    endTime = helperGetDateTime(endDate)
    if (startTime < endTime) {
      diffTime = result.time = endTime - startTime
      rule = rules && rules.length > 0 ? rules : setupDefaults.dateDiffRules
      result.done = true
      for (index = 0, len = rule.length; index < len; index++) {
        item = rule[index]
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
