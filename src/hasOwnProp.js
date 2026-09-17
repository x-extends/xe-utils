var isFunction = require('./isFunction')

var objectHasOwnProperty = Object.prototype.hasOwnProperty
var objHasOwn = Object.hasOwn

var handleObjHasOwn = isFunction(objHasOwn) ? objHasOwn: function(obj, key) {
  return objectHasOwnProperty.call(obj, key)
}

/**
  * 判断对象自身属性中是否具有指定的属性
  *
  * @param {Object} obj 对象
  * @param {String/Number} key 键值
  * @return {Boolean}
  */
function hasOwnProp(obj, key) {
  if (obj == null) {
    return false
  }
  return handleObjHasOwn(obj, key)
}

module.exports = hasOwnProp
