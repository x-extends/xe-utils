var isArray = require('./isArray')
var isMap = require('./isMap')
var isSet = require('./isSet')
var arrayEach = require('./arrayEach')
var objectEach = require('./objectEach')
var mapEach = require('./mapEach')
var setEach = require('./setEach')

/**
  * 迭代器
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function each (obj, iterate, context) {
  if (obj) {
    if (isArray(obj)) {
      arrayEach(obj, iterate, context)
    } else if (isMap(obj)) {
      mapEach(obj, iterate, context)
    } else if (isSet(obj)) {
      setEach(obj, iterate, context)
    } else {
      objectEach(obj, iterate, context)
    }
  }
  return obj
}

module.exports = each
