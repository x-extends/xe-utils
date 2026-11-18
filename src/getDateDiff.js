var staticDayTime = require('./staticDayTime')

var helperDateGetTime = require('./helperDateGetTime')
var helperNewEmptyDate = require('./helperNewEmptyDate')
var helperMathFloor = require('./helperMathFloor')

var toStringDate = require('./toStringDate')

var isValidDate = require('./isValidDate')

/**
  * 返回两个日期之间差距,如果结束日期小于开始日期done为fasle
  *
  * @param {Date} startDate 开始日期
  * @param {Date} endDate 结束日期或当期日期
  * @return {Object}
  */
function getDateDiff (startDate, endDate) {
  var result = { done: false, status: false, time: 0 }
  startDate = toStringDate(startDate)
  endDate = endDate ? toStringDate(endDate) : helperNewEmptyDate()

  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return result
  }

  var startTime = helperDateGetTime(startDate)
  var endTime = helperDateGetTime(endDate)

  if (startTime >= endTime) {
    return result
  }

  var diffTime = endTime - startTime
  result.time = diffTime
  result.done = true
  result.status = true

  result.yyyy = helperMathFloor(diffTime / 31536000000)
  diffTime -= result.yyyy * 31536000000

  result.MM = helperMathFloor(diffTime / 2592000000)
  diffTime -= result.MM * 2592000000

  result.dd = helperMathFloor(diffTime / staticDayTime)
  diffTime -= result.dd * staticDayTime

  result.HH = helperMathFloor(diffTime / 3600000)
  diffTime -= result.HH * 3600000

  result.mm = helperMathFloor(diffTime / 60000)
  diffTime -= result.mm * 60000

  result.ss = helperMathFloor(diffTime / 1000)
  diffTime -= result.ss * 1000

  result.S = diffTime

  return result
}

module.exports = getDateDiff
