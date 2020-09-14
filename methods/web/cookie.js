var setupDefaults = require('../setupDefaults')
var staticDocument = require('../static/staticDocument')
var staticDecodeURIComponent = require('../static/staticDecodeURIComponent')
var staticEncodeURIComponent = require('../static/staticEncodeURIComponent')

var isArray = require('../base/isArray')
var isObject = require('../base/isObject')
var isDate = require('../base/isDate')
var isUndefined = require('../base/isUndefined')
var includes = require('../array/includes')
var keys = require('../base/keys')

var assign = require('../object/assign')

var arrayEach = require('../array/arrayEach')

var helperNewDate = require('../date/helperNewDate')
var helperGetDateTime = require('../date/helperGetDateTime')
var getWhatYear = require('../date/getWhatYear')
var getWhatMonth = require('../date/getWhatMonth')
var getWhatDay = require('../date/getWhatDay')

function toCookieUnitTime (unit, expires) {
  var num = parseFloat(expires)
  var nowdate = helperNewDate()
  var time = helperGetDateTime(nowdate)
  switch (unit) {
    case 'y': return helperGetDateTime(getWhatYear(nowdate, num))
    case 'M': return helperGetDateTime(getWhatMonth(nowdate, num))
    case 'd': return helperGetDateTime(getWhatDay(nowdate, num))
    case 'h':
    case 'H': return time + num * 60 * 60 * 1000
    case 'm': return time + num * 60 * 1000
    case 's': return time + num * 1000
  }
  return time
}

function toCookieUTCString (date) {
  return (isDate(date) ? date : new Date(date)).toUTCString()
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
  if (staticDocument) {
    var opts, expires, values, result, cookies, keyIndex
    var inserts = []
    var args = arguments
    if (isArray(name)) {
      inserts = name
    } else if (args.length > 1) {
      inserts = [assign({ name: name, value: value }, options)]
    } else if (isObject(name)) {
      inserts = [name]
    }
    if (inserts.length > 0) {
      arrayEach(inserts, function (obj) {
        opts = assign({}, setupDefaults.cookies, obj)
        values = []
        if (opts.name) {
          expires = opts.expires
          values.push(staticEncodeURIComponent(opts.name) + '=' + staticEncodeURIComponent(isObject(opts.value) ? JSON.stringify(opts.value) : opts.value))
          if (expires) {
            if (isNaN(expires)) {
              // UTCString || Unit
              expires = expires.replace(/^([0-9]+)(y|M|d|H|h|m|s)$/, function (text, num, unit) {
                return toCookieUTCString(toCookieUnitTime(unit, num))
              })
            } else if (/^[0-9]{11,13}$/.test(expires) || isDate(expires)) {
              // Date || now
              expires = toCookieUTCString(expires)
            } else {
              // day
              expires = toCookieUTCString(toCookieUnitTime('d', expires))
            }
            opts.expires = expires
          }
          arrayEach(['expires', 'path', 'domain', 'secure'], function (key) {
            if (!isUndefined(opts[key])) {
              values.push(opts[key] && key === 'secure' ? key : (key + '=' + opts[key]))
            }
          })
        }
        staticDocument.cookie = values.join('; ')
      })
      return true
    } else {
      result = {}
      cookies = staticDocument.cookie
      if (cookies) {
        arrayEach(cookies.split('; '), function (val) {
          keyIndex = val.indexOf('=')
          result[staticDecodeURIComponent(val.substring(0, keyIndex))] = staticDecodeURIComponent(val.substring(keyIndex + 1) || '')
        })
      }
      return args.length === 1 ? result[name] : result
    }
  }
  return false
}

function hasCookieItem (key) {
  return includes(cookieKeys(), key)
}

function getCookieItem (name, key) {
  return cookie(name, key)
}

function setCookieItem (name, key, options) {
  cookie(name, key, options)
  return cookie
}

function removeCookieItem (name, options) {
  cookie(name, 0, assign({ expires: -1 }, setupDefaults.cookies, options))
}

function cookieKeys () {
  return keys(cookie())
}

assign(cookie, {
  _c: false,
  isKey: hasCookieItem,
  has: hasCookieItem,
  set: setCookieItem,
  setItem: setCookieItem,
  get: getCookieItem,
  getItem: cookie,
  remove: removeCookieItem,
  removeItem: removeCookieItem,
  keys: cookieKeys,
  getJSON: cookie
})

module.exports = cookie
