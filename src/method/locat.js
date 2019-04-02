'use strict'

var baseExports = require('./base')

var $locat = typeof location === 'undefined' ? 0 : location
var decode = decodeURIComponent
var encode = encodeURIComponent

function parseURLQuery (uri) {
  return parseParams(uri.split('?')[1] || '')
}

/**
 * 查询参数序列化
 *
 * @param {String} query 反序列化的字符串
 */
function parseParams (str) {
  var items
  var result = {}
  if (str && baseExports.isString(str)) {
    baseExports.each(str.split('&'), function (param) {
      items = param.split('=')
      result[decode(items[0])] = decode(items[1] || '')
    })
  }
  return result
}

function stringifyParams (resultVal, resultKey, isArr) {
  var _arr
  var result = []
  baseExports.each(resultVal, function (item, key) {
    _arr = baseExports.isArray(item)
    if (baseExports.isPlainObject(item) || _arr) {
      result = result.concat(stringifyParams(item, resultKey + '[' + key + ']', _arr))
    } else {
      result.push(encode(resultKey + '[' + (isArr ? '' : key) + ']') + '=' + encode(item === null ? '' : item))
    }
  })
  return result
}

function getLocatOrigin () {
  return $locat ? ($locat.origin || ($locat.protocol + '//' + $locat.host)) : ''
}

function getBaseURL () {
  if ($locat) {
    var pathname = $locat.pathname
    var lastIndex = baseExports.lastIndexOf(pathname, '/') + 1
    return getLocatOrigin() + (lastIndex === pathname.length ? pathname : pathname.substring(0, lastIndex))
  }
  return ''
}

function parseUrl (url) {
  var hashs, portText, searchs, parsed
  var href = '' + url
  if (href.indexOf('//') === 0) {
    href = ($locat ? $locat.protocol : '') + href
  } else if (href.indexOf('/') === 0) {
    href = getLocatOrigin() + href
  }
  searchs = href.replace(/#.*/, '').match(/(\?.*)/)
  parsed = {
    href: href,
    hash: '',
    host: '',
    hostname: '',
    protocol: '',
    port: '',
    search: searchs && searchs[1] && searchs[1].length > 1 ? searchs[1] : ''
  }
  parsed.path = href.replace(/^([a-z0-9.+-]*:)\/\//, function (text, protocol) {
    parsed.protocol = protocol
    return ''
  }).replace(/^([a-z0-9.+-]*)(:\d+)?\/?/, function (text, hostname, port) {
    portText = port || ''
    parsed.port = portText.replace(':', '')
    parsed.hostname = hostname
    parsed.host = hostname + portText
    return '/'
  }).replace(/(#.*)/, function (text, hash) {
    parsed.hash = hash.length > 1 ? hash : ''
    return ''
  })
  hashs = parsed.hash.match(/#((.*)\?|(.*))/)
  parsed.pathname = parsed.path.replace(/(\?|#.*).*/, '')
  parsed.origin = parsed.protocol + '//' + parsed.host
  parsed.hashKey = hashs ? (hashs[2] || hashs[1] || '') : ''
  parsed.hashQuery = parseURLQuery(parsed.hash)
  parsed.searchQuery = parseURLQuery(parsed.search)
  return parsed
}

/**
  * 获取地址栏信息
  *
  * @return Object
  */
function locat () {
  return $locat ? parseUrl($locat.href) : {}
}

/**
 * 查询参数序列化
 *
 * @param {Object} query 序列化的对象
 */
function serialize (query) {
  var _arr
  var params = []
  baseExports.each(query, function (item, key) {
    if (item !== undefined) {
      _arr = baseExports.isArray(item)
      if (baseExports.isPlainObject(item) || _arr) {
        params = params.concat(stringifyParams(item, key, _arr))
      } else {
        params.push(encode(key) + '=' + encode(item === null ? '' : item))
      }
    }
  })
  return params.join('&').replace(/%20/g, '+')
}

var locatExports = {
  parseUrl: parseUrl,
  getBaseURL: getBaseURL,
  locat: locat,
  serialize: serialize,
  unserialize: parseParams
}

module.exports = locatExports
