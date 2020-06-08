'use strict'

var hasOwnProp = require('./hasOwnProp')
var isArray = require('./isArray')
var isNull = require('./isNull')
var isNumberNaN = require('./isNaN')
var isUndefined = require('./isUndefined')
var isFunction = require('./isFunction')
var isObject = require('./isObject')
var isString = require('./isString')
var isPlainObject = require('./isPlainObject')
var isLeapYear = require('./isLeapYear')
var isDate = require('./isDate')
var eqNull = require('./eqNull')
var each = require('./each')
var forOf = require('./forOf')
var lastForOf = require('./lastForOf')
var indexOf = require('./indexOf')
var lastIndexOf = require('./lastIndexOf')
var keys = require('./keys')
var values = require('./values')
var clone = require('./clone')
var getSize = require('./getSize')
var lastEach = require('./lastEach')
var remove = require('./remove')
var clear = require('./clear')
var isNumberFinite = require('./isFinite')
var isFloat = require('./isFloat')
var isInteger = require('./isInteger')
var isBoolean = require('./isBoolean')
var isNumber = require('./isNumber')
var isRegExp = require('./isRegExp')
var isError = require('./isError')
var isTypeError = require('./isTypeError')
var isEmpty = require('./isEmpty')
var isSymbol = require('./isSymbol')
var isArguments = require('./isArguments')
var isElement = require('./isElement')
var isDocument = require('./isDocument')
var isWindow = require('./isWindow')
var isFormData = require('./isFormData')
var isMap = require('./isMap')
var isWeakMap = require('./isWeakMap')
var isSet = require('./isSet')
var isWeakSet = require('./isWeakSet')
var isMatch = require('./isMatch')
var isEqual = require('./isEqual')
var isEqualWith = require('./isEqualWith')
var getType = require('./getType')
var uniqueId = require('./uniqueId')
var findIndexOf = require('./findIndexOf')
var findLastIndexOf = require('./findLastIndexOf')
var toStringJSON = require('./toStringJSON')
var toJSONString = require('./toJSONString')
var entries = require('./entries')
var pick = require('./pick')
var omit = require('./omit')
var first = require('./first')
var last = require('./last')
var has = require('./has')
var get = require('./get')
var set = require('./set')
var groupBy = require('./groupBy')
var countBy = require('./countBy')
var range = require('./range')
var destructuring = require('./destructuring')

var baseExports = {
  hasOwnProp: hasOwnProp,
  eqNull: eqNull,
  isNaN: isNumberNaN,
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
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  findIndexOf: findIndexOf,
  findLastIndexOf: findLastIndexOf,
  toStringJSON: toStringJSON,
  toJSONString: toJSONString,
  keys: keys,
  values: values,
  entries: entries,
  pick: pick,
  omit: omit,
  first: first,
  last: last,
  each: each,
  forOf: forOf,
  lastForOf: lastForOf,
  lastEach: lastEach,
  has: has,
  get: get,
  set: set,
  groupBy: groupBy,
  countBy: countBy,
  clone: clone,
  clear: clear,
  remove: remove,
  range: range,
  destructuring: destructuring
}

module.exports = baseExports
