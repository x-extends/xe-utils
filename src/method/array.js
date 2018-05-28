'use strict'

var XEUtils = require('../core/utils')
var baseExports = require('./base')

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

/**
  * 将多个数的值返回唯一的并集数组
  *
  * @param {...Array} 数组
  * @return {Array}
  */
function arrayUnion () {
  var args = arguments
  var result = []
  for (var index = 0, len = args.length; index < len; index++) {
    result = result.concat(args[index])
  }
  return arrayUniq(result)
}

/**
  * 数组按属性值升序
  *
  * @param {Array} arr 数组
  * @param {Function/String} iteratee 方法或属性
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

/**
  * 将一个数组随机打乱，返回一个新的数组
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function arrayShuffle (array) {
  var result = []
  for (var list = baseExports.objectValues(array), len = list.length - 1; len >= 0; len--) {
    var index = len > 0 ? XEUtils.getRandom(0, len) : 0
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
    context = context || this
    if (baseExports.isArray(obj) && obj.some) {
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
function arrayEvery (obj, iteratee, context) {
  if (obj) {
    context = context || this
    if (baseExports.isArray(obj) && obj.every) {
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
function arrayFilter (obj, iteratee, context) {
  if (obj) {
    context = context || this
    if (baseExports.isArray(obj) && obj.filter) {
      return obj.filter(iteratee, context)
    } else {
      var result = {}
      baseExports.each(obj, function (val, key) {
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
function arrayFind (obj, iteratee, context) {
  if (obj) {
    context = context || this
    if (baseExports.isArray(obj) && obj.find) {
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
function arrayMap (obj, iteratee, context) {
  var result = []
  if (obj) {
    context = context || this
    if (baseExports.isArray(obj)) {
      return obj.map(iteratee, context)
    } else {
      baseExports.each(obj, function () {
        result.push(iteratee.apply(context, arguments))
      })
    }
  }
  return result
}

/**
  * 求和函数，将数值相加
  *
  * @param {Array} array 数组
  * @param {Function/String} iteratee 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function arraySum (array, iteratee, context) {
  var result = 0
  context = context || this
  baseExports.each(array, iteratee ? baseExports.isFunction(iteratee) ? function () {
    result += iteratee.apply(context, arguments)
  } : function (val, key) {
    result += val[iteratee]
  } : function (val, key) {
    result += val
  })
  return result
}

/**
  * 求平均值函数
  *
  * @param {Array} array 数组
  * @param {Function/String} iteratee 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function arrayMean (array, iteratee, context) {
  return arraySum(array, iteratee, context || this) / baseExports.getSize(array)
}

/**
  * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值。
  *
  * @param {Array} array 数组
  * @param {Function} callback 方法
  * @param {Object} initialValue 初始值
  * @return {Number}
  */
function arrayReduce (array, callback, initialValue) {
  var previous = initialValue
  var index = 0
  var len = array.length
  var context = this
  if (baseExports.isArray(array)) {
    if (typeof initialValue === 'undefined') {
      previous = array[0]
      index = 1
    }
    if (array.reduce) {
      return array.reduce(callback, initialValue)
    } else {
      for (; index < len; index++) {
        previous = callback.call(context, previous, array[index], index, array)
      }
    }
  } else {
    baseExports.each(array, function (val, key) {
      previous = callback.call(context, previous, val, key, array)
    })
  }
  return previous
}

/**
  * 浅复制数组的一部分到同一数组中的另一个位置,数组大小不变
  *
  * @param {Array} array 数组
  * @param {Number} target 从该位置开始替换数据
  * @param {Number} start 从该位置开始读取数据，默认为 0 。如果为负值，表示倒数
  * @param {Number} end 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
  * @return {Array}
  */
function arrayCopyWithin (array, target, start, end) {
  if (baseExports.isArray(array) && array.copyWithin) {
    return array.copyWithin(target, start, end)
  }
  var targetIndex = target >> 0
  var startIndex = start >> 0
  var len = array.length
  var endIndex = arguments.length > 3 ? end >> 0 : len
  if (targetIndex < len) {
    targetIndex = targetIndex >= 0 ? targetIndex : len + targetIndex
    if (targetIndex >= 0) {
      startIndex = startIndex >= 0 ? startIndex : len + startIndex
      endIndex = endIndex >= 0 ? endIndex : len + endIndex
      if (startIndex < endIndex) {
        for (var replaceIndex = 0, replaceArray = array.slice(startIndex, endIndex); targetIndex < len; targetIndex++) {
          if (replaceArray.length <= replaceIndex) {
            break
          }
          array[targetIndex] = replaceArray[replaceIndex++]
        }
      }
    }
  }
  return array
}

/**
  * 将一个数组分割成大小的组。如果数组不能被平均分配，那么最后一块将是剩下的元素
  *
  * @param {Array} array 数组
  * @param {Number} size 每组大小
  * @return {Array}
  */
function chunk (array, size) {
  var result = []
  var arrLen = size >> 0 || 1
  if (baseExports.isArray(array)) {
    if (arrLen >= 0 && array.length > arrLen) {
      var index = 0
      while (index < array.length) {
        result.push(array.slice(index, index + arrLen))
        index += arrLen
      }
    } else {
      result = array.length ? [array] : array
    }
  }
  return result
}

/**
 * 将每个数组中相应位置的值合并在一起
 *
 * @param {Array*} array 数组
 */
function zip () {
  return unzip(arguments)
}

/**
 * 与 zip 相反
 *
 * @param {Array} arrays 数组集合
 */
function unzip (arrays) {
  var result = []
  var len = XEUtils.max(arrays, function (item) {
    return item.length || 0
  })
  for (var index = 0; index < len; index++) {
    result.push(arrayMap(arrays, function (item) {
      return item ? item[index] : null
    }))
  }
  return result
}

/**
 * 根据数组或可迭代对象中创建一个新的数组
 *
 * @param {Array} obj 数组
 * @param {Function} callback(item, index, array) 回调
 * @param {Object} context 上下文
 * @return {Array}
 */
function from (array, callback, context) {
  if (baseExports.isArray(array)) {
    return array
  }
  if (array === null || array === undefined) {
    return []
  }
  var result = []
  context = context || this
  if (array.length) {
    for (var index = 0, len = parseInt(array.length); index < len; index++) {
      result.push(array[index])
    }
  }
  return arguments.length < 2 ? result : arrayMap(result, callback, context)
}

var arrayExports = {
  arrayUniq: arrayUniq,
  uniq: arrayUniq,
  arrayUnion: arrayUnion,
  union: arrayUnion,
  arraySort: arraySort,
  sort: arraySort,
  arrayShuffle: arrayShuffle,
  shuffle: arrayShuffle,
  arraySample: arraySample,
  sample: arraySample,
  arraySome: arraySome,
  some: arraySome,
  arrayEvery: arrayEvery,
  every: arrayEvery,
  arrayFilter: arrayFilter,
  filter: arrayFilter,
  arrayFind: arrayFind,
  find: arrayFind,
  arrayMap: arrayMap,
  map: arrayMap,
  arraySum: arraySum,
  sum: arraySum,
  arrayMean: arrayMean,
  mean: arrayMean,
  arrayReduce: arrayReduce,
  reduce: arrayReduce,
  arrayCopyWithin: arrayCopyWithin,
  copyWithin: arrayCopyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  from: from,
  toArray: from
}

module.exports = arrayExports
