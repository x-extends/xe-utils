var isSymbol = require('./isSymbol')
var isDate = require('./isDate')
var isArray = require('./isArray')
var isRegExp = require('./isRegExp')
var isError = require('./isError')
var isNull = require('./isNull')

/**
  * 获取对象类型
  *
  * @param {Object} obj 对象
  * @return {String}
  */
function getType (obj) {
  if (isNull(obj)) {
    return 'null'
  }
  if (isSymbol(obj)) {
    return 'symbol'
  }
  if (isDate(obj)) {
    return 'date'
  }
  if (isArray(obj)) {
    return 'array'
  }
  if (isRegExp(obj)) {
    return 'regexp'
  }
  if (isError(obj)) {
    return 'error'
  }
  return typeof obj
}

module.exports = getType
