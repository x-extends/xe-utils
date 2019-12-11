var setupDefaults = require('../setupDefaults')

var staticParseInt = require('../static/staticParseInt')

var helperGetUTCDateTime = require('./helperGetUTCDateTime')
var helperGetDateTime = require('./helperGetDateTime')

var arrayEach = require('../array/arrayEach')

var isString = require('../base/isString')
var isDate = require('../base/isDate')

var dateFormatRules = [
  { rules: [['yyyy', 4], ['yy', 2]] },
  { rules: [['MM', 2], ['M', 1]], offset: -1 },
  { rules: [['dd', 2], ['d', 1]] },
  { rules: [['HH', 2], ['H', 1]] },
  { rules: [['mm', 2], ['m', 1]] },
  { rules: [['ss', 2], ['s', 1]] },
  { rules: [['SSS', 3], ['SS', 2], ['S', 1]] },
  { rules: [['ZZ', 5], ['Z', 6]] }
]

/**
  * 字符串转为日期
  *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒、Z时区)
  * @return {String}
  */
function toStringDate (str, format) {
  var arr, sIndex, index, rules, len, rest, isDateType, tempMatch, zStr
  var dates = []
  if (str) {
    isDateType = isDate(str)
    if (isDateType || (!format && /^[0-9]{11,15}$/.test(str))) {
      rest = new Date(isDateType ? helperGetDateTime(str) : staticParseInt(str))
    } else if (isString(str)) {
      format = format || setupDefaults.formatDate
      arrayEach(dateFormatRules, function (item) {
        for (index = 0, rules = item.rules, len = rules.length; index < len; index++) {
          arr = rules[index]
          sIndex = format.indexOf(arr[0])
          if (sIndex > -1) {
            tempMatch = str.substring(sIndex, sIndex + arr[1]) || 0
            if (tempMatch && item.offset) {
              tempMatch = parseFloat(tempMatch) + item.offset
            }
            dates.push(tempMatch)
            break
          } else if (index === len - 1) {
            dates.push(0)
          }
        }
      })
      zStr = dates[7]
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
        rest = new Date(dates[0], dates[1], dates[2] || 1, dates[3], dates[4], dates[5], dates[6])
      }
    }
  }
  return !rest || isNaN(helperGetDateTime(rest)) ? 'Invalid Date' : rest
}

module.exports = toStringDate
