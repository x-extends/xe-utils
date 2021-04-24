var setupDefaults = require('./setupDefaults')

var staticParseInt = require('./staticParseInt')

var helperGetUTCDateTime = require('./helperGetUTCDateTime')
var helperGetDateTime = require('./helperGetDateTime')

var isString = require('./isString')
var isDate = require('./isDate')

var d2RE = '.{1}(\\d{2})'
var parseREs = ['(\\d{3,4})', d2RE, d2RE, d2RE, d2RE, d2RE, '.{1}(\\d+)', '(([zZ])|([-+]\\d{2}:?\\d{2}))']
var defaultFormatRules = []
for (var len = parseREs.length - 1; len >= 0; len--) {
  var rule = ''
  for (var i = 0; i < len + 1; i++) {
    rule += parseREs[i]
  }
  defaultFormatRules.push(new RegExp('^' + rule + '$'))
}

function parseDefaultRules (str) {
  var fMatchs, rests = []
  for (var dfrIndex = 0, dfrLen = defaultFormatRules.length; dfrIndex < dfrLen; dfrIndex++) {
    fMatchs = str.match(defaultFormatRules[dfrIndex])
    if (fMatchs) {
      var yyyy = fMatchs[1]
      var MM = fMatchs[2]
      var SSS = fMatchs[7]
      if (yyyy) {
        rests[0] = yyyy
      }
      if (MM) {
        rests[1] = staticParseInt(MM) - 1
      }
      rests[2] = fMatchs[3]
      rests[3] = fMatchs[4]
      rests[4] = fMatchs[5]
      rests[5] = fMatchs[6]
      if (SSS) {
        var sLen = SSS.length
        if (sLen === 1) {
          SSS = SSS + '00'
        } else if (sLen === 2) {
          SSS = SSS + '0'
        } else {
          SSS = SSS.substring(0, 3)
        }
        rests[6] = SSS
      }
      rests[7] = fMatchs[8]
      break
    }
  }
  return rests
}

var customFormatRules = [
  { rules: [['yyyy', 4]] },
  { rules: [['MM', 2], ['M', 1]], offset: -1 },
  { rules: [['dd', 2], ['d', 1]] },
  { rules: [['HH', 2], ['H', 1]] },
  { rules: [['mm', 2], ['m', 1]] },
  { rules: [['ss', 2], ['s', 1]] },
  { rules: [['SSS', 3], ['SS', 2], ['S', 1]] },
  { rules: [['ZZ', 5], ['Z', 6], ['Z', 5], ['Z', 1]] }
]

function parseCustomRules (str, format) {
  var arr, sIndex, fIndex, fLen, fItem, rules, rIndex, rLen, tempMatch
  var rests = []
  for (fIndex = 0, fLen = customFormatRules.length; fIndex < fLen; fIndex++) {
    fItem = customFormatRules[fIndex]
    for (rIndex = 0, rules = fItem.rules, rLen = rules.length; rIndex < rLen; rIndex++) {
      arr = rules[rIndex]
      sIndex = format.indexOf(arr[0])
      if (sIndex > -1) {
        tempMatch = str.substring(sIndex, sIndex + arr[1])
        if (tempMatch && tempMatch.length === arr[1]) {
          if (fItem.offset) {
            tempMatch = staticParseInt(tempMatch) + fItem.offset
          }
          rests[fIndex] = tempMatch
          break
        }
      }
      if (rIndex === rLen - 1) {
        return rests
      }
    }
  }
  return rests
}

/**
  * 字符串转为日期
  *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒、Z时区)
  * @return {Date}
  */
function toStringDate (str, format) {
  var rest, isDType
  if (str) {
    isDType = isDate(str)
    if (isDType || (!format && /^[0-9]{11,15}$/.test(str))) {
      rest = new Date(isDType ? helperGetDateTime(str) : staticParseInt(str))
    } else if (isString(str)) {
      var tempMatch
      var rests = format ? parseCustomRules(str, format) : parseDefaultRules(str)
      var zStr = rests[7]
      if (rests[0]) {
        // 解析时区
        if (zStr) {
          // 如果为UTC 时间
          if (zStr[0] === 'z' || zStr[0] === 'Z') {
            rest = new Date(helperGetUTCDateTime(rests))
          } else {
            // 如果指定时区，时区转换
            tempMatch = zStr.match(/([-+])(\d{2}):?(\d{2})/)
            if (tempMatch) {
              rest = new Date(helperGetUTCDateTime(rests) - (tempMatch[1] === '-' ? -1 : 1) * staticParseInt(tempMatch[2]) * 3600000 + staticParseInt(tempMatch[3]) * 60000)
            }
          }
        } else {
          rest = new Date(rests[0] || 0, rests[1] || 0, rests[2] || 1, rests[3] || 0, rests[4] || 0, rests[5] || 0, rests[6] || 0)
        }
      }
    }
  }
  return rest ? rest : new Date('')
}

module.exports = toStringDate
