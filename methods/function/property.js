var isNull = require('../base/isNull')

/**
 * 返回一个获取对象属性的函数
 *
 * @param {String} name 属性名
 * @param {Object} defs 空值
 */
function property (name, defs) {
  return function (obj) {
    return isNull(obj) ? defs : obj[name]
  }
}

module.exports = property
