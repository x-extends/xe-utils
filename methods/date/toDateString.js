var setupDefaults = require('../setupDefaults')

var helperGetDateFullYear = require('./helperGetDateFullYear')
var helperGetDateMonth = require('./helperGetDateMonth')

var toStringDate = require('./toStringDate')
var getYearWeek = require('./getYearWeek')
var getYearDay = require('./getYearDay')

var assign = require('../object/assign')

var isValidDate = require('./isValidDate')
var isFunction = require('../base/isFunction')

var padStart = require('../string/padStart')

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

function formatDayE (day) {
  return day === 0 ? 7 : day
}

/**
  * 日期格式化为字符串，转义符号 []
  *
  * @param {Date} date 日期或数字
  * @param {String} format 输出日期格式(年份(yy|yyyy)、月份(M|MM自动补0)、天(d|dd自动补0)、12小时制(h|hh自动补0)、24小时制(H|HH自动补0)、分钟(m|mm自动补0)、秒(s|ss自动补0)、毫秒(S|SSS自动补0)、D当年的第几天、a/A上午下午、e/E星期几、w当年的第几周、W当月的第几周、q当年第几个季度、Z时区)
  * @param {Object} options {formats: {q: ['日', '一', '二', '三', '四', '五', '六'], E: function (value, match, date) {return '三'}, }} 自定义格式化模板
  * @return {String}
  */
 var dateFormatRE = /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g
 function toDateString (date, format, options) {
   if (date) {
     date = toStringDate(date)
     if (isValidDate(date)) {
       var result = format || setupDefaults.formatString
       var hours = date.getHours()
       var apm = hours < 12 ? 'am' : 'pm'
       var formats = assign({}, setupDefaults.formatStringMatchs, options ? options.formats : null)
       var fy = function (match, length) {
         return ('' + helperGetDateFullYear(date)).substr(4 - length)
       }
       var fM = function (match, length) {
         return padStart(helperGetDateMonth(date) + 1, length, '0')
       }
       var fd = function (match, length) {
         return padStart(date.getDate(), length, '0')
       }
       var fH = function (match, length) {
         return padStart(hours, length, '0')
       }
       var fh = function (match, length) {
         return padStart(hours <= 12 ? hours : hours - 12, length, '0')
       }
       var fm = function (match, length) {
         return padStart(date.getMinutes(), length, '0')
       }
       var fs = function (match, length) {
         return padStart(date.getSeconds(), length, '0')
       }
       var fS = function (match, length) {
         return padStart(date.getMilliseconds(), length, '0')
       }
       var fZ = function (match, length) {
         var zoneHours = date.getTimezoneOffset() / 60 * -1
         return handleCustomTemplate(date, formats, match, (zoneHours >= 0 ? '+' : '-') + padStart(zoneHours, 2, '0') + (length === 1 ? ':' : '') + '00')
       }
       var fW = function (match, length) {
         return padStart(handleCustomTemplate(date, formats, match, getYearWeek(date)), length, '0')
       }
       var fD = function (match, length) {
         return padStart(handleCustomTemplate(date, formats, match, getYearDay(date)), length, '0')
       }
       var parseDates = {
         yyyy: fy,
         yy: fy,
         MM: fM,
         M: fM,
         dd: fd,
         d: fd,
         HH: fH,
         H: fH,
         hh: fh,
         h: fh,
         mm: fm,
         m: fm,
         ss: fs,
         s: fs,
         SSS: fS,
         S: fS,
         ZZ: fZ,
         Z: fZ,
         WW: fW,
         W: fW,
         DDD: fD,
         D: fD,
         a: function (match) {
           return handleCustomTemplate(date, formats, match, apm)
         },
         A: function (match) {
           return handleCustomTemplate(date, formats, match, apm.toLocaleUpperCase())
         },
         e: function (match) {
           return handleCustomTemplate(date, formats, match, date.getDay())
         },
         E: function (match) {
           return handleCustomTemplate(date, formats, match, formatDayE(date.getDay()))
         },
         q: function (match) {
           return handleCustomTemplate(date, formats, match, Math.floor((helperGetDateMonth(date) + 3) / 3))
         }
       }
       return result.replace(dateFormatRE, function (match, skip) {
         return skip || (parseDates[match] ? parseDates[match](match, match.length) : match)
       })
     }
     return 'Invalid Date'
   }
   return ''
 }

module.exports = toDateString
