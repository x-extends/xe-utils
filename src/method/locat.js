'use strict'

var baseExports = require('./base')

var $locat = null

if (typeof location !== 'undefined') {
  $locat = location
}

function parseParams (uri) {
  var result = {}
  var params = uri.split('?')[1] || ''
  if (params) {
    baseExports.arrayEach(params.split('&'), function (param) {
      var items = param.split('=')
      result[decodeURIComponent(items[0])] = decodeURIComponent(items[1] || '')
    })
  }
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
  var href = '' + url
  if (href.indexOf('/') === 0) {
    href = getLocatOrigin() + href
  }
  var searchs = href.replace(/#.*/, '').match(/(\?.*)/)
  var parsed = {
    href: href,
    hash: '',
    host: '',
    hostname: '',
    protocol: '',
    port: '',
    search: searchs ? searchs[1] : ''
  }
  parsed.path = href.replace(/^([a-z0-9.+-]*:)\/\//, function (text, protocol) {
    parsed.protocol = protocol
    return ''
  }).replace(/^([a-z0-9.+-]*)(:\d+)?\//, function (text, hostname, port) {
    var portText = port || ''
    parsed.port = portText.replace(':', '')
    parsed.hostname = hostname
    parsed.host = hostname + portText
    return '/'
  }).replace(/(#.*)/, function (text, hash) {
    parsed.hash = hash
    return ''
  })
  var hashs = parsed.hash.match(/#((.*)\?|(.*))/)
  parsed.pathname = parsed.path.replace(/(\?|#.*).*/, '')
  parsed.origin = parsed.protocol + '//' + parsed.host
  parsed.hashKey = hashs ? (hashs[2] || '') : ''
  parsed.hashQuery = parseParams(parsed.hash)
  parsed.searchQuery = parseParams(parsed.search)
  return parsed
}

/**
  * 获取地址栏信息
  * @return Object
  */
function locat () {
  return $locat ? parseUrl($locat.href) : {}
}

var locatExports = {
  parseUrl: parseUrl,
  getBaseURL: getBaseURL,
  locat: locat
}

module.exports = locatExports
