var isObject = require('./isObject')
var isString = require('./isString')

/**
  * 字符串转JSON
  *
  * @param {String} str 字符串
  * @return {Object} 返回转换后对象
  */
function toStringJSON (str) {
  if (isObject(str)) {
    return str
  } else if (isString(str)) {
    try {
      return JSON.parse(str)
    } catch (e) {}
  }
  return {}
}

module.exports = toStringJSON
