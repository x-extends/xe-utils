'use strict'

// 核心
var XEUtils = require('./ctor')

// 对象相关的方法
var assign = require('./assign')
var objectEach = require('./objectEach')
var lastObjectEach = require('./lastObjectEach')
var objectMap = require('./objectMap')
var merge = require('./merge')

// 数组相关的方法
var map = require('./map')
var some = require('./some')
var every = require('./every')
var includeArrays = require('./includeArrays')
var arrayEach = require('./arrayEach')
var lastArrayEach = require('./lastArrayEach')
var uniq = require('./uniq')
var union = require('./union')
var toArray = require('./toArray')
var sortBy = require('./sortBy')
var orderBy = require('./orderBy')
var shuffle = require('./shuffle')
var sample = require('./sample')
var slice = require('./slice')
var filter = require('./filter')
var findKey = require('./findKey')
var includes = require('./includes')
var find = require('./find')
var findLast = require('./findLast')
var reduce = require('./reduce')
var copyWithin = require('./copyWithin')
var chunk = require('./chunk')
var zip = require('./zip')
var unzip = require('./unzip')
var zipObject = require('./zipObject')
var flatten = require('./flatten')
var pluck = require('./pluck')
var invoke = require('./invoke')
var toArrayTree = require('./toArrayTree')
var toTreeArray = require('./toTreeArray')
var findTree = require('./findTree')
var eachTree = require('./eachTree')
var mapTree = require('./mapTree')
var filterTree = require('./filterTree')
var searchTree = require('./searchTree')
var arrayIndexOf = require('./arrayIndexOf')
var arrayLastIndexOf = require('./arrayLastIndexOf')

// 基础方法
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

// 数值相关方法
var random = require('./random')
var max = require('./max')
var min = require('./min')
var commafy = require('./commafy')
var round = require('./round')
var ceil = require('./ceil')
var floor = require('./floor')
var toFixed = require('./toFixed')
var toInteger = require('./toInteger')
var toNumber = require('./toNumber')
var toNumberString = require('./toNumberString')
var add = require('./add')
var subtract = require('./subtract')
var multiply = require('./multiply')
var divide = require('./divide')
var sum = require('./sum')
var mean = require('./mean')

// 日期相关的方法
var getWhatYear = require('./getWhatYear')
var getWhatQuarter = require('./getWhatQuarter')
var getWhatMonth = require('./getWhatMonth')
var getWhatDay = require('./getWhatDay')
var toStringDate = require('./toStringDate')
var toDateString = require('./toDateString')
var now = require('./now')
var timestamp = require('./timestamp')
var isValidDate = require('./isValidDate')
var isDateSame = require('./isDateSame')
var getWhatWeek = require('./getWhatWeek')
var getYearDay = require('./getYearDay')
var getYearWeek = require('./getYearWeek')
var getMonthWeek = require('./getMonthWeek')
var getDayOfYear = require('./getDayOfYear')
var getDayOfMonth = require('./getDayOfMonth')
var getDateDiff = require('./getDateDiff')

// 字符串相关的方法
var padEnd = require('./padEnd')
var padStart = require('./padStart')
var repeat = require('./repeat')
var trim = require('./trim')
var trimRight = require('./trimRight')
var trimLeft = require('./trimLeft')
var escape = require('./escape')
var unescape = require('./unescape')
var camelCase = require('./camelCase')
var kebabCase = require('./kebabCase')
var startsWith = require('./startsWith')
var endsWith = require('./endsWith')
var template = require('./template')
var toFormatString = require('./toFormatString')
var toValueString = require('./toValueString')

// 函数相关的方法
var noop = require('./noop')
var property = require('./property')
var bind = require('./bind')
var once = require('./once')
var after = require('./after')
var before = require('./before')
var throttle = require('./throttle')
var debounce = require('./debounce')
var delay = require('./delay')

// 地址相关的方法
var unserialize = require('./unserialize')
var serialize = require('./serialize')
var parseUrl = require('./parseUrl')

// 浏览器相关的方法
var getBaseURL = require('./getBaseURL')
var locat = require('./locat')
var cookie = require('./cookie')
var browse = require('./browse')

assign(XEUtils, {
  // object
  assign: assign,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  objectMap: objectMap,
  merge: merge,

  // array
  uniq: uniq,
  union: union,
  sortBy: sortBy,
  orderBy: orderBy,
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
  getWhatQuarter: getWhatQuarter,
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
  toFormatString: toFormatString,
  toString: toValueString,
  toValueString: toValueString,

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
