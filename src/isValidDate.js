var isDate = require('./isDate')
var helperDateGetTime = require('./helperDateGetTime')

/**
  * 判断是否有效的Date对象
  *
  * @param {any} val 对象
  * @return {boolean}
  */
function isValidDate (val) {
  return isDate(val) && !isNaN(helperDateGetTime(val))
}

module.exports = isValidDate
