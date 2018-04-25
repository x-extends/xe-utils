'use strict'

var baseExports = require('./base')

var $locat = null

if (typeof location !== 'undefined') {
  $locat = location
}

function hash () {
  return ($locat.hash.split('#')[1] || '').split('?')[0] || ''
}

function parse (uri) {
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
  return $locat.origin || ($locat.protocol + '//' + $locat.host)
}

function getBaseURL () {
  var pathname = $locat.pathname
  var lastIndex = baseExports.lastIndexOf(pathname, '/') + 1
  return getLocatOrigin() + (lastIndex === pathname.length ? pathname : pathname.substring(0, lastIndex))
}

/**
  * 获取地址栏信息
  * @return Object
  */
function locat () {
  return $locat ? {
    port: $locat.port,
    href: $locat.href,
    host: $locat.host,
    hostname: $locat.hostname,
    protocol: $locat.protocol,
    origin: getLocatOrigin(),
    hash: hash(),
    query: parse($locat.hash),
    params: parse($locat.search)
  } : {}
}

var locatExports = {
  getBaseURL: getBaseURL,
  locat: locat
}

module.exports = locatExports
