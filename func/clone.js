var objectToString = require('./staticObjectToString')

var isArray = require('./isArray')
var objectEach = require('./objectEach')
var arrayEach = require('./arrayEach')

function getCtorObject (val, args) {
  var Ctor = val.__proto__.constructor
  return args ? new Ctor(args) : new Ctor()
}

function handleValueClone (item, isDeep) {
  return isDeep ? copyValue(item, isDeep) : item
}

function copyValue (val, isDeep) {
  if (val) {
    switch(objectToString.call(val)) {
      case "[object Object]":
      case "[object Arguments]": {
        var restObj = getCtorObject(val)
        objectEach(val, function (item, key) {
          restObj[key] = handleValueClone(item, isDeep)
        })
        return restObj
      }
      case "[object Date]":
      case "[object RegExp]": {
        return getCtorObject(val, val.valueOf())
      }
      case "[object Array]": {
        var restArr = []
        arrayEach(val, function (item) {
          restArr.push(handleValueClone(item, isDeep))
        })
        return restArr
      }
      case "[object Set]": {
        var restSet = getCtorObject(val)
        restSet.forEach(function (item) {
          restSet.add(handleValueClone(item, isDeep))
        })
        return restSet
      }
      case "[object Map]": {
        var restMap = getCtorObject(val)
        restMap.forEach(function (item, key) {
          restMap.set(handleValueClone(item, isDeep))
        })
        return restMap
      }
    }
  }
  return val
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
