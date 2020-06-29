var values = require('./values')

/**
  * 获取对象最后一个值
  *
  * @param {Object} obj 对象/数组
  * @return {Object}
  */
function last (obj) {
  var list = values(obj)
  return list[list.length - 1]
}

module.exports = last
