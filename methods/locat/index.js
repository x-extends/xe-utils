var unserialize = require('./unserialize')
var parseUrl = require('./parseUrl')
var getBaseURL = require('./getBaseURL')
var locat = require('./locat')
var serialize = require('./serialize')

var locatExports = {
  parseUrl: parseUrl,
  getBaseURL: getBaseURL,
  locat: locat,
  serialize: serialize,
  unserialize: unserialize
}

module.exports = locatExports
