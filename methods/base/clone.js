var objectToString = require('../static/staticObjectToString')

var isArray = require('./isArray')
var isPlainObject = require('./isPlainObject')

var objectMap = require('../object/objectMap')

var map = require('../array/map')

function handleObjectAndArrayClone (func, obj, deep) {
  return func(obj, deep ? function (val) {
    return copyValue(val, deep)
  } : function (val) {
    return val
  })
}

function handleValueClone (val, deep) {
  if (deep && val) {
    var Ctor = val.constructor;
    switch(objectToString.call(val)) {
      case "[object Date]":
      case "[object RegExp]":
        return new Ctor(val.valueOf())
      case "[object Set]":
        var set = new Ctor()
        val.forEach(function (v) {
          set.add(v)
        })
        return set
      case "[object Map]":
        var map = new Ctor()
        val.forEach(function (v, k) {
          map.set(k, v)
        })
        return map
    }
  }
  return val
}

function copyValue (val, deep) {
  if (isPlainObject(val)) {
    return handleObjectAndArrayClone(objectMap, val, deep)
  } else if (isArray(val)) {
    return handleObjectAndArrayClone(map, val, deep)
  }
  return handleValueClone(val, deep)
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
    return copyValue(obj, deep)
  }
  return obj
}

module.exports = clone
