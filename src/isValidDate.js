var isDate = require('./isDate')
var helperGetDateTime = require('./helperGetDateTime')

/**
  * 判断是否有效的Date对象
  *
  * @param {any} val 对象
  * @return {boolean}
  */
function isValidDate (val) {
  return isDate(val) && !isNaN(helperGetDateTime(val))
}

module.exports = isValidDate
