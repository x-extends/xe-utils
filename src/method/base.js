'use strict'

var XEUtils = require('../core/utils')

var objectToString = Object.prototype.toString

/**
  * 判断是否数组
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var isArray = Array.isArray || function (obj) {
  return objectToString.call(obj) === '[object Array]'
}

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
function isFunction (obj) {
  return typeof obj === 'function'
}

/**
  * 判断是否Boolean对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isBoolean (obj) {
  return typeof obj === 'boolean'
}

/**
  * 判断是否String对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isString (obj) {
  return typeof obj === 'string'
}

/**
  * 判断是否Number对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isNumber (obj) {
  return typeof obj === 'number'
}

/**
  * 判断是否RegExp对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isRegExp (obj) {
  return objectToString.call(obj) === '[object RegExp]'
}

/**
  * 判断是否Object对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isObject (obj) {
  return typeof obj === 'object'
}

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
function isDate (obj) {
  return objectToString.call(obj) === '[object Date]'
}

/**
  * 判断是否Error对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isError (obj) {
  return objectToString.call(obj) === '[object Error]'
}

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
function isSymbol (obj) {
  return typeof Symbol !== 'undefined' && Symbol.isSymbol ? Symbol.isSymbol(obj) : (typeof obj === 'symbol')
}

/**
  * 判断是否Arguments对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isArguments (obj) {
  return objectToString.call(obj) === '[object Arguments]'
}

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
function isDocument (obj) {
  return obj && obj.nodeType === 9 && typeof document !== 'undefined'
}

/**
  * 判断是否Window对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isWindow (obj) {
  return obj && obj === obj.window && typeof window !== 'undefined'
}

/**
  * 判断是否FormData对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isFormData (obj) {
  return typeof FormData !== 'undefined' && obj instanceof FormData
}

/**
  * 判断是否Map对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
function isMap (obj) {
  return typeof Map !== 'undefined' && obj instanceof Map
}

/**
  * 判断是否WeakMap对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
function isWeakMap (obj) {
  return typeof WeakMap !== 'undefined' && obj instanceof WeakMap
}

/**
  * 判断是否Set对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
function isSet (obj) {
  return typeof Set !== 'undefined' && obj instanceof Set
}

/**
  * 判断是否WeakSet对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
 */
function isWeakSet (obj) {
  return typeof WeakSet !== 'undefined' && obj instanceof WeakSet
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
        if (val === obj[key]) {
          return key
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

function arrayEach (obj, iteratee, context) {
  for (var index = 0, len = obj.length || 0; index < len; index++) {
    iteratee.call(context || this, obj[index], index, obj)
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
  * 集合分组,默认使用键值分组,如果有iteratee则使用结果进行分组
  *
  * @param {Array} obj 对象
  * @param {Function} iteratee 回调/对象属性
  * @param {Object} context 上下文
  * @return {Object}
  */
function groupBy (obj, iteratee, context) {
  var groupKey, attr
  var result = {}
  if (obj) {
    if (isString(iteratee)) {
      attr = iteratee
      iteratee = null
    } else if (isFunction(iteratee)) {
      iteratee = iteratee.bind(context || this)
    } else {
      iteratee = attr = null
    }
    each(obj, function (val, key) {
      groupKey = iteratee ? iteratee(val, key, obj) : (attr ? val[attr] : val)
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
  * 指定方法后的返回值组成的新对象
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iteratee(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function objectMap (obj, iteratee, context) {
  var result = {}
  each(obj, function (val, index) {
    result[index] = iteratee.call(context || this, val, index, obj)
  })
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

var baseExports = {
  isNaN: isNaN,
  isFinite: isFinite,
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
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  lastIndexOf: lastIndexOf,
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
  arrayEach: arrayEach,
  forEach: arrayEach,
  each: each,
  groupBy: groupBy,
  objectMap: objectMap,
  clone: clone,
  bind: bind,
  once: once
}

module.exports = baseExports
