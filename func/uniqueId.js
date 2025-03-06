var setupDefaults = require('./setupDefaults')

var eqNull = require('./eqNull')

/**
  * 获取一个全局唯一标识
  *
  * @param {String} prefix 前缀
  * @return {Number}
  */
function uniqueId (prefix) {
  return '' + (eqNull(prefix) ? '' : prefix) + (setupDefaults.keyId++)
}

module.exports = uniqueId
