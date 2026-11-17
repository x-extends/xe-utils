var objectToString = require('./staticObjectToString')

function getCativeCtor (val, args) {
  var Ctor = Object.getPrototypeOf(val).constructor
  return args !== undefined ? new Ctor(args) : new Ctor()
}

function handleValueClone (item, isDeep) {
  return isDeep ? copyValue(item, isDeep) : item
}

function copyValue (val, isDeep) {
  // 基本类型直接返回
  if (!val || typeof val !== 'object') {
    return val
  }

  // 优先用 Array.isArray 分流
  if (Array.isArray(val)) {
    var len = val.length
    var restArr = new Array(len)
    for (var i = 0; i < len; i++) {
      restArr[i] = handleValueClone(val[i], isDeep)
    }
    return restArr
  }

  switch (objectToString.call(val)) {
    case '[object Object]': {
      var restObj = Object.create(Object.getPrototypeOf(val))
      var keys = Object.keys(val)
      for (var k = 0, klen = keys.length; k < klen; k++) {
        var key = keys[k]
        restObj[key] = handleValueClone(val[key], isDeep)
      }
      return restObj
    }
    case '[object Date]':
    case '[object RegExp]': {
      return getCativeCtor(val, val.valueOf())
    }
    case '[object Arguments]': {
      var aLen = val.length
      var restArgs = new Array(aLen)
      for (var j = 0; j < aLen; j++) {
        restArgs[j] = handleValueClone(val[j], isDeep)
      }
      return restArgs
    }
    case '[object Set]': {
      var restSet = getCativeCtor(val)
      val.forEach(function (item) {
        restSet.add(handleValueClone(item, isDeep))
      })
      return restSet
    }
    case '[object Map]': {
      var restMap = getCativeCtor(val)
      val.forEach(function (item, key) {
        restMap.set(key, handleValueClone(item, isDeep))
      })
      return restMap
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
  return copyValue(obj, deep)
}

module.exports = clone
