/**
  * 获取一个全局唯一标识
  *
  * @param {String} prefix 前缀
  * @return {Number}
  */
var __uniqueId = 0
function uniqueId (prefix) {
  return (prefix ? '' + prefix : 0) + ++__uniqueId
}

module.exports = uniqueId
