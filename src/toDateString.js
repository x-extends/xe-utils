var setupDefaults = require('./setupDefaults')

var staticInvalidDate = require('./staticInvalidDate')

var helperStringUpperCase = require('./helperStringUpperCase')
var helperDateGetFullYear = require('./helperDateGetFullYear')
var helperDateGetMonth = require('./helperDateGetMonth')
var helperDateGetDate = require('./helperDateGetDate')
var helperStringSubstring = require('./helperStringSubstring')
var helperDateGetMinutes = require('./helperDateGetMinutes')
var helperDateGetSeconds = require('./helperDateGetSeconds')
var helperStringReplace = require('./helperStringReplace')
var helperMathFloor = require('./helperMathFloor')
var helperMathAbs = require('./helperMathAbs')

var toStringDate = require('./toStringDate')
var getYearWeek = require('./getYearWeek')
var getYearDay = require('./getYearDay')

var assign = require('./assign')

var isValidDate = require('./isValidDate')
var isFunction = require('./isFunction')
var eqNull = require('./eqNull')

var padStart = require('./padStart')

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

var dateFormatRE = /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g

/**
  * 日期格式化为字符串，转义符号 []
  *
  * @param {Date} date 日期或数字
  * @param {String} format 输出日期格式(年份(yy|yyyy)、月份(M|MM自动补0)、天(d|dd自动补0)、12小时制(h|hh自动补0)、24小时制(H|HH自动补0)、分钟(m|mm自动补0)、秒(s|ss自动补0)、毫秒(S|SSS自动补0)、D当年的第几天、a/A上午下午、e/E星期几、w当年的第几周、W当月的第几周、q当年第几个季度、Z时区)
  * @param {Object} options {formats: {q: ['日', '一', '二', '三', '四', '五', '六'], E: function (value, match, date) {return '三'}, }} 自定义格式化模板
  * @return {String}
  */
function toDateString (date, format, options) {
  if (date) {
    date = toStringDate(date)
    if (isValidDate(date)) {
      var opts = options || {}
      var result = format || setupDefaults.parseDateFormat || setupDefaults.formatString
      var hours = date.getHours()
      var apm = hours < 12 ? 'am' : 'pm'
      var baseFormats = setupDefaults.parseDateRules || setupDefaults.formatStringMatchs
      var formats = opts.formats ? assign({}, baseFormats, opts.formats) : (baseFormats || {})
      var firstDay = eqNull(opts.firstDay) ? setupDefaults.firstDayOfWeek : opts.firstDay
      var fy = function (match, length) {
        return helperStringSubstring('' + helperDateGetFullYear(date), 4 - length)
      }
      var fM = function (match, length) {
        return padStart(helperDateGetMonth(date) + 1, length, '0')
      }
      var fd = function (match, length) {
        return padStart(helperDateGetDate(date), length, '0')
      }
      var fH = function (match, length) {
        return padStart(hours, length, '0')
      }
      var fh = function (match, length) {
        return padStart(hours % 12 || 12, length, '0')
      }
      var fm = function (match, length) {
        return padStart(helperDateGetMinutes(date), length, '0')
      }
      var fs = function (match, length) {
        return padStart(helperDateGetSeconds(date), length, '0')
      }
      var fS = function (match, length) {
        return padStart(date.getMilliseconds(), length, '0')
      }
      var fZ = function (match, length) {
        // 支持半小时/45 分钟时区（如 +05:30、+05:45）
        var offset = date.getTimezoneOffset()
        var absOffset = helperMathAbs(offset)
        var zoneHours = helperMathFloor(absOffset / 60)
        var zoneMinutes = absOffset % 60
        var sign = offset <= 0 ? '+' : '-'
        return handleCustomTemplate(date, formats, match, sign + padStart(zoneHours, 2, '0') + (length === 1 ? ':' : '') + padStart(zoneMinutes, 2, '0'))
      }
      var fW = function (match, length) {
        return padStart(handleCustomTemplate(date, formats, match, getYearWeek(date, firstDay)), length, '0')
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
          return handleCustomTemplate(date, formats, match, helperStringUpperCase(apm))
        },
        e: function (match) {
          return handleCustomTemplate(date, formats, match, date.getDay())
        },
        E: function (match) {
          return handleCustomTemplate(date, formats, match, date.getDay())
        },
        q: function (match) {
          return handleCustomTemplate(date, formats, match, helperMathFloor((helperDateGetMonth(date) + 3) / 3))
        }
      }
      return helperStringReplace(result, dateFormatRE, function (match, skip) {
        return skip || (parseDates[match] ? parseDates[match](match, match.length) : match)
      })
    }
    return staticInvalidDate
  }
  return ''
}

module.exports = toDateString
