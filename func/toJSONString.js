var eqNull = require('./eqNull')

/**
  * JSON转字符串
  *
  * @param {Object} obj 对象
  * @return {String} 返回字符串
  */
function toJSONString (obj) {
  return eqNull(obj) ? '' : JSON.stringify(obj)
}

module.exports = toJSONString
