import { arrayEach } from '../core/base'

var $locat = location

function hash () {
  return ($locat.hash.split('#')[1] || '').split('?')[0] || ''
}

function parse (uri) {
  var result = {}
  var params = uri.split('?')[1] || ''
  if (params) {
    arrayEach(params.split('&'), function (param) {
      var items = param.split('=')
      result[decodeURIComponent(items[0])] = decodeURIComponent(items[1] || '')
    })
  }
  return result
}

/**
  * 获取地址栏信息
  * @return Object
  */
export function locat () {
  return {
    port: $locat.port,
    href: $locat.href,
    host: $locat.host,
    hostname: $locat.hostname,
    protocol: $locat.protocol,
    origin: $locat.origin,
    hash: hash(),
    query: parse($locat.hash),
    params: parse($locat.search)
  }
}
