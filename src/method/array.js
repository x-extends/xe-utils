'use strict'

var XEUtils = require('../core/utils')
var setupDefaults = require('../core/setup')
var baseExports = require('./base')

var FIND_PRO = 'find'
var MAP_PRO = 'map'
var FILTER_PRO = 'filter'
var EVERY_PRO = 'every'
var SOME_PRO = 'some'
var REDUCE_PRO = 'reduce'

function _objectHasOwnProperty (obj, key) {
  return obj.hasOwnProperty(key)
}

/**
  * 数组去重
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function arrayUniq (array) {
  var result = []
  baseExports.each(array, function (value) {
    if (!result.includes(value)) {
      result.push(value)
    }
  })
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
  var index = 0
  var len = args.length
  for (; index < len; index++) {
    result = result.concat(toArray(args[index]))
  }
  return arrayUniq(result)
}

function sortByDef (v1, v2) {
  return v1 > v2 ? 1 : -1
}

function sortMultis (name, compares) {
  return function (item1, item2) {
    var v1 = item1[name]
    var v2 = item2[name]
    if (v1 === v2) {
      return compares ? compares(item1, item2) : 0
    }
    return sortByDef(v1, v2)
  }
}

function getSortPros (arr, list, iterate, context) {
  iterate = baseExports.isArray(iterate) ? iterate : [iterate]
  baseExports.arrayEach(iterate, function (item, index) {
    baseExports.arrayEach(list, baseExports.isFunction(item) ? function (val, key) {
      val[index] = item.call(context, val.data, key, arr)
    } : function (val) {
      val[index] = val.data[item]
    })
  })
  return iterate
}

/**
  * 数组按属性值升序
  *
  * @param {Array} arr 数组
  * @param {Function/String/Array} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Array}
  */
function arraySort (arr, iterate, context, STR_UNDEFINED) {
  if (arr) {
    if (iterate === STR_UNDEFINED) {
      return toArray(arr).sort(sortByDef)
    }
    var compares
    var list = arrayMap(arr, function (item) {
      return { data: item }
    })
    var sortPros = getSortPros(arr, list, iterate, context || this)
    var len = sortPros.length
    if (len) {
      while (len >= 0) {
        compares = sortMultis(len, compares)
        len--
      }
      list = list.sort(compares)
    }
    return arrayMap(list, baseExports.property('data'))
  }
  return []
}

/**
  * 将一个数组随机打乱，返回一个新的数组
  *
  * @param {Array} array 数组
  * @return {Array}
  */
function arrayShuffle (array) {
  var index
  var result = []
  var list = baseExports.values(array)
  var len = list.length - 1
  for (; len >= 0; len--) {
    index = len > 0 ? XEUtils.random(0, len) : 0
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
  if (arguments.length <= 1) {
    return result[0]
  }
  if (number < result.length) {
    result.length = number || 0
  }
  return result
}

function isArrayPro (array, pro) {
  return baseExports.isArray(array) && array[pro]
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
    if (isArrayPro(SOME_PRO)) {
      return obj[SOME_PRO](iterate, context)
    } else {
      for (var key in obj) {
        if (_objectHasOwnProperty(obj, key)) {
          if (iterate.call(context, obj[key], key, obj)) {
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
    if (isArrayPro(EVERY_PRO)) {
      return obj[EVERY_PRO](iterate, context)
    } else {
      for (var key in obj) {
        if (_objectHasOwnProperty(obj, key)) {
          if (!iterate.call(context, obj[key], key, obj)) {
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
  var result = []
  if (obj && iterate) {
    context = context || this
    if (isArrayPro(FILTER_PRO)) {
      return obj[FILTER_PRO](iterate, context)
    }
    baseExports.each(obj, function (val, key) {
      if (iterate.call(context, val, key, obj)) {
        result.push(val)
      }
    })
  }
  return result
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
    if (isArrayPro(FIND_PRO)) {
      return obj[FIND_PRO](iterate, context)
    } else {
      for (var key in obj) {
        if (_objectHasOwnProperty(obj, key)) {
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
      if (_objectHasOwnProperty(obj, key)) {
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
  if (obj && arguments.length > 1) {
    context = context || this
    if (!baseExports.isFunction(iterate)) {
      iterate = baseExports.property(iterate)
    }
    if (isArrayPro(MAP_PRO)) {
      return obj[MAP_PRO](iterate, context)
    } else {
      baseExports.each(obj, function () {
        result.push(iterate.apply(context, arguments))
      })
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
  var toNumber = XEUtils.toNumber
  context = context || this
  baseExports.each(array, iterate ? baseExports.isFunction(iterate) ? function () {
    result += toNumber(iterate.apply(context, arguments))
  } : function (val) {
    result += toNumber(val[iterate])
  } : function (val) {
    result += toNumber(val)
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
  return XEUtils.toNumber(arraySum(array, iterate, context || this) / baseExports.getSize(array))
}

/**
  * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值。
  *
  * @param {Array} array 数组
  * @param {Function} callback 方法
  * @param {Object} initialValue 初始值
  * @return {Number}
  */
/* eslint-disable valid-typeof */
function arrayReduce (array, callback, initialValue, UNDEFINED) {
  if (array) {
    var len
    var index = 0
    var context = this
    var previous = initialValue
    var keyList = baseExports.keys(array)
    if (previous === UNDEFINED) {
      previous = array[keyList[0]]
      index = 1
    }
    if (isArrayPro(REDUCE_PRO)) {
      return array.reduce(function () {
        return callback.apply(context, arguments)
      }, previous)
    }
    for (len = keyList.length; index < len; index++) {
      previous = callback.call(context, previous, array[keyList[index]], index, array)
    }
    return previous
  }
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
  var replaceIndex
  var replaceArray
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
        for (replaceIndex = 0, replaceArray = array.slice(startIndex, endIndex); targetIndex < len; targetIndex++) {
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
  var index
  var result = []
  var arrLen = size >> 0 || 1
  if (baseExports.isArray(array)) {
    if (arrLen >= 0 && array.length > arrLen) {
      index = 0
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
 * 根据键数组、值数组对转换为对象
 *
 * @param {Array} props 键数组
 * @param {Number} values 值数组
 * @return {Object}
 */
function zipObject (props, values) {
  var result = {}
  values = values || []
  baseExports.each(baseExports.values(props), function (val, key) {
    result[val] = values[key]
  })
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
  var index = 0
  var len = XEUtils.max(arrays, function (item) {
    return item.length || 0
  }).length
  for (; index < len; index++) {
    result.push(arrayMap(arrays, index))
  }
  return result
}

/**
 * 将对象或者伪数组转为新数组
 *
 * @param {Array} obj 数组
 * @return {Array}
 */
function toArray (array) {
  return arrayMap(array, function (item) {
    return item
  })
}

/**
  * 判断数组是否包含另一数组
  *
  * @param {Array} array1 数组
  * @param {Array} array2 被包含数组
  * @return {Boolean}
  */
function includeArrays (array1, array2) {
  var len
  var index = 0
  var includes = baseExports.includes
  if (baseExports.isArray(array1) && baseExports.isArray(array2)) {
    for (len = array2.length; index < len; index++) {
      if (!includes(array1, array2[index])) {
        return false
      }
    }
    return true
  }
  return includes(array1, array2)
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

function deepGetObj (obj, path) {
  var index = 0
  var len = path.length
  while (obj && index < len) {
    obj = obj[path[index++]]
  }
  return len && obj ? obj : 0
}

/**
 * 在list的每个元素上执行方法,任何传递的额外参数都会在调用方法的时候传递给它
 *
 * @param {Array} list
 * @param {Array/String/Function} path
 * @param {...Object} arguments
 * @return {Array}
 */
function invokeMap (list, path) {
  var func
  var args = arguments
  var params = []
  var paths = []
  var index = 2
  var len = args.length
  for (; index < len; index++) {
    params.push(args[index])
  }
  if (baseExports.isArray(path)) {
    len = path.length - 1
    for (index = 0; index < len; index++) {
      paths.push(path[index])
    }
    path = path[len]
  }
  return arrayMap(list, function (context) {
    if (paths.length) {
      context = deepGetObj(context, paths)
    }
    func = context[path] || path
    if (func && func.apply) {
      return func.apply(context, params)
    }
  })
}

/**
  * 将一个带层级的数据列表转成树结构
  *
  * @param {Array} array 数组
  * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
  * @return {Array}
  */
function toArrayTree (array, options) {
  var opts = baseExports.assign({}, setupDefaults.treeOptions, options)
  var optStrict = opts.strict
  var optKey = opts.key
  var optParentKey = opts.parentKey
  var optChildren = opts.children
  var optSortKey = opts.sortKey
  var optReverse = opts.reverse
  var optData = opts.data
  var result = []
  var treeMap = {}
  var idList, id, treeData, parentId

  if (optSortKey) {
    array = arraySort(baseExports.clone(array), optSortKey)
    if (optReverse) {
      array = array.reverse()
    }
  }

  idList = arrayMap(array, function (item) {
    return item[optKey]
  })

  baseExports.each(array, function (item) {
    id = item[optKey]

    if (optData) {
      treeData = {}
      treeData[optData] = item
    } else {
      treeData = item
    }

    parentId = item[optParentKey]
    treeMap[id] = treeMap[id] || []
    treeMap[parentId] = treeMap[parentId] || []
    treeMap[parentId].push(treeData)
    treeData[optKey] = id
    treeData[optParentKey] = parentId
    treeData[optChildren] = treeMap[id]

    if (!optStrict || (optStrict && !parentId)) {
      if (!baseExports.includes(idList, parentId)) {
        result.push(treeData)
      }
    }
  })

  if (optStrict) {
    strictTree(array, optChildren)
  }

  return result
}

function strictTree (array, optChildren) {
  baseExports.each(array, function (item) {
    if (item.children && !item.children.length) {
      baseExports.remove(item, optChildren)
    }
  })
}

function unTreeList (result, array, opts) {
  var children
  var optChildren = opts.children
  var optData = opts.data
  baseExports.each(array, function (item) {
    children = item[optChildren]
    if (optData) {
      item = item[optData]
    } else {
      baseExports.remove(item, optChildren)
    }
    result.push(item)
    if (children) {
      unTreeList(result, children, opts)
    }
  })
  return result
}

/**
  * 将一个树结构转成数组列表
  *
  * @param {Array} array 数组
  * @param {Object} options {children: 'children', data: 'data'}
  * @return {Array}
  */
function toTreeArray (array, options) {
  return unTreeList([], array, baseExports.assign({}, setupDefaults.treeOptions, options))
}

var arrayExports = {
  uniq: arrayUniq,
  union: arrayUnion,
  sortBy: arraySort,
  shuffle: arrayShuffle,
  sample: arraySample,
  some: arraySome,
  every: arrayEvery,
  filter: arrayFilter,
  find: arrayFind,
  findKey: findKey,
  map: arrayMap,
  sum: arraySum,
  mean: arrayMean,
  reduce: arrayReduce,
  copyWithin: arrayCopyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  zipObject: zipObject,
  toArray: toArray,
  includeArrays: includeArrays,
  pluck: pluck,
  invoke: invokeMap,
  invokeMap: invokeMap,
  toArrayTree: toArrayTree,
  toTreeArray: toTreeArray
}

module.exports = arrayExports
