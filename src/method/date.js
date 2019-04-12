'use strict'

var setupDefaults = require('../core/setup')
var baseExports = require('./base')

var DAY_TIME = 86400000
var WEEK_TIME = DAY_TIME * 7
var STRING_FIRST = 'first'
var STRING_LAST = 'last'

/**
 * 返回当前时间戳
 *
 * @returns Number
 */
var now = Date.now || function () {
  return getDateTime(new Date())
}

/**
 * 将日期格式化为时间戳
 *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式
 * @returns Number
 */
var timestamp = function (str, format) {
  if (arguments.length) {
    var date = toStringDate(str, format)
    return baseExports.isDate(date) ? getDateTime(date) : date
  }
  return now()
}

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

function getDateTime (date) {
  return date.getTime()
}

function _utcDateTime (dates) {
  return Date.UTC(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6])
}

function _dateFullYear (date) {
  return date.getFullYear()
}

function _dateMonth (date) {
  return date.getMonth()
}

function getYMD (date) {
  return new Date(_dateFullYear(date), _dateMonth(date), date.getDate())
}

function getYMDTime (date) {
  return getDateTime(getYMD(date))
}

/**
 * 比较两个日期
 *
 * @param {Number/String/Date} date1 日期
 * @param {Number/String/Date} date2 日期
 * @param {String} format 格式化
 */
function isDateSame (date1, date2, format) {
  if (date1 && date2) {
    return toDateString(date1, format) === toDateString(date2, format)
  }
  return false
}

/**
  * 字符串转为日期
  *
  * @param {String/Number/Date} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒、Z时区)
  * @return {String}
  */
function toStringDate (str, format) {
  var arr, sIndex, index, rules, len, rest, isDate, tempMatch, zStr
  var dates = []
  if (str) {
    isDate = baseExports.isDate(str)
    if (isDate || /^[0-9]{11,13}$/.test(str)) {
      rest = new Date(isDate ? getDateTime(str) : Number(str))
    } else if (baseExports.isString(str)) {
      format = format || setupDefaults.formatDate
      baseExports.each(dateFormatRules, function (item) {
        for (index = 0, rules = item.rules, len = rules.length; index < len; index++) {
          arr = rules[index]
          sIndex = format.indexOf(arr[0])
          if (sIndex > -1) {
            tempMatch = str.substring(sIndex, sIndex + arr[1]) || 0
            if (item.offset) {
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
          rest = new Date(_utcDateTime(dates))
        } else {
          // 如果指定时区，时区转换
          tempMatch = zStr.match(/([-+]{1})(\d{2}):?(\d{2})/)
          if (tempMatch) {
            rest = new Date(_utcDateTime(dates) - (tempMatch[1] === '-' ? -1 : 1) * parseInt(tempMatch[2]) * 3600000 + parseInt(tempMatch[3]) * 60000)
          }
        }
      } else {
        rest = new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6])
      }
    }
  }
  return !rest || isNaN(getDateTime(rest)) ? 'Invalid Date' : rest
}

function handleCustomTemplate (date, formats, match, value) {
  var format = formats[match]
  if (format) {
    if (baseExports.isFunction(format)) {
      return format(value, match, date)
    } else {
      return format[value]
    }
  }
  return value
}

function formatPadStart (str, len, padStr) {
  str = '' + str
  var index = str.length
  while (index < len) {
    str = padStr + str
    index++
  }
  return str
}

/**
  * 日期格式化为字符串
  *
  * @param {Date} date 日期或数字
  * @param {String} format 输出日期格式(年份(yy|yyyy)、月份(M|MM自动补0)、天(d|dd自动补0)、12小时制(h|hh自动补0)、24小时制(H|HH自动补0)、分钟(m|mm自动补0)、秒(s|ss自动补0)、毫秒(S|SSS自动补0)、D当年的第几天、a/A上午下午、e/E星期几、w当年的第几周、W当月的第几周、q当年第几个季度、Z时区)
  * @param {Object} options {formats: {q: ['日', '一', '二', '三', '四', '五', '六'], E: function (value, match, date) {return '三'}, }} 自定义格式化模板
  * @return {String}
  */
function toDateString (date, format, options) {
  if (date) {
    date = toStringDate(date)
    if (baseExports.isDate(date)) {
      var result = format || setupDefaults.formatString
      var hours = date.getHours()
      var apm = hours < 12 ? 'am' : 'pm'
      var zoneHours = date.getTimezoneOffset() / 60 * -1
      var formats = baseExports.assign({}, setupDefaults.formatStringMatchs, options ? options.formats : null)
      var timeRules = [
        [/y{2,4}/g, '', function (match) { return ('' + _dateFullYear(date)).substr(4 - match.length) }],
        [/M{1,2}/g, _dateMonth(date) + 1],
        [/d{1,2}/g, date.getDate()],
        [/H{1,2}/g, hours],
        [/h{1,2}/g, hours <= 12 ? hours : hours - 12],
        [/m{1,2}/g, date.getMinutes()],
        [/s{1,2}/g, date.getSeconds()],
        [/S{1,3}/g, date.getMilliseconds()],
        [/a/g, '', function (match) { return handleCustomTemplate(date, formats, match, apm) }],
        [/A/g, '', function (match) { return handleCustomTemplate(date, formats, match, apm.toLocaleUpperCase()) }],
        [/e/g, '', function (match) { return handleCustomTemplate(date, formats, match, date.getDay() - 1) }],
        [/E/g, '', function (match) { return handleCustomTemplate(date, formats, match, date.getDay()) }],
        [/q/g, '', function (match) { return handleCustomTemplate(date, formats, match, Math.floor((_dateMonth(date) + 3) / 3)) }],
        [/Z{1,2}/g, '', function (match) { return handleCustomTemplate(date, formats, match, (zoneHours >= 0 ? '+' : '-') + formatPadStart(zoneHours, 2, '0') + (match.length === 1 ? ':' : '') + '00') }],
        [/W{1,2}/g, '', function (match) { return formatPadStart(handleCustomTemplate(date, formats, match, getYearWeek(date)), match.length, '0') }],
        [/D{1,3}/g, '', function (match) { return formatPadStart(handleCustomTemplate(date, formats, match, getYearDay(date)), match.length, '0') }]
      ]
      var item
      var index = 0
      var len = timeRules.length
      for (; index < len; index++) {
        item = timeRules[index]
        result = result.replace(item[0], item[2] || function (match) {
          return formatPadStart(item[1], match.length, '0')
        })
      }
      return result
    }
    return date
  }
  return ''
}

/**
  * 返回前几年或后几年的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} year 年(默认当前年)、前几个年(数值)、后几个年(数值)
  * @param {Number/String} month 获取哪月(null默认当前年)、年初(first)、年末(last)、指定月份（0-11）
  * @return {Date}
  */
function getWhatYear (date, year, month) {
  var number
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    if (year) {
      number = year && !isNaN(year) ? year : 0
      date.setFullYear(_dateFullYear(date) + number)
    }
    if (month || !isNaN(month)) {
      if (month === STRING_FIRST) {
        return new Date(_dateFullYear(date), 0, 1)
      } else if (month === STRING_LAST) {
        date.setMonth(11)
        return getWhatMonth(date, 0, STRING_LAST)
      } else {
        date.setMonth(month)
      }
    }
  }
  return date
}

/**
  * 返回前几月或后几月的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当前月)、前几个月、后几个月
  * @param {Number/String} day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
  * @return {Date}
  */
function getWhatMonth (date, month, day) {
  var monthOffset = month && !isNaN(month) ? month : 0
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    if (day || !isNaN(day)) {
      if (day === STRING_FIRST) {
        return new Date(_dateFullYear(date), _dateMonth(date) + monthOffset, 1)
      } else if (day === STRING_LAST) {
        return new Date(getDateTime(getWhatMonth(date, monthOffset + 1, STRING_FIRST)) - 1)
      } else {
        date.setDate(day)
      }
    }
    if (monthOffset) {
      date.setMonth(_dateMonth(date) + monthOffset)
    }
  }
  return date
}

/**
  * 返回前几周或后几周的星期几
  *
  * @param {Date} date 日期
  * @param {Number} week 周(默认当前周)、前几周、后几周
  * @param {Number} day 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
  * @return {Date}
  */
function getWhatWeek (date, week, day) {
  var time, whatDayTime, currentDay, customDay
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    customDay = Number(/^[0-7]$/.test(day) ? day : date.getDay())
    currentDay = date.getDay()
    time = getDateTime(date)
    whatDayTime = time + ((customDay === 0 ? 7 : customDay) - (currentDay === 0 ? 7 : currentDay)) * DAY_TIME
    if (week && !isNaN(week)) {
      whatDayTime += week * WEEK_TIME
    }
    return new Date(whatDayTime)
  }
  return date
}

/**
  * 返回前几天或后几天的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} day 天(默认当天)、前几天、后几天
  * @param {String} mode 获取时分秒(null默认当前时分秒)、日初(first)、日末(last)
  * @return {Date}
  */
function getWhatDay (date, day, mode) {
  date = toStringDate(date)
  if (baseExports.isDate(date) && !isNaN(day)) {
    date.setDate(date.getDate() + Number(day))
    if (mode === STRING_FIRST) {
      return new Date(_dateFullYear(date), _dateMonth(date), date.getDate())
    } else if (mode === STRING_LAST) {
      return new Date(getDateTime(getWhatDay(date, 1, STRING_FIRST)) - 1)
    }
  }
  return date
}

/**
  * 返回某个月的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getMonthWeek (date) {
  var monthFirst, monthFirstWeek
  var currentDate = toStringDate(date)
  if (baseExports.isDate(currentDate)) {
    monthFirst = getWhatMonth(currentDate, 0, STRING_FIRST)
    monthFirstWeek = getWhatWeek(monthFirst, 0, 1)
    if (monthFirstWeek < monthFirst) {
      monthFirstWeek = getWhatWeek(monthFirst, 1, 1)
    }
    if (currentDate >= monthFirstWeek) {
      return Math.floor((getYMDTime(currentDate) - getYMDTime(monthFirstWeek)) / WEEK_TIME) + 1
    }
    return getMonthWeek(getWhatWeek(currentDate, 0, 1))
  }
  return currentDate
}

/**
  * 返回某个年份的第几天
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearDay (date) {
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    return Math.floor((getYMDTime(date) - getYMDTime(getWhatYear(date, 0, STRING_FIRST))) / DAY_TIME) + 1
  }
  return date
}

/**
  * 返回某个年份的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearWeek (date) {
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
    var week = new Date(date.getFullYear(), 0, 4)
    return Math.round(((date.getTime() - week.getTime()) / DAY_TIME + (week.getDay() + 6) % 7 - 3) / 7) + 1
  }
  return date
}

/**
  * 返回某个年份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} year 年(默认当年)、前几个年、后几个年
  * @return {Number}
  */
function getDayOfYear (date, year) {
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    return baseExports.isLeapYear(getWhatYear(date, year)) ? 366 : 365
  }
  return date
}

/**
  * 返回某个月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当月)、前几个月、后几个月
  * @return {Number}
  */
function getDayOfMonth (date, month) {
  date = toStringDate(date)
  if (baseExports.isDate(date)) {
    return Math.floor((getDateTime(getWhatMonth(date, month, STRING_LAST)) - getDateTime(getWhatMonth(date, month, STRING_FIRST))) / DAY_TIME) + 1
  }
  return date
}

/**
  * 返回两个日期之间差距,如果结束日期小于开始日期done为fasle
  *
  * @param {Date} startDate 开始日期
  * @param {Date} endDate 结束日期或当期日期
  * @param {Date} rule 自定义计算规则
  * @return {Object}
  */
function getDateDiff (startDate, endDate, rules) {
  var startTime, endTime, item, diffTime, rule, len, index
  var result = { done: false, time: 0 }
  startDate = toStringDate(startDate)
  endDate = endDate ? toStringDate(endDate) : new Date()
  if (baseExports.isDate(startDate) && baseExports.isDate(endDate)) {
    startTime = getDateTime(startDate)
    endTime = getDateTime(endDate)
    if (startTime < endTime) {
      diffTime = result.time = endTime - startTime
      rule = rules && rules.length > 0 ? rules : setupDefaults.dateDiffRules
      result.done = true
      for (index = 0, len = rule.length; index < len; index++) {
        item = rule[index]
        if (diffTime >= item[1]) {
          if (index === len - 1) {
            result[item[0]] = diffTime || 0
          } else {
            result[item[0]] = Math.floor(diffTime / item[1])
            diffTime -= result[item[0]] * item[1]
          }
        } else {
          result[item[0]] = 0
        }
      }
    }
  }
  return result
}

var dateExports = {
  now: now,
  timestamp: timestamp,
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
  getDateDiff: getDateDiff
}

module.exports = dateExports
