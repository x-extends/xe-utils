var setupDefaults = require('../setupDefaults')

var staticParseInt = require('../static/staticParseInt')

var helperGetUTCDateTime = require('./helperGetUTCDateTime')
var helperGetDateTime = require('./helperGetDateTime')

var isString = require('../base/isString')
var isDate = require('../base/isDate')

var dateFormatRules = [
  { rules: [['yyyy', 4]] },
  { rules: [['MM', 2], ['M', 1]], offset: -1 },
  { rules: [['dd', 2], ['d', 1]] },
  { rules: [['HH', 2], ['H', 1]] },
  { rules: [['mm', 2], ['m', 1]] },
  { rules: [['ss', 2], ['s', 1]] },
  { rules: [['SSS', 3], ['S', 1]] },
  { rules: [['ZZ', 5], ['Z', 6], ['Z', 5], ['Z', 1]] }
]

function parseStringDate (str, format) {
  var arr, sIndex, fIndex, fLen, fItem, rules, rIndex, rLen, tempMatch
  var dates = [0, 0, 1, 0, 0, 0, 0]
  for (fIndex = 0, fLen = dateFormatRules.length; fIndex < fLen; fIndex++) {
    fItem = dateFormatRules[fIndex]
    for (rIndex = 0, rules = fItem.rules, rLen = rules.length; rIndex < rLen; rIndex++) {
      arr = rules[rIndex]
      sIndex = format.indexOf(arr[0])
      if (sIndex > -1) {
        tempMatch = str.substring(sIndex, sIndex + arr[1])
        if (tempMatch && tempMatch.length === arr[1]) {
          if (fItem.offset) {
            tempMatch = staticParseInt(tempMatch) + fItem.offset
          }
          dates[fIndex] = tempMatch
          break
        }
      }
      if (rIndex === rLen - 1) {
        return dates
      }
    }
  }
  return dates
}

/**
  * 字符串转为日期
  *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒、Z时区)
  * @return {String}
  */
 function toStringDate (str, format) {
  var rest, isDType
  if (str) {
    isDType = isDate(str)
    if (isDType || (!format && /^[0-9]{11,15}$/.test(str))) {
      rest = new Date(isDType ? helperGetDateTime(str) : staticParseInt(str))
    } else if (isString(str)) {
      var tempMatch
      var dates = parseStringDate(str, format || setupDefaults.formatDate)
      var zStr = dates[7]
      if (dates[0]) {
        // 解析时区
        if (zStr) {
          // 如果为UTC 时间
          if (zStr[0] === 'z' || zStr[0] === 'Z') {
            rest = new Date(helperGetUTCDateTime(dates))
          } else {
            // 如果指定时区，时区转换
            tempMatch = zStr.match(/([-+]{1})(\d{2}):?(\d{2})/)
            if (tempMatch) {
              rest = new Date(helperGetUTCDateTime(dates) - (tempMatch[1] === '-' ? -1 : 1) * staticParseInt(tempMatch[2]) * 3600000 + staticParseInt(tempMatch[3]) * 60000)
            }
          }
        } else {
          rest = new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6])
        }
      }
    }
  }
  return rest ? rest : new Date('')
}

module.exports = toStringDate
