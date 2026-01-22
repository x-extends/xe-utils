var values = require('./values')

/**
  * 获取对象第一个值
  *
  * @param {Object} obj 对象/数组
  * @return {Object}
  */
function first (obj) {
  return values(obj)[0]
}

module.exports = first
