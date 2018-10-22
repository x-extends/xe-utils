'use strict'

var setupDefaults = require('../core/setup')
var baseExports = require('./base')

var DAY_TIME = 86400000
var WEEK_TIME = DAY_TIME * 7
var STRING_FIRST = 'first'
var STRING_LAST = 'last'

/**
 * 返回时间戳
 *
 * @returns Number
 */
var timestamp = Date.now || function () {
  return _dateTime(new Date())
}

var dateFormatRules = [
  {rules: [['yyyy', 4], ['yy', 2]]},
  {rules: [['MM', 2], ['M', 1]], offset: -1},
  {rules: [['dd', 2], ['d', 1]]},
  {rules: [['HH', 2], ['H', 1]]},
  {rules: [['mm', 2], ['m', 1]]},
  {rules: [['ss', 2], ['s', 1]]},
  {rules: [['SSS', 3], ['SS', 2], ['S', 1]]}
]

function _dateTime (date) {
  return date.getTime()
}

function _dateFullYear (date) {
  return date.getFullYear()
}

function _dateMonth (date) {
  return date.getMonth()
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
    return dateToString(date1, format) === dateToString(date2, format)
  }
  return false
}

/**
  * 字符串转为日期
  *
  * @param {String} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒)
  * @return {String}
  */
function stringToDate (str, format) {
  if (str) {
    var isDate = baseExports.isDate(str)
    if (isDate || /^[0-9]{11,13}$/.test(str)) {
      return new Date(isDate ? _dateTime(str) : str)
    }
    if (baseExports.isString(str)) {
      format = format || setupDefaults.formatDate
      var dates = []
      baseExports.each(dateFormatRules, function (item) {
        for (var arr, sIndex, index = 0, rules = item.rules, len = rules.length; index < len; index++) {
          arr = rules[index]
          sIndex = format.indexOf(arr[0])
          if (sIndex > -1) {
            dates.push(parseFloat(str.substring(sIndex, sIndex + arr[1]) || 0) + (item.offset || 0))
            break
          } else if (index === len - 1) {
            dates.push(0)
          }
        }
      })
      return new Date(dates[0], dates[1], dates[2], dates[3], dates[4], dates[5], dates[6])
    }
  }
  return 'Invalid Date'
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
  * @param {String} format 输出日期格式(年份(yy|yyyy)、月份(M|MM自动补0)、天(d|dd自动补0)、12小时制(h|hh自动补0)、24小时制(H|HH自动补0)、分钟(m|mm自动补0)、秒(s|ss自动补0)、毫秒(S|SSS自动补0)、D当年的第几天、a/A上午下午、e/E星期几、w当年的第几周、W当月的第几周、q当年第几个季度、z时区、Z时区值)
  * @param {Object} options {formats: {q: ['日', '一', '二', '三', '四', '五', '六'], E: function (value, match, date) {return '三'}, }} 自定义格式化模板
  * @return {String}
  */
function dateToString (date, format, options) {
  if (date) {
    date = stringToDate(date)
    if (baseExports.isDate(date)) {
      var empty = ''
      var result = format || setupDefaults.formatString
      var hours = date.getHours()
      var apm = hours < 12 ? 'am' : 'pm'
      var zoneHours = date.getTimezoneOffset() / 60 * -1
      var formats = baseExports.assign({}, setupDefaults.formatStringMatchs, options && options.formats ? options.formats : null)
      var timeRules = [
        [/y{2,4}/g, empty, function (match) { return (empty + _dateFullYear(date)).substr(4 - match.length) }],
        [/M{1,2}/g, _dateMonth(date) + 1],
        [/d{1,2}/g, date.getDate()],
        [/H{1,2}/g, hours],
        [/h{1,2}/g, hours <= 12 ? hours : hours - 12],
        [/m{1,2}/g, date.getMinutes()],
        [/s{1,2}/g, date.getSeconds()],
        [/S{1,3}/g, date.getMilliseconds()],
        [/a/g, empty, function (match) { return handleCustomTemplate(date, formats, match, apm) }],
        [/A/g, empty, function (match) { return handleCustomTemplate(date, formats, match, apm.toLocaleUpperCase()) }],
        [/z/g, empty, function (match) { return handleCustomTemplate(date, formats, match, 'GMT') }],
        [/e/g, empty, function (match) { return handleCustomTemplate(date, formats, match, date.getDay() - 1) }],
        [/E/g, empty, function (match) { return handleCustomTemplate(date, formats, match, date.getDay()) }],
        [/q/g, empty, function (match) { return handleCustomTemplate(date, formats, match, Math.floor((_dateMonth(date) + 3) / 3)) }],
        [/Z/g, empty, function (match) { return handleCustomTemplate(date, formats, match, (zoneHours >= 0 ? '+' : '-') + formatPadStart(zoneHours, 2, 0) + '00') }],
        [/W/g, empty, function (match) { return handleCustomTemplate(date, formats, match, getMonthWeek(date)) }],
        [/w/g, empty, function (match) { return handleCustomTemplate(date, formats, match, getYearWeek(date)) }],
        [/D/g, empty, function (match) { return handleCustomTemplate(date, formats, match, getYearDay(date)) }]
      ]
      for (var index = 0; index < timeRules.length; index++) {
        var item = timeRules[index]
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
  var currentDate = stringToDate(date)
  if (year) {
    var number = year && !isNaN(year) ? year : 0
    currentDate.setFullYear(_dateFullYear(currentDate) + number)
  }
  if (month || !isNaN(month)) {
    if (month === STRING_FIRST) {
      return new Date(_dateFullYear(currentDate), 0, 1)
    } else if (month === STRING_LAST) {
      currentDate.setMonth(11)
      return getWhatMonth(currentDate, 0, STRING_LAST)
    } else {
      currentDate.setMonth(month)
    }
  }
  return currentDate
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
  var currentDate = stringToDate(date)
  var monthOffset = month && !isNaN(month) ? month : 0
  if (day || !isNaN(day)) {
    if (day === STRING_FIRST) {
      return new Date(_dateFullYear(currentDate), _dateMonth(currentDate) + monthOffset, 1)
    } else if (day === STRING_LAST) {
      return new Date(_dateTime(getWhatMonth(currentDate, monthOffset + 1, STRING_FIRST)) - 1)
    } else {
      currentDate.setDate(day)
    }
  }
  if (monthOffset) {
    currentDate.setMonth(_dateMonth(currentDate) + monthOffset)
  }
  return currentDate
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
  var currentDate = stringToDate(date)
  var customDay = Number(/^[0-7]$/.test(day) ? day : currentDate.getDay())
  var currentDay = currentDate.getDay()
  var time = _dateTime(currentDate)
  var whatDayTime = time + ((customDay === 0 ? 7 : customDay) - (currentDay === 0 ? 7 : currentDay)) * DAY_TIME
  if (week && !isNaN(week)) {
    whatDayTime += week * WEEK_TIME
  }
  return new Date(whatDayTime)
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
  var currentDate = stringToDate(date)
  if (!isNaN(day)) {
    currentDate.setDate(currentDate.getDate() + Number(day))
    if (mode === STRING_FIRST) {
      return new Date(_dateFullYear(currentDate), _dateMonth(currentDate), currentDate.getDate())
    } else if (mode === STRING_LAST) {
      return new Date(_dateTime(getWhatDay(currentDate, 1, STRING_FIRST)) - 1)
    }
  }
  return currentDate
}

function calculateTime (startDate, endDate, timeGap) {
  return Math.floor((_dateTime(new Date(_dateFullYear(endDate), _dateMonth(endDate), endDate.getDate())) - _dateTime(new Date(_dateFullYear(startDate), _dateMonth(startDate), startDate.getDate()))) / timeGap) + 1
}

/**
  * 返回某个月的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getMonthWeek (date) {
  if (date) {
    var currentDate = stringToDate(date)
    var monthFirst = getWhatMonth(date, 0, STRING_FIRST)
    var monthFirstWeek = getWhatWeek(monthFirst, 0, 1)
    if (monthFirstWeek < monthFirst) {
      monthFirstWeek = getWhatWeek(monthFirst, 1, 1)
    }
    if (currentDate >= monthFirstWeek) {
      return calculateTime(monthFirstWeek, currentDate, WEEK_TIME)
    }
  }
  return 0
}

/**
  * 返回某个年份的第几天
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearDay (date) {
  if (date) {
    return calculateTime(getWhatYear(date, 0, STRING_FIRST), stringToDate(date), DAY_TIME)
  }
  return 0
}

/**
  * 返回某个年份的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearWeek (date) {
  if (date) {
    var currentDate = stringToDate(date)
    var yearFirst = getWhatYear(date, 0, STRING_FIRST)
    var yearFirstWeek = getWhatWeek(yearFirst, 0, 1)
    if (yearFirstWeek < yearFirst) {
      yearFirstWeek = getWhatWeek(yearFirst, 1, 1)
    }
    if (currentDate >= yearFirstWeek) {
      return calculateTime(yearFirstWeek, currentDate, WEEK_TIME)
    }
  }
  return 0
}

/**
  * 返回某个年份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} year 年(默认当年)、前几个年、后几个年
  * @return {Number}
  */
function getDayOfYear (date, year) {
  if (date) {
    return baseExports.isLeapYear(getWhatYear(date, year)) ? 366 : 365
  }
  return 0
}

/**
  * 返回某个月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当月)、前几个月、后几个月
  * @return {Number}
  */
function getDayOfMonth (date, month) {
  if (date) {
    return Math.floor((_dateTime(getWhatMonth(date, month, STRING_LAST)) - _dateTime(getWhatMonth(date, month, STRING_FIRST))) / DAY_TIME) + 1
  }
  return 0
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
  var result = {done: false, time: 0}
  var startTime = _dateTime(stringToDate(startDate))
  var endTime = _dateTime(endDate ? stringToDate(endDate) : new Date())
  if (startTime < endTime) {
    var item
    var diffTime = result.time = endTime - startTime
    var rule = rules && rules.length > 0 ? rules : setupDefaults.dateDiffRules
    var len = rule.length
    result.done = true
    for (var index = 0; index < len; index++) {
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
  return result
}

var dateExports = {
  timestamp: timestamp,
  now: timestamp,
  isDateSame: isDateSame,
  stringToDate: stringToDate,
  dateToString: dateToString,
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
