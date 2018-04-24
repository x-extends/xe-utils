'use strict'

var arrayExports = require('./array')
var dateExports = require('./date')

var objectToString = Object.prototype.toString

/**
  * 判断是否非数值
  *
  * @param {String, Number} val 数值
  * @return {Boolean}
  */
var isNaN = window.isNaN

/**
  * 判断是否为有限数值
  *
  * @param {Number} val 数值
  * @return {Boolean}
  */
var isFinite = window.isFinite

/**
  * 判断是否数组
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
var isArray = Array.isArray || function (val) {
  return objectToString.call(val) === '[object Array]'
}

/**
  * 判断是否小数
  *
  * @param {Number} val 数值
  * @return {Boolean}
  */
function isFloat (val) {
  return val !== null && !isNaN(val) && !isInteger(val)
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
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isFunction (val) {
  return typeof val === 'function'
}

/**
  * 判断是否Boolean对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isBoolean (val) {
  return typeof val === 'boolean'
}

/**
  * 判断是否String对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isString (val) {
  return typeof val === 'string'
}

/**
  * 判断是否Number对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isNumber (val) {
  return typeof val === 'number'
}

/**
  * 判断是否RegExp对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isRegExp (val) {
  return objectToString.call(val) === '[object RegExp]'
}

/**
  * 判断是否Object对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isObject (val) {
  return typeof val === 'object'
}

/**
  * 判断是否对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isPlainObject (val) {
  return val ? val.constructor === Object : false
}

/**
  * 判断是否Date对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isDate (val) {
  return objectToString.call(val) === '[object Date]'
}

/**
  * 判断是否Error对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isError (val) {
  return objectToString.call(val) === '[object Error]'
}

/**
  * 判断是否TypeError对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isTypeError (val) {
  return val ? val.constructor === TypeError : false
}

/**
  * 判断是否为空,包括空对象、空数值、空字符串
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isEmpty (val) {
  if (val === 0 || !isNumber(val)) {
    for (var key in val) {
      return false
    }
    return true
  }
  return false
}

/**
  * 判断是否为Null
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isNull (val) {
  return val === null
}

/**
  * 判断是否Symbol对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isSymbol (val) {
  return typeof Symbol !== 'undefined' && Symbol.isSymbol ? Symbol.isSymbol(val) : (typeof val === 'symbol')
}

/**
  * 判断是否Arguments对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isArguments (val) {
  return objectToString.call(val) === '[object Arguments]'
}

/**
  * 判断是否Element对象
  *
  * @param {Number} num 数值
  * @return {Boolean}
  */
function isElement (val) {
  return val && isString(val.nodeName) && isNumber(val.nodeType)
}

/**
  * 判断是否Document对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isDocument (val) {
  return val && val.nodeType === 9
}

/**
  * 判断是否Window对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isWindow (val) {
  return val && val === val.window
}

/**
  * 判断是否FormData对象
  *
  * @param {Object} val 对象
  * @return {Boolean}
  */
function isFormData (val) {
  return typeof FormData !== 'undefined' && val instanceof FormData
}

/**
  * 判断是否闰年
  *
  * @param {Date} date 日期或数字
  * @return {Boolean}
  */
function isLeapYear (date) {
  var currentDate = date ? dateExports.stringToDate(date) : new Date()
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
  * @return {Number}
  */
var __uniqueId = 0
function uniqueId () {
  return ++__uniqueId
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
var contains = includes

/**
  * 浅拷贝一个或者多个对象到目标对象中
  *
  * @param {Object} obj 目标对象
  * @param {...Object}
  * @return {Boolean}
  */
var objectAssign = Object.assign || function (target) {
  if (target) {
    for (var source, index = 1, len = arguments.length; index < len; index++) {
      source = arguments[index]
      arrayEach(objectKeys(arguments[index]), function (key) {
        target[key] = source[key]
      })
    }
  }
  return target
}
var assign = objectAssign
var extend = objectAssign

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
var keys = objectKeys

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
var values = objectValues

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
var entries = objectEntries

/**
  * 获取对象第一个值
  *
  * @param {Object} obj 对象/数组
  * @return {Object}
  */
function arrayFirst (obj) {
  return objectValues(obj)[0]
}
var first = arrayFirst

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
var last = arrayLast

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
  return arrayExports.arrayMap(arr, function (val, index) {
    return deepClone(val)
  })
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

var baseExports = {
  isNaN: isNaN,
  isFinite: isFinite,
  isFloat: isFloat,
  isInteger: isInteger,
  isFunction: isFunction,
  isBoolean: isBoolean,
  isString: isString,
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
  isLeapYear: isLeapYear,
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  lastIndexOf: lastIndexOf,
  includes: includes,
  contains: contains,
  objectAssign: objectAssign,
  assign: assign,
  extend: extend,
  stringToJson: stringToJson,
  jsonToString: jsonToString,
  objectKeys: objectKeys,
  keys: keys,
  objectValues: objectValues,
  values: values,
  objectEntries: objectEntries,
  entries: entries,
  arrayFirst: arrayFirst,
  first: first,
  arrayLast: arrayLast,
  last: last,
  objectEach: objectEach,
  arrayEach: arrayEach,
  each: each,
  groupBy: groupBy,
  objectMap: objectMap,
  clone: clone
}

module.exports = baseExports
