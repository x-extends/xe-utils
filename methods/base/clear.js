var helperDeleteProperty = require('./helperDeleteProperty')

var isPlainObject = require('./isPlainObject')
var isObject = require('./isObject')
var isArray = require('./isArray')
var isNull = require('./isNull')
var assign = require('../object/assign')
var objectEach = require('../object/objectEach')

/**
  * 清空对象
  *
  * @param {Object} obj 对象
  * @param {*} defs 默认值,如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
  * @param {Object/Array} assigns 默认值
  * @return {Object}
  */
function clear (obj, defs, assigns) {
  if (obj) {
    var len
    var isDefs = arguments.length > 1 && (isNull(defs) || !isObject(defs))
    var extds = isDefs ? assigns : defs
    if (isPlainObject(obj)) {
      objectEach(obj, isDefs ? function (val, key) {
        obj[key] = defs
      } : function (val, key) {
        helperDeleteProperty(obj, key)
      })
      if (extds) {
        assign(obj, extds)
      }
    } else if (isArray(obj)) {
      if (isDefs) {
        len = obj.length
        while (len > 0) {
          len--
          obj[len] = defs
        }
      } else {
        obj.length = 0
      }
      if (extds) {
        obj.push.apply(obj, extds)
      }
    }
  }
  return obj
}

module.exports = clear
