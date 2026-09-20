var isArray = require('./isArray')
var lastArrayEach = require('./lastArrayEach')
var lastObjectEach = require('./lastObjectEach')
var lastMapEach = require('./lastMapEach')
var lastSetEach = require('./lastSetEach')
var isSet = require('./isSet')
var isMap = require('./isMap')

/**
  * 迭代器,从最后开始迭代
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function lastEach (obj, iterate, context) {
  if (obj) {
    if (isArray(obj)) {
      lastArrayEach(obj, iterate, context)
    } else if (isMap(obj)) {
      lastMapEach(obj, iterate, context)
    } else if (isSet(obj)) {
      lastSetEach(obj, iterate, context)
    } else {
      lastObjectEach(obj, iterate, context)
    }
  }
  return obj
}

module.exports = lastEach
