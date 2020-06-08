var staticLocation = require('./staticLocation')

var unserialize = require('./unserialize')

var helperGetLocatOrigin = require('./helperGetLocatOrigin')

function parseURLQuery (uri) {
  return unserialize(uri.split('?')[1] || '')
}

function parseUrl (url) {
  var hashs, portText, searchs, parsed
  var href = '' + url
  if (href.indexOf('//') === 0) {
    href = (staticLocation ? staticLocation.protocol : '') + href
  } else if (href.indexOf('/') === 0) {
    href = helperGetLocatOrigin() + href
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

module.exports = parseUrl
