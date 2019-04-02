'use strict'

var setupDefaults = require('../core/setup')
var baseExports = require('./base')
var dateExports = require('./date')

var isBowseDoc = typeof document !== 'undefined'

function toCookieUnitTime (unit, expires) {
  var num = parseFloat(expires)
  var nowdate = new Date()
  var time = nowdate.getTime()
  switch (unit) {
    case 'y': return dateExports.getWhatYear(nowdate, num).getTime()
    case 'M': return dateExports.getWhatMonth(nowdate, num).getTime()
    case 'd': return dateExports.getWhatDay(nowdate, num).getTime()
    case 'h':
    case 'H': return time + num * 60 * 60 * 1000
    case 'm': return time + num * 60 * 1000
    case 's': return time + num * 1000
  }
  return time
}

function toCookieUTCString (date) {
  return (baseExports.isDate(date) ? date : new Date(date)).toUTCString()
}

/**
  * cookie操作函数
  * @param {String/Array/Object} name 键/数组/对象
  * @param {String} value 值
  * @param {Object} options 参数
  *   @param {String} name: 键
  *   @param {Object} value: 值
  *   @param {String} path: 路径
  *   @param {String} domain: 作用域
  *   @param {Boolean} secure: 设置为安全的,只能用https协议
  *   @param {Number} expires: 过期时间,可以指定日期或者字符串，默认天
  */
function cookie (name, value, options) {
  if (isBowseDoc) {
    var opts, expires, values, result, cookies, keyIndex
    var inserts = []
    var args = arguments
    var decode = decodeURIComponent
    var encode = encodeURIComponent
    var $dom = document
    var arrayEach = baseExports.each
    var objectAssign = baseExports.assign
    var isObject = baseExports.isObject
    if (this && this.$context) {
      this.$context = null
    }
    if (baseExports.isArray(name)) {
      inserts = name
    } else if (args.length > 1) {
      inserts = [objectAssign({ name: name, value: value }, options)]
    } else if (isObject(name)) {
      inserts = [name]
    }
    if (inserts.length > 0) {
      arrayEach(inserts, function (obj) {
        opts = objectAssign({}, setupDefaults.cookies, obj)
        values = []
        if (opts.name) {
          expires = opts.expires
          values.push(encode(opts.name) + '=' + encode(isObject(opts.value) ? JSON.stringify(opts.value) : opts.value))
          if (expires) {
            if (isNaN(expires)) {
              // UTCString || Unit
              expires = expires.replace(/^([0-9]+)(y|M|d|H|h|m|s)$/, function (text, num, unit) {
                return toCookieUTCString(toCookieUnitTime(unit, num))
              })
            } else if (/^[0-9]{11,13}$/.test(expires) || baseExports.isDate(expires)) {
              // Date || now
              expires = toCookieUTCString(expires)
            } else {
              // day
              expires = toCookieUTCString(toCookieUnitTime('d', expires))
            }
            opts.expires = expires
          }
          arrayEach(['expires', 'path', 'domain', 'secure'], function (key) {
            if (opts[key] !== undefined) {
              values.push(opts[key] && key === 'secure' ? key : (key + '=' + opts[key]))
            }
          })
        }
        $dom.cookie = values.join('; ')
      })
      return true
    } else {
      result = {}
      cookies = $dom.cookie
      if (cookies) {
        arrayEach(cookies.split('; '), function (val) {
          keyIndex = val.indexOf('=')
          result[decode(val.substring(0, keyIndex))] = decode(val.substring(keyIndex + 1) || '')
        })
      }
      return args.length === 1 ? result[name] : result
    }
  }
  return false
}

function isCookieKey (key) {
  return baseExports.includes(cookieKeys(), key)
}

function setCookieItem (name, key, options) {
  cookie(name, key, options)
  return cookie
}

function removeCookieItem (name, options) {
  cookie(name, 0, baseExports.assign({ expires: -1 }, setupDefaults.cookies, options))
}

function cookieKeys () {
  return baseExports.keys(cookie())
}

baseExports.assign(cookie, {
  _c: false,
  isKey: isCookieKey,
  set: setCookieItem,
  setItem: setCookieItem,
  get: cookie,
  getItem: cookie,
  remove: removeCookieItem,
  removeItem: removeCookieItem,
  keys: cookieKeys,
  getJSON: cookie
})

var cookieExports = {
  cookie: cookie
}

module.exports = cookieExports
