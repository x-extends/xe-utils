import { random } from './number'
import { isFunction, isArray, each, values } from './base'

/**
  * 数组去重
  *
  * @param {Array} array 数组
  * @return {Array}
  */
export function uniq (array) {
  var result = []
  if (isArray(array)) {
    array.forEach(function (value) {
      if (!result.includes(value)) {
        result.push(value)
      }
    })
  }
  return result
}

/**
  * 将多个数的值返回唯一的并集数组
  *
  * @param {...Array} 数组
  * @return {Array}
  */
export function union () {
  var result = []
  for (var index = 0, len = arguments.length; index < len; index++) {
    result = result.concat(arguments[index])
  }
  return uniq(result)
}

/**
  * 数组按属性值升序
  *
  * @param {Array} arr 数组
  * @param {Function, String} iteratee 方法或属性
  * @return {Array}
  */
export function sort (arr, iteratee, context) {
  if (isArray(arr)) {
    return arr.sort(iteratee ? isFunction(iteratee) ? iteratee.bind(context || this) : function (v1, v2) {
      return v1[iteratee] > v2[iteratee] ? 1 : -1
    } : function (v1, v2) {
      return v1 > v2 ? 1 : -1
    })
  }
  return arr
}

/**
  * 将一个数组随机打乱，返回一个新的数组
  *
  * @param {Array} array 数组
  * @return {Array}
  */
export function shuffle (array) {
  var result = []
  for (var list = values(array), len = list.length - 1; len >= 0; len--) {
    var index = len > 0 ? random(0, len) : 0
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}

/**
  * 从一个数组中随机返回几个元素
  *
  * @param {Array} array 数组
  * @param {Number} number 个数
  * @return {Array}
  */
export function sample (array, number) {
  var result = shuffle(array)
  if (arguments.length === 1) {
    return result[0]
  }
  if (number < result.length) {
    result.length = number || 0
  }
  return result
}

/**
  * 对象中的值中的每一项运行给定函数,如果函数对任一项返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
export function some (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
      return obj.some(iteratee, context)
    } else {
      for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
          if (iteratee.call(context, obj[index], index, obj)) {
            return true
          }
        }
      }
    }
  }
  return false
}

/**
  * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true,否则返回false
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
export function every (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
      return obj.every(iteratee, context)
    } else {
      for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
          if (!iteratee.call(context, obj[index], index, obj)) {
            return false
          }
        }
      }
    }
  }
  return true
}

/**
  * 根据回调过滤数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
export function filter (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
      return obj.filter(iteratee, context)
    } else {
      var result = {}
      each(obj, function (val, key) {
        if (iteratee.call(context, val, key, obj)) {
          result[key] = val
        }
      })
      return result
    }
  }
  return []
}

/**
  * 查找匹配第一条数据
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
export function find (obj, iteratee, context) {
  if (obj) {
    if (isArray(obj)) {
      return obj.find(iteratee, context)
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (iteratee.call(context, obj[key], key, obj)) {
            return obj[key]
          }
        }
      }
    }
  }
}

/**
  * 指定方法后的返回值组成的新数组
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Array}
  */
export function map (obj, iteratee, context) {
  var result = []
  if (obj) {
    if (isArray(obj)) {
      return obj.map(iteratee, context)
    } else {
      each(obj, function () {
        result.push(iteratee.call(context, arguments))
      })
    }
  }
  return result
}
