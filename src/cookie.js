var setupDefaults = require('./setupDefaults')
var staticDocument = require('./staticDocument')

var staticDecodeURIComponent = require('./staticDecodeURIComponent')
var staticEncodeURIComponent = require('./staticEncodeURIComponent')

var helperStringReplace = require('./helperStringReplace')
var helperStringSubstring = require('./helperStringSubstring')
var helperNewEmptyDate = require('./helperNewEmptyDate')
var helperDateGetTime = require('./helperDateGetTime')
var helperStringIndexOf = require('./helperStringIndexOf')
var helperNewDateByTime = require('./helperNewDateByTime')

var isArray = require('./isArray')
var isObject = require('./isObject')
var isDate = require('./isDate')
var isUndefined = require('./isUndefined')
var includes = require('./includes')
var keys = require('./keys')

var assign = require('./assign')

var getWhatYear = require('./getWhatYear')
var getWhatMonth = require('./getWhatMonth')
var getWhatDay = require('./getWhatDay')

var COOKIE_ATTRS = ['expires', 'path', 'domain', 'secure']

var UNIT_RE = /^([0-9]+)(y|M|d|H|h|m|s)$/
var TS_RE = /^[0-9]{11,13}$/

function toCookieUnitTime (unit, expires) {
  var num = parseFloat(expires)
  var nowdate = helperNewEmptyDate()
  var time = helperDateGetTime(nowdate)
  switch (unit) {
    case 'y': return helperDateGetTime(getWhatYear(nowdate, num))
    case 'M': return helperDateGetTime(getWhatMonth(nowdate, num))
    case 'd': return helperDateGetTime(getWhatDay(nowdate, num))
    case 'h':
    case 'H': return time + num * 60 * 60 * 1000
    case 'm': return time + num * 60 * 1000
    case 's': return time + num * 1000
  }
  return time
}

function toCookieUTCString (dateOrTime) {
  return (isDate(dateOrTime) ? dateOrTime : helperNewDateByTime(dateOrTime)).toUTCString()
}

function normalizeExpires (expires) {
  if (isNaN(expires)) {
    return helperStringReplace(expires, UNIT_RE, function (text, num, unit) {
      return toCookieUTCString(toCookieUnitTime(unit, num))
    })
  }
  if (TS_RE.test(expires) || isDate(expires)) {
    return toCookieUTCString(expires)
  }
  return toCookieUTCString(toCookieUnitTime('d', expires))
}

function cookie (name, value, options) {
  if (!staticDocument) {
    return false
  }
  var args = arguments
  var inserts
  if (isArray(name)) {
    inserts = name
  } else if (args.length > 1) {
    inserts = [assign({ name: name, value: value }, options)]
  } else if (isObject(name)) {
    inserts = [name]
  }

  // 写模式
  if (inserts && inserts.length > 0) {
    for (var i = 0; i < inserts.length; i++) {
      var obj = inserts[i]
      var opts = assign({}, setupDefaults.cookies, obj)
      if (opts.name) {
        var values = []
        var expires = opts.expires
        values.push(staticEncodeURIComponent(opts.name) + '=' + staticEncodeURIComponent(isObject(opts.value) ? JSON.stringify(opts.value) : opts.value))
        if (expires) {
          opts.expires = normalizeExpires(expires)
        }
        for (var a = 0; a < COOKIE_ATTRS.length; a++) {
          var key = COOKIE_ATTRS[a]
          if (!isUndefined(opts[key])) {
            values.push(opts[key] && key === 'secure' ? key : (key + '=' + opts[key]))
          }
        }
        staticDocument.cookie = values.join('; ')
      }
    }
    return true
  }

  // 读模式
  var result = {}
  var cookies = staticDocument.cookie
  if (cookies) {
    var parts = cookies.split('; ')
    for (var j = 0; j < parts.length; j++) {
      var val = parts[j]
      var keyIndex = helperStringIndexOf(val, '=')
      result[staticDecodeURIComponent(helperStringSubstring(val, 0, keyIndex))] = staticDecodeURIComponent(helperStringSubstring(val, keyIndex + 1) || '')
    }
  }
  return args.length === 1 ? result[name] : result
}

function hasCookieItem (value) {
  return includes(keys(cookie()), value)
}

function getCookieItem (name) {
  return cookie(name)
}

function setCookieItem (name, value, options) {
  cookie(name, value, options)
  return cookie
}

function removeCookieItem (name, options) {
  cookie(name, '', assign({ expires: -1 }, setupDefaults.cookies, options))
}

function cookieKeys () {
  return keys(cookie())
}

function cookieJson () {
  return cookie()
}

assign(cookie, {
  has: hasCookieItem,
  set: setCookieItem,
  setItem: setCookieItem,
  get: getCookieItem,
  getItem: getCookieItem,
  remove: removeCookieItem,
  removeItem: removeCookieItem,
  keys: cookieKeys,
  getJSON: cookieJson
})

module.exports = cookie
