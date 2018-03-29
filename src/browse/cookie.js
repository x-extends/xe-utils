import { isArray, isObject, objectAssign, arrayEach } from '../core/base'

/**
  * cookie操作函数
  * @param String/Array/Object name 键/数组/对象
  * @param String value 值
  * @param Object options 参数
  *   @param String name: 键
  *   @param Object value: 值
  *   @param String path: 路径
  *   @param String domain: 作用域
  *   @param Number expires: 几天后过期
  */
export function cookie (name, value, options) {
  var inserts = []
  if (isArray(name)) {
    inserts = name
  } else if (arguments.length > 1) {
    inserts = [objectAssign({name: name, value: value}, options)]
  } else if (isObject(name)) {
    inserts = [name]
  }
  if (inserts.length > 0) {
    arrayEach(inserts, function (obj) {
      var opts = objectAssign({}, obj)
      var values = []
      if (opts.name) {
        values.push(encodeURIComponent(opts.name) + '=' + encodeURIComponent(isObject(opts.value) ? JSON.stringify(opts.value) : opts.value))
        if (opts.expires !== undefined) {
          opts.expires = new Date(new Date().getTime() + parseFloat(opts.expires) * 86400000).toUTCString()
        }
        arrayEach(['expires', 'path', 'domain', 'secure'], function (key) {
          if (opts[key] !== undefined) {
            values.push(key + '=' + opts[key])
          }
        })
      }
      document.cookie = values.join('; ')
    })
  } else {
    var result = {}
    if (document.cookie) {
      arrayEach(document.cookie.split('; '), function (val) {
        var keyIndex = val.indexOf('=')
        result[decodeURIComponent(val.substring(0, keyIndex))] = decodeURIComponent(val.substring(keyIndex + 1) || '')
      })
    }
    return arguments.length === 1 ? result[name] : result
  }
}

objectAssign(cookie, {
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
