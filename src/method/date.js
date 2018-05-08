'use strict'

var baseExports = require('./base')

/**
 * 返回时间戳
 *
 * @returns Number
 */
var timestamp = Date.now || function () {
  return new Date().getTime()
}
var now = timestamp

var dateFormatRules = [
  {rules: [['yyyy', 4], ['yyy', 3], ['yy', 2]]},
  {rules: [['MM', 2], ['M', 1]], offset: -1},
  {rules: [['dd', 2], ['d', 1]]},
  {rules: [['HH', 2], ['H', 1]]},
  {rules: [['mm', 2], ['m', 1]]},
  {rules: [['ss', 2], ['s', 1]]},
  {rules: [['SSS', 3], ['SS', 2], ['S', 1]]}
]

/**
  * 字符串转为日期
  *
  * @param {String} str 日期或数字
  * @param {String} format 解析日期格式(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、SSS毫秒)
  * @return {String}
  */
function stringToDate (str, format) {
  if (str) {
    if (baseExports.isDate(str)) {
      return str
    }
    if (/^[0-9]{11,13}$/.test(str)) {
      return new Date(str)
    }
    if (baseExports.isString(str)) {
      format = format || 'yyyy-MM-dd HH:mm:ss.SSS'
      var dates = []
      baseExports.arrayEach(dateFormatRules, function (item) {
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

/**
  * 日期格式化为字符串
  *
  * @param {Date} date 日期或数字
  * @param {String} format 输出日期格式(yyyy年份、MM月份、dd天、HH小时、mm分钟、ss秒、S毫秒、E星期几、q季度)
  * @return {String}
  */
function dateToString (date, format) {
  if (date) {
    date = stringToDate(date)
    if (baseExports.isDate(date)) {
      var weeks = ['日', '一', '二', '三', '四', '五', '六']
      var resDate = {
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'M+': date.getMonth() + 1,
        'E+': date.getDay(),
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'S': date.getMilliseconds()
      }
      var result = String(format || 'yyyy-MM-dd HH:mm:ss').replace(/(y+)/, function ($1) {
        return ('' + date.getFullYear()).substr(4 - $1.length)
      })
      for (var key in resDate) {
        if (resDate.hasOwnProperty(key)) {
          var val = '' + resDate[key]
          result = result.replace(new RegExp('(' + key + ')'), function ($1) {
            return (key === 'q+' || key === 'E+') ? weeks[val] : ($1.length === 1 ? val : ('00' + val).substr(val.length))
          })
        }
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
  * @param {String} year 年(默认当前年)、前几个年(数值)、后几个年(数值)
  * @return {Date}
  */
function getWhatYear (date, year) {
  var currentDate = stringToDate(date)
  if (year) {
    var number = year && !isNaN(year) ? year : 0
    currentDate.setFullYear(currentDate.getFullYear() + number)
  }
  return currentDate
}

/**
  * 返回前几月或后几月的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当前月)、前几个月、后几个月
  * @param {String} mode 获取哪天(默认当前天)、月初(first)、月末(last)
  * @return {Date}
  */
function getWhatMonth (date, month, mode) {
  var currentDate = stringToDate(date)
  var number = month && !isNaN(month) ? month : 0
  var oldH = currentDate.getHours()
  var oldm = currentDate.getMinutes()
  var olds = currentDate.getSeconds()
  var oldS = currentDate.getMilliseconds()
  if (mode === 'first') {
    var oldY = currentDate.getFullYear()
    var oldM = currentDate.getMonth()
    if ((oldM += number) < 0) {
      return new Date(oldY - Math.ceil((oldM = Math.abs(oldM)) / 12), 12 - (oldM % 12 || 1), 1, oldH, oldm, olds, oldS)
    }
    return new Date(oldY + Math.floor(oldM / 12), oldM % 12, 1, oldH, oldm, olds, oldS)
  } else if (mode === 'last') {
    return new Date(getWhatMonth(currentDate, number + 1, 'first').getTime() - 86400000)
  }
  var oldD = currentDate.getDate()
  var dateTime = getWhatMonth(currentDate, number, 'first')
  var newM = dateTime.getMonth()
  dateTime.setDate(oldD)
  while (newM < dateTime.getMonth()) {
    dateTime.setDate(--oldD)
  }
  return dateTime
}

/**
  * 返回前几周或后几周的星期几
  *
  * @param {Date} date 日期
  * @param {Number} week 周(默认当前周)、前几周、后几周
  * @param {Number} mode 星期天(默认0)、星期一(1)、星期二(2)、星期三(3)、星期四(4)、星期五(5)、星期六(6)
  * @return {Date}
  */
function getWhatWeek (date, week, mode) {
  var currentDate = stringToDate(date)
  var customDay = Number(/^[0-7]$/.test(mode) ? mode : currentDate.getDay())
  var currentDay = currentDate.getDay()
  var time = currentDate.getTime()
  var whatDayTime = time + ((customDay === 0 ? 7 : customDay) - (currentDay === 0 ? 7 : currentDay)) * 86400000
  if (week && !isNaN(week)) {
    whatDayTime += week * 604800000
  }
  return new Date(whatDayTime)
}

/**
  * 返回前几天或后几天的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} day 天(默认当天)、前几天、后几天
  * @return {Date}
  */
function getWhatDay (date, day) {
  var currentDate = stringToDate(date)
  if (day) {
    return new Date(currentDate.getTime() + (day && !isNaN(day) ? day * 86400000 : 0))
  }
  return currentDate
}

/**
  * 返回当前日期月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当月)、前几个月、后几个月
  * @return {Number}
  */
function getDaysOfMonth (date, month) {
  return Math.floor((getWhatMonth(date, month, 'last').getTime() - getWhatMonth(date, month, 'first').getTime()) / 86400000) + 1
}

var dateDiffRules = [['yyyy', 31536000000], ['MM', 2592000000], ['dd', 86400000], ['HH', 3600000], ['mm', 60000], ['ss', 1000], ['S', 0]]

/**
  * 返回两个日期之间差距,如果结束日期小于开始日期done为fasle
  *
  * @param {Date} startDate 开始日期
  * @param {Date} endDate 结束日期或当期日期
  * @param {Date} rule 自定义计算规则
  * @return {Object}
  */
function getDateDiff (startDate, endDate, rules) {
  var result = {done: false}
  var startTime = stringToDate(startDate).getTime()
  var endTime = endDate ? stringToDate(endDate).getTime() : new Date()
  if (startTime < endTime) {
    var item
    var diffTime = endTime - startTime
    var rule = rules && rules.length > 0 ? rules : dateDiffRules
    result.done = true
    for (var index = 0, len = rule.length; index < len; index++) {
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
  now: now,
  stringToDate: stringToDate,
  dateToString: dateToString,
  getWhatYear: getWhatYear,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getDaysOfMonth: getDaysOfMonth,
  getDateDiff: getDateDiff
}

module.exports = dateExports
