'use strict'

var baseExports = require('./base')
var numberExports = require('./number')

/**
  * 数组去重
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function arrayUniq (array) {
  var result = []
  if (baseExports.isArray(array)) {
    baseExports.arrayEach(array, function (value) {
      if (!result.includes(value)) {
        result.push(value)
      }
    })
  }
  return result
}
var uniq = arrayUniq

/**
  * 将多个数的值返回唯一的并集数组
  *
  * @param {...Array} 数组
  * @return {Array}
  */
function arrayUnion () {
  var result = []
  for (var index = 0, len = arguments.length; index < len; index++) {
    result = result.concat(arguments[index])
  }
  return arrayUniq(result)
}
var union = arrayUnion

/**
  * 数组按属性值升序
  *
  * @param {Array} arr 数组
  * @param {Function, String} iteratee 方法或属性
  * @return {Array}
  */
function arraySort (arr, iteratee, context) {
  if (baseExports.isArray(arr)) {
    return arr.sort(iteratee ? baseExports.isFunction(iteratee) ? iteratee.bind(context || this) : function (v1, v2) {
      return v1[iteratee] > v2[iteratee] ? 1 : -1
    } : function (v1, v2) {
      return v1 > v2 ? 1 : -1
    })
  }
  return arr
}
var sort = arraySort

/**
  * 将一个数组随机打乱，返回一个新的数组
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function arrayShuffle (array) {
  var result = []
  for (var list = baseExports.objectValues(array), len = list.length - 1; len >= 0; len--) {
    var index = len > 0 ? numberExports.getRandom(0, len) : 0
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}
var shuffle = arrayShuffle

/**
  * 从一个数组中随机返回几个元素
  *
  * @param {Array} array 数组
  * @param {Number} number 个数
  * @return {Array}
  */
function arraySample (array, number) {
  var result = arrayShuffle(array)
  if (arguments.length === 1) {
    return result[0]
  }
  if (number < result.length) {
    result.length = number || 0
  }
  return result
}
var sample = arraySample

/**
  * 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
function arraySome (obj, iteratee, context) {
  if (obj) {
    if (baseExports.isArray(obj)) {
      return obj.some(iteratee, context || this)
    } else {
      for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
          if (iteratee.call(context || this, obj[index], index, obj)) {
            return true
          }
        }
      }
    }
  }
  return false
}
var some = arraySome

/**
  * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
function arrayEvery (obj, iteratee, context) {
  if (obj) {
    if (baseExports.isArray(obj)) {
      return obj.every(iteratee, context || this)
    } else {
      for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
          if (!iteratee.call(context || this, obj[index], index, obj)) {
            return false
          }
        }
      }
    }
  }
  return true
}
var every = arrayEvery

/**
  * 根据回调过滤数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function arrayFilter (obj, iteratee, context) {
  if (obj) {
    if (baseExports.isArray(obj)) {
      return obj.filter(iteratee, context || this)
    } else {
      var result = {}
      baseExports.each(obj, function (val, key) {
        if (iteratee.call(context || this, val, key, obj)) {
          result[key] = val
        }
      })
      return result
    }
  }
  return []
}
var filter = arrayFilter

/**
  * 查找匹配第一条数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function arrayFind (obj, iteratee, context) {
  if (obj) {
    if (baseExports.isArray(obj)) {
      return obj.find(iteratee, context || this)
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (iteratee.call(context || this, obj[key], key, obj)) {
            return obj[key]
          }
        }
      }
    }
  }
}
var find = arrayFind

/**
  * 指定方法后的返回值组成的新数组
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Array}
  */
function arrayMap (obj, iteratee, context) {
  var result = []
  if (obj) {
    if (baseExports.isArray(obj)) {
      return obj.map(iteratee, context || this)
    } else {
      baseExports.each(obj, function () {
        result.push(iteratee.apply(context || this, arguments))
      })
    }
  }
  return result
}
var map = arrayMap

var arrayExports = {
  arrayUniq: arrayUniq,
  uniq: uniq,
  arrayUnion: arrayUnion,
  union: union,
  arraySort: arraySort,
  sort: sort,
  arrayShuffle: arrayShuffle,
  shuffle: shuffle,
  arraySample: arraySample,
  sample: sample,
  arraySome: arraySome,
  some: some,
  arrayEvery: arrayEvery,
  every: every,
  arrayFilter: arrayFilter,
  filter: filter,
  arrayFind: arrayFind,
  find: find,
  arrayMap: arrayMap,
  map: map
}

module.exports = arrayExports
