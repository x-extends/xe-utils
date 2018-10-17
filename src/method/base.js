'use strict'

var XEUtils = require('../core/utils')

var STRING_UNDEFINED = 'undefined'
var objectToString = Object.prototype.toString
var objectAssignFns = Object.assign

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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function objectMap (obj, iterate, context) {
  var result = {}
  if (obj) {
    if (iterate) {
      context = context || this
      if (!isFunction(iterate)) {
        iterate = property(iterate)
      }
      each(obj, function (val, index) {
        result[index] = iterate.call(context, val, index, obj)
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
  var arrayFrom = XEUtils.from
  var amgs = arrayFrom(arguments).slice(2)
  context = context || this
  return function () {
    return callback.apply(context, arrayFrom(arguments).concat(amgs))
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
  var arrayFrom = XEUtils.from
  var amgs = arrayFrom(arguments).slice(2)
  context = context || this
  return function () {
    if (done) {
      return rest
    }
    rest = callback.apply(context, arrayFrom(arguments).concat(amgs))
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
  var len = obj.length
  for (var index = 0; index < len; index++) {
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

function createiterateIndexOf (callback) {
  return function (obj, iterate, context) {
    if (obj && iterate) {
      context = this || context
      if (isString(obj) || isArray(obj)) {
        return callback(obj, iterate, context)
      }
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] === iterate.call(context, obj[key], key, obj)) {
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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
var findIndexOf = createiterateIndexOf(function (obj, iterate, context) {
  var len = obj.length
  for (var index = 0; index < len; index++) {
    if (iterate.call(context, obj[index], index, obj)) {
      return index
    }
  }
  return -1
})

/**
  * 从最后开始的索引值,返回对象第一个索引值
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
var findLastIndexOf = createiterateIndexOf(function (obj, iterate, context) {
  for (var len = obj.length - 1; len >= 0; len--) {
    if (iterate.call(context, obj[len], len, obj)) {
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
  var len = args.length
  for (var source, index = 1; index < len; index++) {
    source = args[index]
    arrayEach(objectKeys(args[index]), function (key) {
      target[key] = isClone ? clone(source[key], isClone) : source[key]
    })
  }
  return target
}

/**
  * 将一个或者多个对象值解构到目标对象
  *
  * @param {Object} obj 目标对象
  * @param {...Object}
  * @return {Boolean}
  */
function destructuring (target, source) {
  var args = arguments
  if (target && source) {
    var result = [{}]
    for (var index = 1, len = args.length; index < len; index++) {
      result.push(args[index])
    }
    var rest = objectAssign.apply(this, result)
    var restKeys = objectKeys(rest)
    arrayEach(objectKeys(target), function (key) {
      if (includes(restKeys, key)) {
        target[key] = rest[key]
      }
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
      return objectAssignFns ? objectAssignFns.apply(Object, args) : extend(target, args)
    }
  }
  return target
}

function outError (e) {
  var _console = console
  _console && _console.error(e)
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
      outError(e)
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
  return JSON.stringify(obj) || ''
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
    var isDefs = arguments.length > 1 && (defs === null || !isObject(defs))
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

function pluckRemove (iterate) {
  return function (item, index) {
    return index === iterate
  }
}

/**
  * 移除对象属性
  *
  * @param {Object/Array} obj 对象/数组
  * @param {Function/String} iterate 方法或属性
  * @param {Object} context 上下文
  * @return {Object/Array}
  */
function removeObject (obj, iterate, context) {
  if (obj) {
    var removeKeys = []
    var rest = []
    context = context || this
    if (!isFunction(iterate)) {
      iterate = pluckRemove(iterate)
    }
    each(obj, function (item, index, rest) {
      if (iterate.call(context, item, index, rest)) {
        removeKeys.push(index)
      }
    })
    if (isArray(obj)) {
      lastEach(removeKeys, function (item, key) {
        rest.push(obj[item])
        obj.splice(item, 1)
      })
    } else {
      rest = {}
      arrayEach(removeKeys, function (key) {
        try {
          rest[key] = obj[key]
          delete obj[key]
        } catch (e) {
          obj[key] = undefined
        }
      })
    }
    return rest
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
    var objectKeysFn = Object.keys
    if (objectKeysFn) {
      return objectKeysFn(obj)
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
  if (obj) {
    var objectValuesFn = Object.values
    if (objectValuesFn) {
      return objectValuesFn(obj)
    }
    var result = []
    arrayEach(objectKeys(obj), function (key) {
      result.push(obj[key])
    })
  }
  return result
}

/**
  * 获取对象所有属性、值
  *
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
function objectEntries (obj) {
  if (obj) {
    var objectEntriesFn = Object.entries
    if (objectEntriesFn) {
      return objectEntriesFn(obj)
    }
    var result = []
    arrayEach(objectKeys(obj), function (key) {
      result.push([key, obj[key]])
    })
  }
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

function objectEach (obj, iterate, context) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      iterate.call(context || this, obj[key], key, obj)
    }
  }
}

function objectLastEach (obj, iterate, context) {
  arrayLastEach(objectKeys(obj), function (key) {
    iterate.call(context || this, obj[key], key, obj)
  })
}

function arrayEach (obj, iterate, context) {
  for (var index = 0, len = obj.length; index < len; index++) {
    iterate.call(context || this, obj[index], index, obj)
  }
}

function arrayLastEach (obj, iterate, context) {
  for (var len = obj.length - 1; len >= 0; len--) {
    iterate.call(context || this, obj[len], len, obj)
  }
}

/**
  * 迭代器
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function forOf (obj, iterate, context) {
  if (obj) {
    if (isArray(obj)) {
      for (var index = 0, len = obj.length; index < len; index++) {
        if (iterate.call(context || this, obj[index], index, obj) === false) {
          break
        }
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (iterate.call(context || this, obj[key], key, obj) === false) {
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
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function each (obj, iterate, context) {
  if (obj) {
    if (isArray(obj)) {
      if (isFunction(obj.forEach)) {
        return obj.forEach(iterate, context || this)
      }
      return arrayEach(obj, iterate, context || this)
    }
    return objectEach(obj, iterate, context || this)
  }
  return obj
}

/**
  * 迭代器,从最后开始迭代
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function lastEach (obj, iterate, context) {
  if (obj) {
    return (isArray(obj) ? arrayLastEach : objectLastEach)(obj, iterate, context || this)
  }
  return obj
}

/**
  * 迭代器,从最后开始迭代
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function lastForOf (obj, iterate, context) {
  if (obj) {
    var len
    if (isArray(obj)) {
      for (len = obj.length - 1; len >= 0; len--) {
        if (iterate.call(context || this, obj[len], len, obj) === false) {
          break
        }
      }
    } else {
      var list = objectKeys(obj)
      for (len = list.length - 1; len >= 0; len--) {
        if (iterate.call(context || this, obj[list[len]], list[len], obj) === false) {
          break
        }
      }
    }
  }
}

function createiterateEmpty (iterate) {
  return function () {
    return isEmpty(iterate)
  }
}

/**
  * 集合分组,默认使用键值分组,如果有iterate则使用结果进行分组
  *
  * @param {Array} obj 对象
  * @param {Function} iterate 回调/对象属性
  * @param {Object} context 上下文
  * @return {Object}
  */
function groupBy (obj, iterate, context) {
  var result = {}
  if (obj) {
    context = this || context
    if (iterate !== null && iterate !== undefined) {
      if (isObject(iterate)) {
        iterate = createiterateEmpty(iterate)
      } else if (!isFunction(iterate)) {
        iterate = property(iterate)
      }
    }
    each(obj, function (val, key) {
      var groupKey = iterate ? iterate.call(context, val, key, obj) : val
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
  * @param {Function} iterate 回调/对象属性
  * @param {Object} context 上下文
  * @return {Object}
  */
function countBy (obj, iterate, context) {
  var result = groupBy(obj, iterate, context || this)
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
  var args = arguments
  if (args.length < 2) {
    stop = args[0]
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

/**
  * 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
  *
  * @param {Function} callback 回调
  * @param {Number} wait 多少秒毫
  * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
  * @return {Function}
  */
function throttle (callback, wait, options) {
  var opts = options || {}
  var runFlag = false
  var args = null
  var context = null
  var timeout = null
  var optLeading = 'leading' in opts ? opts.leading : true
  var optTrailing = 'trailing' in opts ? opts.trailing : false
  var runFn = function () {
    runFlag = true
    callback.apply(context, args)
    timeout = setTimeout(endFn, wait)
  }
  var endFn = function () {
    timeout = null
    if (!runFlag && optTrailing === true) {
      runFn()
    }
  }
  var cancelFn = function () {
    var rest = timeout !== null
    clearTimeout(timeout)
    runFlag = false
    timeout = null
    return rest
  }
  var throttled = function () {
    args = arguments
    context = this
    runFlag = false
    if (timeout === null) {
      if (optLeading === true) {
        runFn()
      } else if (optTrailing === true) {
        timeout = setTimeout(endFn, wait)
      }
    }
  }
  throttled.cancel = cancelFn
  return throttled
}

/**
  * 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟
  *
  * @param {Function} callback 回调
  * @param {Number} wait 多少秒毫
  * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
  * @return {Function}
  */
function debounce (callback, wait, options) {
  var opts = options || {}
  var runFlag = false
  var args = null
  var context = null
  var timeout = null
  var isLeading = typeof options === 'boolean'
  var optLeading = 'leading' in opts ? opts.leading : isLeading
  var optTrailing = 'trailing' in opts ? opts.trailing : !isLeading
  var runFn = function () {
    runFlag = true
    timeout = null
    callback.apply(context, args)
  }
  var endFn = function () {
    if (optLeading === true) {
      timeout = null
    }
    if (!runFlag && optTrailing === true) {
      runFn()
    }
  }
  var cancelFn = function () {
    var rest = timeout !== null
    clearTimeout(timeout)
    timeout = null
    return rest
  }
  var debounced = function () {
    runFlag = false
    args = arguments
    context = this
    if (timeout === null) {
      if (optLeading === true) {
        runFn()
      }
    } else {
      clearTimeout(timeout)
    }
    timeout = setTimeout(endFn, wait)
  }
  debounced.cancel = cancelFn
  return debounced
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
  clear: removeObject,
  clearObject: clearObject,
  remove: removeObject,
  removeObject: removeObject,
  range: range,
  throttle: throttle,
  debounce: debounce,
  destructuring: destructuring
}

module.exports = baseExports
