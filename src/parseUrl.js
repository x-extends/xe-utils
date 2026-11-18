var staticLocation = require('./staticLocation')

var helperGetLocatOrigin = require('./helperGetLocatOrigin')
var helperStringIndexOf = require('./helperStringIndexOf')
var helperStringReplace = require('./helperStringReplace')
var helperStringMatch = require('./helperStringMatch')

var unserialize = require('./unserialize')

function parseURLQuery (uri) {
  return unserialize(uri.split('?')[1] || '')
}

/**
 * 解析 URL 参数
 * @param ulr 字符串
 */
function parseUrl (url) {
  var hashs, portText, searchs, parsed
  var href = '' + url
  if (helperStringIndexOf(href, '//') === 0) {
    href = (staticLocation ? staticLocation.protocol : '') + href
  } else if (helperStringIndexOf(href, '/') === 0) {
    href = helperGetLocatOrigin() + href
  }
  searchs = helperStringMatch(helperStringReplace(href, /#.*/, ''), /(\?.*)/)
  parsed = {
    href: href,
    hash: '',
    host: '',
    hostname: '',
    protocol: '',
    port: '',
    search: searchs && searchs[1] && searchs[1].length > 1 ? searchs[1] : ''
  }
  parsed.path = helperStringReplace(
    helperStringReplace(
      helperStringReplace(href, /^([a-z0-9.+-]*:)\/\//, function (text, protocol) {
        parsed.protocol = protocol
        return ''
      }),
      /^([a-z0-9.+-]*)(:\d+)?\/?/,
      function (text, hostname, port) {
        portText = port || ''
        parsed.port = helperStringReplace(portText, ':', '')
        parsed.hostname = hostname
        parsed.host = hostname + portText
        return '/'
      }
    ),
    /(#.*)/,
    function (text, hash) {
      parsed.hash = hash.length > 1 ? hash : ''
      return ''
    }
  )
  hashs = helperStringMatch(parsed.hash, /#((.*)\?|(.*))/)
  parsed.pathname = helperStringReplace(parsed.path, /(\?|#.*).*/, '')
  parsed.origin = parsed.protocol + '//' + parsed.host
  parsed.hashKey = hashs ? (hashs[2] || hashs[1] || '') : ''
  parsed.hashQuery = parseURLQuery(parsed.hash)
  parsed.searchQuery = parseURLQuery(parsed.search)
  return parsed
}

module.exports = parseUrl
