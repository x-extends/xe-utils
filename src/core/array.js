import { getRandom } from './number'
import { isFunction, isArray, each, arrayEach, objectValues } from './base'

/**
  * 数组去重
  *
  * @param {Array} array 数组
  * @return {Array}
  */
export function arrayUniq (array) {
  var result = []
  if (isArray(array)) {
    arrayEach(array, function (value) {
      if (!result.includes(value)) {
        result.push(value)
      }
    })
  }
  return result
}
export var uniq = arrayUniq

/**
  * 将多个数的值返回唯一的并集数组
  *
  * @param {...Array} 数组
  * @return {Array}
  */
export function arrayUnion () {
  var result = []
  for (var index = 0, len = arguments.length; index < len; index++) {
    result = result.concat(arguments[index])
  }
  return arrayUniq(result)
}
export var union = arrayUnion

/**
  * 数组按属性值升序
  *
  * @param {Array} arr 数组
  * @param {Function, String} iteratee 方法或属性
  * @return {Array}
  */
export function arraySort (arr, iteratee, context) {
  if (isArray(arr)) {
    return arr.sort(iteratee ? isFunction(iteratee) ? iteratee.bind(context || this) : function (v1, v2) {
      return v1[iteratee] > v2[iteratee] ? 1 : -1
    } : function (v1, v2) {
      return v1 > v2 ? 1 : -1
    })
  }
  return arr
}
export var sort = arraySort

/**
  * 将一个数组随机打乱，返回一个新的数组
  *
  * @param {Array} array 数组
  * @return {Array}
  */
export function arrayShuffle (array) {
  var result = []
  for (var list = objectValues(array), len = list.length - 1; len >= 0; len--) {
    var index = len > 0 ? getRandom(0, len) : 0
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}
export var shuffle = arrayShuffle

/**
  * 从一个数组中随机返回几个元素
  *
  * @param {Array} array 数组
  * @param {Number} number 个数
  * @return {Array}
  */
export function arraySample (array, number) {
  var result = arrayShuffle(array)
  if (arguments.length === 1) {
    return result[0]
  }
  if (number < result.length) {
    result.length = number || 0
  }
  return result
}
export var sample = arraySample

/**
  * 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
export function arraySome (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
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
export var some = arraySome

/**
  * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
export function arrayEvery (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
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
export var every = arrayEvery

/**
  * 根据回调过滤数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
export function arrayFilter (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
      return obj.filter(iteratee, context || this)
    } else {
      var result = {}
      each(obj, function (val, key) {
        if (iteratee.call(context || this, val, key, obj)) {
          result[key] = val
        }
      })
      return result
    }
  }
  return []
}
export var filter = arrayFilter

/**
  * 查找匹配第一条数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
export function arrayFind (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
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
export var find = arrayFind

/**
  * 指定方法后的返回值组成的新数组
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Array}
  */
export function arrayMap (obj, iteratee, context) {
  var result = []
  if (obj) {
    if (isArray(obj)) {
      return obj.map(iteratee, context || this)
    } else {
      each(obj, function () {
        result.push(iteratee.apply(context || this, arguments))
      })
    }
  }
  return result
}
export var map = arrayMap
