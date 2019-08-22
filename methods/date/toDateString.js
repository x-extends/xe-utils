var setupDefaults = require('../setupDefaults')

var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateMonth = require('./helperGetDateMonth')

var toStringDate = require('./toStringDate')
var getYearWeek = require('./getYearWeek')
var getYearDay = require('./getYearDay')

var assign = require('../object/assign')

var isDate = require('../base/isDate')
var isFunction = require('../base/isFunction')

function handleCustomTemplate (date, formats, match, value) {
  var format = formats[match]
  if (format) {
    if (isFunction(format)) {
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

function formatDayE (day) {
  return day === 0 ? 7 : day
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
    if (isDate(date)) {
      var result = format || setupDefaults.formatString
      var hours = date.getHours()
      var apm = hours < 12 ? 'am' : 'pm'
      var zoneHours = date.getTimezoneOffset() / 60 * -1
      var formats = assign({}, setupDefaults.formatStringMatchs, options ? options.formats : null)
      var timeRules = [
        [/y{2,4}/g, '', function (match) { return ('' + helperGetDateFullYear(date)).substr(4 - match.length) }],
        [/M{1,2}/g, helperGetDateMonth(date) + 1],
        [/d{1,2}/g, date.getDate()],
        [/H{1,2}/g, hours],
        [/h{1,2}/g, hours <= 12 ? hours : hours - 12],
        [/m{1,2}/g, date.getMinutes()],
        [/s{1,2}/g, date.getSeconds()],
        [/S{1,3}/g, date.getMilliseconds()],
        [/a/g, '', function (match) { return handleCustomTemplate(date, formats, match, apm) }],
        [/A/g, '', function (match) { return handleCustomTemplate(date, formats, match, apm.toLocaleUpperCase()) }],
        [/e/g, '', function (match) { return handleCustomTemplate(date, formats, match, date.getDay()) }],
        [/E/g, '', function (match) { return handleCustomTemplate(date, formats, match, formatDayE(date.getDay())) }],
        [/q/g, '', function (match) { return handleCustomTemplate(date, formats, match, Math.floor((helperGetDateMonth(date) + 3) / 3)) }],
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

module.exports = toDateString
