'use strict'

var XEUtils = require('../core/utils')
var setupDefaults = require('../core/setup')
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
  * @param {Function/String} iterate 方法或属性
  * @return {Array}
  */
function arraySort (arr, iterate, context) {
  if (baseExports.isArray(arr)) {
    return arr.sort(iterate ? baseExports.isFunction(iterate) ? iterate.bind(context || this) : function (v1, v2) {
      return v1[iterate] > v2[iterate] ? 1 : -1
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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
function arraySome (obj, iterate, context) {
  if (obj && iterate) {
    context = context || this
    if (baseExports.isArray(obj) && obj.some) {
      return obj.some(iterate, context)
    } else {
      for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
          if (iterate.call(context, obj[index], index, obj)) {
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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Boolean}
  */
function arrayEvery (obj, iterate, context) {
  if (obj && iterate) {
    context = context || this
    if (baseExports.isArray(obj) && obj.every) {
      return obj.every(iterate, context)
    } else {
      for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
          if (!iterate.call(context, obj[index], index, obj)) {
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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function arrayFilter (obj, iterate, context) {
  if (obj && iterate) {
    context = context || this
    if (baseExports.isArray(obj) && obj.filter) {
      return obj.filter(iterate, context)
    } else {
      var result = {}
      baseExports.each(obj, function (val, key) {
        if (iterate.call(context, val, key, obj)) {
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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function arrayFind (obj, iterate, context) {
  if (obj && iterate) {
    context = context || this
    if (baseExports.isArray(obj) && obj.find) {
      return obj.find(iterate, context)
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (iterate.call(context, obj[key], key, obj)) {
            return obj[key]
          }
        }
      }
    }
  }
}

/**
  * 查找匹配第一条数据的键
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function findKey (obj, iterate, context) {
  if (obj && iterate) {
    context = context || this
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (iterate.call(context, obj[key], key, obj)) {
          return key
        }
      }
    }
  }
}

/**
  * 指定方法后的返回值组成的新数组
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Array}
  */
function arrayMap (obj, iterate, context) {
  var result = []
  if (obj) {
    if (arguments.length > 1) {
      context = context || this
      if (!baseExports.isFunction(iterate)) {
        iterate = baseExports.property(iterate)
      }
      if (baseExports.isArray(obj)) {
        return obj.map(iterate, context)
      } else {
        baseExports.each(obj, function () {
          result.push(iterate.apply(context, arguments))
        })
      }
    } else {
      return obj
    }
  }
  return result
}

/**
  * 求和函数，将数值相加
  *
  * @param {Array} array 数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function arraySum (array, iterate, context) {
  var result = 0
  context = context || this
  baseExports.each(array, iterate ? baseExports.isFunction(iterate) ? function () {
    result += iterate.apply(context, arguments) || 0
  } : function (val) {
    result += parseFloat(val[iterate] || 0)
  } : function (val) {
    result += parseFloat(val || 0)
  })
  return result
}

/**
  * 求平均值函数
  *
  * @param {Array} array 数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Number}
  */
function arrayMean (array, iterate, context) {
  return arraySum(array, iterate, context || this) / baseExports.getSize(array)
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
    result.push(arrayMap(arrays, index))
  }
  return result
}

/**
 * 根据数组或可迭代对象中创建一个新的数组
 *
 * @param {Array} obj 数组
 * @param {Function} iterate(item, index, array) 回调
 * @param {Object} context 上下文
 * @return {Array}
 */
function from (array, iterate, context) {
  if (baseExports.isArray(array)) {
    return array
  }
  if (array === null || array === undefined) {
    return []
  }
  var result = []
  for (var index = 0, len = array.length; index < len; index++) {
    result.push(array[index])
  }
  return arguments.length < 2 ? result : arrayMap(result, iterate, context || this)
}

/**
  * 判断数组是否包含另一数组
  *
  * @param {Array} array1 数组
  * @param {Array} array2 被包含数组
  * @return {Boolean}
  */
function includeArrays (array1, array2) {
  if (baseExports.isArray(array2)) {
    for (var index = 0, len = array2.length; index < len; index++) {
      if (!baseExports.includes(array1, array2[index])) {
        return false
      }
    }
  } else {
    return baseExports.includes(array1, array2)
  }
  return true
}

/**
  * 获取数组对象中某属性值，返回一个数组
  *
  * @param {Array} array 数组
  * @param {String} key 属性值
  * @return {Array}
  */
function pluck (obj, key) {
  return arrayMap(obj, key)
}

/**
  * 将一个带层级的数据列表转成树结构
  *
  * @param {Array} array 数组
  * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
  * @return {Array}
  */
function arrayToTree (array, options) {
  var opts = baseExports.objectAssign({}, setupDefaults.treeOptions, options)
  var optStrict = opts.strict
  var optKey = opts.key
  var optParentKey = opts.parentKey
  var optChildren = opts.children
  var optData = opts.data
  var result = []
  var treeMap = {}
  var ids = arrayMap(array, function (item) {
    return item[optKey]
  })
  for (var item, id, parentId, treeData, index = 0, len = array.length; index < len; index++) {
    item = array[index]
    id = item[optKey]

    if (optData === null) {
      treeData = item
    } else {
      treeData = {}
      treeData[optData] = item
    }

    parentId = item[optParentKey]
    treeMap[id] = treeMap[id] || []
    treeMap[parentId] = treeMap[parentId] || []
    treeMap[parentId].push(treeData)

    treeData[optKey] = id
    treeData[optParentKey] = parentId
    treeData[optChildren] = treeMap[id]

    if (!optStrict || (optStrict && !parentId)) {
      if (baseExports.indexOf(ids, parentId) === -1) {
        result.push(treeData)
      }
    }
  };

  return result
}

function unTreeList (result, array, opts) {
  var optChildren = opts.children
  var optData = opts.data
  for (var item, children, index = 0, len = array.length; index < len; index++) {
    item = array[index]
    children = item[optChildren]
    if (optData === null) {
      try {
        delete item[optChildren]
      } catch (e) {
        item[optChildren] = undefined
      }
    } else {
      item = item[optData]
    }
    result.push(item)
    if (children) {
      unTreeList(result, children, opts)
    }
  }
  return result
}

/**
  * 将一个树结构转成数组列表
  *
  * @param {Array} array 数组
  * @param {Object} options {children: 'children', data: 'data'}
  * @return {Array}
  */
function treeToArray (array, options) {
  var opts = baseExports.objectAssign({}, setupDefaults.treeOptions, options)
  return unTreeList([], array, opts)
}

var arrayExports = {
  arrayUniq: arrayUniq,
  uniq: arrayUniq,
  arrayUnion: arrayUnion,
  union: arrayUnion,
  arraySort: arraySort,
  sort: arraySort,
  sortBy: arraySort,
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
  findKey: findKey,
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
  toArray: from,
  includeArrays: includeArrays,
  pluck: pluck,
  arrayToTree: arrayToTree,
  treeToArray: treeToArray
}

module.exports = arrayExports
