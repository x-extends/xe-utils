/**
 * xe-utils.js v1.6.5
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 * @preserve
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
    : typeof define === 'function' && define.amd ? define(factory)
      : (global.XEUtils = factory())
}(this, function () {
  'use strict'

  function XEUtils () { }

  XEUtils.version = '1.6.5'

  var formatString = 'yyyy-MM-dd HH:mm:ss'
  var setupDefaults = {
    treeOptions: { strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data' },
    formatDate: formatString + '.SSS',
    formatString: formatString,
    formatStringMatchs: null,
    dateDiffRules: [['yyyy', 31536000000], ['MM', 2592000000], ['dd', 86400000], ['HH', 3600000], ['mm', 60000], ['ss', 1000], ['S', 0]]
  }

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
    if (obj && iteratee) {
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
    if (obj && iteratee) {
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
    if (obj && iteratee) {
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
    if (obj && iteratee) {
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
    * 查找匹配第一条数据的键
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  function findKey (obj, iteratee, context) {
    if (obj && iteratee) {
      context = context || this
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (iteratee.call(context, obj[key], key, obj)) {
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
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Array}
    */
  function arrayMap (obj, iteratee, context) {
    var result = []
    if (obj) {
      if (iteratee) {
        context = context || this
        if (!baseExports.isFunction(iteratee)) {
          iteratee = baseExports.property(iteratee)
        }
        if (baseExports.isArray(obj)) {
          return obj.map(iteratee, context)
        } else {
          baseExports.each(obj, function () {
            result.push(iteratee.apply(context, arguments))
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
    * @param {Function/String} iteratee 方法或属性
    * @param {Object} context 上下文
    * @return {Number}
    */
  function arraySum (array, iteratee, context) {
    var result = 0
    context = context || this
    baseExports.each(array, iteratee ? baseExports.isFunction(iteratee) ? function () {
      result += iteratee.apply(context, arguments) || 0
    } : function (val) {
      result += parseFloat(val[iteratee] || 0)
    } : function (val) {
      result += parseFloat(val || 0)
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
      result.push(arrayMap(arrays, index))
    }
    return result
  }

  /**
   * 根据数组或可迭代对象中创建一个新的数组
   *
   * @param {Array} obj 数组
   * @param {Function} iteratee(item, index, array) 回调
   * @param {Object} context 上下文
   * @return {Array}
   */
  function from (array, iteratee, context) {
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
    return arguments.length < 2 ? result : arrayMap(result, iteratee, context || this)
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
      treeData = {}
      item = array[index]
      id = item[optKey]
      parentId = item[optParentKey]
      treeMap[id] = treeMap[id] || []
      treeMap[parentId] = treeMap[parentId] || []
      treeMap[parentId].push(treeData)

      treeData[optKey] = id
      treeData[optParentKey] = parentId
      treeData[optChildren] = treeMap[id]
      treeData[optData] = optData === null ? optData : item

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
    for (var item, index = 0, len = array.length; index < len; index++) {
      item = array[index]
      result.push(optData === null ? item : item[optData])
      if (item[optChildren]) {
        unTreeList(result, item[optChildren], opts)
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

  var STRING_UNDEFINED = 'undefined'
  var objectToString = Object.prototype.toString

  /* eslint-disable valid-typeof */
  function createInTypeof (type) {
    return function (obj) {
      return typeof obj === type
    }
  }

  function createInInObjectString (type) {
    return function (obj) {
      return '[object ' + type + ']' === objectToString.call(obj)
    }
  }

  /**
    * 指定方法后的返回值组成的新对象
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  function objectMap (obj, iteratee, context) {
    var result = {}
    if (obj) {
      if (iteratee) {
        context = context || this
        if (!baseExports.isFunction(iteratee)) {
          iteratee = baseExports.property(iteratee)
        }
        each(obj, function (val, index) {
          result[index] = iteratee.call(context, val, index, obj)
        })
      } else {
        return obj
      }
    }
    return result
  }

  function cloneObj (obj) {
    var result = {}
    each(obj, function (val, key) {
      result[key] = deepClone(val)
    })
    return result
  }

  function cloneArr (arr) {
    return XEUtils.arrayMap(arr, deepClone)
  }

  function deepClone (obj) {
    return isPlainObject(obj) ? cloneObj(obj) : isArray(obj) ? cloneArr(obj) : obj
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
      return deep ? deepClone(obj) : objectAssign(isPlainObject(obj) ? {} : [], obj)
    }
    return obj
  }

  /**
    * 创建一个绑定上下文的函数
    *
    * @param {Function} callback 函数
    * @param {Object} context 上下文
    * @param {*} amgs 额外的参数
    * @return {Object}
    */
  function bind (callback, context) {
    var amgs = XEUtils.from(arguments).slice(2)
    context = context || this
    return function () {
      return callback.apply(context, XEUtils.from(arguments).concat(amgs))
    }
  }

  /**
    * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
    *
    * @param {Function} callback 函数
    * @param {Object} context 上下文
    * @param {*} amgs 额外的参数
    * @return {Object}
    */
  function once (callback, context) {
    var done = false
    var rest = null
    var amgs = XEUtils.from(arguments).slice(2)
    context = context || this
    return function () {
      if (done) {
        return rest
      }
      rest = callback.apply(context, XEUtils.from(arguments).concat(amgs))
      done = true
      return rest
    }
  }

  /**
    * 判断是否Undefined
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isUndefined = createInTypeof(STRING_UNDEFINED)

  /**
    * 判断是否数组
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isArray = Array.isArray || createInInObjectString('Array')

  /**
    * 判断是否小数
    *
    * @param {Number} obj 数值
    * @return {Boolean}
    */
  function isFloat (obj) {
    return obj !== null && !isNaN(obj) && !isInteger(obj)
  }

  /**
    * 判断是否整数
    *
    * @param {Number, String} number 数值
    * @return {Boolean}
    */
  var isInteger = Number.isInteger

  /**
    * 判断是否方法
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isFunction = createInTypeof('function')

  /**
    * 判断是否Boolean对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isBoolean = createInTypeof('boolean')

  /**
    * 判断是否String对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isString = createInTypeof('string')

  /**
    * 判断是否Number对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isNumber = createInTypeof('number')

  /**
    * 判断是否RegExp对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isRegExp = createInInObjectString('RegExp')

  /**
    * 判断是否Object对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isObject = createInTypeof('object')

  /**
    * 判断是否对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  function isPlainObject (obj) {
    return obj ? obj.constructor === Object : false
  }

  /**
    * 判断是否Date对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isDate = createInInObjectString('Date')

  /**
    * 判断是否Error对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isError = createInInObjectString('Error')

  /**
    * 判断是否TypeError对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  function isTypeError (obj) {
    return obj ? obj.constructor === TypeError : false
  }

  /**
    * 判断是否为空,包括空对象、空数值、空字符串
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  function isEmpty (obj) {
    if (obj === 0 || !isNumber(obj)) {
      for (var key in obj) {
        return false
      }
      return true
    }
    return false
  }

  /**
    * 判断是否为Null
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  function isNull (obj) {
    return obj === null
  }

  /**
    * 判断是否Symbol对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var supportSymbol = typeof Symbol !== STRING_UNDEFINED
  function isSymbol (obj) {
    return supportSymbol && Symbol.isSymbol ? Symbol.isSymbol(obj) : (typeof obj === 'symbol')
  }

  /**
    * 判断是否Arguments对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var isArguments = createInInObjectString('Arguments')

  /**
    * 判断是否Element对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  function isElement (obj) {
    return obj && isString(obj.nodeName) && isNumber(obj.nodeType)
  }

  /**
    * 判断是否Document对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var supportDocument = typeof document !== STRING_UNDEFINED
  function isDocument (obj) {
    return obj && obj.nodeType === 9 && supportDocument
  }

  /**
    * 判断是否Window对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var supportWindow = typeof window !== STRING_UNDEFINED
  function isWindow (obj) {
    return obj && obj === obj.window && supportWindow
  }

  /**
    * 判断是否FormData对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
    */
  var supportFormData = typeof FormData !== STRING_UNDEFINED
  function isFormData (obj) {
    return supportFormData && obj instanceof FormData
  }

  /**
    * 判断是否Map对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
   */
  var supportMap = typeof Map !== STRING_UNDEFINED
  function isMap (obj) {
    return supportMap && obj instanceof Map
  }

  /**
    * 判断是否WeakMap对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
   */
  var supportWeakMap = typeof WeakMap !== STRING_UNDEFINED
  function isWeakMap (obj) {
    return supportWeakMap && obj instanceof WeakMap
  }

  /**
    * 判断是否Set对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
   */
  var supportSet = typeof Set !== STRING_UNDEFINED
  function isSet (obj) {
    return supportSet && obj instanceof Set
  }

  /**
    * 判断是否WeakSet对象
    *
    * @param {Object} obj 对象
    * @return {Boolean}
   */
  var supportWeakSet = typeof WeakSet !== STRING_UNDEFINED
  function isWeakSet (obj) {
    return supportWeakSet && obj instanceof WeakSet
  }

  /**
    * 判断是否闰年
    *
    * @param {Date} date 日期或数字
    * @return {Boolean}
    */
  function isLeapYear (date) {
    var currentDate = date ? XEUtils.stringToDate(date) : new Date()
    var year = currentDate.getFullYear()
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)
  }

  /**
   * 返回一个获取对象属性的函数
   *
   * @param {String} name 属性名
   * @param {Object} defs 空值
   */
  function property (name, defs) {
    return function (obj) {
      return obj === null ? defs : obj[name]
    }
  }

  /**
    * 获取对象类型
    *
    * @param {Object} obj 对象
    * @return {String}
    */
  function getType (obj) {
    if (obj === null) {
      return '' + obj
    }
    if (isSymbol(obj)) {
      return 'symbol'
    }
    if (isDate(obj)) {
      return 'date'
    }
    if (isArray(obj)) {
      return 'array'
    }
    return typeof obj
  }

  /**
    * 获取一个全局唯一标识
    *
    * @param {String} prefix 前缀
    * @return {Number}
    */
  var __uniqueId = 0
  function uniqueId (prefix) {
    return (prefix ? '' + prefix : 0) + ++__uniqueId
  }

  /**
    * 返回对象的长度
    *
    * @param {Object} obj 对象
    * @return {Number}
    */
  function getSize (obj) {
    var len = 0
    if (isString(obj) || isArray(obj)) {
      return obj.length
    }
    each(obj, function () {
      len++
    })
    return len
  }

  function createIndexOf (callback) {
    return function (obj, val) {
      if (obj) {
        if (isString(obj) || isArray(obj)) {
          return callback(obj, val)
        }
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (val === obj[key]) {
              return key
            }
          }
        }
      }
      return -1
    }
  }

  /**
    * 返回对象第一个索引值
    *
    * @param {Object} obj 对象
    * @param {Object} val 值
    * @return {Number}
    */
  var indexOf = createIndexOf(function (obj, val) {
    if (obj.indexOf) {
      return obj.indexOf(val)
    }
    for (var index = 0, len = obj.length; index < len; index++) {
      if (val === obj[index]) {
        return index
      }
    }
  })

  /**
    * 从最后开始的索引值,返回对象第一个索引值
    *
    * @param {Object} array 对象
    * @param {Object} val 值
    * @return {Number}
    */
  var lastIndexOf = createIndexOf(function (obj, val) {
    if (obj.lastIndexOf) {
      return obj.lastIndexOf(val)
    }
    for (var len = obj.length - 1; len >= 0; len--) {
      if (val === obj[len]) {
        return len
      }
    }
    return -1
  })

  function createIterateeIndexOf (callback) {
    return function (obj, iteratee, context) {
      if (obj && iteratee) {
        context = this || context
        if (isString(obj) || isArray(obj)) {
          return callback(obj, iteratee, context)
        }
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (obj[key] === iteratee.call(context, obj[key], key, obj)) {
              return key
            }
          }
        }
      }
      return -1
    }
  }

  /**
    * 返回对象第一个索引值
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  var findIndexOf = createIterateeIndexOf(function (obj, iteratee, context) {
    for (var index = 0, len = obj.length; index < len; index++) {
      if (iteratee.call(context, obj[index], index, obj)) {
        return index
      }
    }
    return -1
  })

  /**
    * 从最后开始的索引值,返回对象第一个索引值
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  var findLastIndexOf = createIterateeIndexOf(function (obj, iteratee, context) {
    for (var len = obj.length - 1; len >= 0; len--) {
      if (iteratee.call(context, obj[len], len, obj)) {
        return len
      }
    }
    return -1
  })

  /**
    * 判断对象是否包含该值,成功返回true否则false
    *
    * @param {Object} obj 对象
    * @param {Object} val 值
    * @return {Boolean}
    */
  function includes (obj, val) {
    return indexOf(obj, val) !== -1
  }

  function extend (target, args, isClone) {
    for (var source, index = 1, len = args.length; index < len; index++) {
      source = args[index]
      arrayEach(objectKeys(args[index]), function (key) {
        target[key] = isClone ? clone(source[key], isClone) : source[key]
      })
    }
    return target
  }

  /**
    * 浅拷贝一个或者多个对象到目标对象中
    *
    * @param {Object} obj 目标对象
    * @param {...Object}
    * @return {Boolean}
    */
  var objectAssign = function (target) {
    if (target) {
      var args = arguments
      if (target === true) {
        if (args.length > 1) {
          target = isArray(target[1]) ? [] : {}
          return extend(target, args, true)
        }
      } else {
        return Object.assign ? Object.assign.apply(Object, args) : extend(target, args)
      }
    }
    return target
  }

  /**
    * 字符串转JSON
    *
    * @param {String} str 字符串
    * @return {Object} 返回转换后对象
    */
  function stringToJson (str) {
    if (isObject(str)) {
      return str
    } else if (isString(str)) {
      try {
        return JSON.parse(str)
      } catch (e) {
        console.error(e)
      }
    }
    return {}
  }

  /**
    * JSON转字符串
    *
    * @param {Object} obj 对象
    * @return {String} 返回字符串
    */
  function jsonToString (obj) {
    if (isObject(obj)) {
      try {
        return JSON.stringify(obj)
      } catch (e) {
        console.error(e)
      }
    }
    return obj ? '' + obj : ''
  }

  /**
    * 清空对象
    *
    * @param {Object} obj 对象
    * @param {*} defs 默认值,如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
    * @param {Object/Array} assigns 默认值
    * @return {Object}
    */
  function clearObject (obj, defs, assigns) {
    if (obj) {
      var isDefs = arguments.length > 1 && (defs === null || !baseExports.isObject(defs))
      var extds = isDefs ? assigns : defs
      if (isPlainObject(obj)) {
        objectEach(obj, isDefs ? function (val, key) {
          obj[key] = defs
        } : function (val, key) {
          try {
            delete obj[key]
          } catch (e) {
            obj[key] = defs
          }
        })
        extds && objectAssign(obj, extds)
      } else if (isArray(obj)) {
        if (isDefs) {
          var len = obj.length
          while (len > 0) {
            len--
            obj[len] = defs
          }
        } else {
          obj.length = 0
        }
        extds && obj.push.apply(obj, extds)
      }
    }
    return obj
  }

  /**
    * 获取对象所有属性
    *
    * @param {Object} obj 对象/数组
    * @return {Array}
    */
  function objectKeys (obj) {
    var result = []
    if (obj) {
      if (Object.keys) {
        return Object.keys(obj)
      }
      objectEach(obj, function (val, key) {
        result.push(key)
      })
    }
    return result
  }

  /**
    * 获取对象所有值
    *
    * @param {Object} obj 对象/数组
    * @return {Array}
    */
  function objectValues (obj) {
    if (Object.values) {
      return obj ? Object.values(obj) : []
    }
    var result = []
    arrayEach(objectKeys(obj), function (key) {
      result.push(obj[key])
    })
    return result
  }

  /**
    * 获取对象所有属性、值
    *
    * @param {Object} obj 对象/数组
    * @return {Array}
    */
  function objectEntries (obj) {
    if (Object.entries) {
      return obj ? Object.entries(obj) : []
    }
    var result = []
    arrayEach(objectKeys(obj), function (key) {
      result.push([key, obj[key]])
    })
    return result
  }

  /**
    * 获取对象第一个值
    *
    * @param {Object} obj 对象/数组
    * @return {Object}
    */
  function arrayFirst (obj) {
    return objectValues(obj)[0]
  }

  /**
    * 获取对象最后一个值
    *
    * @param {Object} obj 对象/数组
    * @return {Object}
    */
  function arrayLast (obj) {
    var list = objectValues(obj)
    return list[list.length - 1]
  }

  function objectEach (obj, iteratee, context) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        iteratee.call(context || this, obj[key], key, obj)
      }
    }
  }

  function objectLastEach (obj, iteratee, context) {
    arrayLastEach(objectKeys(obj), function (key) {
      iteratee.call(context || this, obj[key], key, obj)
    })
  }

  function arrayEach (obj, iteratee, context) {
    for (var index = 0, len = obj.length; index < len; index++) {
      iteratee.call(context || this, obj[index], index, obj)
    }
  }

  function arrayLastEach (obj, iteratee, context) {
    for (var len = obj.length - 1; len >= 0; len--) {
      iteratee.call(context || this, obj[len], len, obj)
    }
  }

  /**
    * 迭代器
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  function forOf (obj, iteratee, context) {
    if (obj) {
      if (isArray(obj)) {
        for (var index = 0, len = obj.length; index < len; index++) {
          if (iteratee.call(context || this, obj[index], index, obj) === false) {
            break
          }
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iteratee.call(context || this, obj[key], key, obj) === false) {
              break
            }
          }
        }
      }
    }
  }

  /**
    * 迭代器
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  function each (obj, iteratee, context) {
    if (obj) {
      if (isArray(obj)) {
        if (isFunction(obj.forEach)) {
          return obj.forEach(iteratee, context || this)
        }
        return arrayEach(obj, iteratee, context || this)
      }
      return objectEach(obj, iteratee, context || this)
    }
    return obj
  }

  /**
    * 迭代器,从最后开始迭代
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  function lastEach (obj, iteratee, context) {
    if (obj) {
      if (isArray(obj)) {
        return arrayLastEach(obj, iteratee, context || this)
      }
      return objectLastEach(obj, iteratee, context || this)
    }
    return obj
  }

  /**
    * 迭代器,从最后开始迭代
    *
    * @param {Object} obj 对象/数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @param {Object} context 上下文
    * @return {Object}
    */
  function lastForOf (obj, iteratee, context) {
    if (obj) {
      var len
      if (isArray(obj)) {
        for (len = obj.length - 1; len >= 0; len--) {
          if (iteratee.call(context || this, obj[len], len, obj) === false) {
            break
          }
        }
      } else {
        var list = objectKeys(obj)
        for (len = list.length - 1; len >= 0; len--) {
          if (iteratee.call(context || this, obj[list[len]], list[len], obj) === false) {
            break
          }
        }
      }
    }
  }

  function createIterateeEmpty (iteratee) {
    var isEmpty = baseExports.isEmpty(iteratee)
    return function () {
      return isEmpty
    }
  }

  /**
    * 集合分组,默认使用键值分组,如果有iteratee则使用结果进行分组
    *
    * @param {Array} obj 对象
    * @param {Function} iteratee 回调/对象属性
    * @param {Object} context 上下文
    * @return {Object}
    */
  function groupBy (obj, iteratee, context) {
    var result = {}
    if (obj) {
      context = this || context
      if (iteratee !== null && iteratee !== undefined) {
        if (isObject(iteratee)) {
          iteratee = createIterateeEmpty(iteratee)
        } else if (!isFunction(iteratee)) {
          iteratee = baseExports.property(iteratee)
        }
      }
      each(obj, function (val, key) {
        var groupKey = iteratee ? iteratee.call(context, val, key, obj) : val
        if (result[groupKey]) {
          result[groupKey].push(val)
        } else {
          result[groupKey] = [val]
        }
      })
    }
    return result
  }

  /**
    * 集合分组统计,返回各组中对象的数量统计
    *
    * @param {Array} obj 对象
    * @param {Function} iteratee 回调/对象属性
    * @param {Object} context 上下文
    * @return {Object}
    */
  function countBy (obj, iteratee, context) {
    var result = groupBy(obj, iteratee, context || this)
    objectEach(result, function (item, key) {
      result[key] = item.length
    })
    return result
  }

  /**
    * 序号列表生成函数
    *
    * @param {Number} start 起始值
    * @param {Number} stop 结束值
    * @param {Number} step 自增值
    * @return {Object}
    */
  function range (start, stop, step) {
    var result = []
    if (arguments.length < 2) {
      stop = arguments[0]
      start = 0
    }
    var index = start >> 0
    var len = stop >> 0
    if (index < stop) {
      step = step >> 0 || 1
      for (; index < len; index += step) {
        result.push(index)
      }
    }
    return result
  }

  var baseExports = {
    isNaN: isNaN,
    isFinite: isFinite,
    isUndefined: isUndefined,
    isArray: isArray,
    isFloat: isFloat,
    isInteger: isInteger,
    isFunction: isFunction,
    isBoolean: isBoolean,
    isString: isString,
    isNumber: isNumber,
    isRegExp: isRegExp,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isDate: isDate,
    isError: isError,
    isTypeError: isTypeError,
    isEmpty: isEmpty,
    isNull: isNull,
    isSymbol: isSymbol,
    isArguments: isArguments,
    isElement: isElement,
    isDocument: isDocument,
    isWindow: isWindow,
    isFormData: isFormData,
    isMap: isMap,
    isWeakMap: isWeakMap,
    isSet: isSet,
    isWeakSet: isWeakSet,
    isLeapYear: isLeapYear,
    property: property,
    getType: getType,
    uniqueId: uniqueId,
    getSize: getSize,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    findIndexOf: findIndexOf,
    findLastIndexOf: findLastIndexOf,
    includes: includes,
    contains: includes,
    objectAssign: objectAssign,
    assign: objectAssign,
    extend: objectAssign,
    stringToJson: stringToJson,
    jsonToString: jsonToString,
    objectKeys: objectKeys,
    keys: objectKeys,
    objectValues: objectValues,
    values: objectValues,
    objectEntries: objectEntries,
    entries: objectEntries,
    arrayFirst: arrayFirst,
    first: arrayFirst,
    arrayLast: arrayLast,
    last: arrayLast,
    objectEach: objectEach,
    objectLastEach: objectLastEach,
    arrayEach: arrayEach,
    forEach: arrayEach,
    forLastEach: arrayLastEach,
    arrayLastEach: arrayLastEach,
    forOf: forOf,
    each: each,
    lastForOf: lastForOf,
    lastEach: lastEach,
    groupBy: groupBy,
    countBy: countBy,
    objectMap: objectMap,
    clone: clone,
    bind: bind,
    once: once,
    clearObject: clearObject,
    range: range
  }

  function isMobile () {
    var agents = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'SymbianOS', 'BlackBerry', 'Windows Phone']
    for (var userAgentInfo = navigator.userAgent, i = 0; i < agents.length; i++) {
      if (userAgentInfo.indexOf(agents[i]) > 0) {
        return true
      }
    }
    return false
  }

  /**
    * 获取浏览器内核
    * @return Object
    */
  function browse () {
    var result = {
      isNode: false,
      isMobile: false,
      isPC: false
    }
    if (typeof window === 'undefined' && typeof process !== 'undefined') {
      result.nodeJS = true
    } else {
      result.isMobile = isMobile()
      result.isPC = !result.isMobile
      if (typeof document !== 'undefined') {
        var $body = document.body || document.documentElement
        baseExports.arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
          result['-' + core] = !!$body[core + 'MatchesSelector']
        })
      }
    }
    return result
  }

  var browseExports = {
    browse: browse
  }

  function toCookieUnitTime (unit, expires) {
    var num = parseFloat(expires)
    var nowdate = new Date()
    var time = nowdate.getTime()
    switch (unit) {
      case 'y': return dateExports.getWhatYear(nowdate, num).getTime()
      case 'M': return dateExports.getWhatMonth(nowdate, num).getTime()
      case 'd': return dateExports.getWhatDay(nowdate, num).getTime()
      case 'H': return time + num * 60 * 60 * 1000
      case 'm': return time + num * 60 * 1000
      case 's': return time + num * 1000
    }
    return time
  }

  function toCookieUTCString (date) {
    return (baseExports.isDate(date) ? date : new Date(date)).toUTCString()
  }

  /**
    * cookie操作函数
    * @param {String/Array/Object} name 键/数组/对象
    * @param {String} value 值
    * @param {Object} options 参数
    *   @param {String} name: 键
    *   @param {Object} value: 值
    *   @param {String} path: 路径
    *   @param {String} domain: 作用域
    *   @param {Boolean} secure: 设置为安全的,只能用https协议
    *   @param {Number} expires: 过期时间,可以指定日期或者字符串，默认天
    */
  function cookie (name, value, options) {
    var inserts = []
    var decode = decodeURIComponent
    var encode = encodeURIComponent
    var isDoc = typeof document !== 'undefined'
    if (this && this.$context) {
      this.$context = null
    }
    if (baseExports.isArray(name)) {
      inserts = name
    } else if (arguments.length > 1) {
      inserts = [baseExports.objectAssign({ name: name, value: value }, options)]
    } else if (baseExports.isObject(name)) {
      inserts = [name]
    }
    if (inserts.length > 0) {
      if (isDoc) {
        baseExports.arrayEach(inserts, function (obj) {
          var opts = baseExports.objectAssign({}, obj)
          var values = []
          if (opts.name) {
            var expires = opts.expires
            values.push(encode(opts.name) + '=' + encode(baseExports.isObject(opts.value) ? JSON.stringify(opts.value) : opts.value))
            if (expires) {
              if (isNaN(expires)) {
                // UTCString || Unit
                opts.expires = expires.replace(/^([0-9]+)(y|M|d|H|m|s)$/, function (text, num, unit) {
                  return toCookieUTCString(toCookieUnitTime(unit, num))
                })
              } else if (/^[0-9]{11,13}$/.test(expires) || baseExports.isDate(expires)) {
                // Date || now
                opts.expires = toCookieUTCString(expires)
              } else {
                // day
                opts.expires = toCookieUTCString(toCookieUnitTime('d', expires))
              }
            }
            baseExports.arrayEach(['expires', 'path', 'domain', 'secure'], function (key) {
              if (opts[key] !== undefined) {
                values.push(opts[key] && key === 'secure' ? key : (key + '=' + opts[key]))
              }
            })
          }
          document.cookie = values.join('; ')
        })
      }
    } else {
      var result = {}
      if (isDoc && document.cookie) {
        baseExports.arrayEach(document.cookie.split('; '), function (val) {
          var keyIndex = val.indexOf('=')
          result[decode(val.substring(0, keyIndex))] = decode(val.substring(keyIndex + 1) || '')
        })
      }
      return arguments.length === 1 ? result[name] : result
    }
  }

  baseExports.objectAssign(cookie, {
    setItem: function (name, key, options) {
      cookie(name, key, options)
    },
    getItem: function (name) {
      return cookie(name)
    },
    removeItem: function (name) {
      cookie(name, null, { expires: -1 })
    },
    getJSON: function () {
      return cookie()
    }
  })

  var cookieExports = {
    cookie: cookie
  }

  var DAY_TIME = 86400000
  var WEEK_TIME = DAY_TIME * 7

  /**
   * 返回时间戳
   *
   * @returns Number
   */
  var timestamp = Date.now || function () {
    return new Date().getTime()
  }

  var dateFormatRules = [
    { rules: [['yyyy', 4], ['yy', 2]] },
    { rules: [['MM', 2], ['M', 1]], offset: -1 },
    { rules: [['dd', 2], ['d', 1]] },
    { rules: [['HH', 2], ['H', 1]] },
    { rules: [['mm', 2], ['m', 1]] },
    { rules: [['ss', 2], ['s', 1]] },
    { rules: [['SSS', 3], ['SS', 2], ['S', 1]] }
  ]

  /**
   * 比较两个日期
   *
   * @param {Number/String/Date} date1 日期
   * @param {Number/String/Date} date2 日期
   * @param {String} format 格式化
   */
  function isDateSame (date1, date2, format) {
    if (date1 && date2) {
      return dateToString(date1, format) === dateToString(date2, format)
    }
    return false
  }

  /**
    * 字符串转为日期
    *
    * @param {String} str 日期或数字
    * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒)
    * @return {String}
    */
  function stringToDate (str, format) {
    if (str) {
      if (baseExports.isDate(str)) {
        return new Date(str.getTime())
      }
      if (/^[0-9]{11,13}$/.test(str)) {
        return new Date(str)
      }
      if (baseExports.isString(str)) {
        format = format || setupDefaults.formatDate
        var dates = []
        baseExports.arrayEach(dateFormatRules, function (item) {
          for (var arr, sIndex, index = 0, rules = item.rules, len = rules.length; index < len; index++) {
            arr = rules[index]
            sIndex = format.indexOf(arr[0])
            if (sIndex > -1) {
              dates.push(parseFloat(str.substring(sIndex, sIndex + arr[1]) || 0) + (item.offset || 0))
              break
            } else if (index === len - 1) {
              dates.push(0)
            }
          }
        })
        return new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6])
      }
    }
    return 'Invalid Date'
  }

  function handleCustomTemplate (date, formats, match, value) {
    var format = formats[match]
    if (format) {
      if (baseExports.isFunction(format)) {
        return format(value, match, date)
      } else {
        return format[value]
      }
    }
    return value
  }

  /**
    * 日期格式化为字符串
    *
    * @param {Date} date 日期或数字
    * @param {String} format 输出日期格式(年份(yy|yyyy)、月份(M|MM自动补0)、天(d|dd自动补0)、12小时制(h|hh自动补0)、24小时制(H|HH自动补0)、分钟(m|mm自动补0)、秒(s|ss自动补0)、毫秒(S|SSS自动补0)、D当年的第几天、a/A上午下午、e/E星期几、w当年的第几周、W当月的第几周、q当年第几个季度、z时区、Z时区值)
    * @param {Object} options {formats: {q: ['日', '一', '二', '三', '四', '五', '六'], E: function (value, match, date) {return '三'}, }} 自定义格式化模板
    * @return {String}
    */
  function dateToString (date, format, options) {
    if (date) {
      date = stringToDate(date)
      if (baseExports.isDate(date)) {
        var empty = ''
        var result = format || setupDefaults.formatString
        var hours = date.getHours()
        var apm = hours < 12 ? 'am' : 'pm'
        var zoneHours = date.getTimezoneOffset() / 60 * -1
        var formats = baseExports.objectAssign({}, setupDefaults.formatStringMatchs, options && options.formats ? options.formats : null)
        var timeRules = [
          [/y{2,4}/g, empty, function (match) { return (empty + date.getFullYear()).substr(4 - match.length) }],
          [/M{1,2}/g, date.getMonth() + 1],
          [/d{1,2}/g, date.getDate()],
          [/H{1,2}/g, hours],
          [/h{1,2}/g, hours <= 12 ? hours : hours - 12],
          [/m{1,2}/g, date.getMinutes()],
          [/s{1,2}/g, date.getSeconds()],
          [/S{1,3}/g, date.getMilliseconds()],
          [/a/g, empty, function (match) { return handleCustomTemplate(date, formats, match, apm) }],
          [/A/g, empty, function (match) { return handleCustomTemplate(date, formats, match, apm.toLocaleUpperCase()) }],
          [/z/g, empty, function (match) { return handleCustomTemplate(date, formats, match, 'GMT') }],
          [/e/g, empty, function (match) { return handleCustomTemplate(date, formats, match, date.getDay() - 1) }],
          [/E/g, empty, function (match) { return handleCustomTemplate(date, formats, match, date.getDay()) }],
          [/q/g, empty, function (match) { return handleCustomTemplate(date, formats, match, Math.floor((date.getMonth() + 3) / 3)) }],
          [/Z/g, empty, function (match) { return handleCustomTemplate(date, formats, match, (zoneHours >= 0 ? '+' : '-') + XEUtils.padStart(zoneHours, 2, 0) + '00') }],
          [/W/g, empty, function (match) { return handleCustomTemplate(date, formats, match, getMonthWeek(date)) }],
          [/w/g, empty, function (match) { return handleCustomTemplate(date, formats, match, getYearWeek(date)) }],
          [/D/g, empty, function (match) { return handleCustomTemplate(date, formats, match, getYearDay(date)) }]
        ]
        for (var index = 0; index < timeRules.length; index++) {
          var item = timeRules[index]
          result = result.replace(item[0], item[2] || function (match) {
            return XEUtils.padStart(item[1], match.length, 0)
          })
        }
        return result
      }
      return date
    }
    return ''
  }

  /**
    * 返回前几年或后几年的日期
    *
    * @param {Date} date 日期或数字
    * @param {Number} year 年(默认当前年)、前几个年(数值)、后几个年(数值)
    * @param {Number/String} month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
    * @return {Date}
    */
  function getWhatYear (date, year, month) {
    var currentDate = stringToDate(date)
    if (year) {
      var number = year && !isNaN(year) ? year : 0
      currentDate.setFullYear(currentDate.getFullYear() + number)
    }
    if (month || !isNaN(month)) {
      if (month === 'first') {
        return new Date(currentDate.getFullYear(), 0, 1)
      } else if (month === 'last') {
        currentDate.setMonth(11)
        return getWhatMonth(currentDate, 0, 'last')
      } else {
        currentDate.setMonth(month)
      }
    }
    return currentDate
  }

  /**
    * 返回前几月或后几月的日期
    *
    * @param {Date} date 日期或数字
    * @param {Number} month 月(默认当前月)、前几个月、后几个月
    * @param {Number/String} day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
    * @return {Date}
    */
  function getWhatMonth (date, month, day) {
    var currentDate = stringToDate(date)
    var monthOffset = month && !isNaN(month) ? month : 0
    if (day || !isNaN(day)) {
      if (day === 'first') {
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, 1)
      } else if (day === 'last') {
        return new Date(getWhatMonth(currentDate, monthOffset + 1, 'first').getTime() - 1)
      } else {
        currentDate.setDate(day)
      }
    }
    if (monthOffset) {
      currentDate.setMonth(currentDate.getMonth() + monthOffset)
    }
    return currentDate
  }

  /**
    * 返回前几周或后几周的星期几
    *
    * @param {Date} date 日期
    * @param {Number} week 周(默认当前周)、前几周、后几周
    * @param {Number} day 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
    * @return {Date}
    */
  function getWhatWeek (date, week, day) {
    var currentDate = stringToDate(date)
    var customDay = Number(/^[0-7]$/.test(day) ? day : currentDate.getDay())
    var currentDay = currentDate.getDay()
    var time = currentDate.getTime()
    var whatDayTime = time + ((customDay === 0 ? 7 : customDay) - (currentDay === 0 ? 7 : currentDay)) * DAY_TIME
    if (week && !isNaN(week)) {
      whatDayTime += week * WEEK_TIME
    }
    return new Date(whatDayTime)
  }

  /**
    * 返回前几天或后几天的日期
    *
    * @param {Date} date 日期或数字
    * @param {Number} day 天(默认当天)、前几天、后几天
    * @param {String} mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
    * @return {Date}
    */
  function getWhatDay (date, day, mode) {
    var currentDate = stringToDate(date)
    if (!isNaN(day)) {
      currentDate.setDate(currentDate.getDate() + Number(day))
      if (mode === 'first') {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      } else if (mode === 'last') {
        return new Date(getWhatDay(currentDate, 1, 'first').getTime() - 1)
      }
    }
    return currentDate
  }

  function calculateTime (startDate, endDate, timeGap) {
    return Math.floor((new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime() - new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime()) / timeGap) + 1
  }

  /**
    * 返回某个月的第几周
    *
    * @param {Date} date 日期或数字
    * @return {Number}
    */
  function getMonthWeek (date) {
    if (date) {
      var currentDate = stringToDate(date)
      var monthFirst = getWhatMonth(date, 0, 'first')
      var monthFirstWeek = getWhatWeek(monthFirst, 0, 1)
      if (monthFirstWeek < monthFirst) {
        monthFirstWeek = getWhatWeek(monthFirst, 1, 1)
      }
      if (currentDate >= monthFirstWeek) {
        return calculateTime(monthFirstWeek, currentDate, WEEK_TIME)
      }
    }
    return 0
  }

  /**
    * 返回某个年份的第几天
    *
    * @param {Date} date 日期或数字
    * @return {Number}
    */
  function getYearDay (date) {
    if (date) {
      return calculateTime(getWhatYear(date, 0, 'first'), stringToDate(date), DAY_TIME)
    }
    return 0
  }

  /**
    * 返回某个年份的第几周
    *
    * @param {Date} date 日期或数字
    * @return {Number}
    */
  function getYearWeek (date) {
    if (date) {
      var currentDate = stringToDate(date)
      var yearFirst = getWhatYear(date, 0, 'first')
      var yearFirstWeek = getWhatWeek(yearFirst, 0, 1)
      if (yearFirstWeek < yearFirst) {
        yearFirstWeek = getWhatWeek(yearFirst, 1, 1)
      }
      if (currentDate >= yearFirstWeek) {
        return calculateTime(yearFirstWeek, currentDate, WEEK_TIME)
      }
    }
    return 0
  }

  /**
    * 返回某个年份的天数
    *
    * @param {Date} date 日期或数字
    * @param {Number} year 年(默认当年)、前几个年、后几个年
    * @return {Number}
    */
  function getDayOfYear (date, year) {
    if (date) {
      return baseExports.isLeapYear(getWhatYear(date, year)) ? 366 : 365
    }
    return 0
  }

  /**
    * 返回某个月份的天数
    *
    * @param {Date} date 日期或数字
    * @param {Number} month 月(默认当月)、前几个月、后几个月
    * @return {Number}
    */
  function getDayOfMonth (date, month) {
    if (date) {
      return Math.floor((getWhatMonth(date, month, 'last').getTime() - getWhatMonth(date, month, 'first').getTime()) / DAY_TIME) + 1
    }
    return 0
  }

  /**
    * 返回两个日期之间差距,如果结束日期小于开始日期done为fasle
    *
    * @param {Date} startDate 开始日期
    * @param {Date} endDate 结束日期或当期日期
    * @param {Date} rule 自定义计算规则
    * @return {Object}
    */
  function getDateDiff (startDate, endDate, rules) {
    var result = { done: false }
    var startTime = stringToDate(startDate).getTime()
    var endTime = endDate ? stringToDate(endDate).getTime() : new Date()
    if (startTime < endTime) {
      var item
      var diffTime = endTime - startTime
      var rule = rules && rules.length > 0 ? rules : setupDefaults.dateDiffRules
      result.done = true
      for (var index = 0, len = rule.length; index < len; index++) {
        item = rule[index]
        if (diffTime >= item[1]) {
          if (index === len - 1) {
            result[item[0]] = diffTime || 0
          } else {
            result[item[0]] = Math.floor(diffTime / item[1])
            diffTime -= result[item[0]] * item[1]
          }
        } else {
          result[item[0]] = 0
        }
      }
    }
    return result
  }

  var dateExports = {
    timestamp: timestamp,
    now: timestamp,
    isDateSame: isDateSame,
    stringToDate: stringToDate,
    dateToString: dateToString,
    getWhatYear: getWhatYear,
    getWhatMonth: getWhatMonth,
    getWhatWeek: getWhatWeek,
    getWhatDay: getWhatDay,
    getYearDay: getYearDay,
    getYearWeek: getYearWeek,
    getMonthWeek: getMonthWeek,
    getDayOfYear: getDayOfYear,
    getDayOfMonth: getDayOfMonth,
    getDateDiff: getDateDiff
  }

  var $locat = null

  if (typeof location !== 'undefined') {
    $locat = location
  }

  function parseParams (uri) {
    var result = {}
    var decode = decodeURIComponent
    var params = uri.split('?')[1] || ''
    if (params) {
      baseExports.arrayEach(params.split('&'), function (param) {
        var items = param.split('=')
        result[decode(items[0])] = decode(items[1] || '')
      })
    }
    return result
  }

  function getLocatOrigin () {
    return $locat ? ($locat.origin || ($locat.protocol + '//' + $locat.host)) : ''
  }

  function getBaseURL () {
    if ($locat) {
      var pathname = $locat.pathname
      var lastIndex = baseExports.lastIndexOf(pathname, '/') + 1
      return getLocatOrigin() + (lastIndex === pathname.length ? pathname : pathname.substring(0, lastIndex))
    }
    return ''
  }

  function parseUrl (url) {
    var href = '' + url
    if (href.indexOf('/') === 0) {
      href = getLocatOrigin() + href
    }
    var searchs = href.replace(/#.*/, '').match(/(\?.*)/)
    var parsed = {
      href: href,
      hash: '',
      host: '',
      hostname: '',
      protocol: '',
      port: '',
      search: searchs ? searchs[1] : ''
    }
    parsed.path = href.replace(/^([a-z0-9.+-]*:)\/\//, function (text, protocol) {
      parsed.protocol = protocol
      return ''
    }).replace(/^([a-z0-9.+-]*)(:\d+)?\//, function (text, hostname, port) {
      var portText = port || ''
      parsed.port = portText.replace(':', '')
      parsed.hostname = hostname
      parsed.host = hostname + portText
      return '/'
    }).replace(/(#.*)/, function (text, hash) {
      parsed.hash = hash
      return ''
    })
    var hashs = parsed.hash.match(/#((.*)\?|(.*))/)
    parsed.pathname = parsed.path.replace(/(\?|#.*).*/, '')
    parsed.origin = parsed.protocol + '//' + parsed.host
    parsed.hashKey = hashs ? (hashs[2] || '') : ''
    parsed.hashQuery = parseParams(parsed.hash)
    parsed.searchQuery = parseParams(parsed.search)
    return parsed
  }

  /**
    * 获取地址栏信息
    * @return Object
    */
  function locat () {
    return $locat ? parseUrl($locat.href) : {}
  }

  var locatExports = {
    parseUrl: parseUrl,
    getBaseURL: getBaseURL,
    locat: locat
  }

  /**
    * 获取一个指定范围内随机数
    *
    * @param {Number} min 最小值
    * @param {Number} max 最大值
    * @return {Number}
    */
  function getRandom (min, max) {
    return min >= max ? min : ((min = min >> 0) + Math.round(Math.random() * ((max || 9) - min)))
  }

  function sortData (arr, iteratee) {
    return (baseExports.isFunction(iteratee) ? XEUtils.arraySort(XEUtils.arrayMap(arr, iteratee, this)) : XEUtils.arraySort(arr, iteratee))
  }

  /**
    * 获取最小值
    *
    * @param {Array} arr 数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @return {Number}
    */
  function arrayMin () {
    return sortData.apply(this, arguments)[0]
  }

  /**
    * 获取最大值
    *
    * @param {Array} arr 数组
    * @param {Function} iteratee(item, index, obj) 回调
    * @return {Number}
    */
  function arrayMax () {
    return sortData.apply(this, arguments).reverse()[0]
  }

  /**
    * 千分位分隔符、小数点
    *
    * @param {String/Number} num 数值
    * @param {Object} 参数 {separator: 分隔符, fixed: 小数位数}
    * @return {String}
   */
  function commafy (num, options) {
    var opts = baseExports.objectAssign({ spaceNumber: 3, separator: ',', fixed: 0 }, options)
    var result = parseFloat(('' + num).replace(/,/g, '') || 0).toFixed(opts.fixed).split('.')
    return result[0].replace(new RegExp('(?=(?!(\\b))(\\d{' + opts.spaceNumber + '})+$)', 'g'), opts.separator) + (result[1] ? '.' + result[1] : '')
  }

  /**
   * 转数值
   * @param { String/Number } str 数值
   * @return {Number}
   */
  function stringToNumber (str) {
    if (str) {
      var num = parseFloat(str)
      return isNaN(num) ? 0 : num
    }
    return 0
  }

  /**
   * 转整数
   * @param { String/Number } str 数值
   * @return {Number}
   */
  function stringToInteger (str) {
    return parseInt(stringToNumber(str))
  }

  var numberExports = {
    random: getRandom,
    getRandom: getRandom,
    arrayMin: arrayMin,
    min: arrayMin,
    arrayMax: arrayMax,
    max: arrayMax,
    commafy: commafy,
    toNumber: stringToNumber,
    stringToNumber: stringToNumber,
    toInteger: stringToInteger,
    stringToInteger: stringToInteger
  }

  /**
    * 去除字符串左右两边的空格
    *
    * @param {String} str 字符串
    * @return {String}
    */
  function stringTrim (str) {
    return str && str.trim ? str.trim() : stringTrimRight(stringTrimLeft(str))
  }

  /**
    * 去除字符串左边的空格
    *
    * @param {String} str 字符串
    * @return {String}
    */
  function stringTrimLeft (str) {
    return str && str.trimLeft ? str.trimLeft() : ('' + str).replace(/^[\s\uFEFF\xA0]+/g, '')
  }

  /**
    * 去除字符串右边的空格
    *
    * @param {String} str 字符串
    * @return {String}
    */
  function stringTrimRight (str) {
    return str && str.trimRight ? str.trimRight() : ('' + str).replace(/[\s\uFEFF\xA0]+$/g, '')
  }

  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  }

  var unescapeMap = {}
  baseExports.arrayEach(baseExports.objectKeys(escapeMap), function (key) {
    unescapeMap[escapeMap[key]] = key
  })

  function formatEscaper (dataMap) {
    var replaceRegexp = new RegExp('(?:' + baseExports.objectKeys(dataMap).join('|') + ')', 'g')
    return function (str) {
      return ('' + str).replace(replaceRegexp, function (match) {
        return dataMap[match]
      })
    }
  }

  /**
    * 转义HTML字符串，替换&, <, >, ", ', `字符
    *
    * @param {String} str 字符串
    * @return {String}
    */
  var escape = formatEscaper(escapeMap)

  /**
    * 反转escape
    *
    * @param {String} str 字符串
    * @return {String}
    */
  var unescape = formatEscaper(unescapeMap)

  /**
    * 将带字符串转成驼峰字符串,例如 project-name => projectName
    *
    * @param {String} str 字符串
    * @return {String}
    */
  function camelCase (str) {
    return ('' + str).replace(/(-[a-zA-Z])/g, function (text, u) { return u.substring(1).toLocaleUpperCase() })
  }

  /**
    * 将带驼峰字符串转成字符串,例如 projectName => project-name
    *
    * @param {String} str 字符串
    * @return {String}
    */
  function kebabCase (str) {
    return ('' + str).replace(/([A-Z])/g, function (text, u) { return '-' + u.toLowerCase() })
  }

  /**
    * 将字符串重复 n次
    *
    * @param {String} str 字符串
    * @param {Number} count 次数
    * @return {String}
    */
  function stringRepeat (str, count) {
    var rest = '' + str
    if (str.repeat) {
      return str.repeat(count)
    }
    var list = isNaN(count) ? [] : new Array(parseInt(count))
    return list.join(rest) + (list.length > 0 ? rest : '')
  }

  /**
    * 用指定字符从前面开始补全字符串
    *
    * @param {String} str 字符串
    * @param {Number} targetLength 结果长度
    * @param {Number} padString 补全字符
    * @return {String}
    */
  function stringPadStart (str, targetLength, padString) {
    var rest = '' + str
    if (rest.padStart) {
      return rest.padStart(targetLength, padString)
    }
    if ((targetLength >> 0) > rest.length) {
      padString = padString === undefined ? ' ' : '' + padString
      targetLength -= rest.length
      if (targetLength > padString.length) {
        padString += stringRepeat(padString, targetLength / padString.length)
      }
      return padString.slice(0, targetLength) + rest
    }
    return rest
  }

  /**
    * 用指定字符从后面开始补全字符串
    *
    * @param {String} str 字符串
    * @param {Number} targetLength 结果长度
    * @param {Number} padString 补全字符
    * @return {String}
    */
  function stringPadEnd (str, targetLength, padString) {
    var rest = '' + str
    if (rest.padEnd) {
      return rest.padEnd(targetLength, padString)
    }
    if ((targetLength >> 0) > rest.length) {
      padString = padString === undefined ? ' ' : '' + padString
      targetLength -= rest.length
      if (targetLength > padString.length) {
        padString += stringRepeat(padString, targetLength / padString.length)
      }
      return rest + padString.slice(0, targetLength)
    }
    return rest
  }

  /**
    * 判断字符串是否在源字符串的头部
    *
    * @param {String} str 字符串
    * @param {String/Number} val 值
    * @param {Number} startIndex 开始索引
    * @return {String}
    */
  function stringStartsWith (str, val, startIndex) {
    var rest = '' + str
    return (arguments.length === 1 ? rest : rest.substring(startIndex)).indexOf(val) === 0
  }

  /**
    * 判断字符串是否在源字符串的尾部
    *
    * @param {String} str 字符串
    * @param {String/Number} val 值
    * @param {Number} startIndex 开始索引
    * @return {String}
    */
  function stringEndsWith (str, val, startIndex) {
    var rest = '' + str
    return arguments.length === 1 ? rest.indexOf(val) === rest.length - 1 : rest.substring(0, startIndex).indexOf(val) === startIndex - 1
  }

  var stringExports = {
    trim: stringTrim,
    stringTrim: stringTrim,
    trimLeft: stringTrimLeft,
    stringTrimLeft: stringTrimLeft,
    trimRight: stringTrimRight,
    stringTrimRight: stringTrimRight,
    escape: escape,
    unescape: unescape,
    camelCase: camelCase,
    kebabCase: kebabCase,
    repeat: stringRepeat,
    stringRepeat: stringRepeat,
    padStart: stringPadStart,
    stringPadStart: stringPadStart,
    padEnd: stringPadEnd,
    stringPadEnd: stringPadEnd,
    startsWith: stringStartsWith,
    stringStartsWith: stringStartsWith,
    endsWith: stringEndsWith,
    stringEndsWith: stringEndsWith
  }

  var methodExports = {}

  baseExports.objectAssign(
    methodExports,
    arrayExports,
    baseExports,
    browseExports,
    cookieExports,
    dateExports,
    locatExports,
    numberExports,
    stringExports
  )

  /**
   * functions of mixing
   *
   * @param {Object} methods
   */
  XEUtils.mixin = function (methods) {
    methodExports.objectEach(methods, function (fn, name) {
      XEUtils[name] = 'cookie'.indexOf(name) === -1 && methodExports.isFunction(fn) ? function () {
        var result = fn.apply(XEUtils.$context, arguments)
        XEUtils.$context = null
        return result
      } : fn
    })
  }

  XEUtils.setup = function (options) {
    methodExports.objectAssign(setupDefaults, options)
  }

  XEUtils.mixin(methodExports)

  return XEUtils
}))
