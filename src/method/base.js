'use strict'

var XEUtils = require('../core/utils')

var STRING_UNDEFINED = 'undefined'
var objectToString = Object.prototype.toString
var objectAssignFns = Object.assign

function toValString (obj) {
  return ('' + (obj === null || obj === void 0 ? '' : obj))
}

function hasOwnProp (obj, key) {
  return obj.hasOwnProperty(key)
}

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
  return XEUtils.map(arr, deepClone)
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
  * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
  *
  * @param {Function} callback 函数
  * @param {Number} wait 延迟毫秒
  * @param {*} args 额外的参数
  * @return {Number}
 */
function delay (callback, wait) {
  var args = arraySlice(arguments, 2)
  var context = this
  return setTimeout(function () {
    callback.apply(context, args)
  }, wait)
}

/**
  * 创建一个绑定上下文的函数
  *
  * @param {Function} callback 函数
  * @param {Object} context 上下文
  * @param {*} args 额外的参数
  * @return {Object}
  */
function bind (callback, context) {
  var args = arraySlice(arguments, 2)
  context = context || this
  return function () {
    return callback.apply(context, arraySlice(arguments).concat(args))
  }
}

/**
  * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
  *
  * @param {Function} callback 函数
  * @param {Object} context 上下文
  * @param {*} args 额外的参数
  * @return {Object}
  */
function once (callback, context) {
  var done = false
  var rest = null
  var args = arraySlice(arguments, 2)
  context = context || this
  return function () {
    if (done) {
      return rest
    }
    rest = callback.apply(context, arraySlice(arguments).concat(args))
    done = true
    return rest
  }
}

/**
  * 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回
  *
  * @param {Number} count 调用次数
  * @param {Function} callback 完成回调
  * @return {Object}
  */
function after (count, callback, context) {
  var runCount = 0
  var rests = []
  context = context || this
  return function () {
    runCount++
    if (runCount <= count) {
      rests.push(arguments[0])
    }
    if (runCount >= count) {
      callback.apply(context, [rests].concat(arraySlice(arguments)))
    }
  }
}

/**
  * 创建一个函数, 调用次数不超过 count 次之前执行回调并将所有结果记住后返回
  *
  * @param {Number} count 调用次数
  * @param {Function} callback 完成回调
  * @return {Object}
  */
function before (count, callback, context) {
  var runCount = 0
  var rests = []
  context = context || this
  return function () {
    runCount++
    if (runCount < count) {
      rests.push(arguments[0])
      callback.apply(context, [rests].concat(arraySlice(arguments)))
    }
  }
}

function isNumberFinite (obj) {
  return isNumber(obj) && isFinite(obj)
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
  return obj !== null && !isNaN(obj) && !isArray(obj) && !isInteger(obj)
}

/**
  * 判断是否整数
  *
  * @param {Number, String} number 数值
  * @return {Boolean}
  */
var isInteger = function (obj) {
  return obj !== null && !isNaN(obj) && !isArray(obj) && obj % 1 === 0
}

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
  for (var key in obj) {
    return false
  }
  return true
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
  return !!(obj && isString(obj.nodeName) && isNumber(obj.nodeType))
}

/**
  * 判断是否Document对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var supportDocument = typeof document !== STRING_UNDEFINED
function isDocument (obj) {
  return !!(obj && obj.nodeType === 9 && supportDocument)
}

/**
  * 判断是否Window对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var supportWindow = typeof window !== STRING_UNDEFINED
function isWindow (obj) {
  return !!(obj && obj === obj.window && supportWindow)
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
  var year
  var currentDate = date ? XEUtils.toStringDate(date) : new Date()
  if (isDate(currentDate)) {
    year = currentDate.getFullYear()
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)
  }
  return false
}

/**
 * 判断属性中的键和值是否包含在对象中
 *
 * @param {Object/Array} obj 对象
 * @param {Object} source 值
 * @return {Boolean}
 */
function isMatch (obj, source) {
  var objKeys = objectKeys(obj)
  var sourceKeys = objectKeys(source)
  if (sourceKeys.length) {
    if (XEUtils.includeArrays(objKeys, sourceKeys)) {
      return XEUtils.some(sourceKeys, function (key2) {
        return findIndexOf(objKeys, function (key1) {
          return key1 === key2 && isEqual(obj[key1], source[key2])
        }) > -1
      })
    }
  } else {
    return true
  }
  return isEqual(obj, source)
}

/**
 * 深度比较两个对象之间的值是否相等
 *
 * @param {Object} obj1 值1
 * @param {Object} obj2 值2
 * @return {Boolean}
 */
function isEqual (obj1, obj2) {
  return equalCompare(obj1, obj2, defaultCompare)
}

function defaultCompare (v1, v2) {
  return v1 === v2
}

function equalCompare (val1, val2, compare, func, key, obj1, obj2) {
  if (val1 === val2) {
    return true
  }
  if (val1 && val2 && !isNumber(val1) && !isNumber(val2) && !isString(val1) && !isString(val2)) {
    if (isRegExp(val1)) {
      return compare('' + val1, '' + val2, key, obj1, obj2)
    } if (isDate(val1) || isBoolean(val1)) {
      return compare(+val1, +val2, key, obj1, obj2)
    } else {
      var result, val1Keys, val2Keys
      var isObj1Arr = isArray(val1)
      var isObj2Arr = isArray(val2)
      if (isObj1Arr || isObj2Arr ? isObj1Arr && isObj2Arr : val1.constructor === val2.constructor) {
        val1Keys = objectKeys(val1)
        val2Keys = objectKeys(val2)
        if (func) {
          result = func(val1, val2, key)
        }
        if (val1Keys.length === val2Keys.length) {
          return isUndefined(result) ? XEUtils.every(val1Keys, function (key, index) {
            return key === val2Keys[index] && equalCompare(val1[key], val2[val2Keys[index]], compare, func, isObj1Arr || isObj2Arr ? index : key, val1, val2)
          }) : !!result
        }
        return false
      }
    }
  }
  return compare(val1, val2, key, obj1, obj2)
}

/**
 * 深度比较两个对象之间的值是否相等，使用自定义比较函数
 *
 * @param {Object} obj1 值1
 * @param {Object} obj2 值2
 * @param {Function} func 自定义函数
 * @return {Boolean}
 */
function isEqualWith (obj1, obj2, func) {
  if (isFunction(func)) {
    return equalCompare(obj1, obj2, function (v1, v2, key, obj1, obj2) {
      var result = func(v1, v2, key, obj1, obj2)
      return isUndefined(result) ? defaultCompare(v1, v2) : !!result
    }, func)
  }
  return equalCompare(obj1, obj2, defaultCompare)
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
  if (isRegExp(obj)) {
    return 'regexp'
  }
  if (isError(obj)) {
    return 'error'
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

/**
 * 裁剪 Arguments 或数组 array，从 start 位置开始到 end 结束，但不包括 end 本身的位置
 * @param {Array/Arguments} array 数组或Arguments
 * @param {Number} startIndex 开始索引
 * @param {Number} endIndex 结束索引
 */
function arraySlice (array, startIndex, endIndex) {
  var result = []
  if (array) {
    for (startIndex = startIndex || 0, endIndex = endIndex || array.length; startIndex < endIndex; startIndex++) {
      result.push(array[startIndex])
    }
  }
  return result
}

function createIndexOf (name, callback) {
  return function (obj, val) {
    if (obj) {
      if (isString(obj) || isArray(obj)) {
        if (obj[name]) {
          return obj[name](val)
        }
        return callback(obj, val)
      }
      for (var key in obj) {
        if (hasOwnProp(obj, key)) {
          if (val === obj[key]) {
            return key
          }
        }
      }
    }
    return -1
  }
}

function arrayIndexOf (obj, val) {
  if (obj.indexOf) {
    return obj.indexOf(val)
  }
  for (var index = 0, len = obj.length; index < len; index++) {
    if (val === obj[index]) {
      return index
    }
  }
}

/**
  * 返回对象第一个索引值
  *
  * @param {Object} obj 对象
  * @param {Object} val 值
  * @return {Number}
  */
var indexOf = createIndexOf('indexOf', arrayIndexOf)

function arrayLastIndexOf (obj, val) {
  if (obj.lastIndexOf) {
    return obj.lastIndexOf(val)
  }
  for (var len = obj.length - 1; len >= 0; len--) {
    if (val === obj[len]) {
      return len
    }
  }
  return -1
}

/**
  * 从最后开始的索引值,返回对象第一个索引值
  *
  * @param {Object} array 对象
  * @param {Object} val 值
  * @return {Number}
  */
var lastIndexOf = createIndexOf('lastIndexOf', arrayLastIndexOf)

function createiterateIndexOf (callback) {
  return function (obj, iterate, context) {
    if (obj && isFunction(iterate)) {
      context = this || context
      if (isArray(obj) || isString(obj)) {
        return callback(obj, iterate, context)
      }
      for (var key in obj) {
        if (hasOwnProp(obj, key)) {
          if (iterate.call(context, obj[key], key, obj)) {
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
  for (var index = 0, len = obj.length; index < len; index++) {
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

function extend (destination, args, isClone) {
  var len = args.length
  for (var source, index = 1; index < len; index++) {
    source = args[index]
    arrayEach(objectKeys(args[index]), isClone ? function (key) {
      destination[key] = clone(source[key], isClone)
    } : function (key) {
      destination[key] = source[key]
    })
  }
  return destination
}

/**
  * 将一个或者多个对象值解构到目标对象
  *
  * @param {Object} destination 目标对象
  * @param {...Object}
  * @return {Boolean}
  */
function destructuring (destination, sources) {
  if (destination && sources) {
    var rest = objectAssign.apply(this, [{}].concat(arraySlice(arguments, 1)))
    var restKeys = objectKeys(rest)
    arrayEach(objectKeys(destination), function (key) {
      if (includes(restKeys, key)) {
        destination[key] = rest[key]
      }
    })
  }
  return destination
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

/**
  * 字符串转JSON
  *
  * @param {String} str 字符串
  * @return {Object} 返回转换后对象
  */
function toStringJSON (str) {
  if (isObject(str)) {
    return str
  } else if (isString(str)) {
    try {
      return JSON.parse(str)
    } catch (e) {}
  }
  return {}
}

/**
  * JSON转字符串
  *
  * @param {Object} obj 对象
  * @return {String} 返回字符串
  */
function toJSONString (obj) {
  return JSON.stringify(obj) || ''
}

function deleteProperty (obj, property) {
  try {
    delete obj[property]
  } catch (e) {
    obj[property] = undefined
  }
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
    var len
    var isDefs = arguments.length > 1 && (defs === null || !isObject(defs))
    var extds = isDefs ? assigns : defs
    if (isPlainObject(obj)) {
      objectEach(obj, isDefs ? function (val, key) {
        obj[key] = defs
      } : function (val, key) {
        deleteProperty(obj, key)
      })
      if (extds) {
        objectAssign(obj, extds)
      }
    } else if (isArray(obj)) {
      if (isDefs) {
        len = obj.length
        while (len > 0) {
          len--
          obj[len] = defs
        }
      } else {
        obj.length = 0
      }
      if (extds) {
        obj.push.apply(obj, extds)
      }
    }
  }
  return obj
}

function pluckProperty (name) {
  return function (obj, key) {
    return key === name
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
    if (arguments.length > 1) {
      var removeKeys = []
      var rest = []
      context = context || this
      if (!isFunction(iterate)) {
        iterate = pluckProperty(iterate)
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
          rest[key] = obj[key]
          deleteProperty(obj, key)
        })
      }
      return rest
    }
    return clearObject(obj)
  }
  return obj
}

function createGetObjects (name, getIndex) {
  var proMethod = Object[name]
  return function (obj) {
    var result = []
    if (obj) {
      if (proMethod) {
        return proMethod(obj)
      }
      each(obj, getIndex > 1 ? function (key) {
        result.push(['' + key, obj[key]])
      } : function () {
        result.push(arguments[getIndex])
      })
    }
    return result
  }
}

/**
  * 获取对象所有属性
  *
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
var objectKeys = createGetObjects('keys', 1)

/**
  * 获取对象所有值
  *
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
var objectValues = createGetObjects('values', 0)

/**
  * 获取对象所有属性、值
  *
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
var objectEntries = createGetObjects('entries', 2)

function createPickOmit (case1, case2) {
  return function (obj, callback) {
    var item
    var rest = {}
    var result = []
    var context = this
    var args = arguments
    var index = 1
    var len = args.length
    if (!isFunction(callback)) {
      for (callback = 0; index < len; index++) {
        item = args[index]
        if (isArray(item)) {
          result = result.concat(item)
        } else {
          result.push(item)
        }
      }
    }
    each(obj, function (val, key) {
      if ((callback ? callback.call(context, val, key, obj) : findIndexOf(result, function (name) {
        return name === key
      }) > -1) ? case1 : case2) {
        rest[key] = val
      }
    })
    return rest
  }
}

/**
 * 根据 keys 过滤指定的属性值，返回一个新的对象
 *
 * @param {Object} obj 对象
 * @param {String/Array} keys 键数组
 * @return {Object}
 */
var pick = createPickOmit(1, 0)

/**
 * 根据 keys 排除指定的属性值，返回一个新的对象
 *
 * @param {Object} obj 对象
 * @param {String/Array} keys 键数组
 * @return {Object}
 */
var omit = createPickOmit(0, 1)

/**
  * 获取对象第一个值
  *
  * @param {Object} obj 对象/数组
  * @return {Object}
  */
function getFirst (obj) {
  return objectValues(obj)[0]
}

/**
  * 获取对象最后一个值
  *
  * @param {Object} obj 对象/数组
  * @return {Object}
  */
function getLast (obj) {
  var list = objectValues(obj)
  return list[list.length - 1]
}

function arrayEach (obj, iterate, context) {
  if (obj) {
    if (obj.forEach) {
      obj.forEach(iterate, context)
    } else {
      for (var index = 0, len = obj.length; index < len; index++) {
        iterate.call(context || this, obj[index], index, obj)
      }
    }
  }
}

function objectEach (obj, iterate, context) {
  if (obj) {
    for (var key in obj) {
      if (hasOwnProp(obj, key)) {
        iterate.call(context || this, obj[key], key, obj)
      }
    }
  }
}

function lastObjectEach (obj, iterate, context) {
  lastArrayEach(objectKeys(obj), function (key) {
    iterate.call(context || this, obj[key], key, obj)
  })
}

function lastArrayEach (obj, iterate, context) {
  for (var len = obj.length - 1; len >= 0; len--) {
    iterate.call(context || this, obj[len], len, obj)
  }
}

/**
  * 迭代器,支持 return false 跳出循环 break
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function forOf (obj, iterate, context) {
  if (obj) {
    context = context || this
    if (isArray(obj)) {
      for (var index = 0, len = obj.length; index < len; index++) {
        if (iterate.call(context, obj[index], index, obj) === false) {
          break
        }
      }
    } else {
      for (var key in obj) {
        if (hasOwnProp(obj, key)) {
          if (iterate.call(context, obj[key], key, obj) === false) {
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
    context = context || this
    if (isArray(obj)) {
      return arrayEach(obj, iterate, context)
    }
    return objectEach(obj, iterate, context)
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
    return (isArray(obj) ? lastArrayEach : lastObjectEach)(obj, iterate, context || this)
  }
  return obj
}

/**
  * 迭代器,从最后开始迭代,支持 return false 跳出循环 break
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function lastForOf (obj, iterate, context) {
  if (obj) {
    var len, list
    context = context || this
    if (isArray(obj)) {
      for (len = obj.length - 1; len >= 0; len--) {
        if (iterate.call(context, obj[len], len, obj) === false) {
          break
        }
      }
    } else {
      list = objectKeys(obj)
      for (len = list.length - 1; len >= 0; len--) {
        if (iterate.call(context, obj[list[len]], list[len], obj) === false) {
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

function getHGSKeys (property) {
  // 以最快的方式判断数组，可忽略准确性
  return property ? (property.splice && property.join ? property : ('' + property).split('.')) : []
}

/**
 * 检查键、路径是否是该对象的属性
 * @param {Object/Array} data 对象
 * @param {String/Function} property 键、路径
 * @return {Boolean}
 */
var hgKeyRE = /(.+)?\[(\d+)\]$/
var sKeyRE = /(.+)\[(\d+)\]$/
function has (obj, property) {
  if (obj) {
    if (obj.hasOwnProperty(property)) {
      return true
    } else {
      var prop, arrIndex, objProp, matchs, rest, isHas
      var keys = getHGSKeys(property)
      var index = 0
      var len = keys.length
      for (rest = obj; index < len; index++) {
        isHas = false
        prop = keys[index]
        matchs = prop ? prop.match(hgKeyRE) : ''
        if (matchs) {
          arrIndex = matchs[1]
          objProp = matchs[2]
          if (arrIndex) {
            if (rest[arrIndex]) {
              if (rest[arrIndex].hasOwnProperty(objProp)) {
                isHas = true
                rest = rest[arrIndex][objProp]
              }
            }
          } else {
            if (rest.hasOwnProperty(objProp)) {
              isHas = true
              rest = rest[objProp]
            }
          }
        } else {
          if (rest.hasOwnProperty(prop)) {
            isHas = true
            rest = rest[prop]
          }
        }
        if (isHas) {
          if (index === len - 1) {
            return true
          }
        } else {
          break
        }
      }
    }
  }
  return false
}

function valGet (obj, key) {
  var matchs = key ? key.match(hgKeyRE) : ''
  return matchs ? (matchs[1] ? (obj[matchs[1]] ? obj[matchs[1]][matchs[2]] : undefined) : obj[matchs[2]]) : obj[key]
}

function pathGet (obj, property) {
  if (obj) {
    var rest, keys, len
    var index = 0
    if (obj[property] || obj.hasOwnProperty(property)) {
      return obj[property]
    } else {
      keys = getHGSKeys(property)
      len = keys.length
      if (len) {
        for (rest = obj; index < len; index++) {
          rest = valGet(rest, keys[index])
          if (rest === undefined || rest === null) {
            return
          }
        }
      }
      return rest
    }
  }
}

/**
 * 获取对象的属性的值，如果值为 undefined，则返回默认值
 * @param {Object/Array} obj 对象
 * @param {String/Function} property 键、路径
 * @param {Object} defaultValue 默认值
 * @return {Object}
 */
function get (obj, property, defaultValue) {
  if (obj === null || obj === undefined) {
    return defaultValue
  }
  var result = pathGet(obj, property)
  return result === undefined ? defaultValue : result
}

function valSet (obj, key, isSet, value) {
  if (obj[key]) {
    if (isSet) {
      obj[key] = value
    }
  } else {
    var index
    var matchs = key ? key.match(sKeyRE) : null
    var rest = isSet ? value : {}
    if (matchs) {
      index = parseInt(matchs[2])
      if (obj[matchs[1]]) {
        obj[matchs[1]][index] = rest
      } else {
        obj[matchs[1]] = new Array(index + 1)
        obj[matchs[1]][index] = rest
      }
    } else {
      obj[key] = rest
    }
    return rest
  }
  return obj[key]
}

/**
 * 设置对象属性上的值。如果属性不存在则创建它
 * @param {Object/Array} obj 对象
 * @param {String/Function} property 键、路径
 * @param {Object} value 值
 */
function set (obj, property, value) {
  if (obj) {
    if (obj[property] || obj.hasOwnProperty(property)) {
      obj[property] = value
    } else {
      var rest = obj
      var keys = getHGSKeys(property)
      var len = keys.length
      for (var index = 0; index < len; index++) {
        rest = valSet(rest, keys[index], index === len - 1, value)
      }
    }
  }
  return obj
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
  var groupKey
  var result = {}
  if (obj) {
    context = this || context
    if (iterate && isObject(iterate)) {
      iterate = createiterateEmpty(iterate)
    } else if (!isFunction(iterate)) {
      iterate = property(iterate)
    }
    each(obj, function (val, key) {
      groupKey = iterate ? iterate.call(context, val, key, obj) : val
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
  var index, len
  var result = []
  var args = arguments
  if (args.length < 2) {
    stop = args[0]
    start = 0
  }
  index = start >> 0
  len = stop >> 0
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
  var args, context
  var opts = options || {}
  var runFlag = false
  var timeout = 0
  var optLeading = 'leading' in opts ? opts.leading : true
  var optTrailing = 'trailing' in opts ? opts.trailing : false
  var runFn = function () {
    runFlag = true
    callback.apply(context, args)
    timeout = setTimeout(endFn, wait)
  }
  var endFn = function () {
    timeout = 0
    if (!runFlag && optTrailing === true) {
      runFn()
    }
  }
  var cancelFn = function () {
    var rest = timeout !== 0
    clearTimeout(timeout)
    runFlag = false
    timeout = 0
    return rest
  }
  var throttled = function () {
    args = arguments
    context = this
    runFlag = false
    if (timeout === 0) {
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
  var args, context
  var opts = options || {}
  var runFlag = false
  var timeout = 0
  var isLeading = typeof options === 'boolean'
  var optLeading = 'leading' in opts ? opts.leading : isLeading
  var optTrailing = 'trailing' in opts ? opts.trailing : !isLeading
  var clearTimeoutFn = clearTimeout
  var runFn = function () {
    runFlag = true
    timeout = 0
    callback.apply(context, args)
  }
  var endFn = function () {
    if (optLeading === true) {
      timeout = 0
    }
    if (!runFlag && optTrailing === true) {
      runFn()
    }
  }
  var cancelFn = function () {
    var rest = timeout !== 0
    clearTimeoutFn(timeout)
    timeout = 0
    return rest
  }
  var debounced = function () {
    runFlag = false
    args = arguments
    context = this
    if (timeout === 0) {
      if (optLeading === true) {
        runFn()
      }
    } else {
      clearTimeoutFn(timeout)
    }
    timeout = setTimeout(endFn, wait)
  }
  debounced.cancel = cancelFn
  return debounced
}

var baseExports = {
  _hasOwnProp: hasOwnProp,
  isNaN: isNaN,
  isFinite: isNumberFinite,
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
  isMatch: isMatch,
  isEqual: isEqual,
  isEqualWith: isEqualWith,
  property: property,
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  slice: arraySlice,
  indexOf: indexOf,
  arrayIndexOf: arrayIndexOf,
  lastIndexOf: lastIndexOf,
  arrayLastIndexOf: arrayLastIndexOf,
  findIndexOf: findIndexOf,
  findLastIndexOf: findLastIndexOf,
  includes: includes,
  contains: includes,
  assign: objectAssign,
  extend: objectAssign,
  toString: toValString,
  toStringJSON: toStringJSON,
  toJSONString: toJSONString,
  keys: objectKeys,
  values: objectValues,
  entries: objectEntries,
  pick: pick,
  omit: omit,
  first: getFirst,
  last: getLast,
  each: each,
  forOf: forOf,
  arrayEach: arrayEach,
  forEach: arrayEach,
  objectEach: objectEach,
  lastForOf: lastForOf,
  lastEach: lastEach,
  lastForEach: lastArrayEach,
  lastArrayEach: lastArrayEach,
  lastObjectEach: lastObjectEach,
  has: has,
  get: get,
  set: set,
  groupBy: groupBy,
  countBy: countBy,
  objectMap: objectMap,
  clone: clone,
  delay: delay,
  bind: bind,
  once: once,
  after: after,
  before: before,
  clear: clearObject,
  remove: removeObject,
  range: range,
  throttle: throttle,
  debounce: debounce,
  destructuring: destructuring
}

module.exports = baseExports
