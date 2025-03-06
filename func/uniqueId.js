var eqNull = require('./eqNull')

/**
  * 获取一个全局唯一标识
  *
  * @param {String} prefix 前缀
  * @return {Number}
  */
let __uniqueId = 1
function uniqueId (prefix) {
  return '' + (eqNull(prefix) ? '' : prefix) + __uniqueId++
}

module.exports = uniqueId
