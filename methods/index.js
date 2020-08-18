'use strict'

// 核心
var XEUtils = require('./xe-utils')

// 对象相关的方法
var assign = require('./object/assign')
var extend = require('./object/extend')
var objectEach = require('./object/objectEach')
var lastObjectEach = require('./object/lastObjectEach')
var objectMap = require('./object/objectMap')
var merge = require('./object/merge')

// 数组相关的方法
var map = require('./array/map')
var some = require('./array/some')
var every = require('./array/every')
var includeArrays = require('./array/includeArrays')
var arrayEach = require('./array/arrayEach')
var lastArrayEach = require('./array/lastArrayEach')
var uniq = require('./array/uniq')
var union = require('./array/union')
var toArray = require('./array/toArray')
var sortBy = require('./array/sortBy')
var shuffle = require('./array/shuffle')
var sample = require('./array/sample')
var slice = require('./array/slice')
var filter = require('./array/filter')
var findKey = require('./array/findKey')
var includes = require('./array/includes')
var find = require('./array/find')
var findLast = require('./array/findLast')
var reduce = require('./array/reduce')
var copyWithin = require('./array/copyWithin')
var chunk = require('./array/chunk')
var zip = require('./array/zip')
var unzip = require('./array/unzip')
var zipObject = require('./array/zipObject')
var flatten = require('./array/flatten')
var pluck = require('./array/pluck')
var invoke = require('./array/invoke')
var invokeMap = require('./array/invokeMap')
var toArrayTree = require('./array/toArrayTree')
var toTreeArray = require('./array/toTreeArray')
var findTree = require('./array/findTree')
var eachTree = require('./array/eachTree')
var mapTree = require('./array/mapTree')
var filterTree = require('./array/filterTree')
var searchTree = require('./array/searchTree')
var arrayIndexOf = require('./array/arrayIndexOf')
var arrayLastIndexOf = require('./array/arrayLastIndexOf')

// 基础方法
var hasOwnProp = require('./base/hasOwnProp')
var isArray = require('./base/isArray')
var isNull = require('./base/isNull')
var isNumberNaN = require('./base/isNaN')
var isUndefined = require('./base/isUndefined')
var isFunction = require('./base/isFunction')
var isObject = require('./base/isObject')
var isString = require('./base/isString')
var isPlainObject = require('./base/isPlainObject')
var isLeapYear = require('./base/isLeapYear')
var isDate = require('./base/isDate')
var eqNull = require('./base/eqNull')
var each = require('./base/each')
var forOf = require('./base/forOf')
var lastForOf = require('./base/lastForOf')
var indexOf = require('./base/indexOf')
var lastIndexOf = require('./base/lastIndexOf')
var keys = require('./base/keys')
var values = require('./base/values')
var clone = require('./base/clone')
var getSize = require('./base/getSize')
var lastEach = require('./base/lastEach')
var remove = require('./base/remove')
var clear = require('./base/clear')
var isNumberFinite = require('./base/isFinite')
var isFloat = require('./base/isFloat')
var isInteger = require('./base/isInteger')
var isBoolean = require('./base/isBoolean')
var isNumber = require('./base/isNumber')
var isRegExp = require('./base/isRegExp')
var isError = require('./base/isError')
var isTypeError = require('./base/isTypeError')
var isEmpty = require('./base/isEmpty')
var isSymbol = require('./base/isSymbol')
var isArguments = require('./base/isArguments')
var isElement = require('./base/isElement')
var isDocument = require('./base/isDocument')
var isWindow = require('./base/isWindow')
var isFormData = require('./base/isFormData')
var isMap = require('./base/isMap')
var isWeakMap = require('./base/isWeakMap')
var isSet = require('./base/isSet')
var isWeakSet = require('./base/isWeakSet')
var isMatch = require('./base/isMatch')
var isEqual = require('./base/isEqual')
var isEqualWith = require('./base/isEqualWith')
var getType = require('./base/getType')
var uniqueId = require('./base/uniqueId')
var findIndexOf = require('./base/findIndexOf')
var findLastIndexOf = require('./base/findLastIndexOf')
var toStringJSON = require('./base/toStringJSON')
var toJSONString = require('./base/toJSONString')
var entries = require('./base/entries')
var pick = require('./base/pick')
var omit = require('./base/omit')
var first = require('./base/first')
var last = require('./base/last')
var has = require('./base/has')
var get = require('./base/get')
var set = require('./base/set')
var groupBy = require('./base/groupBy')
var countBy = require('./base/countBy')
var range = require('./base/range')
var destructuring = require('./base/destructuring')

// 数值相关方法
var random = require('./number/random')
var max = require('./number/max')
var min = require('./number/min')
var commafy = require('./number/commafy')
var round = require('./number/round')
var ceil = require('./number/ceil')
var floor = require('./number/floor')
var toFixed = require('./number/toFixed')
var toFixedString = require('./number/toFixedString')
var toFixedNumber = require('./number/toFixedNumber')
var toInteger = require('./number/toInteger')
var toNumber = require('./number/toNumber')
var toNumberString = require('./number/toNumberString')
var add = require('./number/add')
var subtract = require('./number/subtract')
var multiply = require('./number/multiply')
var divide = require('./number/divide')
var sum = require('./number/sum')
var mean = require('./number/mean')

// 日期相关的方法
var getWhatYear = require('./date/getWhatYear')
var getWhatMonth = require('./date/getWhatMonth')
var getWhatDay = require('./date/getWhatDay')
var toStringDate = require('./date/toStringDate')
var toDateString = require('./date/toDateString')
var now = require('./date/now')
var timestamp = require('./date/timestamp')
var isValidDate = require('./date/isValidDate')
var isDateSame = require('./date/isDateSame')
var getWhatWeek = require('./date/getWhatWeek')
var getYearDay = require('./date/getYearDay')
var getYearWeek = require('./date/getYearWeek')
var getMonthWeek = require('./date/getMonthWeek')
var getDayOfYear = require('./date/getDayOfYear')
var getDayOfMonth = require('./date/getDayOfMonth')
var getDateDiff = require('./date/getDateDiff')

// 字符串相关的方法
var padEnd = require('./string/padEnd')
var padStart = require('./string/padStart')
var repeat = require('./string/repeat')
var trim = require('./string/trim')
var trimRight = require('./string/trimRight')
var trimLeft = require('./string/trimLeft')
var escape = require('./string/escape')
var unescape = require('./string/unescape')
var camelCase = require('./string/camelCase')
var kebabCase = require('./string/kebabCase')
var startsWith = require('./string/startsWith')
var endsWith = require('./string/endsWith')
var template = require('./string/template')
var toValString = require('./string/toString')

// 函数相关的方法
var noop = require('./function/noop')
var property = require('./function/property')
var bind = require('./function/bind')
var once = require('./function/once')
var after = require('./function/after')
var before = require('./function/before')
var throttle = require('./function/throttle')
var debounce = require('./function/debounce')
var delay = require('./function/delay')

// 地址相关的方法
var unserialize = require('./url/unserialize')
var serialize = require('./url/serialize')
var parseUrl = require('./url/parseUrl')

// 浏览器相关的方法
var getBaseURL = require('./web/getBaseURL')
var locat = require('./web/locat')
var cookie = require('./web/cookie')
var browse = require('./web/browse')

assign(XEUtils, {
  // object
  assign: assign,
  extend: extend,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  objectMap: objectMap,
  merge: merge,

  // array
  uniq: uniq,
  union: union,
  sortBy: sortBy,
  shuffle: shuffle,
  sample: sample,
  some: some,
  every: every,
  slice: slice,
  filter: filter,
  find: find,
  findLast: findLast,
  findKey: findKey,
  includes: includes,
  arrayIndexOf: arrayIndexOf,
  arrayLastIndexOf: arrayLastIndexOf,
  map: map,
  reduce: reduce,
  copyWithin: copyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  zipObject: zipObject,
  flatten: flatten,
  toArray: toArray,
  includeArrays: includeArrays,
  pluck: pluck,
  invoke: invoke,
  invokeMap: invokeMap,
  arrayEach: arrayEach,
  lastArrayEach: lastArrayEach,
  toArrayTree: toArrayTree,
  toTreeArray: toTreeArray,
  findTree: findTree,
  eachTree: eachTree,
  mapTree: mapTree,
  filterTree: filterTree,
  searchTree: searchTree,

  // base
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
  destructuring: destructuring,

  // number
  random: random,
  min: min,
  max: max,
  commafy: commafy,
  round: round,
  ceil: ceil,
  floor: floor,
  toFixed: toFixed,
  toFixedString: toFixedString,
  toFixedNumber: toFixedNumber,
  toNumber: toNumber,
  toNumberString: toNumberString,
  toInteger: toInteger,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  sum: sum,
  mean: mean,

  // date
  now: now,
  timestamp: timestamp,
  isValidDate: isValidDate,
  isDateSame: isDateSame,
  toStringDate: toStringDate,
  toDateString: toDateString,
  getWhatYear: getWhatYear,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getYearDay: getYearDay,
  getYearWeek: getYearWeek,
  getMonthWeek: getMonthWeek,
  getDayOfYear: getDayOfYear,
  getDayOfMonth: getDayOfMonth,
  getDateDiff: getDateDiff,

  // string
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  kebabCase: kebabCase,
  repeat: repeat,
  padStart: padStart,
  padEnd: padEnd,
  startsWith: startsWith,
  endsWith: endsWith,
  template: template,
  toString: toValString,

  // function
  noop: noop,
  property: property,
  bind: bind,
  once: once,
  after: after,
  before: before,
  throttle: throttle,
  debounce: debounce,
  delay: delay,

  // url
  unserialize: unserialize,
  serialize: serialize,
  parseUrl: parseUrl,

  // web
  getBaseURL: getBaseURL,
  locat: locat,
  browse: browse,
  cookie: cookie
})

module.exports = XEUtils
