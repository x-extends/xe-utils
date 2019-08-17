var isArray = require('./isArray')
var isPlainObject = require('./isPlainObject')

var objectMap = require('../object/objectMap')

var map = require('../array/map')

function startClone (func, arr, deep) {
  return func(arr, deep ? deepClone : function (val) {
    return val
  })
}

function deepClone (obj, deep) {
  return isPlainObject(obj) ? startClone(objectMap, obj, deep) : isArray(obj) ? startClone(map, obj, deep) : obj
}

/**
  * 浅拷贝/深拷贝
  *
  * @param {Object} obj 对象/数组
  * @param {Boolean} deep 是否深拷贝
  * @return {Object}
  */
function clone (obj, deep) {
  if (obj) {
    return deepClone(obj, deep)
  }
  return obj
}

module.exports = clone
