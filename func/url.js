'use strict'

var unserialize = require('./unserialize')
var parseUrl = require('./parseUrl')
var serialize = require('./serialize')

var urlExports = {
  parseUrl: parseUrl,
  serialize: serialize,
  unserialize: unserialize
}

module.exports = urlExports
