var staticParseInt = require('./staticParseInt')

var helperGetUTCDateTime = require('./helperGetUTCDateTime')
var helperGetDateTime = require('./helperGetDateTime')

var isString = require('./isString')
var isDate = require('./isDate')

function getParseRule (txt) {
  return '(\\d{' + txt + '})'
}

function toParseMs (num) {
  if (num < 10) {
    return num * 100
  } else if (num < 100) {
    return num * 10
  }
  return num
}

function toParseNum (num) {
  return isNaN(num) ? num : staticParseInt(num)
}

var d2 = getParseRule('2')
var d1or2 = getParseRule('1,2')
var d1or3 = getParseRule('1,3')
var d3or4 = getParseRule('3,4')
var place = '.{1}'
var d1Or2RE = place + d1or2
var dzZ = '(([zZ])|([-+]\\d{2}:?\\d{2}))'

var defaulParseStrs = [d3or4, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, place + d1or3, dzZ]
var defaulParseREs = []

for (var len = defaulParseStrs.length - 1; len >= 0; len--) {
  var rule = ''
  for (var i = 0; i < len + 1; i++) {
    rule += defaulParseStrs[i]
  }
  defaulParseREs.push(new RegExp('^' + rule + '$'))
}

/**
 * 解析默认格式
 */
function parseDefaultRules (str) {
  var matchRest, resMaps = {}
  for (var i = 0, dfrLen = defaulParseREs.length; i < dfrLen; i++) {
    matchRest = str.match(defaulParseREs[i])
    if (matchRest) {
      resMaps.y = matchRest[1]
      resMaps.M = matchRest[2]
      resMaps.d = matchRest[3]
      resMaps.H = matchRest[4]
      resMaps.m = matchRest[5]
      resMaps.s = matchRest[6]
      resMaps.S = matchRest[7]
      resMaps.Z = matchRest[8]
      break
    }
  }
  return resMaps
}

var customParseStrs = [
  ['yyyy', d3or4],
  ['yy', d2],
  ['MM', d2],
  ['M', d1or2],
  ['dd', d2],
  ['d', d1or2],
  ['HH', d2],
  ['H', d1or2],
  ['mm', d2],
  ['m', d1or2],
  ['ss', d2],
  ['s', d1or2],
  ['SSS', getParseRule('3')],
  ['S', d1or3],
  ['Z', dzZ]
]
var parseRuleMaps = {}
var parseRuleKeys = ['\\[([^\\]]+)\\]']

for (var i = 0; i < customParseStrs.length; i++) {
  var itemRule = customParseStrs[i]
  parseRuleMaps[itemRule[0]] = itemRule[1] + '?'
  parseRuleKeys.push(itemRule[0])
}

var customParseRes = new RegExp(parseRuleKeys.join('|'), 'g')
var cacheFormatMaps = {}

/**
 * 解析自定义格式
 */
function parseCustomRules (str, format) {
  var cacheItem = cacheFormatMaps[format]
  if (!cacheItem) {
    var posIndexs = []
    var re = format.replace(/([$(){}*+.?\\^|])/g, "\\$1").replace(customParseRes, function (text, val) {
      var firstChar = text.charAt(0)
      // 如果为转义符号:[关键字]
      if (firstChar === '[') {
        return val
      }
      posIndexs.push(firstChar)
      return parseRuleMaps[text]
    })
    cacheItem = cacheFormatMaps[format] = {
      _i: posIndexs,
      _r: new RegExp(re)
    }
  }
  var resMaps = {}
  var matchRest = str.match(cacheItem._r)
  if (matchRest) {
    var _i = cacheItem._i
    for (var i = 1, len = matchRest.length; i < len; i++) {
      resMaps[_i[i - 1]] = matchRest[i]
    }
    return resMaps
  }
  return resMaps
}

/**
 * 解析时区
 */
function parseTimeZone (resMaps) {
  // 如果为UTC 时间
  if (/^[zZ]/.test(resMaps.Z)) {
    return new Date(helperGetUTCDateTime(resMaps))
  } else {
    // 如果指定时区，时区转换
    var matchRest = resMaps.Z.match(/([-+])(\d{2}):?(\d{2})/)
    if (matchRest) {
      return new Date(helperGetUTCDateTime(resMaps) - (matchRest[1] === '-' ? -1 : 1) * staticParseInt(matchRest[2]) * 3600000 + staticParseInt(matchRest[3]) * 60000)
    }
  }
  return new Date('')
}

/**
  * 字符串转为日期
  *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒、Z时区)
  * @return {Date}
  */
function toStringDate (str, format) {
  if (str) {
    var isDType = isDate(str)
    if (isDType || (!format && /^[0-9]{11,15}$/.test(str))) {
      return new Date(isDType ? helperGetDateTime(str) : staticParseInt(str))
    }
    if (isString(str)) {
      var resMaps = format ? parseCustomRules(str, format) : parseDefaultRules(str)
      if (resMaps.y) {
        if (resMaps.M) {
          resMaps.M = toParseNum(resMaps.M) - 1
        }
        if (resMaps.S) {
          resMaps.S = toParseMs(toParseNum(resMaps.S))
        }
        if (resMaps.Z) {
          return parseTimeZone(resMaps)
        } else {
          return new Date(resMaps.y, resMaps.M || 0, resMaps.d || 1, resMaps.H || 0, resMaps.m || 0, resMaps.s || 0, resMaps.S || 0)
        }
      }
    }
  }
  return new Date('')
}

module.exports = toStringDate
