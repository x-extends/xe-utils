var helperDeleteProperty = require('./helperDeleteProperty')

var isFunction = require('./isFunction')
var isArray = require('./isArray')
var each = require('./each')
var arrayEach = require('../array/arrayEach')
var lastEach = require('./lastEach')
var clear = require('./clear')
var eqNull = require('./eqNull')

function pluckProperty (name) {
  return function (obj, key) {
    return key === name
  }
}

/**
  * 移除对象属性
  *
  * @param {Object/Array} obj 对象/数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Object/Array}
  */
function remove (obj, iterate, context) {
  if (obj) {
    if (!eqNull(iterate)) {
      var removeKeys = []
      var rest = []
      if (!isFunction(iterate)) {
        iterate = pluckProperty(iterate)
      }
      each(obj, function (item, index, rest) {
        if (iterate.call(context, item, index, rest)) {
          removeKeys.push(index)
        }
      })
      if (isArray(obj)) {
        lastEach(removeKeys, function (item, key) {
          rest.push(obj[item])
          obj.splice(item, 1)
        })
      } else {
        rest = {}
        arrayEach(removeKeys, function (key) {
          rest[key] = obj[key]
          helperDeleteProperty(obj, key)
        })
      }
      return rest
    }
    return clear(obj)
  }
  return obj
}

module.exports = remove
