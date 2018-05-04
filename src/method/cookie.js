'use strict'

var baseExports = require('./base')

var decode = decodeURIComponent
var encode = encodeURIComponent

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
  *   @param {Number} expires: 几天后过期
  */
function cookie (name, value, options) {
  var inserts = []
  var isDoc = typeof document !== 'undefined'
  if (this && this.$context) {
    this.$context = null
  }
  if (baseExports.isArray(name)) {
    inserts = name
  } else if (arguments.length > 1) {
    inserts = [baseExports.objectAssign({name: name, value: value}, options)]
  } else if (baseExports.isObject(name)) {
    inserts = [name]
  }
  if (inserts.length > 0) {
    if (isDoc) {
      baseExports.arrayEach(inserts, function (obj) {
        var opts = baseExports.objectAssign({}, obj)
        var values = []
        if (opts.name) {
          values.push(encode(opts.name) + '=' + encode(baseExports.isObject(opts.value) ? JSON.stringify(opts.value) : opts.value))
          if (opts.expires !== undefined) {
            opts.expires = new Date(new Date().getTime() + parseFloat(opts.expires) * 86400000).toUTCString()
          }
          baseExports.arrayEach(['expires', 'path', 'domain', 'secure'], function (key) {
            if (opts[key] !== undefined) {
              values.push(opts[key] && key === 'secure' ? 'secure' : (key + '=' + opts[key]))
            }
          })
        }
        document.cookie = values.join('; ')
      })
    }
  } else {
    var result = {}
    if (isDoc && document.cookie) {
      baseExports.arrayEach(document.cookie.split('; '), function (val) {
        var keyIndex = val.indexOf('=')
        result[decode(val.substring(0, keyIndex))] = decode(val.substring(keyIndex + 1) || '')
      })
    }
    return arguments.length === 1 ? result[name] : result
  }
}

baseExports.objectAssign(cookie, {
  setItem: function (name, key) {
    cookie(name, key)
  },
  getItem: function (name) {
    return cookie(name)
  },
  removeItem: function (name) {
    cookie(name, null, {expires: -1})
  },
  getJSON: function () {
    return cookie()
  }
})

var cookieExports = {
  cookie: cookie
}

module.exports = cookieExports
